/**
 * TheWayWorks Corporate Sample Website Interactive Controller
 * - Multi-page SPA view router (HOME + 5 Sub-document pages)
 * - 12 Production Snack Apps interactive catalog & filter
 * - Core Engine tab switcher
 * - Full-screen Lightbox image inspector
 * - Interactive 3-Minute AI Automation Diagnostic Form
 */

const PRODUCTION_APPS = [
  {
    id: 1,
    title: '통합 앱 카탈로그 (종합 리모컨)',
    badgeChar: '홀',
    badgeColor: '#A855F7',
    category: 'admin',
    container: 'holyseeds-main',
    repo: 'holyseeds',
    endpoint: 'holyseeds.thewayworks.net/',
    stack: '1인기업 사옥 로비',
    port: '상시 가동',
    desc: '우리 회사와 공동체의 모든 스낵 앱(12종)이 잘 켜져 있는지 한눈에 보고 바로 실행하는 종합 본부 화면입니다.',
    img: 'img/snap-app-01.png'
  },
  {
    id: 2,
    title: '1초 전화번호 인증 (Proxy Auth)',
    badgeChar: '인',
    badgeColor: '#EC4899',
    category: 'admin',
    container: 'mobileauth-main',
    repo: 'mobileauth',
    endpoint: 'holyseeds.thewayworks.net/auth',
    stack: '단골 고객 문지기',
    port: '회원가입 ZERO',
    desc: '골치 아픈 아이디·비번 찾기 대신, 휴대폰 번호와 숫자 4자리(PIN)만으로 모든 스낵 앱에 1초 만에 입장하는 만능 열쇠입니다.',
    img: 'img/snap-app-autth-01.png'
  },
  {
    id: 3,
    title: '새벽기도 순서지 (정기 문서 자동화)',
    badgeChar: '새',
    badgeColor: '#8B5CF6',
    category: 'worship',
    container: 'dawnoffering-main',
    repo: 'dawnoffering',
    endpoint: 'holyseeds.thewayworks.net/dawn_offering',
    stack: '뉴스레터·보고서 자동화',
    port: '10초 완성',
    desc: '매주 똑같은 양식에 날짜와 내용만 바뀌는 순서지·주간 뉴스레터·견적서를 빈칸만 채우면 자동으로 만들어 배포합니다.',
    img: 'img/snap-app-01.png'
  },
  {
    id: 4,
    title: 'Give and Forget (실시간 현황판)',
    badgeChar: '♥',
    badgeColor: '#DB2777',
    category: 'event',
    container: 'givenforget-main',
    repo: 'giveNforget',
    endpoint: 'holyseeds.thewayworks.net/giveNforget',
    stack: '펀딩·공구 실시간 중계',
    port: '86건·74명 실증',
    desc: '바자회 기부 물품이나 공동구매·펀딩 참여 내역을 수기 장부 대신 예쁜 실시간 카드로 중계해 참여 열기를 높이는 마케팅 앱입니다.',
    img: 'img/snap-app-giveNfoget-01.png'
  },
  {
    id: 5,
    title: '주일 말씀 나눔 카드 (후기·미션 카드)',
    badgeChar: '주',
    badgeColor: '#9333EA',
    category: 'worship',
    container: 'myresolution-main',
    repo: 'myresolution',
    endpoint: 'holyseeds.thewayworks.net/myresolution',
    stack: '고객 후기·인증 카드',
    port: '카톡 공유 최적화',
    desc: '오늘 들은 핵심 메시지와 나의 다짐(또는 수강 후기·미션 인증)을 예쁜 모바일 카드로 기록하고 카톡으로 나누는 소통 앱입니다.',
    img: 'img/snap-app-02.png'
  },
  {
    id: 6,
    title: '행사 체크리스트 관리 (프로젝트 진행표)',
    badgeChar: '행',
    badgeColor: '#10B981',
    category: 'event',
    container: 'eventplanning-main',
    repo: 'EventPlanning',
    endpoint: 'holyseeds.thewayworks.net/planning',
    stack: '운영·총무팀 블록',
    port: '실시간 협업',
    desc: '행사나 1인 기업 프로젝트에서 챙겨야 할 준비 항목과 진행 단계를 파트너·고객과 빠짐없이 실시간으로 체크하는 도구입니다.',
    img: 'img/snap-app-02.png'
  },
  {
    id: 7,
    title: '스마트 예약관리 포털 (카카오캘린더 연동)',
    badgeChar: '강',
    badgeColor: '#059669',
    category: 'admin',
    container: 'booking-main',
    repo: 'booking',
    endpoint: 'holyseeds.thewayworks.net/reserve',
    stack: '영업·상담예약팀 블록',
    port: '중복예약 방지',
    desc: '카카오캘린더와 연동되어 예배실·스튜디오·1인 기업 상담의 빈 시간만 골라 중복 없이 스스로 예약하게 해주는 포털입니다.',
    img: 'img/snap-app-03.png'
  },
  {
    id: 8,
    title: '미리보기 단축 URL (ShortURL)',
    badgeChar: '단',
    badgeColor: '#2563EB',
    category: 'admin',
    container: 'shorturl-main',
    repo: 'shorturl',
    endpoint: 'holyseeds.thewayworks.net/shorturl',
    stack: '마케팅 클릭률 2배',
    port: '1년 자동소멸',
    desc: '긴 주소를 짧게 줄여주고, 카톡 공유 시 내가 원하는 홍보 문구가 미리보기 창에 딱 뜨게 만들어 클릭 수를 높여줍니다.',
    img: 'img/snap-app-shorturl-01.png'
  },
  {
    id: 9,
    title: '1분 번개 선호도 조사 (초단기 투표)',
    badgeChar: '초',
    badgeColor: '#10B981',
    category: 'event',
    container: 'shortvotes-main',
    repo: 'shortvotes',
    endpoint: 'holyseeds.thewayworks.net/shortvotes',
    stack: '고객 의견 1분 질문',
    port: '링크 즉시 투표',
    desc: '점심 메뉴 선택부터 신상품 A안 vs B안 선호도까지, 카톡 링크 하나로 1분 만에 의견을 모으고 끝내는 초간단 투표 앱입니다.',
    img: 'img/snap-app-03.png'
  },
  {
    id: 10,
    title: '모바일 매거진 — VOGUE:M [회사소개서 앱]',
    badgeChar: 'V',
    badgeColor: '#0D9488',
    category: 'media',
    container: 'voguem-main',
    repo: 'voguem',
    endpoint: 'holyseeds.thewayworks.net/voguem',
    stack: '브랜드 홍보팀 블록',
    port: '독자 모드 지원',
    desc: '딱딱한 PDF 소개서나 종이 주보 대신, 스마트폰에서 잡지처럼 술술 넘겨보는 1인 기업 브랜드 매거진 & 모바일 소식지입니다.',
    img: 'img/snap-app-voguem-01.png'
  },
  {
    id: 11,
    title: '대규모 이벤트 투표 시스템',
    badgeChar: '선',
    badgeColor: '#0284C7',
    category: 'event',
    container: 'votes-main',
    repo: 'votes',
    endpoint: 'holyseeds.thewayworks.net/votes',
    stack: '기획·리서치팀 블록',
    port: '실시간 통계',
    desc: '수백 명이 참여하는 행사나 마케팅 캠페인에서 인기 투표를 진행하고 실시간 결과 그래프를 보여주는 이벤트 앱입니다.',
    img: 'img/snap-app-04.png'
  },
  {
    id: 12,
    title: '방송·세미나용 영상 다운로더',
    badgeChar: '유',
    badgeColor: '#10B981',
    category: 'media',
    container: 'ytdown-main',
    repo: 'ytdown',
    endpoint: 'holyseeds.thewayworks.net/ytdown',
    stack: '미디어 준비 도구',
    port: '끊김 없는 발표',
    desc: '강연이나 예배·행사 현장에서 인터넷이 갑자기 끊겨도 당황하지 않도록 참고 영상을 미리 안전하게 준비해 두는 유틸리티입니다.',
    img: 'img/snap-app-04.png'
  }
];

