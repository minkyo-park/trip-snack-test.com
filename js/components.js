/* ============================
   공통 헤더/푸터 컴포넌트 주입
   ============================ */

(function () {
  const HEADER_HTML = `
<header id="site-header" role="banner">
  <div class="header-inner">
    <a href="index.html" class="site-logo" aria-label="아고다 할인코드 홈">
      <div class="logo-icon" aria-hidden="true">A</div>
      <div class="logo-text">
        아고다 할인코드
        <span class="logo-sub">최대 할인 정보 총정리</span>
      </div>
    </a>
    <nav id="main-nav" aria-label="주요 메뉴">
      <ul>
        <li><a href="index.html">홈</a></li>
        <li class="has-dropdown">
          <a href="discount-codes.html">할인코드</a>
          <ul class="dropdown">
            <li><a href="discount-codes.html">할인코드 종류 총정리</a></li>
            <li><a href="how-to-use.html">할인코드 적용 방법</a></li>
            <li><a href="troubleshoot.html">오류 해결 가이드</a></li>
          </ul>
        </li>
        <li class="has-dropdown">
          <a href="card-promotions.html">카드사 할인</a>
          <ul class="dropdown">
            <li><a href="card-promotions.html">카드사 할인 총정리</a></li>
            <li><a href="easy-pay.html">카카오페이·네이버페이</a></li>
          </ul>
        </li>
        <li class="has-dropdown">
          <a href="domestic.html">지역별 할인</a>
          <ul class="dropdown">
            <li><a href="domestic.html">국내 숙소 할인</a></li>
            <li><a href="japan.html">일본 호텔 할인</a></li>
            <li><a href="southeast-asia.html">동남아 할인</a></li>
            <li><a href="europe.html">유럽 할인</a></li>
          </ul>
        </li>
        <li><a href="vip.html">VIP 혜택</a></li>
        <li><a href="promotions.html">프로모션</a></li>
        <li><a href="flights.html">항공권 할인</a></li>
        <li><a href="faq.html">FAQ</a></li>
      </ul>
    </nav>
    <button class="hamburger" id="hamburger" aria-label="메뉴 열기">
      <span></span><span></span><span></span>
    </button>
  </div>
  <nav id="mobile-nav" aria-label="모바일 메뉴">
    <ul>
      <li><a href="index.html">🏠 홈</a></li>
      <li><a href="discount-codes.html">🏷️ 할인코드 종류 총정리</a></li>
      <li><a href="how-to-use.html">📋 할인코드 적용 방법</a></li>
      <li><a href="troubleshoot.html">🔧 오류 해결 가이드</a></li>
      <li><a href="card-promotions.html">💳 카드사 할인 총정리</a></li>
      <li><a href="easy-pay.html">📱 카카오페이·네이버페이</a></li>
      <li><a href="domestic.html">🇰🇷 국내 숙소 할인</a></li>
      <li><a href="japan.html">🇯🇵 일본 호텔 할인</a></li>
      <li><a href="southeast-asia.html">🌴 동남아 할인</a></li>
      <li><a href="europe.html">🏰 유럽 할인</a></li>
      <li><a href="vip.html">⭐ VIP 혜택</a></li>
      <li><a href="promotions.html">🎉 프로모션</a></li>
      <li><a href="flights.html">✈️ 항공권 할인</a></li>
      <li><a href="tips.html">💡 할인 극대화 꿀팁</a></li>
      <li><a href="cancel-refund.html">🔄 취소·환불 가이드</a></li>
      <li><a href="faq.html">❓ FAQ</a></li>
    </ul>
  </nav>
</header>`;

  const FOOTER_HTML = `
<footer id="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo-text">아고다 할인코드</div>
        <p>아고다 할인코드, 쿠폰, 프로모션 코드를 한 곳에서 총정리합니다. 매월 최신 코드를 업데이트하며, 적용 방법부터 오류 해결까지 모든 정보를 제공합니다.</p>
        <p class="text-small" style="color:rgba(255,255,255,0.4);margin-top:12px;">※ 본 사이트는 아고다 제휴 파트너 사이트입니다.</p>
      </div>
      <div class="footer-col">
        <h4>할인코드</h4>
        <ul>
          <li><a href="discount-codes.html">할인코드 종류 총정리</a></li>
          <li><a href="how-to-use.html">할인코드 적용 방법</a></li>
          <li><a href="troubleshoot.html">오류 해결 가이드</a></li>
          <li><a href="tips.html">할인 극대화 꿀팁</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>카드·결제</h4>
        <ul>
          <li><a href="card-promotions.html">카드사 할인 총정리</a></li>
          <li><a href="easy-pay.html">카카오페이·네이버페이</a></li>
          <li><a href="flights.html">항공권 할인</a></li>
          <li><a href="vip.html">VIP 등급 혜택</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>지역별 할인</h4>
        <ul>
          <li><a href="domestic.html">국내 숙소 할인</a></li>
          <li><a href="japan.html">일본 호텔 할인</a></li>
          <li><a href="southeast-asia.html">동남아 할인</a></li>
          <li><a href="europe.html">유럽 할인</a></li>
          <li><a href="promotions.html">시간대별 프로모션</a></li>
          <li><a href="cancel-refund.html">취소·환불 가이드</a></li>
          <li><a href="faq.html">FAQ</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 아고다 할인코드. All rights reserved.</span>
      <span>최종 업데이트: 2026년 4월 | 매월 업데이트</span>
    </div>
  </div>
</footer>
<button id="scroll-top" aria-label="맨 위로 이동">↑</button>`;

  // Inject header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) headerPlaceholder.outerHTML = HEADER_HTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
})();
