/* ============================
   아고다 할인코드 - 공통 JS
   ============================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- 모바일 햄버거 메뉴 ----
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
  }

  // ---- 현재 페이지 active 표시 ----
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#main-nav a, #mobile-nav a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || href.endsWith(currentPath))) {
      link.classList.add('active');
    }
  });

  // ---- 스크롤 탑 버튼 ----
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- 페이지 이동 시 스크롤 탑 ----
  document.querySelectorAll('a[href]').forEach(function (link) {
    link.addEventListener('click', function () {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('#') && !href.startsWith('javascript') && !href.startsWith('http')) {
        setTimeout(function () { window.scrollTo(0, 0); }, 50);
      }
    });
  });

  // ---- 코드 복사 버튼 (복사 후 제휴링크 이동) ----
  var affiliateLink = 'http://app.ac/bbMm1Dl33';
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var code = btn.getAttribute('data-code') || btn.previousElementSibling?.textContent?.trim();
      if (code) {
        navigator.clipboard.writeText(code).then(function () {
          var original = btn.textContent;
          btn.textContent = '✓ 복사됨';
          btn.classList.add('copied');
          window.open(affiliateLink, '_blank', 'noopener,noreferrer');
          setTimeout(function () {
            btn.textContent = original;
            btn.classList.remove('copied');
          }, 2000);
        }).catch(function () {
          var ta = document.createElement('textarea');
          ta.value = code;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          var original = btn.textContent;
          btn.textContent = '✓ 복사됨';
          btn.classList.add('copied');
          window.open(affiliateLink, '_blank', 'noopener,noreferrer');
          setTimeout(function () {
            btn.textContent = original;
            btn.classList.remove('copied');
          }, 2000);
        });
      }
    });
  });

  // ---- FAQ 아코디언 ----
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');
      // 모두 닫기
      document.querySelectorAll('.faq-question.open').forEach(function (q) {
        q.classList.remove('open');
        if (q.nextElementSibling) q.nextElementSibling.classList.remove('open');
      });
      // 현재 열기
      if (!isOpen) {
        btn.classList.add('open');
        if (answer) answer.classList.add('open');
      }
    });
  });

  // ---- 할인 시뮬레이터 ----
  const simForm = document.getElementById('sim-form');
  if (simForm) {
    simForm.addEventListener('submit', function (e) {
      e.preventDefault();
      runSimulator();
    });
    const simInput = document.getElementById('sim-amount');
    if (simInput) {
      simInput.addEventListener('input', function () {
        if (simInput.value) runSimulator();
      });
    }
  }

  function runSimulator() {
    const amountInput = document.getElementById('sim-amount');
    if (!amountInput) return;
    const amount = parseFloat(amountInput.value);
    if (!amount || amount <= 0) return;

    const resultDiv = document.getElementById('sim-result');
    if (!resultDiv) return;

    // 할인 계산
    const disc5 = amount * 0.05;
    const disc8 = amount >= 100 ? amount * 0.08 : 0;
    const disc10 = Math.min(amount * 0.10, 25);
    const disc12 = Math.min(amount * 0.12, 30);
    const discCard = amount * 0.07; // 카드 7%
    const discKakao = Math.min(amount * 0.11, 100); // 카카오페이 11%

    // 최적 조합: 5% 코드 + 카드 7%
    const bestCombo = disc5 + discCard;

    resultDiv.innerHTML = `
      <div class="sim-row"><span class="sim-label">원래 예약 금액</span><span class="sim-value">$${amount.toFixed(2)}</span></div>
      <div class="sim-row"><span class="sim-label">🔖 기본 5% 할인코드</span><span class="sim-value text-red">-$${disc5.toFixed(2)}</span></div>
      ${disc8 > 0 ? `<div class="sim-row"><span class="sim-label">🔖 지역 8% 할인코드 ($100 이상)</span><span class="sim-value text-red">-$${disc8.toFixed(2)}</span></div>` : ''}
      <div class="sim-row"><span class="sim-label">🎫 해외 10% 쿠폰 (최대 $25)</span><span class="sim-value text-red">-$${disc10.toFixed(2)}</span></div>
      <div class="sim-row"><span class="sim-label">🎫 해외 12% 쿠폰 (최대 $30)</span><span class="sim-value text-red">-$${disc12.toFixed(2)}</span></div>
      <div class="sim-row"><span class="sim-label">💳 카드사 할인 7%</span><span class="sim-value text-red">-$${discCard.toFixed(2)}</span></div>
      <div class="sim-row"><span class="sim-label">📱 카카오페이 11% (최대 $100)</span><span class="sim-value text-red">-$${discKakao.toFixed(2)}</span></div>
      <div class="sim-row"><span class="sim-label">⭐ 최적 조합 (5% 코드 + 카드 7%)</span><span class="sim-value">-$${bestCombo.toFixed(2)} → $${(amount - bestCombo).toFixed(2)}</span></div>
      <div class="sim-row" style="background:#fff5f5;padding:12px;border-radius:8px;margin-top:8px;">
        <span class="sim-label fw-bold">💡 $600 이상이면?</span>
        <span class="sim-value text-red">${amount >= 600 ? '5% 코드가 12% 쿠폰보다 유리!' : '12% 쿠폰($30 한도) 추천'}</span>
      </div>
    `;
    resultDiv.classList.add('show');
  }

  // ---- Sticky CTA ----
  const stickyCta = document.getElementById('sticky-cta');
  if (stickyCta) {
    let shown = false;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 600 && !shown) {
        stickyCta.classList.add('show');
        shown = true;
      }
    });
    const closeBtn = document.getElementById('sticky-cta-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        stickyCta.classList.remove('show');
      });
    }
  }

  // ---- 탭 기능 ----
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.getAttribute('data-tab');
      const container = btn.closest('.tab-container');
      if (!container) return;
      container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = container.querySelector('#' + target);
      if (panel) panel.classList.add('active');
    });
  });

  // ---- 애니메이션 (Intersection Observer) ----
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.info-card, .coupon-card, .stat-box, .review-card').forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

});

// ---- 탭 CSS ----
(function () {
  const style = document.createElement('style');
  style.textContent = `
    .tab-nav { display: flex; gap: 4px; border-bottom: 2px solid #dee2e6; margin-bottom: 24px; flex-wrap: wrap; }
    .tab-btn { padding: 10px 20px; background: none; border: none; font-size: 0.9rem; font-weight: 600; color: #666; cursor: pointer; border-bottom: 3px solid transparent; margin-bottom: -2px; transition: all 0.2s; border-radius: 4px 4px 0 0; }
    .tab-btn:hover { color: #e31837; background: #fff5f5; }
    .tab-btn.active { color: #e31837; border-bottom-color: #e31837; background: #fff5f5; }
    .tab-panel { display: none; }
    .tab-panel.active { display: block; }
  `;
  document.head.appendChild(style);
})();