function renderAppCards(targetId, filter = 'all', limit = null) {
  const container = document.getElementById(targetId);
  if (!container) return;

  let filtered = filter === 'all'
    ? PRODUCTION_APPS
    : PRODUCTION_APPS.filter(app => app.category === filter);

  if (limit) {
    filtered = filtered.slice(0, limit);
  }

  container.innerHTML = filtered.map(app => `
    <article class="app-card">
      <div class="app-card-body">
        <div class="app-card-top">
          <div class="app-icon-badge" style="background: ${app.badgeColor}">${app.badgeChar}</div>
          <span class="status-badge">정상 작동 중</span>
        </div>
        <h3 class="app-card-title">${app.title}</h3>
        <div>
          <span class="tech-tag repo">🧩 ${app.stack}</span>
          <span class="tech-tag branch">✨ ${app.port}</span>
        </div>
        <div class="app-desc-box">
          ${app.desc}
        </div>
        <div class="app-endpoint-box" title="https://${app.endpoint}">
          🔗 바로가기 주소: ${app.endpoint}
        </div>
        <div class="app-meta-tags">
          <span class="tech-tag">📦 ${app.container}</span>
          <span class="tech-tag">🐙 ${app.repo}</span>
        </div>
      </div>
      <div class="app-card-footer">
        <button class="app-card-btn" onclick="openLightbox('${app.img}', '${app.title} — 실제 작동 화면 (${app.endpoint})')">
          🔍 실제 작동 화면 크게 보기
        </button>
      </div>
    </article>
  `).join('');
}

function navigateTo(pageId, sectionAnchor = null) {
  const views = document.querySelectorAll('.page-view');
  views.forEach(v => v.classList.remove('active'));

  const targetView = document.getElementById(`view-${pageId}`);
  if (targetView) {
    targetView.classList.add('active');
  }

  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === pageId);
  });

  if (sectionAnchor) {
    setTimeout(() => {
      const el = document.getElementById(sectionAnchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function switchEngineTab(engineKey) {
  const btns = document.querySelectorAll('.engine-tab-btn');
  const panes = document.querySelectorAll('.engine-tab-pane');

  btns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.engine === engineKey);
  });
  panes.forEach(pane => {
    pane.classList.toggle('active', pane.id === `engine-pane-${engineKey}`);
  });
}

function filterCatalog(category, btnEl, containerId) {
  const parent = btnEl.closest('.filter-tabs');
  if (parent) {
    parent.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  }
  btnEl.classList.add('active');
  renderAppCards(containerId, category);
}

function openLightbox(imgSrc, captionText) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  if (!modal || !img) return;

  img.src = imgSrc;
  cap.textContent = captionText || 'TheWayWorks Production Asset';
  modal.classList.add('open');
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.remove('open');
}

function handleDiagnosticSubmit(event, formType) {
  event.preventDefault();
  const resultBox = document.getElementById(`${formType}-submit-result`);
  if (resultBox) {
    resultBox.style.display = 'block';
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderAppCards('home-catalog-grid', 'all', 6);
  renderAppCards('portfolio-catalog-grid', 'all', null);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      if (typeof closeDhApiModal === 'function') closeDhApiModal();
    }
  });
});
