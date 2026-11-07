/**
 * Design Templates, Website Layouts & CI Helper Client Engine (design-helper.js)
 * - Loads 10+1 Representative Design Styles (/templates/api/styles)
 * - Loads 10+1 Representative Business Domain Website Layouts (/templates/api/layouts)
 * - Provides Dual-Axis Identity & Domain Finder (Adjectives, Verbs, 10 Business Domains)
 * - Live Theme (Tone & Manner) + Live Website Layout (Head & Body) Transformation
 * - Interactive Domain Layout Showcase for all 10 Reference Domains
 * - API Reference Inspector Modal & One-click .ZIP Template + Layout Package Download
 */

const RESOLVED_BASE_PREFIX = (() => {
  if (typeof window.__DEFAULT_PREFIX__ === 'string') {
    const clean = window.__DEFAULT_PREFIX__.trim().replace(/\/+$/, '');
    return clean === '/' ? '' : clean;
  }
  const path = window.location.pathname || '';
  if (path.startsWith('/templates')) return '/templates';
  const match = path.match(/^(\/[^/]+)\/$/);
  return match ? match[1] : '';
})();

const API_PREFIX = `${RESOLVED_BASE_PREFIX}/api`;

const TWAYWORKS_ORIGINAL_STYLE = {
  id: 'style-00-twayworks-original',
  order: 0,
  name_ko: '더웨이웍스 오리지널',
  name_en: 'TheWayWorks Original',
  tagline: '고도화된 AI 엔지니어링의 정교함과 1인 기업·공동체를 향한 따뜻한 실용성',
  target_businesses: [
    'AI 전문가 기업 (VAIYER / Wisdom)',
    '1인 스냅 컴퍼니 (Snap Company)',
    '스낵 앱 빌더 & 자동화 파트너',
    '스마트 처치 & 소셜 임팩트'
  ],
  template_definition: {
    layout_structure: '12컬럼 모던 테크 그리드, 딥 인디고 히어로와 클린 슬레이트 섹션의 교차 배치(Alternating Contrast)',
    hero_style: '좌측 핵심 가치 제안 타이포그래피 + 우측 4단계 실전 파이프라인 인터랙티브 카드',
    ui_components: {
      border_radius: '14px ~ 20px',
      border_style: '1px solid #E2E8F0',
      shadow_style: '0 10px 30px -5px rgba(15, 23, 42, 0.08)',
      interaction: '부드러운 상향 호버(-4px) 및 라이브 에메랄드 상태 배지 펄스'
    },
    recommended_sections: [
      'Hero: Vibe-to-App 4단계 파이프라인',
      'Cartoon Storyboard: 6컷 아키텍처 카툰',
      '4 Pillars: VAIYER · Snack App · Wisdom · Snap Company',
      'Core Engines: 4대 만능 기술 부품 탭',
      'Live Catalog: 12종 프로덕션 스낵 앱 실증'
    ]
  },
  identity: {
    adjectives: ['지적인', '신뢰할 수 있는', '실용적인', '민첩한', '따뜻한', '혁신적인'],
    adjectives_en: ['Intelligent', 'Reliable', 'Practical', 'Agile', 'Warm', 'Innovative'],
    verbs: ['연결하다', '자동화하다', '실행하다', '진화하다', '나누다'],
    verbs_en: ['Wire', 'Automate', 'Execute', 'Evolve', 'Share'],
    tone_and_manner: '어려운 AI 기술을 일상의 쉬운 비유(요리, 레고, 텐트)로 친절하고 확신 있게 풀어내는 설득력 있는 어조.',
    sample_copy: '말 한마디로 내 노하우를 연결하면, 오늘 바로 쓰는 나만의 비즈니스 앱이 됩니다. THE WAY WORKS.'
  },
  colors: {
    primary: '#251E66',
    secondary: '#4F46E5',
    accent: '#10B981',
    background: '#F8FAFC',
    surface: '#FFFFFF',
    text_main: '#0F172A',
    text_muted: '#475569',
    border: '#E2E8F0',
    color_scheme: 'light'
  },
  typography: {
    heading_font: "'Plus Jakarta Sans', 'Pretendard Variable', Pretendard, sans-serif",
    body_font: "'Pretendard Variable', Pretendard, sans-serif",
    accent_font: "'JetBrains Mono', monospace",
    heading_weight: '800',
    body_weight: '400',
    letter_spacing: '-0.03em',
    line_height: '1.65'
  }
};

const TWAYWORKS_STANDARD_LAYOUT = {
  id: 'layout-00-twayworks-standard',
  order: 0,
  domain_ko: '기본 기업 소개 & 멀티뷰 표준 (Standard Corporate)',
  domain_en: 'Standard Corporate & Multi-View Showcase',
  name_ko: '기본 기업형 (더웨이웍스)',
  name_en: 'TheWayWorks Standard Multi-Section Layout',
  menu_placement_type: 'top-gnb',
  menu_placement_ko: '상단 고정 표준 GNB (6대 메뉴 탭)',
  view_style_type: 'storytelling-sections',
  view_style_ko: '2단 히어로 + 교차형 스토리텔링 섹션 뷰',
  representative_companies: ['더웨이웍스 (TheWayWorks)', 'B2B/B2C 테크 기업 표준'],
  layout_structure: '상단 고정형 GNB(6개 멀티뷰 탭) + 2단 파이프라인 히어로 + 7단계 스토리텔링 섹션 바디',
  tagline: '기업 비전, 카툰 스토리보드, 4대 핵심 기술, 12종 실증 카탈로그, 무료 진단 폼을 체계적으로 전달하는 표준 기업형 레이아웃',
  head_spec: {
    structure_name: '표준 기업형 고정 GNB (브랜드 CI + 6개 페이지 뷰 라우터 탭)',
    description: '좌측 브랜드 로고 마크·기업명·태그라인과 우측 HOME 및 01~05 서브 페이지 전환 탭이 배치된 표준 헤더.',
    elements: ['브랜드 심볼 마크 & 기업명·태그라인', '6대 멀티뷰 메뉴 (HOME ~ 05 3분 무료진단)']
  },
  body_spec: {
    structure_name: '2단 히어로(가치제안 + 파이프라인 카드) + 교차형 섹션 그리드(4열/2열/3열) 바디',
    grid_template: '12-Column Responsive Container (1280px)',
    description: '히어로 배너 아래로 6컷 카툰 스토리보드, 4대 핵심 축(4열), 4대 만능 부품 탭(2분할), Wisdom DIKW 피라미드, 12종 스낵 앱 카탈로그(3열)가 교차 배치됩니다.',
    elements: ['Hero: 좌측 슬로건 + 우측 4단계 파이프라인', '6컷 카툰 & 4대 핵심 축', '12종 스낵앱 카탈로그 & 무료 진단 폼']
  },
  domain_keywords: ['기본 기업형', '더웨이웍스', '회사 소개', 'B2B', '스냅컴퍼니'],
  recommended_styles: ['style-00-twayworks-original', 'style-04-modern-trust-corporate', 'style-09-clean-growth-bento'],
  sample_application_note: 'TheWayWorks의 오리지널 기업 소개 멀티뷰 구조로, 모든 섹션과 서브페이지를 표준 그리드로 탐색할 수 있습니다.'
};

let ALL_STYLES = [TWAYWORKS_ORIGINAL_STYLE];
let ALL_LAYOUTS = [TWAYWORKS_STANDARD_LAYOUT];
let CURRENT_STYLE = TWAYWORKS_ORIGINAL_STYLE;
let CURRENT_LAYOUT = TWAYWORKS_STANDARD_LAYOUT;

// View Mode: 'hybrid' (Domain Layout Stage + Standard Sections), 'layout-only' (Dedicated Domain Layout Only), 'standard-only' (Standard Sections with Grid Overrides)
let LAYOUT_DISPLAY_MODE = 'hybrid';

let SELECTED_ADJECTIVES = new Set();
let SELECTED_VERBS = new Set();
let SELECTED_DOMAIN = '';

// V4.0 4-Stage Workflow State
let CURRENT_APP_STAGE = 'landing';
let LANDING_TILE_MODE = 'styles10'; // 'styles10' | 'layouts10' | 'all20'
let STANDARD_PREVIEW_TAB = 'overview'; // 'overview' | 'home' | 'catalog' | 'story' | 'contact'
let ADV_MENU_PLACEMENT_FILTER = 'all';
let ADV_VIEW_STYLE_FILTER = 'all';

// Interactive state for the 10 Domain Layout live examples
const DOMAIN_STAGE_STATE = {
  ecomCategory: 'all',
  ecomSearch: '',
  ecomTargetFilter: 'all',
  ecomCartCount: 2,
  ecomLikes: { 1: 428, 2: 892, 3: 315, 4: 1240, 5: 512, 6: 389, 7: 745, 8: 660, 9: 530, 10: 1580, 11: 490, 12: 310 },
  ottMyList: new Set([10, 4]),
  entSelectedApp: '모바일 매거진 — VOGUE:M [회사소개서 앱]',
  entSelectedTheater: '강남 1인스냅컴퍼니 전용관 (VAIYER 관)',
  entSelectedDate: '오늘 즉시 개통 (1회차 · 10초 발권)',
  entChartTab: 'all',
  entTicketIssued: null,
  portalSection: 'all',
  saasActiveNode: 'doc-vaiyer',
  saasViewTab: 'table',
  travelZone: 'all',
  travelSelectedAppId: 10,
  eduSlideIdx: 0,
  eduLevelFilter: 'all',
  jobRoleFilter: 'all',
  jobCalcRoles: { pr: true, video: true, dev: true, cs: false },
  propTypeFilter: 'all',
  propSelectedZone: '전체 단지 (12)',
  propSelectedAppId: 4
};

let IA_ARCHITECTURE_DATA = null;
let CURRENT_GNB_ID = 'gnb-gallery';
let CURRENT_LNB_ID = 'lnb-gallery-styles';
let CURRENT_IA_SUBTAB = 'lnb-ia-reflow';
let CURRENT_IC_GROUP_FILTER = 'ALL';

async function initDesignHelper() {
  try {
    const [stylesRes, layoutsRes, iaRes] = await Promise.all([
      fetch(`${API_PREFIX}/styles`),
      fetch(`${API_PREFIX}/layouts`),
      fetch(`${API_PREFIX}/ia/architecture`)
    ]);
    if (stylesRes.ok) {
      const sData = await stylesRes.json();
      if (sData.styles && Array.isArray(sData.styles)) {
        ALL_STYLES = [TWAYWORKS_ORIGINAL_STYLE, ...sData.styles];
      }
    }
    if (layoutsRes.ok) {
      const lData = await layoutsRes.json();
      if (lData.layouts && Array.isArray(lData.layouts)) {
        ALL_LAYOUTS = [TWAYWORKS_STANDARD_LAYOUT, ...lData.layouts];
      }
    }
    if (iaRes && iaRes.ok) {
      IA_ARCHITECTURE_DATA = await iaRes.json();
    }
  } catch (err) {
    console.warn('API fetch fallback:', err);
  }

  renderQuickStyleStrip();
  renderQuickLayoutStrip();
  renderIdentityFilterTags();

  const params = new URLSearchParams(window.location.search);
  const initialStyleId = params.get('style');
  const initialLayoutId = params.get('layout');
  const initialStage = params.get('stage');

  if (initialStyleId) {
    const foundStyle = ALL_STYLES.find(s => s.id === initialStyleId || String(s.order) === initialStyleId);
    if (foundStyle) CURRENT_STYLE = foundStyle;
  }
  if (initialLayoutId) {
    const foundLayout = ALL_LAYOUTS.find(l => l.id === initialLayoutId || String(l.order) === initialLayoutId);
    if (foundLayout) CURRENT_LAYOUT = foundLayout;
  }

  applyDesignStyle(CURRENT_STYLE.id);
  applyWebsiteLayout(CURRENT_LAYOUT.id, false);

  if (initialStage && ['landing', 'ia', 'preview', 'advanced', 'sample'].includes(initialStage)) {
    switchAppStage(initialStage, false);
  } else {
    switchAppStage('landing', false);
  }
}

function getCompanyCI() {
  return {
    companyName: document.getElementById('dh-ci-company-name')?.value.trim() || 'TheWayWorks',
    logoMark: document.getElementById('dh-ci-logo-mark')?.value.trim() || 'W',
    tagline: document.getElementById('dh-ci-tagline')?.value.trim() || 'THE WAY WORKS · AI APP BUILDER'
  };
}

function computeStyleMatchScore(style) {
  if (SELECTED_ADJECTIVES.size === 0 && SELECTED_VERBS.size === 0 && !SELECTED_DOMAIN) {
    return 0;
  }
  let score = 0;
  const adjs = style.identity?.adjectives || [];
  const verbs = style.identity?.verbs || [];
  const bizList = style.target_businesses || [];

  adjs.forEach(a => {
    if (SELECTED_ADJECTIVES.has(a)) score += 2;
  });
  verbs.forEach(v => {
    if (SELECTED_VERBS.has(v)) score += 2;
  });
  if (SELECTED_DOMAIN) {
    const matchedLayout = ALL_LAYOUTS.find(l => l.id === SELECTED_DOMAIN);
    if (matchedLayout && (matchedLayout.recommended_styles || []).includes(style.id)) {
      score += 3;
    }
    bizList.forEach(b => {
      if (b.includes(SELECTED_DOMAIN) || SELECTED_DOMAIN.includes(b)) score += 2;
    });
  }
  return score;
}

function computeLayoutMatchScore(layout) {
  if (SELECTED_ADJECTIVES.size === 0 && SELECTED_VERBS.size === 0 && !SELECTED_DOMAIN) {
    return 0;
  }
  let score = 0;
  if (SELECTED_DOMAIN && layout.id === SELECTED_DOMAIN) {
    score += 6;
  }
  if ((layout.recommended_styles || []).includes(CURRENT_STYLE.id) && (SELECTED_ADJECTIVES.size > 0 || SELECTED_VERBS.size > 0)) {
    score += 2;
  }
  return score;
}

function renderQuickStyleStrip() {
  const stripEl = document.getElementById('dh-quick-strip-list');
  if (!stripEl) return;

  stripEl.innerHTML = ALL_STYLES.map(style => {
    const isActive = style.id === CURRENT_STYLE.id;
    const score = computeStyleMatchScore(style);
    const numLabel = String(style.order).padStart(2, '0');
    return `
      <button class="dh-style-chip ${isActive ? 'active' : ''}" onclick="applyDesignStyle('${style.id}')" title="${style.tagline}">
        <span class="dh-chip-dot" style="background: ${style.colors.primary};"></span>
        <span class="dh-chip-dot" style="background: ${style.colors.background}; margin-left:-4px;"></span>
        <span>${numLabel}. ${style.name_ko}</span>
        ${score > 0 ? `<span class="dh-match-score">+${score}</span>` : ''}
      </button>
    `;
  }).join('');
}

function renderQuickLayoutStrip() {
  const stripEl = document.getElementById('dh-layout-strip-list');
  if (!stripEl) return;

  stripEl.innerHTML = ALL_LAYOUTS.map(layout => {
    const isActive = layout.id === CURRENT_LAYOUT.id;
    const score = computeLayoutMatchScore(layout);
    const numLabel = String(layout.order).padStart(2, '0');
    const shortDomain = layout.order === 0
      ? '기본 기업형'
      : layout.domain_ko.split('(')[0].trim();
    const refBrand = (layout.representative_companies || [])[0]?.split('(')[0].trim() || '';

    return `
      <button class="dh-layout-chip ${isActive ? 'active' : ''}" onclick="applyWebsiteLayout('${layout.id}', true)" title="${layout.domain_ko} — ${layout.layout_structure}">
        <span>${numLabel}. ${shortDomain}</span>
        ${refBrand ? `<span class="dh-ref-brand">${refBrand}</span>` : ''}
        ${score > 0 ? `<span class="dh-match-score">추천</span>` : ''}
      </button>
    `;
  }).join('');
}

function renderIdentityFilterTags() {
  const adjContainer = document.getElementById('dh-adj-tags');
  const verbContainer = document.getElementById('dh-verb-tags');
  const domContainer = document.getElementById('dh-domain-tags');
  if (!adjContainer || !verbContainer || !domContainer) return;

  const adjSet = new Set();
  const verbSet = new Set();

  ALL_STYLES.forEach(s => {
    (s.identity?.adjectives || []).slice(0, 4).forEach(a => adjSet.add(a));
    (s.identity?.verbs || []).slice(0, 3).forEach(v => verbSet.add(v));
  });

  adjContainer.innerHTML = Array.from(adjSet).map(adj => `
    <button class="dh-kw-tag ${SELECTED_ADJECTIVES.has(adj) ? 'selected' : ''}" onclick="toggleAdjectiveTag('${adj}')">
      #${adj}
    </button>
  `).join('');

  verbContainer.innerHTML = Array.from(verbSet).map(verb => `
    <button class="dh-kw-tag ${SELECTED_VERBS.has(verb) ? 'selected' : ''}" onclick="toggleVerbTag('${verb}')">
      ⚡ ${verb}
    </button>
  `).join('');

  domContainer.innerHTML = ALL_LAYOUTS.filter(l => l.order > 0).map(l => {
    const brand = (l.representative_companies || [])[0]?.split('(')[0].trim() || '';
    const domLabel = `${String(l.order).padStart(2, '0')}. ${l.domain_ko.split('(')[0].trim()} (${brand})`;
    return `
      <button class="dh-kw-tag ${SELECTED_DOMAIN === l.id ? 'selected' : ''}" onclick="toggleDomainTag('${l.id}')">
        📐 ${domLabel}
      </button>
    `;
  }).join('');
}

function toggleAdjectiveTag(adj) {
  if (SELECTED_ADJECTIVES.has(adj)) SELECTED_ADJECTIVES.delete(adj);
  else SELECTED_ADJECTIVES.add(adj);
  onIdentityFilterChanged();
}

function toggleVerbTag(verb) {
  if (SELECTED_VERBS.has(verb)) SELECTED_VERBS.delete(verb);
  else SELECTED_VERBS.add(verb);
  onIdentityFilterChanged();
}

function toggleDomainTag(layoutId) {
  SELECTED_DOMAIN = SELECTED_DOMAIN === layoutId ? '' : layoutId;
  if (SELECTED_DOMAIN) {
    applyWebsiteLayout(SELECTED_DOMAIN, false);
  }
  onIdentityFilterChanged();
}

function resetIdentityFilters() {
  SELECTED_ADJECTIVES.clear();
  SELECTED_VERBS.clear();
  SELECTED_DOMAIN = '';
  onIdentityFilterChanged();
}

