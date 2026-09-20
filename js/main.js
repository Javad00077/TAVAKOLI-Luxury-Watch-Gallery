/**
 * TAVAKOLI — LUXURY WATCH GALLERY
 * Master JavaScript Engine (Vanilla JS + GSAP + ScrollTrigger)
 * Production-ready for GitHub Pages & standalone browsers
 */

(function () {
  'use strict';

  // Official WhatsApp URL
  const WHATSAPP_URL = 'https://wa.me/qr/3DDS2KO3LDMOC1';

  document.addEventListener('DOMContentLoaded', () => {
    initHeaderAndMobileMenu();
    initSearchModal();
    initHeroVideoScrub();
    initGSAPAnimations();
    initThemeTransitions();
    initProductFilters();
    initFloatingWhatsApp();
    initForms();
  });

  /* ==========================================================================
     1. Header & Full-screen Mobile Menu
     ========================================================================== */
  function initHeaderAndMobileMenu() {
    const header = document.querySelector('.site-header');
    const menuToggle = document.querySelector('.menu-toggle-btn');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');

    // Sticky header shadow & scroll reaction
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (header) {
        if (scrollY > 60) {
          header.classList.add('shadow-glass');
        } else {
          header.classList.remove('shadow-glass');
        }
      }
    }, { passive: true });

    // Mobile Menu Toggle
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        menuToggle.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';

        // Animate links on open
        if (isOpen && window.gsap) {
          gsap.fromTo('.mobile-menu-links li', 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
          );
        }
      });

      // Close menu when clicking link
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
          menuToggle.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }
  }

  /* ==========================================================================
     2. Search Modal
     ========================================================================== */
  function initSearchModal() {
    const searchBtns = document.querySelectorAll('[data-action="open-search"]');
    const searchModal = document.getElementById('search-modal');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input-field');
    const searchResults = document.getElementById('search-results-list');

    if (!searchModal) return;

    searchBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        searchModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => searchInput && searchInput.focus(), 150);
      });
    });

    if (searchClose) {
      searchClose.addEventListener('click', () => {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchModal.classList.contains('active')) {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchModal.classList.add('active');
        setTimeout(() => searchInput && searchInput.focus(), 150);
      }
    });

    // Simple Persian instant search
    if (searchInput && searchResults) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        const items = searchResults.querySelectorAll('.search-result-item');
        let matches = 0;

        items.forEach(item => {
          const text = item.textContent.toLowerCase();
          if (query === '' || text.includes(query)) {
            item.style.display = 'flex';
            matches++;
          } else {
            item.style.display = 'none';
          }
        });

        const noResult = document.getElementById('search-no-result');
        if (noResult) {
          noResult.style.display = (matches === 0 && query !== '') ? 'block' : 'none';
        }
      });
    }
  }

  /* ==========================================================================
     3. Cinematic Hero Video Scrubbing & Fallback
     ========================================================================== */
  function initHeroVideoScrub() {
    const heroWrapper = document.querySelector('.hero-scroll-wrapper');
    const heroStage = document.querySelector('.hero-sticky-stage');
    const video = document.getElementById('tavakoli-hero-video');
    const playToggleBtn = document.getElementById('hero-play-toggle');
    const soundToggleBtn = document.getElementById('hero-sound-toggle');
    const progressBar = document.getElementById('hero-scrub-bar');
    const stepPanels = document.querySelectorAll('.hero-step-panel');

    if (!heroWrapper || !video) return;

    let isUserPlaying = false;
    let targetTime = 0;
    let isSeeking = false;
    let seekQueued = false;

    // Ensure video maintains 100% crisp opacity at all times
    video.style.opacity = '1';

    function markVideoReady() {
      if (video.duration && isFinite(video.duration) && video.duration > 0) {
        if (!isUserPlaying) {
          video.pause();
        }
        // Sync to current scroll position if page was refreshed midway
        if (window.ScrollTrigger) {
          const triggers = ScrollTrigger.getAll();
          const st = triggers.find(t => t.trigger === heroWrapper);
          if (st) {
            targetTime = st.progress * (video.duration - 0.04);
            applySeek();
          }
        }
      }
    }

    video.muted = true;
    video.playsInline = true;

    video.addEventListener('loadedmetadata', markVideoReady);
    video.addEventListener('loadeddata', markVideoReady);
    video.addEventListener('canplay', markVideoReady);
    video.addEventListener('canplaythrough', markVideoReady);

    if (video.readyState >= 1) {
      markVideoReady();
    } else {
      try {
        video.load();
      } catch (e) {}
    }

    // High performance seek dispatcher
    function applySeek() {
      if (!video || !video.duration || isUserPlaying) return;

      if (isSeeking) {
        seekQueued = true;
        return;
      }

      const maxTime = Math.max(0, video.duration - 0.04);
      const safeTime = Math.min(Math.max(targetTime, 0.001), maxTime);

      if (Math.abs(video.currentTime - safeTime) > 0.012) {
        isSeeking = true;
        try {
          if (typeof video.fastSeek === 'function') {
            video.fastSeek(safeTime);
          } else {
            video.currentTime = safeTime;
          }
        } catch (err) {
          isSeeking = false;
        }
      }
    }

    video.addEventListener('seeked', () => {
      isSeeking = false;
      if (seekQueued && !isUserPlaying) {
        seekQueued = false;
        applySeek();
      }
    });

    // Safety watchdog: recover immediately if browser drops or delays seeked event
    setInterval(() => {
      if (isSeeking && Math.abs(video.currentTime - targetTime) > 0.02) {
        isSeeking = false;
        applySeek();
      }
    }, 45);

    // Pause autonomous play when user scrolls with mouse wheel
    heroWrapper.addEventListener('wheel', () => {
      if (isUserPlaying) {
        video.pause();
        isUserPlaying = false;
        if (playToggleBtn) {
          playToggleBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size: 18px;">play_arrow</span>';
        }
      }
    }, { passive: true });

    // Play/Pause Controller
    if (playToggleBtn) {
      playToggleBtn.addEventListener('click', () => {
        if (video.paused) {
          video.play().then(() => {
            isUserPlaying = true;
            playToggleBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size: 18px;">pause</span>';
          }).catch(() => {});
        } else {
          video.pause();
          isUserPlaying = false;
          playToggleBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size: 18px;">play_arrow</span>';
        }
      });
    }

    // Sound toggle
    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        soundToggleBtn.innerHTML = video.muted 
          ? '<span class="material-symbols-outlined" style="font-size: 18px;">volume_off</span>' 
          : '<span class="material-symbols-outlined" style="font-size: 18px;">volume_up</span>';
      });
    }

    // GSAP ScrollTrigger Integration
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      // Dedicated ScrollTrigger for Stage Pinning & Video Scrubbing
      ScrollTrigger.create({
        trigger: heroWrapper,
        start: 'top top',
        end: 'bottom bottom',
        pin: heroStage,
        pinSpacing: false,
        scrub: 0.5, // Buttery smooth momentum without lag
        onUpdate: (self) => {
          const progress = self.progress; // 0 to 1

          // If user scrolls while video was playing, hand control back to scroll
          if (isUserPlaying) {
            video.pause();
            isUserPlaying = false;
            if (playToggleBtn) {
              playToggleBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size: 18px;">play_arrow</span>';
            }
          }

          // Update Progress Bar
          if (progressBar) {
            progressBar.style.width = (progress * 100).toFixed(1) + '%';
          }

          // Scrub video currentTime smoothly with mouse scroll
          if (video.duration && isFinite(video.duration)) {
            targetTime = progress * (video.duration - 0.04);
            applySeek();
          }

          // Video stays 100% full crisp resolution
          video.style.opacity = '1';

          // Activate sequential step panels
          if (stepPanels.length > 0) {
            if (progress < 0.33) {
              activatePanel(0);
            } else if (progress < 0.68) {
              activatePanel(1);
            } else {
              activatePanel(2);
            }
          }
        }
      });

      // Ticker to ensure constant silky-smooth frame synchronization
      gsap.ticker.add(() => {
        if (!isUserPlaying && video.duration && Math.abs(video.currentTime - targetTime) > 0.02) {
          applySeek();
        }
      });

      // Refresh ScrollTrigger once DOM/Images are ready
      window.addEventListener('load', () => {
        ScrollTrigger.refresh();
      });
      window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
      });
    } else {
      // Vanilla Scroll Fallback
      window.addEventListener('scroll', () => {
        const rect = heroWrapper.getBoundingClientRect();
        const total = heroWrapper.offsetHeight - window.innerHeight;
        if (total > 0 && rect.top <= 0) {
          const progress = Math.min(Math.max(-rect.top / total, 0), 1);
          if (progressBar) progressBar.style.width = (progress * 100).toFixed(1) + '%';

          if (isUserPlaying) {
            video.pause();
            isUserPlaying = false;
            if (playToggleBtn) {
              playToggleBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size: 18px;">play_arrow</span>';
            }
          }

          if (video.duration && isFinite(video.duration)) {
            targetTime = progress * (video.duration - 0.04);
            applySeek();
          }

          video.style.opacity = '1';

          if (stepPanels.length > 0) {
            if (progress < 0.33) {
              activatePanel(0);
            } else if (progress < 0.68) {
              activatePanel(1);
            } else {
              activatePanel(2);
            }
          }
        }
      }, { passive: true });
    }

    function activatePanel(index) {
      stepPanels.forEach((panel, i) => {
        panel.classList.toggle('active', i === index);
      });
    }
  }

  /* ==========================================================================
     3.1 Global GSAP Scroll Reveals for Luxury Elements
     ========================================================================== */
  function initGSAPAnimations() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    const revealCards = document.querySelectorAll('.watch-card, .glass-panel, .brand-intro-col-visual, .craftsmanship-col-visual');
    revealCards.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    });
  }

  /* ==========================================================================
     4. Dark to Light Section Theme Transitions
     ========================================================================== */
  function initThemeTransitions() {
    const header = document.querySelector('.site-header');
    const lightSections = document.querySelectorAll('[data-theme-trigger="light"]');

    if (!header || lightSections.length === 0) return;

    if (window.ScrollTrigger) {
      lightSections.forEach(section => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 80px',
          end: 'bottom 80px',
          onEnter: () => header.classList.add('scrolled-light'),
          onLeave: () => header.classList.remove('scrolled-light'),
          onEnterBack: () => header.classList.add('scrolled-light'),
          onLeaveBack: () => header.classList.remove('scrolled-light')
        });
      });
    } else {
      window.addEventListener('scroll', () => {
        let isOverLight = false;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        lightSections.forEach(sec => {
          const top = sec.offsetTop - 80;
          const bottom = top + sec.offsetHeight;
          if (scrollY >= top && scrollY <= bottom) {
            isOverLight = true;
          }
        });

        if (isOverLight) {
          header.classList.add('scrolled-light');
        } else {
          header.classList.remove('scrolled-light');
        }
      }, { passive: true });
    }
  }

  /* ==========================================================================
     5. Product Filter Engine (products.html)
     ========================================================================== */
  function initProductFilters() {
    const filterBtns = document.querySelectorAll('[data-filter-category]');
    const sortSelect = document.getElementById('product-sort-select');
    const searchInput = document.getElementById('product-search-input');
    const productCards = document.querySelectorAll('.product-grid-card');
    const countDisplay = document.getElementById('products-count-display');

    if (productCards.length === 0) return;

    let activeCategory = 'all';
    let currentSearch = '';

    function applyFilters() {
      let visibleCount = 0;

      productCards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        const title = (card.querySelector('.watch-card-title')?.textContent || '').toLowerCase();
        const desc = (card.querySelector('.watch-card-desc')?.textContent || '').toLowerCase();

        const matchesCat = (activeCategory === 'all' || cat.includes(activeCategory));
        const matchesSearch = (currentSearch === '' || title.includes(currentSearch) || desc.includes(currentSearch));

        if (matchesCat && matchesSearch) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (countDisplay) {
        countDisplay.textContent = visibleCount;
      }
    }

    // Category button click
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active', 'bg-primary', 'text-obsidian-base'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-filter-category') || 'all';
        applyFilters();
      });
    });

    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim().toLowerCase();
        applyFilters();
      });
    }

    // Sort order
    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        const container = document.getElementById('products-grid-container');
        if (!container) return;

        const cards = Array.from(container.children);
        const val = sortSelect.value;

        cards.sort((a, b) => {
          const priceA = parseFloat(a.getAttribute('data-price') || '0');
          const priceB = parseFloat(b.getAttribute('data-price') || '0');
          if (val === 'price-desc') return priceB - priceA;
          if (val === 'price-asc') return priceA - priceB;
          return 0;
        });

        cards.forEach(card => container.appendChild(card));
      });
    }
  }

  /* ==========================================================================
     6. Floating WhatsApp Button & WhatsApp Handlers
     ========================================================================== */
  function initFloatingWhatsApp() {
    // Dynamic WhatsApp CTAs with customized message
    document.querySelectorAll('[data-whatsapp-inquiry]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const modelName = btn.getAttribute('data-whatsapp-inquiry') || 'یکی از ساعت‌های فاخر';
        const msg = encodeURIComponent(`درود بر گالری ساعت توکلی (TAVAKKOL).\nمایل به دریافت مشاوره، استعلام موجودی و هماهنگی پیرامون ساعت «${modelName}» هستم.`);
        window.open(`${WHATSAPP_URL}?text=${msg}`, '_blank');
      });
    });
  }

  /* ==========================================================================
     7. Form Submissions (VIP Concierge & Contact Form)
     ========================================================================== */
  function initForms() {
    const conciergeForms = document.querySelectorAll('.vip-concierge-form');

    conciergeForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = form.querySelector('input[type="text"]');
        const phoneInput = form.querySelector('input[type="tel"]');
        const clientName = nameInput ? nameInput.value.trim() : 'مشتری گرامی';

        // Provide feedback toast
        showLuxuryToast(`درخواست وقت اختصاصی شما با موفقیت ثبت شد. کنسیرژ توکل ظرف حداکثر ۲ ساعت کاری با شما تماس خواهد گرفت.`);
        form.reset();
      });
    });
  }

  function showLuxuryToast(message) {
    let toast = document.getElementById('tavakoli-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'tavakoli-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: #171614;
        color: #FAF9F6;
        border: 1px solid #C6A46A;
        padding: 1rem 1.5rem;
        border-radius: 2px;
        box-shadow: 0 15px 40px rgba(0,0,0,0.8);
        z-index: 9999;
        font-family: 'Vazirmatn', sans-serif;
        font-size: 0.875rem;
        max-width: 420px;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.4s ease, transform 0.4s ease;
      `;
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <span style="color:#C6A46A; font-size:1.25rem;">✓</span>
      <div>${message}</div>
    `;

    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
    }, 5500);
  }

})();
