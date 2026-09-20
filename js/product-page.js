/**
 * TAVAKOLI WATCH GALLERY — Dedicated Single Product Page Engine
 * Handles full-screen hero, image gallery, specs tabs, live reviews & related items
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const product = window.getActiveProduct ? window.getActiveProduct() : null;
    if (!product) return;

    renderProductHero(product);
    renderQuickSpecs(product);
    renderTabsContent(product);
    renderReviewsSection(product);
    renderRelatedProducts(product);
    initGalleryInteractions(product);
    initTabSwitching();
    initReviewForm(product);
    initWishlistAndShare(product);
  });

  /* ==========================================================================
     1. HERO RENDERING
     ========================================================================== */
  function renderProductHero(p) {
    // Dynamic Title & Meta
    document.title = `${p.title} (${p.ref}) | گالری ساعت توکلی`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', `${p.title} — ${p.tagline}`);

    // Breadcrumb
    const breadcrumbCurrent = document.getElementById('product-breadcrumb-current');
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = p.title;

    // Badges & Reference
    const badgeEl = document.getElementById('product-hero-badge');
    if (badgeEl) badgeEl.textContent = p.badge;

    const refEl = document.getElementById('product-hero-ref');
    if (refEl) refEl.textContent = p.ref;

    const calibreEl = document.getElementById('product-hero-calibre');
    if (calibreEl) calibreEl.textContent = p.calibre;

    // Title & English Title
    const titleEl = document.getElementById('product-hero-title');
    if (titleEl) titleEl.textContent = p.title;

    const enTitleEl = document.getElementById('product-hero-en-title');
    if (enTitleEl) enTitleEl.textContent = p.englishTitle;

    // Price
    const priceEl = document.getElementById('product-hero-price');
    if (priceEl) priceEl.textContent = p.priceFormatted;

    // Tagline / Description
    const descEl = document.getElementById('product-hero-desc');
    if (descEl) descEl.textContent = p.description;

    // WhatsApp Action Link
    const waBtn = document.getElementById('product-hero-whatsapp-btn');
    if (waBtn) {
      waBtn.href = 'https://wa.me/qr/3DDS2KO3LDMOC1';
    }

    // Main Featured Image
    const mainImg = document.getElementById('product-main-image');
    if (mainImg && p.images && p.images.length > 0) {
      mainImg.src = p.images[0].url;
      mainImg.alt = `${p.title} - ${p.images[0].label}`;
    }

    // Thumbnails Gallery
    const thumbsContainer = document.getElementById('product-gallery-thumbs');
    if (thumbsContainer && p.images && p.images.length > 0) {
      thumbsContainer.innerHTML = p.images.map((img, idx) => `
        <button type="button" class="gallery-thumb-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="${img.label}">
          <img src="${img.url}" alt="${img.label}" loading="lazy">
          <span class="thumb-label">${img.label}</span>
        </button>
      `).join('');
    }
  }

  /* ==========================================================================
     2. QUICK SPECS CHIPS
     ========================================================================== */
  function renderQuickSpecs(p) {
    const container = document.getElementById('product-quick-specs');
    if (!container || !p.quickSpecs) return;

    container.innerHTML = p.quickSpecs.map(item => `
      <div class="quick-spec-card">
        <span class="quick-spec-label">${item.label}</span>
        <strong class="quick-spec-val">${item.val}</strong>
      </div>
    `).join('');
  }

  /* ==========================================================================
     3. TAB CONTENT RENDERING (Specs, Authenticity, Ordering)
     ========================================================================== */
  function renderTabsContent(p) {
    // 1. Technical Specs Tab
    const specsContainer = document.getElementById('tab-content-specs');
    if (specsContainer && p.technicalSpecs) {
      specsContainer.innerHTML = `
        <div class="specs-grid-layout">
          <!-- Movement Section -->
          <div class="specs-category-box glass-panel">
            <div class="specs-cat-header">
              <span class="material-symbols-outlined">settings</span>
              <h3>موتور، کالیبر و دقت زمان‌سنجی</h3>
            </div>
            <dl class="specs-dl">
              ${p.technicalSpecs.movement.map(s => `
                <div class="specs-row">
                  <dt>${s.key}</dt>
                  <dd>${s.value}</dd>
                </div>
              `).join('')}
            </dl>
          </div>

          <!-- Case & Crystal Section -->
          <div class="specs-category-box glass-panel">
            <div class="specs-cat-header">
              <span class="material-symbols-outlined">watch</span>
              <h3>قاب، آلیاژ و کریستال محافظ</h3>
            </div>
            <dl class="specs-dl">
              ${p.technicalSpecs.case.map(s => `
                <div class="specs-row">
                  <dt>${s.key}</dt>
                  <dd>${s.value}</dd>
                </div>
              `).join('')}
            </dl>
          </div>

          <!-- Strap & Clasp Section -->
          <div class="specs-category-box glass-panel">
            <div class="specs-cat-header">
              <span class="material-symbols-outlined">straighten</span>
              <h3>بند، سگک و متریال قفل</h3>
            </div>
            <dl class="specs-dl">
              ${p.technicalSpecs.strap.map(s => `
                <div class="specs-row">
                  <dt>${s.key}</dt>
                  <dd>${s.value}</dd>
                </div>
              `).join('')}
            </dl>
          </div>

          <!-- Complications & Resistance -->
          <div class="specs-category-box glass-panel">
            <div class="specs-cat-header">
              <span class="material-symbols-outlined">verified</span>
              <h3>پیچیدگی‌ها، مقاومت و کاربری</h3>
            </div>
            <dl class="specs-dl">
              ${p.technicalSpecs.functions.map(s => `
                <div class="specs-row">
                  <dt>${s.key}</dt>
                  <dd>${s.value}</dd>
                </div>
              `).join('')}
            </dl>
          </div>
        </div>
      `;
    }

    // 2. Authenticity & Heritage Tab
    const authContainer = document.getElementById('tab-content-auth');
    if (authContainer && p.authenticity) {
      authContainer.innerHTML = `
        <div class="authenticity-showcase-grid">
          <div class="auth-card glass-panel">
            <div class="auth-icon-wrap">
              <span class="material-symbols-outlined">workspace_premium</span>
            </div>
            <h3>گواهی اصالت و پلمپ رسمی ژنو</h3>
            <p>${p.authenticity.certification}</p>
            <div class="auth-stamp-pill">SWISS MADE ATELIER</div>
          </div>

          <div class="auth-card glass-panel">
            <div class="auth-icon-wrap">
              <span class="material-symbols-outlined">inventory_2</span>
            </div>
            <h3>بسته‌بندی سلطنتی با وایندر خودکار</h3>
            <p>${p.authenticity.box}</p>
            <div class="auth-stamp-pill">PIANO LACQUER BOX</div>
          </div>

          <div class="auth-card glass-panel">
            <div class="auth-icon-wrap">
              <span class="material-symbols-outlined">shield</span>
            </div>
            <h3>ضمانت رسمی بین‌المللی توکلی</h3>
            <p>${p.authenticity.warranty}</p>
            <div class="auth-stamp-pill">5-YEAR FULL WARRANTY</div>
          </div>

          <div class="auth-card glass-panel">
            <div class="auth-icon-wrap">
              <span class="material-symbols-outlined">handyman</span>
            </div>
            <h3>اصالت دست‌ساز و کارگاه مبدا</h3>
            <p>${p.authenticity.origin}</p>
            <div class="auth-stamp-pill">HANDCRAFTED HERITAGE</div>
          </div>
        </div>
      `;
    }

    // 3. Ordering & Concierge Delivery Tab
    const orderContainer = document.getElementById('tab-content-order');
    if (orderContainer) {
      orderContainer.innerHTML = `
        <div class="order-steps-container">
          <div class="order-step-item glass-panel">
            <div class="step-num">۰۱</div>
            <div class="step-content">
              <h3>ارتباط و استعلام اولیه با کارشناس ارشد</h3>
              <p>از طریق کلیک بر روی دکمه سفارش واتساپ یا تماس با سالن، با کارشناس ارشد ساعت در ارتباط باشید تا شماره رفرنس و تخصیص قطعه بررسی و پیش‌فاکتور رسمی صادر گردد.</p>
            </div>
          </div>

          <div class="order-step-item glass-panel">
            <div class="step-num">۰۲</div>
            <div class="step-content">
              <h3>انتخاب شیوه تحویل (حضوری یا اسکورت اختصاصی)</h3>
              <p>شما می‌توانید حضوراً در سالن VIP گالری ساعت توکلی در محیطی کاملاً خصوصی همراه با پذیرایی ساعت خود را تحویل بگیرید، یا درخواست ارسال امنیتی با اسکورت مسلح و بیمه ۱۰۰٪ ارزش کالا را ثبت نمایید.</p>
            </div>
          </div>

          <div class="order-step-item glass-panel">
            <div class="step-num">۰۳</div>
            <div class="step-content">
              <h3>تنظیم دست‌ساز بند و صدور شناسنامه به نام خریدار</h3>
              <p>در زمان تحویل، بند ساعت متناسب با مچ دست شما تنظیم گردیده، دفترچه ثبت گارانتی ۵ ساله با نام شما مهر رسمی خورده و جعبه چوبی سلطنتی تقدیم می‌گردد.</p>
            </div>
          </div>

          <div class="order-cta-box glass-panel-gold">
            <div class="order-cta-text">
              <h3>آماده سفارش یا بازدید اختصاصی هستید؟</h3>
              <p>کارشناسان ارشد گالری توکلی در تمام روزهای هفته آماده پاسخگویی به سوالات فنی و هماهنگی زمان بازدید شما هستند.</p>
            </div>
            <div class="order-cta-btns">
              <a href="https://wa.me/qr/3DDS2KO3LDMOC1" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                <span class="material-symbols-outlined" style="font-size: 18px;">chat</span>
                سفارش و مشاوره فوری در واتساپ
              </a>
              <a href="tel:09121966276" class="btn btn-outline">
                <span class="material-symbols-outlined" style="font-size: 18px;">call</span>
                تماس با سالن VIP (۰۹۱۲۱۹۶۶۲۷۶)
              </a>
            </div>
          </div>
        </div>
      `;
    }
  }

  /* ==========================================================================
     4. REVIEWS SYSTEM (Live local persistence & UI updates)
     ========================================================================== */
  function getStoredReviews(productId) {
    try {
      const stored = localStorage.getItem(`tavakoli_reviews_${productId}`);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  function saveStoredReview(productId, reviewObj) {
    try {
      const existing = getStoredReviews(productId);
      existing.unshift(reviewObj);
      localStorage.setItem(`tavakoli_reviews_${productId}`, JSON.stringify(existing));
    } catch (e) {}
  }

  function renderReviewsSection(p) {
    const listEl = document.getElementById('reviews-list');
    const avgScoreEl = document.getElementById('reviews-avg-score');
    const totalCountEl = document.getElementById('reviews-total-count');

    if (!listEl) return;

    // Combine base reviews with user submitted reviews
    const userReviews = getStoredReviews(p.id);
    const allReviews = [...userReviews, ...(p.reviews || [])];

    if (totalCountEl) {
      totalCountEl.textContent = `(${allReviews.length} تجربه ثبت‌شده)`;
    }

    if (allReviews.length === 0) {
      if (avgScoreEl) avgScoreEl.textContent = '۵.۰';
      listEl.innerHTML = `
        <div class="no-reviews-box glass-panel">
          <span class="material-symbols-outlined" style="font-size: 36px; color: var(--color-champagne-gold);">rate_review</span>
          <h4>اولین نفری باشید که دیدگاه خود را درباره این شاهکار ثبت می‌کند</h4>
          <p>تجربه خود از دست‌گرفتن این ساعت یا دیدگاه‌تان در خصوص طراحی و موتور آن را در فرم زیر با سایر علاقه‌مندان به اشتراک بگذارید.</p>
        </div>
      `;
      return;
    }

    // Calculate Average
    const sum = allReviews.reduce((acc, curr) => acc + (curr.rating || 5), 0);
    const avg = (sum / allReviews.length).toFixed(1);
    if (avgScoreEl) avgScoreEl.textContent = avg;

    listEl.innerHTML = allReviews.map(r => `
      <article class="review-card glass-panel">
        <div class="review-header">
          <div class="reviewer-meta">
            <div class="reviewer-avatar">
              ${(r.author || 'ک')[0]}
            </div>
            <div>
              <h4 class="reviewer-name">${r.author || 'خریدار گالری'}</h4>
              <div class="reviewer-badge-row">
                <span class="review-badge-verified">${r.badge || 'خریدار تایید شده'}</span>
                <span class="review-date">${r.date || 'به تازگی'}</span>
              </div>
            </div>
          </div>
          <div class="review-stars" aria-label="${r.rating} از ۵ ستاره">
            ${renderStarsHtml(r.rating || 5)}
          </div>
        </div>
        <p class="review-body">${r.text}</p>
      </article>
    `).join('');
  }

  function renderStarsHtml(count) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= count) {
        html += '<span class="star-icon filled">★</span>';
      } else {
        html += '<span class="star-icon">☆</span>';
      }
    }
    return html;
  }

  function initReviewForm(p) {
    const form = document.getElementById('product-review-form');
    if (!form) return;

    let selectedRating = 5;
    const starButtons = form.querySelectorAll('.star-rating-picker button');

    starButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        selectedRating = parseInt(btn.getAttribute('data-val'), 10) || 5;
        updateStarPickerUI(starButtons, selectedRating);
      });

      btn.addEventListener('mouseenter', () => {
        const hoverVal = parseInt(btn.getAttribute('data-val'), 10) || 5;
        updateStarPickerUI(starButtons, hoverVal);
      });
    });

    const starPickerWrap = form.querySelector('.star-rating-picker');
    if (starPickerWrap) {
      starPickerWrap.addEventListener('mouseleave', () => {
        updateStarPickerUI(starButtons, selectedRating);
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const authorInput = document.getElementById('review-author-name');
      const textInput = document.getElementById('review-text-content');
      const submitBtn = form.querySelector('button[type="submit"]');

      const author = authorInput ? authorInput.value.trim() : '';
      const text = textInput ? textInput.value.trim() : '';

      if (!author || !text) {
        alert('لطفاً نام و متن دیدگاه خود را وارد فرمایید.');
        return;
      }

      // Format date in Solar Hijri
      const today = new Intl.DateTimeFormat('fa-IR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());

      const newReview = {
        id: 'user-rev-' + Date.now(),
        author: author,
        date: today,
        rating: selectedRating,
        badge: 'خریدار تایید شده گالری',
        text: text
      };

      saveStoredReview(p.id, newReview);
      renderReviewsSection(p);

      // Reset Form
      if (authorInput) authorInput.value = '';
      if (textInput) textInput.value = '';
      selectedRating = 5;
      updateStarPickerUI(starButtons, 5);

      // Toast Success
      showSuccessToast('دیدگاه ارزشمند شما با موفقیت ثبت شد و در این صفحه قرار گرفت.');
    });
  }

  function updateStarPickerUI(buttons, score) {
    buttons.forEach(b => {
      const v = parseInt(b.getAttribute('data-val'), 10);
      if (v <= score) {
        b.classList.add('active');
        b.textContent = '★';
      } else {
        b.classList.remove('active');
        b.textContent = '☆';
      }
    });
  }

  function showSuccessToast(message) {
    const existing = document.querySelector('.tavakoli-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'tavakoli-toast';
    toast.innerHTML = `
      <span class="material-symbols-outlined" style="color: var(--color-champagne-gold);">check_circle</span>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('visible'), 50);
    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  /* ==========================================================================
     5. RELATED TIMEPIECES (ساعت‌های مشابه)
     ========================================================================== */
  function renderRelatedProducts(p) {
    const container = document.getElementById('related-products-grid');
    if (!container || !window.TAVAKOLI_PRODUCTS) return;

    // Filter out current product, prefer same category or closest prices
    const others = window.TAVAKOLI_PRODUCTS.filter(item => item.id !== p.id);
    const related = others.slice(0, 4);

    container.innerHTML = related.map(item => `
      <article class="watch-card product-grid-card">
        <a href="product.html?id=${item.id}" class="watch-card-image-wrap">
          <span class="watch-card-badge">${item.badge.split('•')[0].trim()}</span>
          <img src="${item.images[0].url}" alt="${item.title}" class="watch-card-img" loading="lazy">
        </a>
        <div class="watch-card-info">
          <div>
            <div class="watch-card-meta-top">
              <span>${item.ref}</span>
              <span style="font-family: 'Cinzel', serif; color: var(--color-champagne-gold);">${item.calibre.split(' ')[1] || 'Swiss'}</span>
            </div>
            <h3 class="watch-card-title">
              <a href="product.html?id=${item.id}" style="color: inherit;">${item.title}</a>
            </h3>
            <p class="watch-card-desc">${item.tagline}</p>
            <div class="watch-card-specs-grid">
              <div class="watch-card-spec-item">
                <span>قطر قاب:</span>
                <span>${item.quickSpecs[0]?.val || '۴۱mm'}</span>
              </div>
              <div class="watch-card-spec-item">
                <span>مقاومت آب:</span>
                <span>${item.quickSpecs[3]?.val || '۱۰۰M'}</span>
              </div>
            </div>
          </div>
          <div class="watch-card-footer">
            <div class="watch-card-price">${item.priceFormatted}</div>
            <a href="product.html?id=${item.id}" class="btn btn-outline btn-sm">
              مشاهده جزئیات
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  /* ==========================================================================
     6. GALLERY INTERACTIONS & LIGHTBOX
     ========================================================================== */
  function initGalleryInteractions(p) {
    const thumbs = document.querySelectorAll('.gallery-thumb-btn');
    const mainImg = document.getElementById('product-main-image');
    const zoomBtn = document.getElementById('product-image-zoom-btn');

    thumbs.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10) || 0;
        thumbs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (mainImg && p.images && p.images[idx]) {
          mainImg.style.opacity = '0.3';
          mainImg.style.transform = 'scale(0.96)';
          setTimeout(() => {
            mainImg.src = p.images[idx].url;
            mainImg.alt = `${p.title} - ${p.images[idx].label}`;
            mainImg.style.opacity = '1';
            mainImg.style.transform = 'scale(1)';
          }, 180);
        }
      });
    });

    // Lightbox modal trigger
    if (zoomBtn && mainImg) {
      zoomBtn.addEventListener('click', () => {
        openLightbox(mainImg.src, p.title);
      });
      mainImg.addEventListener('click', () => {
        openLightbox(mainImg.src, p.title);
      });
    }
  }

  function openLightbox(imgSrc, title) {
    const existing = document.getElementById('product-lightbox');
    if (existing) existing.remove();

    const lightbox = document.createElement('div');
    lightbox.id = 'product-lightbox';
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="بستن تصویر بزرگ">&times;</button>
      <div class="lightbox-content">
        <img src="${imgSrc}" alt="${title}">
        <p class="lightbox-caption">${title} • رزولوشن اصلی آتلیه</p>
      </div>
    `;

    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';

    lightbox.addEventListener('click', (e) => {
      if (e.target.classList.contains('lightbox-overlay') || e.target.classList.contains('lightbox-close')) {
        lightbox.remove();
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') {
        lightbox.remove();
        document.body.style.overflow = '';
        document.removeEventListener('keydown', escHandler);
      }
    });
  }

  /* ==========================================================================
     7. TAB SWITCHING
     ========================================================================== */
  function initTabSwitching() {
    const tabButtons = document.querySelectorAll('.product-tab-btn');
    const tabPanels = document.querySelectorAll('.product-tab-panel');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');

        tabButtons.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetPanel = document.getElementById(`tab-${targetId}`);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }

  /* ==========================================================================
     8. WISHLIST & SHARE
     ========================================================================== */
  function initWishlistAndShare(p) {
    const wishBtn = document.getElementById('product-wishlist-btn');
    const shareBtn = document.getElementById('product-share-btn');

    if (wishBtn) {
      const savedKey = `tavakoli_wishlist_${p.id}`;
      let isSaved = localStorage.getItem(savedKey) === 'true';
      updateWishlistBtnUI(wishBtn, isSaved);

      wishBtn.addEventListener('click', () => {
        isSaved = !isSaved;
        localStorage.setItem(savedKey, isSaved.toString());
        updateWishlistBtnUI(wishBtn, isSaved);
        showSuccessToast(isSaved ? 'این شاهکار به فهرست برگزیده‌های شما افزوده شد.' : 'از فهرست برگزیده‌ها حذف شد.');
      });
    }

    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href).then(() => {
            showSuccessToast('پیوند این ساعت فاخر در حافظه کپی شد.');
          }).catch(() => {
            showSuccessToast('پیوند کپی شد: ' + window.location.href);
          });
        } else {
          showSuccessToast('پیوند کپی شد: ' + window.location.href);
        }
      });
    }
  }

  function updateWishlistBtnUI(btn, isSaved) {
    const icon = btn.querySelector('.material-symbols-outlined');
    if (isSaved) {
      btn.classList.add('active');
      if (icon) icon.textContent = 'favorite';
    } else {
      btn.classList.remove('active');
      if (icon) icon.textContent = 'favorite_border';
    }
  }

})();
