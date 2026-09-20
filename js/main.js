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
    initCardClickToProduct();
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
        if (scrollY > 30) {
          header.classList.add('shadow-glass');
        } else {
          header.classList.remove('shadow-glass');
        }
      }
    }, { passive: true });

    function openMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.add('open');
      if (menuToggle) menuToggle.classList.add('active');
      document.body.classList.add('menu-open');

      // Animate links on open
      if (window.gsap) {
        gsap.fromTo('.mobile-menu-links li', 
          { opacity: 0, y: 15 }, 
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: 'power2.out' }
        );
      }
    }

    function closeMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.remove('open');
      if (menuToggle) menuToggle.classList.remove('active');
      document.body.classList.remove('menu-open');
    }

    // Mobile Menu Toggle
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (mobileMenu.classList.contains('open')) {
          closeMenu();
        } else {
          openMenu();
        }
      });

      // Close menu when clicking link
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          closeMenu();
        });
      });

      // Close menu on dedicated close button if present
      const closeButtons = mobileMenu.querySelectorAll('.mobile-menu-close-btn');
      closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeMenu();
        });
      });

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
          closeMenu();
        }
      });

      // Auto close on desktop resize
      window.addEventListener('resize', () => {
        if (window.innerWidth > 991 && mobileMenu.classList.contains('open')) {
          closeMenu();
        }
      }, { passive: true });
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
     3. Cinematic Hero Video Scrubbing (Silky Smooth, Slow Motion, Lag-Free)
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
    let currentRenderTime = 0;
    let isSeeking = false;
    let lastSeekTimestamp = 0;
    let rafId = null;

    // Ensure video maintains 100% crisp opacity at all times
    video.style.opacity = '1';
    video.muted = true;
    video.playsInline = true;
    video.playbackRate = 0.75; // Luxurious slow motion for playback

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
            targetTime = st.progress * Math.max(0, video.duration - 0.05);
            currentRenderTime = targetTime;
          }
        }
      }
    }

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

    // High performance smooth lerp loop (eliminates decoder traffic jams and stutter)
    function startSmoothScrubLoop() {
      if (rafId) cancelAnimationFrame(rafId);

      function loop() {
        if (!isUserPlaying && video.duration && isFinite(video.duration)) {
          // Butter-smooth, slow-motion lerp towards targetTime
          const delta = targetTime - currentRenderTime;
          if (Math.abs(delta) > 0.002) {
            // Soft slow-motion dampening: 0.065 delivers silky gradual transitions
            currentRenderTime += delta * 0.065;
          } else {
            currentRenderTime = targetTime;
          }

          const now = performance.now();
          // Seek only if video decoder has finished previous frame AND at least 32ms interval (~30fps)
          if (!video.seeking && !isSeeking && (now - lastSeekTimestamp > 32)) {
            const timeDiff = Math.abs(video.currentTime - currentRenderTime);
            if (timeDiff > 0.02) {
              isSeeking = true;
              lastSeekTimestamp = now;
              const safeTime = Math.min(Math.max(currentRenderTime, 0.001), Math.max(0, video.duration - 0.05));
              video.currentTime = safeTime;
            }
          }
        }

        rafId = requestAnimationFrame(loop);
      }

      rafId = requestAnimationFrame(loop);
    }

    startSmoothScrubLoop();

    video.addEventListener('seeked', () => {
      isSeeking = false;
    });

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
          video.playbackRate = 0.75;
          video.play().then(() => {
            isUserPlaying = true;
            playToggleBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size: 18px;">pause</span>';
          }).catch(() => {});
        } else {
          video.pause();
          isUserPlaying = false;
          currentRenderTime = video.currentTime;
          targetTime = video.currentTime;
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

    // GSAP ScrollTrigger Integration with Relaxed, Slow-Motion Scrub (1.8s momentum)
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      // Dedicated ScrollTrigger for Stage Pinning & Video Scrubbing
      ScrollTrigger.create({
        trigger: heroWrapper,
        start: 'top top',
        end: 'bottom bottom',
        pin: heroStage,
        pinSpacing: false,
        scrub: 1.8, // Luxurious, slow-motion inertia without abrupt stops or lag
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

          // Update target time for smooth render loop
          if (video.duration && isFinite(video.duration)) {
            targetTime = progress * Math.max(0, video.duration - 0.05);
          }

          // Video stays 100% full crisp resolution
          video.style.opacity = '1';

          // Activate sequential step panels
          if (stepPanels.length > 0) {
            if (progress < 0.32) {
              activatePanel(0);
            } else if (progress < 0.66) {
              activatePanel(1);
            } else {
              activatePanel(2);
            }
          }
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
            targetTime = progress * Math.max(0, video.duration - 0.05);
          }

          video.style.opacity = '1';

          if (stepPanels.length > 0) {
            if (progress < 0.32) {
              activatePanel(0);
            } else if (progress < 0.66) {
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
    // Direct WhatsApp consultation CTAs to official link
    document.querySelectorAll('[data-whatsapp-inquiry]').forEach(btn => {
      btn.setAttribute('href', WHATSAPP_URL);
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(WHATSAPP_URL, '_blank');
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

  /* ==========================================================================
     9. Product Cards -> Dedicated Product Detail Pages
     ========================================================================== */
  function initCardClickToProduct() {
    // Only run on pages that have watch cards and aren't already product.html
    if (window.location.pathname.endsWith('product.html')) return;

    const cards = document.querySelectorAll('.watch-card');
    cards.forEach(card => {
      const titleEl = card.querySelector('.watch-card-title');
      const imgWrap = card.querySelector('.watch-card-image-wrap');
      const footer = card.querySelector('.watch-card-footer');

      const titleText = titleEl ? titleEl.textContent : '';
      let targetId = 'chronograph-black';

      if (titleText.includes('تیتانیوم') || titleText.includes('سیاه')) targetId = 'chronograph-black';
      else if (titleText.includes('هریتیج') || titleText.includes('۱۹۲۸')) targetId = 'heritage-1928';
      else if (titleText.includes('توربیون') && titleText.includes('رزگلد')) targetId = 'flying-tourbillon';
      else if (titleText.includes('اسکلتون')) targetId = 'ultra-thin-skeleton';
      else if (titleText.includes('ناوی‌تایمر') || titleText.includes('اویتور')) targetId = 'aviator-navitimer';
      else if (titleText.includes('منهتن') || titleText.includes('دایور')) targetId = 'manhattan-diver';
      else if (titleText.includes('تایگر')) targetId = 'chrono-tiger';
      else if (titleText.includes('استرونومیا') || titleText.includes('دائمی')) targetId = 'astronomia-moonphase';
      else if (titleText.includes('کربن') || titleText.includes('زمرد')) targetId = 'forged-carbon-emerald';

      const targetUrl = `product.html?id=${targetId}`;

      // Make image wrap clickable
      if (imgWrap && !imgWrap.closest('a')) {
        imgWrap.style.cursor = 'pointer';
        imgWrap.setAttribute('title', 'مشاهده صفحه اختصاصی و مشخصات کامل');
        imgWrap.addEventListener('click', (e) => {
          if (!e.target.closest('a')) {
            window.location.href = targetUrl;
          }
        });
      }

      // Make title clickable
      if (titleEl && !titleEl.querySelector('a')) {
        const origHtml = titleEl.innerHTML;
        titleEl.innerHTML = `<a href="${targetUrl}" style="color: inherit; text-decoration: none; transition: color 0.2s ease;" class="hover-gold">${origHtml}</a>`;
      }

      // Add a clean "مشاهده جزئیات" link if missing
      if (footer && !footer.querySelector('.btn-view-details')) {
        const detailsBtn = document.createElement('a');
        detailsBtn.href = targetUrl;
        detailsBtn.className = 'btn btn-outline btn-sm btn-view-details';
        detailsBtn.style.padding = '0.35rem 0.65rem';
        detailsBtn.style.fontSize = '0.75rem';
        detailsBtn.textContent = 'مشاهده جزئیات';
        footer.insertBefore(detailsBtn, footer.lastElementChild);
      }
    });
  }

})();
