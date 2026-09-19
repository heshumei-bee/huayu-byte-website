/* 北京华誉字节科技有限公司官网 交互脚本 */
(function () {
  'use strict';

  /* ---------- 移动端菜单 ---------- */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var open = mainNav.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
    });
    // 点击导航链接后收起菜单
    mainNav.addEventListener('click', function (e) {
      if (e.target.classList.contains('nav-link')) {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- 导航高亮 ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav-link');
  var header = document.getElementById('siteHeader');

  function setActive() {
    var pos = window.scrollY + 120;
    var current = 'home';
    sections.forEach(function (sec) {
      if (pos >= sec.offsetTop) current = sec.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
    if (header) header.classList.toggle('scrolled', window.scrollY > 30);
  }
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  /* ---------- 回到顶部 ---------- */
  var backTop = document.getElementById('backTop');
  if (backTop) {
    window.addEventListener('scroll', function () {
      backTop.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- 医生卡片横向滚动 ---------- */
  var scroller = document.getElementById('doctorScroller');
  var btnPrev = document.getElementById('docPrev');
  var btnNext = document.getElementById('docNext');
  if (scroller) {
    function scrollCards(dir) {
      scroller.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
    if (btnPrev) btnPrev.addEventListener('click', function () { scrollCards(-1); });
    if (btnNext) btnNext.addEventListener('click', function () { scrollCards(1); });
  }

  /* ---------- 滚动渐入动画 ---------- */
  var revealEls = document.querySelectorAll(
    '.biz-item, .feature, .doctor-card, .hos-doc-card, .contact-card, .video-card, .cred-card, .phone-showcase, .hos-online, .hospital-photo'
  );
  revealEls.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- 视频懒加载：点击海报后再加载 ---------- */
  document.querySelectorAll('video[preload="none"]').forEach(function (video) {
    video.addEventListener('play', function () {
      video.preload = 'auto';
    }, { once: true });
  });
})();