function onIdentityFilterChanged() {
  renderIdentityFilterTags();
  renderQuickStyleStrip();
  renderQuickLayoutStrip();
  if (typeof renderAdvancedStudioWorkspace === 'function') {
    renderAdvancedStudioWorkspace();
  }

  const recBox = document.getElementById('dh-recommend-result');
  if (!recBox) return;

  const scoredStyles = ALL_STYLES
    .map(s => ({ style: s, score: computeStyleMatchScore(s) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const targetLayout = SELECTED_DOMAIN
    ? ALL_LAYOUTS.find(l => l.id === SELECTED_DOMAIN)
    : ALL_LAYOUTS.find(l => (l.recommended_styles || []).includes(scoredStyles[0]?.style?.id)) || CURRENT_LAYOUT;

  if (scoredStyles.length === 0 && !SELECTED_DOMAIN) {
    recBox.innerHTML = `<span style="color:#94A3B8; font-size:0.8rem;">위 형용사·동사·도메인 키워드를 클릭하면 가장 잘 어울리는 [스타일 + 레이아웃] 조합을 추천해 드립니다.</span>`;
    return;
  }

  const bestStyle = scoredStyles[0]?.style || ALL_STYLES.find(s => s.id === (targetLayout?.recommended_styles || [])[0]) || CURRENT_STYLE;
  const topStyles = scoredStyles.slice(0, 2);

  recBox.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:8px;">
      <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px; background:rgba(16,185,129,0.12); border:1px solid #34D399; padding:8px 12px; border-radius:8px;">
        <div style="font-size:0.8rem;">
          <strong style="color:#34D399;">🎯 최적 조합 추천:</strong>
          <span style="color:#FFFFFF; font-weight:700;">[${bestStyle.name_ko}] 스타일 × [${targetLayout.domain_ko.split('(')[0].trim()}] 레이아웃</span>
        </div>
        <button class="dh-ctrl-btn" style="background:#059669; border-color:#6EE7B7; color:white; padding:5px 12px;" onclick="applyStyleAndLayout('${bestStyle.id}', '${targetLayout.id}')">
          ⚡ 추천 스타일+레이아웃 동시 적용 →
        </button>
      </div>
      ${topStyles.length > 0 ? `
        <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
          <span style="font-size:0.75rem; color:#A5B4FC;">추천 스타일 개별 적용:</span>
          ${topStyles.map((item, idx) => `
            <button class="dh-ctrl-btn" style="padding:4px 9px; font-size:0.74rem;" onclick="applyDesignStyle('${item.style.id}')">
              ${idx + 1}위: ${item.style.name_ko} (+${item.score}점)
            </button>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

function applyStyleAndLayout(styleId, layoutId) {
  applyDesignStyle(styleId);
  applyWebsiteLayout(layoutId, true);
}

function applyDesignStyle(styleId) {
  const style = ALL_STYLES.find(s => s.id === styleId) || TWAYWORKS_ORIGINAL_STYLE;
  CURRENT_STYLE = style;

  const root = document.documentElement;
  const c = style.colors;
  const t = style.typography;
  const ui = style.template_definition?.ui_components || {};

  root.style.setProperty('--dh-primary', c.primary);
  root.style.setProperty('--dh-secondary', c.secondary);
  root.style.setProperty('--dh-accent', c.accent);
  root.style.setProperty('--dh-bg-main', c.background);
  root.style.setProperty('--dh-bg-surface', c.surface);
  root.style.setProperty('--dh-text-main', c.text_main);
  root.style.setProperty('--dh-text-secondary', c.text_muted);
  root.style.setProperty('--dh-text-muted', c.text_muted);
  root.style.setProperty('--dh-border', c.border);

  const cleanBorder = (ui.border_style || `1px solid ${c.border}`).split('(')[0].trim();
  root.style.setProperty('--dh-border-style', cleanBorder);

  let rMd = '14px';
  let rLg = '20px';
  let rBtn = '10px';
  if (style.id === 'style-01-minimal-essential' || style.id === 'style-06-editorial-magazine' || style.id === 'style-08-luxury-prestige') {
    rMd = '0px';
    rLg = '0px';
    rBtn = '0px';
  } else if (style.id === 'style-02-tech-neobrutalism') {
    rMd = '8px';
    rLg = '8px';
    rBtn = '8px';
  } else if (style.id === 'style-03-warm-artisan') {
    rMd = '20px';
    rLg = '24px';
    rBtn = '999px';
  } else if (style.id === 'style-07-pop-creative') {
    rMd = '24px';
    rLg = '28px';
    rBtn = '9999px';
  } else if (style.id === 'style-10-retro-indie-analog') {
    rMd = '4px';
    rLg = '6px';
    rBtn = '4px';
  } else if (ui.border_radius) {
    const parsedPx = ui.border_radius.split('~')[0].trim();
    if (parsedPx) {
      rMd = parsedPx;
      rLg = parsedPx;
      rBtn = parsedPx;
    }
  }
  root.style.setProperty('--dh-radius-sm', rMd === '0px' ? '0px' : '8px');
  root.style.setProperty('--dh-radius-md', rMd);
  root.style.setProperty('--dh-radius-lg', rLg);
  root.style.setProperty('--dh-radius-xl', rLg);
  root.style.setProperty('--dh-radius-btn', rBtn);

  const cleanShadow = (ui.shadow_style && !ui.shadow_style.startsWith('none'))
    ? ui.shadow_style
    : 'none';
  root.style.setProperty('--dh-shadow-sm', cleanShadow);
  root.style.setProperty('--dh-shadow-md', cleanShadow);
  root.style.setProperty('--dh-shadow-lg', cleanShadow);

  if (style.id === 'style-00-twayworks-original') {
    root.style.setProperty('--dh-hero-bg', 'radial-gradient(ellipse at 70% 15%, #3B28CC 0%, #1E1B4B 48%, #0B1120 100%)');
    root.style.setProperty('--dh-hero-text', '#FFFFFF');
    root.style.setProperty('--dh-hero-subtext', '#CBD5E1');
    root.style.setProperty('--dh-dark-sec-bg', '#0B1120');
    root.style.setProperty('--dh-dark-card-bg', '#131C31');
  } else if (c.color_scheme === 'dark') {
    root.style.setProperty('--dh-hero-bg', `radial-gradient(circle at 75% 20%, ${c.secondary}33 0%, ${c.background} 70%)`);
    root.style.setProperty('--dh-hero-text', c.text_main);
    root.style.setProperty('--dh-hero-subtext', c.text_muted);
    root.style.setProperty('--dh-dark-sec-bg', c.background);
    root.style.setProperty('--dh-dark-card-bg', c.surface);
  } else if (['style-01-minimal-essential', 'style-02-tech-neobrutalism', 'style-03-warm-artisan', 'style-06-editorial-magazine', 'style-07-pop-creative', 'style-09-clean-growth-bento', 'style-10-retro-indie-analog'].includes(style.id)) {
    root.style.setProperty('--dh-hero-bg', c.background);
    root.style.setProperty('--dh-hero-text', c.text_main);
    root.style.setProperty('--dh-hero-subtext', c.text_muted);
    root.style.setProperty('--dh-dark-sec-bg', '#141416');
    root.style.setProperty('--dh-dark-card-bg', '#1E2028');
  } else {
    root.style.setProperty('--dh-hero-bg', `linear-gradient(135deg, ${c.primary} 0%, ${c.secondary} 100%)`);
    root.style.setProperty('--dh-hero-text', '#FFFFFF');
    root.style.setProperty('--dh-hero-subtext', '#E2E8F0');
    root.style.setProperty('--dh-dark-sec-bg', c.primary);
    root.style.setProperty('--dh-dark-card-bg', '#163554');
  }

  root.style.setProperty('--dh-font-heading', t.heading_font);
  root.style.setProperty('--dh-font-body', t.body_font);
  root.style.setProperty('--dh-font-accent', t.accent_font);
  root.style.setProperty('--dh-heading-weight', t.heading_weight);
  root.style.setProperty('--dh-body-weight', t.body_weight);
  root.style.setProperty('--dh-letter-spacing', t.letter_spacing);
  root.style.setProperty('--dh-line-height', t.line_height);

  document.body.dataset.styleId = style.id;

  updateStudioBarUI();
  updateHeroIdentityBanner();
  renderQuickStyleStrip();
  renderLayoutBlueprintBox();

  if (CURRENT_LAYOUT.order > 0) {
    renderLiveDomainLayoutStage(CURRENT_LAYOUT);
  }
  if (typeof refreshV4StageViews === 'function') {
    refreshV4StageViews();
  }
}

function applyWebsiteLayout(layoutId, scrollIntoStage = false) {
  const layout = ALL_LAYOUTS.find(l => l.id === layoutId) || TWAYWORKS_STANDARD_LAYOUT;
  CURRENT_LAYOUT = layout;
  document.body.dataset.layoutId = layout.id;

  updateStudioBarUI();
  updateHeroIdentityBanner();
  renderQuickLayoutStrip();
  renderLayoutBlueprintBox();
  syncLayoutVisibilityAndStage();
  if (typeof refreshV4StageViews === 'function') {
    refreshV4StageViews();
  }

  if (scrollIntoStage && layout.order > 0 && CURRENT_APP_STAGE === 'sample') {
    const wrapper = document.getElementById('dh-layout-live-wrapper');
    if (wrapper) {
      wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

function cycleLayoutDisplayMode() {
  if (LAYOUT_DISPLAY_MODE === 'hybrid') {
    LAYOUT_DISPLAY_MODE = 'layout-only';
  } else if (LAYOUT_DISPLAY_MODE === 'layout-only') {
    LAYOUT_DISPLAY_MODE = 'standard-only';
  } else {
    LAYOUT_DISPLAY_MODE = 'hybrid';
  }
  syncLayoutVisibilityAndStage();
}

function setLayoutDisplayMode(mode) {
  LAYOUT_DISPLAY_MODE = mode;
  syncLayoutVisibilityAndStage();
}

function syncLayoutVisibilityAndStage() {
  const wrapper = document.getElementById('dh-layout-live-wrapper');
  const labelEl = document.getElementById('dh-viewmode-label');

  const modeLabels = {
    'hybrid': '레이아웃+기본홈 통합',
    'layout-only': '도메인 레이아웃 전용',
    'standard-only': '표준 기업 멀티뷰'
  };
  if (labelEl) labelEl.textContent = modeLabels[LAYOUT_DISPLAY_MODE] || '통합 뷰';

  if (CURRENT_LAYOUT.order === 0 || LAYOUT_DISPLAY_MODE === 'standard-only') {
    if (wrapper) wrapper.classList.remove('active');
    document.body.classList.remove('dh-mode-layout-only');
  } else {
    if (wrapper) wrapper.classList.add('active');
    document.body.classList.toggle('dh-mode-layout-only', LAYOUT_DISPLAY_MODE === 'layout-only');
    renderLiveDomainLayoutStage(CURRENT_LAYOUT);
  }
}

function updateStudioBarUI() {
  const style = CURRENT_STYLE;
  const layout = CURRENT_LAYOUT;

  const sNameEl = document.getElementById('dh-active-style-name');
  const swatchesEl = document.getElementById('dh-active-swatches');
  if (sNameEl) {
    const num = String(style.order).padStart(2, '0');
    sNameEl.textContent = `${num}. ${style.name_ko}`;
  }
  if (swatchesEl) {
    const c = style.colors;
    swatchesEl.innerHTML = [c.primary, c.secondary, c.accent, c.background, c.text_main]
      .map(hex => `<span class="dh-mini-swatch" style="background:${hex}" title="${hex}"></span>`)
      .join('');
  }

  const lNameEl = document.getElementById('dh-active-layout-name');
  const lRefEl = document.getElementById('dh-active-layout-ref');
  if (lNameEl) {
    const lNum = String(layout.order).padStart(2, '0');
    const shortDom = layout.order === 0 ? '기본 기업형 (더웨이웍스)' : layout.domain_ko.split('(')[0].trim();
    lNameEl.textContent = `${lNum}. ${shortDom}`;
  }
  if (lRefEl) {
    lRefEl.textContent = (layout.representative_companies || [])[0] || 'Standard';
  }
}

function renderLayoutBlueprintBox() {
  const box = document.getElementById('dh-layout-blueprint-box');
  if (!box) return;

  const l = CURRENT_LAYOUT;
  const num = String(l.order).padStart(2, '0');
  const companies = (l.representative_companies || []).join(', ');
  const recStyles = (l.recommended_styles || [])
    .map(sid => ALL_STYLES.find(s => s.id === sid))
    .filter(Boolean);

  box.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:6px;">
      <strong style="color:#6EE7B7; font-size:0.86rem;">LAYOUT ${num} · ${l.domain_ko}</strong>
      <span style="font-size:0.73rem; background:rgba(16,185,129,0.2); color:#A7F3D0; padding:2px 8px; border-radius:999px;">대표: ${companies}</span>
    </div>
    <div style="color:#E2E8F0; font-weight:700; margin-bottom:6px;">📐 구조: ${l.layout_structure}</div>

    <div class="dh-bp-section head-sec">
      <strong style="color:#A5B4FC; display:block; margin-bottom:2px;">[Head 구조] ${l.head_spec?.structure_name || ''}</strong>
      <span style="color:#CBD5E1; font-size:0.76rem;">${l.head_spec?.description || ''}</span>
    </div>

    <div class="dh-bp-section">
      <strong style="color:#6EE7B7; display:block; margin-bottom:2px;">[Body 구조] ${l.body_spec?.structure_name || ''}</strong>
      <span style="color:#CBD5E1; font-size:0.76rem;">${l.body_spec?.description || ''}</span>
    </div>

    ${recStyles.length > 0 ? `
      <div style="margin-top:8px; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
        <span style="font-size:0.73rem; color:#94A3B8;">이 레이아웃과 잘 어울리는 스타일:</span>
        ${recStyles.map(rs => `
          <button class="dh-ctrl-btn" style="padding:3px 8px; font-size:0.72rem;" onclick="applyDesignStyle('${rs.id}')">
            🎨 ${rs.name_ko}
          </button>
        `).join('')}
      </div>
    ` : ''}
  `;
}

function updateHeroIdentityBanner() {
  const banner = document.getElementById('dh-hero-identity-banner');
  if (!banner) return;

  const style = CURRENT_STYLE;
  const layout = CURRENT_LAYOUT;
  const isLightHero = ['style-01-minimal-essential', 'style-02-tech-neobrutalism', 'style-03-warm-artisan', 'style-06-editorial-magazine', 'style-07-pop-creative', 'style-09-clean-growth-bento', 'style-10-retro-indie-analog'].includes(style.id);

  banner.style.background = isLightHero ? style.colors.surface : 'rgba(255, 255, 255, 0.1)';
  banner.style.borderColor = style.colors.border;

  const sNum = String(style.order).padStart(2, '0');
  const lNum = String(layout.order).padStart(2, '0');
  const adjs = (style.identity?.adjectives || []).map(a => `<span class="dh-kw-chip" style="background:${style.colors.primary}22; color:${isLightHero ? style.colors.text_main : '#FFFFFF'}; border:1px solid ${style.colors.primary}55;">#${a}</span>`).join('');
  const verbs = (style.identity?.verbs || []).map(v => `<span class="dh-kw-chip" style="background:${style.colors.secondary}22; color:${isLightHero ? style.colors.text_main : '#FFFFFF'}; border:1px solid ${style.colors.secondary}55;">⚡${v}</span>`).join('');

  banner.innerHTML = `
    <div class="dh-banner-top">
      <div style="display:flex; gap:6px; flex-wrap:wrap;">
        <span class="dh-style-pill">STYLE ${sNum} · ${style.name_ko}</span>
        <span class="dh-style-pill" style="background:#059669;">LAYOUT ${lNum} · ${layout.domain_ko.split('(')[0].trim()} (${(layout.representative_companies || [])[0] || ''})</span>
      </div>
      <span class="mono" style="font-size:0.73rem; opacity:0.85;">${layout.layout_structure}</span>
    </div>
    <div class="dh-sample-copy">"${style.identity?.sample_copy || ''}"</div>
    <div class="dh-kw-row" style="margin-bottom:5px;">
      <strong style="margin-right:4px;">정체성 형용사:</strong> ${adjs}
    </div>
    <div class="dh-kw-row">
      <strong style="margin-right:4px;">핵심 동사:</strong> ${verbs}
    </div>
  `;
}

// =====================================================================
// INTERACTIVE DOMAIN LAYOUT SHOWCASE RENDERER (Layouts 01 ~ 10)
// =====================================================================
function getAppsList() {
  return (typeof PRODUCTION_APPS !== 'undefined' && Array.isArray(PRODUCTION_APPS))
    ? PRODUCTION_APPS
    : [];
}

function renderLiveDomainLayoutStage(layout) {
  const stageEl = document.getElementById('dh-layout-live-stage');
  if (!stageEl || layout.order === 0) return;

  const ci = getCompanyCI();
  const sNum = String(CURRENT_STYLE.order).padStart(2, '0');
  const lNum = String(layout.order).padStart(2, '0');
  const companies = (layout.representative_companies || []).join(' · ');

  const ribbonHtml = `
    <div class="dl-arch-ribbon">
      <div class="dl-arch-ribbon-inner">
        <div class="dl-arch-badges">
          <span class="dl-pill-tag">📐 LAYOUT ${lNum} · ${layout.domain_ko}</span>
          <span style="font-size:0.82rem; font-weight:800; color:#FFFFFF;">대표 업체: ${companies}</span>
          <span class="dl-pill-tag head-tag">Head: ${layout.head_spec?.structure_name || ''}</span>
          <span class="dl-pill-tag body-tag">Body: ${layout.body_spec?.structure_name || ''}</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:0.75rem; color:#A5B4FC;">적용 스타일: <strong>${sNum}. ${CURRENT_STYLE.name_ko}</strong></span>
          <button class="dh-ctrl-btn" style="padding:4px 10px; font-size:0.74rem;" onclick="setLayoutDisplayMode(LAYOUT_DISPLAY_MODE === 'layout-only' ? 'hybrid' : 'layout-only')">
            ${LAYOUT_DISPLAY_MODE === 'layout-only' ? '📑 하단 기본 홈페이지도 함께 보기' : '🖥️ 이 레이아웃만 단독 풀스크린으로 보기'}
          </button>
          <button class="dh-ctrl-btn" style="padding:4px 10px; font-size:0.74rem;" onclick="applyWebsiteLayout('layout-00-twayworks-standard')">
            ✕ 기본 기업형(00)으로 복귀
          </button>
        </div>
      </div>
    </div>
  `;

  let domainContentHtml = '';
  switch (layout.id) {
    case 'layout-01-ecommerce-grid':
      domainContentHtml = buildLayout01Ecommerce(layout, ci);
      break;
    case 'layout-02-ott-carousel':
      domainContentHtml = buildLayout02Ott(layout, ci);
      break;
    case 'layout-03-entertainment-booking':
      domainContentHtml = buildLayout03Entertainment(layout, ci);
      break;
    case 'layout-04-portal-3col-news':
      domainContentHtml = buildLayout04Portal(layout, ci);
      break;
    case 'layout-05-saas-workspace-split':
      domainContentHtml = buildLayout05Saas(layout, ci);
      break;
    case 'layout-06-travel-map-split':
      domainContentHtml = buildLayout06Travel(layout, ci);
      break;
    case 'layout-07-edutech-curation-grid':
      domainContentHtml = buildLayout07Edutech(layout, ci);
      break;
    case 'layout-08-recruiting-career-feed':
      domainContentHtml = buildLayout08Recruiting(layout, ci);
      break;
    case 'layout-09-proptech-fullscreen-map':
      domainContentHtml = buildLayout09Proptech(layout, ci);
      break;
    case 'layout-10-brand-onepage-story':
      domainContentHtml = buildLayout10Branding(layout, ci);
      break;
    default:
      domainContentHtml = buildDynamicCustomLayout(layout, ci);
      break;
  }

  stageEl.innerHTML = ribbonHtml + domainContentHtml;
}

// ---------------------------------------------------------------------
// 1. E-COMMERCE LAYOUT (무신사 Musinsa Style)
// ---------------------------------------------------------------------
function buildLayout01Ecommerce(layout, ci) {
  const apps = getAppsList();
  const cat = DOMAIN_STAGE_STATE.ecomCategory;
  const q = DOMAIN_STAGE_STATE.ecomSearch.trim().toLowerCase();

  const filtered = apps.filter(app => {
    const matchCat = cat === 'all' || app.category === cat;
    const matchQ = !q || app.title.toLowerCase().includes(q) || app.desc.toLowerCase().includes(q) || app.stack.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  const prices = ['무료 개통', '월 0원 (스낵앱)', '당일 10초 개통', '무료 나눔', '즉시 배선', '0원 (설치ZERO)'];
  const discounts = ['100%', '90%', '85%', '95%', '88%', '92%'];

  return `
    <div class="dl-ecom-head">
      <div class="dl-ecom-top-promo">
        ⚡ [${ci.companyName} 스토어] 말 한마디(Vibe)로 주문하면 오늘 바로 개통되는 스낵 앱 전 품목 설치비 0원 프로모션!
      </div>
      <div class="dl-stage-container">
        <div class="dl-section-label-bar">
          <span>[HEAD 영역] 로고 + 통합 검색바 + 마이페이지/장바구니 + 1차 카테고리 탭 (무신사 스타일)</span>
          <span>Sticky Header</span>
        </div>
        <div class="dl-ecom-mainbar">
          <div class="brand-logo" onclick="navigateTo('home')">
            <div class="logo-mark">${ci.logoMark}</div>
            <div class="brand-text">
              <span class="brand-name">${ci.companyName} STORE</span>
              <span class="brand-tagline">${ci.tagline}</span>
            </div>
          </div>

          <div class="dl-ecom-search">
            <span>🔍</span>
            <input type="text" placeholder="원하는 비즈니스 스낵앱, 기술 부품(FOTOSTREAM, 예약, 매거진)을 검색하세요..." value="${DOMAIN_STAGE_STATE.ecomSearch}" oninput="handleEcomSearch(this.value)" />
          </div>

          <div class="dl-ecom-utils">
            <button class="btn btn-sm btn-outline" onclick="navigateTo('contact')">👤 마이페이지</button>
            <button class="btn btn-sm btn-outline">♥ 찜한앱 (12)</button>
            <button class="btn btn-sm btn-primary" onclick="navigateTo('contact')">🛒 스낵앱 바구니 (${DOMAIN_STAGE_STATE.ecomCartCount})</button>
          </div>
        </div>

        <div class="dl-ecom-cat-bar">
          <button class="dl-ecom-cat-tab ${cat === 'all' ? 'active' : ''}" onclick="setEcomCategory('all')">전체 스토어 (12)</button>
          <button class="dl-ecom-cat-tab ${cat === 'media' ? 'active' : ''}" onclick="setEcomCategory('media')">📣 브랜드 매거진 · 미디어 (2)</button>
          <button class="dl-ecom-cat-tab ${cat === 'event' ? 'active' : ''}" onclick="setEcomCategory('event')">🔥 마케팅 현황판 · 투표 (4)</button>
          <button class="dl-ecom-cat-tab ${cat === 'admin' ? 'active' : ''}" onclick="setEcomCategory('admin')">🔐 스마트예약 · 1초인증 · 단축URL (4)</button>
          <button class="dl-ecom-cat-tab ${cat === 'worship' ? 'active' : ''}" onclick="setEcomCategory('worship')">📄 정기문서 자동화 · 나눔카드 (2)</button>
        </div>
      </div>
    </div>

    <div class="dl-stage-container">
      <div class="dl-section-label-bar">
        <span>[BODY 영역] 좌측 다중 필터 사이드바(타깃/브랜드/가격/할인율) + 우측 4열 카드형 상품 그리드</span>
        <span>Grid: 250px 1fr</span>
      </div>

      <div class="dl-ecom-body-grid">
        <!-- Left Multi-Filter Sidebar -->
        <aside class="dl-ecom-sidebar">
          <div class="dl-filter-sec">
            <h5>🎯 1. 도입 타깃 (성별/기업규모)</h5>
            <label class="dl-filter-check"><span><input type="checkbox" checked onchange="renderLiveDomainLayoutStage(CURRENT_LAYOUT)" /> 1인 스냅 컴퍼니</span> <strong>12</strong></label>
            <label class="dl-filter-check"><span><input type="checkbox" checked onchange="renderLiveDomainLayoutStage(CURRENT_LAYOUT)" /> 중소·스타트업 AX</span> <strong>8</strong></label>
            <label class="dl-filter-check"><span><input type="checkbox" checked onchange="renderLiveDomainLayoutStage(CURRENT_LAYOUT)" /> 스마트 처치·공동체</span> <strong>12</strong></label>
          </div>

          <div class="dl-filter-sec">
            <h5>⚡ 2. 핵심 엔진 브랜드 (Brand)</h5>
            <label class="dl-filter-check"><span><input type="checkbox" checked /> VAIYER 자동배선</span> <strong>12</strong></label>
            <label class="dl-filter-check"><span><input type="checkbox" checked /> FOTOSTREAM 쇼츠합성</span> <strong>4</strong></label>
            <label class="dl-filter-check"><span><input type="checkbox" checked /> VDSTREAM 1초재생</span> <strong>4</strong></label>
            <label class="dl-filter-check"><span><input type="checkbox" checked /> Proxy Auth 1초인증</span> <strong>12</strong></label>
          </div>

          <div class="dl-filter-sec">
            <h5>💰 3. 외주비 절감률 / 구축 시간</h5>
            <label class="dl-filter-check"><span><input type="radio" name="ec_price" checked /> 전체 가격대</span></label>
            <label class="dl-filter-check"><span><input type="radio" name="ec_price" /> 당일 10초 즉시 개통</span></label>
            <label class="dl-filter-check"><span><input type="radio" name="ec_price" /> 설치비·유지비 0원</span></label>
          </div>

          <button class="btn btn-sm btn-primary" style="width:100%;" onclick="navigateTo('contact')">
            ✨ 선택 조건으로 3분 맞춤 진단 →
          </button>
        </aside>

        <!-- Right Infinite-Scroll Style Product Card Grid -->
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
            <strong style="font-size:0.95rem;">총 <span style="color:var(--dh-primary);">${filtered.length}개</span>의 실전 스낵 앱 상품이 진열되어 있습니다</strong>
            <div style="display:flex; gap:6px;">
              <span class="tech-tag">인기 랭킹순</span>
              <span class="tech-tag">좋아요 많은순</span>
              <span class="tech-tag">당일 개통순</span>
            </div>
          </div>

          <div class="dl-ecom-product-grid">
            ${filtered.map((app, idx) => {
              const likes = DOMAIN_STAGE_STATE.ecomLikes[app.id] || 500;
              const disc = discounts[idx % discounts.length];
              const pr = prices[idx % prices.length];
              return `
                <article class="dl-ecom-card">
                  <div>
                    <div class="dl-ecom-thumb" onclick="openLightbox('${app.img}', '${app.title} — ${app.endpoint}')">
                      <img src="${app.img}" alt="${app.title}" />
                      <span class="dl-ecom-rank-badge">RANK ${idx + 1}</span>
                    </div>
                    <div class="dl-ecom-card-info">
                      <div class="dl-ecom-brand">${ci.companyName} · ${app.stack}</div>
                      <h4 class="dl-ecom-title">${app.title}</h4>
                      <div class="dl-ecom-price-row">
                        <span class="dl-ecom-discount">${disc} 절감</span>
                        <span class="dl-ecom-price">${pr}</span>
                      </div>
                      <p style="font-size:0.78rem; color:var(--dh-text-secondary); margin-bottom:10px; line-height:1.45;">
                        ${app.desc}
                      </p>
                    </div>
                  </div>
                  <div style="padding:0 14px 14px; display:flex; justify-content:space-between; align-items:center; gap:6px;">
                    <button class="btn btn-sm btn-outline" style="padding:6px 10px; font-size:0.76rem;" onclick="toggleEcomLike(${app.id})">
                      <span style="color:#EF4444;">♥</span> ${likes.toLocaleString()}
                    </button>
                    <button class="btn btn-sm btn-primary" style="flex:1; padding:6px 10px; font-size:0.76rem;" onclick="addEcomCart('${app.title}')">
                      🛒 스낵앱 담기
                    </button>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function setEcomCategory(cat) {
  DOMAIN_STAGE_STATE.ecomCategory = cat;
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}
function handleEcomSearch(val) {
  DOMAIN_STAGE_STATE.ecomSearch = val;
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}
function toggleEcomLike(appId) {
  DOMAIN_STAGE_STATE.ecomLikes[appId] = (DOMAIN_STAGE_STATE.ecomLikes[appId] || 500) + 1;
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}
function addEcomCart(title) {
  DOMAIN_STAGE_STATE.ecomCartCount += 1;
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
  copyTextToClipboard(title, `🛒 '${title}'이(가) 스낵앱 바구니에 담겼습니다!`);
}

// ---------------------------------------------------------------------
// 2. OTT & CONTENT STREAMING LAYOUT (넷플릭스 Netflix / 왓챠 Style)
// ---------------------------------------------------------------------
function buildLayout02Ott(layout, ci) {
  const apps = getAppsList();
  const top10 = apps.slice(0, 10);
  const mediaRow = apps.filter(a => a.category === 'media' || a.category === 'event');

  return `
    <div class="dl-ott-stage">
      <!-- Head: Transparent Minimal Fixed Navigation -->
      <div class="dl-ott-head">
        <div style="display:flex; align-items:center; gap:28px; flex-wrap:wrap;">
          <div class="brand-logo" onclick="navigateTo('home')">
            <div class="logo-mark" style="background:#E50914; border:none;">${ci.logoMark}</div>
            <div class="brand-text">
              <span class="brand-name" style="color:#FFFFFF;">${ci.companyName} STREAM</span>
              <span class="brand-tagline" style="color:#F87171;">ORIGINAL VAIYER OTT</span>
            </div>
          </div>
          <nav class="dl-ott-nav">
            <button class="active">홈</button>
            <button onclick="scrollOttRow('ott-row-1', 400)">대한민국 TOP 10 스낵앱</button>
            <button onclick="scrollOttRow('ott-row-2', 400)">4대 코어 엔진 오리지널</button>
            <button onclick="navigateTo('portfolio')">내가 찜한 콘텐츠 (${DOMAIN_STAGE_STATE.ottMyList.size})</button>
          </nav>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <span style="font-size:0.8rem; color:#94A3B8;">🔍 실시간 스트리밍 중</span>
          <span class="status-badge">4K HLS 무버퍼링</span>
        </div>
      </div>

      <!-- Body Part 1: Immersive Fullscreen Hero Banner -->
      <div class="dl-ott-billboard" style="background-image:url('img/snap-app-fotostream-01.png');">
        <div class="dl-ott-billboard-overlay"></div>
        <div class="dl-ott-billboard-content">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
            <span style="background:#E50914; color:white; font-weight:900; font-size:0.72rem; padding:3px 8px; border-radius:3px;">${ci.logoMark} SERIES</span>
            <span style="color:#34D399; font-weight:800; font-size:0.84rem;">99% 비즈니스 일치</span>
            <span style="color:#CBD5E1; font-size:0.8rem;">2026 · 에피소드 12개 · 9:16 Shorts &amp; 1080p HD</span>
          </div>
          <h2 style="font-size:clamp(1.9rem, 3.2vw, 2.8rem); color:#FFFFFF; margin-bottom:12px; line-height:1.18;">
            FOTOSTREAM × VDSTREAM:<br />사진 49장이 1초 만에 쇼츠가 되는 기적
          </h2>
          <p style="font-size:0.95rem; color:#E2E8F0; margin-bottom:20px; line-height:1.65;">
            영상 편집을 몰라도 사진만 넣으면 BGM과 줌 효과가 입혀진 홍보 쇼츠가 완성되고, HLS 조각 전송으로 다운로드 대기 없이 누르자마자 1초 만에 재생되는 ${ci.companyName} 오리지널 블록버스터 엔진!
          </p>
          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <button class="btn btn-primary" style="background:#FFFFFF; color:#090C15; border:none;" onclick="openLightbox('img/snap-app-fotostream-02.png', 'FOTOSTREAM × VDSTREAM — 오리지널 쇼츠 & 스트리밍 플레이어')">
              ▶ 지금 1초 만에 재생
            </button>
            <button class="btn btn-secondary" onclick="navigateTo('technology', 'tech-vaiyer')">
              ⓘ 상세 에피소드 &amp; 배선 원리
            </button>
          </div>
        </div>
      </div>

      <!-- Body Part 2: Row-based Horizontal Carousels -->
      <div class="dl-ott-row-section">
        <div class="dl-ott-row-header">
          <h3 style="font-size:1.25rem; color:#FFFFFF;">🔥 오늘 대한민국 TOP 10 프로덕션 스낵 앱 (좌우 슬라이딩 Row)</h3>
          <div style="display:flex; gap:6px;">
            <button class="dh-ctrl-btn" onclick="scrollOttRow('ott-row-1', -520)">◀ 이전</button>
            <button class="dh-ctrl-btn" onclick="scrollOttRow('ott-row-1', 520)">다음 ▶</button>
          </div>
        </div>
        <div id="ott-row-1" class="dl-ott-row-track">
          ${top10.map((app, idx) => `
            <div class="dl-ott-card">
              <span class="dl-ott-rank-num">${idx + 1}</span>
              <img src="${app.img}" alt="${app.title}" style="width:100%; height:145px; object-fit:cover; object-position:top; cursor:zoom-in;" onclick="openLightbox('${app.img}', 'TOP ${idx + 1}: ${app.title}')" />
              <div style="padding:14px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                  <span style="color:#34D399; font-size:0.74rem; font-weight:800;">99% 매칭 · 상시 가동</span>
                  <button class="dh-ctrl-btn" style="padding:2px 7px; font-size:0.7rem;" onclick="toggleOttMyList(${app.id})">
                    ${DOMAIN_STAGE_STATE.ottMyList.has(app.id) ? '✓ 찜완료' : '+ 찜하기'}
                  </button>
                </div>
                <h4 style="font-size:0.94rem; color:#FFFFFF; margin-bottom:6px;">${app.title}</h4>
                <p style="font-size:0.77rem; color:#94A3B8; line-height:1.45;">${app.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="dl-ott-row-section">
        <div class="dl-ott-row-header">
          <h3 style="font-size:1.25rem; color:#FFFFFF;">🎬 1인 스냅 컴퍼니 정주행 필수! 마케팅·매거진 시리즈</h3>
          <div style="display:flex; gap:6px;">
            <button class="dh-ctrl-btn" onclick="scrollOttRow('ott-row-2', -520)">◀ 이전</button>
            <button class="dh-ctrl-btn" onclick="scrollOttRow('ott-row-2', 520)">다음 ▶</button>
          </div>
        </div>
        <div id="ott-row-2" class="dl-ott-row-track">
          ${mediaRow.map(app => `
            <div class="dl-ott-card" style="width:310px;">
              <img src="${app.img}" alt="${app.title}" style="width:100%; height:155px; object-fit:cover; object-position:top; cursor:zoom-in;" onclick="openLightbox('${app.img}', '${app.title}')" />
              <div style="padding:14px;">
                <span class="tech-tag" style="background:rgba(255,255,255,0.1); color:#A5B4FC; border:none; margin-bottom:6px;">${app.stack} · ${app.port}</span>
                <h4 style="font-size:0.96rem; color:#FFFFFF; margin-bottom:6px;">${app.title}</h4>
                <p style="font-size:0.78rem; color:#CBD5E1;">${app.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function scrollOttRow(rowId, delta) {
  const el = document.getElementById(rowId);
  if (el) el.scrollBy({ left: delta, behavior: 'smooth' });
}
function toggleOttMyList(appId) {
  if (DOMAIN_STAGE_STATE.ottMyList.has(appId)) DOMAIN_STAGE_STATE.ottMyList.delete(appId);
  else DOMAIN_STAGE_STATE.ottMyList.add(appId);
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}

// ---------------------------------------------------------------------
// 3. ENTERTAINMENT & TICKET BOOKING (메가박스 Megabox / CGV Style)
// ---------------------------------------------------------------------
function buildLayout03Entertainment(layout, ci) {
  const apps = getAppsList();
  const tab = DOMAIN_STAGE_STATE.entChartTab;
  const chartApps = (tab === 'all' ? apps : apps.filter(a => a.category === tab)).slice(0, 8);

  return `
    <!-- Head: GNB + Sticky Quick-Booking Widget Bar -->
    <div style="background:var(--dh-bg-surface); border-bottom:var(--dh-border-style); padding:14px 24px;">
      <div class="dl-stage-container" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div class="brand-logo" onclick="navigateTo('home')">
          <div class="logo-mark">${ci.logoMark}</div>
          <div class="brand-text">
            <span class="brand-name">${ci.companyName} CINEMA &amp; TICKET</span>
            <span class="brand-tagline">QUICK SNACK-APP BOOKING</span>
          </div>
        </div>
        <div style="display:flex; gap:16px; font-weight:700; font-size:0.9rem;">
          <a href="javascript:void(0)" onclick="setEntChartTab('all')">🎬 스낵앱 박스오피스</a>
          <a href="javascript:void(0)" onclick="setEntChartTab('event')">🔥 이벤트·투표 상영관</a>
          <a href="javascript:void(0)" onclick="setEntChartTab('admin')">🏛️ 스마트예약·인증관</a>
          <a href="javascript:void(0)" onclick="navigateTo('contact')">🎟️ 3분 무료 예매/진단</a>
        </div>
      </div>
    </div>

    <div class="dl-ent-quickbar-wrap">
      <div class="dl-ent-quickbar-grid">
        <div class="dl-ent-field">
          <label>🎬 STEP 1. 개통할 스낵앱(상영작) 선택</label>
          <select onchange="DOMAIN_STAGE_STATE.entSelectedApp = this.value">
            ${apps.map(a => `<option value="${a.title}" ${DOMAIN_STAGE_STATE.entSelectedApp === a.title ? 'selected' : ''}>${a.title}</option>`).join('')}
          </select>
        </div>
        <div class="dl-ent-field">
          <label>🏛️ STEP 2. 도입 도메인(극장) 선택</label>
          <select onchange="DOMAIN_STAGE_STATE.entSelectedTheater = this.value">
            <option value="강남 1인스냅컴퍼니 전용관 (VAIYER 관)">강남 1인스냅컴퍼니 전용관 (VAIYER 관)</option>
            <option value="판교 기업AX 자동화 특별관 (Wisdom 관)">판교 기업AX 자동화 특별관 (Wisdom 관)</option>
            <option value="홀리씨즈 스마트처치 나눔관 (12종 패키지)">홀리씨즈 스마트처치 나눔관 (12종 패키지)</option>
          </select>
        </div>
        <div class="dl-ent-field">
          <label>📅 STEP 3. 개통 희망 날짜/회차</label>
          <select onchange="DOMAIN_STAGE_STATE.entSelectedDate = this.value">
            <option value="오늘 즉시 개통 (1회차 · 10초 발권)">오늘 즉시 개통 (1회차 · 10초 발권)</option>
            <option value="내일 오전 캠페인 오픈 (2회차)">내일 오전 캠페인 오픈 (2회차)</option>
            <option value="이번 주말 행사 맞춤 개통 (3회차)">이번 주말 행사 맞춤 개통 (3회차)</option>
          </select>
        </div>
        <button class="btn btn-primary" style="background:var(--dh-accent); color:#064E3B; font-weight:900; padding:11px 20px;" onclick="issueEntQuickTicket()">
          🎟️ 빠른 스낵앱 예매/개통
        </button>
      </div>
      ${DOMAIN_STAGE_STATE.entTicketIssued ? `
        <div style="max-width:1320px; margin:12px auto 0; background:rgba(16,185,129,0.2); border:1px solid #34D399; border-radius:8px; padding:10px 16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
          <span>✅ <strong>[빠른 예매 티켓 발권 완료]</strong> 상영작: <strong>${DOMAIN_STAGE_STATE.entTicketIssued.app}</strong> | 극장: ${DOMAIN_STAGE_STATE.entTicketIssued.theater} | 일시: ${DOMAIN_STAGE_STATE.entTicketIssued.date}</span>
          <button class="btn btn-sm btn-primary" onclick="navigateTo('contact')">실제 배선 설계도 수령하기 →</button>
        </div>
      ` : ''}
    </div>

    <!-- Body: Tabbed Box-Office Ranking Chart + Trailer Module -->
    <div class="dl-stage-container" style="padding-top:20px; padding-bottom:44px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div>
          <span class="eyebrow eyebrow-indigo" style="margin-bottom:4px;">BOX OFFICE RANKING CHART</span>
          <h3 style="font-size:1.45rem;">🏆 실시간 스낵 앱 박스오피스 순위 (NO.1 ~ NO.8)</h3>
        </div>
        <div class="filter-tabs">
          <button class="filter-chip ${tab === 'all' ? 'active' : ''}" onclick="setEntChartTab('all')">전체 박스오피스</button>
          <button class="filter-chip ${tab === 'event' ? 'active' : ''}" onclick="setEntChartTab('event')">이벤트·투표 차트</button>
          <button class="filter-chip ${tab === 'admin' ? 'active' : ''}" onclick="setEntChartTab('admin')">예약·인증 차트</button>
        </div>
      </div>

      <div class="dl-ent-chart-grid">
        ${chartApps.map((app, idx) => `
          <article class="dl-ent-poster-card">
            <div>
              <div class="dl-ent-poster-top">
                <img src="${app.img}" alt="${app.title}" />
                <span class="dl-ent-no-badge">NO.${idx + 1}</span>
              </div>
              <div style="padding:14px;">
                <h4 style="font-size:0.98rem; margin-bottom:6px;">${app.title}</h4>
                <div style="font-size:0.78rem; color:var(--dh-text-secondary); margin-bottom:8px;">
                  예매율 <strong style="color:var(--dh-primary);">${(42.5 - idx * 3.8).toFixed(1)}%</strong> · 🥚 평점 <strong>99%</strong>
                </div>
                <p style="font-size:0.78rem; color:var(--dh-text-secondary); line-height:1.45;">${app.desc}</p>
              </div>
            </div>
            <div style="padding:0 14px 14px; display:grid; grid-template-columns:1fr 1fr; gap:6px;">
              <button class="btn btn-sm btn-outline" onclick="openLightbox('${app.img}', 'NO.${idx + 1} ${app.title}')">스틸컷 보기</button>
              <button class="btn btn-sm btn-primary" onclick="quickBookSpecificApp('${app.title}')">🎟️ 바로예매</button>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}

function setEntChartTab(tab) {
  DOMAIN_STAGE_STATE.entChartTab = tab;
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}
function issueEntQuickTicket() {
  DOMAIN_STAGE_STATE.entTicketIssued = {
    app: DOMAIN_STAGE_STATE.entSelectedApp,
    theater: DOMAIN_STAGE_STATE.entSelectedTheater,
    date: DOMAIN_STAGE_STATE.entSelectedDate
  };
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}
function quickBookSpecificApp(appTitle) {
  DOMAIN_STAGE_STATE.entSelectedApp = appTitle;
  issueEntQuickTicket();
}

// ---------------------------------------------------------------------
// 4. WEB PORTAL & NEWS MEDIA (네이버 뉴스 / 조선일보 3단 컬럼 그리드)
// ---------------------------------------------------------------------
function buildLayout04Portal(layout, ci) {
  const apps = getAppsList();
  return `
    <!-- Head: Portal Search & Real-time Issue Keyword Bar -->
    <div style="background:var(--dh-bg-surface); border-bottom:2px solid var(--dh-primary); padding:16px 0;">
      <div class="dl-stage-container">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:12px;">
          <div class="brand-logo" onclick="navigateTo('home')">
            <div class="logo-mark">${ci.logoMark}</div>
            <div class="brand-text">
              <span class="brand-name">${ci.companyName} NEWS &amp; PORTAL</span>
              <span class="brand-tagline">2026. 11. 06. 종합 미디어 에디션</span>
            </div>
          </div>

          <div style="flex:1; max-width:520px; display:flex; border:2px solid var(--dh-primary); border-radius:var(--dh-radius-btn); overflow:hidden; background:var(--dh-bg-main);">
            <input type="text" placeholder="포털 통합 검색: VAIYER 배선, 1인 스냅컴퍼니, Wisdom 듀얼목차..." style="border:none; background:transparent; padding:9px 14px; width:100%; color:var(--dh-text-main); outline:none;" />
            <button class="btn btn-sm btn-primary" style="border-radius:0;" onclick="navigateTo('portfolio')">검색</button>
          </div>

          <div style="font-size:0.8rem; background:var(--dh-bg-main); padding:7px 12px; border-radius:var(--dh-radius-sm); border:1px solid var(--dh-border);">
            <strong style="color:var(--dh-primary);">🔥 실시간 이슈:</strong> 1. 1인 스냅컴퍼니 &nbsp; 2. 10초 쇼츠합성 &nbsp; 3. 카톡 1초인증
          </div>
        </div>

        <div style="display:flex; gap:18px; font-size:0.88rem; font-weight:700; padding-top:10px; border-top:1px solid var(--dh-border); overflow-x:auto;">
          <a href="javascript:void(0)" style="color:var(--dh-primary);">📰 전체 헤드라인</a>
          <a href="javascript:void(0)" onclick="navigateTo('technology', 'tech-vaiyer')">⚡ AI 자동배선(VAIYER) 특집</a>
          <a href="javascript:void(0)" onclick="navigateTo('technology', 'tech-wisdom')">🧠 Wisdom 지식화 리포트</a>
          <a href="javascript:void(0)" onclick="navigateTo('portfolio')">📊 12종 프로덕션 실증</a>
          <a href="javascript:void(0)" onclick="navigateTo('about', 'about-stewardship')">🤝 스마트처치·사회공헌</a>
        </div>
      </div>
    </div>

    <!-- Body: 3-Column Newspaper Editorial Grid -->
    <div class="dl-stage-container">
      <div class="dl-portal-3col-grid">
        <!-- Left Column: Navigation & Breaking News -->
        <aside class="dl-portal-col-box">
          <h4 style="font-size:0.94rem; border-bottom:2px solid var(--dh-text-main); padding-bottom:8px; margin-bottom:10px;">⚡ 실시간 속보 (Breaking)</h4>
          ${apps.slice(0, 5).map((app, i) => `
            <div class="dl-breaking-item">
              <span class="mono" style="font-size:0.72rem; color:var(--dh-primary); font-weight:700;">19:${50 - i * 7}</span>
              <div style="font-weight:700; margin-top:2px; cursor:pointer;" onclick="openLightbox('${app.img}', '${app.title}')">[속보] ${app.title} (${app.port}) 현장 가동</div>
            </div>
          `).join('')}
        </aside>

        <!-- Center Column: Main Headline News & Articles -->
        <div class="dl-portal-col-box">
          <span class="eyebrow eyebrow-indigo" style="margin-bottom:8px;">TOP HEADLINE · 커버스토리</span>
          <h2 style="font-size:1.65rem; margin-bottom:12px; line-height:1.3;">
            "외주 개발 수천만 원 시대 끝났다"… 말 한마디(Vibe)로 당일 개통하는 '${ci.companyName} 스낵 앱' 돌풍
          </h2>
          <div style="border-radius:var(--dh-radius-md); overflow:hidden; border:var(--dh-border-style); margin-bottom:14px; cursor:zoom-in;" onclick="openLightbox('img/cartoon-pipeline-v02.svg', '커버스토리: Vibe 요청부터 스냅 컴퍼니 완성까지 6컷 아키텍처 파이프라인')">
            <img src="img/cartoon-pipeline-v02.svg" alt="메인 뉴스 카툰" />
          </div>
          <p style="font-size:0.93rem; color:var(--dh-text-secondary); margin-bottom:18px; line-height:1.7;">
            화면만 그리는 기존 AI 코딩의 한계를 넘어, 대표의 전문 문서(Wisdom)와 검증된 4대 기술 부품(영상합성·스트리밍·단축링크·1초인증)을 실제 서버에 배선(VAIYER)해 즉시 배포하는 패러다임이 1인 기업과 교계를 중심으로 확산되고 있다.
          </p>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; padding-top:14px; border-top:1px solid var(--dh-border);">
            ${apps.slice(0, 4).map(app => `
              <div style="display:flex; gap:10px; align-items:center; cursor:pointer;" onclick="openLightbox('${app.img}', '${app.title}')">
                <img src="${app.img}" alt="${app.title}" style="width:78px; height:58px; object-fit:cover; border-radius:6px; border:1px solid var(--dh-border);" />
                <div>
                  <strong style="font-size:0.84rem; display:block;">${app.title}</strong>
                  <span style="font-size:0.75rem; color:var(--dh-text-secondary);">${app.stack} · ${app.port}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right Column: Personalized Widgets & Status Board -->
        <aside class="dl-portal-col-box">
          <div style="background:var(--dh-bg-main); padding:14px; border-radius:var(--dh-radius-sm); border:1px solid var(--dh-border); margin-bottom:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <strong style="font-size:0.85rem;">🟢 스냅컴퍼니 가동 지수</strong>
              <span class="status-badge">100% 쾌청</span>
            </div>
            <div style="font-size:1.35rem; font-weight:900; color:var(--dh-primary);">12종 전 서버 정상 작동</div>
            <div style="font-size:0.76rem; color:var(--dh-text-secondary); margin-top:4px;">평균 개통 속도: 당일 즉시 · 설치장벽 0%</div>
          </div>

          <h5 style="font-size:0.88rem; margin-bottom:8px;">📈 가장 많이 본 브리핑</h5>
          <ol style="padding-left:18px; font-size:0.81rem; color:var(--dh-text-secondary); display:flex; flex-direction:column; gap:7px; margin-bottom:16px;">
            <li>사진 49장으로 9:16 쇼츠 만드는 FOTOSTREAM</li>
            <li>규칙 대장 + 맥락 박사, Dual-TOC 교차검증</li>
            <li>홀리씨즈 바자회 86건 실시간 중계 giveNforget</li>
            <li>카톡 링크로 넘겨보는 모바일 매거진 VOGUE:M</li>
          </ol>

          <button class="btn btn-sm btn-primary" style="width:100%;" onclick="navigateTo('contact')">
            📝 내 비즈니스 3분 무료 진단 신청
          </button>
        </aside>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------
// 5. ENTERPRISE DASHBOARD & SAAS WORKSPACE (잔디 / 노션 / 슬랙 Style)
// ---------------------------------------------------------------------
function buildLayout05Saas(layout, ci) {
  const apps = getAppsList();
  const node = DOMAIN_STAGE_STATE.saasActiveNode;
  const viewTab = DOMAIN_STAGE_STATE.saasViewTab;

  return `
    <div class="dl-stage-container">
      <div class="dl-saas-shell-box">
        <!-- Head: Minimal Workspace Topbar -->
        <div class="dl-saas-topbar-head">
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="logo-mark" style="width:28px; height:28px; font-size:0.85rem;">${ci.logoMark}</div>
            <strong style="font-size:0.9rem;">${ci.companyName} Workspace ▾</strong>
            <span style="color:#64748B;">/</span>
            <span style="font-size:0.82rem; color:#A5B4FC;">${node === 'doc-vaiyer' ? '📐 01. VAIYER 배선 아키텍처' : node === 'doc-wisdom' ? '🧠 02. Wisdom 지식 베이스' : '📊 03. 프로덕션 스낵앱 12채널'}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="background:#1E293B; border:1px solid #334155; padding:4px 12px; border-radius:6px; font-size:0.76rem; color:#94A3B8;">⌘K 워크스페이스 빠른 검색...</span>
            <span class="status-badge">● 12 Agents Online</span>
            <button class="dh-ctrl-btn dh-btn-download" style="padding:5px 10px; font-size:0.75rem;" onclick="navigateTo('contact')">+ 새 스낵앱 배포</button>
          </div>
        </div>

        <!-- Body: Left Fixed Tree Menu Sidebar + Right Large Workspace -->
        <div class="dl-saas-body-split">
          <aside class="dl-saas-tree-sidebar">
            <div style="font-size:0.72rem; font-weight:800; color:var(--dh-text-muted); padding:4px 10px; text-transform:uppercase;">📁 WORKSPACE TREE MENU</div>
            <button class="dl-tree-item ${node === 'doc-vaiyer' ? 'active' : ''}" onclick="setSaasNode('doc-vaiyer')">📐 01. VAIYER 자동배선 워크플로우</button>
            <button class="dl-tree-item ${node === 'doc-wisdom' ? 'active' : ''}" onclick="setSaasNode('doc-wisdom')">🧠 02. Wisdom Dual-TOC 검증소</button>
            <button class="dl-tree-item ${node === 'doc-apps' ? 'active' : ''}" onclick="setSaasNode('doc-apps')">📊 03. 12종 가동 스낵앱 DB</button>

            <div style="font-size:0.72rem; font-weight:800; color:var(--dh-text-muted); padding:14px 10px 4px; text-transform:uppercase;">💬 SNACK-APP CHANNELS</div>
            ${apps.slice(0, 6).map(app => `
              <button class="dl-tree-item" onclick="openLightbox('${app.img}', '#채널-${app.repo}: ${app.title}')">
                <span>#</span> <span>${app.repo} (${app.badgeChar})</span>
              </button>
            `).join('')}
          </aside>

          <div class="dl-saas-workspace-canvas">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:18px; padding-bottom:14px; border-bottom:1px solid var(--dh-border);">
              <div>
                <h3 style="font-size:1.5rem; margin-bottom:4px;">
                  ${node === 'doc-vaiyer' ? '📐 VAIYER: Vibe 한 줄 요청에서 서버 개통까지 4단계 파이프라인' : node === 'doc-wisdom' ? '🧠 Wisdom: 규칙 대장 & 맥락 박사 Dual-TOC 지식 데이터베이스' : '📊 Holyseeds × Snap Company 12종 프로덕션 스낵앱 운영 보드'}
                </h3>
                <p style="font-size:0.85rem; color:var(--dh-text-secondary);">좌측 트리 메뉴와 상단 뷰 탭을 클릭해 노션·슬랙 스타일 작업 공간을 전환해 보세요.</p>
              </div>
              <div style="display:flex; gap:6px;">
                <button class="filter-chip ${viewTab === 'table' ? 'active' : ''}" onclick="setSaasViewTab('table')">📋 데이터베이스 테이블 뷰</button>
                <button class="filter-chip ${viewTab === 'board' ? 'active' : ''}" onclick="setSaasViewTab('board')">🗂️ 칸반 보드 뷰</button>
              </div>
            </div>

            ${viewTab === 'table' ? `
              <div class="spec-table-wrap">
                <table class="spec-table">
                  <thead>
                    <tr>
                      <th>스낵앱 명칭</th>
                      <th>부서 블록 (Stack)</th>
                      <th>컨테이너 / 리포지토리</th>
                      <th>가동 상태</th>
                      <th>실제 화면</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${apps.slice(0, 6).map(app => `
                      <tr>
                        <td><strong>${app.title}</strong></td>
                        <td><span class="tech-tag repo">${app.stack}</span></td>
                        <td class="mono" style="font-size:0.78rem;">${app.container}</td>
                        <td><span class="status-badge">${app.port}</span></td>
                        <td><button class="btn btn-sm btn-outline" style="padding:4px 10px; font-size:0.75rem;" onclick="openLightbox('${app.img}', '${app.title}')">화면 열기</button></td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            ` : `
              <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px;">
                ${['📣 홍보·미디어 블록', '🔥 이벤트·현황판 블록', '🔐 예약·인증·자동화 블록'].map((colTitle, cIdx) => `
                  <div style="background:var(--dh-bg-main); border:1px solid var(--dh-border); border-radius:var(--dh-radius-md); padding:14px;">
                    <strong style="font-size:0.86rem; display:block; margin-bottom:10px;">${colTitle}</strong>
                    ${apps.slice(cIdx * 3, cIdx * 3 + 3).map(app => `
                      <div style="background:var(--dh-bg-surface); border:var(--dh-border-style); border-radius:var(--dh-radius-sm); padding:12px; margin-bottom:8px; cursor:pointer;" onclick="openLightbox('${app.img}', '${app.title}')">
                        <div style="font-weight:700; font-size:0.86rem; margin-bottom:4px;">${app.title}</div>
                        <span class="tech-tag">${app.endpoint}</span>
                      </div>
                    `).join('')}
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>
      </div>
    </div>
  `;
}

function setSaasNode(nodeId) {
  DOMAIN_STAGE_STATE.saasActiveNode = nodeId;
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}
function setSaasViewTab(tab) {
  DOMAIN_STAGE_STATE.saasViewTab = tab;
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}

// ---------------------------------------------------------------------
// 6. TRAVEL & HOSPITALITY BOOKING (야놀자 / 에어비앤비 List + Map Split)
// ---------------------------------------------------------------------
function buildLayout06Travel(layout, ci) {
  const apps = getAppsList();
  const selectedApp = apps.find(a => a.id === DOMAIN_STAGE_STATE.travelSelectedAppId) || apps[0];
  const pinCoords = [
    { id: 10, top: '22%', left: '28%', label: '₩0 · VOGUE:M 매거진' },
    { id: 4, top: '42%', left: '58%', label: '♥86건 · giveNforget' },
    { id: 7, top: '65%', left: '34%', label: '📅 예약포털 /reserve' },
    { id: 2, top: '30%', left: '68%', label: '🔐 1초인증 /auth' },
    { id: 8, top: '72%', left: '70%', label: '🔗 단축링크 /shorturl' },
    { id: 9, top: '50%', left: '22%', label: '⚡ 1분투표 /shortvotes' }
  ];

  return `
    <div class="dl-stage-container" style="padding-top:16px;">
      <!-- Head: Logo + Global Controls + Central Pill Search Widget -->
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div class="brand-logo" onclick="navigateTo('home')">
          <div class="logo-mark">${ci.logoMark}</div>
          <div class="brand-text">
            <span class="brand-name">${ci.companyName} STAY &amp; RESERVE</span>
            <span class="brand-tagline">EXPLORE &amp; BOOK SNACK-APP SPACES</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:10px; font-size:0.82rem; font-weight:700;">
          <span>🌐 한국어 (KR) · ₩ KRW</span>
          <button class="btn btn-sm btn-outline" onclick="navigateTo('contact')">내 스낵앱 호스팅 신청</button>
        </div>
      </div>

      <div class="dl-travel-search-bar">
        <div class="dl-travel-search-cell">
          <label>📍 어디로 떠나시나요? (비즈니스 도메인)</label>
          <select onchange="selectTravelStay(Number(this.value))">
            ${apps.slice(0, 6).map(a => `<option value="${a.id}" ${a.id === selectedApp.id ? 'selected' : ''}>${a.stack} — ${a.title}</option>`).join('')}
          </select>
        </div>
        <div class="dl-travel-search-cell">
          <label>📅 체크인 (구축 시작일)</label>
          <input type="text" value="오늘 당일 즉시 개통" readonly />
        </div>
        <div class="dl-travel-search-cell">
          <label>📅 체크아웃 (유지/소멸)</label>
          <input type="text" value="목적 달성 시 자율 비움" readonly />
        </div>
        <div class="dl-travel-search-cell">
          <label>👥 인원 (기업 규모)</label>
          <input type="text" value="1인 스냅컴퍼니 ~ 무제한" readonly />
        </div>
        <button class="btn btn-primary" style="border-radius:999px; padding:10px 18px;" onclick="navigateTo('contact')">🔍 검색</button>
      </div>

      <!-- Body: Left Card List + Right Interactive Map 2-Column Split -->
      <div class="dl-travel-split-body">
        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:16px;">
          ${apps.slice(0, 6).map(app => `
            <article class="dl-ecom-card" style="border-color:${app.id === selectedApp.id ? 'var(--dh-primary)' : 'var(--dh-border)'}; cursor:pointer;" onclick="selectTravelStay(${app.id})">
              <div class="dl-ecom-thumb">
                <img src="${app.img}" alt="${app.title}" />
                <span class="dl-ecom-rank-badge" style="background:rgba(15,23,42,0.85);">★ 4.99 · 슈퍼호스트</span>
              </div>
              <div style="padding:14px;">
                <div style="font-size:0.75rem; font-weight:700; color:var(--dh-primary);">${app.stack} · ${app.port}</div>
                <h4 style="font-size:0.95rem; margin:4px 0 6px;">${app.title}</h4>
                <p style="font-size:0.78rem; color:var(--dh-text-secondary); margin-bottom:8px;">${app.desc}</p>
                <div style="font-weight:800; font-size:0.9rem;">⚡ 설치비 ₩0 <span style="font-weight:400; font-size:0.76rem; color:var(--dh-text-muted);">/ 카톡 링크 즉시 실행</span></div>
              </div>
            </article>
          `).join('')}
        </div>

        <!-- Right Interactive Price-Marker Map -->
        <div class="dl-travel-map-box">
          <div style="position:absolute; top:14px; left:14px; background:rgba(15,23,42,0.85); color:white; padding:6px 12px; border-radius:999px; font-size:0.76rem; font-weight:700;">
            🗺️ 인터랙티브 스낵앱 맵 (마커를 클릭해 보세요!)
          </div>

          ${pinCoords.map(pin => `
            <button class="dl-map-price-pin ${pin.id === selectedApp.id ? 'active' : ''}" style="top:${pin.top}; left:${pin.left};" onclick="selectTravelStay(${pin.id})">
              ${pin.label}
            </button>
          `).join('')}

          <div style="position:absolute; bottom:16px; left:16px; right:16px; background:var(--dh-bg-surface); border:var(--dh-border-style); border-radius:var(--dh-radius-md); padding:14px; box-shadow:0 12px 30px rgba(0,0,0,0.25); display:flex; gap:14px; align-items:center;">
            <img src="${selectedApp.img}" alt="${selectedApp.title}" style="width:96px; height:72px; object-fit:cover; border-radius:8px; cursor:zoom-in;" onclick="openLightbox('${selectedApp.img}', '${selectedApp.title}')" />
            <div style="flex:1;">
              <span class="status-badge" style="margin-bottom:4px;">선택된 스낵앱 스테이</span>
              <h4 style="font-size:0.96rem;">${selectedApp.title}</h4>
              <div style="font-size:0.78rem; color:var(--dh-text-secondary);">${selectedApp.endpoint} · ${selectedApp.port}</div>
            </div>
            <button class="btn btn-sm btn-primary" onclick="openLightbox('${selectedApp.img}', '${selectedApp.title}')">화면 확대</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function selectTravelStay(appId) {
  DOMAIN_STAGE_STATE.travelSelectedAppId = appId;
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}

// ---------------------------------------------------------------------
// 7. IT EDUCATION & ONLINE COURSE PLATFORM (인프런 / 패스트캠퍼스 Style)
// ---------------------------------------------------------------------
function buildLayout07Edutech(layout, ci) {
  const apps = getAppsList();
  const lvl = DOMAIN_STAGE_STATE.eduLevelFilter;
  const levels = ['입문 · Vibe기획', '초급 · 미디어합성', '실전 · VAIYER배선', '고급 · Wisdom지식화'];

  return `
    <!-- Head: Category Dropdown Header + Search + Instructor CTA -->
    <div style="background:var(--dh-bg-surface); border-bottom:var(--dh-border-style); padding:14px 0;">
      <div class="dl-stage-container" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px;">
        <div style="display:flex; align-items:center; gap:18px;">
          <div class="brand-logo" onclick="navigateTo('home')">
            <div class="logo-mark">${ci.logoMark}</div>
            <div class="brand-text">
              <span class="brand-name">${ci.companyName} ACADEMY</span>
              <span class="brand-tagline">VIBE CODING &amp; SNACK-APP CURATION</span>
            </div>
          </div>
          <button class="btn btn-sm btn-outline" onclick="navigateTo('technology')">📚 강의·솔루션 카테고리 ▾</button>
          <a href="javascript:void(0)" style="font-size:0.86rem; font-weight:700;" onclick="navigateTo('solutions', 'sol-snap')">1인 기업 로드맵</a>
          <a href="javascript:void(0)" style="font-size:0.86rem; font-weight:700;" onclick="navigateTo('portfolio', 'port-insights')">AI 칼럼 커뮤니티</a>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <button class="btn btn-sm btn-outline" onclick="navigateTo('technology', 'tech-wisdom')">✨ Wisdom 지식공유자 신청</button>
          <button class="btn btn-sm btn-primary" onclick="navigateTo('contact')">무료 수강/진단 시작</button>
        </div>
      </div>
    </div>

    <!-- Body: Top Banner Slider + Tech Stack Tags + 4-Col Course Curation Grid -->
    <div class="dl-stage-container" style="padding-bottom:44px;">
      <div class="dl-edu-banner-slider">
        <div>
          <span class="eyebrow eyebrow-dark">NEW MASTER CLASS · 코딩 몰라도 당일 완주!</span>
          <h3 style="font-size:1.75rem; margin-bottom:10px; line-height:1.25;">
            말 한마디(Vibe)로 내 문서를 두뇌(Wisdom)로 만들고<br />12종 실전 스낵 앱을 배선(VAIYER)하는 올인원 클래스
          </h3>
          <p style="font-size:0.9rem; opacity:0.9; margin-bottom:16px;">
            수강생 만족도 ★ 5.0 · 현장에서 실제 가동 중인 12개 컨테이너와 4대 만능 부품을 그대로 내 비즈니스에 이식하세요!
          </p>
          <button class="btn btn-primary" onclick="openLightbox('img/cartoon-pipeline-v02.svg', '6컷 카툰 커리큘럼 로드맵')">🎨 6컷 카툰 커리큘럼 미리보기 →</button>
        </div>
        <div style="border-radius:var(--dh-radius-md); overflow:hidden; border:2px solid rgba(255,255,255,0.25);">
          <img src="img/cartoon-pipeline-v02.svg" alt="커리큘럼 카툰" />
        </div>
      </div>

      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:18px;">
        <button class="filter-chip ${lvl === 'all' ? 'active' : ''}" onclick="setEduLevel('all')">#전체 큐레이션 (8)</button>
        ${levels.map((lName, idx) => `
          <button class="filter-chip ${lvl === String(idx) ? 'active' : ''}" onclick="setEduLevel('${idx}')">#${lName}</button>
        `).join('')}
      </div>

      <div class="dl-ecom-product-grid">
        ${apps.slice(0, 8).filter((_, idx) => lvl === 'all' || String(idx % 4) === lvl).map((app, idx) => `
          <article class="dl-ecom-card">
            <div>
              <div class="dl-ecom-thumb" onclick="openLightbox('${app.img}', '${app.title}')">
                <img src="${app.img}" alt="${app.title}" />
                <span class="dl-ecom-rank-badge">${levels[idx % levels.length]}</span>
              </div>
              <div style="padding:14px;">
                <div style="display:flex; gap:4px; flex-wrap:wrap; margin-bottom:6px;">
                  <span class="tech-tag">#${app.repo}</span>
                  <span class="tech-tag">#${app.stack}</span>
                </div>
                <h4 style="font-size:0.95rem; margin-bottom:6px;">[실전 템플릿] ${app.title}</h4>
                <p style="font-size:0.78rem; color:var(--dh-text-secondary); margin-bottom:8px;">${app.desc}</p>
                <div style="font-size:0.78rem; font-weight:800; color:#F59E0B;">★★★★★ 5.0 <span style="color:var(--dh-text-muted); font-weight:500;">(수강·도입 ${(180 + idx * 47)}명)</span></div>
              </div>
            </div>
            <div style="padding:0 14px 14px;">
              <button class="btn btn-sm btn-primary" style="width:100%;" onclick="openLightbox('${app.img}', '${app.title}')">강의 &amp; 실제 작동 화면 보기</button>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}

function setEduLevel(lvl) {
  DOMAIN_STAGE_STATE.eduLevelFilter = lvl;
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}

// ---------------------------------------------------------------------
// 8. RECRUITING & CAREER PLATFORM (원티드 Wanted / 사람인 Style)
// ---------------------------------------------------------------------
function buildLayout08Recruiting(layout, ci) {
  const apps = getAppsList();
  const calc = DOMAIN_STAGE_STATE.jobCalcRoles;
  const savedAmount = (calc.pr ? 3600 : 0) + (calc.video ? 4200 : 0) + (calc.dev ? 5400 : 0) + (calc.cs ? 3200 : 0);

  return `
    <!-- Head: Job Category Keyword Tags + Resume/Department Management -->
    <div style="background:var(--dh-bg-surface); border-bottom:var(--dh-border-style); padding:14px 0;">
      <div class="dl-stage-container">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:12px;">
          <div class="brand-logo" onclick="navigateTo('home')">
            <div class="logo-mark">${ci.logoMark}</div>
            <div class="brand-text">
              <span class="brand-name">${ci.companyName} WANTED AI</span>
              <span class="brand-tagline">AI DIGITAL DEPARTMENT MATCHING</span>
            </div>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-sm btn-outline" onclick="navigateTo('solutions', 'sol-snap')">📄 내 1인 기업 부서 현황</button>
            <button class="btn btn-sm btn-primary" onclick="navigateTo('contact')">⚡ AI 디지털 부서원 즉시 배치</button>
          </div>
        </div>
        <div style="display:flex; gap:8px; overflow-x:auto; padding-top:8px; border-top:1px solid var(--dh-border);">
          <span class="filter-chip active">🎯 전체 AI 직군 (12)</span>
          <span class="filter-chip" onclick="navigateTo('portfolio')">📣 브랜드 홍보·매거진 전담봇</span>
          <span class="filter-chip" onclick="navigateTo('portfolio')">🎬 쇼츠 영상 합성·스트리밍봇</span>
          <span class="filter-chip" onclick="navigateTo('portfolio')">🤝 24시간 예약·전화인증 매니저</span>
          <span class="filter-chip" onclick="navigateTo('technology', 'tech-wisdom')">🧠 문서 지혜화(Wisdom) 연구원</span>
        </div>
      </div>
    </div>

    <!-- Body: Matched Position Card Grid + Right Salary/Cost Savings Calculator Sidebar -->
    <div class="dl-stage-container">
      <div class="dl-job-split-body">
        <div>
          <div style="margin-bottom:14px;">
            <h3 style="font-size:1.35rem;">💼 대표님의 1인 스냅 컴퍼니에 매칭된 'AI 스낵앱 디지털 부서원' 포지션</h3>
            <p style="font-size:0.84rem; color:var(--dh-text-secondary);">직원을 새로 채용하거나 외주를 주는 대신, 검증된 스낵 앱 부서 블록을 즉시 채용(배선)하세요.</p>
          </div>
          <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:16px;">
            ${apps.slice(0, 6).map(app => `
              <article class="dl-ecom-card">
                <div class="dl-ecom-thumb" onclick="openLightbox('${app.img}', '${app.title}')">
                  <img src="${app.img}" alt="${app.title}" />
                  <span class="dl-ecom-rank-badge" style="background:#059669;">⚡ AI 매칭률 99% · 연봉 0원</span>
                </div>
                <div style="padding:14px;">
                  <div style="font-size:0.75rem; font-weight:800; color:var(--dh-primary);">[${app.stack} 포지션]</div>
                  <h4 style="font-size:0.96rem; margin:4px 0 6px;">${app.title} 전담 에이전트</h4>
                  <p style="font-size:0.78rem; color:var(--dh-text-secondary); margin-bottom:10px;">${app.desc}</p>
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="tech-tag">🎉 도입보상: 외주비 100% 절감</span>
                    <button class="btn btn-sm btn-primary" style="padding:5px 11px; font-size:0.76rem;" onclick="openLightbox('${app.img}', '${app.title}')">포지션 상세</button>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </div>

        <!-- Right Sidebar: Salary / Outsourcing Cost Savings Calculator -->
        <aside class="dl-portal-col-box" style="position:sticky; top:20px;">
          <span class="eyebrow eyebrow-emerald" style="margin-bottom:6px;">SALARY &amp; COST CALCULATOR</span>
          <h4 style="font-size:1.08rem; margin-bottom:8px;">💰 1인 기업 인건비·외주비 절감 계산기</h4>
          <p style="font-size:0.79rem; color:var(--dh-text-secondary); margin-bottom:12px;">
            스낵 앱으로 대체할 부서 직무를 체크하면 연간 예상 절감 비용을 실시간 계산합니다.
          </p>

          <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:14px;">
            <label class="check-label" style="padding:9px 12px; font-size:0.82rem;">
              <input type="checkbox" ${calc.pr ? 'checked' : ''} onchange="toggleJobCalc('pr')" /> 📣 홍보·매거진 디자이너 (VOGUE:M)
            </label>
            <label class="check-label" style="padding:9px 12px; font-size:0.82rem;">
              <input type="checkbox" ${calc.video ? 'checked' : ''} onchange="toggleJobCalc('video')" /> 🎬 쇼츠 영상 편집자 (FOTOSTREAM)
            </label>
            <label class="check-label" style="padding:9px 12px; font-size:0.82rem;">
              <input type="checkbox" ${calc.dev ? 'checked' : ''} onchange="toggleJobCalc('dev')" /> 💻 웹·앱 외주 개발팀 (VAIYER)
            </label>
            <label class="check-label" style="padding:9px 12px; font-size:0.82rem;">
              <input type="checkbox" ${calc.cs ? 'checked' : ''} onchange="toggleJobCalc('cs')" /> 📅 예약·일정 관리 총무 (/reserve)
            </label>
          </div>

          <div style="background:var(--dh-primary); color:#FFFFFF; padding:16px; border-radius:var(--dh-radius-md); text-align:center; margin-bottom:12px;">
            <div style="font-size:0.76rem; opacity:0.88;">스냅 컴퍼니 전환 시 연간 예상 절감액</div>
            <div style="font-size:1.65rem; font-weight:900; color:#34D399;">연 ${savedAmount.toLocaleString()}만 원 절감!</div>
          </div>

          <button class="btn btn-sm btn-primary" style="width:100%;" onclick="navigateTo('contact')">
            🚀 지금 내 1인 스냅 컴퍼니 부서 세팅하기
          </button>
        </aside>
      </div>
    </div>
  `;
}

function toggleJobCalc(key) {
  DOMAIN_STAGE_STATE.jobCalcRoles[key] = !DOMAIN_STAGE_STATE.jobCalcRoles[key];
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}

// ---------------------------------------------------------------------
// 9. PROPTECH & REAL ESTATE PLATFORM (직방 / 다방 Fullscreen Map + Overlay)
// ---------------------------------------------------------------------
function buildLayout09Proptech(layout, ci) {
  const apps = getAppsList();
  const pFilter = DOMAIN_STAGE_STATE.propTypeFilter;
  const filteredApps = pFilter === 'all' ? apps : apps.filter(a => a.category === pFilter);

  const mapClusters = [
    { cat: 'media', top: '24%', left: '52%', title: '🏢 브랜드 홍보 역세권 단지 (VOGUE:M)', price: '보증금 0원 · 당일입주' },
    { cat: 'event', top: '46%', left: '68%', title: '🔥 실시간 마케팅 중심지구 (giveNforget)', price: '참여 86건 · 분양완료' },
    { cat: 'admin', top: '66%', left: '54%', title: '🏛️ 스마트 예약·인증 행정타운 (/reserve)', price: '중복방지 · 1초입장' },
    { cat: 'worship', top: '36%', left: '78%', title: '⛪ 홀리씨즈 스마트처치 대단지 (12개동)', price: '365일 상시가동' }
  ];

  return `
    <div class="dl-stage-container">
      <div class="dl-prop-fullscreen-stage">
        <!-- Head: Translucent Floating Property Type Tabs & Region Search -->
        <div class="dl-prop-floating-header">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <div class="brand-logo" onclick="navigateTo('home')">
              <div class="logo-mark">${ci.logoMark}</div>
              <div class="brand-text">
                <span class="brand-name" style="color:#0F172A;">${ci.companyName} MAP</span>
                <span class="brand-tagline">DIGITAL SNAP-COMPANY PROPTECH</span>
              </div>
            </div>
            <div style="display:flex; gap:6px; flex-wrap:wrap;">
              <button class="filter-chip ${pFilter === 'all' ? 'active' : ''}" onclick="setPropType('all')">전체 매물 (12)</button>
              <button class="filter-chip ${pFilter === 'media' ? 'active' : ''}" onclick="setPropType('media')">원룸형 미디어앱 (2)</button>
              <button class="filter-chip ${pFilter === 'event' ? 'active' : ''}" onclick="setPropType('event')">투룸형 이벤트·투표 (4)</button>
              <button class="filter-chip ${pFilter === 'admin' ? 'active' : ''}" onclick="setPropType('admin')">오피스형 예약·인증 (4)</button>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="status-badge">확인매물 100% 실증</span>
            <button class="btn btn-sm btn-primary" onclick="navigateTo('contact')">내 도메인 입지 무료 진단 →</button>
          </div>
        </div>

        <!-- Fullscreen Map Markers -->
        ${mapClusters.map(m => `
          <button class="dl-map-price-pin ${pFilter === m.cat ? 'active' : ''}" style="top:${m.top}; left:${m.left}; padding:8px 14px;" onclick="setPropType('${m.cat}')">
            <div>${m.title}</div>
            <div style="font-size:0.68rem; opacity:0.85;">${m.price}</div>
          </button>
        `).join('')}

        <!-- Left Sliding Overlay Panel -->
        <aside class="dl-prop-overlay-panel">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding-bottom:8px; border-bottom:1px solid var(--dh-border);">
            <strong>🏡 이 구역 추천 스낵앱 매물 (${filteredApps.length}건)</strong>
            <span class="mono" style="font-size:0.72rem; color:var(--dh-primary);">지도 연동 갱신됨</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:10px;">
            ${filteredApps.slice(0, 5).map(app => `
              <div style="display:flex; gap:10px; padding:10px; border:var(--dh-border-style); border-radius:var(--dh-radius-sm); background:var(--dh-bg-main); cursor:pointer;" onclick="openLightbox('${app.img}', '확인매물: ${app.title} (${app.endpoint})')">
                <img src="${app.img}" alt="${app.title}" style="width:84px; height:68px; object-fit:cover; border-radius:6px;" />
                <div>
                  <span style="font-size:0.68rem; font-weight:800; background:var(--dh-primary); color:white; padding:1px 6px; border-radius:4px;">확인매물 · ${app.port}</span>
                  <h5 style="font-size:0.88rem; margin:3px 0;">${app.title}</h5>
                  <p style="font-size:0.74rem; color:var(--dh-text-secondary);">${app.stack} · ${app.endpoint}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </aside>
      </div>
    </div>
  `;
}

function setPropType(cat) {
  DOMAIN_STAGE_STATE.propTypeFilter = cat;
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}

// ---------------------------------------------------------------------
// 10. CORPORATE BRANDING & ONE-PAGE STORYTELLING (토스 Toss Style)
// ---------------------------------------------------------------------
function buildLayout10Branding(layout, ci) {
  return `
    <div class="dl-stage-container">
      <div class="dl-brand-story-stage">
        <!-- Head: Minimal Floating Glass Header with Anchor Menu -->
        <div style="background:var(--dh-bg-surface); border-bottom:var(--dh-border-style); padding:14px 28px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <div class="brand-logo" onclick="navigateTo('home')">
            <div class="logo-mark">${ci.logoMark}</div>
            <div class="brand-text">
              <span class="brand-name">${ci.companyName}</span>
              <span class="brand-tagline">ONE-PAGE BRAND STORYTELLING</span>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:18px; font-size:0.84rem; font-weight:700;">
            <a href="#brand-ch-1">01. 질문 (Vision)</a>
            <a href="#brand-ch-2">02. 해답 (VAIYER &amp; Wisdom)</a>
            <a href="#brand-ch-3">03. 임팩트 (12 Live Apps)</a>
            <button class="btn btn-sm btn-primary" onclick="navigateTo('contact')">지금 시작하기 →</button>
          </div>
        </div>

        <!-- Chapter 01: Full-Viewport Vision Manifesto -->
        <div id="brand-ch-1" class="dl-brand-chapter" style="background:var(--dh-hero-bg); color:var(--dh-hero-text);">
          <span class="eyebrow eyebrow-dark">CHAPTER 01 · OUR QUESTION</span>
          <h2 style="font-size:clamp(2rem, 4vw, 3.2rem); max-width:820px; line-height:1.22; margin-bottom:18px;">
            "내 아이디어를 앱으로 만드는 일,<br />왜 늘 수천만 원과 몇 달의 시간이 필요했을까요?"
          </h2>
          <p style="font-size:1.08rem; max-width:660px; opacity:0.9; line-height:1.75; margin-bottom:28px;">
            ${ci.companyName}는 무거운 성벽 같은 소프트웨어 대신, 말 한마디(Vibe)로 오늘 바로 세우고 목적을 달성하면 가볍게 접는 '스낵 앱(Snack App)'으로 비즈니스 문법을 완전히 바꿉니다.
          </p>
          <button class="btn btn-lg btn-primary" onclick="openLightbox('img/cartoon-pipeline-v02.svg', 'TheWayWorks 브랜드 스토리 6컷 카툰')">
            🎨 6컷 스토리보드로 비전 확인하기
          </button>
        </div>

        <!-- Chapter 02: Interactive Storytelling Cards -->
        <div id="brand-ch-2" class="dl-brand-chapter" style="background:var(--dh-bg-surface);">
          <span class="eyebrow eyebrow-indigo">CHAPTER 02 · THE WAY WORKS</span>
          <h3 style="font-size:2rem; margin-bottom:14px;">말 한마디가 실제 기업이 되는 3가지 마법</h3>
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:20px; max-width:1040px; width:100%; margin-top:20px; text-align:left;">
            <div class="info-card">
              <span class="pillar-num">STORY 01</span>
              <h4>🧠 서류 뭉치가 두뇌가 됩니다 (Wisdom)</h4>
              <p style="font-size:0.88rem; color:var(--dh-text-secondary);">규칙 대장과 맥락 박사, 두 명의 AI 검수원이 대표님의 PDF와 기획서를 정밀하게 읽어 우리 회사만의 전략 두뇌로 만듭니다.</p>
            </div>
            <div class="info-card">
              <span class="pillar-num">STORY 02</span>
              <h4>🔌 만능 부품을 즉시 배선합니다 (VAIYER)</h4>
              <p style="font-size:0.88rem; color:var(--dh-text-secondary);">사진 49장 쇼츠 합성기(FOTOSTREAM), 1초 재생기(VDSTREAM), 단축링크, 전화번호 인증을 레고처럼 즉시 연결합니다.</p>
            </div>
            <div class="info-card">
              <span class="pillar-num">STORY 03</span>
              <h4>⛺ 모이면 1인 스냅 컴퍼니가 됩니다</h4>
              <p style="font-size:0.88rem; color:var(--dh-text-secondary);">홍보 앱, 마케팅 앱, 예약 앱, 투표 앱을 하나씩 붙여 직원 없이도 모든 부서가 돌아가는 1인 스마트 기업을 완성합니다.</p>
            </div>
          </div>
        </div>

        <!-- Chapter 03: Impact Numbers & CTA -->
        <div id="brand-ch-3" class="dl-brand-chapter" style="background:var(--dh-bg-main); border-bottom:none;">
          <span class="eyebrow eyebrow-emerald">CHAPTER 03 · PROVEN IMPACT</span>
          <h3 style="font-size:1.95rem; margin-bottom:24px;">숫자로 증명된 현장의 변화, 다음 주인공은 대표님입니다</h3>
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:24px; max-width:840px; width:100%; margin-bottom:28px;">
            <div class="info-card" style="text-align:center;">
              <div style="font-size:2.2rem; font-weight:900; color:var(--dh-primary);">12종</div>
              <div style="font-size:0.84rem; color:var(--dh-text-secondary);">365일 상시 가동 중인 실전 스낵 앱</div>
            </div>
            <div class="info-card" style="text-align:center;">
              <div style="font-size:2.2rem; font-weight:900; color:var(--dh-secondary);">0초</div>
              <div style="font-size:0.84rem; color:var(--dh-text-secondary);">앱 설치·회원가입 대기 시간 ZERO</div>
            </div>
            <div class="info-card" style="text-align:center;">
              <div style="font-size:2.2rem; font-weight:900; color:var(--dh-accent);">100%</div>
              <div style="font-size:0.84rem; color:var(--dh-text-secondary);">Dual-TOC 교차검증 지식 신뢰도</div>
            </div>
          </div>
          <button class="btn btn-lg btn-primary" onclick="navigateTo('contact')">
            내 맞춤형 스냅 컴퍼니 3분 무료 진단 시작하기 →
          </button>
        </div>
      </div>
    </div>
  `;
}

// =====================================================================
// Drawer, Custom CI, API Modal & ZIP Package Download
// =====================================================================
function toggleDhDrawer() {
  const drawer = document.getElementById('dh-identity-drawer');
  const btn = document.getElementById('dh-drawer-toggle-btn');
  if (!drawer) return;
  const isOpen = drawer.classList.toggle('open');
  if (btn) btn.classList.toggle('active', isOpen);
}

function applyCustomCompanyCI() {
  const ci = getCompanyCI();
  document.querySelectorAll('.brand-name').forEach(el => { el.textContent = ci.companyName; });
  document.querySelectorAll('.logo-mark').forEach(el => { el.textContent = ci.logoMark; });
  document.querySelectorAll('.brand-tagline').forEach(el => { el.textContent = ci.tagline; });

  if (CURRENT_LAYOUT.order > 0) {
    renderLiveDomainLayoutStage(CURRENT_LAYOUT);
  }
  if (typeof refreshV4StageViews === 'function') {
    refreshV4StageViews();
  }
}

function downloadCurrentStylePackage() {
  const styleId = CURRENT_STYLE.id;
  const layoutId = CURRENT_LAYOUT.id;
  const ci = getCompanyCI();

  const params = new URLSearchParams({
    layout_id: layoutId,
    company_name: ci.companyName,
    tagline: ci.tagline,
    logo_mark: ci.logoMark
  });
  window.location.href = `${API_PREFIX}/styles/${encodeURIComponent(styleId)}/download?${params.toString()}`;
}

async function openDhApiModal() {
  const modal = document.getElementById('dh-api-modal');
  if (!modal) return;
  modal.classList.add('open');

  const s = CURRENT_STYLE;
  const l = CURRENT_LAYOUT;
  const styleId = s.id;
  const layoutId = l.id;
  const baseOrigin = window.location.origin;

  document.getElementById('dh-modal-style-title').textContent =
    `[${s.name_ko}] 스타일 × [${l.domain_ko.split('(')[0].trim()}] 레이아웃 — API & 패키지 인스펙터`;

  const swatchGrid = document.getElementById('dh-modal-swatches');
  const c = s.colors;
  const colorEntries = [
    ['Primary', c.primary],
    ['Secondary', c.secondary],
    ['Accent', c.accent],
    ['Background', c.background],
    ['Surface', c.surface],
    ['Text Main', c.text_main],
    ['Text Muted', c.text_muted],
    ['Border', c.border]
  ];
  swatchGrid.innerHTML = colorEntries.map(([label, hex]) => `
    <div class="dh-swatch-card" onclick="copyTextToClipboard('${hex}', '${label} (${hex}) 복사됨!')">
      <div class="dh-swatch-color" style="background:${hex};"></div>
      <span class="dh-swatch-label">${label} (클릭 복사)</span>
      <span class="dh-swatch-hex">${hex}</span>
    </div>
  `).join('');

  const endpoints = [
    { method: 'GET', path: `${API_PREFIX}/studio/summary`, desc: '디자인 스타일 & 레이아웃 스타일 2대 분류 통합 현황 및 Gemini AI 상태' },
    { method: 'POST', path: `${API_PREFIX}/styles/ai-generate`, desc: 'Gemini LLM AI 기반 신규 디자인 스타일 자동 생성 및 등록' },
    { method: 'POST', path: `${API_PREFIX}/layouts/ai-generate`, desc: 'Gemini LLM AI 기반 신규 웹사이트 레이아웃(Head+Body) 생성 및 등록' },
    { method: 'GET', path: `${API_PREFIX}/styles`, desc: '디자인 스타일(톤앤매너) 전체 목록 & 키워드 필터링' },
    { method: 'GET', path: `${API_PREFIX}/layouts`, desc: '사업 도메인 웹사이트 레이아웃 패턴(Head & Body) 전체 목록' },
    { method: 'GET', path: `${API_PREFIX}/layouts/${layoutId}`, desc: '현재 선택된 웹사이트 레이아웃 상세 명세 (JSON)' },
    { method: 'GET', path: `${API_PREFIX}/styles/${styleId}/tokens.css`, desc: '현재 디자인 스타일 CSS 토큰 시트 (design-tokens.css)' },
    { method: 'GET', path: `${API_PREFIX}/layouts/${layoutId}/layout.css`, desc: '현재 웹사이트 레이아웃 구조 CSS 시트 (design-layout.css)' },
    { method: 'GET', path: `${API_PREFIX}/styles/${styleId}/package?layout_id=${layoutId}`, desc: '통합 패키지 참조 (스타일 + 레이아웃 메타데이터 + CSS + AI 프롬프트)' },
    { method: 'GET', path: `${API_PREFIX}/styles/${styleId}/download?layout_id=${layoutId}`, desc: '스타일 + 레이아웃 + 샘플 홈페이지 통합 패키지 (.ZIP) 다운로드' }
  ];

  const apiListEl = document.getElementById('dh-modal-api-list');
  apiListEl.innerHTML = endpoints.map(ep => `
    <div class="dh-api-item">
      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
        <span class="dh-api-method">${ep.method}</span>
        <a href="${ep.path}" target="_blank" class="dh-api-url">${baseOrigin}${ep.path}</a>
        <span style="font-size:0.78rem; color:#94A3B8;">— ${ep.desc}</span>
      </div>
      <div style="display:flex; gap:6px;">
        <button class="dh-ctrl-btn" style="padding:4px 9px; font-size:0.74rem;" onclick="copyTextToClipboard('${baseOrigin}${ep.path}', 'API URL이 복사되었습니다!')">URL 복사</button>
        <a href="${ep.path}" target="_blank" class="dh-ctrl-btn" style="padding:4px 9px; font-size:0.74rem;">열기 ↗</a>
      </div>
    </div>
  `).join('');

  const cssPre = document.getElementById('dh-modal-css-preview');
  const layoutCssPre = document.getElementById('dh-modal-layout-css-preview');
  const promptPre = document.getElementById('dh-modal-prompt-preview');
  if (cssPre) cssPre.textContent = '로딩 중...';
  if (layoutCssPre) layoutCssPre.textContent = '로딩 중...';
  if (promptPre) promptPre.textContent = '로딩 중...';

  try {
    const ci = getCompanyCI();
    const q = new URLSearchParams({
      layout_id: layoutId,
      company_name: ci.companyName,
      tagline: ci.tagline,
      logo_mark: ci.logoMark
    });
    const pkgRes = await fetch(`${API_PREFIX}/styles/${encodeURIComponent(styleId)}/package?${q.toString()}`);
    if (pkgRes.ok) {
      const pkgData = await pkgRes.json();
      if (cssPre) cssPre.textContent = pkgData.files?.design_tokens_css || '';
      if (layoutCssPre) layoutCssPre.textContent = pkgData.files?.design_layout_css || '';
      if (promptPre) promptPre.textContent = pkgData.files?.ci_and_style_guide_md || '';
    }
  } catch (e) {
    if (cssPre) cssPre.textContent = 'API 응답을 불러오지 못했습니다.';
  }
}

function closeDhApiModal() {
  const modal = document.getElementById('dh-api-modal');
  if (modal) modal.classList.remove('open');
}

function copyTextToClipboard(text, msg) {
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById('dh-copy-toast');
    if (toast) {
      toast.textContent = msg || '클립보드에 복사되었습니다!';
      toast.style.opacity = '1';
      setTimeout(() => { toast.style.opacity = '0'; }, 2200);
    }
  });
}

// =====================================================================
// DYNAMIC CUSTOM / AI-GENERATED LAYOUT RENDERER (Applies New Layouts to Sample Web)
// =====================================================================
let CUSTOM_LAYOUT_STATE = {
  activeMenuIdx: 0,
  searchQuery: '',
  selectedAppId: 10
};

function buildDynamicCustomLayout(layout, ci) {
  const apps = getAppsList();
  const bp = layout.live_blueprint || {};
  const archetype = bp.archetype || 'grid-sidebar-right';
  const headerBadge = bp.header_badge || 'CUSTOM AI DOMAIN PLATFORM';
  const searchPlaceholder = bp.search_placeholder || `${layout.domain_ko} 스낵앱 · 기술 부품 검색...`;
  const navMenus = Array.isArray(bp.nav_menus) && bp.nav_menus.length > 0
    ? bp.nav_menus
    : ['전체 홈', '실시간 큐레이션', '인기 스낵앱', '4대 코어엔진', '3분 무료진단'];
  const quickActions = Array.isArray(bp.quick_actions) && bp.quick_actions.length > 0
    ? bp.quick_actions
    : ['⚡ 즉시 개통', '📦 패키지 다운로드'];
  const heroTitle = bp.hero_title || `${ci.companyName} × ${layout.name_ko}`;
  const heroSubtitle = bp.hero_subtitle || layout.tagline || layout.body_spec?.description || '';
  const heroCta = bp.hero_cta || '내 비즈니스에 즉시 적용하기 →';
  const sideWidgetTitle = bp.side_widget_title || '🔥 실시간 도메인 트렌드 & 핵심 지표';
  const sideWidgetItems = Array.isArray(bp.side_widget_items) && bp.side_widget_items.length > 0
    ? bp.side_widget_items
    : ['VAIYER — 말 한마디 자동 배선', 'FOTOSTREAM — 사진 49장 쇼츠 합성', 'VDSTREAM — 1초 무버퍼링 스트리밍', 'Proxy Auth — 1초 전화번호 인증'];
  const cardBadgePrefix = bp.card_badge_prefix || 'AI PICK';
  const cardCtaLabel = bp.card_cta_label || '스낵앱 즉시 실행 →';
  const bottomDockText = bp.bottom_dock_text || `⚡ [${layout.name_ko}] 상시 가동 중인 12종 프로덕션 스낵앱 컨트롤 독`;

  const q = CUSTOM_LAYOUT_STATE.searchQuery.trim().toLowerCase();
  const filteredApps = apps.filter(a => !q || a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q) || a.stack.toLowerCase().includes(q));
  const selectedApp = apps.find(a => a.id === CUSTOM_LAYOUT_STATE.selectedAppId) || apps[0] || {};

  // Head HTML
  const headHtml = `
    <div class="dl-custom-head">
      <div class="dl-stage-container">
        <div class="dl-section-label-bar" style="margin-top:0;">
          <span>[신규/AI 레이아웃 HEAD] ${layout.head_spec?.structure_name || layout.layout_structure}</span>
          <span>대표 참조: ${(layout.representative_companies || []).join(', ')}</span>
        </div>
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px;">
          <div style="display:flex; align-items:center; gap:18px; flex-wrap:wrap;">
            <div class="brand-logo" onclick="navigateTo('home')">
              <div class="logo-mark">${ci.logoMark}</div>
              <div class="brand-text">
                <span class="brand-name">${ci.companyName}</span>
                <span class="brand-tagline">${headerBadge}</span>
              </div>
            </div>
            <div style="display:flex; gap:6px; flex-wrap:wrap;">
              ${navMenus.map((m, idx) => `
                <button class="filter-chip ${CUSTOM_LAYOUT_STATE.activeMenuIdx === idx ? 'active' : ''}" onclick="setCustomLayoutMenu(${idx})">
                  ${m}
                </button>
              `).join('')}
            </div>
          </div>

          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; flex:1; max-width:460px; justify-content:flex-end;">
            <div style="display:flex; align-items:center; gap:8px; background:var(--dh-bg-main); border:1px solid var(--dh-border); border-radius:var(--dh-radius-btn); padding:6px 12px; flex:1; min-width:190px;">
              <span>🔍</span>
              <input type="text" value="${CUSTOM_LAYOUT_STATE.searchQuery}" placeholder="${searchPlaceholder}" oninput="setCustomLayoutSearch(this.value)" style="border:none; background:transparent; color:var(--dh-text-main); width:100%; outline:none; font-size:0.84rem;" />
            </div>
            ${quickActions.slice(0, 2).map(act => `
              <button class="btn btn-sm btn-primary" onclick="openDhStudioModal('layouts')">${act}</button>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Hero Banner HTML
  const heroHtml = `
    <div class="dl-custom-hero">
      <div style="max-width:740px;">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:8px;">
          <span class="status-badge">✨ ${layout.is_custom ? 'AI / 커스텀 제작 레이아웃' : '도메인 레이아웃'} · ${archetype.toUpperCase()}</span>
          <span style="font-size:0.78rem; opacity:0.85;">Head &amp; Body 실시간 샘플 웹 적용 완료</span>
        </div>
        <h2 style="font-size:clamp(1.55rem, 2.6vw, 2.25rem); margin-bottom:8px; color:inherit;">${heroTitle}</h2>
        <p style="font-size:0.93rem; opacity:0.9; line-height:1.6;">${heroSubtitle}</p>
      </div>
      <div style="display:flex; flex-direction:column; gap:8px; min-width:220px;">
        <button class="btn btn-primary" style="background:var(--dh-accent); color:#064E3B; border:none;" onclick="navigateTo('contact')">
          ${heroCta}
        </button>
        <button class="btn btn-outline" style="color:inherit; border-color:currentColor;" onclick="editLayoutById('${layout.id}')">
          🛠️ 스튜디오에서 이 레이아웃 편집
        </button>
      </div>
    </div>
  `;

  // Reusable Side Widget HTML
  const sideWidgetHtml = `
    <aside class="info-card" style="position:sticky; top:90px;">
      <span class="pillar-num">LIVE DOMAIN WIDGET</span>
      <h4 style="font-size:1rem; margin-bottom:10px;">${sideWidgetTitle}</h4>
      <p style="font-size:0.78rem; color:var(--dh-text-secondary); margin-bottom:12px;">
        ${layout.head_spec?.description || layout.tagline}
      </p>
      <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:14px;">
        ${sideWidgetItems.map((item, idx) => `
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:8px 10px; border-radius:var(--dh-radius-sm); background:var(--dh-bg-main); border:1px solid var(--dh-border); font-size:0.81rem;">
            <span><strong style="color:var(--dh-primary); margin-right:6px;">0${idx + 1}</strong> ${item}</span>
            <span class="status-badge" style="font-size:0.65rem;">LIVE</span>
          </div>
        `).join('')}
      </div>
      <div style="padding-top:10px; border-top:1px solid var(--dh-border);">
        <div style="font-size:0.75rem; font-weight:700; color:var(--dh-text-secondary); margin-bottom:6px;">📐 적용된 그리드 명세</div>
        <code style="display:block; padding:6px 8px; background:var(--dh-bg-main); border-radius:6px; font-size:0.74rem; color:var(--dh-primary);">
          ${layout.body_spec?.grid_template || archetype}
        </code>
      </div>
    </aside>
  `;

  // Cards HTML helper
  const renderAppCardsGrid = (colsMin = '250px') => `
    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(${colsMin}, 1fr)); gap:18px;">
      ${filteredApps.map((app, idx) => `
        <article class="dl-ecom-card">
          <div>
            <div class="dl-ecom-thumb" onclick="openLightbox('${app.img}', '${app.title} — ${app.endpoint}')">
              <img src="${app.img}" alt="${app.title}" />
              <span class="dl-ecom-rank-badge">${cardBadgePrefix} #${idx + 1}</span>
            </div>
            <div class="dl-ecom-card-info">
              <div class="dl-ecom-brand">${ci.companyName} · ${app.stack} · ${app.port}</div>
              <h4 class="dl-ecom-title">${app.title}</h4>
              <p style="font-size:0.8rem; color:var(--dh-text-secondary); line-height:1.45; margin-bottom:10px;">
                ${app.desc}
              </p>
            </div>
          </div>
          <div style="padding:0 14px 14px; display:flex; justify-content:space-between; align-items:center; gap:8px;">
            <span class="mono" style="font-size:0.72rem; color:var(--dh-primary); font-weight:700;">${app.endpoint}</span>
            <button class="btn btn-sm btn-primary" style="padding:6px 12px; font-size:0.76rem;" onclick="openLightbox('${app.img}', '${app.title}')">
              ${cardCtaLabel}
            </button>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  // Body Archetype Switch
  let bodyArchHtml = '';
  if (archetype === 'sidebar-left-grid') {
    bodyArchHtml = `
      <div class="dl-custom-sidebar-left-grid">
        ${sideWidgetHtml}
        <div>${renderAppCardsGrid('250px')}</div>
      </div>
    `;
  } else if (archetype === 'three-column-hub') {
    bodyArchHtml = `
      <div class="dl-custom-three-column-hub">
        <aside class="info-card">
          <span class="pillar-num">LEFT NAVIGATION</span>
          <h4 style="font-size:0.95rem; margin-bottom:10px;">📂 도메인 카테고리 트리</h4>
          <div style="display:flex; flex-direction:column; gap:6px;">
            ${(layout.head_spec?.elements || navMenus).map((el, i) => `
              <button class="filter-chip ${i === 0 ? 'active' : ''}" style="text-align:left; justify-content:flex-start;" onclick="setCustomLayoutMenu(${i})">
                📌 ${el}
              </button>
            `).join('')}
          </div>
        </aside>
        <div>${renderAppCardsGrid('240px')}</div>
        ${sideWidgetHtml}
      </div>
    `;
  } else if (archetype === 'masonry-pinboard') {
    bodyArchHtml = `
      <div class="dl-custom-masonry-pinboard">
        ${filteredApps.map((app, idx) => `
          <div class="dl-custom-masonry-item">
            <img src="${app.img}" alt="${app.title}" style="width:100%; height:${idx % 2 === 0 ? '210px' : '155px'}; object-fit:cover; object-position:top; cursor:zoom-in;" onclick="openLightbox('${app.img}', '${app.title}')" />
            <div style="padding:14px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <span class="tech-tag">${cardBadgePrefix} · ${app.stack}</span>
                <button class="btn btn-sm btn-primary" style="padding:4px 10px; font-size:0.72rem;" onclick="copyTextToClipboard('${app.title}', '📌 보드에 핀 저장되었습니다!')">📌 핀 저장</button>
              </div>
              <h4 style="font-size:0.96rem; margin-bottom:6px;">${app.title}</h4>
              <p style="font-size:0.8rem; color:var(--dh-text-secondary);">${app.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (archetype === 'split-interactive-widget') {
    bodyArchHtml = `
      <div class="dl-custom-split-interactive-widget">
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${filteredApps.slice(0, 6).map((app, idx) => `
            <div class="info-card" style="display:flex; gap:14px; align-items:center; cursor:pointer; border-color:${selectedApp.id === app.id ? 'var(--dh-primary)' : 'var(--dh-border)'};" onclick="selectCustomSplitApp(${app.id})">
              <img src="${app.img}" alt="${app.title}" style="width:110px; height:82px; object-fit:cover; border-radius:8px;" />
              <div style="flex:1;">
                <span style="font-size:0.7rem; font-weight:800; color:var(--dh-primary);">${cardBadgePrefix} 0${idx + 1} · ${app.stack}</span>
                <h4 style="font-size:0.95rem; margin:2px 0 4px;">${app.title}</h4>
                <p style="font-size:0.78rem; color:var(--dh-text-secondary);">${app.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="info-card" style="position:sticky; top:90px;">
          <span class="status-badge" style="margin-bottom:8px;">🖥️ 인터랙티브 라이브 프리뷰 패널 (${selectedApp.port || 'Port'})</span>
          <h3 style="font-size:1.25rem; margin-bottom:8px;">${selectedApp.title || ''}</h3>
          <p style="font-size:0.86rem; color:var(--dh-text-secondary); margin-bottom:12px;">${selectedApp.desc || ''}</p>
          <img src="${selectedApp.img || 'img/snap-app-vogue-01.png'}" alt="${selectedApp.title || ''}" style="width:100%; max-height:320px; object-fit:cover; object-position:top; border-radius:10px; border:var(--dh-border-style); margin-bottom:12px; cursor:zoom-in;" onclick="openLightbox('${selectedApp.img}', '${selectedApp.title}')" />
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="mono" style="font-size:0.8rem; color:var(--dh-primary); font-weight:700;">Endpoint: ${selectedApp.endpoint || '/'}</span>
            <button class="btn btn-sm btn-primary" onclick="navigateTo('contact')">${cardCtaLabel}</button>
          </div>
        </div>
      </div>
    `;
  } else if (archetype === 'bottom-player-dock') {
    bodyArchHtml = `
      <div class="dl-custom-sidebar-left-grid">
        ${sideWidgetHtml}
        <div>${renderAppCardsGrid('240px')}</div>
      </div>
      <div class="dl-custom-bottom-dock">
        <div style="display:flex; align-items:center; gap:12px;">
          <span style="width:38px; height:38px; border-radius:50%; background:var(--dh-primary); color:white; display:inline-flex; align-items:center; justify-content:center; font-weight:900;">▶</span>
          <div>
            <div style="font-size:0.86rem; font-weight:800;">${bottomDockText}</div>
            <div style="font-size:0.74rem; color:#94A3B8;">현재 선택된 트랙: ${selectedApp.title || 'VOGUE:M 모바일 매거진'} (${selectedApp.endpoint || '/magazine'})</div>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <button class="dh-ctrl-btn" onclick="openLightbox('${selectedApp.img || 'img/snap-app-vogue-01.png'}', '${selectedApp.title || ''}')">🖥️ 화면 확대</button>
          <button class="btn btn-sm btn-primary" onclick="navigateTo('contact')">${cardCtaLabel}</button>
        </div>
      </div>
    `;
  } else {
    // Default: grid-sidebar-right
    bodyArchHtml = `
      <div class="dl-custom-grid-sidebar-right">
        <div>${renderAppCardsGrid('250px')}</div>
        ${sideWidgetHtml}
      </div>
    `;
  }

  return `
    <div class="dl-custom-stage">
      ${headHtml}
      <div class="dl-stage-container">
        ${heroHtml}
        <div class="dl-section-label-bar">
          <span>[신규/AI 레이아웃 BODY] ${layout.body_spec?.structure_name || ''} (${archetype})</span>
          <span>Grid: ${layout.body_spec?.grid_template || archetype}</span>
        </div>
        ${bodyArchHtml}
      </div>
    </div>
  `;
}

function setCustomLayoutMenu(idx) {
  CUSTOM_LAYOUT_STATE.activeMenuIdx = idx;
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}

function setCustomLayoutSearch(val) {
  CUSTOM_LAYOUT_STATE.searchQuery = val;
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}

function selectCustomSplitApp(appId) {
  CUSTOM_LAYOUT_STATE.selectedAppId = appId;
  renderLiveDomainLayoutStage(CURRENT_LAYOUT);
}

function editLayoutById(layoutId) {
  openDhStudioModal('layouts');
  setTimeout(() => editLayoutInForm(layoutId), 120);
}

// =====================================================================
// AI DESIGN & LAYOUT STUDIO MANAGER (2-Category Classification + Gemini AI + CRUD)
// =====================================================================
let STUDIO_STYLE_FILTER = 'all';
let STUDIO_LAYOUT_FILTER = 'all';

async function openDhStudioModal(defaultTab = 'styles') {
  const modal = document.getElementById('dh-studio-manager-modal');
  if (!modal) return;
  modal.classList.add('open');
  switchStudioTab(defaultTab);
  await refreshStudioSummaryAndLists();
}

function closeDhStudioModal() {
  const modal = document.getElementById('dh-studio-manager-modal');
  if (modal) modal.classList.remove('open');
}

function switchStudioTab(tab) {
  const btnStyles = document.getElementById('dh-tab-btn-styles');
  const btnLayouts = document.getElementById('dh-tab-btn-layouts');
  const panelStyles = document.getElementById('dh-studio-panel-styles');
  const panelLayouts = document.getElementById('dh-studio-panel-layouts');

  if (btnStyles) btnStyles.classList.toggle('active', tab === 'styles');
  if (btnLayouts) btnLayouts.classList.toggle('active', tab === 'layouts');
  if (panelStyles) panelStyles.classList.toggle('active', tab === 'styles');
  if (panelLayouts) panelLayouts.classList.toggle('active', tab === 'layouts');
}

async function refreshStudioSummaryAndLists() {
  try {
    const [sumRes, stylesRes, layoutsRes] = await Promise.all([
      fetch(`${API_PREFIX}/studio/summary`),
      fetch(`${API_PREFIX}/styles`),
      fetch(`${API_PREFIX}/layouts`)
    ]);

    if (stylesRes.ok) {
      const sData = await stylesRes.json();
      if (Array.isArray(sData.styles)) {
        ALL_STYLES = [TWAYWORKS_ORIGINAL_STYLE, ...sData.styles];
      }
    }
    if (layoutsRes.ok) {
      const lData = await layoutsRes.json();
      if (Array.isArray(lData.layouts)) {
        ALL_LAYOUTS = [TWAYWORKS_STANDARD_LAYOUT, ...lData.layouts];
      }
    }
    if (sumRes.ok) {
      const sumData = await sumRes.json();
      const pill = document.getElementById('dh-gemini-status-pill');
      if (pill && sumData.gemini_ai) {
        const modelLabel = sumData.gemini_ai.model_name || sumData.gemini_ai.model || 'gemini-3-flash-preview';
        pill.textContent = sumData.gemini_ai.configured
          ? `🟢 Gemini AI 연결됨 (${modelLabel})`
          : '🟡 로컬 스마트 생성 모드 (.env 키 확인)';
      }
    }
  } catch (e) {
    console.warn('Studio summary refresh warning:', e);
  }

  const countStylesEl = document.getElementById('dh-tab-count-styles');
  const countLayoutsEl = document.getElementById('dh-tab-count-layouts');
  if (countStylesEl) countStylesEl.textContent = String(ALL_STYLES.length);
  if (countLayoutsEl) countLayoutsEl.textContent = String(ALL_LAYOUTS.length);

  renderQuickStyleStrip();
  renderQuickLayoutStrip();
  renderIdentityFilterTags();
  renderStudioStyleList();
  renderStudioLayoutList();
}

// ---------------------------------------------------------------------
// Category 1: DESIGN STYLES (디자인 스타일) Catalog, AI Generation & CRUD
// ---------------------------------------------------------------------
function setStudioStyleFilter(filter) {
  STUDIO_STYLE_FILTER = filter;
  ['all', 'builtin', 'custom'].forEach(f => {
    const el = document.getElementById(`style-filter-${f}`);
    if (el) el.classList.toggle('active', f === filter);
  });
  renderStudioStyleList();
}

function renderStudioStyleList() {
  const listEl = document.getElementById('dh-studio-style-list');
  if (!listEl) return;

  const filtered = ALL_STYLES.filter(s => {
    const isCustom = Boolean(s.is_custom || s.order > 10);
    if (STUDIO_STYLE_FILTER === 'builtin') return !isCustom;
    if (STUDIO_STYLE_FILTER === 'custom') return isCustom;
    return true;
  });

  if (filtered.length === 0) {
    listEl.innerHTML = `<div style="padding:18px; text-align:center; color:#94A3B8; font-size:0.8rem;">조건에 맞는 디자인 스타일이 없습니다. 우측 AI 생성기에서 새로운 스타일을 만들어 보세요!</div>`;
    return;
  }

  listEl.innerHTML = filtered.map(s => {
    const isActive = s.id === CURRENT_STYLE.id;
    const isCustom = Boolean(s.is_custom || s.order > 10);
    const num = String(s.order).padStart(2, '0');
    const c = s.colors || {};
    return `
      <div class="dh-studio-list-card ${isActive ? 'active' : ''}">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; margin-bottom:6px;">
          <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
            <strong style="font-size:0.86rem; color:#FFFFFF;">${num}. ${s.name_ko}</strong>
            <span class="${isCustom ? 'dh-custom-badge' : 'dh-builtin-badge'}">${isCustom ? '✨ AI/커스텀' : '기본 템플릿'}</span>
          </div>
          <div class="dh-swatch-group">
            ${[c.primary, c.secondary, c.accent, c.background, c.text_main].filter(Boolean).map(hex => `<span class="dh-mini-swatch" style="background:${hex};"></span>`).join('')}
          </div>
        </div>
        <div style="font-size:0.75rem; color:#94A3B8; margin-bottom:8px; line-height:1.35;">${s.tagline || ''}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
          <span style="font-size:0.7rem; color:#A5B4FC;">${(s.identity?.adjectives || []).slice(0, 3).map(a => '#' + a).join(' ')}</span>
          <div style="display:flex; gap:5px;">
            <button class="dh-ctrl-btn" style="padding:3px 8px; font-size:0.72rem; background:#4F46E5; color:white;" onclick="applyDesignStyle('${s.id}'); renderStudioStyleList();">
              ${isActive ? '✓ 적용중' : '적용'}
            </button>
            ${s.order > 0 ? `
              <button class="dh-ctrl-btn" style="padding:3px 8px; font-size:0.72rem;" onclick="editStyleInForm('${s.id}')">편집</button>
            ` : ''}
            ${isCustom ? `
              <button class="dh-ctrl-btn" style="padding:3px 8px; font-size:0.72rem; color:#FCA5A5; border-color:#EF4444;" onclick="deleteStyleItem('${s.id}')">삭제</button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function fillStyleAiPrompt(prompt, name, biz, scheme) {
  document.getElementById('ai-style-prompt').value = prompt;
  document.getElementById('ai-style-name-hint').value = name || '';
  document.getElementById('ai-style-biz-hint').value = biz || '';
  document.getElementById('ai-style-scheme-hint').value = scheme || '';
}

function syncColorPicker(textId, pickerId) {
  const val = document.getElementById(textId)?.value.trim() || '';
  if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
    const picker = document.getElementById(pickerId);
    if (picker) picker.value = val;
  }
}

function setStyleColorField(key, hex) {
  const cleanHex = /^#[0-9A-Fa-f]{6}$/.test(hex || '') ? hex.toUpperCase() : '#4F46E5';
  const txt = document.getElementById(`form-style-${key}`);
  const pick = document.getElementById(`picker-style-${key}`);
  if (txt) txt.value = cleanHex;
  if (pick) pick.value = cleanHex;
}

function populateStyleForm(style, isEditMode = true) {
  document.getElementById('edit-style-id').value = isEditMode ? (style.id || '') : '';
  document.getElementById('edit-style-order').value = isEditMode ? (style.order || '') : '';

  const badge = document.getElementById('style-form-mode-badge');
  if (badge) {
    badge.textContent = isEditMode && style.id ? `편집 모드 (${style.name_ko})` : '신규/AI 초안 등록 모드';
    badge.style.background = isEditMode && style.id ? '#D97706' : '#4F46E5';
  }

  document.getElementById('form-style-name-ko').value = style.name_ko || '';
  document.getElementById('form-style-name-en').value = style.name_en || '';
  document.getElementById('form-style-tagline').value = style.tagline || '';
  document.getElementById('form-style-businesses').value = (style.target_businesses || []).join(', ');
  document.getElementById('form-style-adjectives').value = (style.identity?.adjectives || []).join(', ');
  document.getElementById('form-style-verbs').value = (style.identity?.verbs || []).join(', ');
  document.getElementById('form-style-sample-copy').value = style.identity?.sample_copy || '';
  document.getElementById('form-style-tone').value = style.identity?.tone_and_manner || '';

  const c = style.colors || {};
  setStyleColorField('primary', c.primary || '#4F46E5');
  setStyleColorField('secondary', c.secondary || '#7C3AED');
  setStyleColorField('accent', c.accent || '#10B981');
  setStyleColorField('background', c.background || '#F8FAFC');
  setStyleColorField('surface', c.surface || '#FFFFFF');
  setStyleColorField('text-main', c.text_main || '#0F172A');
  setStyleColorField('text-muted', c.text_muted || '#475569');
  setStyleColorField('border', c.border || '#E2E8F0');
  document.getElementById('form-style-color-scheme').value = c.color_scheme || 'light';

  const ui = style.template_definition?.ui_components || {};
  document.getElementById('form-style-radius').value = ui.border_radius || '14px';
  document.getElementById('form-style-shadow').value = ui.shadow_style || '0 10px 30px -5px rgba(15, 23, 42, 0.08)';
}

function resetStyleEditorForm() {
  populateStyleForm({
    name_ko: '',
    name_en: '',
    tagline: '',
    target_businesses: [],
    identity: { adjectives: [], verbs: [], sample_copy: '', tone_and_manner: '' },
    colors: {
      primary: '#4F46E5', secondary: '#7C3AED', accent: '#10B981',
      background: '#F8FAFC', surface: '#FFFFFF', text_main: '#0F172A',
      text_muted: '#475569', border: '#E2E8F0', color_scheme: 'light'
    },
    template_definition: { ui_components: { border_radius: '14px', shadow_style: '0 10px 30px -5px rgba(15, 23, 42, 0.08)' } }
  }, false);
}

function loadCurrentStyleIntoForm() {
  populateStyleForm(CURRENT_STYLE, CURRENT_STYLE.order > 0);
}

function editStyleInForm(styleId) {
  const target = ALL_STYLES.find(s => s.id === styleId);
  if (!target) return;
  populateStyleForm(target, true);
}

async function generateStyleWithAI(autoSave = true) {
  const prompt = document.getElementById('ai-style-prompt')?.value.trim() || '';
  if (!prompt) {
    alert('생성할 디자인 스타일의 분위기, 업종, 색상 느낌 등 설명 프롬프트를 입력해 주세요!');
    return;
  }
  const nameHint = document.getElementById('ai-style-name-hint')?.value.trim() || '';
  const bizHint = document.getElementById('ai-style-biz-hint')?.value.trim() || '';
  const schemeHint = document.getElementById('ai-style-scheme-hint')?.value || '';
  const statusEl = document.getElementById('ai-style-status');
  const btnSave = document.getElementById('btn-ai-style-save');
  const btnDraft = document.getElementById('btn-ai-style-draft');

  if (statusEl) statusEl.innerHTML = `<span style="color:#FCD34D;">⏳ Gemini AI가 8대 컬러 토큰, 타이포그래피, 정체성 키워드를 설계하고 있습니다...</span>`;
  if (btnSave) btnSave.disabled = true;
  if (btnDraft) btnDraft.disabled = true;

  try {
    const res = await fetch(`${API_PREFIX}/styles/ai-generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        name_ko: nameHint,
        target_businesses: bizHint ? bizHint.split(',').map(x => x.trim()).filter(Boolean) : [],
        color_scheme_preference: schemeHint,
        auto_save: autoSave
      })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || 'AI 스타일 생성 실패');

    const newStyle = data.style;
    populateStyleForm(newStyle, autoSave);

    if (autoSave) {
      await refreshStudioSummaryAndLists();
      applyDesignStyle(newStyle.id);
      if (statusEl) statusEl.innerHTML = `<span style="color:#34D399;">✅ [${newStyle.name_ko}] 스타일이 AI로 생성되어 등록 및 웹사이트에 즉시 적용되었습니다!</span>`;
      copyTextToClipboard(newStyle.name_ko, `✨ AI 신규 스타일 [${newStyle.name_ko}] 등록 및 적용 완료!`);
    } else {
      if (statusEl) statusEl.innerHTML = `<span style="color:#6EE7B7;">🧪 AI 초안이 아래 편집 폼에 채워졌습니다. 확인 후 [저장] 버튼을 눌러 등록하세요!</span>`;
    }
  } catch (err) {
    if (statusEl) statusEl.innerHTML = `<span style="color:#FCA5A5;">❌ 오류: ${err.message}</span>`;
  } finally {
    if (btnSave) btnSave.disabled = false;
    if (btnDraft) btnDraft.disabled = false;
  }
}

async function saveStyleFromForm() {
  const editId = document.getElementById('edit-style-id')?.value.trim() || '';
  const editOrder = parseInt(document.getElementById('edit-style-order')?.value || '0', 10);
  const nameKo = document.getElementById('form-style-name-ko')?.value.trim() || '';
  const nameEn = document.getElementById('form-style-name-en')?.value.trim() || 'Custom Design Style';
  if (!nameKo) {
    alert('스타일 한글명을 입력해 주세요.');
    return;
  }

  const splitCsv = (id) => (document.getElementById(id)?.value || '').split(',').map(x => x.trim()).filter(Boolean);
  const radiusVal = document.getElementById('form-style-radius')?.value.trim() || '14px';
  const shadowVal = document.getElementById('form-style-shadow')?.value.trim() || 'none';
  const borderHex = document.getElementById('form-style-border')?.value.trim() || '#E2E8F0';
  const headingFont = document.getElementById('form-style-heading-font')?.value || "'Plus Jakarta Sans', 'Pretendard Variable', Pretendard, sans-serif";

  const payload = {
    id: editId || undefined,
    order: editOrder > 0 ? editOrder : undefined,
    name_ko: nameKo,
    name_en: nameEn,
    tagline: document.getElementById('form-style-tagline')?.value.trim() || `${nameKo} 맞춤 브랜드 스타일`,
    target_businesses: splitCsv('form-style-businesses'),
    template_definition: {
      layout_structure: '12컬럼 모던 반응형 그리드 및 시맨틱 서피스 대비 레이아웃',
      hero_style: '핵심 가치 제안 타이포그래피와 인터랙티브 쇼케이스 배너',
      ui_components: {
        border_radius: radiusVal,
        border_style: `1px solid ${borderHex}`,
        shadow_style: shadowVal,
        interaction: '부드러운 상향 호버(-4px) 및 액센트 하이라이트'
      },
      recommended_sections: [
        'Hero: 브랜드 핵심 슬로건 배너',
        'Features: 핵심 역량 그리드',
        'Catalog: 실전 스낵앱 쇼케이스',
        'Contact: 3분 무료 진단 폼'
      ]
    },
    identity: {
      adjectives: splitCsv('form-style-adjectives'),
      adjectives_en: ['Modern', 'Distinctive', 'Reliable', 'Creative'],
      verbs: splitCsv('form-style-verbs'),
      verbs_en: ['Connect', 'Build', 'Launch', 'Scale'],
      tone_and_manner: document.getElementById('form-style-tone')?.value.trim() || '명확하고 설득력 있는 브랜드 보이스',
      sample_copy: document.getElementById('form-style-sample-copy')?.value.trim() || `${nameKo}의 감성으로 비즈니스의 가치를 새롭게 연결합니다.`
    },
    colors: {
      primary: document.getElementById('form-style-primary')?.value.trim() || '#4F46E5',
      secondary: document.getElementById('form-style-secondary')?.value.trim() || '#7C3AED',
      accent: document.getElementById('form-style-accent')?.value.trim() || '#10B981',
      background: document.getElementById('form-style-background')?.value.trim() || '#F8FAFC',
      surface: document.getElementById('form-style-surface')?.value.trim() || '#FFFFFF',
      text_main: document.getElementById('form-style-text-main')?.value.trim() || '#0F172A',
      text_muted: document.getElementById('form-style-text-muted')?.value.trim() || '#475569',
      border: borderHex,
      color_scheme: document.getElementById('form-style-color-scheme')?.value || 'light'
    },
    typography: {
      heading_font: headingFont,
      body_font: "'Pretendard Variable', Pretendard, sans-serif",
      accent_font: "'JetBrains Mono', monospace",
      heading_weight: '800',
      body_weight: '400',
      letter_spacing: '-0.02em',
      line_height: '1.65'
    }
  };

  const url = editId ? `${API_PREFIX}/styles/${encodeURIComponent(editId)}` : `${API_PREFIX}/styles`;
  const method = editId ? 'PUT' : 'POST';

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!res.ok) {
    alert(`저장 실패: ${data.detail || '오류가 발생했습니다.'}`);
    return;
  }

  await refreshStudioSummaryAndLists();
  applyDesignStyle(data.style.id);
  populateStyleForm(data.style, true);
  copyTextToClipboard(data.style.id, `💾 [${data.style.name_ko}] 스타일이 저장되고 즉시 적용되었습니다!`);
}

async function deleteStyleItem(styleId) {
  const target = ALL_STYLES.find(s => s.id === styleId);
  if (!target) return;
  if (!confirm(`정말 [${target.name_ko}] 스타일을 삭제하시겠습니까?`)) return;

  const res = await fetch(`${API_PREFIX}/styles/${encodeURIComponent(styleId)}`, { method: 'DELETE' });
  const data = await res.json();
  if (!res.ok) {
    alert(data.detail || '삭제할 수 없습니다.');
    return;
  }
  if (CURRENT_STYLE.id === styleId) {
    applyDesignStyle('style-00-twayworks-original');
  }
  await refreshStudioSummaryAndLists();
}

// ---------------------------------------------------------------------
// Category 2: LAYOUT STYLES (웹사이트 레이아웃 스타일) Catalog, AI Generation & CRUD
// ---------------------------------------------------------------------
function setStudioLayoutFilter(filter) {
  STUDIO_LAYOUT_FILTER = filter;
  ['all', 'builtin', 'custom'].forEach(f => {
    const el = document.getElementById(`layout-filter-${f}`);
    if (el) el.classList.toggle('active', f === filter);
  });
  renderStudioLayoutList();
}

function renderStudioLayoutList() {
  const listEl = document.getElementById('dh-studio-layout-list');
  if (!listEl) return;

  const filtered = ALL_LAYOUTS.filter(l => {
    const isCustom = Boolean(l.is_custom || l.order > 10);
    if (STUDIO_LAYOUT_FILTER === 'builtin') return !isCustom;
    if (STUDIO_LAYOUT_FILTER === 'custom') return isCustom;
    return true;
  });

  if (filtered.length === 0) {
    listEl.innerHTML = `<div style="padding:18px; text-align:center; color:#94A3B8; font-size:0.8rem;">신규 등록된 커스텀 레이아웃이 없습니다. 우측 AI 레이아웃 생성기로 새로운 레이아웃을 만들어 보세요!</div>`;
    return;
  }

  listEl.innerHTML = filtered.map(l => {
    const isActive = l.id === CURRENT_LAYOUT.id;
    const isCustom = Boolean(l.is_custom || l.order > 10);
    const num = String(l.order).padStart(2, '0');
    const companies = (l.representative_companies || []).join(', ');
    return `
      <div class="dh-studio-list-card ${isActive ? 'active-layout' : ''}">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; margin-bottom:4px;">
          <strong style="font-size:0.85rem; color:#FFFFFF;">${num}. ${l.domain_ko}</strong>
          <span class="${isCustom ? 'dh-custom-badge' : 'dh-builtin-badge'}">${isCustom ? '✨ AI/커스텀' : '10대 도메인'}</span>
        </div>
        <div style="font-size:0.74rem; color:#6EE7B7; margin-bottom:4px;">대표: ${companies}</div>
        <div style="font-size:0.74rem; color:#94A3B8; margin-bottom:8px; line-height:1.35;">📐 ${l.layout_structure}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
          <span style="font-size:0.69rem; color:#CBD5E1;">${l.live_blueprint?.archetype ? `아키타입: ${l.live_blueprint.archetype}` : '전용 인터랙티브 뷰'}</span>
          <div style="display:flex; gap:5px;">
            <button class="dh-ctrl-btn" style="padding:3px 8px; font-size:0.72rem; background:#059669; color:white;" onclick="applyWebsiteLayout('${l.id}', true); renderStudioLayoutList();">
              ${isActive ? '✓ 샘플웹 적용중' : '샘플웹 적용'}
            </button>
            ${l.order > 0 ? `
              <button class="dh-ctrl-btn" style="padding:3px 8px; font-size:0.72rem;" onclick="editLayoutInForm('${l.id}')">편집</button>
            ` : ''}
            ${isCustom ? `
              <button class="dh-ctrl-btn" style="padding:3px 8px; font-size:0.72rem; color:#FCA5A5; border-color:#EF4444;" onclick="deleteLayoutItem('${l.id}')">삭제</button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function fillLayoutAiPrompt(prompt, domain, companies) {
  document.getElementById('ai-layout-prompt').value = prompt;
  document.getElementById('ai-layout-domain-hint').value = domain || '';
  document.getElementById('ai-layout-companies-hint').value = companies || '';
}

function populateLayoutForm(layout, isEditMode = true) {
  document.getElementById('edit-layout-id').value = isEditMode ? (layout.id || '') : '';
  document.getElementById('edit-layout-order').value = isEditMode ? (layout.order || '') : '';

  const badge = document.getElementById('layout-form-mode-badge');
  if (badge) {
    badge.textContent = isEditMode && layout.id ? `편집 모드 (${layout.name_ko || layout.domain_ko})` : '신규/AI 레이아웃 등록 모드';
    badge.style.background = isEditMode && layout.id ? '#D97706' : '#059669';
  }

  document.getElementById('form-layout-domain-ko').value = layout.domain_ko || '';
  document.getElementById('form-layout-name-ko').value = layout.name_ko || '';
  document.getElementById('form-layout-companies').value = (layout.representative_companies || []).join(', ');
  document.getElementById('form-layout-structure').value = layout.layout_structure || '';

  const hs = layout.head_spec || {};
  document.getElementById('form-layout-head-name').value = hs.structure_name || '';
  document.getElementById('form-layout-head-desc').value = hs.description || '';
  document.getElementById('form-layout-head-elements').value = (hs.elements || []).join(', ');

  const bs = layout.body_spec || {};
  document.getElementById('form-layout-body-name').value = bs.structure_name || '';
  document.getElementById('form-layout-body-grid').value = bs.grid_template || '1fr 320px';
  document.getElementById('form-layout-body-desc').value = bs.description || '';

  const bp = layout.live_blueprint || {};
  document.getElementById('form-layout-bp-archetype').value = bp.archetype || 'grid-sidebar-right';
  document.getElementById('form-layout-bp-badge').value = bp.header_badge || 'CUSTOM DOMAIN PLATFORM';
  document.getElementById('form-layout-bp-menus').value = (bp.nav_menus || ['전체 홈', '실시간 피드', '인기 스낵앱', '무료진단']).join(', ');
  document.getElementById('form-layout-bp-hero-title').value = bp.hero_title || `${layout.name_ko || '신규 도메인'} 라이브 플랫폼`;

  const wTitle = bp.side_widget_title || '실시간 도메인 트렌드';
  const wItems = (bp.side_widget_items || ['VAIYER 자동배선', 'FOTOSTREAM 쇼츠', 'VDSTREAM 스트리밍']).join(', ');
  document.getElementById('form-layout-bp-widgets').value = `${wTitle} | ${wItems}`;

  const cPrefix = bp.card_badge_prefix || 'AI PICK';
  const cCta = bp.card_cta_label || '즉시 실행하기 →';
  document.getElementById('form-layout-bp-card-cta').value = `${cPrefix} | ${cCta}`;
}

function resetLayoutEditorForm() {
  populateLayoutForm({
    domain_ko: '',
    name_ko: '',
    representative_companies: [],
    layout_structure: '',
    head_spec: { structure_name: '', description: '', elements: [] },
    body_spec: { structure_name: '', grid_template: '1fr 320px', description: '' },
    live_blueprint: {
      archetype: 'grid-sidebar-right',
      header_badge: 'CUSTOM DOMAIN PLATFORM',
      nav_menus: ['전체 홈', '실시간 큐레이션', '인기 스낵앱', '3분 무료진단'],
      hero_title: '',
      side_widget_title: '실시간 인기 키워드',
      side_widget_items: ['VAIYER 자동배선', 'FOTOSTREAM 쇼츠합성', 'Proxy Auth 1초인증'],
      card_badge_prefix: 'HOT PICK',
      card_cta_label: '즉시 실행 →'
    }
  }, false);
}

function loadCurrentLayoutIntoForm() {
  populateLayoutForm(CURRENT_LAYOUT, CURRENT_LAYOUT.order > 0);
}

function editLayoutInForm(layoutId) {
  const target = ALL_LAYOUTS.find(l => l.id === layoutId);
  if (!target) return;
  populateLayoutForm(target, true);
}

async function generateLayoutWithAI(autoSave = true) {
  const prompt = document.getElementById('ai-layout-prompt')?.value.trim() || '';
  if (!prompt) {
    alert('생성할 웹사이트 레이아웃의 비즈니스 도메인, 참조 서비스, 원하는 Head/Body 구조를 입력해 주세요!');
    return;
  }
  const domainHint = document.getElementById('ai-layout-domain-hint')?.value.trim() || '';
  const compHint = document.getElementById('ai-layout-companies-hint')?.value.trim() || '';
  const statusEl = document.getElementById('ai-layout-status');
  const btnSave = document.getElementById('btn-ai-layout-save');
  const btnDraft = document.getElementById('btn-ai-layout-draft');

  if (statusEl) statusEl.innerHTML = `<span style="color:#FCD34D;">⏳ Gemini AI가 Head 내비게이션, Body 그리드 설계도, 샘플 웹 라이브 블루프린트를 생성 중입니다...</span>`;
  if (btnSave) btnSave.disabled = true;
  if (btnDraft) btnDraft.disabled = true;

  try {
    const res = await fetch(`${API_PREFIX}/layouts/ai-generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        domain_ko: domainHint,
        representative_companies: compHint ? compHint.split(',').map(x => x.trim()).filter(Boolean) : [],
        auto_save: autoSave
      })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || 'AI 레이아웃 생성 실패');

    const newLayout = data.layout;
    populateLayoutForm(newLayout, autoSave);

    if (autoSave) {
      await refreshStudioSummaryAndLists();
      applyWebsiteLayout(newLayout.id, true);
      if (statusEl) statusEl.innerHTML = `<span style="color:#34D399;">✅ [${newLayout.domain_ko}] 레이아웃이 AI로 생성되어 등록되고 샘플 웹에 즉시 적용되었습니다! (모달을 닫거나 아래로 스크롤하여 확인하세요)</span>`;
      copyTextToClipboard(newLayout.name_ko, `✨ AI 신규 레이아웃 [${newLayout.name_ko}] 샘플 웹 적용 완료!`);
    } else {
      if (statusEl) statusEl.innerHTML = `<span style="color:#6EE7B7;">🧪 AI 레이아웃 초안이 아래 편집 폼에 채워졌습니다. 확인 후 [저장] 버튼을 눌러 등록하세요!</span>`;
    }
  } catch (err) {
    if (statusEl) statusEl.innerHTML = `<span style="color:#FCA5A5;">❌ 오류: ${err.message}</span>`;
  } finally {
    if (btnSave) btnSave.disabled = false;
    if (btnDraft) btnDraft.disabled = false;
  }
}

async function saveLayoutFromForm() {
  const editId = document.getElementById('edit-layout-id')?.value.trim() || '';
  const editOrder = parseInt(document.getElementById('edit-layout-order')?.value || '0', 10);
  const domainKo = document.getElementById('form-layout-domain-ko')?.value.trim() || '';
  const nameKo = document.getElementById('form-layout-name-ko')?.value.trim() || domainKo;
  if (!domainKo) {
    alert('사업 도메인 한글명을 입력해 주세요.');
    return;
  }

  const splitCsv = (id) => (document.getElementById(id)?.value || '').split(',').map(x => x.trim()).filter(Boolean);

  const widgetRaw = document.getElementById('form-layout-bp-widgets')?.value || '실시간 인기 키워드 | VAIYER 배선, 1초 쇼츠합성';
  const [wTitlePart, wItemsPart] = widgetRaw.includes('|') ? widgetRaw.split('|') : ['실시간 도메인 트렌드', widgetRaw];

  const ctaRaw = document.getElementById('form-layout-bp-card-cta')?.value || 'AI PICK | 즉시 실행하기 →';
  const [cBadgePart, cCtaPart] = ctaRaw.includes('|') ? ctaRaw.split('|') : ['AI PICK', ctaRaw];

  const headName = document.getElementById('form-layout-head-name')?.value.trim() || '도메인 특화 글로벌 헤더 & 검색바';
  const bodyName = document.getElementById('form-layout-body-name')?.value.trim() || '큐레이션 카드 그리드 & 실시간 위젯 바디';
  const bodyGrid = document.getElementById('form-layout-body-grid')?.value.trim() || '1fr 320px';

  const payload = {
    id: editId || undefined,
    order: editOrder > 0 ? editOrder : undefined,
    domain_ko: domainKo,
    domain_en: 'Custom Domain Layout',
    name_ko: nameKo,
    name_en: 'Custom Architecture Layout',
    representative_companies: splitCsv('form-layout-companies').length > 0 ? splitCsv('form-layout-companies') : [domainKo],
    layout_structure: document.getElementById('form-layout-structure')?.value.trim() || `${headName} + ${bodyName}`,
    tagline: `${domainKo} 사용자 경험에 최적화된 맞춤형 Head & Body 웹사이트 레이아웃`,
    head_spec: {
      structure_name: headName,
      description: document.getElementById('form-layout-head-desc')?.value.trim() || '도메인 핵심 메뉴와 검색창, 액션 버튼이 결합된 상단 내비게이션 구조입니다.',
      elements: splitCsv('form-layout-head-elements').length > 0 ? splitCsv('form-layout-head-elements') : ['브랜드 로고', '통합 검색창', '카테고리 탭', '빠른 액션 버튼'],
      css_rules: { position: 'sticky', top: '0', z_index: '750' }
    },
    body_spec: {
      structure_name: bodyName,
      grid_template: bodyGrid,
      description: document.getElementById('form-layout-body-desc')?.value.trim() || '12종 스낵앱 카탈로그와 실시간 도메인 위젯이 유기적으로 배치되는 본문 그리드입니다.',
      elements: ['히어로 배너', '12종 스낵앱 큐레이션 그리드', '실시간 도메인 트렌드 위젯']
    },
    domain_keywords: [domainKo, nameKo, ...splitCsv('form-layout-companies')],
    recommended_styles: [CURRENT_STYLE.id, 'style-00-twayworks-original'],
    sample_application_note: 'TheWayWorks 샘플 웹의 12종 스낵앱과 4대 코어 엔진을 해당 도메인 레이아웃 구조로 실시간 변환하여 보여줍니다.',
    live_blueprint: {
      archetype: document.getElementById('form-layout-bp-archetype')?.value || 'grid-sidebar-right',
      header_badge: document.getElementById('form-layout-bp-badge')?.value.trim() || 'CUSTOM DOMAIN PLATFORM',
      search_placeholder: `${domainKo} 스낵앱 · 기술 부품 검색...`,
      nav_menus: splitCsv('form-layout-bp-menus'),
      quick_actions: ['⚡ 즉시 개통', '📦 패키지 다운로드'],
      hero_title: document.getElementById('form-layout-bp-hero-title')?.value.trim() || `${nameKo} × TheWayWorks`,
      hero_subtitle: document.getElementById('form-layout-body-desc')?.value.trim() || `${domainKo} 비즈니스에 최적화된 스낵앱 레이아웃`,
      hero_cta: '내 비즈니스 3분 무료 진단 →',
      side_widget_title: wTitlePart.trim(),
      side_widget_items: (wItemsPart || '').split(',').map(x => x.trim()).filter(Boolean),
      card_badge_prefix: cBadgePart.trim(),
      card_cta_label: cCtaPart.trim(),
      bottom_dock_text: `⚡ [${nameKo}] 실시간 컨트롤 독`
    }
  };

  const url = editId ? `${API_PREFIX}/layouts/${encodeURIComponent(editId)}` : `${API_PREFIX}/layouts`;
  const method = editId ? 'PUT' : 'POST';

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!res.ok) {
    alert(`레이아웃 저장 실패: ${data.detail || '오류가 발생했습니다.'}`);
    return;
  }

  await refreshStudioSummaryAndLists();
  applyWebsiteLayout(data.layout.id, true);
  populateLayoutForm(data.layout, true);
  copyTextToClipboard(data.layout.id, `💾 [${data.layout.name_ko}] 레이아웃이 저장되고 샘플 웹에 즉시 적용되었습니다!`);
}

async function deleteLayoutItem(layoutId) {
  const target = ALL_LAYOUTS.find(l => l.id === layoutId);
  if (!target) return;
  if (!confirm(`정말 [${target.domain_ko}] 레이아웃을 삭제하시겠습니까?`)) return;

  const res = await fetch(`${API_PREFIX}/layouts/${encodeURIComponent(layoutId)}`, { method: 'DELETE' });
  const data = await res.json();
  if (!res.ok) {
    alert(data.detail || '삭제할 수 없습니다.');
    return;
  }
  if (CURRENT_LAYOUT.id === layoutId) {
    applyWebsiteLayout('layout-00-twayworks-standard');
  }
  await refreshStudioSummaryAndLists();
}

document.addEventListener('DOMContentLoaded', initDesignHelper);


// =====================================================================
// V4.0 4-STAGE PROGRESSIVE DISCLOSURE WORKFLOW ENGINE
// - Stage 1 ('landing'): Purpose/Guide Hero + 10~20 Representative Tiles
// - Stage 2 ('preview'): Detailed Style(Tone & Manner) & Layout(Menu & View) Guide + 4 Representative Standard Pages Preview
// - Stage 3 ('advanced'): Advanced 2-Axis (Style × Layout) Combination Manager & AI Studio
// - Stage 4 ('sample'): Full Sample Website Navigation Mode
// =====================================================================

const MENU_PLACEMENT_CATALOG = [
  { id: 'all', label: '전체 메뉴 배치' },
  { id: 'top-gnb', label: '상단 표준 GNB형' },
  { id: 'mega-search', label: '통합검색 & 멀티카테고리형' },
  { id: 'left-sidebar', label: '좌측 고정 트리 사이드바형' },
  { id: 'quick-action-bar', label: '빠른 예매·조건검색 고정바형' },
  { id: 'minimal-floating', label: '미니멀 플로팅·오버레이형' }
];

const VIEW_STYLE_CATALOG = [
  { id: 'all', label: '전체 뷰 스타일' },
  { id: 'storytelling-sections', label: '교차형 스토리텔링 섹션 뷰' },
  { id: 'card-grid', label: '고밀도 카드 큐레이션 그리드 뷰' },
  { id: 'hero-carousel', label: '풀배너 & 수평 캐러셀 뷰' },
  { id: 'split-view', label: '좌우 2분할 스플릿(지도·워크스페이스) 뷰' },
  { id: 'three-col-feed', label: '3단 포털 & 뉴스 피드 뷰' },
  { id: 'onepage-parallax', label: '원페이지 패럴랙스 스크롤 뷰' }
];

const LAYOUT_TAXONOMY_FALLBACK = {
  'layout-00-twayworks-standard': { menuType: 'top-gnb', menuKo: '상단 고정 표준 GNB (6대 메뉴 탭)', viewType: 'storytelling-sections', viewKo: '2단 히어로 + 교차형 스토리텔링 섹션 뷰' },
  'layout-01-ecommerce-grid': { menuType: 'mega-search', menuKo: '상단 통합 검색바 + 1차 카테고리 멀티탭', viewType: 'card-grid', viewKo: '좌측 다중 필터 + 4열 고밀도 상품 카드 그리드 뷰' },
  'layout-02-ott-carousel': { menuType: 'minimal-floating', menuKo: '상단 투명 오버레이 미니멀 GNB', viewType: 'hero-carousel', viewKo: '풀스크린 빌보드 히어로 + 수평 스크롤 캐러셀(Row) 뷰' },
  'layout-03-entertainment-booking': { menuType: 'quick-action-bar', menuKo: '상단 GNB + 밀착형 빠른 예매 고정바', viewType: 'card-grid', viewKo: '박스오피스 랭킹 포스터 차트 + 예고편 모듈 뷰' },
  'layout-04-portal-3col-news': { menuType: 'mega-search', menuKo: '중앙 대형 검색 헤더 + 뉴스 섹션 탭바', viewType: 'three-col-feed', viewKo: '3단 신문 편집 그리드 (속보·헤드라인·위젯) 피드 뷰' },
  'layout-05-saas-workspace-split': { menuType: 'left-sidebar', menuKo: '좌측 고정 계층형 트리 사이드바 (Tree Menu)', viewType: 'split-view', viewKo: '좌우 분할 앱 쉘 & 다중 탭 데이터 워크스페이스 뷰' },
  'layout-06-travel-map-split': { menuType: 'quick-action-bar', menuKo: '상단 중앙 알약형 조건 검색 위젯 헤더', viewType: 'split-view', viewKo: '좌측 카드 리스트 + 우측 가격 마커 지도 2분할 스플릿 뷰' },
  'layout-07-edutech-curation-grid': { menuType: 'top-gnb', menuKo: '카테고리 드롭다운 GNB + 키워드 검색바', viewType: 'card-grid', viewKo: '프로모션 배너 슬라이더 + 4열 강의 큐레이션 그리드 뷰' },
  'layout-08-recruiting-career-feed': { menuType: 'top-gnb', menuKo: '상단 직군·직무 태그 필터 헤더', viewType: 'split-view', viewKo: '포지션 매칭 카드 그리드 + 우측 비용 계산기 복합 뷰' },
  'layout-09-proptech-fullscreen-map': { menuType: 'minimal-floating', menuKo: '지도 상단 반투명 플로팅 유형 탭 & 검색 헤더', viewType: 'split-view', viewKo: '100% 풀스크린 인터랙티브 지도 + 좌측 오버레이 패널 뷰' },
  'layout-10-brand-onepage-story': { menuType: 'minimal-floating', menuKo: '초미니멀 글래스 플로팅 헤더 (원페이지 앵커)', viewType: 'onepage-parallax', viewKo: '초대형 타이포그래피 원페이지 패럴랙스 스토리텔링 뷰' }
};

function getLayoutTaxonomy(layout) {
  if (!layout) return LAYOUT_TAXONOMY_FALLBACK['layout-00-twayworks-standard'];
  const fb = LAYOUT_TAXONOMY_FALLBACK[layout.id] || {};
  return {
    menuType: layout.menu_placement_type || fb.menuType || 'top-gnb',
    menuKo: layout.menu_placement_ko || fb.menuKo || layout.head_spec?.structure_name || '상단 도메인 맞춤 GNB',
    viewType: layout.view_style_type || fb.viewType || 'card-grid',
    viewKo: layout.view_style_ko || fb.viewKo || layout.body_spec?.structure_name || '큐레이션 그리드 & 위젯 뷰'
  };
}

function switchAppStage(stageName, smoothScroll = true) {
  const validStages = ['landing', 'ia', 'preview', 'advanced', 'sample'];
  const targetStage = validStages.includes(stageName) ? stageName : 'landing';
  CURRENT_APP_STAGE = targetStage;
  document.body.dataset.appStage = targetStage;

  const stageToGnbMap = {
    landing: 'gnb-gallery',
    ia: 'gnb-ia',
    preview: 'gnb-preview',
    advanced: 'gnb-studio',
    sample: 'gnb-live'
  };
  CURRENT_GNB_ID = stageToGnbMap[targetStage] || 'gnb-gallery';
  document.body.dataset.gnb = CURRENT_GNB_ID;

  validStages.forEach(st => {
    const secEl = document.getElementById(`dh-stage-${st}`);
    const btnEl = document.getElementById(`dh-step-btn-${st}`);
    if (secEl) secEl.classList.toggle('active', st === targetStage);
    if (btnEl) btnEl.classList.toggle('active', st === targetStage);
  });

  // Auto-collapse SNB in Full Sample Website mode for wide immersion, expand in Studio modes
  const shellEl = document.getElementById('dh-v5-workspace-shell');
  if (shellEl && targetStage === 'sample' && !shellEl.dataset.userToggled) {
    shellEl.classList.add('snb-collapsed');
  } else if (shellEl && targetStage !== 'sample' && !shellEl.dataset.userToggled) {
    shellEl.classList.remove('snb-collapsed');
  }

  refreshV4StageViews();

  if (targetStage === 'sample') {
    syncLayoutVisibilityAndStage();
  }

  if (smoothScroll) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function refreshV4StageViews() {
  renderLandingRepresentativeTiles();
  renderDetailGuideAndStandardPreview();
  renderAdvancedStudioWorkspace();
  updateSampleContextBarSummary();
  if (typeof renderV5NavigationAndIaViews === 'function') {
    renderV5NavigationAndIaViews();
  }
}

function updateSampleContextBarSummary() {
  const barSum = document.getElementById('dh-sample-bar-summary');
  if (!barSum) return;
  const sNum = String(CURRENT_STYLE.order).padStart(2, '0');
  const lNum = String(CURRENT_LAYOUT.order).padStart(2, '0');
  const tax = getLayoutTaxonomy(CURRENT_LAYOUT);
  barSum.innerHTML = `적용 완료: <strong style="color:#FFFFFF;">🎨 ${sNum}. ${CURRENT_STYLE.name_ko}</strong> × <strong style="color:#6EE7B7;">📐 ${lNum}. ${CURRENT_LAYOUT.name_ko} (${tax.menuKo})</strong> — 전체 메뉴(HOME ~ 05 무료진단)를 네비게이션해 보세요!`;
}

// ---------------------------------------------------------------------
// STAGE 1: LANDING REPRESENTATIVE TILES (10 Styles / 10 Layouts / 20 All / Guide)
// ---------------------------------------------------------------------
function setLandingTileMode(mode) {
  LANDING_TILE_MODE = mode;
  ['styles10', 'layouts10', 'all20', 'guide'].forEach(m => {
    const btn = document.getElementById(`landing-tab-${m}`);
    if (btn) btn.classList.toggle('active', m === mode);
  });

  const tilesSec = document.getElementById('dh-landing-tiles-sec');
  const guideSec = document.getElementById('dh-landing-guide-subview');
  if (mode === 'guide') {
    if (tilesSec) tilesSec.hidden = true;
    if (guideSec) guideSec.hidden = false;
    CURRENT_LNB_ID = 'lnb-gallery-guide';
  } else {
    if (tilesSec) tilesSec.hidden = false;
    if (guideSec) guideSec.hidden = true;
    CURRENT_LNB_ID = mode === 'layouts10' ? 'lnb-gallery-layouts' : 'lnb-gallery-styles';
    renderLandingRepresentativeTiles();
  }
  if (typeof renderV5LnbAndFnbBar === 'function') {
    renderV5LnbAndFnbBar();
  }
}

function selectStyleTileForPreview(styleId) {
  applyDesignStyle(styleId);
  switchAppStage('preview');
}

function selectStyleTileForSample(styleId, event) {
  if (event) event.stopPropagation();
  applyDesignStyle(styleId);
  switchAppStage('sample');
}

function downloadStyleTileZip(styleId, layoutId, event) {
  if (event) event.stopPropagation();
  const ci = getCompanyCI();
  const params = new URLSearchParams({
    layout_id: layoutId || CURRENT_LAYOUT.id,
    company_name: ci.companyName,
    tagline: ci.tagline,
    logo_mark: ci.logoMark
  });
  window.location.href = `${API_PREFIX}/styles/${encodeURIComponent(styleId)}/download?${params.toString()}`;
}

function selectLayoutTileForPreview(layoutId, recStyleId) {
  if (recStyleId) applyDesignStyle(recStyleId);
  applyWebsiteLayout(layoutId, false);
  switchAppStage('preview');
}

function selectLayoutTileForSample(layoutId, recStyleId, event) {
  if (event) event.stopPropagation();
  if (recStyleId) applyDesignStyle(recStyleId);
  applyWebsiteLayout(layoutId, false);
  switchAppStage('sample');
}

function buildStyleTileHtml(style) {
  const isSelected = style.id === CURRENT_STYLE.id;
  const num = String(style.order).padStart(2, '0');
  const c = style.colors || {};
  const t = style.typography || {};
  const adjs = (style.identity?.adjectives || []).slice(0, 3);
  const verbs = (style.identity?.verbs || []).slice(0, 2);
  const fontShort = (t.heading_font || 'Pretendard').split(',')[0].replace(/['"]/g, '').trim();
  const radiusVal = style.id === 'style-01-minimal-essential' || style.id === 'style-06-editorial-magazine' || style.id === 'style-08-luxury-prestige'
    ? '0px'
    : (style.id === 'style-07-pop-creative' ? '14px' : '8px');

  // Find a recommended layout for this style
  const matchedLayout = ALL_LAYOUTS.find(l => l.order > 0 && (l.recommended_styles || []).includes(style.id)) || TWAYWORKS_STANDARD_LAYOUT;
  const tax = getLayoutTaxonomy(matchedLayout);

  return `
    <article class="dh-v4-rep-tile ${isSelected ? 'selected-tile' : ''}" onclick="selectStyleTileForPreview('${style.id}')">
      <div>
        <!-- Mini Visual Webpage Wireframe Preview -->
        <div class="dh-tile-mini-screen" style="background:${c.background}; color:${c.text_main}; font-family:${t.heading_font || 'Pretendard, sans-serif'};">
          <!-- Mini Nav -->
          <div class="dh-tile-mini-nav" style="background:${c.surface}; border:1px solid ${c.border}; border-radius:${radiusVal}; color:${c.text_main};">
            <span style="display:inline-flex; align-items:center; gap:5px;">
              <i style="width:14px; height:14px; border-radius:4px; background:${c.primary}; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-style:normal; font-size:0.55rem;">W</i>
              <strong>STYLE ${num}</strong>
            </span>
            <span style="font-size:0.58rem; color:${c.text_muted};">HOME · 서비스 · 사례 · 진단</span>
          </div>

          <!-- Mini Hero -->
          <div class="dh-tile-mini-hero">
            <div style="font-size:0.58rem; font-weight:800; color:${c.secondary}; letter-spacing:0.04em;">TONE &amp; MANNER PREVIEW</div>
            <div style="font-size:0.86rem; font-weight:800; line-height:1.25; margin:2px 0 5px; color:${c.text_main}; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
              ${style.name_ko}
            </div>
            <div style="display:flex; align-items:center; gap:5px;">
              <span style="background:${c.primary}; color:#FFFFFF; font-size:0.58rem; font-weight:700; padding:3px 8px; border-radius:${radiusVal};">핵심 CTA 액션 →</span>
              <span style="background:${c.surface}; color:${c.text_main}; border:1px solid ${c.border}; font-size:0.58rem; padding:2px 7px; border-radius:${radiusVal};">${c.color_scheme === 'dark' ? 'Dark' : 'Light'}</span>
            </div>
          </div>

          <!-- Mini Standard 3-Column Cards -->
          <div class="dh-tile-mini-cards">
            <div class="dh-tile-mini-card-item" style="background:${c.surface}; border:1px solid ${c.border}; border-radius:${radiusVal}; color:${c.text_main};">
              <span>01 히어로</span>
              <i style="width:7px; height:7px; border-radius:50%; background:${c.primary};"></i>
            </div>
            <div class="dh-tile-mini-card-item" style="background:${c.surface}; border:1px solid ${c.border}; border-radius:${radiusVal}; color:${c.text_main};">
              <span>02 서비스</span>
              <i style="width:7px; height:7px; border-radius:50%; background:${c.secondary};"></i>
            </div>
            <div class="dh-tile-mini-card-item" style="background:${c.surface}; border:1px solid ${c.border}; border-radius:${radiusVal}; color:${c.text_main};">
              <span>03 진단폼</span>
              <i style="width:7px; height:7px; border-radius:50%; background:${c.accent};"></i>
            </div>
          </div>
        </div>

        <!-- Tile Metadata Body -->
        <div class="dh-tile-body">
          <div>
            <div class="dh-tile-title-row">
              <span class="dh-tile-title">${num}. ${style.name_ko}</span>
              <div class="dh-swatch-group" title="5대 핵심 컬러 팔레트">
                ${[c.primary, c.secondary, c.accent, c.background, c.text_main].filter(Boolean).map(hex => `<span class="dh-mini-swatch" style="background:${hex};"></span>`).join('')}
              </div>
            </div>
            <div style="font-size:0.71rem; color:#818CF8; font-weight:700; margin-bottom:5px;">
              ${style.name_en} · 서체: ${fontShort}
            </div>
            <p class="dh-tile-sub">${style.tagline || ''}</p>
          </div>

          <div class="dh-tile-meta-tags">
            ${adjs.map(a => `<span class="dh-tile-tag">#${a}</span>`).join('')}
            ${verbs.map(v => `<span class="dh-tile-tag" style="color:#6EE7B7;">⚡${v}</span>`).join('')}
            <span class="dh-tile-tag menu-tag" title="추천 메뉴 배치">메뉴: ${tax.menuKo.split('(')[0].trim()}</span>
          </div>
        </div>
      </div>

      <!-- Tile Footer Actions -->
      <div class="dh-tile-footer">
        <button class="dh-ctrl-btn" style="flex:1; justify-content:center; background:#4F46E5; border-color:#818CF8; color:#FFFFFF; padding:6px 8px; font-size:0.74rem;" onclick="event.stopPropagation(); selectStyleTileForPreview('${style.id}')">
          🔍 상세 가이드 &amp; 프리뷰
        </button>
        <button class="dh-ctrl-btn" style="padding:6px 8px; font-size:0.72rem;" title="전체 샘플 홈페이지에 즉시 적용" onclick="selectStyleTileForSample('${style.id}', event)">
          🚀 샘플웹
        </button>
        <button class="dh-ctrl-btn dh-btn-download" style="padding:6px 8px; font-size:0.72rem;" title="이 스타일 템플릿 패키지(.ZIP) 즉시 다운로드" onclick="downloadStyleTileZip('${style.id}', '${matchedLayout.id}', event)">
          📦 .ZIP
        </button>
      </div>
    </article>
  `;
}

function buildLayoutTileHtml(layout) {
  const isSelected = layout.id === CURRENT_LAYOUT.id;
  const num = String(layout.order).padStart(2, '0');
  const tax = getLayoutTaxonomy(layout);
  const recStyleId = (layout.recommended_styles || [])[0] || CURRENT_STYLE.id;
  const pairedStyle = ALL_STYLES.find(s => s.id === recStyleId) || CURRENT_STYLE;
  const c = pairedStyle.colors || CURRENT_STYLE.colors;
  const companies = (layout.representative_companies || []).join(', ');

  // Mini Layout Wireframe Visualization based on menuType & viewType
  let wireframeInner = '';
  if (tax.menuType === 'left-sidebar') {
    wireframeInner = `
      <div style="display:grid; grid-template-columns:54px 1fr; gap:6px; height:100%;">
        <div style="background:${c.primary}; color:#fff; border-radius:6px; padding:6px 4px; font-size:0.55rem; font-weight:700; display:flex; flex-direction:column; gap:3px;">
          <span>📂 트리메뉴</span>
          <span style="opacity:0.75;">· 채널 01</span>
          <span style="opacity:0.75;">· 채널 02</span>
          <span style="opacity:0.75;">· 데이터뷰</span>
        </div>
        <div style="display:flex; flex-direction:column; justify-content:space-between; background:${c.surface}; border:1px solid ${c.border}; border-radius:6px; padding:6px;">
          <div style="font-size:0.62rem; font-weight:800; color:${c.text_main};">워크스페이스 스플릿 뷰</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:4px;">
            <div style="height:36px; background:${c.background}; border:1px solid ${c.border}; border-radius:4px; padding:3px; font-size:0.52rem;">문서/보드</div>
            <div style="height:36px; background:${c.background}; border:1px solid ${c.border}; border-radius:4px; padding:3px; font-size:0.52rem;">실시간 테이블</div>
          </div>
        </div>
      </div>
    `;
  } else if (tax.viewType === 'split-view') {
    wireframeInner = `
      <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:5px;">
        <div style="background:${c.surface}; border:1px solid ${c.primary}; border-radius:999px; padding:4px 10px; font-size:0.58rem; font-weight:800; color:${c.text_main}; display:flex; justify-content:space-between;">
          <span>🔍 ${tax.menuKo.split('+')[0].trim()}</span>
          <span style="color:${c.primary};">필터 · 검색</span>
        </div>
        <div style="display:grid; grid-template-columns:1.1fr 0.9fr; gap:6px; flex:1;">
          <div style="background:${c.surface}; border:1px solid ${c.border}; border-radius:6px; padding:5px; font-size:0.56rem; display:flex; flex-direction:column; justify-content:space-between;">
            <strong>좌측 카드 리스트</strong>
            <span style="color:${c.text_muted};">매칭 카드 2열 탐색</span>
          </div>
          <div style="background:${c.primary}22; border:1px solid ${c.primary}; border-radius:6px; padding:5px; font-size:0.56rem; display:flex; flex-direction:column; justify-content:space-between;">
            <strong style="color:${c.primary};">우측 인터랙티브 맵/위젯</strong>
            <span style="background:${c.primary}; color:#fff; padding:1px 5px; border-radius:999px; align-self:flex-start;">₩실시간 마커</span>
          </div>
        </div>
      </div>
    `;
  } else if (tax.viewType === 'three-col-feed') {
    wireframeInner = `
      <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:5px;">
        <div style="background:${c.surface}; border-bottom:2px solid ${c.primary}; padding:4px 8px; font-size:0.58rem; font-weight:800; display:flex; justify-content:space-between;">
          <span>📰 통합 검색 &amp; 섹션 탭</span>
          <span style="color:${c.accent};">LIVE 속보</span>
        </div>
        <div style="display:grid; grid-template-columns:0.7fr 1.4fr 0.8fr; gap:5px; flex:1;">
          <div style="background:${c.surface}; border:1px solid ${c.border}; border-radius:5px; padding:4px; font-size:0.52rem;">좌측 속보</div>
          <div style="background:${c.surface}; border:1px solid ${c.primary}; border-radius:5px; padding:4px; font-size:0.54rem; font-weight:700;">중앙 헤드라인 피드</div>
          <div style="background:${c.surface}; border:1px solid ${c.border}; border-radius:5px; padding:4px; font-size:0.52rem;">우측 위젯</div>
        </div>
      </div>
    `;
  } else if (tax.viewType === 'hero-carousel') {
    wireframeInner = `
      <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:5px;">
        <div style="background:linear-gradient(90deg, ${c.primary}, ${c.secondary}); color:#fff; border-radius:6px; padding:8px; flex:1; display:flex; flex-direction:column; justify-content:space-between;">
          <div style="font-size:0.54rem; opacity:0.9;">투명 오버레이 GNB · 풀스크린 배너</div>
          <div style="font-size:0.72rem; font-weight:800;">▶ 와이드 빌보드 히어로</div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:4px;">
          <div style="height:26px; background:${c.surface}; border:1px solid ${c.border}; border-radius:4px; font-size:0.5rem; padding:3px;">TOP 1</div>
          <div style="height:26px; background:${c.surface}; border:1px solid ${c.border}; border-radius:4px; font-size:0.5rem; padding:3px;">TOP 2</div>
          <div style="height:26px; background:${c.surface}; border:1px solid ${c.border}; border-radius:4px; font-size:0.5rem; padding:3px;">TOP 3</div>
          <div style="height:26px; background:${c.surface}; border:1px solid ${c.border}; border-radius:4px; font-size:0.5rem; padding:3px;">캐러셀▸</div>
        </div>
      </div>
    `;
  } else {
    wireframeInner = `
      <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:5px;">
        <div style="background:${c.surface}; border:1px solid ${c.border}; border-radius:6px; padding:4px 8px; font-size:0.56rem; font-weight:700; display:flex; justify-content:space-between;">
          <span>🧭 ${tax.menuKo.split('(')[0].trim()}</span>
          <span style="color:${c.primary};">카테고리 탭</span>
        </div>
        <div style="background:${c.primary}18; border:1px solid ${c.primary}55; border-radius:6px; padding:5px 8px; font-size:0.62rem; font-weight:800; color:${c.text_main};">
          ${layout.domain_ko.split('(')[0].trim()}
        </div>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:4px;">
          <div style="height:28px; background:${c.surface}; border:1px solid ${c.border}; border-radius:4px; padding:3px; font-size:0.5rem;">카드 01</div>
          <div style="height:28px; background:${c.surface}; border:1px solid ${c.border}; border-radius:4px; padding:3px; font-size:0.5rem;">카드 02</div>
          <div style="height:28px; background:${c.surface}; border:1px solid ${c.border}; border-radius:4px; padding:3px; font-size:0.5rem;">카드 03</div>
          <div style="height:28px; background:${c.surface}; border:1px solid ${c.border}; border-radius:4px; padding:3px; font-size:0.5rem;">카드 04</div>
        </div>
      </div>
    `;
  }

  return `
    <article class="dh-v4-rep-tile ${isSelected ? 'selected-tile' : ''}" onclick="selectLayoutTileForPreview('${layout.id}', '${pairedStyle.id}')">
      <div>
        <div class="dh-tile-mini-screen" style="background:${c.background}; color:${c.text_main};">
          ${wireframeInner}
        </div>

        <div class="dh-tile-body">
          <div>
            <div class="dh-tile-title-row">
              <span class="dh-tile-title">LAYOUT ${num}. ${layout.domain_ko.split('(')[0].trim()}</span>
            </div>
            <div style="font-size:0.72rem; color:#6EE7B7; font-weight:700; margin-bottom:5px;">
              ${layout.name_ko} · 참조: ${companies}
            </div>
            <p class="dh-tile-sub">${layout.tagline || layout.layout_structure}</p>
          </div>

          <div class="dh-tile-meta-tags">
            <span class="dh-tile-tag menu-tag">🧭 메뉴배치: ${tax.menuKo}</span>
            <span class="dh-tile-tag view-tag">📐 뷰스타일: ${tax.viewKo}</span>
          </div>
        </div>
      </div>

      <div class="dh-tile-footer">
        <button class="dh-ctrl-btn" style="flex:1; justify-content:center; background:#059669; border-color:#34D399; color:#FFFFFF; padding:6px 8px; font-size:0.74rem;" onclick="event.stopPropagation(); selectLayoutTileForPreview('${layout.id}', '${pairedStyle.id}')">
          🔍 레이아웃 가이드 &amp; 프리뷰
        </button>
        <button class="dh-ctrl-btn" style="padding:6px 8px; font-size:0.72rem;" onclick="selectLayoutTileForSample('${layout.id}', '${pairedStyle.id}', event)">
          🚀 샘플웹 적용
        </button>
      </div>
    </article>
  `;
}

function renderLandingRepresentativeTiles() {
  const gridEl = document.getElementById('dh-landing-tile-grid');
  if (!gridEl) return;

  // Representative 10 Styles (order 1..10, fallback to all if <10)
  const repStyles = ALL_STYLES.filter(s => s.order >= 1 && s.order <= 10);
  const stylesToRender = repStyles.length > 0 ? repStyles : ALL_STYLES.slice(0, 10);

  // Representative 10 Layouts (order 1..10)
  const repLayouts = ALL_LAYOUTS.filter(l => l.order >= 1 && l.order <= 10);
  const layoutsToRender = repLayouts.length > 0 ? repLayouts : ALL_LAYOUTS.slice(0, 10);

  if (LANDING_TILE_MODE === 'styles10') {
    gridEl.innerHTML = stylesToRender.map(s => buildStyleTileHtml(s)).join('');
  } else if (LANDING_TILE_MODE === 'layouts10') {
    gridEl.innerHTML = layoutsToRender.map(l => buildLayoutTileHtml(l)).join('');
  } else {
    // 'all20' — Both 10 Representative Styles + 10 Representative Layouts at a glance
    gridEl.innerHTML = [
      ...stylesToRender.map(s => buildStyleTileHtml(s)),
      ...layoutsToRender.map(l => buildLayoutTileHtml(l))
    ].join('');
  }
}

// ---------------------------------------------------------------------
// STAGE 2: DETAIL GUIDE (Tone & Manner vs Menu & View Style) + 4 REPRESENTATIVE STANDARD PAGES PREVIEW
// ---------------------------------------------------------------------
function onPreviewSelectStyle(styleId) {
  applyDesignStyle(styleId);
}

function onPreviewSelectLayout(layoutId) {
  applyWebsiteLayout(layoutId, false);
}

function setStandardPreviewTab(tab) {
  STANDARD_PREVIEW_TAB = tab;
  ['overview', 'feature', 'home', 'catalog', 'story', 'contact', 'tokens'].forEach(t => {
    const btn = document.getElementById(`rep-tab-${t}`);
    if (btn) btn.classList.toggle('active', t === tab);
  });
  if (tab === 'feature') CURRENT_LNB_ID = 'lnb-preview-feature';
  else if (tab === 'tokens') CURRENT_LNB_ID = 'lnb-preview-tokens';
  else CURRENT_LNB_ID = 'lnb-preview-standard';

  renderStandardRepresentativePagesCanvas();
  if (typeof renderV5LnbAndFnbBar === 'function') {
    renderV5LnbAndFnbBar();
  }
}

function renderDetailGuideAndStandardPreview() {
  const s = CURRENT_STYLE;
  const l = CURRENT_LAYOUT;
  const tax = getLayoutTaxonomy(l);

  // 1. Update Stage 2 Header Summary
  const sumEl = document.getElementById('dh-preview-header-summary');
  if (sumEl) {
    const sNum = String(s.order).padStart(2, '0');
    const lNum = String(l.order).padStart(2, '0');
    sumEl.innerHTML = `🎨 스타일: <strong style="color:#818CF8;">${sNum}. ${s.name_ko}</strong> × 📐 레이아웃: <strong style="color:#6EE7B7;">${lNum}. ${l.name_ko}</strong>`;
  }

  // 2. Populate Quick Select Dropdowns
  const styleSel = document.getElementById('dh-preview-style-select');
  if (styleSel) {
    styleSel.innerHTML = ALL_STYLES.map(st => `
      <option value="${st.id}" ${st.id === s.id ? 'selected' : ''}>
        ${String(st.order).padStart(2, '0')}. ${st.name_ko} (${st.name_en})
      </option>
    `).join('');
  }

  const layoutSel = document.getElementById('dh-preview-layout-select');
  if (layoutSel) {
    layoutSel.innerHTML = ALL_LAYOUTS.map(ly => {
      const lyTax = getLayoutTaxonomy(ly);
      return `
        <option value="${ly.id}" ${ly.id === l.id ? 'selected' : ''}>
          ${String(ly.order).padStart(2, '0')}. ${ly.domain_ko.split('(')[0].trim()} — [메뉴: ${lyTax.menuKo.split('(')[0].trim()}]
        </option>
      `;
    }).join('');
  }

  // 3. Render Left Detail Guide Content
  const guideEl = document.getElementById('dh-detail-guide-content');
  if (guideEl) {
    const c = s.colors || {};
    const t = s.typography || {};
    const ui = s.template_definition?.ui_components || {};
    const ident = s.identity || {};
    const colorItems = [
      ['Primary', c.primary],
      ['Secondary', c.secondary],
      ['Accent', c.accent],
      ['Background', c.background],
      ['Surface', c.surface],
      ['Text Main', c.text_main],
      ['Text Muted', c.text_muted],
      ['Border', c.border]
    ];

    guideEl.innerHTML = `
      <!-- Card 1: Style Guide (Tone & Manner Focused) -->
      <div class="dh-v4-side-card" style="margin-bottom:16px;">
        <div class="side-card-title-row">
          <div>
            <span style="font-size:0.68rem; font-weight:800; color:#818CF8; display:block;">1. STYLE GUIDE (TONE &amp; MANNER)</span>
            <strong style="font-size:0.98rem; color:#FFFFFF;">🎨 ${s.name_ko} <small style="color:#94A3B8; font-weight:500;">(${s.name_en})</small></strong>
          </div>
          <span class="dh-builtin-badge">${c.color_scheme === 'dark' ? '🌙 Dark 테마' : '☀️ Light 테마'}</span>
        </div>

        <p style="font-size:0.8rem; color:#E2E8F0; line-height:1.55; margin-bottom:12px;">
          ${s.tagline || ''}
        </p>

        <!-- Tone & Manner & Sample Copy -->
        <div style="background:rgba(79,70,229,0.12); border:1px solid rgba(129,140,248,0.3); border-radius:10px; padding:10px 12px; margin-bottom:12px;">
          <div style="font-size:0.72rem; font-weight:800; color:#A5B4FC; margin-bottom:4px;">💬 커뮤니케이션 톤앤매너 (Tone &amp; Manner)</div>
          <div style="font-size:0.78rem; color:#F8FAFC; line-height:1.5; margin-bottom:6px;">${ident.tone_and_manner || ''}</div>
          <div style="font-size:0.75rem; color:#6EE7B7; font-style:italic;">"${ident.sample_copy || ''}"</div>
        </div>

        <!-- Adjectives & Verbs -->
        <div style="margin-bottom:12px;">
          <div style="font-size:0.72rem; font-weight:700; color:#94A3B8; margin-bottom:5px;">브랜드 정체성 형용사 &amp; 행동 동사</div>
          <div style="display:flex; flex-wrap:wrap; gap:5px;">
            ${(ident.adjectives || []).map(a => `<span class="dh-tile-tag">#${a}</span>`).join('')}
            ${(ident.verbs || []).map(v => `<span class="dh-tile-tag" style="color:#6EE7B7;">⚡${v}</span>`).join('')}
          </div>
        </div>

        <!-- 8 Color Swatches (Click to copy) -->
        <div style="margin-bottom:12px;">
          <div style="font-size:0.72rem; font-weight:700; color:#94A3B8; margin-bottom:6px;">8대 시맨틱 색상 팔레트 (클릭 시 HEX 복사)</div>
          <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:6px;">
            ${colorItems.map(([lbl, hex]) => `
              <div onclick="copyTextToClipboard('${hex}', '${lbl} (${hex}) 복사됨!')" style="background:#0F172A; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:6px; cursor:pointer; text-align:center;">
                <div style="height:20px; border-radius:5px; background:${hex}; border:1px solid rgba(255,255,255,0.25); margin-bottom:4px;"></div>
                <div style="font-size:0.63rem; color:#94A3B8;">${lbl}</div>
                <div style="font-size:0.67rem; font-weight:800; color:#F8FAFC; font-family:monospace;">${hex}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Typography & UI Component Rules -->
        <div style="background:#0F172A; border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:10px 12px; font-size:0.76rem; color:#CBD5E1; display:flex; flex-direction:column; gap:4px;">
          <div><strong style="color:#A5B4FC;">제목 서체:</strong> ${(t.heading_font || '').split(',')[0]} (굵기 ${t.heading_weight || '700'})</div>
          <div><strong style="color:#A5B4FC;">본문 서체:</strong> ${(t.body_font || '').split(',')[0]} (행간 ${t.line_height || '1.65'})</div>
          <div><strong style="color:#A5B4FC;">모서리 곡률 / 테두리:</strong> ${ui.border_radius || '14px'} / ${ui.border_style || '1px solid'}</div>
        </div>
      </div>

      <!-- Card 2: Layout Design Guide (Menu Placement & Body View Style Focused) -->
      <div class="dh-v4-side-card">
        <div class="side-card-title-row">
          <div>
            <span style="font-size:0.68rem; font-weight:800; color:#34D399; display:block;">2. LAYOUT DESIGN (MENU &amp; VIEW STYLE)</span>
            <strong style="font-size:0.98rem; color:#FFFFFF;">📐 ${l.domain_ko.split('(')[0].trim()} — ${l.name_ko}</strong>
          </div>
        </div>

        <div style="font-size:0.75rem; color:#6EE7B7; margin-bottom:10px;">
          대표 참조 서비스: <strong>${(l.representative_companies || []).join(', ')}</strong>
        </div>

        <!-- 1) Menu Placement (Head) -->
        <div style="background:rgba(99,102,241,0.1); border:1px solid rgba(129,140,248,0.3); border-radius:10px; padding:10px 12px; margin-bottom:10px;">
          <div style="font-size:0.73rem; font-weight:800; color:#A5B4FC; margin-bottom:3px;">
            🧭 ① 메뉴들의 배치 (Menu Placement / Head)
          </div>
          <div style="font-size:0.82rem; font-weight:800; color:#FFFFFF; margin-bottom:4px;">
            ${tax.menuKo}
          </div>
          <div style="font-size:0.75rem; color:#CBD5E1; line-height:1.45; margin-bottom:6px;">
            ${l.head_spec?.description || ''}
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:4px;">
            ${(l.head_spec?.elements || []).map(el => `<span class="dh-tile-tag">· ${el}</span>`).join('')}
          </div>
        </div>

        <!-- 2) Body View Style (Body) -->
        <div style="background:rgba(16,185,129,0.1); border:1px solid rgba(52,211,153,0.3); border-radius:10px; padding:10px 12px;">
          <div style="font-size:0.73rem; font-weight:800; color:#6EE7B7; margin-bottom:3px;">
            📐 ② 바디 뷰 스타일 (Body View Style)
          </div>
          <div style="font-size:0.82rem; font-weight:800; color:#FFFFFF; margin-bottom:4px;">
            ${tax.viewKo}
          </div>
          <div style="font-size:0.75rem; color:#CBD5E1; line-height:1.45; margin-bottom:6px;">
            ${l.body_spec?.description || ''}
          </div>
          <div style="font-size:0.71rem; font-family:monospace; color:#A7F3D0;">
            Grid 규격: ${l.body_spec?.grid_template || '12-Column Responsive'}
          </div>
        </div>
      </div>
    `;
  }

  // 4. Render Right Standard Representative Pages Canvas
  renderStandardRepresentativePagesCanvas();
}

function buildRepresentativeStandardPagesHtml(style, layout, ci, mode = 'overview') {
  const c = style.colors || {};
  const t = style.typography || {};
  const ident = style.identity || {};
  const tax = getLayoutTaxonomy(layout);
  const apps = getAppsList().slice(0, 4);

  // Dynamic Header Bar for Standard Preview based on Menu Placement Type
  const renderStandardMenuHeader = () => {
    if (tax.menuType === 'left-sidebar') {
      return `
        <div style="background:${c.surface}; border-bottom:1px solid ${c.border}; padding:8px 14px; display:flex; justify-content:space-between; align-items:center; font-size:0.75rem;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="background:${c.primary}; color:#fff; padding:2px 7px; border-radius:4px; font-weight:800;">${ci.logoMark}</span>
            <strong>${ci.companyName} Workspace</strong>
            <span style="color:${c.text_muted}; font-size:0.7rem;">[좌측 트리 사이드바 + 상단 경로바 배치]</span>
          </div>
          <span style="background:${c.background}; border:1px solid ${c.border}; padding:3px 10px; border-radius:6px; font-size:0.7rem; color:${c.text_muted};">⌘K 빠른 검색</span>
        </div>
      `;
    } else if (tax.menuType === 'mega-search') {
      return `
        <div style="background:${c.surface}; border-bottom:2px solid ${c.primary}; padding:10px 14px;">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; margin-bottom:8px;">
            <strong style="font-size:0.88rem; color:${c.text_main};">${ci.logoMark} · ${ci.companyName}</strong>
            <div style="flex:1; max-width:260px; background:${c.background}; border:1px solid ${c.primary}; border-radius:999px; padding:4px 12px; font-size:0.72rem; color:${c.text_muted};">
              🔍 통합 키워드·카테고리 검색...
            </div>
            <span style="background:${c.primary}; color:#fff; font-size:0.7rem; font-weight:700; padding:4px 10px; border-radius:6px;">마이페이지 · 장바구니</span>
          </div>
          <div style="display:flex; gap:10px; font-size:0.72rem; font-weight:700; color:${c.text_muted};">
            <span style="color:${c.primary}; border-bottom:2px solid ${c.primary};">전체 큐레이션</span>
            <span>인기 랭킹</span>
            <span>스낵앱 스토어</span>
            <span>AI 기술부품</span>
            <span>무료진단</span>
          </div>
        </div>
      `;
    } else if (tax.menuType === 'quick-action-bar') {
      return `
        <div style="background:${c.surface}; border-bottom:1px solid ${c.border}; padding:10px 14px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <strong style="font-size:0.86rem;">${ci.logoMark} ${ci.companyName}</strong>
            <div style="display:flex; gap:10px; font-size:0.73rem; font-weight:700;">
              <span>서비스 안내</span><span>실시간 차트</span><span>파트너십</span>
            </div>
          </div>
          <div style="background:${c.background}; border:1px solid ${c.primary}; border-radius:999px; padding:5px 12px; display:flex; justify-content:space-between; align-items:center; font-size:0.71rem;">
            <span>⚡ <strong>빠른 조건 선택 바:</strong> [도메인 선택] · [일정/규모 선택]</span>
            <span style="background:${c.primary}; color:#fff; padding:2px 9px; border-radius:999px; font-weight:800;">즉시 조회 →</span>
          </div>
        </div>
      `;
    } else {
      // Standard Top GNB or Minimal Floating
      return `
        <div style="background:${c.surface}; border-bottom:1px solid ${c.border}; padding:10px 14px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="width:24px; height:24px; border-radius:6px; background:${c.primary}; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">${ci.logoMark}</span>
            <div>
              <strong style="font-size:0.84rem; display:block; line-height:1.1;">${ci.companyName}</strong>
              <span style="font-size:0.62rem; color:${c.text_muted};">${ci.tagline}</span>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:10px; font-size:0.72rem; font-weight:700; color:${c.text_muted};">
            <span style="color:${c.primary};">HOME</span>
            <span>01 회사소개</span>
            <span>02 기술원리</span>
            <span>03 솔루션</span>
            <span>04 작동사례</span>
            <span style="background:${c.primary}; color:#fff; padding:3px 9px; border-radius:var(--dh-radius-btn);">05 무료진단</span>
          </div>
        </div>
      `;
    }
  };

  // Page 1: Standard Home, Menu Placement & Hero Preview
  const page1Html = `
    <div class="dh-rep-page-frame">
      <div class="dh-rep-frame-bar">
        <div>
          <span class="dh-rep-frame-dots"><i style="background:#EF4444;"></i><i style="background:#F59E0B;"></i><i style="background:#10B981;"></i></span>
          <span>대표페이지 ① — 표준 홈 · 메뉴 배치(${tax.menuKo.split('(')[0].trim()}) &amp; 히어로 톤앤매너</span>
        </div>
        <button class="dh-ctrl-btn" style="padding:2px 8px; font-size:0.68rem;" onclick="setStandardPreviewTab('${mode === 'home' ? 'overview' : 'home'}')">
          ${mode === 'home' ? '⊞ 4분할로 돌아가기' : '🔍 확대 보기'}
        </button>
      </div>
      ${renderStandardMenuHeader()}
      <div class="dh-rep-frame-body" style="${tax.menuType === 'left-sidebar' ? 'display:grid; grid-template-columns:120px 1fr; gap:12px;' : ''}">
        ${tax.menuType === 'left-sidebar' ? `
          <div style="background:${c.surface}; border:1px solid ${c.border}; border-radius:var(--dh-radius-sm); padding:8px; font-size:0.7rem; display:flex; flex-direction:column; gap:5px;">
            <strong style="color:${c.primary};">📂 트리 메뉴</strong>
            <span>· 01 홈 대시보드</span>
            <span>· 02 VAIYER 배선</span>
            <span>· 03 스낵앱 12종</span>
            <span>· 04 Wisdom 지식</span>
          </div>
        ` : ''}
        <div>
          <div style="background:var(--dh-hero-bg); color:var(--dh-hero-text); border:var(--dh-border-style); border-radius:var(--dh-radius-md); padding:18px; margin-bottom:12px;">
            <span style="display:inline-block; font-size:0.66rem; font-weight:800; background:${c.accent}; color:#064E3B; padding:2px 8px; border-radius:999px; margin-bottom:8px;">
              ${style.name_ko} · ${layout.name_ko}
            </span>
            <h4 style="font-family:var(--dh-font-heading); font-size:1.15rem; font-weight:var(--dh-heading-weight); line-height:1.3; margin:0 0 8px; color:inherit;">
              "${ident.sample_copy || '말 한마디로 내 노하우를 연결하면 오늘 바로 쓰는 나만의 비즈니스 앱이 됩니다.'}"
            </h4>
            <p style="font-size:0.78rem; opacity:0.9; line-height:1.5; margin:0 0 12px;">
              ${ident.tone_and_manner || style.tagline}
            </p>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <span style="background:${c.primary}; color:#FFFFFF; font-size:0.74rem; font-weight:800; padding:6px 14px; border-radius:var(--dh-radius-btn);">핵심 시작하기 CTA →</span>
              <span style="background:${c.surface}; color:${c.text_main}; border:1px solid ${c.border}; font-size:0.74rem; font-weight:700; padding:6px 12px; border-radius:var(--dh-radius-btn);">가이드 살펴보기</span>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
            <div style="background:${c.surface}; border:var(--dh-border-style); border-radius:var(--dh-radius-sm); padding:10px; text-align:center;">
              <strong style="font-size:0.9rem; color:${c.primary}; display:block;">12종 LIVE</strong>
              <span style="font-size:0.68rem; color:${c.text_muted};">프로덕션 스낵앱</span>
            </div>
            <div style="background:${c.surface}; border:var(--dh-border-style); border-radius:var(--dh-radius-sm); padding:10px; text-align:center;">
              <strong style="font-size:0.9rem; color:${c.secondary}; display:block;">설치 ZERO</strong>
              <span style="font-size:0.68rem; color:${c.text_muted};">카톡 링크 1초 실행</span>
            </div>
            <div style="background:${c.surface}; border:var(--dh-border-style); border-radius:var(--dh-radius-sm); padding:10px; text-align:center;">
              <strong style="font-size:0.9rem; color:${c.accent}; display:block;">100% 맞춤</strong>
              <span style="font-size:0.68rem; color:${c.text_muted};">톤앤매너 &amp; 레이아웃</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Page 2: Service Catalog & Body View Style Preview
  let viewStyleBodyHtml = '';
  if (tax.viewType === 'split-view') {
    viewStyleBodyHtml = `
      <div style="display:grid; grid-template-columns:1.15fr 0.85fr; gap:10px;">
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${apps.slice(0, 3).map((app, i) => `
            <div style="background:${c.surface}; border:var(--dh-border-style); border-radius:var(--dh-radius-sm); padding:9px 11px; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <span style="font-size:0.64rem; font-weight:800; color:${c.primary};">0${i + 1} · ${app.stack}</span>
                <div style="font-size:0.8rem; font-weight:800; color:${c.text_main};">${app.title}</div>
              </div>
              <span style="background:${c.primary}18; color:${c.primary}; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:var(--dh-radius-btn);">선택</span>
            </div>
          `).join('')}
        </div>
        <div style="background:${c.surface}; border:2px solid ${c.primary}; border-radius:var(--dh-radius-md); padding:12px; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <span style="font-size:0.65rem; font-weight:800; color:${c.accent};">INTERACTIVE SPLIT PANEL</span>
            <h5 style="font-size:0.88rem; margin:4px 0; color:${c.text_main};">우측 연동 지도/워크스페이스 프리뷰</h5>
            <p style="font-size:0.73rem; color:${c.text_muted}; line-height:1.45;">좌측 카드를 선택하면 우측 고정 패널에서 위치 마커나 상세 데이터가 즉시 갱신되는 2분할 뷰 스타일입니다.</p>
          </div>
          <div style="background:${c.primary}; color:#fff; text-align:center; padding:6px; border-radius:var(--dh-radius-btn); font-size:0.73rem; font-weight:800;">실시간 상세 패널 연동 중</div>
        </div>
      </div>
    `;
  } else if (tax.viewType === 'three-col-feed') {
    viewStyleBodyHtml = `
      <div style="display:grid; grid-template-columns:0.8fr 1.4fr 0.8fr; gap:8px;">
        <div style="background:${c.surface}; border:var(--dh-border-style); border-radius:var(--dh-radius-sm); padding:9px; font-size:0.72rem;">
          <strong style="color:${c.primary}; display:block; margin-bottom:6px;">[좌측] 분야/속보</strong>
          <div style="color:${c.text_muted}; line-height:1.6;">· VAIYER 자동배선<br/>· 1초 쇼츠합성<br/>· 스마트예약 개통</div>
        </div>
        <div style="background:${c.surface}; border:var(--dh-border-style); border-radius:var(--dh-radius-sm); padding:10px;">
          <span style="font-size:0.64rem; font-weight:800; color:${c.secondary};">MAIN HEADLINE FEED</span>
          <h5 style="font-size:0.86rem; margin:4px 0 6px; color:${c.text_main};">${apps[0]?.title || '모바일 매거진 VOGUE:M'}</h5>
          <p style="font-size:0.73rem; color:${c.text_muted}; line-height:1.45;">3단 컬럼 편집 구조로 중앙에는 핵심 콘텐츠 피드를, 좌우에는 탐색 메뉴와 실시간 지수 위젯을 배치합니다.</p>
        </div>
        <div style="background:${c.surface}; border:var(--dh-border-style); border-radius:var(--dh-radius-sm); padding:9px; font-size:0.72rem;">
          <strong style="color:${c.accent}; display:block; margin-bottom:6px;">[우측] 가동 위젯</strong>
          <div style="font-weight:800; color:${c.text_main};">● 12종 100% 정상</div>
          <div style="color:${c.text_muted}; font-size:0.68rem; margin-top:4px;">실시간 트렌드 랭킹</div>
        </div>
      </div>
    `;
  } else {
    viewStyleBodyHtml = `
      <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:10px;">
        ${apps.map((app, idx) => `
          <div style="background:${c.surface}; border:var(--dh-border-style); border-radius:var(--dh-radius-md); padding:11px; box-shadow:var(--dh-shadow-sm); display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.64rem; font-weight:800; color:${c.primary};">CARD 0${idx + 1} · ${app.stack}</span>
                <span style="font-size:0.62rem; background:${c.background}; border:1px solid ${c.border}; padding:1px 6px; border-radius:999px;">${app.endpoint}</span>
              </div>
              <strong style="font-size:0.82rem; color:${c.text_main}; display:block; margin-bottom:4px;">${app.title}</strong>
              <p style="font-size:0.71rem; color:${c.text_muted}; line-height:1.4; margin:0 0 8px;">${app.desc.slice(0, 52)}...</p>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:0.68rem; font-weight:700; color:${c.secondary};">★ 5.0 · 즉시 개통</span>
              <span style="background:${c.primary}; color:#fff; font-size:0.68rem; font-weight:700; padding:3px 9px; border-radius:var(--dh-radius-btn);">상세 보기 →</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  const page2Html = `
    <div class="dh-rep-page-frame">
      <div class="dh-rep-frame-bar">
        <div>
          <span class="dh-rep-frame-dots"><i style="background:#EF4444;"></i><i style="background:#F59E0B;"></i><i style="background:#10B981;"></i></span>
          <span>대표페이지 ② — 핵심 서비스 · 바디 뷰 스타일(${tax.viewKo.split('(')[0].trim()})</span>
        </div>
        <button class="dh-ctrl-btn" style="padding:2px 8px; font-size:0.68rem;" onclick="setStandardPreviewTab('${mode === 'catalog' ? 'overview' : 'catalog'}')">
          ${mode === 'catalog' ? '⊞ 4분할로 돌아가기' : '🔍 확대 보기'}
        </button>
      </div>
      <div class="dh-rep-frame-body">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:6px;">
          <div>
            <span style="font-size:0.66rem; font-weight:800; color:${c.primary};">BODY VIEW STYLE PREVIEW</span>
            <h5 style="font-family:var(--dh-font-heading); font-size:0.96rem; margin:0; color:${c.text_main};">${tax.viewKo}</h5>
          </div>
          <div style="display:flex; gap:5px; font-size:0.68rem;">
            <span style="background:${c.primary}; color:#fff; padding:3px 8px; border-radius:var(--dh-radius-btn); font-weight:700;">전체 (12)</span>
            <span style="background:${c.surface}; border:1px solid ${c.border}; padding:3px 8px; border-radius:var(--dh-radius-btn);">미디어·홍보</span>
            <span style="background:${c.surface}; border:1px solid ${c.border}; padding:3px 8px; border-radius:var(--dh-radius-btn);">예약·인증</span>
          </div>
        </div>
        ${viewStyleBodyHtml}
      </div>
    </div>
  `;

  // Page 3: Brand Story, Architecture Pipeline & Table Preview
  const page3Html = `
    <div class="dh-rep-page-frame">
      <div class="dh-rep-frame-bar">
        <div>
          <span class="dh-rep-frame-dots"><i style="background:#EF4444;"></i><i style="background:#F59E0B;"></i><i style="background:#10B981;"></i></span>
          <span>대표페이지 ③ — 브랜드 스토리 · 4단계 프로세스 &amp; 데이터 테이블 구성</span>
        </div>
        <button class="dh-ctrl-btn" style="padding:2px 8px; font-size:0.68rem;" onclick="setStandardPreviewTab('${mode === 'story' ? 'overview' : 'story'}')">
          ${mode === 'story' ? '⊞ 4분할로 돌아가기' : '🔍 확대 보기'}
        </button>
      </div>
      <div class="dh-rep-frame-body">
        <div style="margin-bottom:12px;">
          <span style="font-size:0.66rem; font-weight:800; color:${c.secondary};">ARCHITECTURE &amp; STORYTELLING</span>
          <h5 style="font-family:var(--dh-font-heading); font-size:0.98rem; margin:2px 0 8px; color:${c.text_main};">
            말 한마디(Vibe)가 비즈니스 앱이 되는 4단계 표준 파이프라인
          </h5>
          <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px;">
            ${[
              ['STEP 01', 'Vibe 한 줄 요청', c.primary],
              ['STEP 02', 'VAIYER 자동 배선', c.secondary],
              ['STEP 03', 'Wisdom 지식화', c.accent],
              ['STEP 04', '스낵앱 즉시 개통', c.primary]
            ].map(([st, ttl, col]) => `
              <div style="background:${c.surface}; border:var(--dh-border-style); border-top:3px solid ${col}; border-radius:var(--dh-radius-sm); padding:9px;">
                <div style="font-size:0.62rem; font-weight:800; color:${col}; font-family:var(--dh-font-accent);">${st}</div>
                <div style="font-size:0.76rem; font-weight:800; color:${c.text_main}; margin-top:2px;">${ttl}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Standard Table Component Preview -->
        <div style="background:${c.surface}; border:var(--dh-border-style); border-radius:var(--dh-radius-sm); overflow:hidden; font-size:0.73rem;">
          <div style="background:${c.primary}; color:#FFFFFF; padding:7px 12px; font-weight:800; display:grid; grid-template-columns:1fr 1.5fr 1fr;">
            <span>핵심 축 (Pillar)</span>
            <span>표준 역할 및 가치</span>
            <span>가동 상태</span>
          </div>
          <div style="padding:7px 12px; border-bottom:1px solid ${c.border}; display:grid; grid-template-columns:1fr 1.5fr 1fr;">
            <strong>01. VAIYER</strong>
            <span style="color:${c.text_muted};">4대 만능 기술 부품 레고 배선</span>
            <span style="color:${c.accent}; font-weight:800;">● Active</span>
          </div>
          <div style="padding:7px 12px; display:grid; grid-template-columns:1fr 1.5fr 1fr;">
            <strong>02. Wisdom</strong>
            <span style="color:${c.text_muted};">Dual-TOC 교차검증 지식 도서관</span>
            <span style="color:${c.accent}; font-weight:800;">● Verified</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Page 4: Interactive Contact / Diagnosis Form & Footer Preview
  const page4Html = `
    <div class="dh-rep-page-frame">
      <div class="dh-rep-frame-bar">
        <div>
          <span class="dh-rep-frame-dots"><i style="background:#EF4444;"></i><i style="background:#F59E0B;"></i><i style="background:#10B981;"></i></span>
          <span>대표페이지 ④ — 고객 무료 진단/문의 입력 폼 &amp; 표준 푸터 구성</span>
        </div>
        <button class="dh-ctrl-btn" style="padding:2px 8px; font-size:0.68rem;" onclick="setStandardPreviewTab('${mode === 'contact' ? 'overview' : 'contact'}')">
          ${mode === 'contact' ? '⊞ 4분할로 돌아가기' : '🔍 확대 보기'}
        </button>
      </div>
      <div class="dh-rep-frame-body" style="display:flex; flex-direction:column; justify-content:space-between; gap:12px;">
        <div style="background:${c.surface}; border:var(--dh-border-style); border-radius:var(--dh-radius-md); padding:14px;">
          <span style="font-size:0.65rem; font-weight:800; color:${c.primary};">STANDARD FORM &amp; CTA COMPONENTS</span>
          <h5 style="font-family:var(--dh-font-heading); font-size:0.94rem; margin:2px 0 10px; color:${c.text_main};">
            3분 무료 비즈니스 진단 &amp; 스낵앱 맞춤 신청 폼
          </h5>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:8px;">
            <input type="text" readonly value="${ci.companyName} 대표님" style="background:${c.background}; color:${c.text_main}; border:1px solid ${c.border}; border-radius:var(--dh-radius-sm); padding:7px 10px; font-size:0.74rem;" />
            <input type="text" readonly value="희망 스타일: ${style.name_ko}" style="background:${c.background}; color:${c.text_main}; border:1px solid ${c.border}; border-radius:var(--dh-radius-sm); padding:7px 10px; font-size:0.74rem;" />
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
            <span style="font-size:0.71rem; color:${c.text_muted};">☑ ${tax.menuKo.split('(')[0].trim()} 레이아웃 적용</span>
            <button type="button" style="background:${c.primary}; color:#FFFFFF; border:none; border-radius:var(--dh-radius-btn); padding:7px 16px; font-size:0.76rem; font-weight:800; cursor:pointer;" onclick="switchAppStage('sample')">
              무료 진단 신청 &amp; 전체 샘플웹 체험 →
            </button>
          </div>
        </div>

        <!-- Standard Mini Footer Preview -->
        <div style="background:#0F172A; color:#94A3B8; border-radius:var(--dh-radius-sm); padding:10px 14px; display:flex; justify-content:space-between; align-items:center; font-size:0.7rem;">
          <span><strong style="color:#FFFFFF;">${ci.logoMark} ${ci.companyName}</strong> · ${ci.tagline}</span>
          <span style="color:#6EE7B7;">● 12종 스낵앱 정상 가동 중</span>
        </div>
      </div>
    </div>
  `;

  if (mode === 'home') return page1Html;
  if (mode === 'catalog') return page2Html;
  if (mode === 'story') return page3Html;
  if (mode === 'contact') return page4Html;

  return `
    <div class="dh-rep-overview-grid">
      ${page1Html}
      ${page2Html}
      ${page3Html}
      ${page4Html}
    </div>
  `;
}

function renderStandardRepresentativePagesCanvas() {
  const canvasEl = document.getElementById('dh-standard-pages-canvas');
  if (!canvasEl) return;
  const ci = getCompanyCI();
  if (STANDARD_PREVIEW_TAB === 'feature') {
    canvasEl.innerHTML = buildCharacteristicFeatureViewHtml(CURRENT_LAYOUT, CURRENT_STYLE, ci);
    return;
  }
  if (STANDARD_PREVIEW_TAB === 'tokens') {
    canvasEl.innerHTML = buildStyleAndLayoutSpecSheetHtml(CURRENT_STYLE, CURRENT_LAYOUT, ci);
    return;
  }
  canvasEl.innerHTML = buildRepresentativeStandardPagesHtml(CURRENT_STYLE, CURRENT_LAYOUT, ci, STANDARD_PREVIEW_TAB);
}

// ---------------------------------------------------------------------
// STAGE 3: ADVANCED COMBINATION & MANAGEMENT STUDIO (Style × Layout Matrix)
// ---------------------------------------------------------------------
function setAdvMenuPlacementFilter(mpId) {
  ADV_MENU_PLACEMENT_FILTER = mpId;
  renderAdvancedStudioWorkspace();
}

function setAdvViewStyleFilter(vsId) {
  ADV_VIEW_STYLE_FILTER = vsId;
  renderAdvancedStudioWorkspace();
}

function resetAdvancedFilters() {
  SELECTED_ADJECTIVES.clear();
  SELECTED_VERBS.clear();
  SELECTED_DOMAIN = '';
  ADV_MENU_PLACEMENT_FILTER = 'all';
  ADV_VIEW_STYLE_FILTER = 'all';
  onIdentityFilterChanged();
}

function renderAdvancedStudioWorkspace() {
  // 1. Render Menu Placement & View Style filter chips
  const mpEl = document.getElementById('dh-menu-placement-tags');
  if (mpEl) {
    mpEl.innerHTML = MENU_PLACEMENT_CATALOG.map(item => `
      <button class="dh-kw-tag ${ADV_MENU_PLACEMENT_FILTER === item.id ? 'selected' : ''}" onclick="setAdvMenuPlacementFilter('${item.id}')">
        🧭 ${item.label}
      </button>
    `).join('');
  }

  const vsEl = document.getElementById('dh-view-style-tags');
  if (vsEl) {
    vsEl.innerHTML = VIEW_STYLE_CATALOG.map(item => `
      <button class="dh-kw-tag ${ADV_VIEW_STYLE_FILTER === item.id ? 'selected' : ''}" onclick="setAdvViewStyleFilter('${item.id}')">
        📐 ${item.label}
      </button>
    `).join('');
  }

  // 2. Render Axis 1: Style Guide List (Tone & Manner Focused)
  const styleListEl = document.getElementById('dh-adv-style-list');
  if (styleListEl) {
    const sortedStyles = [...ALL_STYLES].sort((a, b) => {
      const scoreDiff = computeStyleMatchScore(b) - computeStyleMatchScore(a);
      return scoreDiff !== 0 ? scoreDiff : (a.order - b.order);
    });

    styleListEl.innerHTML = sortedStyles.map(st => {
      const isActive = st.id === CURRENT_STYLE.id;
      const score = computeStyleMatchScore(st);
      const num = String(st.order).padStart(2, '0');
      const c = st.colors || {};
      const adjs = (st.identity?.adjectives || []).slice(0, 3);
      return `
        <div class="dh-adv-select-card ${isActive ? 'active-style' : ''}" onclick="applyDesignStyle('${st.id}')">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; margin-bottom:5px;">
            <strong style="font-size:0.86rem; color:#FFFFFF;">${num}. ${st.name_ko}</strong>
            <div style="display:flex; align-items:center; gap:5px;">
              ${score > 0 ? `<span class="dh-match-score">+${score}점</span>` : ''}
              <div class="dh-swatch-group">
                ${[c.primary, c.secondary, c.accent, c.background, c.text_main].filter(Boolean).map(hex => `<span class="dh-mini-swatch" style="background:${hex};"></span>`).join('')}
              </div>
            </div>
          </div>
          <div style="font-size:0.74rem; color:#CBD5E1; line-height:1.4; margin-bottom:6px;">
            ${st.tagline || ''}
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
            <div style="display:flex; gap:4px; flex-wrap:wrap;">
              ${adjs.map(a => `<span class="dh-tile-tag">#${a}</span>`).join('')}
            </div>
            <div style="display:flex; gap:4px;">
              ${st.order > 0 ? `<button class="dh-ctrl-btn" style="padding:2px 7px; font-size:0.68rem;" onclick="event.stopPropagation(); openDhStudioModal('styles'); setTimeout(()=>editStyleInForm('${st.id}'), 120);">편집</button>` : ''}
              <span style="font-size:0.7rem; font-weight:800; color:${isActive ? '#34D399' : '#818CF8'};">${isActive ? '✓ 선택됨' : '선택'}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 3. Render Axis 2: Layout Design List (Menu Placement & View Style Focused)
  const layoutListEl = document.getElementById('dh-adv-layout-list');
  if (layoutListEl) {
    const filteredLayouts = ALL_LAYOUTS.filter(ly => {
      const tax = getLayoutTaxonomy(ly);
      const matchMp = ADV_MENU_PLACEMENT_FILTER === 'all' || tax.menuType === ADV_MENU_PLACEMENT_FILTER;
      const matchVs = ADV_VIEW_STYLE_FILTER === 'all' || tax.viewType === ADV_VIEW_STYLE_FILTER;
      return matchMp && matchVs;
    });

    if (filteredLayouts.length === 0) {
      layoutListEl.innerHTML = `
        <div style="padding:20px; text-align:center; color:#94A3B8; font-size:0.8rem;">
          해당 [메뉴 배치 × 뷰 스타일] 조건의 레이아웃이 없습니다.<br/>
          <button class="dh-ctrl-btn" style="margin-top:8px;" onclick="setAdvMenuPlacementFilter('all'); setAdvViewStyleFilter('all');">전체 레이아웃 보기</button>
        </div>
      `;
    } else {
      layoutListEl.innerHTML = filteredLayouts.map(ly => {
        const isActive = ly.id === CURRENT_LAYOUT.id;
        const num = String(ly.order).padStart(2, '0');
        const tax = getLayoutTaxonomy(ly);
        const isRec = (ly.recommended_styles || []).includes(CURRENT_STYLE.id);
        return `
          <div class="dh-adv-select-card ${isActive ? 'active-layout' : ''}" onclick="applyWebsiteLayout('${ly.id}', false)">
            <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; margin-bottom:4px;">
              <strong style="font-size:0.85rem; color:#FFFFFF;">${num}. ${ly.domain_ko.split('(')[0].trim()}</strong>
              ${isRec ? `<span class="dh-match-score">스타일 궁합 추천</span>` : ''}
            </div>
            <div style="font-size:0.74rem; color:#6EE7B7; font-weight:700; margin-bottom:6px;">
              ${ly.name_ko} (${(ly.representative_companies || [])[0] || ''})
            </div>
            <div style="display:flex; flex-direction:column; gap:4px; margin-bottom:8px;">
              <span class="dh-tile-tag menu-tag" style="display:inline-block;">🧭 메뉴배치: ${tax.menuKo}</span>
              <span class="dh-tile-tag view-tag" style="display:inline-block;">📐 뷰스타일: ${tax.viewKo}</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:0.68rem; color:#94A3B8;">Grid: ${ly.body_spec?.grid_template || 'Responsive'}</span>
              <div style="display:flex; gap:4px;">
                ${ly.order > 0 ? `<button class="dh-ctrl-btn" style="padding:2px 7px; font-size:0.68rem;" onclick="event.stopPropagation(); editLayoutById('${ly.id}');">편집</button>` : ''}
                <span style="font-size:0.7rem; font-weight:800; color:${isActive ? '#34D399' : '#6EE7B7'};">${isActive ? '✓ 선택됨' : '선택'}</span>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 4. Render Right Column: Live Combined Website Style Preview & Recommended Combination Matrix
  const comboBox = document.getElementById('dh-adv-live-combo-box');
  if (comboBox) {
    const ci = getCompanyCI();
    const s = CURRENT_STYLE;
    const l = CURRENT_LAYOUT;
    const tax = getLayoutTaxonomy(l);
    const recStyleIds = l.recommended_styles || ['style-00-twayworks-original', 'style-04-modern-trust-corporate'];
    const recCombos = recStyleIds.map(sid => ALL_STYLES.find(st => st.id === sid)).filter(Boolean);

    comboBox.innerHTML = `
      <!-- Active Combination Summary Banner -->
      <div style="background:linear-gradient(135deg, rgba(79,70,229,0.22) 0%, rgba(16,185,129,0.22) 100%); border:1px solid rgba(129,140,248,0.4); border-radius:14px; padding:16px; margin-bottom:16px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px; margin-bottom:10px;">
          <div>
            <span style="font-size:0.68rem; font-weight:800; color:#FCD34D; display:block;">ACTIVE STYLE × LAYOUT COMBINATION</span>
            <h3 style="font-size:1.1rem; font-weight:800; color:#FFFFFF; margin:2px 0;">
              🎨 [${s.name_ko}] × 📐 [${l.name_ko}]
            </h3>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button class="dh-ctrl-btn dh-btn-download" onclick="downloadCurrentStylePackage()">📦 이 조합 .ZIP 다운로드</button>
            <button class="dh-ctrl-btn" style="background:#4F46E5; color:#fff;" onclick="switchAppStage('preview')">🔍 상세 가이드 &amp; 프리뷰</button>
            <button class="dh-ctrl-btn" style="background:#059669; color:#fff;" onclick="switchAppStage('sample')">🚀 전체 샘플 홈페이지 적용 →</button>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; font-size:0.75rem;">
          <div style="background:rgba(15,23,42,0.8); padding:8px 10px; border-radius:8px; border:1px solid rgba(255,255,255,0.08);">
            <strong style="color:#A5B4FC; display:block;">🎨 톤앤매너 (Tone &amp; Manner)</strong>
            <span style="color:#E2E8F0;">${(s.identity?.adjectives || []).slice(0, 3).map(a => '#' + a).join(' ')}</span>
          </div>
          <div style="background:rgba(15,23,42,0.8); padding:8px 10px; border-radius:8px; border:1px solid rgba(255,255,255,0.08);">
            <strong style="color:#6EE7B7; display:block;">🧭 메뉴 배치 (Menu Placement)</strong>
            <span style="color:#E2E8F0;">${tax.menuKo}</span>
          </div>
          <div style="background:rgba(15,23,42,0.8); padding:8px 10px; border-radius:8px; border:1px solid rgba(255,255,255,0.08);">
            <strong style="color:#FCD34D; display:block;">📐 바디 뷰 스타일 (View Style)</strong>
            <span style="color:#E2E8F0;">${tax.viewKo}</span>
          </div>
        </div>

        <!-- Quick Recommended Combinations Strip -->
        <div style="margin-top:10px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
          <span style="font-size:0.72rem; color:#A7F3D0; font-weight:700;">💡 현재 레이아웃과 가장 잘 어울리는 추천 스타일 조합:</span>
          ${recCombos.map(rc => `
            <button class="dh-ctrl-btn" style="padding:3px 9px; font-size:0.72rem; ${rc.id === s.id ? 'background:#4F46E5; color:#fff;' : ''}" onclick="applyDesignStyle('${rc.id}')">
              🎨 ${rc.name_ko} × ${l.domain_ko.split('(')[0].trim()}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Embedded 4 Representative Standard Pages Preview inside Advanced Studio -->
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <strong style="font-size:0.86rem; color:#E2E8F0;">👁️ 조합된 웹사이트 표준 대표 페이지 프리뷰 (한눈에 보기)</strong>
          <span style="font-size:0.74rem; color:#94A3B8;">좌측에서 스타일이나 레이아웃을 클릭하면 즉시 변환됩니다</span>
        </div>
        ${buildRepresentativeStandardPagesHtml(s, l, ci, 'overview')}
      </div>
    `;
  }
}

// =====================================================================
// v5.0 INFORMATION ARCHITECTURE (IA) & GNB · LNB · SNB · FNB ENGINE
// - 3-Depth Menu Tree (GNB ➔ LNB ➔ SNB) 1-Click Navigation
// - 12 Objectified Information Components (IC-01 ~ IC-12) grouped in 5 Tiers
// - Menu Tree-Driven Layout Slot Reflow Simulator & Characteristic Views (FV-00 ~ FV-10)
// =====================================================================

const V5_MENU_TREE_FALLBACK = [
  {
    gnb_id: 'gnb-gallery',
    stage: 'landing',
    order: 1,
    icon: '🎯',
    title_ko: '1. 대표 템플릿 갤러리',
    purpose_summary: '최우선 목적으로 대표 디자인 스타일 10선과 레이아웃 10선을 1-Click 비교·선택합니다.',
    lnb_items: [
      { lnb_id: 'lnb-gallery-styles', code: '1-1', title_ko: '대표 디자인 스타일 10선 (톤앤매너)', tooltip: '컬러·폰트·어조 중심 대표 스타일 타일 10선', active_components: ['IC-01', 'IC-05', 'IC-06'] },
      { lnb_id: 'lnb-gallery-layouts', code: '1-2', title_ko: '대표 레이아웃 10선 (메뉴·뷰)', tooltip: 'GNB/LNB/SNB 배치와 뷰 스타일 중심 대표 레이아웃 10선', active_components: ['IC-01', 'IC-02', 'IC-03', 'IC-12'] },
      { lnb_id: 'lnb-gallery-guide', code: '1-3', title_ko: '웹디자인 기본 설계 가이드 & 활용법', tooltip: '지원도구 목적·4단계 설계 원칙·3대 활용법 (1페이지 요약)', active_components: ['IC-01', 'IC-02', 'IC-03', 'IC-04'] }
    ]
  },
  {
    gnb_id: 'gnb-ia',
    stage: 'ia',
    order: 2,
    icon: '🗺️',
    title_ko: '2. 정보설계(IA) & 재배치도',
    purpose_summary: '3-Depth 메뉴트리와 12대 정보 컴포넌트 객체가 레이아웃에 따라 어떻게 계층 재배치(Reflow)되는지 확인합니다.',
    lnb_items: [
      { lnb_id: 'lnb-ia-reflow', code: '2-1', title_ko: '레이아웃별 컴포넌트 계층 재배치 & 특화 뷰', tooltip: '메뉴트리 기반 슬롯 재배치(GNB/LNB/SNB/Body/FNB) 및 특징적 뷰(FV-00~10) 시뮬레이션', active_components: ['IC-01', 'IC-02', 'IC-03', 'IC-05', 'IC-07', 'IC-12'] },
      { lnb_id: 'lnb-ia-menutree', code: '2-2', title_ko: '3-Depth 메뉴트리 & 네비게이션 관계', tooltip: 'GNB·LNB·SNB·FNB 기능 계층도 및 화면 속성/상호 관계 정의', active_components: ['IC-01', 'IC-02', 'IC-03', 'IC-04'] },
      { lnb_id: 'lnb-ia-components', code: '2-3', title_ko: '정보 컴포넌트 레지스트리 (12대 객체)', tooltip: '5대 계층 그룹(GRP-01~05) 및 12개 표준 컴포넌트 객체(IC-01~12) 명세', active_components: ['IC-01', 'IC-02', 'IC-03', 'IC-04', 'IC-05', 'IC-06', 'IC-07', 'IC-08', 'IC-09', 'IC-10', 'IC-11', 'IC-12'] }
    ]
  },
  {
    gnb_id: 'gnb-preview',
    stage: 'preview',
    order: 3,
    icon: '🖥️',
    title_ko: '3. 스타일 & 표준·특화 프리뷰',
    purpose_summary: '전체 사이트 적용 전, 4대 표준 대표페이지와 레이아웃 고유 특징적 뷰(Feature View)를 가볍게 검토합니다.',
    lnb_items: [
      { lnb_id: 'lnb-preview-standard', code: '3-1', title_ko: '4대 표준 대표페이지 프리뷰 (2×2)', tooltip: '①홈·히어로 ②서비스 카탈로그 ③스토리 ④무료진단 폼 표준 구성 프리뷰', active_components: ['IC-05', 'IC-07', 'IC-09', 'IC-11'] },
      { lnb_id: 'lnb-preview-feature', code: '3-2', title_ko: '레이아웃별 특징적 뷰 (Feature View) 단독 프리뷰', tooltip: '선택된 레이아웃만의 고유 정보구조로 생성된 시그니처 뷰(FV-00~10) 체험', active_components: ['IC-01', 'IC-02', 'IC-03', 'IC-12'] },
      { lnb_id: 'lnb-preview-tokens', code: '3-3', title_ko: '스타일·레이아웃 상세 명세 & 토큰', tooltip: '8색 팔레트, 타이포그래피, GNB/Body 설계 규격 한눈에 보기', active_components: ['IC-05', 'IC-06'] }
    ]
  },
  {
    gnb_id: 'gnb-studio',
    stage: 'advanced',
    order: 4,
    icon: '🎛️',
    title_ko: '4. 고급 조합 & AI 스튜디오',
    purpose_summary: '스타일(톤앤매너) × 레이아웃(메뉴·뷰) 교차 조합 및 Gemini AI 신규 디자인·레이아웃 생성을 수행합니다.',
    lnb_items: [
      { lnb_id: 'lnb-studio-matrix', code: '4-1', title_ko: '스타일 × 레이아웃 교차 조합 매트릭스', tooltip: '톤앤매너와 메뉴배치·뷰스타일 조합을 실시간 비교', active_components: ['IC-01', 'IC-05', 'IC-07', 'IC-12'] },
      { lnb_id: 'lnb-studio-ai', code: '4-2', title_ko: 'Gemini AI 신규 스타일·레이아웃 생성기', tooltip: '자연어 프롬프트로 새로운 디자인 스타일 또는 레이아웃 생성', active_components: ['IC-05', 'IC-12'] },
      { lnb_id: 'lnb-studio-ci', code: '4-3', title_ko: '정체성(형용사·동사) 매칭 추천 & CI 적용', tooltip: '브랜드 형용사·동사 기반 최적 조합 추천', active_components: ['IC-01', 'IC-04', 'IC-05'] }
    ]
  },
  {
    gnb_id: 'gnb-live',
    stage: 'sample',
    order: 5,
    icon: '🚀',
    title_ko: '5. 전체 샘플 사이트 & 출고',
    purpose_summary: '최종 디자인이 반영된 전체 샘플 홈페이지를 자유롭게 네비게이션하고 템플릿(.ZIP)을 다운로드합니다.',
    lnb_items: [
      { lnb_id: 'lnb-live-site', code: '5-1', title_ko: '전체 샘플 홈페이지 라이브 네비게이션', tooltip: 'HOME ~ 05 무료진단 서브페이지 및 도메인 레이아웃 전체 탐색', active_components: ['IC-01', 'IC-02', 'IC-03', 'IC-04', 'IC-05', 'IC-06', 'IC-07', 'IC-08', 'IC-09', 'IC-10', 'IC-11', 'IC-12'] },
      { lnb_id: 'lnb-live-export', code: '5-2', title_ko: '스타터 패키지(.ZIP) 출고 & REST API 인스펙터', tooltip: '완성된 디자인 토큰 + 레이아웃 CSS + 샘플 코드 다운로드', active_components: ['IC-01', 'IC-04'] }
    ]
  }
];

const V5_COMPONENT_MAP_FALLBACK = {
  'IC-01': { id: 'IC-01', group: 'GRP-01', name: 'GNB 글로벌 헤더 객체', slot: 'SLOT-GNB', desc: '브랜드 CI 로고, Depth-1 대메뉴 탭, 전역 액션 버튼을 포함하는 최상위 내비게이션 객체' },
  'IC-02': { id: 'IC-02', group: 'GRP-01', name: 'LNB 로컬 내비게이션 객체', slot: 'SLOT-LNB', desc: '도메인 카테고리 탭, 빠른 예매 바, 스킬 태그 바, 챕터 앵커 등 Depth-2 보조 탐색 객체' },
  'IC-03': { id: 'IC-03', group: 'GRP-01', name: 'SNB 사이드 내비게이션 객체', slot: 'SLOT-SNB', desc: '좌측 계층형 폴더 트리, 다중 속성 체크박스 필터, 실시간 속보 타임라인 등 Depth-3 제어 객체' },
  'IC-04': { id: 'IC-04', group: 'GRP-01', name: 'FNB 푸터 사이트맵 객체', slot: 'SLOT-FNB', desc: '5열 사이트맵, 기업 법적 고지, 시스템 정상 가동 상태 배지를 담는 하단 전역 객체' },
  'IC-05': { id: 'IC-05', group: 'GRP-02', name: '히어로 비전 & 슬로건 객체', slot: 'SLOT-HERO', desc: '브랜드 톤앤매너 헤드라인, 대표 카피, 핵심 전환 CTA 버튼을 담는 첫인상 객체' },
  'IC-06': { id: 'IC-06', group: 'GRP-02', name: '핵심 성과 지표(KPI) 객체', slot: 'SLOT-HERO-SUB', desc: '12종 프로덕션 가동, 10초 개통, 무설치 100%, 실시간 가동률 지수를 증명하는 수치 객체' },
  'IC-07': { id: 'IC-07', group: 'GRP-03', name: '12종 프로덕션 카탈로그 객체', slot: 'SLOT-BODY-MAIN', desc: '레이아웃에 따라 스토어 그리드, TOP10 캐러셀, 박스오피스 차트, 노션 DB, 지도 스테이 카드로 재배치되는 핵심 목록 객체' },
  'IC-08': { id: 'IC-08', group: 'GRP-03', name: '4대 코어 기술 엔진 탭 객체', slot: 'SLOT-BODY-MAIN', desc: 'FOTOSTREAM, VDSTREAM, ShortURL, ProxyAuth 4대 기술 부품을 탐색하는 모듈 객체' },
  'IC-09': { id: 'IC-09', group: 'GRP-04', name: '6컷 카툰 & 4단계 배선 객체', slot: 'SLOT-BODY-SUB', desc: 'Vibe ➔ VAIYER ➔ Wisdom ➔ Snack App 4단계 작동 원리와 6컷 스토리보드 객체' },
  'IC-10': { id: 'IC-10', group: 'GRP-04', name: 'Wisdom DIKW 지식검증 객체', slot: 'SLOT-BODY-SUB', desc: 'DIKW 피라미드와 Dual-TOC 교차검증 아키텍처 명세 테이블 객체' },
  'IC-11': { id: 'IC-11', group: 'GRP-05', name: '3분 무료 진단 & 신청 폼 객체', slot: 'SLOT-CONVERSION', desc: '비즈니스 맞춤 신청 및 스마트 처치 무료 지원 신청을 처리하는 리드 전환 객체' },
  'IC-12': { id: 'IC-12', group: 'GRP-05', name: '레이아웃별 특징적 뷰(FV) 객체', slot: 'SLOT-FEATURE', desc: '선택된 레이아웃(00~10)의 도메인 특성에 맞춰 별도 생성되는 시그니처 인터랙티브 뷰(FV-00~10) 객체' }
};

const V5_LAYOUT_REFLOW_FALLBACK = {
  'layout-00-twayworks-standard': {
    gnb_spec: '상단 고정 표준 GNB (브랜드 CI + 6대 멀티뷰 탭)',
    lnb_spec: '섹션 내부 필 탭 (4대 코어 엔진 탭)',
    snb_spec: '없음 (12컬럼 와이드 컨테이너 전폭 활용)',
    fnb_spec: '하단 5열 기업 사이트맵 & 시스템 가동 배지 푸터',
    reflow_summary_ko: '메뉴트리의 6대 대메뉴가 상단 GNB에 1-Click 배치되며, 본문은 [IC-05 히어로 ➔ IC-09 카툰 ➔ IC-08 4대엔진 ➔ IC-10 Wisdom ➔ IC-07 12종카탈로그 ➔ IC-11 진단폼] 순서로 표준 계층 흐름을 따릅니다.',
    slot_mapping: { 'SLOT-GNB': ['IC-01'], 'SLOT-LNB': ['IC-02'], 'SLOT-SNB': [], 'SLOT-HERO': ['IC-05', 'IC-06', 'IC-12'], 'SLOT-BODY-MAIN': ['IC-09', 'IC-08', 'IC-10', 'IC-07'], 'SLOT-CONVERSION': ['IC-11'], 'SLOT-FNB': ['IC-04'] },
    characteristic_view: { id: 'FV-00', title_ko: '4단계 실전 Vibe-to-App 배선 파이프라인 쇼케이스 뷰', subtitle_ko: '더웨이웍스 표준 기업형 시그니처 뷰', ia_rationale: '방문자가 첫 화면(Hero)에서 말 한마디(Vibe)가 실제 앱이 되는 4단계 아키텍처를 즉시 이해하도록 히어로 우측에 배치한 특화 뷰입니다.', key_elements: ['Step 1. Vibe 입력', 'Step 2. VAIYER 지능형 배선', 'Step 3. Wisdom 교차검증', 'Step 4. 10초 스낵앱 개통'] }
  },
  'layout-01-ecommerce-grid': {
    gnb_spec: '상단 통합 키워드 검색바 + 장바구니/마이페이지 유틸 헤더',
    lnb_spec: '1차 도메인 카테고리 멀티탭 바 (전체 / 미디어 / 스트리밍 / 자동화 / 공동체)',
    snb_spec: '좌측 고정 다중 속성(Facet) 체크박스 필터 사이드바 (260px)',
    fnb_spec: '커머스 고객센터 & 입점/제휴 안내 푸터',
    reflow_summary_ko: '목적 우선 원칙에 따라 [IC-07 12종 카탈로그]를 최상단 4열 랭킹 상품 그리드로 승격 배치하고, 좌측 SNB 슬롯에 [IC-03 다중 속성 필터]와 [IC-08 코어엔진 필터]를 결합 배치합니다.',
    slot_mapping: { 'SLOT-GNB': ['IC-01'], 'SLOT-LNB': ['IC-02'], 'SLOT-SNB': ['IC-03', 'IC-08'], 'SLOT-HERO': ['IC-06'], 'SLOT-BODY-MAIN': ['IC-12', 'IC-07'], 'SLOT-CONVERSION': ['IC-11'], 'SLOT-FNB': ['IC-04'] },
    characteristic_view: { id: 'FV-01', title_ko: '실시간 다중 속성 필터(SNB) + 4열 랭킹 스토어 그리드 뷰', subtitle_ko: '무신사·29CM 스타일 이커머스 큐레이션 특화 뷰', ia_rationale: '원하는 기능의 스낵앱을 쇼핑하듯 좌측 다중 필터로 즉시 좁히고 RANK 01~12 배지와 좋아요(♥)·장바구니로 비교 선택하는 고밀도 탐색 구조입니다.', key_elements: ['좌측 다중 체크박스 필터(SNB)', '인기순/빠른개통순 정렬 바', 'RANK 1~12 상품형 카드', '즉시 장바구니/개통 담기'] }
  },
  'layout-02-ott-carousel': {
    gnb_spec: '상단 투명 그라데이션 오버레이 미니멀 GNB',
    lnb_spec: '다크 플로팅 장르 & 분위기 필터 칩 바',
    snb_spec: '없음 (100% 풀블리드 시네마틱 캔버스)',
    fnb_spec: '다크 시네마 미디어 라이선스 푸터',
    reflow_summary_ko: '[IC-05 히어로]가 화면 상단을 채우는 풀스크린 오리지널 빌보드로 확장되며, [IC-07 카탈로그]·[IC-08 엔진]·[IC-09 카툰]이 3개의 수평 스크롤 캐러셀 행(Row 1~3)으로 재배치됩니다.',
    slot_mapping: { 'SLOT-GNB': ['IC-01'], 'SLOT-LNB': ['IC-02'], 'SLOT-SNB': [], 'SLOT-HERO': ['IC-05', 'IC-12'], 'SLOT-BODY-MAIN': ['IC-07', 'IC-08', 'IC-09'], 'SLOT-CONVERSION': ['IC-11'], 'SLOT-FNB': ['IC-04'] },
    characteristic_view: { id: 'FV-02', title_ko: '풀스크린 오리지널 빌보드 + TOP 10 아웃라인 수평 캐러셀 뷰', subtitle_ko: '넷플릭스·디즈니+ 스타일 미디어 스트리밍 특화 뷰', ia_rationale: '시각적 몰입감을 극대화하기 위해 박스 테두리를 없애고 대형 영상 프리뷰 빌보드와 좌우 슬라이딩 포스터 행(Row)으로 정보를 탐색합니다.', key_elements: ['98% 일치 오리지널 빌보드', '▶ 즉시 재생 / + 내 리스트', '오늘 대한민국 TOP 10 대형 숫자 카드', '테마별 수평 캐러셀'] }
  },
  'layout-03-entertainment-booking': {
    gnb_spec: '상단 엔터테인먼트 GNB (박스오피스 / 빠른예매 / 특별관)',
    lnb_spec: '헤더 직결형 3-Step 빠른 예매/개통 고정 독바 (①업종 ➔ ②앱 ➔ ③즉시발권)',
    snb_spec: '우측 실시간 예매율 차트 모듈',
    fnb_spec: '클라우드 리전 안내 및 고객센터 푸터',
    reflow_summary_ko: '페이지 하단에 있던 전환 컴포넌트 [IC-11 신청/예매 폼]이 상단 LNB 위치의 [3-Step 빠른 예매 독바]로 최상단 승격 재배치되며, [IC-07 카탈로그]는 1~8위 박스오피스 포스터 차트로 변환됩니다.',
    slot_mapping: { 'SLOT-GNB': ['IC-01'], 'SLOT-LNB': ['IC-11', 'IC-12'], 'SLOT-SNB': ['IC-06'], 'SLOT-HERO': ['IC-05'], 'SLOT-BODY-MAIN': ['IC-07', 'IC-09'], 'SLOT-CONVERSION': ['IC-11'], 'SLOT-FNB': ['IC-04'] },
    characteristic_view: { id: 'FV-03', title_ko: '상단 밀착형 3-Step 빠른 예매 독바 + 박스오피스 랭킹 포스터 뷰', subtitle_ko: '메가박스·CGV·인터파크 스타일 티켓 예매 특화 뷰', ia_rationale: '예매·개통이 최우선 목적인 사용자를 위해 스크롤 없이 첫 화면 상단 바에서 3번의 클릭만으로 솔루션을 즉시 발권하도록 설계했습니다.', key_elements: ['Step1 업종 × Step2 앱 × Step3 즉시발권 바', '박스오피스 1~8위 포스터 그리드', '실시간 예매율(%) 배지', '1-Click 티켓 발권'] }
  },
  'layout-04-portal-3col-news': {
    gnb_spec: '중앙 대형 통합 검색창 마스트헤드 + 실시간 급상승 키워드 티커',
    lnb_spec: '언론/지식 섹션 구분 탭바 (전체브리핑 / AI엔지니어링 / 스낵앱실증 / 인사이트)',
    snb_spec: '좌측 실시간 속보 타임라인(230px) + 우측 시스템 가동률 지수 위젯(290px)',
    fnb_spec: '포털 약관·편집규약 표준 푸터',
    reflow_summary_ko: '화면을 3단 비대칭 신문 편집 그리드(좌 230px : 중 1fr : 우 290px)로 분할하여 좌측 SNB에 [IC-03 속보 피드], 중앙에 [IC-09 머리기사·IC-07 기사 목록], 우측에 [IC-06 실시간 지수 위젯]을 동시 배치합니다.',
    slot_mapping: { 'SLOT-GNB': ['IC-01'], 'SLOT-LNB': ['IC-02'], 'SLOT-SNB': ['IC-03', 'IC-06', 'IC-10'], 'SLOT-HERO': ['IC-12'], 'SLOT-BODY-MAIN': ['IC-09', 'IC-07', 'IC-08'], 'SLOT-CONVERSION': ['IC-11'], 'SLOT-FNB': ['IC-04'] },
    characteristic_view: { id: 'FV-04', title_ko: '3단 신문 편집 데스크 (좌측 속보 · 중앙 헤드라인 · 우측 실시간 지수) 뷰', subtitle_ko: '네이버 뉴스·블룸버그 스타일 미디어 포털 특화 뷰', ia_rationale: '방대한 기술 아티클과 12종 앱 소식, 실시간 서버/AI 엔진 지표를 한 화면에서 종합 브리핑받을 수 있는 고밀도 정보 구조입니다.', key_elements: ['통합 검색바 & 실시간 급상승 티커', '좌측 타임라인 속보 리스트', '중앙 톱 헤드라인 & 기사 피드', '우측 VAIYER/Wisdom 실시간 지수'] }
  },
  'layout-05-saas-workspace-split': {
    gnb_spec: '상단 슬림 워크스페이스 브레드크럼(Breadcrumb) & ⌘K 명령 팔레트 바',
    lnb_spec: '문서 내부 데이터베이스 뷰 전환 탭 (📋 테이블 뷰 / 🗂️ 칸반 보드 뷰 / 📄 문서 뷰)',
    snb_spec: '좌측 고정 계층형 워크스페이스 폴더 & 채널 트리 사이드바 (265px)',
    fnb_spec: '하단 슬림 워크스페이스 동기화 상태 바',
    reflow_summary_ko: '상단 GNB를 슬림 경로바로 최소화하고 내비게이션의 중심을 좌측 고정 [IC-03 SNB 계층형 폴더 트리]로 이동합니다. 우측 워크스페이스에서는 LNB 탭에 따라 [IC-07·08·10]이 테이블·칸반·문서로 전환됩니다.',
    slot_mapping: { 'SLOT-GNB': ['IC-01'], 'SLOT-LNB': ['IC-02'], 'SLOT-SNB': ['IC-03', 'IC-08'], 'SLOT-HERO': ['IC-05'], 'SLOT-BODY-MAIN': ['IC-12', 'IC-07', 'IC-10'], 'SLOT-CONVERSION': ['IC-11'], 'SLOT-FNB': ['IC-04'] },
    characteristic_view: { id: 'FV-05', title_ko: '좌측 폴더 트리(SNB) + 우측 멀티뷰 데이터베이스(테이블·칸반·문서) 워크스페이스 뷰', subtitle_ko: '노션(Notion)·슬랙·리니어 스타일 B2B SaaS 앱 쉘 특화 뷰', ia_rationale: '실제 업무용 클라우드 소프트웨어처럼 좌측 트리로 프로젝트를 탐색하고 우측에서 데이터를 표/보드/문서로 조작하는 UX입니다.', key_elements: ['좌측 고정 워크스페이스 트리 메뉴', '상단 브레드크럼 & ⌘K 빠른 검색', '테이블 / 칸반 보드 / 문서 1-Click 뷰 스위처', '실시간 상태 프로퍼티 배지'] }
  },
  'layout-06-travel-map-split': {
    gnb_spec: '상단 중앙 알약형(Pill) 3단 조건 검색 위젯 헤더 (어디로 / 일정 / 규모)',
    lnb_spec: '가로 스크롤 공간·테마 아이콘 카테고리 필터 바',
    snb_spec: '우측 고정 인터랙티브 가격 마커(₩) 지도 캔버스 (48% 폭 Sticky)',
    fnb_spec: '호스트 지원 & 글로벌 로컬 가이드 푸터',
    reflow_summary_ko: '[IC-01 GNB]에 알약형 조건 검색기가 통합되고, 본문이 좌우 50:50 스플릿 뷰로 분할되어 좌측에 [IC-07 스테이 카드 그리드], 우측 SNB 슬롯에 실시간 연동 [IC-12 가격 핀 지도]가 고정 배치됩니다.',
    slot_mapping: { 'SLOT-GNB': ['IC-01'], 'SLOT-LNB': ['IC-02'], 'SLOT-SNB': ['IC-12'], 'SLOT-HERO': ['IC-05'], 'SLOT-BODY-MAIN': ['IC-07'], 'SLOT-CONVERSION': ['IC-11'], 'SLOT-FNB': ['IC-04'] },
    characteristic_view: { id: 'FV-06', title_ko: '알약형 조건 검색 바 + 좌측 스테이 카드 × 우측 가격 핀(₩) 맵 50:50 스플릿 뷰', subtitle_ko: '에어비앤비·야놀자 스타일 공간·여행 플랫폼 특화 뷰', ia_rationale: '목록 탐색과 위치/비용 비교를 동시에 수행하도록 좌측 카드를 클릭하면 우측 지도의 가격 핀(₩)이 즉시 하이라이트됩니다.', key_elements: ['어디로·일정·규모 알약형 검색바', '테마 아이콘 LNB 필터', '좌측 슈퍼호스트 배지 스테이 카드', '우측 실시간 연동 가격 핀(₩) 지도'] }
  },
  'layout-07-edutech-curation-grid': {
    gnb_spec: '카테고리 드롭다운 GNB + 과정/스킬 키워드 검색창',
    lnb_spec: '난이도(입문/초급/실전) & 핵심 기술스택(#VAIYER #FOTOSTREAM) 태그 필터 바',
    snb_spec: '없음 (4열 와이드 강의 큐레이션 그리드)',
    fnb_spec: '수료증 검증·멘토링·학습 커뮤니티 푸터',
    reflow_summary_ko: '[IC-05 히어로]가 와이드 프로모션 배너 슬라이더로 변환되며, [IC-02 스킬 태그 LNB] 아래로 [IC-07 카탈로그]가 커리큘럼·난이도·수강평점(★5.0) 중심의 4열 클래스 그리드로 재배치됩니다.',
    slot_mapping: { 'SLOT-GNB': ['IC-01'], 'SLOT-LNB': ['IC-02', 'IC-08'], 'SLOT-HERO': ['IC-05', 'IC-12'], 'SLOT-SNB': [], 'SLOT-BODY-MAIN': ['IC-07', 'IC-09'], 'SLOT-CONVERSION': ['IC-11'], 'SLOT-FNB': ['IC-04'] },
    characteristic_view: { id: 'FV-07', title_ko: '프로모션 로드맵 배너 + 기술스택 태그 필터 & 수강평점(★5.0) 클래스 큐레이션 뷰', subtitle_ko: '인프런·클래스101 스타일 에듀테크 특화 뷰', ia_rationale: '도입 담당자가 자신의 수준(입문~실전)과 필요한 기술 스택 태그를 클릭해 단계별 마스터 클래스 형태로 솔루션을 탐색하도록 유도합니다.', key_elements: ['와이드 부트캠프 프로모션 배너', '난이도·기술스택 해시태그 필터', '★5.0 수강평점 & 커리큘럼 수 배지', '실습 즉시 시작 CTA'] }
  },
  'layout-08-recruiting-career-feed': {
    gnb_spec: '직군·직무 카테고리 GNB + AI 부서원 채용 검색 헤더',
    lnb_spec: '직무 태그 필터 바 (전체 / 미디어자동화 / 영상파이프라인 / 지식검증 / 고객응대)',
    snb_spec: '우측 고정 실시간 외주비·인건비 절감 시뮬레이터 위젯 (340px Sticky)',
    fnb_spec: '기업 채용 제휴 & AI 디지털 부서원 도입 보증 푸터',
    reflow_summary_ko: '[IC-07 12종 스낵앱]을 즉시 채용 가능한 AI 디지털 부서원 포지션 카드로 재정의하여 좌측 메인(1fr)에 배치하고, 우측 SNB 슬롯에는 [IC-12 실시간 비용 절감 계산기]를 고정 배치합니다.',
    slot_mapping: { 'SLOT-GNB': ['IC-01'], 'SLOT-LNB': ['IC-02'], 'SLOT-SNB': ['IC-12', 'IC-06'], 'SLOT-HERO': ['IC-05'], 'SLOT-BODY-MAIN': ['IC-07', 'IC-10'], 'SLOT-CONVERSION': ['IC-11'], 'SLOT-FNB': ['IC-04'] },
    characteristic_view: { id: 'FV-08', title_ko: 'AI 디지털 부서원 포지션 매칭 피드 + 우측 실시간 비용절감 계산기 스플릿 뷰', subtitle_ko: '원티드(Wanted)·리멤버 스타일 채용·HR 특화 뷰', ia_rationale: '1인 기업이 앱 구매가 아닌 유능한 AI 전담 직원 채용 관점으로 솔루션을 평가하고 우측 계산기로 연간 절감액을 즉시 시뮬레이션하도록 설계했습니다.', key_elements: ['직무별 태그 필터 LNB', 'AI 부서원 포지션 카드 (매칭률 99%)', '우측 인건비/외주비 절감 계산기', '1-Click 즉시 영입(개통)'] }
  },
  'layout-09-proptech-fullscreen-map': {
    gnb_spec: '지도 상단 반투명 글래스모피즘 플로팅 헤더',
    lnb_spec: '매물/솔루션 유형 탭 (전체단지 / 미디어센터 / 스트리밍타워 / 오피스자동화)',
    snb_spec: '좌측 플로팅 슬라이드 오버레이 매물 상세 브리핑 패널 (380px)',
    fnb_spec: '지도 하단 플로팅 축척·클러스터 범례 미니 바',
    reflow_summary_ko: '일반 페이지 스크롤을 제거하고 화면 100%를 [IC-12 풀스크린 인터랙티브 디지털 입지 지도]로 채웁니다. [IC-01·02 헤더]는 상단 플로팅 배치되며, [IC-07 카탈로그]는 좌측 오버레이 슬라이드 패널(SNB) 안에 배치됩니다.',
    slot_mapping: { 'SLOT-GNB': ['IC-01'], 'SLOT-LNB': ['IC-02'], 'SLOT-SNB': ['IC-03', 'IC-07'], 'SLOT-HERO': [], 'SLOT-BODY-MAIN': ['IC-12'], 'SLOT-CONVERSION': ['IC-11'], 'SLOT-FNB': ['IC-04'] },
    characteristic_view: { id: 'FV-09', title_ko: '100% 풀스크린 클러스터 핀 지도 + 좌측 오버레이 매물 브리핑 패널 뷰', subtitle_ko: '직방·다방·호갱노노 스타일 프롭테크·GIS 특화 뷰', ia_rationale: '공간·입지 기반 데이터를 탐색할 때 지도를 중심 캔버스로 두고 단지 클러스터 원형 핀을 클릭하면 좌측 오버레이 패널에서 상세 스펙을 브리핑합니다.', key_elements: ['100% 풀스크린 디지털 입지 맵', '상단 반투명 글래스 플로팅 GNB/LNB', '클러스터 원형 핀 (12개 단지)', '좌측 오버레이 상세 브리핑 드로어'] }
  },
  'layout-10-brand-onepage-story': {
    gnb_spec: '초미니멀 글래스 플로팅 헤더 (좌측 로고 + 우측 챕터 앵커)',
    lnb_spec: '우측 고정 패럴랙스 챕터 내비게이션 닷 (Chapter 01 비전 ➔ 02 원리 ➔ 03 임팩트 ➔ 04 초대)',
    snb_spec: '없음 (단일 컬럼 센터 포커스 타이포그래피 캔버스)',
    fnb_spec: '미니멀 브랜드 매니페스토 크레딧 푸터',
    reflow_summary_ko: '다중 컬럼과 사이드바를 제거하고 오직 메시지에만 집중하는 단일 컬럼 풀뷰포트(Full-Viewport) 서사 구조로 [Chapter 01: IC-05 슬로건 ➔ Chapter 02: IC-09 원리 ➔ Chapter 03: IC-06 대형 지표 ➔ Chapter 04: IC-11 초대]를 순차 배치합니다.',
    slot_mapping: { 'SLOT-GNB': ['IC-01'], 'SLOT-LNB': ['IC-02'], 'SLOT-SNB': [], 'SLOT-HERO': ['IC-05', 'IC-12'], 'SLOT-BODY-MAIN': ['IC-09', 'IC-06', 'IC-07'], 'SLOT-CONVERSION': ['IC-11'], 'SLOT-FNB': ['IC-04'] },
    characteristic_view: { id: 'FV-10', title_ko: '초대형 타이포그래피 매니페스토 + Chapter 01~04 원페이지 패럴랙스 스토리 뷰', subtitle_ko: '토스(Toss)·애플(Apple) 스타일 하이엔드 브랜드 랜딩 특화 뷰', ia_rationale: '군더더기 없는 여백(Whitespace)과 강렬한 한 줄 카피, 챕터별 스토리텔링으로 브랜드 철학과 제품 혁신성을 각인시킵니다.', key_elements: ['초미니멀 글래스 헤더 & 챕터 앵커', 'Chapter 01 초대형 그라데이션 헤드라인', 'Chapter 02~03 핵심 원리 & 대형 지표 카운터', 'Chapter 04 원클릭 시작 초대장'] }
  }
};

function getLayoutIaReflowSpec(layout) {
  if (!layout) return V5_LAYOUT_REFLOW_FALLBACK['layout-00-twayworks-standard'];
  if (layout.ia_reflow && layout.ia_reflow.slot_mapping) return layout.ia_reflow;
  if (V5_LAYOUT_REFLOW_FALLBACK[layout.id]) return V5_LAYOUT_REFLOW_FALLBACK[layout.id];
  return {
    gnb_spec: layout.head_spec?.structure_name || '상단 도메인 맞춤 GNB 헤더',
    lnb_spec: '도메인 카테고리 탭 및 빠른 필터 바',
    snb_spec: '좌/우측 컨텍스트 위젯 패널',
    fnb_spec: '하단 표준 사이트맵 푸터',
    reflow_summary_ko: `${layout.name_ko || '선택된 레이아웃'}의 메뉴트리 구조에 맞춰 상단 GNB/LNB에 탐색 메뉴를 배치하고 본문 슬롯에 카탈로그(IC-07)와 특화 뷰(IC-12)를 계층적으로 재배치합니다.`,
    slot_mapping: {
      'SLOT-GNB': ['IC-01'],
      'SLOT-LNB': ['IC-02'],
      'SLOT-SNB': ['IC-03'],
      'SLOT-HERO': ['IC-05', 'IC-06'],
      'SLOT-BODY-MAIN': ['IC-12', 'IC-07', 'IC-08'],
      'SLOT-CONVERSION': ['IC-11'],
      'SLOT-FNB': ['IC-04']
    },
    characteristic_view: layout.characteristic_view || {
      id: `FV-${String(layout.order || 99).padStart(2, '0')}`,
      title_ko: `${layout.domain_ko || '맞춤 도메인'} 전용 특화 인터랙티브 뷰`,
      subtitle_ko: layout.name_ko || 'Custom Feature View',
      ia_rationale: layout.sample_application_note || '도메인 특성에 최적화된 맞춤형 정보구조 뷰입니다.',
      key_elements: layout.body_spec?.elements || ['맞춤 헤더', '핵심 카탈로그 그리드', '전환 위젯']
    }
  };
}

// 1-Click GNB Menu Selection (Depth 1)
function selectGnbMenu(gnbId) {
  const gnbToStageMap = {
    'gnb-gallery': 'landing',
    'gnb-ia': 'ia',
    'gnb-preview': 'preview',
    'gnb-studio': 'advanced',
    'gnb-live': 'sample'
  };
  const targetStage = gnbToStageMap[gnbId] || 'landing';
  CURRENT_GNB_ID = gnbId;

  const menuNode = V5_MENU_TREE_FALLBACK.find(m => m.gnb_id === gnbId) || V5_MENU_TREE_FALLBACK[0];
  if (menuNode && menuNode.lnb_items?.length > 0) {
    // Keep current LNB if it already belongs to this GNB, otherwise pick the first LNB item
    const belongs = menuNode.lnb_items.some(item => item.lnb_id === CURRENT_LNB_ID);
    if (!belongs) {
      CURRENT_LNB_ID = menuNode.lnb_items[0].lnb_id;
    }
  }

  switchAppStage(targetStage, true);
}

// 1-Click LNB Sub-tab Selection (Depth 2)
function selectLnbTab(lnbId) {
  CURRENT_LNB_ID = lnbId;
  document.body.dataset.lnb = lnbId;

  if (lnbId === 'lnb-gallery-styles') {
    if (CURRENT_APP_STAGE !== 'landing') switchAppStage('landing', false);
    setLandingTileMode('styles10');
  } else if (lnbId === 'lnb-gallery-layouts') {
    if (CURRENT_APP_STAGE !== 'landing') switchAppStage('landing', false);
    setLandingTileMode('layouts10');
  } else if (lnbId === 'lnb-gallery-guide') {
    if (CURRENT_APP_STAGE !== 'landing') switchAppStage('landing', false);
    setLandingTileMode('guide');
  } else if (lnbId.startsWith('lnb-ia-')) {
    if (CURRENT_APP_STAGE !== 'ia') switchAppStage('ia', false);
    setIaSubTab(lnbId);
  } else if (lnbId === 'lnb-preview-standard') {
    if (CURRENT_APP_STAGE !== 'preview') switchAppStage('preview', false);
    setStandardPreviewTab('overview');
  } else if (lnbId === 'lnb-preview-feature') {
    if (CURRENT_APP_STAGE !== 'preview') switchAppStage('preview', false);
    setStandardPreviewTab('feature');
  } else if (lnbId === 'lnb-preview-tokens') {
    if (CURRENT_APP_STAGE !== 'preview') switchAppStage('preview', false);
    setStandardPreviewTab('tokens');
  } else if (lnbId === 'lnb-studio-matrix') {
    if (CURRENT_APP_STAGE !== 'advanced') switchAppStage('advanced', false);
  } else if (lnbId === 'lnb-studio-ai') {
    if (CURRENT_APP_STAGE !== 'advanced') switchAppStage('advanced', false);
    openDhStudioModal('styles');
  } else if (lnbId === 'lnb-studio-ci') {
    if (CURRENT_APP_STAGE !== 'advanced') switchAppStage('advanced', false);
  } else if (lnbId === 'lnb-live-site') {
    if (CURRENT_APP_STAGE !== 'sample') switchAppStage('sample', false);
  } else if (lnbId === 'lnb-live-export') {
    openDhApiModal();
  }

  renderV5LnbAndFnbBar();
}

function toggleStudioSnb() {
  const shellEl = document.getElementById('dh-v5-workspace-shell');
  if (!shellEl) return;
  shellEl.dataset.userToggled = 'true';
  shellEl.classList.toggle('snb-collapsed');
}

function toggleTopDesignGuideDrawer() {
  const drawer = document.getElementById('dh-v5-guide-drawer');
  const btn = document.getElementById('dh-v5-guide-drawer-btn');
  if (!drawer) return;
  drawer.hidden = !drawer.hidden;
  if (btn) {
    btn.textContent = drawer.hidden ? '▾ 웹설계 가이드 요약' : '▴ 웹설계 가이드 닫기';
  }
}

function renderV5NavigationAndIaViews() {
  renderV5LnbAndFnbBar();
  renderV5SnbController();
  renderIaStageCanvas();
}

function renderV5LnbAndFnbBar() {
  const gnbNode = V5_MENU_TREE_FALLBACK.find(m => m.gnb_id === CURRENT_GNB_ID) || V5_MENU_TREE_FALLBACK[0];
  const lnbTabsEl = document.getElementById('dh-v5-lnb-tabs');
  if (lnbTabsEl && gnbNode) {
    lnbTabsEl.innerHTML = gnbNode.lnb_items.map(item => {
      const isActive = item.lnb_id === CURRENT_LNB_ID;
      return `
        <button class="dh-v5-lnb-tab-btn ${isActive ? 'active' : ''}" onclick="selectLnbTab('${item.lnb_id}')" data-tooltip="${item.tooltip}">
          <span class="lnb-code">${item.code}</span>
          <span>${item.title_ko}</span>
        </button>
      `;
    }).join('');
  }

  const activeLnbItem = (gnbNode.lnb_items || []).find(i => i.lnb_id === CURRENT_LNB_ID) || gnbNode.lnb_items[0];

  // Update LNB Popover
  const popTitle = document.getElementById('dh-v5-popover-title');
  const popDesc = document.getElementById('dh-v5-popover-desc');
  const popComps = document.getElementById('dh-v5-popover-comps');
  if (popTitle && activeLnbItem) {
    popTitle.textContent = `${gnbNode.title_ko} ▸ ${activeLnbItem.title_ko}`;
  }
  if (popDesc && activeLnbItem) {
    popDesc.textContent = activeLnbItem.tooltip || gnbNode.purpose_summary;
  }
  if (popComps && activeLnbItem) {
    popComps.innerHTML = (activeLnbItem.active_components || []).map(cid => {
      const cInfo = V5_COMPONENT_MAP_FALLBACK[cid];
      return `<span class="ic-badge-chip" style="font-size:0.65rem; padding:2px 6px;"><span class="ic-code">${cid}</span> ${cInfo ? cInfo.name.replace(' 객체', '') : ''}</span>`;
    }).join('');
  }

  // Update FNB Breadcrumb & Next Step Button
  const fnbBread = document.getElementById('dh-v5-fnb-breadcrumb');
  if (fnbBread && activeLnbItem) {
    const sNum = String(CURRENT_STYLE.order).padStart(2, '0');
    const lNum = String(CURRENT_LAYOUT.order).padStart(2, '0');
    fnbBread.innerHTML = `${gnbNode.title_ko} ▸ <strong style="color:#A5B4FC;">${activeLnbItem.code} ${activeLnbItem.title_ko}</strong> <span style="color:#64748B;">(적용: ${sNum}.${CURRENT_STYLE.name_ko} × ${lNum}.${CURRENT_LAYOUT.name_ko})</span>`;
  }

  const nextBtn = document.getElementById('dh-v5-fnb-next-btn');
  if (nextBtn) {
    const nextMap = {
      'gnb-gallery': { nextGnb: 'gnb-ia', label: '다음 단계: 2. 정보설계(IA) & 레이아웃 재배치도 →' },
      'gnb-ia': { nextGnb: 'gnb-preview', label: '다음 단계: 3. 스타일 & 표준·특화 프리뷰 검토 →' },
      'gnb-preview': { nextGnb: 'gnb-studio', label: '다음 단계: 4. 고급 조합 스튜디오 (또는 5. 샘플사이트) →' },
      'gnb-studio': { nextGnb: 'gnb-live', label: '다음 단계: 5. 전체 샘플 사이트 네비게이션 확정 →' },
      'gnb-live': { nextGnb: 'export', label: '📦 최종 확정 템플릿 패키지(.ZIP) 다운로드' }
    };
    const nextCfg = nextMap[CURRENT_GNB_ID] || nextMap['gnb-gallery'];
    nextBtn.textContent = nextCfg.label;
    nextBtn.onclick = () => {
      if (nextCfg.nextGnb === 'export') downloadCurrentStylePackage();
      else selectGnbMenu(nextCfg.nextGnb);
    };
  }
}

function renderV5SnbController() {
  // 1. Style Quick Chips in SNB
  const styleChipsEl = document.getElementById('dh-snb-style-chips');
  if (styleChipsEl) {
    styleChipsEl.innerHTML = ALL_STYLES.map(st => {
      const isAct = st.id === CURRENT_STYLE.id;
      const num = String(st.order).padStart(2, '0');
      const c = st.colors || {};
      return `
        <button class="snb-quick-chip ${isAct ? 'active' : ''}" onclick="applyDesignStyle('${st.id}')" title="${st.name_ko} — ${st.tagline}">
          <span style="width:9px; height:9px; border-radius:50%; background:${c.primary || '#4F46E5'}; flex-shrink:0;"></span>
          <span style="overflow:hidden; text-overflow:ellipsis;">${num}. ${st.name_ko}</span>
        </button>
      `;
    }).join('');
  }

  // 2. Layout Quick Chips in SNB
  const layoutChipsEl = document.getElementById('dh-snb-layout-chips');
  if (layoutChipsEl) {
    layoutChipsEl.innerHTML = ALL_LAYOUTS.map(ly => {
      const isAct = ly.id === CURRENT_LAYOUT.id;
      const num = String(ly.order).padStart(2, '0');
      const shortName = ly.order === 0 ? '표준 기업형' : ly.domain_ko.split('(')[0].trim();
      return `
        <button class="snb-quick-chip ${isAct ? 'active-layout' : ''}" onclick="applyWebsiteLayout('${ly.id}', false)" title="${ly.name_ko} — ${ly.layout_structure}">
          <span style="color:#6EE7B7; font-weight:800;">${num}</span>
          <span style="overflow:hidden; text-overflow:ellipsis;">${shortName}</span>
        </button>
      `;
    }).join('');
  }

  // 3. Active Layout IA Mini Summary in SNB
  const iaMiniBox = document.getElementById('dh-snb-ia-mini-box');
  if (iaMiniBox) {
    const reflow = getLayoutIaReflowSpec(CURRENT_LAYOUT);
    const fv = reflow.characteristic_view || {};
    iaMiniBox.innerHTML = `
      <div><strong style="color:#A5B4FC;">· GNB:</strong> ${reflow.gnb_spec.split('(')[0].trim()}</div>
      <div><strong style="color:#38BDF8;">· LNB:</strong> ${reflow.lnb_spec.split('(')[0].trim()}</div>
      <div><strong style="color:#6EE7B7;">· SNB:</strong> ${reflow.snb_spec.split('(')[0].trim()}</div>
      <div style="background:rgba(236,72,153,0.14); border:1px solid rgba(244,114,182,0.35); border-radius:7px; padding:6px 8px; margin-top:2px;">
        <span style="font-size:0.65rem; font-weight:800; color:#F472B6; display:block;">✨ 생성된 특징적 뷰 (${fv.id || 'FV'})</span>
        <strong style="color:#FFFFFF; font-size:0.73rem;">${fv.title_ko || ''}</strong>
      </div>
    `;
  }
}

// ---------------------------------------------------------------------
// GNB 2 (#dh-stage-ia): IA MENU TREE, COMPONENT REGISTRY & LAYOUT REFLOW SIMULATOR
// ---------------------------------------------------------------------
function setIaSubTab(subTabId) {
  CURRENT_IA_SUBTAB = subTabId;
  CURRENT_LNB_ID = subTabId;

  const mapBtn = {
    'lnb-ia-reflow': 'ia-tab-reflow',
    'lnb-ia-menutree': 'ia-tab-menutree',
    'lnb-ia-components': 'ia-tab-components'
  };
  Object.entries(mapBtn).forEach(([k, btnId]) => {
    const el = document.getElementById(btnId);
    if (el) el.classList.toggle('active', k === subTabId);
  });

  renderIaStageCanvas();
  renderV5LnbAndFnbBar();
}

function setIcGroupFilter(grpId) {
  CURRENT_IC_GROUP_FILTER = grpId;
  renderIaStageCanvas();
}

function renderIaStageCanvas() {
  const canvasEl = document.getElementById('dh-ia-stage-canvas');
  if (!canvasEl) return;

  if (CURRENT_IA_SUBTAB === 'lnb-ia-menutree') {
    canvasEl.innerHTML = buildIaMenuTreeAndRelationshipsHtml();
  } else if (CURRENT_IA_SUBTAB === 'lnb-ia-components') {
    canvasEl.innerHTML = buildIaComponentRegistryHtml();
  } else {
    canvasEl.innerHTML = buildIaLayoutReflowAndFeatureViewHtml();
  }
}

function buildIaLayoutReflowAndFeatureViewHtml() {
  const l = CURRENT_LAYOUT;
  const s = CURRENT_STYLE;
  const ci = getCompanyCI();
  const reflow = getLayoutIaReflowSpec(l);
  const slots = reflow.slot_mapping || {};
  const fv = reflow.characteristic_view || {};
  const hasSnb = Array.isArray(slots['SLOT-SNB']) && slots['SLOT-SNB'].length > 0;

  const renderCompChip = (cid) => {
    const comp = V5_COMPONENT_MAP_FALLBACK[cid] || { id: cid, name: cid, desc: '' };
    const isFeature = cid === 'IC-12';
    return `
      <span class="ic-badge-chip ${isFeature ? 'feature-ic' : ''}" data-tooltip="[${comp.group || 'IA'}] ${comp.name}: ${comp.desc}">
        <span class="ic-code">${cid}</span>
        <span>${comp.name.replace(' 객체', '')}</span>
      </span>
    `;
  };

  return `
    <!-- 1-Click Layout Switcher Strip for Instant Reflow Comparison -->
    <div style="background:#131C31; border:1px solid rgba(148,163,184,0.22); border-radius:14px; padding:12px 16px; margin-bottom:18px; display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
        <span class="dh-v5-pill-badge accent">1-CLICK LAYOUT REFLOW SWITCHER</span>
        <span style="font-size:0.78rem; color:#CBD5E1;">레이아웃을 클릭하면 메뉴트리 기반 슬롯 배치와 특화 뷰(FV)가 즉시 재배치됩니다:</span>
      </div>
      <div style="display:flex; gap:5px; flex-wrap:wrap;">
        ${ALL_LAYOUTS.map(ly => {
          const isAct = ly.id === l.id;
          const num = String(ly.order).padStart(2, '0');
          const shortName = ly.order === 0 ? '표준기업' : ly.domain_ko.split('(')[0].trim().slice(0, 6);
          return `
            <button class="dh-ctrl-btn" style="padding:4px 9px; font-size:0.73rem; ${isAct ? 'background:#059669; border-color:#34D399; color:#fff;' : ''}" onclick="applyWebsiteLayout('${ly.id}', false)">
              ${num}.${shortName}
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Main 2-Column Reflow Blueprint + Characteristic Feature View -->
    <div class="dh-v5-ia-reflow-grid">
      <!-- Left Panel: Hierarchical Slot Reflow Blueprint -->
      <div class="dh-v5-ia-panel">
        <div class="ia-panel-head">
          <div>
            <span style="font-size:0.68rem; font-weight:800; color:#A5B4FC; display:block;">HIERARCHICAL COMPONENT REFLOW MAP</span>
            <h3>📐 [${String(l.order).padStart(2, '0')}. ${l.name_ko}] 슬롯별 컴포넌트 재배치 구조도</h3>
          </div>
          <span class="dh-v5-info-icon" data-tooltip="각 컴포넌트 칩(IC-01~12)에 마우스를 올리면 객체 속성과 재배치 역할을 툴팁으로 확인할 수 있습니다.">ⓘ</span>
        </div>

        <!-- Reflow Rule Explanation Box -->
        <div style="background:rgba(79,70,229,0.12); border-left:4px solid #6366F1; border-radius:8px; padding:10px 14px; font-size:0.79rem; color:#E2E8F0; line-height:1.55;">
          <strong style="color:#A5B4FC; display:block; margin-bottom:3px;">🧭 메뉴트리 ➔ 레이아웃 계층 재배치(Reflow) 핵심 규칙:</strong>
          ${reflow.reflow_summary_ko}
        </div>

        <!-- Spatial Wireframe of Slots (GNB -> LNB -> SNB + HERO/BODY -> CONVERSION -> FNB) -->
        <div class="dh-v5-slot-blueprint">
          <!-- SLOT-GNB -->
          <div class="slot-zone-box">
            <div class="slot-zone-head">
              <span class="slot-zone-label">① SLOT-GNB (Depth 1 글로벌 내비게이션 슬롯)</span>
              <span class="slot-zone-spec">${reflow.gnb_spec}</span>
            </div>
            <div class="slot-comp-chips">
              ${(slots['SLOT-GNB'] || ['IC-01']).map(renderCompChip).join('')}
            </div>
          </div>

          <!-- SLOT-LNB -->
          <div class="slot-zone-box">
            <div class="slot-zone-head">
              <span class="slot-zone-label" style="color:#38BDF8;">② SLOT-LNB (Depth 2 로컬 탭 · 빠른 액션 슬롯)</span>
              <span class="slot-zone-spec">${reflow.lnb_spec}</span>
            </div>
            <div class="slot-comp-chips">
              ${(slots['SLOT-LNB'] || ['IC-02']).map(renderCompChip).join('')}
            </div>
          </div>

          <!-- Middle Split: SLOT-SNB + (SLOT-HERO & SLOT-BODY-MAIN) -->
          <div class="slot-middle-split ${hasSnb ? '' : 'no-snb'}">
            ${hasSnb ? `
              <div class="slot-zone-box" style="border-color:rgba(52,211,153,0.45); background:rgba(16,185,129,0.08);">
                <div class="slot-zone-head" style="flex-direction:column; align-items:flex-start; gap:2px;">
                  <span class="slot-zone-label" style="color:#6EE7B7;">③ SLOT-SNB (Depth 3 사이드 슬롯)</span>
                  <span class="slot-zone-spec">${reflow.snb_spec}</span>
                </div>
                <div class="slot-comp-chips" style="margin-top:6px;">
                  ${(slots['SLOT-SNB'] || []).map(renderCompChip).join('')}
                </div>
              </div>
            ` : ''}

            <div style="display:flex; flex-direction:column; gap:10px;">
              ${(slots['SLOT-HERO'] && slots['SLOT-HERO'].length > 0) ? `
                <div class="slot-zone-box">
                  <div class="slot-zone-head">
                    <span class="slot-zone-label" style="color:#FCD34D;">④ SLOT-HERO (핵심 가치 제안 &amp; 비전 슬롯)</span>
                    <span class="slot-zone-spec">첫 화면 주목도 최우선 영역</span>
                  </div>
                  <div class="slot-comp-chips">
                    ${slots['SLOT-HERO'].map(renderCompChip).join('')}
                  </div>
                </div>
              ` : ''}

              <div class="slot-zone-box" style="border-color:rgba(129,140,248,0.45);">
                <div class="slot-zone-head">
                  <span class="slot-zone-label" style="color:#C7D2FE;">⑤ SLOT-BODY-MAIN (핵심 카탈로그 · 스토리 · 특화뷰 슬롯)</span>
                  <span class="slot-zone-spec">${l.body_spec?.grid_template || 'Responsive Grid'}</span>
                </div>
                <div class="slot-comp-chips">
                  ${(slots['SLOT-BODY-MAIN'] || ['IC-07']).map(renderCompChip).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- SLOT-CONVERSION & SLOT-FNB -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            <div class="slot-zone-box">
              <div class="slot-zone-head">
                <span class="slot-zone-label" style="color:#F472B6;">⑥ SLOT-CONVERSION (고객 전환 슬롯)</span>
              </div>
              <div class="slot-comp-chips">
                ${(slots['SLOT-CONVERSION'] || ['IC-11']).map(renderCompChip).join('')}
              </div>
            </div>
            <div class="slot-zone-box">
              <div class="slot-zone-head">
                <span class="slot-zone-label" style="color:#94A3B8;">⑦ SLOT-FNB (푸터 사이트맵 슬롯)</span>
              </div>
              <div class="slot-comp-chips">
                ${(slots['SLOT-FNB'] || ['IC-04']).map(renderCompChip).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Expandable Detailed Component Reflow Comparison Table -->
        <details class="dh-v5-snb-details">
          <summary class="snb-details-summary">
            <span>▾ 표준 기업형(Layout 00) 대비 현재 레이아웃의 컴포넌트 이동 상세 비교표 펼치기</span>
            <span style="color:#A5B4FC; font-size:0.72rem;">클릭하여 열기</span>
          </summary>
          <div style="margin-top:10px; font-size:0.74rem; color:#CBD5E1; display:flex; flex-direction:column; gap:6px;">
            <div>· <strong>GNB 변화:</strong> 표준 6탭 고정 바 ➔ <span style="color:#6EE7B7;">${reflow.gnb_spec}</span></div>
            <div>· <strong>LNB 변화:</strong> 섹션 내부 앵커 ➔ <span style="color:#6EE7B7;">${reflow.lnb_spec}</span></div>
            <div>· <strong>SNB 변화:</strong> 사이드바 없음 ➔ <span style="color:#6EE7B7;">${reflow.snb_spec}</span></div>
            <div>· <strong>특화 뷰(IC-12) 생성:</strong> <span style="color:#F472B6; font-weight:700;">${fv.id} — ${fv.title_ko}</span></div>
          </div>
        </details>
      </div>

      <!-- Right Panel: Characteristic Feature View (FV-00 ~ FV-10) Live Interactive Preview -->
      <div class="dh-v5-ia-panel">
        <div class="ia-panel-head">
          <div>
            <span style="font-size:0.68rem; font-weight:800; color:#F472B6; display:block;">LAYOUT CHARACTERISTIC FEATURE VIEW (${fv.id || 'FV'})</span>
            <h3>✨ 레이아웃 특징에 따라 별도 생성된 특화 뷰 프리뷰</h3>
          </div>
          <div style="display:flex; gap:6px;">
            <button class="dh-ctrl-btn" style="padding:4px 9px; font-size:0.72rem;" onclick="selectGnbMenu('gnb-preview'); setStandardPreviewTab('feature');">크게 보기</button>
            <button class="dh-ctrl-btn" style="padding:4px 9px; font-size:0.72rem; background:#059669; color:#fff;" onclick="selectGnbMenu('gnb-live')">🚀 샘플사이트 전체 적용</button>
          </div>
        </div>

        ${buildCharacteristicFeatureViewHtml(l, s, ci)}
      </div>
    </div>
  `;
}

function buildCharacteristicFeatureViewHtml(layout, style, ci) {
  const reflow = getLayoutIaReflowSpec(layout);
  const fv = reflow.characteristic_view || {};
  const c = style.colors || {};
  const apps = getAppsList().slice(0, 4);
  const lid = layout.id || 'layout-00-twayworks-standard';

  let signatureVisualHtml = '';

  if (lid.includes('layout-01')) {
    // FV-01: E-commerce Multi-Filter + 4-Col Ranking Store
    signatureVisualHtml = `
      <div style="display:grid; grid-template-columns:135px 1fr; gap:10px;">
        <div style="background:${c.surface}; border:1px solid ${c.border}; border-radius:8px; padding:9px; font-size:0.7rem;">
          <strong style="color:${c.primary}; display:block; margin-bottom:6px;">[SNB 다중 필터]</strong>
          <div style="margin-bottom:4px;">☑ 1인 스냅컴퍼니</div>
          <div style="margin-bottom:4px;">☑ FOTOSTREAM</div>
          <div style="margin-bottom:4px;">☑ VDSTREAM</div>
          <div style="color:${c.secondary}; font-weight:700; margin-top:6px;">⚡ 12개 상품 매칭</div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:8px;">
          ${apps.slice(0, 4).map((app, i) => `
            <div style="background:${c.surface}; border:1px solid ${c.border}; border-radius:8px; padding:8px; font-size:0.72rem;">
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span style="background:${c.primary}; color:#fff; font-size:0.62rem; font-weight:800; padding:1px 6px; border-radius:4px;">RANK 0${i + 1}</span>
                <span style="color:#EF4444; font-weight:800;">♥ ${420 + i * 115}</span>
              </div>
              <strong style="display:block; color:${c.text_main}; margin-bottom:3px;">${app.title}</strong>
              <span style="font-size:0.66rem; color:${c.secondary}; font-weight:700;">즉시 개통 담기 🛒</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (lid.includes('layout-02')) {
    // FV-02: OTT Full Billboard + TOP 10 Row
    signatureVisualHtml = `
      <div style="background:#090D16; color:#FFFFFF; border-radius:10px; padding:14px; border:1px solid rgba(255,255,255,0.15);">
        <div style="background:linear-gradient(135deg, ${c.primary} 0%, #090D16 90%); border-radius:8px; padding:14px; margin-bottom:10px;">
          <span style="font-size:0.64rem; font-weight:800; color:#46D369;">99% 일치 · ORIGINAL SERIES · 4K</span>
          <h4 style="font-size:1.02rem; font-weight:800; margin:4px 0 6px;">${apps[0]?.title || '모바일 매거진 VOGUE:M'}</h4>
          <div style="display:flex; gap:6px;">
            <span style="background:#FFFFFF; color:#000; font-size:0.7rem; font-weight:800; padding:4px 10px; border-radius:4px;">▶ 즉시 재생(체험)</span>
            <span style="background:rgba(255,255,255,0.2); color:#fff; font-size:0.7rem; padding:4px 10px; border-radius:4px;">+ 내 리스트</span>
          </div>
        </div>
        <div style="font-size:0.72rem; font-weight:800; margin-bottom:6px;">🔥 오늘 대한민국의 TOP 10 스낵앱 캐러셀</div>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px;">
          ${apps.map((app, i) => `
            <div style="background:#161F30; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:8px; display:flex; align-items:center; gap:6px;">
              <span style="font-size:1.3rem; font-weight:900; color:${c.accent}; line-height:1;">${i + 1}</span>
              <span style="font-size:0.68rem; font-weight:700; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${app.title.split('—')[0]}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (lid.includes('layout-03')) {
    // FV-03: Quick 3-Step Booking Dock + Box Office Chart
    signatureVisualHtml = `
      <div style="display:flex; flex-direction:column; gap:10px;">
        <div style="background:#0F172A; color:#fff; border:2px solid ${c.accent}; border-radius:10px; padding:10px 12px; display:grid; grid-template-columns:1fr 1fr 1fr auto; gap:8px; align-items:center; font-size:0.7rem;">
          <div><span style="color:#A5B4FC; display:block; font-size:0.62rem;">STEP 1. 업종</span><strong>1인 스냅컴퍼니 관</strong></div>
          <div><span style="color:#A5B4FC; display:block; font-size:0.62rem;">STEP 2. 스낵앱</span><strong>VOGUE:M 매거진</strong></div>
          <div><span style="color:#A5B4FC; display:block; font-size:0.62rem;">STEP 3. 일정</span><strong>오늘 즉시 개통</strong></div>
          <span style="background:${c.primary}; color:#fff; padding:6px 10px; border-radius:6px; font-weight:800;">🎟️ 즉시 발권</span>
        </div>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px;">
          ${apps.map((app, i) => `
            <div style="background:${c.surface}; border:1px solid ${c.border}; border-radius:8px; padding:8px; font-size:0.7rem;">
              <span style="background:#0F172A; color:#fff; font-weight:900; font-size:0.64rem; padding:2px 6px; border-radius:4px;">NO.${i + 1} 예매율 ${38 - i * 6}%</span>
              <strong style="display:block; margin:6px 0 4px; color:${c.text_main};">${app.title.split('—')[0]}</strong>
              <span style="color:${c.primary}; font-weight:800; font-size:0.66rem;">빠른 예매 →</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (lid.includes('layout-04')) {
    // FV-04: 3-Column Portal News Desk
    signatureVisualHtml = `
      <div style="display:grid; grid-template-columns:0.85fr 1.35fr 0.9fr; gap:8px; font-size:0.71rem;">
        <div style="background:${c.surface}; border:1px solid ${c.border}; border-radius:8px; padding:9px;">
          <strong style="color:${c.primary}; display:block; margin-bottom:5px;">⚡ 실시간 속보(SNB)</strong>
          <div style="border-bottom:1px dashed ${c.border}; padding:4px 0;">[속보] VAIYER 10초 개통 돌파</div>
          <div style="border-bottom:1px dashed ${c.border}; padding:4px 0;">[특집] 1인 기업 스낵앱 열풍</div>
          <div style="padding:4px 0;">[검증] Dual-TOC 정확도 99.8%</div>
        </div>
        <div style="background:${c.surface}; border:2px solid ${c.primary}; border-radius:8px; padding:10px;">
          <span style="background:${c.primary}; color:#fff; font-size:0.6rem; font-weight:800; padding:1px 6px; border-radius:4px;">TOP HEADLINE</span>
          <h5 style="font-size:0.86rem; margin:5px 0; color:${c.text_main};">말 한마디(Vibe)로 12종 프로덕션 앱 즉시 배선 시대 개막</h5>
          <p style="font-size:0.7rem; color:${c.text_muted}; margin:0;">외주 개발 없이 대표의 노하우 문서를 즉시 앱으로 전환...</p>
        </div>
        <div style="background:${c.surface}; border:1px solid ${c.border}; border-radius:8px; padding:9px;">
          <strong style="color:${c.accent}; display:block; margin-bottom:5px;">📈 엔진 가동 지수</strong>
          <div style="font-weight:800; color:${c.text_main};">● VAIYER: 99.9% ▲</div>
          <div style="font-weight:800; color:${c.text_main}; margin-top:4px;">● Wisdom: 정상 ▲</div>
          <div style="font-size:0.65rem; color:${c.text_muted}; margin-top:6px;">급상승 #1: 스낵앱</div>
        </div>
      </div>
    `;
  } else if (lid.includes('layout-05')) {
    // FV-05: SaaS Tree Sidebar + Multi-View Database
    signatureVisualHtml = `
      <div style="display:grid; grid-template-columns:145px 1fr; border:1px solid ${c.border}; border-radius:10px; overflow:hidden; font-size:0.72rem;">
        <div style="background:#0F172A; color:#E2E8F0; padding:10px;">
          <div style="font-size:0.64rem; color:#818CF8; font-weight:800; margin-bottom:6px;">WORKSPACE TREE (SNB)</div>
          <div style="background:${c.primary}; color:#fff; padding:4px 7px; border-radius:5px; margin-bottom:4px;">📂 01. VAIYER 엔진</div>
          <div style="padding:4px 7px; color:#94A3B8;">📄 02. 12종 스낵앱 DB</div>
          <div style="padding:4px 7px; color:#94A3B8;">📄 03. Wisdom 아키텍처</div>
        </div>
        <div style="background:${c.surface}; padding:10px; color:${c.text_main};">
          <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:6px; border-bottom:1px solid ${c.border}; margin-bottom:8px;">
            <strong>📋 프로덕션 데이터베이스 뷰</strong>
            <span style="font-size:0.65rem; color:${c.primary}; font-weight:800;">[테이블 뷰] · [칸반 보드] · [문서]</span>
          </div>
          ${apps.slice(0, 3).map(app => `
            <div style="display:grid; grid-template-columns:1.3fr 1fr 0.7fr; padding:5px 0; border-bottom:1px solid ${c.border}; font-size:0.7rem;">
              <strong>${app.title.split('—')[0]}</strong>
              <span style="color:${c.text_muted};">${app.stack}</span>
              <span style="color:${c.accent}; font-weight:800;">● Running</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (lid.includes('layout-06') || lid.includes('layout-09')) {
    // FV-06 / FV-09: Interactive Map Split / Fullscreen Cluster Map
    signatureVisualHtml = `
      <div style="display:grid; grid-template-columns:1fr 1.1fr; gap:10px; font-size:0.72rem;">
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div style="background:${c.surface}; border:2px solid ${c.primary}; border-radius:999px; padding:5px 12px; font-size:0.68rem; font-weight:800; color:${c.text_main};">
            🔍 어디로(업종) · 일정(10초 개통) · 인원(1인~전사)
          </div>
          ${apps.slice(0, 2).map(app => `
            <div style="background:${c.surface}; border:1px solid ${c.border}; border-radius:8px; padding:8px;">
              <div style="display:flex; justify-content:space-between;"><strong style="color:${c.text_main};">${app.title.split('—')[0]}</strong><span style="color:${c.primary}; font-weight:800;">★ 4.98</span></div>
              <span style="font-size:0.66rem; color:${c.text_muted};">${app.endpoint} · 슈퍼호스트 인증</span>
            </div>
          `).join('')}
        </div>
        <div style="background:linear-gradient(135deg, #0F172A 0%, #1E293B 100%); border:1px solid #38BDF8; border-radius:10px; padding:12px; position:relative; min-height:135px; display:flex; flex-direction:column; justify-content:space-between; color:#fff;">
          <div style="font-size:0.66rem; color:#38BDF8; font-weight:800;">🗺️ INTERACTIVE PRICE-PIN &amp; CLUSTER MAP (SNB/MAIN)</div>
          <div style="display:flex; flex-wrap:wrap; gap:8px; margin:8px 0;">
            <span style="background:#FFFFFF; color:#0F172A; font-weight:900; padding:3px 9px; border-radius:999px; box-shadow:0 4px 10px rgba(0,0,0,0.4);">₩0 무료진단</span>
            <span style="background:${c.primary}; color:#FFFFFF; font-weight:900; padding:3px 9px; border-radius:999px;">⚡ VOGUE:M 단지</span>
            <span style="background:#10B981; color:#064E3B; font-weight:900; padding:3px 9px; border-radius:999px;">📍 QR트래커 타워</span>
          </div>
          <div style="font-size:0.65rem; color:#94A3B8;">카드를 선택하면 지도 마커가 실시간 연동됩니다.</div>
        </div>
      </div>
    `;
  } else if (lid.includes('layout-08')) {
    // FV-08: Recruiting Position Feed + Cost Saving Calculator
    signatureVisualHtml = `
      <div style="display:grid; grid-template-columns:1.1fr 0.9fr; gap:10px; font-size:0.72rem;">
        <div style="display:flex; flex-direction:column; gap:6px;">
          ${apps.slice(0, 2).map(app => `
            <div style="background:${c.surface}; border:1px solid ${c.border}; border-radius:8px; padding:9px;">
              <span style="font-size:0.62rem; font-weight:800; color:${c.primary};">AI 디지털 부서원 채용 · 매칭률 99%</span>
              <strong style="display:block; color:${c.text_main}; margin:2px 0;">[전담 AI] ${app.title.split('—')[0]} 매니저</strong>
              <span style="font-size:0.66rem; color:${c.secondary};">합격보상: 외주비 100% 절감 · 즉시 출근</span>
            </div>
          `).join('')}
        </div>
        <div style="background:#0F172A; color:#fff; border:1px solid #34D399; border-radius:10px; padding:10px;">
          <span style="font-size:0.64rem; font-weight:800; color:#6EE7B7; display:block;">💰 우측 SNB 외주비·인건비 절감 계산기</span>
          <div style="font-size:1.15rem; font-weight:900; color:#34D399; margin:6px 0;">연 ₩8,400만 절감</div>
          <div style="font-size:0.66rem; color:#CBD5E1;">☑ 홍보/매거진 ☑ 영상합성 ☑ 개발/배선</div>
        </div>
      </div>
    `;
  } else if (lid.includes('layout-10')) {
    // FV-10: Brand One-Page Manifesto Story
    signatureVisualHtml = `
      <div style="background:linear-gradient(180deg, #090D16 0%, #1E1B4B 100%); color:#FFFFFF; border-radius:12px; padding:18px; text-align:center; border:1px solid rgba(129,140,248,0.4);">
        <div style="display:flex; justify-content:center; gap:6px; margin-bottom:8px; font-size:0.64rem; color:#A5B4FC;">
          <span>● CHAPTER 01 비전</span><span>○ 02 원리</span><span>○ 03 임팩트</span><span>○ 04 초대</span>
        </div>
        <h4 style="font-size:1.22rem; font-weight:900; letter-spacing:-0.03em; margin:0 0 6px;">
          복잡한 외주 개발의 끝,<br/><span style="color:#6EE7B7;">말 한마디로 열리는 비즈니스.</span>
        </h4>
        <p style="font-size:0.74rem; color:#CBD5E1; margin:0 0 10px;">단일 컬럼 풀뷰포트 서사와 압도적인 타이포그래피로 브랜드 철학을 각인시킵니다.</p>
        <span style="background:#FFFFFF; color:#0F172A; font-size:0.72rem; font-weight:800; padding:5px 14px; border-radius:999px; display:inline-block;">지금 10초 만에 시작하기 →</span>
      </div>
    `;
  } else {
    // FV-00 / FV-07 / Custom: 4-Step Vibe-to-App Pipeline & Course Curation
    signatureVisualHtml = `
      <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px; font-size:0.72rem;">
        ${[
          ['STEP 01', 'Vibe 한 줄 입력', '대표님의 아이디어를 자연어로 입력', c.primary],
          ['STEP 02', 'VAIYER 자동 배선', '4대 코어 기술 부품을 레고처럼 연결', c.secondary],
          ['STEP 03', 'Wisdom 지식검증', 'Dual-TOC 교차검증으로 할루시네이션 차단', c.accent],
          ['STEP 04', '10초 스낵앱 개통', '설치 없이 카톡/웹으로 즉시 실행', c.primary]
        ].map(([st, ttl, dsc, col]) => `
          <div style="background:${c.surface}; border:1px solid ${c.border}; border-top:3px solid ${col}; border-radius:8px; padding:10px; color:${c.text_main};">
            <span style="font-size:0.62rem; font-weight:800; color:${col};">${st}</span>
            <strong style="display:block; margin:3px 0 4px; font-size:0.78rem;">${ttl}</strong>
            <p style="font-size:0.68rem; color:${c.text_muted}; margin:0; line-height:1.4;">${dsc}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  return `
    <div style="background:#0B1120; border:1px solid rgba(244,114,182,0.4); border-radius:14px; padding:16px; display:flex; flex-direction:column; gap:12px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px; flex-wrap:wrap;">
        <div>
          <span class="ic-badge-chip feature-ic" style="margin-bottom:5px;">
            <span class="ic-code">IC-12 · ${fv.id || 'FV-00'}</span>
            <span>${fv.subtitle_ko || layout.name_ko}</span>
          </span>
          <h4 style="font-size:1.02rem; font-weight:800; color:#FFFFFF; margin:4px 0 0;">
            ${fv.title_ko || '레이아웃 고유 특화 뷰'}
          </h4>
        </div>
      </div>

      <p style="font-size:0.78rem; color:#CBD5E1; line-height:1.5; margin:0; background:rgba(30,41,59,0.65); padding:9px 12px; border-radius:8px;">
        <strong style="color:#F472B6;">💡 특화 정보구조(IA) 설계 의도:</strong> ${fv.ia_rationale || ''}
      </p>

      <!-- Key Elements Chips -->
      <div style="display:flex; flex-wrap:wrap; gap:6px;">
        ${(fv.key_elements || []).map(el => `
          <span class="dh-tile-tag" style="background:rgba(16,185,129,0.15); color:#6EE7B7; border:1px solid rgba(52,211,153,0.3);">✓ ${el}</span>
        `).join('')}
      </div>

      <!-- Live Styled Mini Feature View Canvas -->
      <div style="background:${c.background || '#F8FAFC'}; color:${c.text_main || '#0F172A'}; border-radius:10px; padding:14px; border:2px solid ${c.primary || '#4F46E5'};">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding-bottom:6px; border-bottom:1px solid ${c.border || '#E2E8F0'}; font-size:0.72rem;">
          <strong>${ci.logoMark} ${ci.companyName} — [${fv.id || 'FV'} 특화 뷰 라이브 캔버스]</strong>
          <span style="color:${c.primary}; font-weight:800;">스타일: ${style.name_ko}</span>
        </div>
        ${signatureVisualHtml}
      </div>
    </div>
  `;
}

function buildIaMenuTreeAndRelationshipsHtml() {
  return `
    <div style="display:flex; flex-direction:column; gap:20px;">
      <!-- 1. GNB / LNB / SNB / FNB Navigation Specification & Relationships -->
      <div class="dh-v5-ia-panel">
        <div class="ia-panel-head">
          <div>
            <span style="font-size:0.68rem; font-weight:800; color:#38BDF8; display:block;">GNB · LNB · SNB · FNB ARCHITECTURE</span>
            <h3>🧭 4대 내비게이션 계층(GNB·LNB·SNB·FNB) 화면 속성 및 메뉴 간 상호 관계 정의</h3>
          </div>
          <span class="dh-v5-pill-badge accent">1-Click · Max 3-Depth 원칙</span>
        </div>

        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px;">
          ${[
            ['GNB (Depth 1)', '상단 고정 바 (56px)', '목적에 가장 가까운 5대 핵심 기능 영역을 우선순위로 배치합니다.', 'GNB 클릭 시 하위 LNB 탭 목록과 SNB 컨트롤 모드가 즉시 동기화 전환됩니다.', '#818CF8'],
            ['LNB (Depth 2)', 'GNB 하단 서브바 (44px)', '각 대메뉴의 기능을 2~3개 서브뷰 탭으로 분할하여 긴 스크롤(최대 2p 이내)을 방지합니다.', '우측에 화면 설계 관계 툴팁(ⓘ)과 가이드 드로어 토글을 제공합니다.', '#38BDF8'],
            ['SNB (Depth 3)', '좌측 독 사이드바 (290px)', '화면 이동 없이 스타일(00~10+), 레이아웃(00~10+), 기업 CI를 1-Click 제어합니다.', 'SNB 조작 시 우측 메인 캔버스와 컴포넌트 재배치도가 실시간 리렌더링됩니다.', '#34D399'],
            ['FNB (Global Footer)', '하단 슬림 바 (52px)', '현재 3-Depth 경로(Breadcrumb)와 12대 객체 상태, 빠른 사이트맵 점프를 제공합니다.', '어느 화면에서나 다음 유저 시나리오 단계나 REST API 문서로 즉시 연결합니다.', '#F472B6']
          ].map(([title, spec, role, rel, col]) => `
            <div style="background:#0B1120; border:1px solid ${col}55; border-top:3px solid ${col}; border-radius:12px; padding:14px; font-size:0.76rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <strong style="color:${col}; font-size:0.86rem;">${title}</strong>
                <span style="font-size:0.66rem; color:#94A3B8;">${spec}</span>
              </div>
              <p style="color:#E2E8F0; line-height:1.5; margin:0 0 8px;">${role}</p>
              <div style="background:rgba(30,41,59,0.65); padding:7px 9px; border-radius:7px; color:#CBD5E1; font-size:0.71rem; line-height:1.45;">
                <strong style="color:#FFFFFF;">메뉴 간 관계:</strong> ${rel}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 2. Interactive 3-Depth Menu Tree (Click any node to jump immediately) -->
      <div class="dh-v5-ia-panel">
        <div class="ia-panel-head">
          <div>
            <span style="font-size:0.68rem; font-weight:800; color:#6EE7B7; display:block;">INTERACTIVE 3-DEPTH FUNCTIONAL MENU TREE</span>
            <h3>🌳 프로젝트 정보설계 메뉴트리 (노드 클릭 시 1-Click 화면 이동)</h3>
          </div>
          <span style="font-size:0.74rem; color:#94A3B8;">모든 메뉴 노드는 연동된 정보 컴포넌트 객체(IC-01~12)를 함께 표시합니다.</span>
        </div>

        <div class="dh-v5-menutree-grid">
          ${V5_MENU_TREE_FALLBACK.map(gNode => {
            const isActGnb = gNode.gnb_id === CURRENT_GNB_ID;
            return `
              <div class="menutree-gnb-col ${isActGnb ? 'active-col' : ''}">
                <div class="menutree-gnb-node" onclick="selectGnbMenu('${gNode.gnb_id}')">
                  <div style="font-size:0.65rem; font-weight:800; color:#6EE7B7; margin-bottom:2px;">DEPTH 1 · GNB 0${gNode.order}</div>
                  <strong style="font-size:0.88rem; color:#FFFFFF; display:block;">${gNode.icon} ${gNode.title_ko}</strong>
                  <p style="font-size:0.7rem; color:#CBD5E1; margin:4px 0 0; line-height:1.4;">${gNode.purpose_summary}</p>
                </div>

                <div style="display:flex; flex-direction:column; gap:8px;">
                  ${gNode.lnb_items.map(lItem => {
                    const isActLnb = lItem.lnb_id === CURRENT_LNB_ID;
                    return `
                      <div class="menutree-lnb-node" style="${isActLnb ? 'border-color:#34D399; background:rgba(16,185,129,0.14);' : ''}" onclick="selectGnbMenu('${gNode.gnb_id}'); selectLnbTab('${lItem.lnb_id}');">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">
                          <span style="font-size:0.65rem; font-weight:800; color:#38BDF8;">DEPTH 2 · LNB ${lItem.code}</span>
                          <span style="font-size:0.64rem; color:#6EE7B7;">1-Click ➔</span>
                        </div>
                        <strong style="font-size:0.78rem; color:#FFFFFF; display:block; margin-bottom:5px;">${lItem.title_ko}</strong>
                        <div style="display:flex; flex-wrap:wrap; gap:3px;">
                          ${(lItem.active_components || []).slice(0, 4).map(cid => `
                            <span style="font-size:0.62rem; background:#0F172A; color:#A5B4FC; border:1px solid rgba(129,140,248,0.3); padding:1px 5px; border-radius:4px;">${cid}</span>
                          `).join('')}
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function buildIaComponentRegistryHtml() {
  const groups = [
    { id: 'ALL', label: '전체 12대 객체 (IC-01~12)' },
    { id: 'GRP-01', label: 'GRP-01 내비게이션 계층 (4)' },
    { id: 'GRP-02', label: 'GRP-02 핵심 가치 제안 계층 (2)' },
    { id: 'GRP-03', label: 'GRP-03 콘텐츠·카탈로그 계층 (2)' },
    { id: 'GRP-04', label: 'GRP-04 스토리·아키텍처 계층 (2)' },
    { id: 'GRP-05', label: 'GRP-05 고객 전환·특화 뷰 계층 (2)' }
  ];

  const allComps = Object.values(V5_COMPONENT_MAP_FALLBACK).filter(c =>
    CURRENT_IC_GROUP_FILTER === 'ALL' || c.group === CURRENT_IC_GROUP_FILTER
  );

  // Check which slot each component currently occupies in CURRENT_LAYOUT
  const reflow = getLayoutIaReflowSpec(CURRENT_LAYOUT);
  const slotMap = reflow.slot_mapping || {};
  const findCurrentSlot = (cid) => {
    for (const [slotName, arr] of Object.entries(slotMap)) {
      if (Array.isArray(arr) && arr.includes(cid)) return slotName;
    }
    return '조건부/축약 배치';
  };

  return `
    <div class="dh-v5-ia-panel">
      <div class="ia-panel-head" style="flex-wrap:wrap;">
        <div>
          <span style="font-size:0.68rem; font-weight:800; color:#10B981; display:block;">OBJECTIFIED INFORMATION COMPONENT REGISTRY</span>
          <h3>🧱 사이트 정보 객체화 레지스트리 (5대 계층 그룹 · 12개 표준 컴포넌트 객체)</h3>
        </div>
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          ${groups.map(g => `
            <button class="dh-ctrl-btn" style="padding:4px 10px; font-size:0.73rem; ${CURRENT_IC_GROUP_FILTER === g.id ? 'background:#4F46E5; color:#fff; border-color:#818CF8;' : ''}" onclick="setIcGroupFilter('${g.id}')">
              ${g.label}
            </button>
          `).join('')}
        </div>
      </div>

      <div class="dh-v5-comp-registry-grid">
        ${allComps.map(comp => {
          const activeSlot = findCurrentSlot(comp.id);
          const isMoved = activeSlot !== comp.slot;
          return `
            <div class="dh-v5-ic-card">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="ic-badge-chip ${comp.id === 'IC-12' ? 'feature-ic' : ''}">
                  <span class="ic-code">${comp.id}</span>
                  <span>${comp.group}</span>
                </span>
                <span style="font-size:0.68rem; font-weight:800; color:${isMoved ? '#FCD34D' : '#6EE7B7'};">
                  현재 슬롯: ${activeSlot}
                </span>
              </div>
              <strong style="font-size:0.92rem; color:#FFFFFF;">${comp.name}</strong>
              <p style="font-size:0.76rem; color:#CBD5E1; line-height:1.5; margin:0;">${comp.desc}</p>
              <div style="margin-top:auto; padding-top:8px; border-top:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; font-size:0.7rem; color:#94A3B8;">
                <span>기본 슬롯: <code>${comp.slot}</code></span>
                <span style="color:#A5B4FC; cursor:pointer;" onclick="setIaSubTab('lnb-ia-reflow')">재배치 시뮬레이션 →</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function buildStyleAndLayoutSpecSheetHtml(style, layout, ci) {
  const c = style.colors || {};
  const t = style.typography || {};
  const tax = getLayoutTaxonomy(layout);
  const reflow = getLayoutIaReflowSpec(layout);
  return `
    <div style="background:#0B1120; border:1px solid rgba(148,163,184,0.25); border-radius:14px; padding:20px; display:grid; grid-template-columns:1fr 1fr; gap:18px; color:#F8FAFC;">
      <div style="background:#131C31; border:1px solid rgba(129,140,248,0.3); border-radius:12px; padding:16px;">
        <span style="font-size:0.68rem; font-weight:800; color:#A5B4FC;">STYLE GUIDE SPECIFICATION</span>
        <h4 style="font-size:1.05rem; margin:4px 0 10px;">🎨 ${style.name_ko} (${style.name_en})</h4>
        <p style="font-size:0.8rem; color:#CBD5E1; line-height:1.5;">${style.identity?.tone_and_manner || style.tagline}</p>
        <div style="font-size:0.76rem; color:#94A3B8; margin-top:10px; display:flex; flex-direction:column; gap:5px;">
          <div>· <strong>Primary / Secondary / Accent:</strong> ${c.primary} / ${c.secondary} / ${c.accent}</div>
          <div>· <strong>Heading Font:</strong> ${t.heading_font}</div>
          <div>· <strong>Body Font:</strong> ${t.body_font}</div>
          <div>· <strong>CI 적용:</strong> ${ci.logoMark} ${ci.companyName} (${ci.tagline})</div>
        </div>
      </div>
      <div style="background:#131C31; border:1px solid rgba(52,211,153,0.3); border-radius:12px; padding:16px;">
        <span style="font-size:0.68rem; font-weight:800; color:#6EE7B7;">LAYOUT &amp; IA REFLOW SPECIFICATION</span>
        <h4 style="font-size:1.05rem; margin:4px 0 10px;">📐 ${layout.name_ko} (${layout.domain_ko})</h4>
        <p style="font-size:0.8rem; color:#CBD5E1; line-height:1.5;">${reflow.reflow_summary_ko}</p>
        <div style="font-size:0.76rem; color:#94A3B8; margin-top:10px; display:flex; flex-direction:column; gap:5px;">
          <div>· <strong>메뉴 배치 (GNB/LNB):</strong> ${tax.menuKo}</div>
          <div>· <strong>바디 뷰 스타일:</strong> ${tax.viewKo}</div>
          <div>· <strong>특화 뷰 객체:</strong> ${reflow.characteristic_view?.id} — ${reflow.characteristic_view?.title_ko}</div>
        </div>
      </div>
    </div>
  `;
}

