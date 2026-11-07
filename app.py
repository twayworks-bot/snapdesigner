"""
Design Templates, Website Layouts & Company CI Helper System Server (FastAPI v3.0)
- Default Port: 5000
- Base Subpath Prefix: /templates
- Sample Homepage: TheWayWorks (C:\\Project\\글쓰기\\twayworks based)
- Provides:
  1. Interactive Sample Homepage & Live Design Style + Website Layout Pattern Switcher (/templates)
  2. Gemini LLM AI (.env GEMINI_API_KEY) Powered Design Style & Website Layout Generator
  3. 2-Category Studio Manager (1. Design Styles / 2. Layout Styles) Full CRUD & Persistence
  4. REST API Endpoints & Dynamic .ZIP Package Generator (/templates/api/...)
"""

import io
import json
import os
import re
import shutil
import zipfile
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional

import uvicorn
from dotenv import load_dotenv
from fastapi import APIRouter, FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, HTMLResponse, RedirectResponse, Response, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

BASE_DIR = Path(__file__).resolve().parent

# Load .env from workspace or parent directories first so env vars are available
for env_candidate in (BASE_DIR / ".env", BASE_DIR.parent / ".env", BASE_DIR.parent.parent / ".env"):
    if env_candidate.exists():
        load_dotenv(env_candidate, override=False)

# Configure Base URL Prefix from DEFAULT_PREFIX environment variable (default: /templates)
RAW_DEFAULT_PREFIX = os.getenv("DEFAULT_PREFIX", "/templates").strip()
if RAW_DEFAULT_PREFIX in ("", "/"):
    PREFIX = ""
else:
    PREFIX = "/" + RAW_DEFAULT_PREFIX.strip("/")
DEFAULT_PREFIX = PREFIX

# Configure Persistent Volume Database/Data Directory via DATABASE_PATH / DATA_DIR / DB_PATH
SEED_DATA_DIR = BASE_DIR / "seed_data" if (BASE_DIR / "seed_data").exists() else (BASE_DIR / "data")
RAW_DB_PATH = (
    os.getenv("DATABASE_PATH")
    or os.getenv("DATA_DIR")
    or os.getenv("DB_PATH")
    or str(BASE_DIR / "data")
)
DATA_DIR = Path(RAW_DB_PATH).resolve()
STATIC_DIR = BASE_DIR / "static"
STYLES_FILE = DATA_DIR / "styles_metadata.json"
LAYOUTS_FILE = DATA_DIR / "layouts_metadata.json"
TWAYWORKS_FILE = DATA_DIR / "twayworks_profile.json"


def ensure_persistent_data_seeded() -> None:
    """Ensure the persistent volume directory exists and seed initial JSON database files if empty."""
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    for filename in ("styles_metadata.json", "layouts_metadata.json", "twayworks_profile.json"):
        target_file = DATA_DIR / filename
        seed_file = SEED_DATA_DIR / filename
        if not target_file.exists() and seed_file.exists() and seed_file.resolve() != target_file.resolve():
            shutil.copy2(seed_file, target_file)


ensure_persistent_data_seeded()

TWAYWORKS_ORIGINAL_STYLE = {
    "id": "style-00-twayworks-original",
    "order": 0,
    "name_ko": "더웨이웍스 오리지널",
    "name_en": "TheWayWorks Original",
    "tagline": "고도화된 AI 엔지니어링의 정교함과 1인 기업·공동체를 향한 따뜻한 실용성",
    "is_builtin": True,
    "target_businesses": [
        "AI 전문가 기업 (VAIYER / Wisdom)",
        "1인 스냅 컴퍼니 (Snap Company)",
        "스낵 앱 빌더 & 자동화 파트너",
        "스마트 처치 & 소셜 임팩트",
    ],
    "template_definition": {
        "layout_structure": "12컬럼 모던 테크 그리드, 딥 인디고 히어로와 클린 슬레이트 섹션의 교차 배치(Alternating Contrast)",
        "hero_style": "좌측 핵심 가치 제안 타이포그래피 + 우측 4단계 실전 파이프라인 인터랙티브 카드",
        "ui_components": {
            "border_radius": "14px ~ 20px",
            "border_style": "1px solid #E2E8F0",
            "shadow_style": "0 10px 30px -5px rgba(15, 23, 42, 0.08)",
            "interaction": "부드러운 상향 호버(-4px) 및 라이브 에메랄드 상태 배지 펄스",
        },
        "recommended_sections": [
            "Hero: Vibe-to-App 4단계 파이프라인",
            "Cartoon Storyboard: 6컷 아키텍처 카툰",
            "4 Pillars: VAIYER · Snack App · Wisdom · Snap Company",
            "Core Engines: 4대 만능 기술 부품 탭",
            "Live Catalog: 12종 프로덕션 스낵 앱 실증",
        ],
    },
    "identity": {
        "adjectives": ["지적인", "신뢰할 수 있는", "실용적인", "민첩한", "따뜻한", "혁신적인"],
        "adjectives_en": ["Intelligent", "Reliable", "Practical", "Agile", "Warm", "Innovative"],
        "verbs": ["연결하다", "자동화하다", "실행하다", "진화하다", "나누다"],
        "verbs_en": ["Wire", "Automate", "Execute", "Evolve", "Share"],
        "tone_and_manner": "어려운 AI 기술을 일상의 쉬운 비유(요리, 레고, 텐트)로 친절하고 확신 있게 풀어내는 설득력 있는 어조.",
        "sample_copy": "말 한마디로 내 노하우를 연결하면, 오늘 바로 쓰는 나만의 비즈니스 앱이 됩니다. THE WAY WORKS.",
    },
    "colors": {
        "primary": "#251E66",
        "secondary": "#4F46E5",
        "accent": "#10B981",
        "background": "#F8FAFC",
        "surface": "#FFFFFF",
        "text_main": "#0F172A",
        "text_muted": "#475569",
        "border": "#E2E8F0",
        "color_scheme": "light",
    },
    "typography": {
        "heading_font": "'Plus Jakarta Sans', 'Pretendard Variable', Pretendard, sans-serif",
        "body_font": "'Pretendard Variable', Pretendard, sans-serif",
        "accent_font": "'JetBrains Mono', monospace",
        "heading_weight": "800",
        "body_weight": "400",
        "letter_spacing": "-0.03em",
        "line_height": "1.65",
    },
}

TWAYWORKS_STANDARD_LAYOUT = {
    "id": "layout-00-twayworks-standard",
    "order": 0,
    "domain_ko": "기본 기업 소개 & 멀티뷰 표준 (Standard Corporate)",
    "domain_en": "Standard Corporate & Multi-View Showcase",
    "name_ko": "더웨이웍스 표준 기업형 레이아웃",
    "name_en": "TheWayWorks Standard Multi-Section Layout",
    "is_builtin": True,
    "menu_placement_type": "top-gnb",
    "menu_placement_ko": "상단 고정 표준 GNB (6대 메뉴 탭)",
    "view_style_type": "storytelling-sections",
    "view_style_ko": "2단 히어로 + 교차형 스토리텔링 섹션 뷰",
    "representative_companies": [
        "더웨이웍스 (TheWayWorks)",
        "B2B/B2C 테크 솔루션 홈페이지",
        "1인 스냅 컴퍼니 표준 인트로",
    ],
    "layout_structure": "상단 고정형 GNB(6개 멀티뷰 탭) + 2단 파이프라인 히어로 + 7단계 스토리텔링 섹션 바디",
    "tagline": "기업의 비전, 카툰 스토리보드, 4대 핵심 기술, 12종 실증 카탈로그, 무료 진단 폼을 체계적으로 전달하는 표준 기업형 레이아웃",
    "head_spec": {
        "structure_name": "표준 기업형 고정 GNB (브랜드 CI + 6개 페이지 뷰 라우터 탭)",
        "description": "좌측 브랜드 로고 마크·기업명·태그라인과 우측 HOME 및 01~05 서브 페이지 전환 탭이 배치된 표준 헤더.",
        "elements": [
            "브랜드 심볼 마크 & 기업명·태그라인",
            "6대 멀티뷰 메뉴 (HOME, 01 회사소개, 02 쉬운 기술원리, 03 맞춤 솔루션, 04 실제 작동사례, 05 3분 무료진단)",
        ],
        "behavior": "상단 고정(Sticky) 및 클릭 시 SPA 멀티 페이지 뷰 즉시 전환",
    },
    "body_spec": {
        "structure_name": "2단 히어로(가치제안 + 파이프라인 카드) + 교차형 섹션 그리드(4열/2열/3열) 바디",
        "description": "히어로 배너 아래로 6컷 카툰 스토리보드, 4대 핵심 축(4열), 4대 만능 부품 탭(2분할), Wisdom DIKW 피라미드, 12종 스낵 앱 카탈로그(3열)가 교차 배치됩니다.",
        "grid_template": "12-Column Responsive Container (1280px max-width) + Alternating Contrast Sections",
        "elements": [
            "Hero: 좌측 슬로건·지표 + 우측 4단계 실전 파이프라인 카드",
            "Section 2~5: 6컷 카툰, 4대 핵심 축(4열), VAIYER 4대 엔진 탭, Wisdom DIKW",
            "Section 6~7: 12종 스낵앱 라이브 카탈로그(3열) 및 3분 무료 진단 폼",
        ],
    },
    "domain_keywords": ["기본", "기업 홈페이지", "더웨이웍스", "회사 소개", "표준 레이아웃", "B2B", "스냅컴퍼니"],
    "recommended_styles": [
        "style-00-twayworks-original",
        "style-04-modern-trust-corporate",
        "style-09-clean-growth-bento",
    ],
    "sample_application_note": "TheWayWorks의 오리지널 기업 소개 멀티뷰 구조로, 모든 섹션과 서브페이지를 표준 그리드로 탐색할 수 있습니다.",
}


# =====================================================================
# JSON Data Persistence Helpers
# =====================================================================
def load_styles_data() -> dict:
    if not STYLES_FILE.exists():
        return {"project": "Design Templates Helper", "version": "3.0.0", "total_styles": 0, "styles": []}
    with open(STYLES_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def save_styles_data(data: dict) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    styles = data.get("styles", [])
    data["total_styles"] = len(styles)
    data["updated_at"] = datetime.now().isoformat()
    with open(STYLES_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


LAYOUT_TAXONOMY_MAP = {
    "layout-00-twayworks-standard": ("top-gnb", "상단 고정 표준 GNB (6대 메뉴 탭)", "storytelling-sections", "2단 히어로 + 교차형 스토리텔링 섹션 뷰"),
    "layout-01-ecommerce-grid": ("mega-search", "상단 통합 검색바 + 1차 카테고리 멀티탭", "card-grid", "좌측 다중 필터 + 4열 고밀도 상품 카드 그리드 뷰"),
    "layout-02-ott-carousel": ("minimal-floating", "상단 투명 오버레이 미니멀 GNB", "hero-carousel", "풀스크린 빌보드 히어로 + 수평 스크롤 캐러셀(Row) 뷰"),
    "layout-03-entertainment-booking": ("quick-action-bar", "상단 GNB + 밀착형 빠른 예매 고정바", "card-grid", "박스오피스 랭킹 포스터 차트 + 예고편 모듈 뷰"),
    "layout-04-portal-3col-news": ("mega-search", "중앙 대형 검색 헤더 + 뉴스 섹션 탭바", "three-col-feed", "3단 신문 편집 그리드 (속보·헤드라인·위젯) 피드 뷰"),
    "layout-05-saas-workspace-split": ("left-sidebar", "좌측 고정 계층형 트리 사이드바 (Tree Menu)", "split-view", "좌우 분할 앱 쉘 & 다중 탭 데이터 워크스페이스 뷰"),
    "layout-06-travel-map-split": ("quick-action-bar", "상단 중앙 알약형 조건 검색 위젯 헤더", "split-view", "좌측 카드 리스트 + 우측 가격 마커 지도 2분할 스플릿 뷰"),
    "layout-07-edutech-curation-grid": ("top-gnb", "카테고리 드롭다운 GNB + 키워드 검색바", "card-grid", "프로모션 배너 슬라이더 + 4열 강의 큐레이션 그리드 뷰"),
    "layout-08-recruiting-career-feed": ("top-gnb", "상단 직군·직무 태그 필터 헤더", "split-view", "포지션 매칭 카드 그리드 + 우측 비용 계산기 복합 뷰"),
    "layout-09-proptech-fullscreen-map": ("minimal-floating", "지도 상단 반투명 플로팅 유형 탭 & 검색 헤더", "split-view", "100% 풀스크린 인터랙티브 지도 + 좌측 오버레이 패널 뷰"),
    "layout-10-brand-onepage-story": ("minimal-floating", "초미니멀 글래스 플로팅 헤더 (원페이지 앵커)", "onepage-parallax", "초대형 타이포그래피 원페이지 패럴랙스 스토리텔링 뷰"),
}

# =====================================================================
# v5.0 Information Architecture (IA): Menu Tree, Component Registry & Layout Reflow
# =====================================================================
NAVIGATION_RELATIONSHIP_SPEC = {
    "GNB": {
        "code": "GNB",
        "name_ko": "Global Navigation Bar (글로벌 내비게이션 바)",
        "depth": 1,
        "placement": "상단 최상위 고정 바 (Top Sticky, 56px)",
        "click_rule": "1-Click 최상위 목적지 즉시 이동 (스크롤 불필요)",
        "role": "사용자 목적에 가장 가까운 5대 핵심 기능 영역을 우선순위에 따라 좌측부터 배치하고, 현재 적용된 [스타일 × 레이아웃] 상태와 패키지 출고 액션을 전역 제어합니다.",
        "relationship_to_children": "GNB 대메뉴 클릭 시 하위 LNB(Depth 2 탭 바) 목록과 SNB(Depth 3 컨텍스트 컨트롤러) 필터 모드가 실시간 동기화 전환됩니다.",
    },
    "LNB": {
        "code": "LNB",
        "name_ko": "Local Navigation Bar (로컬 내비게이션 바)",
        "depth": 2,
        "placement": "GNB 바로 아래 밀착 서브 바 (Sub-Header Bar, 44px)",
        "click_rule": "1-Click 세부 화면 탭 전환 (최대 2페이지 이내 정보 밀도 유지)",
        "role": "긴 세로 스크롤을 방지하기 위해 GNB 각 대메뉴의 기능을 3개의 핵심 서브뷰 탭으로 분할하고, 우측에 화면 설계 가이드 툴팁(ⓘ) 및 확장 설명 토글을 제공합니다.",
        "relationship_to_children": "LNB 탭 선택 시 메인 캔버스 뷰가 즉시 전환되며, SNB의 빠른 선택기와 양방향 상태를 공유합니다.",
    },
    "SNB": {
        "code": "SNB",
        "name_ko": "Side Navigation Bar (사이드 내비게이션 & 객체 컨트롤러)",
        "depth": 3,
        "placement": "좌측 고정 사이드 패널 (Left Docked Sidebar, 280px, 접기/펼치기 지원)",
        "click_rule": "1-Click 스타일·레이아웃·컴포넌트 필터링 및 즉시 적용",
        "role": "Depth 3 수준에서 디자인 스타일(톤앤매너 00~10+), 웹사이트 레이아웃(00~10+), 정보 컴포넌트 계층(GRP-01~05), 기업 CI를 화면 이동 없이 1-Click으로 조작합니다.",
        "relationship_to_children": "SNB에서 스타일이나 레이아웃을 클릭하면 우측 메인 캔버스(타일·IA 재배치도·표준 프리뷰·샘플 사이트)가 새로고침 없이 즉시 리렌더링됩니다.",
    },
    "FNB": {
        "code": "FNB",
        "name_ko": "Footer Navigation Bar (푸터 내비게이션 바)",
        "depth": "Global Utility",
        "placement": "하단 슬림 상태 및 사이트맵 바 (Bottom Bar, 52px)",
        "click_rule": "1-Click 다음 시나리오 단계 이동 및 전체 메뉴 빠른 점프",
        "role": "현재 위치의 3-Depth 경로(GNB > LNB > Active Preset)를 표시하고, 다음 사용자 시나리오 단계로의 유도 버튼 및 REST API/Swagger 문서를 연결합니다.",
        "relationship_to_children": "전역 어느 화면에서나 1-Click으로 원하는 GNB/LNB 뷰로 점프하거나 패키지를 다운로드할 수 있습니다.",
    },
}

IA_MENU_TREE = [
    {
        "gnb_id": "gnb-gallery",
        "order": 1,
        "priority_badge": "최우선 목적",
        "icon": "🎯",
        "title_ko": "1. 대표 템플릿 갤러리",
        "title_en": "Quick Showcase Gallery",
        "purpose_summary": "목적에 가장 가까운 대표 디자인 스타일 10선과 레이아웃 10선을 한눈에 비교하고 1-Click으로 선택합니다.",
        "screen_attributes": {
            "max_viewport_pages": "1.5 페이지 이내 (4~5열 컴팩트 그리드)",
            "snb_mode": "정체성 키워드(형용사·동사) 및 메뉴배치/뷰스타일 빠른 필터",
            "long_text_policy": "타일 내 핵심 키워드·컬러칩만 표시, 상세 해설은 [ⓘ 툴팁] 제공",
        },
        "lnb_items": [
            {
                "lnb_id": "lnb-gallery-styles",
                "code": "1-1",
                "title_ko": "대표 디자인 스타일 10선 (톤앤매너)",
                "tooltip": "컬러 팔레트, 타이포그래피, 브랜드 어조 중심의 대표 스타일 타일 10개(+오리지널)를 한눈에 비교합니다.",
                "active_components": ["IC-01", "IC-05", "IC-06"],
            },
            {
                "lnb_id": "lnb-gallery-layouts",
                "code": "1-2",
                "title_ko": "대표 레이아웃 아키텍처 10선 (메뉴·뷰)",
                "tooltip": "GNB/LNB/SNB 메뉴 배치 방식과 본문 뷰 스타일로 구분된 도메인별 대표 레이아웃 10개(+표준)를 한눈에 선택합니다.",
                "active_components": ["IC-01", "IC-02", "IC-03", "IC-12"],
            },
            {
                "lnb_id": "lnb-gallery-guide",
                "code": "1-3",
                "title_ko": "웹디자인 기본 설계 가이드 & 활용법",
                "tooltip": "이 지원도구의 목적, 웹디자인 기본 설계 원칙(정보설계→네비게이션→스타일→레이아웃), 4단계 활용 흐름을 1페이지 내에 요약합니다.",
                "active_components": ["IC-01", "IC-02", "IC-03", "IC-04"],
            },
        ],
    },
    {
        "gnb_id": "gnb-ia",
        "order": 2,
        "priority_badge": "핵심 설계",
        "icon": "🗺️",
        "title_ko": "2. 정보설계(IA) & 레이아웃 재배치",
        "title_en": "IA Menu Tree & Component Reflow",
        "purpose_summary": "사이트의 메뉴트리(3-Depth)와 12대 정보 컴포넌트 객체를 확인하고, 레이아웃 변경에 따른 계층적 재배치와 특화 뷰를 시뮬레이션합니다.",
        "screen_attributes": {
            "max_viewport_pages": "1.5 페이지 이내 (시각적 다이어그램 + 아코디언)",
            "snb_mode": "레이아웃(00~10) 스위치 & 5대 컴포넌트 계층(GRP-01~05) 하이라이트",
            "long_text_policy": "슬롯 배치도와 핵심 규칙 우선 노출, 세부 속성은 [▾ 상세 펼치기] 및 [ⓘ 툴팁] 제공",
        },
        "lnb_items": [
            {
                "lnb_id": "lnb-ia-reflow",
                "code": "2-1",
                "title_ko": "레이아웃별 컴포넌트 계층 재배치(Reflow) & 특화 뷰",
                "tooltip": "메뉴트리에 따라 GNB·LNB·SNB·FNB와 12개 정보 컴포넌트(IC-01~12)가 각 레이아웃에서 어떻게 구조적으로 재배치되는지 시각화합니다.",
                "active_components": ["IC-01", "IC-02", "IC-03", "IC-04", "IC-05", "IC-07", "IC-12"],
            },
            {
                "lnb_id": "lnb-ia-menutree",
                "code": "2-2",
                "title_ko": "3-Depth 메뉴트리 & GNB·LNB·SNB·FNB 관계 정의",
                "tooltip": "최대 3-Depth, 1-Click 내비게이션 원칙으로 설계된 기능 계층도와 GNB/LNB/SNB/FNB 화면 속성 및 상호 관계를 보여줍니다.",
                "active_components": ["IC-01", "IC-02", "IC-03", "IC-04"],
            },
            {
                "lnb_id": "lnb-ia-components",
                "code": "2-3",
                "title_ko": "정보 컴포넌트 레지스트리 (5대 계층 · 12대 객체)",
                "tooltip": "사이트의 모든 정보를 객체화하여 등록한 5대 계층 그룹(GRP-01~05)과 12개 표준 컴포넌트(IC-01~12)의 명세를 조회합니다.",
                "active_components": ["IC-01", "IC-02", "IC-03", "IC-04", "IC-05", "IC-06", "IC-07", "IC-08", "IC-09", "IC-10", "IC-11", "IC-12"],
            },
        ],
    },
    {
        "gnb_id": "gnb-preview",
        "order": 3,
        "priority_badge": "검토·프리뷰",
        "icon": "🖥️",
        "title_ko": "3. 스타일 적용 & 표준·특화 프리뷰",
        "title_en": "Style Guide & Representative Preview",
        "purpose_summary": "전체 사이트 적용 전, 선택된 톤앤매너와 레이아웃을 4대 표준 대표 페이지와 레이아웃 고유 특화 뷰(Feature View)로 빠르게 검토합니다.",
        "screen_attributes": {
            "max_viewport_pages": "1.5 페이지 이내 (좌측 명세 요약 + 우측 라이브 미니 캔버스)",
            "snb_mode": "스타일·레이아웃 실시간 스위칭 및 대표 프리뷰 탭 연동",
            "long_text_policy": "컬러/폰트/레이아웃 핵심 토큰만 카드화, 상세 CSS/가이드는 드로어/모달로 분리",
        },
        "lnb_items": [
            {
                "lnb_id": "lnb-preview-standard",
                "code": "3-1",
                "title_ko": "4대 표준 대표페이지 가벼운 프리뷰 (홈·카탈로그·스토리·폼)",
                "tooltip": "선택된 스타일과 레이아웃이 적용된 표준 구성요소(①메인 히어로 ②서비스 카탈로그 ③아키텍처 스토리 ④무료 진단 폼)를 한눈에 검토합니다.",
                "active_components": ["IC-05", "IC-06", "IC-07", "IC-09", "IC-11"],
            },
            {
                "lnb_id": "lnb-preview-feature",
                "code": "3-2",
                "title_ko": "레이아웃별 특징적 뷰 (Characteristic Feature View)",
                "tooltip": "선택된 레이아웃(예: 무신사 필터그리드, 넷플릭스 캐러셀, 에어비앤비 맵스플릿 등)만의 고유 정보구조로 생성된 특화 뷰(FV-00~10)를 집중 체험합니다.",
                "active_components": ["IC-01", "IC-02", "IC-03", "IC-12"],
            },
            {
                "lnb_id": "lnb-preview-tokens",
                "code": "3-3",
                "title_ko": "스타일 가이드 상세 명세 (컬러·타이포·어조·CSS 토큰)",
                "tooltip": "현재 스타일의 8색 컬러 시스템, 타이포그래피 스케일, 형용사·동사 어조, CSS 변수를 한눈에 확인하고 복사합니다.",
                "active_components": ["IC-05", "IC-06"],
            },
        ],
    },
    {
        "gnb_id": "gnb-studio",
        "order": 4,
        "priority_badge": "고급·생성",
        "icon": "🎛️",
        "title_ko": "4. 고급 조합 & AI 생성 스튜디오",
        "title_en": "Advanced Matrix & Gemini AI Studio",
        "purpose_summary": "톤앤매너와 레이아웃(메뉴배치·뷰스타일)을 교차 조합하거나, Gemini AI로 신규 요구사항에 맞는 디자인·레이아웃을 생성합니다.",
        "screen_attributes": {
            "max_viewport_pages": "1.5 페이지 이내 (좌우 분할 조합 매트릭스)",
            "snb_mode": "메뉴배치(5분류) · 뷰스타일(5분류) · 컬러모드 필터",
            "long_text_policy": "조합 결과 미니 와이어프레임 즉시 표시, 프롬프트 가이드는 툴팁으로 제공",
        },
        "lnb_items": [
            {
                "lnb_id": "lnb-studio-matrix",
                "code": "4-1",
                "title_ko": "스타일(톤앤매너) × 레이아웃(메뉴·뷰) 조합 매트릭스",
                "tooltip": "11종 이상의 디자인 스타일과 11종 이상의 레이아웃을 자유롭게 매칭하여 구조적 변화를 한눈에 비교합니다.",
                "active_components": ["IC-01", "IC-02", "IC-03", "IC-05", "IC-07", "IC-12"],
            },
            {
                "lnb_id": "lnb-studio-ai",
                "code": "4-2",
                "title_ko": "Gemini AI 신규 스타일 & 레이아웃 맞춤형 생성",
                "tooltip": "자연어 요구사항을 입력하여 새로운 디자인 스타일(톤앤매너) 또는 웹사이트 레이아웃 아키텍처를 즉시 생성·등록합니다.",
                "active_components": ["IC-05", "IC-12"],
            },
            {
                "lnb_id": "lnb-studio-ci",
                "code": "4-3",
                "title_ko": "기업 CI 커스터마이징 & 정체성 매칭 추천",
                "tooltip": "회사명, 로고 심볼, 슬로건 및 핵심 형용사·동사를 입력하면 최적의 스타일×레이아웃 조합을 추천하고 실시간 반영합니다.",
                "active_components": ["IC-01", "IC-04", "IC-05"],
            },
        ],
    },
    {
        "gnb_id": "gnb-live",
        "order": 5,
        "priority_badge": "최종 확정·출고",
        "icon": "🚀",
        "title_ko": "5. 전체 샘플 사이트 & 패키지 출고",
        "title_en": "Full Sample Homepage & Package Export",
        "purpose_summary": "최종 선택한 디자인 스타일과 레이아웃이 적용된 전체 샘플 홈페이지를 실제 네비게이션하며 확정하고 .ZIP 템플릿으로 다운로드합니다.",
        "screen_attributes": {
            "max_viewport_pages": "실제 웹사이트 라이브 뷰포트 + 상단 고정 컨트롤 바",
            "snb_mode": "전체 화면 몰입을 위해 SNB 자동 접기 지원 (필요 시 1-Click 호출)",
            "long_text_policy": "실제 프로덕션 홈페이지와 동일한 인터랙티브 네비게이션 제공",
        },
        "lnb_items": [
            {
                "lnb_id": "lnb-live-site",
                "code": "5-1",
                "title_ko": "전체 샘플 홈페이지 라이브 네비게이션 (HOME ~ 05 진단)",
                "tooltip": "선택된 스타일과 레이아웃이 100% 반영된 샘플 홈페이지의 전체 서브페이지와 모달, 카탈로그를 실제로 탐색합니다.",
                "active_components": ["IC-01", "IC-02", "IC-03", "IC-04", "IC-05", "IC-06", "IC-07", "IC-08", "IC-09", "IC-10", "IC-11", "IC-12"],
            },
            {
                "lnb_id": "lnb-live-export",
                "code": "5-2",
                "title_ko": "템플릿 스타터 패키지(.ZIP) 다운로드 & REST API 명세",
                "tooltip": "design-tokens.css, design-layout.css, CI 가이드 문서, 샘플 HTML이 포함된 .ZIP 패키지를 다운로드하거나 REST API 엔드포인트를 확인합니다.",
                "active_components": ["IC-01", "IC-04"],
            },
        ],
    },
]

INFORMATION_COMPONENT_REGISTRY = [
    {
        "group_id": "GRP-01",
        "group_name_ko": "내비게이션 계층 (Navigation Tier)",
        "group_name_en": "Navigation Architecture Tier",
        "hierarchy_level": 1,
        "badge_color": "#4F46E5",
        "description": "웹사이트의 메뉴트리(최대 3-Depth)를 화면 상하좌우 슬롯(GNB·LNB·SNB·FNB)에 배치하여 사용자의 1-Click 이동을 책임지는 최상위 구조 계층입니다.",
        "components": [
            {
                "id": "IC-01",
                "name_ko": "GNB 글로벌 내비게이션 객체",
                "name_en": "Global Navigation Bar Object",
                "default_slot": "SLOT-GNB",
                "depth_role": "Depth 1 (전역 대메뉴 & 브랜드 CI)",
                "attributes": ["brand_logo_mark", "company_name", "depth1_menu_tabs", "global_cta_button"],
                "reflow_behavior": "상단 고정형(Top GNB), 통합 검색 마스트헤드(Mega Search), 투명 플로팅(Floating Glass), 또는 좌측 사이드바 통합형으로 레이아웃에 따라 변형됩니다.",
            },
            {
                "id": "IC-02",
                "name_ko": "LNB 로컬 내비게이션 객체",
                "name_en": "Local Navigation Bar Object",
                "default_slot": "SLOT-LNB",
                "depth_role": "Depth 2 (세부 카테고리 탭 & 빠른 액션 바)",
                "attributes": ["sub_category_tabs", "domain_quick_chips", "booking_step_bar", "chapter_anchor_dots"],
                "reflow_behavior": "GNB 하단 밀착 카테고리 바, 3-Step 빠른 예매 독바(메가박스형), 숙소 아이콘 필터 바(에어비앤비형), 우측 패럴랙스 챕터 닷(토스형)으로 재배치됩니다.",
            },
            {
                "id": "IC-03",
                "name_ko": "SNB 사이드 내비게이션 객체",
                "name_en": "Side Navigation & Filter Object",
                "default_slot": "SLOT-SNB",
                "depth_role": "Depth 3 (트리 메뉴 · 다중 속성 필터 · 보조 위젯)",
                "attributes": ["hierarchical_tree_menu", "multi_facet_checkboxes", "realtime_ticker_list", "sticky_calculator_panel"],
                "reflow_behavior": "좌측 고정 폴더 트리(노션형), 좌측 다중 속성 필터(무신사형), 좌측 오버레이 매물 패널(직방형), 우측 인터랙티브 지도/계산기(에어비앤비·원티드형)로 재배치됩니다.",
            },
            {
                "id": "IC-04",
                "name_ko": "FNB 푸터 내비게이션 객체",
                "name_en": "Footer Navigation & Sitemap Object",
                "default_slot": "SLOT-FNB",
                "depth_role": "Global Bottom (전체 사이트맵 & 기업 메타 정보)",
                "attributes": ["sitemap_columns", "company_legal_info", "system_status_badge", "copyright_line"],
                "reflow_behavior": "일반 스크롤 레이아웃에서는 하단 5열 사이트맵으로 배치되며, 풀스크린 맵/앱 쉘 레이아웃에서는 컴팩트 상태 바로 축약됩니다.",
            },
        ],
    },
    {
        "group_id": "GRP-02",
        "group_name_ko": "핵심 가치 제안 계층 (Value Proposition Tier)",
        "group_name_en": "Core Value & Brand Identity Tier",
        "hierarchy_level": 2,
        "badge_color": "#0EA5E9",
        "description": "방문 후 첫 3초 이내에 기업의 정체성(톤앤매너 슬로건)과 핵심 성과 지표를 전달하는 첫인상 계층입니다.",
        "components": [
            {
                "id": "IC-05",
                "name_ko": "히어로 비전 & 톤앤매너 슬로건 객체",
                "name_en": "Hero Vision & Tone Headline Object",
                "default_slot": "SLOT-HERO",
                "depth_role": "Primary Visual Anchor",
                "attributes": ["eyebrow_badge", "main_headline", "tone_sample_copy", "primary_secondary_cta"],
                "reflow_behavior": "2단 분할 히어로(표준형), 풀스크린 시네마틱 빌보드(OTT형), 중앙 알약 검색바(여행형), 초대형 타이포그래피 매니페스토(브랜드 원페이지형)로 변환됩니다.",
            },
            {
                "id": "IC-06",
                "name_ko": "핵심 성과 지표(KPI) & 신뢰 배지 객체",
                "name_en": "Key Metrics & Trust Proof Object",
                "default_slot": "SLOT-HERO-SUB",
                "depth_role": "Quantitative Trust Evidence",
                "attributes": ["live_snack_apps_12", "build_time_10s", "zero_install_100pct", "live_uptime_index"],
                "reflow_behavior": "히어로 하단 4열 지표 바, 포털 우측 실시간 가동률 지수 위젯(네이버형), 원페이지 챕터 03 초대형 카운터(토스형)로 재배치됩니다.",
            },
        ],
    },
    {
        "group_id": "GRP-03",
        "group_name_ko": "콘텐츠 & 카탈로그 계층 (Catalog & Service Tier)",
        "group_name_en": "Product Catalog & Core Engine Tier",
        "hierarchy_level": 3,
        "badge_color": "#10B981",
        "description": "실제 작동하는 12종 프로덕션 스낵 앱과 4대 핵심 기술 부품을 탐색·필터링·체험하는 핵심 비즈니스 계층입니다.",
        "components": [
            {
                "id": "IC-07",
                "name_ko": "12종 프로덕션 카탈로그 그리드 객체",
                "name_en": "12 Live Apps Catalog Grid Object",
                "default_slot": "SLOT-BODY-MAIN",
                "depth_role": "Core Service Item Collection",
                "attributes": ["app_cards_12", "category_badges", "live_launch_links", "ranking_or_price_tags"],
                "reflow_behavior": "레이아웃의 뷰 스타일에 따라 3열 표준 카드, 4열 랭킹 스토어 그리드, TOP 10 수평 캐러셀, 박스오피스 차트, 노션 DB 테이블/칸반, 지도 연동 스테이 카드로 즉시 변모합니다.",
            },
            {
                "id": "IC-08",
                "name_ko": "4대 코어 기술 엔진 탭 객체",
                "name_en": "4 Core Tech Engines Interactive Object",
                "default_slot": "SLOT-BODY-MAIN",
                "depth_role": "Technical Capability Explorer",
                "attributes": ["FOTOSTREAM", "VDSTREAM", "ShortURL_QR", "ProxyAuth_RBAC"],
                "reflow_behavior": "표준 2분할 인터랙티브 탭, SaaS 좌측 트리 채널, 에듀테크 기술스택 필터 칩, 이커머스 좌측 코어엔진 체크박스로 계층 재배치됩니다.",
            },
        ],
    },
    {
        "group_id": "GRP-04",
        "group_name_ko": "스토리 & 아키텍처 입증 계층 (Story & Proof Tier)",
        "group_name_en": "Architecture Story & Verification Tier",
        "hierarchy_level": 4,
        "badge_color": "#F59E0B",
        "description": "복잡한 AI 엔지니어링 원리를 쉬운 비유(6컷 카툰, 4단계 배선, DIKW 피라미드)로 설득하는 스토리텔링 계층입니다.",
        "components": [
            {
                "id": "IC-09",
                "name_ko": "6컷 카툰 스토리보드 & 4단계 배선 객체",
                "name_en": "6-Cut Cartoon & 4-Step Wiring Pipeline Object",
                "default_slot": "SLOT-BODY-SUB",
                "depth_role": "Visual Narrative & Step Guide",
                "attributes": ["cartoon_panels_6", "pipeline_4steps", "analogy_cards_cooking_lego_tent"],
                "reflow_behavior": "히어로 우측 파이프라인 카드, 포털 중앙 머리기사 피드, OTT 오리지널 에피소드 행, 원페이지 Chapter 02 스토리 섹션으로 재배치됩니다.",
            },
            {
                "id": "IC-10",
                "name_ko": "Wisdom 지식검증(DIKW) & 비교 명세 객체",
                "name_en": "Wisdom DIKW Pyramid & Spec Table Object",
                "default_slot": "SLOT-BODY-SUB",
                "depth_role": "Deep Architecture Proof",
                "attributes": ["dikw_4tiers", "dual_toc_verifier", "comparison_matrix_table"],
                "reflow_behavior": "다크 테마 아키텍처 섹션, SaaS 아키텍처 문서 탭, 포털 심층 분석 브리핑 모듈로 배치됩니다.",
            },
        ],
    },
    {
        "group_id": "GRP-05",
        "group_name_ko": "고객 전환 & 레이아웃 특화 뷰 계층 (Conversion & Feature Tier)",
        "group_name_en": "Lead Conversion & Characteristic Feature View Tier",
        "hierarchy_level": 5,
        "badge_color": "#EC4899",
        "description": "최종 비즈니스 문의 전환을 유도하고, 각 레이아웃만의 독창적인 시그니처 화면(Feature View)을 제공하는 계층입니다.",
        "components": [
            {
                "id": "IC-11",
                "name_ko": "3분 무료 진단 & 맞춤 제작 신청 폼 객체",
                "name_en": "3-Min Diagnosis & Order Form Object",
                "default_slot": "SLOT-CONVERSION",
                "depth_role": "Lead Capture & Instant Action",
                "attributes": ["biz_custom_order_form", "smart_church_support_form", "instant_feedback_modal"],
                "reflow_behavior": "하단 전환 섹션(표준형), 상단 밀착형 3-Step 빠른 예매 독바(예매형), 원페이지 마지막 초대장 카드(토스형)로 재배치됩니다.",
            },
            {
                "id": "IC-12",
                "name_ko": "레이아웃별 특징적 뷰 (Characteristic Feature View) 객체",
                "name_en": "Layout-Specific Signature Feature View Object",
                "default_slot": "SLOT-FEATURE",
                "depth_role": "Domain-Specific Signature UX",
                "attributes": ["feature_view_id(FV-00~FV-10)", "domain_custom_ia", "interactive_signature_widget"],
                "reflow_behavior": "선택된 레이아웃(00~10)의 도메인 특성에 맞춰 별도로 생성되는 시그니처 인터랙티브 뷰(예: 가격핀 맵 스플릿, 박스오피스 예매바, 3단 뉴스데스크, 연봉절감 계산기 등)입니다.",
            },
        ],
    },
]

LAYOUT_IA_REFLOW_MAP = {
    "layout-00-twayworks-standard": {
        "gnb_spec": "상단 고정 표준 GNB (브랜드 CI + 6대 멀티뷰 탭: HOME / 01 회사소개 / 02 쉬운원리 / 03 맞춤솔루션 / 04 작동사례 / 05 무료진단)",
        "lnb_spec": "서브페이지 내부 섹션 앵커 & 필 탭 (4대 엔진 탭 / 업종별 탭)",
        "snb_spec": "없음 (12컬럼 와이드 컨테이너 전폭 활용)",
        "fnb_spec": "하단 5열 기업 사이트맵 & 시스템 정상 가동 상태 배지 푸터",
        "reflow_summary_ko": "메뉴트리의 6대 최상위 메뉴가 상단 GNB에 1-Click 탭으로 수평 배치되며, 본문은 [IC-05 히어로 ➔ IC-09 6컷카툰 ➔ IC-08 4대엔진 ➔ IC-10 Wisdom ➔ IC-07 12종카탈로그 ➔ IC-11 무료진단폼] 순서로 표준 스토리텔링 계층 흐름을 따릅니다.",
        "slot_mapping": {
            "SLOT-GNB": ["IC-01"],
            "SLOT-LNB": ["IC-02"],
            "SLOT-SNB": [],
            "SLOT-HERO": ["IC-05", "IC-06", "IC-12"],
            "SLOT-BODY-MAIN": ["IC-09", "IC-08", "IC-10", "IC-07"],
            "SLOT-CONVERSION": ["IC-11"],
            "SLOT-FNB": ["IC-04"],
        },
        "characteristic_view": {
            "id": "FV-00",
            "title_ko": "4단계 실전 Vibe-to-App 배선 파이프라인 쇼케이스 뷰",
            "subtitle_ko": "더웨이웍스 표준 기업형 시그니처 뷰",
            "ia_rationale": "방문자가 첫 화면(Hero)에서 '말 한마디(Vibe)가 कैसे 실제 앱이 되는지' 4단계 아키텍처 흐름을 즉시 이해하도록 히어로 우측 슬롯에 배치한 특화 뷰입니다.",
            "key_elements": ["Step 1. Vibe 입력", "Step 2. VAIYER 지능형 배선", "Step 3. Wisdom 교차검증", "Step 4. 10초 스낵앱 개통"],
            "preview_type": "pipeline-4step",
        },
    },
    "layout-01-ecommerce-grid": {
        "gnb_spec": "상단 통합 키워드 검색바 + 장바구니/마이페이지 유틸 헤더",
        "lnb_spec": "1차 도메인 카테고리 멀티탭 바 (전체 / 사진·미디어 / 영상·스트리밍 / 문서·자동화 / 공동체)",
        "snb_spec": "좌측 고정 다중 속성(Facet) 체크박스 필터 사이드바 (260px)",
        "fnb_spec": "커머스 고객센터 & 입점/제휴 안내 푸터",
        "reflow_summary_ko": "표준 히어로(IC-05)와 긴 스토리(IC-09)를 축소하고, 목적 우선 원칙에 따라 [IC-07 12종 스낵앱 카탈로그]를 최상단 4열 상품 그리드로 승격 배치합니다. 좌측 SNB 슬롯에는 [IC-03 다중 속성 필터]와 [IC-08 코어엔진 필터]가 결합 배치됩니다.",
        "slot_mapping": {
            "SLOT-GNB": ["IC-01"],
            "SLOT-LNB": ["IC-02"],
            "SLOT-SNB": ["IC-03", "IC-08"],
            "SLOT-HERO": ["IC-06"],
            "SLOT-BODY-MAIN": ["IC-12", "IC-07"],
            "SLOT-CONVERSION": ["IC-11"],
            "SLOT-FNB": ["IC-04"],
        },
        "characteristic_view": {
            "id": "FV-01",
            "title_ko": "실시간 다중 속성 필터 + 4열 랭킹 스토어 그리드 뷰",
            "subtitle_ko": "무신사·29CM 스타일 이커머스 큐레이션 특화 뷰",
            "ia_rationale": "사용자가 원하는 기능의 앱을 쇼핑하듯 즉시 필터링(타깃×코어부품×정렬)하고 랭킹 배지(RANK 01~12)와 찜하기(♥)로 비교 선택할 수 있는 고밀도 탐색 구조입니다.",
            "key_elements": ["좌측 다중 체크박스 필터(SNB)", "인기순/빠른개통순 정렬 바", "RANK 1~12 상품형 썸네일 카드", "즉시 장바구니/개통 담기"],
            "preview_type": "ecommerce-store-grid",
        },
    },
    "layout-02-ott-carousel": {
        "gnb_spec": "상단 투명 그라데이션 오버레이 미니멀 GNB (홈 / 시리즈 / 오리지널 / 내가 찜한 콘텐츠)",
        "lnb_spec": "다크 플로팅 장르 & 분위기 필터 칩 바",
        "snb_spec": "없음 (100% 풀블리드 시네마틱 캔버스)",
        "fnb_spec": "다크 시네마 미디어 라이선스 & 디바이스 지원 안내 푸터",
        "reflow_summary_ko": "[IC-05 히어로 객체]가 화면 상단 70%를 채우는 풀스크린 오리지널 빌보드로 확장되며, 하위 콘텐츠인 [IC-07 카탈로그], [IC-08 코어엔진], [IC-09 카툰스토리]가 수직 섹션 대신 3개의 수평 스크롤 캐러셀 행(Row 1~3)으로 재배치됩니다.",
        "slot_mapping": {
            "SLOT-GNB": ["IC-01"],
            "SLOT-LNB": ["IC-02"],
            "SLOT-SNB": [],
            "SLOT-HERO": ["IC-05", "IC-12"],
            "SLOT-BODY-MAIN": ["IC-07", "IC-08", "IC-09"],
            "SLOT-CONVERSION": ["IC-11"],
            "SLOT-FNB": ["IC-04"],
        },
        "characteristic_view": {
            "id": "FV-02",
            "title_ko": "풀스크린 오리지널 빌보드 + TOP 10 아웃라인 수평 캐러셀 뷰",
            "subtitle_ko": "넷플릭스·디즈니+ 스타일 미디어 스트리밍 특화 뷰",
            "ia_rationale": "시각적 몰입감을 극대화하기 위해 여백과 박스 테두리를 없애고, 대형 영상 프리뷰 빌보드와 좌우 슬라이딩 포스터 행(Row)으로 정보를 탐색하게 합니다.",
            "key_elements": ["98% 일치 오리지널 빌보드 배너", "▶ 즉시 재생 / + 내 리스트 버튼", "오늘 대한민국 TOP 10 대형 숫자 카드", "테마별 수평 스크롤 캐러셀"],
            "preview_type": "ott-billboard-carousel",
        },
    },
    "layout-03-entertainment-booking": {
        "gnb_spec": "상단 엔터테인먼트 GNB (박스오피스 / 빠른예매 / 특별관 / 스토어)",
        "lnb_spec": "헤더 직결형 3-Step 빠른 예매/개통 고정 독바 (①업종선택 ➔ ②스낵앱선택 ➔ ③시간/즉시개통)",
        "snb_spec": "우측 실시간 예매율 차트 & 혜택 배너 모듈",
        "fnb_spec": "전국 지점/클라우드 리전 안내 및 고객센터 푸터",
        "reflow_summary_ko": "일반 레이아웃에서 페이지 맨 아래에 있던 전환 컴포넌트 [IC-11 신청/예매 폼]이 상단 LNB 위치의 '3-Step 빠른 예매 고정 바'로 최상단 승격 배치되며, [IC-07 카탈로그]는 1~8위 박스오피스 포스터 차트로 재배치됩니다.",
        "slot_mapping": {
            "SLOT-GNB": ["IC-01"],
            "SLOT-LNB": ["IC-11", "IC-12"],
            "SLOT-SNB": ["IC-06"],
            "SLOT-HERO": ["IC-05"],
            "SLOT-BODY-MAIN": ["IC-07", "IC-09"],
            "SLOT-CONVERSION": ["IC-11"],
            "SLOT-FNB": ["IC-04"],
        },
        "characteristic_view": {
            "id": "FV-03",
            "title_ko": "상단 밀착형 3-Step 빠른 예매 독바 + 박스오피스 랭킹 포스터 뷰",
            "subtitle_ko": "메가박스·CGV·인터파크 스타일 티켓 예매 특화 뷰",
            "ia_rationale": "예매·예약이 최우선 목적인 사용자를 위해 스크롤 없이 첫 화면 상단 바에서 3번의 클릭만으로 원하는 솔루션을 즉시 발권·개통할 수 있도록 설계했습니다.",
            "key_elements": ["Step1 업종 × Step2 앱 × Step3 즉시발권 바", "박스오피스 1~8위 포스터 그리드", "실시간 예매율(%) & 평점 배지", "1-Click 티켓 발권 모달"],
            "preview_type": "booking-quickbar-chart",
        },
    },
    "layout-04-portal-3col-news": {
        "gnb_spec": "중앙 대형 통합 검색창 마스트헤드 + 실시간 급상승 키워드 티커",
        "lnb_spec": "언론/지식 섹션 구분 탭바 (전체브리핑 / AI엔지니어링 / 스낵앱실증 / 비즈인사이트 / 오피니언)",
        "snb_spec": "좌측 실시간 속보 타임라인 피드(230px) + 우측 시스템 가동률 지수·트렌드 위젯(290px)",
        "fnb_spec": "포털 약관·편집규약·제휴안내 표준 푸터",
        "reflow_summary_ko": "단일 컬럼 흐름을 해체하고 화면을 3단 비대칭 신문 편집 그리드(좌 230px : 중 1fr : 우 290px)로 분할합니다. 좌측 SNB에 [IC-03 속보 피드], 중앙 메인에 [IC-09 머리기사]와 [IC-07 기사형 리스트], 우측 위젯 슬롯에 [IC-06 실시간 KPI 지수]와 [IC-10 지식브리핑]을 동시 배치합니다.",
        "slot_mapping": {
            "SLOT-GNB": ["IC-01"],
            "SLOT-LNB": ["IC-02"],
            "SLOT-SNB": ["IC-03", "IC-06", "IC-10"],
            "SLOT-HERO": ["IC-12"],
            "SLOT-BODY-MAIN": ["IC-09", "IC-07", "IC-08"],
            "SLOT-CONVERSION": ["IC-11"],
            "SLOT-FNB": ["IC-04"],
        },
        "characteristic_view": {
            "id": "FV-04",
            "title_ko": "3단 신문 편집 데스크 (좌측 속보 · 중앙 헤드라인 · 우측 실시간 지수) 뷰",
            "subtitle_ko": "네이버 뉴스·블룸버그 스타일 미디어 포털 특화 뷰",
            "ia_rationale": "방대한 기술 아티클과 12종 앱 소식, 실시간 서버/AI 엔진 지표를 한 화면에서 스크롤 없이 종합 브리핑받을 수 있는 고밀도 정보 구조입니다.",
            "key_elements": ["통합 검색바 & 실시간 급상승 티커", "좌측 타임라인 속보 리스트", "중앙 톱 헤드라인 & 썸네일 기사 피드", "우측 VAIYER/Wisdom 실시간 지수 위젯"],
            "preview_type": "portal-3col-desk",
        },
    },
    "layout-05-saas-workspace-split": {
        "gnb_spec": "상단 슬림 워크스페이스 브레드크럼(Breadcrumb) & ⌘K 명령 팔레트 바",
        "lnb_spec": "문서 내부 데이터베이스 뷰 전환 탭 (📋 테이블 뷰 / 🗂️ 칸반 보드 뷰 / 📄 아키텍처 문서 뷰)",
        "snb_spec": "좌측 고정 계층형 워크스페이스 폴더 & 채널 트리 사이드바 (265px)",
        "fnb_spec": "하단 슬림 워크스페이스 동기화 상태 바",
        "reflow_summary_ko": "상단 GNB를 슬림 브레드크럼으로 최소화하고, 내비게이션의 중심을 좌측 고정 [IC-03 SNB 계층형 폴더 트리]로 이동합니다. 우측 메인 워크스페이스에서는 LNB 뷰 탭에 따라 [IC-07 카탈로그]와 [IC-08·10 기술 명세]가 테이블·칸반·문서 형태로 즉시 전환됩니다.",
        "slot_mapping": {
            "SLOT-GNB": ["IC-01"],
            "SLOT-LNB": ["IC-02"],
            "SLOT-SNB": ["IC-03", "IC-08"],
            "SLOT-HERO": ["IC-05"],
            "SLOT-BODY-MAIN": ["IC-12", "IC-07", "IC-10"],
            "SLOT-CONVERSION": ["IC-11"],
            "SLOT-FNB": ["IC-04"],
        },
        "characteristic_view": {
            "id": "FV-05",
            "title_ko": "좌측 폴더 트리(SNB) + 우측 멀티뷰 데이터베이스(테이블·칸반·문서) 워크스페이스 뷰",
            "subtitle_ko": "노션(Notion)·슬랙·리니어 스타일 B2B SaaS 앱 쉘 특화 뷰",
            "ia_rationale": "단순 홍보 페이지가 아니라 실제 업무용 클라우드 소프트웨어처럼 좌측 트리로 프로젝트를 탐색하고 우측에서 데이터를 다각도(표/보드/문서)로 조작하는 UX입니다.",
            "key_elements": ["좌측 고정 워크스페이스 트리 메뉴", "상단 브레드크럼 & ⌘K 빠른 검색", "테이블 / 칸반 보드 / 아키텍처 문서 1-Click 뷰 스위처", "실시간 상태 프로퍼티 배지"],
            "preview_type": "saas-tree-workspace",
        },
    },
    "layout-06-travel-map-split": {
        "gnb_spec": "상단 중앙 알약형(Pill) 3단 조건 검색 위젯 헤더 (어디로 / 체크인·일정 / 인원·규모)",
        "lnb_spec": "가로 스크롤 공간·테마 아이콘 카테고리 필터 바",
        "snb_spec": "우측 고정 인터랙티브 가격 마커(₩) 지도 캔버스 (48% 폭 Sticky)",
        "fnb_spec": "호스트 지원 & 글로벌 로컬 공간 가이드 푸터",
        "reflow_summary_ko": "[IC-01 GNB]에 알약형 조건 검색기가 통합되고, 본문 영역이 좌우 50:50 스플릿 뷰로 분할됩니다. 좌측에는 [IC-07 스테이형 카드 그리드]가 배치되고, 우측 SNB 슬롯에는 카드와 실시간 연동되는 [IC-12 인터랙티브 가격 핀 지도]가 고정 배치됩니다.",
        "slot_mapping": {
            "SLOT-GNB": ["IC-01"],
            "SLOT-LNB": ["IC-02"],
            "SLOT-SNB": ["IC-12"],
            "SLOT-HERO": ["IC-05"],
            "SLOT-BODY-MAIN": ["IC-07"],
            "SLOT-CONVERSION": ["IC-11"],
            "SLOT-FNB": ["IC-04"],
        },
        "characteristic_view": {
            "id": "FV-06",
            "title_ko": "알약형 조건 검색 바 + 좌측 스테이 카드 × 우측 가격 핀(₩) 맵 50:50 스플릿 뷰",
            "subtitle_ko": "에어비앤비·야놀자·여기어때 스타일 공간·여행 플랫폼 특화 뷰",
            "ia_rationale": "목록 탐색과 위치/비용 비교를 동시에 수행해야 하는 사용자를 위해, 좌측 카드를 호버/클릭하면 우측 지도의 가격 핀(₩0 무료~프리미엄)이 즉시 하이라이트되도록 연동했습니다.",
            "key_elements": ["어디로·일정·규모 알약형 검색바", "테마 아이콘 LNB 필터", "좌측 슈퍼호스트 배지 스테이 카드", "우측 실시간 연동 가격 핀(₩) 지도"],
            "preview_type": "travel-map-split",
        },
    },
    "layout-07-edutech-curation-grid": {
        "gnb_spec": "카테고리 드롭다운 GNB + 과정/스킬 키워드 검색창 + 대시보드 버튼",
        "lnb_spec": "난이도(입문/초급/실전) & 핵심 기술스택(#VAIYER #FOTOSTREAM #Wisdom) 태그 필터 바",
        "snb_spec": "없음 (4열 와이드 강의 큐레이션 그리드)",
        "fnb_spec": "수료증 검증·멘토링 신청·학습 커뮤니티 푸터",
        "reflow_summary_ko": "[IC-05 히어로]가 와이드 프로모션 배너 슬라이더로 변환되며, [IC-02 LNB 스킬 태그 바] 아래로 [IC-07 카탈로그]와 [IC-08 코어엔진]이 '커리큘럼·난이도·수강평점(★5.0)' 속성을 가진 4열 클래스 카드 그리드로 재배치됩니다.",
        "slot_mapping": {
            "SLOT-GNB": ["IC-01"],
            "SLOT-LNB": ["IC-02", "IC-08"],
            "SLOT-SNB": [],
            "SLOT-HERO": ["IC-05", "IC-12"],
            "SLOT-BODY-MAIN": ["IC-07", "IC-09"],
            "SLOT-CONVERSION": ["IC-11"],
            "SLOT-FNB": ["IC-04"],
        },
        "characteristic_view": {
            "id": "FV-07",
            "title_ko": "프로모션 로드맵 배너 + 기술스택 태그 필터 & 수강평점(★5.0) 클래스 큐레이션 뷰",
            "subtitle_ko": "인프런·클래스101·패스트캠퍼스 스타일 에듀테크 특화 뷰",
            "ia_rationale": "학습자와 도입 담당자가 자신의 수준(입문~실전)과 필요한 기술 스택 태그를 클릭해 단계별 마스터 클래스 형태로 솔루션을 습득·도입하도록 유도합니다.",
            "key_elements": ["와이드 부트캠프 프로모션 배너", "난이도·기술스택 해시태그 필터", "★5.0 수강평점 & 커리큘럼 수 배지", "수강/실습 즉시 시작 CTA"],
            "preview_type": "edutech-course-grid",
        },
    },
    "layout-08-recruiting-career-feed": {
        "gnb_spec": "직군·직무 카테고리 GNB + AI 부서원 채용 검색 헤더",
        "lnb_spec": "직무 태그 필터 바 (전체 / 미디어자동화 / 영상파이프라인 / 지식검증 / 고객응대)",
        "snb_spec": "우측 고정 실시간 외주비·인건비 절감 시뮬레이터 위젯 (340px Sticky)",
        "fnb_spec": "기업 채용 제휴 & AI 디지털 부서원 도입 보증 푸터",
        "reflow_summary_ko": "[IC-07 12종 스낵앱]을 '즉시 채용 가능한 AI 디지털 부서원 포지션 카드(매칭률 99%·도입보상금)'로 재정의하여 좌측 메인(1fr)에 배치하고, 우측 SNB 슬롯에는 [IC-12 실시간 비용 절감 계산기]와 [IC-10 직무 역량 검증표]를 고정 배치합니다.",
        "slot_mapping": {
            "SLOT-GNB": ["IC-01"],
            "SLOT-LNB": ["IC-02"],
            "SLOT-SNB": ["IC-12", "IC-06"],
            "SLOT-HERO": ["IC-05"],
            "SLOT-BODY-MAIN": ["IC-07", "IC-10"],
            "SLOT-CONVERSION": ["IC-11"],
            "SLOT-FNB": ["IC-04"],
        },
        "characteristic_view": {
            "id": "FV-08",
            "title_ko": "AI 디지털 부서원 포지션 매칭 피드 + 우측 실시간 비용절감 계산기 스플릿 뷰",
            "subtitle_ko": "원티드(Wanted)·리멤버·링크드인 스타일 채용·HR 특화 뷰",
            "ia_rationale": "1인 기업이나 조직이 '앱 구매'가 아닌 '유능한 AI 전담 직원 채용' 관점으로 솔루션을 평가하고, 우측 계산기로 연간 절감액을 즉시 시뮬레이션하도록 설계했습니다.",
            "key_elements": ["직무별 태그 필터 LNB", "AI 부서원 포지션 카드 (매칭률 99%)", "우측 인건비/외주비 절감 슬라이더 계산기", "1-Click 즉시 영입(개통) 지원"],
            "preview_type": "recruiting-calculator-split",
        },
    },
    "layout-09-proptech-fullscreen-map": {
        "gnb_spec": "지도 상단 반투명 글래스모피즘 플로팅 헤더",
        "lnb_spec": "매물/솔루션 유형 탭 (전체단지 / 미디어센터 / 스트리밍타워 / 오피스자동화 / 커뮤니티홀)",
        "snb_spec": "좌측 플로팅 슬라이드 오버레이 매물 상세 브리핑 패널 (380px)",
        "fnb_spec": "지도 하단 플로팅 축척·클러스터 범례 미니 바",
        "reflow_summary_ko": "일반적인 페이지 스크롤을 제거하고 화면 100%를 [IC-12 풀스크린 인터랙티브 디지털 입지 지도]로 채웁니다. [IC-01·02 헤더]는 지도 상단에 반투명 플로팅 배치되며, [IC-07 카탈로그]는 좌측 오버레이 슬라이드 패널(SNB) 안에 리스트업됩니다.",
        "slot_mapping": {
            "SLOT-GNB": ["IC-01"],
            "SLOT-LNB": ["IC-02"],
            "SLOT-SNB": ["IC-03", "IC-07"],
            "SLOT-HERO": [],
            "SLOT-BODY-MAIN": ["IC-12"],
            "SLOT-CONVERSION": ["IC-11"],
            "SLOT-FNB": ["IC-04"],
        },
        "characteristic_view": {
            "id": "FV-09",
            "title_ko": "100% 풀스크린 클러스터 핀 지도 + 좌측 오버레이 매물 브리핑 패널 뷰",
            "subtitle_ko": "직방·다방·호갱노노 스타일 프롭테크·GIS 특화 뷰",
            "ia_rationale": "공간·지역 기반 데이터를 탐색할 때 지도를 중심 캔버스로 두고, 단지 클러스터 원형 핀을 클릭하면 좌측 오버레이 패널에서 상세 스펙과 시세/효율을 브리핑합니다.",
            "key_elements": ["100% 풀스크린 디지털 입지 맵", "상단 반투명 글래스 플로팅 GNB/LNB", "클러스터 원형 핀 (12개 단지)", "좌측 오버레이 상세 브리핑 드로어"],
            "preview_type": "proptech-fullscreen-map",
        },
    },
    "layout-10-brand-onepage-story": {
        "gnb_spec": "초미니멀 글래스 플로팅 헤더 (좌측 로고 + 우측 챕터 앵커 & 즉시 시작 CTA)",
        "lnb_spec": "우측 고정 패럴랙스 챕터 내비게이션 닷 (Chapter 01 비전 ➔ 02 원리 ➔ 03 임팩트 ➔ 04 초대)",
        "snb_spec": "없음 (단일 컬럼 센터 포커스 타이포그래피 캔버스)",
        "fnb_spec": "미니멀 브랜드 매니페스토 & 크레딧 푸터",
        "reflow_summary_ko": "복잡한 다중 컬럼과 사이드바를 모두 제거하고, 오직 메시지에만 집중하는 단일 컬럼 풀뷰포트(Full-Viewport) 서사 구조로 재배치합니다. [Chapter 01: IC-05 초대형 슬로건 ➔ Chapter 02: IC-09 핵심 원리 ➔ Chapter 03: IC-06 압도적 숫자 증명 ➔ Chapter 04: IC-07·11 최종 초대]로 흐릅니다.",
        "slot_mapping": {
            "SLOT-GNB": ["IC-01"],
            "SLOT-LNB": ["IC-02"],
            "SLOT-SNB": [],
            "SLOT-HERO": ["IC-05", "IC-12"],
            "SLOT-BODY-MAIN": ["IC-09", "IC-06", "IC-07"],
            "SLOT-CONVERSION": ["IC-11"],
            "SLOT-FNB": ["IC-04"],
        },
        "characteristic_view": {
            "id": "FV-10",
            "title_ko": "초대형 타이포그래피 매니페스토 + Chapter 01~04 원페이지 패럴랙스 스토리 뷰",
            "subtitle_ko": "토스(Toss)·애플(Apple) 스타일 하이엔드 브랜드 랜딩 특화 뷰",
            "ia_rationale": "군더더기 없는 여백(Whitespace)과 강렬한 한 줄 카피, 스크롤에 반응하는 챕터별 스토리텔링으로 브랜드의 철학과 제품 혁신성을 가장 세련되게 각인시킵니다.",
            "key_elements": ["초미니멀 글래스 헤더 & 챕터 앵커", "Chapter 01 초대형 그라데이션 헤드라인", "Chapter 02~03 핵심 원리 & 대형 지표 카운터", "Chapter 04 원클릭 시작 초대장"],
            "preview_type": "brand-onepage-story",
        },
    },
}


def enrich_layout_taxonomy(l_item: dict) -> dict:
    lid = l_item.get("id", "")
    if lid in LAYOUT_TAXONOMY_MAP:
        mp_type, mp_ko, vs_type, vs_ko = LAYOUT_TAXONOMY_MAP[lid]
        l_item.setdefault("menu_placement_type", mp_type)
        l_item.setdefault("menu_placement_ko", mp_ko)
        l_item.setdefault("view_style_type", vs_type)
        l_item.setdefault("view_style_ko", vs_ko)
    else:
        arch = (l_item.get("live_blueprint") or {}).get("archetype", "grid-sidebar-right")
        if arch == "sidebar-left-grid":
            l_item.setdefault("menu_placement_type", "left-sidebar")
            l_item.setdefault("menu_placement_ko", "좌측 필터/메뉴 사이드바 + 상단 헤더")
            l_item.setdefault("view_style_type", "card-grid")
            l_item.setdefault("view_style_ko", "좌측 사이드바 + 우측 카드 그리드 뷰")
        elif arch == "three-column-hub":
            l_item.setdefault("menu_placement_type", "mega-search")
            l_item.setdefault("menu_placement_ko", "상단 통합 검색 & 멀티 섹션 헤더")
            l_item.setdefault("view_style_type", "three-col-feed")
            l_item.setdefault("view_style_ko", "3단 컬럼 허브 & 피드 뷰")
        elif arch == "split-interactive-widget":
            l_item.setdefault("menu_placement_type", "quick-action-bar")
            l_item.setdefault("menu_placement_ko", "상단 빠른 필터 & 액션 헤더")
            l_item.setdefault("view_style_type", "split-view")
            l_item.setdefault("view_style_ko", "좌우 50:50 인터랙티브 스플릿 뷰")
        elif arch == "masonry-pinboard":
            l_item.setdefault("menu_placement_type", "mega-search")
            l_item.setdefault("menu_placement_ko", "비주얼 태그 필터 & 검색 헤더")
            l_item.setdefault("view_style_type", "card-grid")
            l_item.setdefault("view_style_ko", "비주얼 메이슨리 핀보드 그리드 뷰")
        else:
            l_item.setdefault("menu_placement_type", "top-gnb")
            l_item.setdefault("menu_placement_ko", l_item.get("head_spec", {}).get("structure_name", "상단 도메인 맞춤 GNB 헤더"))
            l_item.setdefault("view_style_type", "card-grid")
            l_item.setdefault("view_style_ko", l_item.get("body_spec", {}).get("structure_name", "큐레이션 카드 그리드 & 위젯 뷰"))

    if lid in LAYOUT_IA_REFLOW_MAP:
        reflow_info = LAYOUT_IA_REFLOW_MAP[lid]
        l_item["ia_reflow"] = reflow_info
        l_item["characteristic_view"] = reflow_info["characteristic_view"]
    else:
        default_reflow = {
            "gnb_spec": l_item.get("head_spec", {}).get("structure_name", "상단 도메인 맞춤 GNB"),
            "lnb_spec": "도메인 카테고리 탭 및 빠른 필터 바",
            "snb_spec": "좌/우측 컨텍스트 보조 위젯 패널",
            "fnb_spec": "하단 표준 사이트맵 푸터",
            "reflow_summary_ko": f"{l_item.get('name_ko', '커스텀 레이아웃')}의 메뉴트리 구조에 맞춰 상단 GNB/LNB에 핵심 탐색 메뉴를 배치하고 본문 슬롯에 카탈로그(IC-07)와 특화 위젯(IC-12)을 계층적으로 배치합니다.",
            "slot_mapping": {
                "SLOT-GNB": ["IC-01"],
                "SLOT-LNB": ["IC-02"],
                "SLOT-SNB": ["IC-03"],
                "SLOT-HERO": ["IC-05", "IC-06"],
                "SLOT-BODY-MAIN": ["IC-12", "IC-07", "IC-08"],
                "SLOT-CONVERSION": ["IC-11"],
                "SLOT-FNB": ["IC-04"],
            },
            "characteristic_view": {
                "id": f"FV-{l_item.get('order', 99):02d}",
                "title_ko": f"{l_item.get('domain_ko', '맞춤 도메인')} 전용 특화 인터랙티브 뷰",
                "subtitle_ko": l_item.get("name_ko", "Custom Domain Feature View"),
                "ia_rationale": l_item.get("sample_application_note", "도메인 특성에 최적화된 맞춤형 정보구조 뷰입니다."),
                "key_elements": l_item.get("body_spec", {}).get("elements", ["맞춤 헤더", "핵심 카탈로그 그리드", "전환 위젯"]),
                "preview_type": "custom-blueprint",
            },
        }
        l_item.setdefault("ia_reflow", default_reflow)
        l_item.setdefault("characteristic_view", default_reflow["characteristic_view"])

    return l_item


enrich_layout_taxonomy(TWAYWORKS_STANDARD_LAYOUT)


def load_layouts_data() -> dict:
    if not LAYOUTS_FILE.exists():
        return {"project": "Website Layouts Helper", "version": "4.0.0", "total_layouts": 0, "layouts": []}
    with open(LAYOUTS_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    for l_item in data.get("layouts", []):
        enrich_layout_taxonomy(l_item)
    return data


def save_layouts_data(data: dict) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    layouts = data.get("layouts", [])
    data["total_layouts"] = len(layouts)
    data["updated_at"] = datetime.now().isoformat()
    with open(LAYOUTS_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def load_twayworks_profile() -> dict:
    if not TWAYWORKS_FILE.exists():
        return {"company_id": "twayworks", "company_name": "TheWayWorks"}
    with open(TWAYWORKS_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def slugify_en(text: str, prefix: str = "custom") -> str:
    cleaned = re.sub(r"[^a-zA-Z0-9]+", "-", (text or "").lower()).strip("-")
    return cleaned[:32] if cleaned else prefix


def resolve_style_by_id(style_id: str) -> dict:
    if style_id in ("style-00-twayworks-original", "0", "00", "twayworks", "original"):
        return TWAYWORKS_ORIGINAL_STYLE

    data = load_styles_data()
    styles = data.get("styles", [])
    for s in styles:
        if s["id"] == style_id:
            return s
        if s["id"].startswith(style_id) or str(s.get("order")) == style_id.lstrip("0"):
            return s

    raise HTTPException(status_code=404, detail=f"Style '{style_id}' not found.")


def resolve_layout_by_id(layout_id: str) -> dict:
    if not layout_id or layout_id in ("layout-00-twayworks-standard", "0", "00", "standard", "default", "twayworks"):
        return TWAYWORKS_STANDARD_LAYOUT

    data = load_layouts_data()
    layouts = data.get("layouts", [])
    for l_item in layouts:
        if l_item["id"] == layout_id:
            return l_item
        if l_item["id"].startswith(layout_id) or str(l_item.get("order")) == layout_id.lstrip("0"):
            return l_item

    raise HTTPException(status_code=404, detail=f"Layout '{layout_id}' not found.")


# =====================================================================
# Gemini LLM AI Generator (with Smart Fallback)
# =====================================================================
def get_gemini_config() -> dict:
    api_key = os.getenv("GEMINI_API_KEY", "").strip()
    model_name = os.getenv("GEMINI_MODEL_NAME", "gemini-2.5-flash").strip() or "gemini-2.5-flash"
    return {
        "configured": bool(api_key),
        "api_key": api_key,
        "model_name": model_name,
    }


def extract_json_from_llm_text(raw_text: str) -> dict:
    text = (raw_text or "").strip()
    if text.startswith("```"):
        text = re.sub(r"^```(?:json)?\s*", "", text)
        text = re.sub(r"\s*```$", "", text)
    start = text.find("{")
    end = text.rfind("}")
    if start != -1 and end != -1 and end > start:
        text = text[start : end + 1]
    return json.loads(text)


def call_gemini_json(system_prompt: str, user_prompt: str) -> Optional[dict]:
    cfg = get_gemini_config()
    if not cfg["configured"]:
        return None

    try:
        from google import genai
        from google.genai import types

        client = genai.Client(api_key=cfg["api_key"])
        candidate_models = [cfg["model_name"], "gemini-2.5-flash", "gemini-2.0-flash"]
        seen = set()
        for m_name in candidate_models:
            if not m_name or m_name in seen:
                continue
            seen.add(m_name)
            try:
                resp = client.models.generate_content(
                    model=m_name,
                    contents=f"{system_prompt}\n\n[사용자 요청 정보]\n{user_prompt}",
                    config=types.GenerateContentConfig(
                        response_mime_type="application/json",
                        temperature=0.7,
                    ),
                )
                if resp and resp.text:
                    return extract_json_from_llm_text(resp.text)
            except Exception as inner_e:
                print(f"[Gemini Attempt Warn] model={m_name}: {inner_e}")
                continue
    except Exception as e:
        print(f"[Gemini Client Error]: {e}")
    return None


def generate_style_with_gemini(prompt: str, name_ko_hint: Optional[str] = None) -> dict:
    data = load_styles_data()
    existing_styles = data.get("styles", [])
    next_order = max([s.get("order", 0) for s in existing_styles] + [10]) + 1

    system_prompt = f"""당신은 최고 수준의 브랜드 CI 및 웹 디자인 시스템 아키텍트입니다.
사용자가 입력한 디자인 스타일 설명을 바탕으로, 아래 JSON 스키마를 100% 준수하는 신규 웹 디자인 스타일 메타데이터를 생성하세요.
반드시 순수 JSON 객체만 반환하세요.

[필수 JSON 스키마]
{{
  "name_ko": "직관적이고 매력적인 한글 스타일명 (예: 사이버펑크 네온 펄스)",
  "name_en": "영문 스타일명 (예: Cyberpunk Neon Pulse)",
  "tagline": "스타일의 핵심 가치와 분위기를 한 줄로 정의하는 문장",
  "target_businesses": ["추천 비즈니스/업종 1", "업종 2", "업종 3", "업종 4"],
  "template_definition": {{
    "layout_structure": "어울리는 그리드 및 섹션 여백 특징 설명",
    "hero_style": "히어로 영역의 시각적 연출 설명",
    "ui_components": {{
      "border_radius": "예: 12px (CSS 적용 가능한 단위 포함)",
      "border_style": "예: 1px solid #334155 (실제 유효한 CSS border 값)",
      "shadow_style": "예: 0 10px 30px rgba(0, 0, 0, 0.25) (유효한 CSS box-shadow 값)",
      "interaction": "버튼 및 카드 호버 애니메이션 설명"
    }},
    "recommended_sections": ["Hero: ...", "Section 2: ...", "Section 3: ...", "Section 4: ..."]
  }},
  "identity": {{
    "adjectives": ["형용사1", "형용사2", "형용사3", "형용사4", "형용사5"],
    "adjectives_en": ["Adj1", "Adj2", "Adj3", "Adj4", "Adj5"],
    "verbs": ["동사1", "동사2", "동사3", "동사4"],
    "verbs_en": ["Verb1", "Verb2", "Verb3", "Verb4"],
    "tone_and_manner": "커뮤니케이션 어조 및 카피라이팅 가이드 (2문장 이내)",
    "sample_copy": "이 스타일의 톤앤매너를 보여주는 매력적인 대표 광고 슬로건 1문장"
  }},
  "colors": {{
    "primary": "#HEX6자리 (브랜드 메인 컬러)",
    "secondary": "#HEX6자리 (보조 포인트 컬러)",
    "accent": "#HEX6자리 (강조 하이라이트 컬러)",
    "background": "#HEX6자리 (페이지 전체 배경색)",
    "surface": "#HEX6자리 (카드/섹션 표면 배경색)",
    "text_main": "#HEX6자리 (본문 주 텍스트 색상 - background와 대비가 높아 가독성이 완벽해야 함)",
    "text_muted": "#HEX6자리 (보조 텍스트 색상)",
    "border": "#HEX6자리 (테두리 색상)",
    "color_scheme": "light 또는 dark"
  }},
  "typography": {{
    "heading_font": "'Plus Jakarta Sans', 'Space Grotesk', 'Playfair Display', 'Cormorant Garamond', 'Gowun Batang', 'JetBrains Mono', 'Pretendard Variable' 중 어울리는 조합",
    "body_font": "'Pretendard Variable', Pretendard, sans-serif",
    "accent_font": "'JetBrains Mono', monospace",
    "heading_weight": "700 또는 800 또는 600",
    "body_weight": "400 또는 500",
    "letter_spacing": "-0.02em",
    "line_height": "1.65"
  }}
}}"""

    user_req = f"요청 설명: {prompt}"
    if name_ko_hint:
        user_req += f"\n희망 스타일명 힌트: {name_ko_hint}"

    ai_obj = call_gemini_json(system_prompt, user_req)
    used_source = "gemini-ai"

    if not ai_obj or "colors" not in ai_obj:
        used_source = "smart-fallback"
        is_dark = any(k in prompt.lower() for k in ["다크", "dark", "네온", "사이버", "블랙", "밤", "우주", "게이밍"])
        ai_obj = {
            "name_ko": name_ko_hint or f"AI 커스텀 스타일 #{next_order}",
            "name_en": f"AI Custom Style {next_order}",
            "tagline": f"{prompt[:60]} 컨셉을 반영한 맞춤형 브랜드 디자인 스타일",
            "target_businesses": ["1인 스냅 컴퍼니", "크리에이티브 스튜디오", "맞춤형 전문 브랜드", "디지털 프로덕트"],
            "template_definition": {
                "layout_structure": "모던 12컬럼 반응형 그리드 및 컨셉 맞춤형 카드 배치",
                "hero_style": "강렬한 브랜드 아이덴티티 배너 + 핵심 액션 CTA",
                "ui_components": {
                    "border_radius": "16px",
                    "border_style": f"1px solid {'#334155' if is_dark else '#CBD5E1'}",
                    "shadow_style": "0 12px 32px rgba(15, 23, 42, 0.14)",
                    "interaction": "부드러운 스케일 및 컬러 글로우 트랜지션",
                },
                "recommended_sections": ["Hero: 브랜드 핵심 비전", "Showcase: 핵심 솔루션 카드", "Proof: 실증 데이터", "Contact: 빠른 상담"],
            },
            "identity": {
                "adjectives": ["독창적인", "세련된", "트렌디한", "몰입감 있는", "신뢰할 수 있는"],
                "adjectives_en": ["Distinctive", "Refined", "Trendy", "Immersive", "Trustworthy"],
                "verbs": ["창조하다", "연결하다", "가속하다", "증명하다"],
                "verbs_en": ["Create", "Connect", "Accelerate", "Prove"],
                "tone_and_manner": f"'{prompt[:40]}'의 매력을 직관적이고 설득력 있게 전달하는 전문적인 어조.",
                "sample_copy": f"당신이 상상하던 새로운 비즈니스 무드, 오늘 바로 현실이 됩니다.",
            },
            "colors": {
                "primary": "#06B6D4" if is_dark else "#0D9488",
                "secondary": "#EC4899" if is_dark else "#4F46E5",
                "accent": "#F59E0B",
                "background": "#0B0F19" if is_dark else "#F4FBF9",
                "surface": "#151C2C" if is_dark else "#FFFFFF",
                "text_main": "#F8FAFC" if is_dark else "#0F172A",
                "text_muted": "#94A3B8" if is_dark else "#475569",
                "border": "#26334D" if is_dark else "#CCFBF1",
                "color_scheme": "dark" if is_dark else "light",
            },
            "typography": {
                "heading_font": "'Space Grotesk', 'Plus Jakarta Sans', 'Pretendard Variable', sans-serif",
                "body_font": "'Pretendard Variable', Pretendard, sans-serif",
                "accent_font": "'JetBrains Mono', monospace",
                "heading_weight": "800",
                "body_weight": "400",
                "letter_spacing": "-0.025em",
                "line_height": "1.65",
            },
        }

    slug = slugify_en(ai_obj.get("name_en", ""), f"style-{next_order}")
    style_id = f"style-{next_order:02d}-{slug}"

    return {
        "id": style_id,
        "order": next_order,
        "name_ko": ai_obj.get("name_ko", f"커스텀 스타일 {next_order}"),
        "name_en": ai_obj.get("name_en", f"Custom Style {next_order}"),
        "tagline": ai_obj.get("tagline", ""),
        "is_custom": True,
        "created_by": used_source,
        "created_at": datetime.now().isoformat(),
        "target_businesses": ai_obj.get("target_businesses", []),
        "template_definition": ai_obj.get("template_definition", {}),
        "identity": ai_obj.get("identity", {}),
        "colors": ai_obj.get("colors", {}),
        "typography": ai_obj.get("typography", {}),
    }


def generate_layout_with_gemini(prompt: str, domain_ko_hint: Optional[str] = None) -> dict:
    data = load_layouts_data()
    existing_layouts = data.get("layouts", [])
    next_order = max([l.get("order", 0) for l in existing_layouts] + [10]) + 1

    system_prompt = f"""당신은 최고 수준의 웹 아키텍트이자 프로덕트 UX 디자이너입니다.
사용자가 입력한 웹사이트 레이아웃 스타일(도메인, 참조 서비스, Head/Body 요구사항) 설명을 바탕으로,
기존 샘플 웹사이트(TheWayWorks 12종 스낵 앱 및 비즈니스 자산)에 즉시 적용할 수 있는 신규 레이아웃 메타데이터와 `live_blueprint`(실시간 렌더링 설계도)를 JSON으로 생성하세요.
반드시 순수 JSON 객체만 반환하세요.

[필수 JSON 스키마]
{{
  "domain_ko": "사업 도메인 국문명 (예: 로컬 커뮤니티 & 중고거래 마켓)",
  "domain_en": "영문 도메인명 (예: Local Community & Flea Market)",
  "name_ko": "레이아웃 패턴 국문명 (예: 동네 인증 헤더 + 피드 & 매물 그리드)",
  "name_en": "영문 레이아웃 패턴명 (예: Local Verified Header + Feed & Item Grid)",
  "representative_companies": ["대표 참조 서비스1 (예: 당근마켓)", "참조 서비스2 (예: 번개장터)"],
  "layout_structure": "상단 Head 구조 + 본문 Body 구조 핵심 요약 1문장",
  "tagline": "이 레이아웃 패턴이 제공하는 UX 핵심 가치 한 줄 요약",
  "head_spec": {{
    "structure_name": "Head 구조 명칭 (예: 로컬 위치 선택 드롭다운 + 실시간 검색 + 채팅/글쓰기 헤더)",
    "description": "Head 영역에 배치되는 요소와 동작 방식 상세 설명",
    "elements": ["구성요소 1", "구성요소 2", "구성요소 3", "구성요소 4"],
    "behavior": "스크롤 시 고정 방식 또는 인터랙션 특징"
  }},
  "body_spec": {{
    "structure_name": "Body 구조 명칭 (예: 좌측 로컬 커뮤니티 피드 + 우측 3열 매물 그리드 복합 구조)",
    "description": "Body 영역의 그리드 분할과 카드/위젯 배치 상세 설명",
    "grid_template": "유효한 CSS grid-template-columns 값 (예: '280px 1fr' 또는 '1fr 320px' 또는 '240px 1fr 280px' 또는 '1fr')",
    "elements": ["본문 구성요소 1", "구성요소 2", "구성요소 3"]
  }},
  "domain_keywords": ["키워드1", "키워드2", "키워드3", "키워드4"],
  "recommended_styles": ["style-01-minimal-essential", "style-03-warm-artisan", "style-07-pop-creative", "style-09-clean-growth-bento" 중 어울리는 ID 2~3개],
  "sample_application_note": "TheWayWorks의 12종 스낵 앱과 4대 부품이 이 레이아웃의 Head와 Body에서 어떻게 표현되는지 설명",
  "live_blueprint": {{
    "head_menus": ["상단 메뉴탭1", "메뉴탭2", "메뉴탭3", "메뉴탭4"],
    "head_widget_label": "헤더 우측 상태 배지 문구 (예: 📍 내 주변 인증 완료 · 실시간 매칭 중)",
    "head_search_placeholder": "도메인 맞춤형 검색창 플레이스홀더 문구",
    "head_cta_label": "헤더 우측 메인 버튼 문구 (예: + 내 스낵앱 등록하기)",
    "hero_banner": {{
      "badge": "히어로 상단 배지 문구",
      "title": "도메인 컨셉에 맞춘 임팩트 있는 히어로 헤드라인",
      "subtitle": "히어로 보조 설명 문구 (TheWayWorks 스낵앱/VAIYER/Wisdom 연동)",
      "cta_primary": "히어로 메인 버튼 문구"
    }},
    "body_archetype": "'sidebar-left-grid' | 'grid-sidebar-right' | 'three-column-hub' | 'masonry-pinboard' | 'split-interactive-widget' | 'bottom-player-dock' 중 이 도메인에 가장 적합한 1개 선택",
    "side_panel_title": "사이드바 또는 보조 패널 제목 (예: 🔥 실시간 동네 인기 키워드 & 매칭 현황)",
    "side_panel_widgets": [
      {{"title": "위젯 1 제목", "value": "핵심 수치/상태", "desc": "보조 설명"}},
      {{"title": "위젯 2 제목", "value": "핵심 수치/상태", "desc": "보조 설명"}},
      {{"title": "위젯 3 제목", "value": "핵심 수치/상태", "desc": "보조 설명"}}
    ],
    "card_badge_prefix": "각 스낵앱 카드에 붙일 도메인 특화 배지명 (예: 동네인기, 추천핀, LIVE트랙 등)",
    "card_action_label": "각 스낵앱 카드 하단 액션 버튼 문구 (예: 💬 1초 채팅으로 도입하기)",
    "floating_bar_text": "하단 플로팅 독/배너 안내 문구"
  }}
}}"""

    user_req = f"요청 레이아웃 설명: {prompt}"
    if domain_ko_hint:
        user_req += f"\n희망 도메인명 힌트: {domain_ko_hint}"

    ai_obj = call_gemini_json(system_prompt, user_req)
    used_source = "gemini-ai"

    if not ai_obj or "head_spec" not in ai_obj:
        used_source = "smart-fallback"
        ai_obj = {
            "domain_ko": domain_ko_hint or f"커스텀 비즈니스 도메인 #{next_order}",
            "domain_en": f"Custom Business Domain {next_order}",
            "name_ko": f"{prompt[:22].strip()} 특화 레이아웃",
            "name_en": f"Custom Domain Layout {next_order}",
            "representative_companies": [domain_ko_hint or "글로벌 버티컬 플랫폼", "차세대 도메인 서비스"],
            "layout_structure": "도메인 특화 액션 헤더(Head) + 맞춤형 큐레이션 그리드 & 인터랙티브 사이드 패널(Body)",
            "tagline": f"'{prompt[:50]}' 요구사항을 반영해 탐색과 전환율을 높인 맞춤형 레이아웃",
            "head_spec": {
                "structure_name": "도메인 맞춤 통합 검색 & 퀵 액션 헤더",
                "description": f"{prompt} 환경에 최적화된 상단 로고, 검색바, 핵심 카테고리 탭 및 빠른 실행 버튼 배치.",
                "elements": ["브랜드 로고", "도메인 맞춤 검색바", "핵심 카테고리 전환 탭", "빠른 실행 CTA 버튼"],
                "behavior": "상단 고정(Sticky) 및 실시간 필터 연동",
            },
            "body_spec": {
                "structure_name": "큐레이션 카드 그리드 + 우측 실시간 인사이트 위젯 패널",
                "description": "메인 영역에는 스낵 앱/콘텐츠 카드를 배치하고, 사이드 영역에는 도메인 맞춤형 요약 위젯을 배치한 복합 레이아웃입니다.",
                "grid_template": "1fr 310px",
                "elements": ["상단 도메인 포커스 배너", "맞춤형 스낵앱 카드 그리드", "우측 실시간 도메인 지표 위젯"],
            },
            "domain_keywords": ["커스텀", "신규 레이아웃", domain_ko_hint or "도메인"],
            "recommended_styles": ["style-09-clean-growth-bento", "style-04-modern-trust-corporate", "style-05-dark-future-saas"],
            "sample_application_note": "TheWayWorks의 12종 스낵 앱을 신규 정의된 도메인 레이아웃의 Head와 Body 구조에 맞춰 실시간 렌더링합니다.",
            "live_blueprint": {
                "head_menus": ["전체 큐레이션", "인기 스낵앱", "VAIYER 자동배선", "Wisdom 지식허브"],
                "head_widget_label": "🟢 실시간 도메인 연동 가동 중",
                "head_search_placeholder": "도메인 맞춤 스낵앱·부품 검색...",
                "head_cta_label": "⚡ 즉시 도입 신청",
                "hero_banner": {
                    "badge": "CUSTOM DOMAIN LAYOUT LIVE",
                    "title": f"{domain_ko_hint or '신규 도메인'} 맞춤형 스낵 앱 플랫폼",
                    "subtitle": prompt,
                    "cta_primary": "3분 무료 맞춤 진단 시작하기 →",
                },
                "body_archetype": "grid-sidebar-right",
                "side_panel_title": "📊 실시간 도메인 인사이트 위젯",
                "side_panel_widgets": [
                    {"title": "가동 중인 스낵앱", "value": "12종 100% 정상", "desc": "카톡 링크 1초 실행"},
                    {"title": "평균 구축 속도", "value": "당일 즉시 개통", "desc": "VAIYER 4대 부품 배선"},
                    {"title": "도메인 지식 신뢰도", "value": "Dual-TOC 검증", "desc": "규칙 대장 + 맥락 박사"},
                ],
                "card_badge_prefix": "맞춤큐레이션",
                "card_action_label": "🔍 상세 화면 & 즉시 적용",
                "floating_bar_text": "✨ 말 한마디(Vibe)로 이 레이아웃이 적용된 나만의 비즈니스 앱을 바로 개통하세요!",
            },
        }

    slug = slugify_en(ai_obj.get("name_en") or ai_obj.get("domain_en", ""), f"layout-{next_order}")
    layout_id = f"layout-{next_order:02d}-{slug}"

    raw_bp = ai_obj.get("live_blueprint", {}) or {}
    arch = raw_bp.get("archetype") or raw_bp.get("body_archetype") or "grid-sidebar-right"
    hero_b = raw_bp.get("hero_banner") or {}
    side_widgets = raw_bp.get("side_panel_widgets") or []
    side_items = raw_bp.get("side_widget_items") or [
        f"{w.get('title', '')}: {w.get('value', '')}" for w in side_widgets if isinstance(w, dict)
    ] or ["VAIYER 자동배선", "FOTOSTREAM 쇼츠합성", "Proxy Auth 1초인증"]

    normalized_bp = {
        **raw_bp,
        "archetype": arch,
        "body_archetype": arch,
        "header_badge": raw_bp.get("header_badge") or raw_bp.get("head_widget_label") or "LIVE DOMAIN PLATFORM",
        "search_placeholder": raw_bp.get("search_placeholder") or raw_bp.get("head_search_placeholder") or "도메인 스낵앱 검색...",
        "nav_menus": raw_bp.get("nav_menus") or raw_bp.get("head_menus") or ["전체 홈", "실시간 피드", "인기 스낵앱", "무료진단"],
        "quick_actions": raw_bp.get("quick_actions") or ([raw_bp["head_cta_label"]] if raw_bp.get("head_cta_label") else ["⚡ 즉시 개통"]),
        "hero_title": raw_bp.get("hero_title") or hero_b.get("title") or ai_obj.get("name_ko", ""),
        "hero_subtitle": raw_bp.get("hero_subtitle") or hero_b.get("subtitle") or ai_obj.get("tagline", ""),
        "hero_cta": raw_bp.get("hero_cta") or hero_b.get("cta_primary") or "3분 무료 진단 시작하기 →",
        "side_widget_title": raw_bp.get("side_widget_title") or raw_bp.get("side_panel_title") or "실시간 도메인 트렌드",
        "side_widget_items": side_items,
        "card_badge_prefix": raw_bp.get("card_badge_prefix") or "AI PICK",
        "card_cta_label": raw_bp.get("card_cta_label") or raw_bp.get("card_action_label") or "즉시 실행하기 →",
        "bottom_dock_text": raw_bp.get("bottom_dock_text") or raw_bp.get("floating_bar_text") or "⚡ 실시간 컨트롤 독 가동 중",
    }

    return enrich_layout_taxonomy({
        "id": layout_id,
        "order": next_order,
        "domain_ko": ai_obj.get("domain_ko", f"커스텀 도메인 {next_order}"),
        "domain_en": ai_obj.get("domain_en", f"Custom Domain {next_order}"),
        "name_ko": ai_obj.get("name_ko", f"커스텀 레이아웃 {next_order}"),
        "name_en": ai_obj.get("name_en", f"Custom Layout {next_order}"),
        "is_custom": True,
        "created_by": used_source,
        "created_at": datetime.now().isoformat(),
        "representative_companies": ai_obj.get("representative_companies", ["Custom Reference"]),
        "layout_structure": ai_obj.get("layout_structure", ""),
        "tagline": ai_obj.get("tagline", ""),
        "head_spec": ai_obj.get("head_spec", {}),
        "body_spec": ai_obj.get("body_spec", {}),
        "domain_keywords": ai_obj.get("domain_keywords", []),
        "recommended_styles": ai_obj.get("recommended_styles", ["style-00-twayworks-original"]),
        "sample_application_note": ai_obj.get("sample_application_note", ""),
        "live_blueprint": normalized_bp,
    })


# =====================================================================
# CSS & Markdown Generators
# =====================================================================
def generate_design_tokens_css(style: dict) -> str:
    c = style.get("colors", {})
    t = style.get("typography", {})
    ui = style.get("template_definition", {}).get("ui_components", {})
    clean_border = ui.get("border_style", f"1px solid {c.get('border', '#E2E8F0')}").split("(")[0].strip()
    clean_shadow = ui.get("shadow_style", "none")
    if clean_shadow.startswith("none"):
        clean_shadow = "none"

    style_id = style["id"]
    raw_radius = ui.get("border_radius", "14px")
    radius_match = re.search(r"(\d+px)", str(raw_radius))
    parsed_r = radius_match.group(1) if radius_match else "14px"

    if style_id in ("style-01-minimal-essential", "style-06-editorial-magazine", "style-08-luxury-prestige"):
        r_sm, r_md, r_lg, r_btn = "0px", "0px", "0px", "0px"
    elif style_id == "style-02-tech-neobrutalism":
        r_sm, r_md, r_lg, r_btn = "6px", "8px", "8px", "8px"
    elif style_id == "style-03-warm-artisan":
        r_sm, r_md, r_lg, r_btn = "10px", "20px", "24px", "999px"
    elif style_id == "style-07-pop-creative":
        r_sm, r_md, r_lg, r_btn = "12px", "24px", "28px", "9999px"
    elif style_id == "style-10-retro-indie-analog":
        r_sm, r_md, r_lg, r_btn = "4px", "4px", "6px", "4px"
    else:
        r_sm, r_md, r_lg, r_btn = "8px", parsed_r, parsed_r, "10px"

    if style_id == "style-00-twayworks-original":
        hero_bg = "radial-gradient(ellipse at 70% 15%, #3B28CC 0%, #1E1B4B 48%, #0B1120 100%)"
        hero_text = "#FFFFFF"
        hero_subtext = "#CBD5E1"
        dark_sec_bg = "#0B1120"
        dark_card_bg = "#131C31"
    elif c.get("color_scheme") == "dark":
        hero_bg = f"radial-gradient(circle at 75% 20%, {c.get('secondary', '#6366F1')}33 0%, {c.get('background', '#090A0F')} 70%)"
        hero_text = c.get("text_main", "#F8FAFC")
        hero_subtext = c.get("text_muted", "#94A3B8")
        dark_sec_bg = c.get("background", "#090A0F")
        dark_card_bg = c.get("surface", "#12141D")
    elif style_id in (
        "style-01-minimal-essential",
        "style-02-tech-neobrutalism",
        "style-03-warm-artisan",
        "style-06-editorial-magazine",
        "style-07-pop-creative",
        "style-09-clean-growth-bento",
        "style-10-retro-indie-analog",
    ):
        hero_bg = c.get("background", "#FFFFFF")
        hero_text = c.get("text_main", "#111111")
        hero_subtext = c.get("text_muted", "#666666")
        dark_sec_bg = "#141416"
        dark_card_bg = "#1E2028"
    else:
        hero_bg = f"linear-gradient(135deg, {c.get('primary', '#251E66')} 0%, {c.get('secondary', '#4F46E5')} 100%)"
        hero_text = "#FFFFFF"
        hero_subtext = "#E2E8F0"
        dark_sec_bg = c.get("primary", "#0F172A")
        dark_card_bg = "#163554"

    return f"""/* ==========================================================================
   Design Tokens CSS — Generated by Design Templates Helper System
   Style ID : {style['id']}
   Style    : {style['name_ko']} ({style['name_en']})
   Tagline  : {style.get('tagline', '')}
   ========================================================================== */

:root {{
  /* 1. Brand & Semantic Color Palette */
  --dh-primary: {c.get('primary', '#251E66')};
  --dh-secondary: {c.get('secondary', '#4F46E5')};
  --dh-accent: {c.get('accent', '#10B981')};
  --dh-bg-main: {c.get('background', '#F8FAFC')};
  --dh-bg-surface: {c.get('surface', '#FFFFFF')};
  --dh-text-main: {c.get('text_main', '#0F172A')};
  --dh-text-secondary: {c.get('text_muted', '#475569')};
  --dh-text-muted: {c.get('text_muted', '#475569')};
  --dh-border: {c.get('border', '#E2E8F0')};
  --dh-border-style: {clean_border};

  /* 2. Hero & Section Surfaces */
  --dh-hero-bg: {hero_bg};
  --dh-hero-text: {hero_text};
  --dh-hero-subtext: {hero_subtext};
  --dh-dark-sec-bg: {dark_sec_bg};
  --dh-dark-card-bg: {dark_card_bg};

  /* 3. Typography System */
  --dh-font-heading: {t.get('heading_font', 'Pretendard, sans-serif')};
  --dh-font-body: {t.get('body_font', 'Pretendard, sans-serif')};
  --dh-font-accent: {t.get('accent_font', 'monospace')};
  --dh-heading-weight: {t.get('heading_weight', '700')};
  --dh-body-weight: {t.get('body_weight', '400')};
  --dh-letter-spacing: {t.get('letter_spacing', '-0.02em')};
  --dh-line-height: {t.get('line_height', '1.65')};

  /* 4. Border Radius & Shadows */
  --dh-radius-sm: {r_sm};
  --dh-radius-md: {r_md};
  --dh-radius-lg: {r_lg};
  --dh-radius-xl: {r_lg};
  --dh-radius-btn: {r_btn};
  --dh-shadow-sm: {clean_shadow};
  --dh-shadow-md: {clean_shadow};
  --dh-shadow-lg: {clean_shadow};
}}
"""


def generate_design_layout_css(layout: dict) -> str:
    lid = layout["id"]
    head_spec = layout.get("head_spec", {})
    body_spec = layout.get("body_spec", {})
    companies = ", ".join(layout.get("representative_companies", []))
    grid_tpl = body_spec.get("grid_template", "1fr")

    return f"""/* ==========================================================================
   Website Layout Pattern CSS — Generated by Design Templates Helper System
   Layout ID   : {lid}
   Domain      : {layout.get('domain_ko', '')} ({layout.get('domain_en', '')})
   Layout Name : {layout.get('name_ko', '')} ({layout.get('name_en', '')})
   Ref Brands  : {companies}
   Structure   : {layout.get('layout_structure', '')}
   Head Spec   : {head_spec.get('structure_name', '')}
   Body Spec   : {body_spec.get('structure_name', '')}
   ========================================================================== */

:root {{
  --dh-layout-id: "{lid}";
  --dh-layout-grid-spec: "{grid_tpl}";
  --dh-layout-max-width: 1380px;
}}

.dl-custom-stage-head {{
  position: sticky;
  top: 0;
  z-index: 850;
  background: var(--dh-bg-surface);
  border-bottom: var(--dh-border-style);
}}

.dl-custom-stage-body {{
  max-width: var(--dh-layout-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: {grid_tpl if ('px' in grid_tpl or 'fr' in grid_tpl) else '1fr'};
  gap: 24px;
  align-items: start;
}}
"""


def generate_ci_and_style_guide_md(
    style: dict,
    layout: Optional[dict] = None,
    company_name: str = "TheWayWorks",
    tagline: str = "THE WAY WORKS · AI APP BUILDER",
    logo_mark: str = "W",
) -> str:
    if layout is None:
        layout = TWAYWORKS_STANDARD_LAYOUT

    ident = style.get("identity", {})
    c = style.get("colors", {})
    t = style.get("typography", {})
    td = style.get("template_definition", {})
    ui = td.get("ui_components", {})

    adjs_ko = ", ".join(ident.get("adjectives", []))
    adjs_en = ", ".join(ident.get("adjectives_en", []))
    verbs_ko = ", ".join(ident.get("verbs", []))
    verbs_en = ", ".join(ident.get("verbs_en", []))
    sections = "\n".join([f"  - {sec}" for sec in td.get("recommended_sections", [])])
    targets = ", ".join(style.get("target_businesses", []))

    head_spec = layout.get("head_spec", {})
    body_spec = layout.get("body_spec", {})
    head_elements = "\n".join([f"    - {el}" for el in head_spec.get("elements", [])])
    body_elements = "\n".join([f"    - {el}" for el in body_spec.get("elements", [])])
    ref_companies = ", ".join(layout.get("representative_companies", []))

    return f"""# {company_name} — 회사 CI 정의서 & 디자인 스타일 · 웹사이트 레이아웃 가이드
> **선택된 디자인 스타일 (Tone & Manner)**: `{style['id']}` — **{style['name_ko']} ({style['name_en']})**
> **선택된 웹사이트 레이아웃 (Head & Body Pattern)**: `{layout['id']}` — **{layout['domain_ko']} : {layout['name_ko']}** (대표 참조: {ref_companies})

---

## 1. 브랜드 & 회사 CI 기본 정의 (Corporate Identity)
- **기업/브랜드명**: `{company_name}`
- **로고 마크 심볼**: `{logo_mark}`
- **브랜드 태그라인**: `{tagline}`
- **적합 비즈니스 영역**: {targets}

---

## 2. 디자인 정체성 키워드 & 톤앤매너 (Identity & Tone)
- **브랜드 형용사 (Adjectives)**:
  - 국문: `{adjs_ko}`
  - 영문: `{adjs_en}`
- **브랜드 동사 (Verbs)**:
  - 국문: `{verbs_ko}`
  - 영문: `{verbs_en}`
- **커뮤니케이션 톤앤매너 (Tone & Manner)**:
  > {ident.get('tone_and_manner', '')}
- **대표 샘플 슬로건 (Sample Copy)**:
  > "{ident.get('sample_copy', '')}"

---

## 3. 색상 스타일 시스템 (Color Palette)
| 역할 (Role) | HEX 코드 | 설명 |
|:---|:---:|:---|
| **Primary** | `{c.get('primary', '')}` | 브랜드 중심 색상, 핵심 CTA 버튼, 주요 강조 |
| **Secondary** | `{c.get('secondary', '')}` | 보조 포인트, 서브 버튼, 뱃지 강조 |
| **Accent** | `{c.get('accent', '')}` | 하이라이트, 상태 표시, 링크 포인트 |
| **Background** | `{c.get('background', '')}` | 페이지 기본 배경 ({c.get('color_scheme', 'light')} 모드) |
| **Surface** | `{c.get('surface', '')}` | 카드, 모달, 구분 섹션 표면 |
| **Text Main** | `{c.get('text_main', '')}` | 헤드라인 및 본문 주요 텍스트 |
| **Text Muted** | `{c.get('text_muted', '')}` | 보조 설명, 캡션 텍스트 |
| **Border** | `{c.get('border', '')}` | 구분선 및 카드 외곽선 |

---

## 4. 타이포그래피 가이드 (Typography)
- **Heading Font (제목)**: `{t.get('heading_font', '')}` (Weight: `{t.get('heading_weight', '')}`, Letter-spacing: `{t.get('letter_spacing', '')}`)
- **Body Font (본문)**: `{t.get('body_font', '')}` (Weight: `{t.get('body_weight', '')}`, Line-height: `{t.get('line_height', '')}`)
- **Accent / Mono Font (코드·포인트)**: `{t.get('accent_font', '')}`

---

## 5. 웹사이트 레이아웃 패턴 규격 (Website Layout Architecture — Head & Body)
- **적용 도메인 분류**: **{layout['domain_ko']} ({layout['domain_en']})**
- **레이아웃 패턴명**: **{layout['name_ko']} ({layout['name_en']})**
- **대표 참조 서비스**: {ref_companies}
- **레이아웃 핵심 구조**: `{layout['layout_structure']}`
- **상단 헤더 (Head) 아키텍처**:
  - **구조 정의**: {head_spec.get('structure_name', '')}
  - **상세 설명**: {head_spec.get('description', '')}
  - **필수 포함 요소**:
{head_elements}
- **본문 바디 (Body) 아키텍처**:
  - **구조 정의**: {body_spec.get('structure_name', '')}
  - **그리드 템플릿**: `{body_spec.get('grid_template', '')}`
  - **상세 설명**: {body_spec.get('description', '')}
  - **필수 포함 요소**:
{body_elements}
- **도메인 적용 가이드**:
  > {layout.get('sample_application_note', '')}

---

## 6. UI 컴포넌트 스타일 규격 (UI Component Rules)
- **스타일 기본 레이아웃**: {td.get('layout_structure', '')}
- **히어로(Hero) 연출**: {td.get('hero_style', '')}
- **UI 컴포넌트 규칙**:
  - Border Radius: `{ui.get('border_radius', '')}`
  - Border Style: `{ui.get('border_style', '')}`
  - Shadow Style: `{ui.get('shadow_style', '')}`
  - Interaction: `{ui.get('interaction', '')}`
- **권장 콘텐츠 섹션**:
{sections}

---

## 7. AI 코딩 어시스턴트용 통합 프롬프트 (Copy & Paste for Vibe Coding)
```text
당신은 '{company_name} ({tagline})'의 수석 프로덕트 디자이너이자 프론트엔드 아키텍트입니다.
모든 웹페이지와 스낵 앱 컴포넌트를 아래 [1. 디자인 스타일]과 [2. 웹사이트 레이아웃 패턴]이 결합된 디자인 시스템에 맞춰 작성하세요:

1. 브랜드 정체성 & 디자인 스타일: [{style['name_ko']} ({style['name_en']})]
   - 형용사: {adjs_ko}
   - 동사: {verbs_ko}
   - 톤앤매너: {ident.get('tone_and_manner', '')}
   - 컬러 토큰: Primary {c.get('primary', '')}, Secondary {c.get('secondary', '')}, Accent {c.get('accent', '')}, Background {c.get('background', '')}, Surface {c.get('surface', '')}, Text {c.get('text_main', '')} / {c.get('text_muted', '')}, Border {c.get('border', '')}
   - 타이포그래피: Heading {t.get('heading_font', '')} ({t.get('heading_weight', '')}), Body {t.get('body_font', '')} ({t.get('body_weight', '')}, line-height {t.get('line_height', '')}), Mono {t.get('accent_font', '')}
   - UI 컴포넌트 규칙: 모서리 곡률 {ui.get('border_radius', '')}, 테두리 {ui.get('border_style', '')}, 그림자 {ui.get('shadow_style', '')}

2. 웹사이트 레이아웃 아키텍처 (Head & Body): [{layout['domain_ko']} — {layout['name_ko']}] (참조: {ref_companies})
   - 전체 구조: {layout['layout_structure']}
   - Head (상단 내비게이션 구조): {head_spec.get('description', '')}
   - Body (본문 그리드 구조, {body_spec.get('grid_template', '')}): {body_spec.get('description', '')}
```
"""


def build_standalone_sample_html(
    style: dict,
    layout: Optional[dict] = None,
    company_name: str = "TheWayWorks",
    tagline: str = "THE WAY WORKS · AI APP BUILDER",
    logo_mark: str = "W",
) -> str:
    if layout is None:
        layout = TWAYWORKS_STANDARD_LAYOUT

    raw_html_path = STATIC_DIR / "index.html"
    html = raw_html_path.read_text(encoding="utf-8")

    html = html.replace(
        'data-style-id="style-00-twayworks-original"',
        f'data-style-id="{style["id"]}"',
    )
    html = html.replace(
        'data-layout-id="layout-00-twayworks-standard"',
        f'data-layout-id="{layout["id"]}"',
    )
    html = html.replace(
        '<link rel="stylesheet" href="css/base-twayworks.css" />',
        '<link rel="stylesheet" href="css/base-twayworks.css" />\n  <link rel="stylesheet" href="../design-tokens.css" />\n  <link rel="stylesheet" href="../design-layout.css" />',
    )

    if company_name != "TheWayWorks":
        html = html.replace(">TheWayWorks<", f">{company_name}<")
    if tagline != "THE WAY WORKS · AI APP BUILDER":
        html = html.replace(">THE WAY WORKS · AI APP BUILDER<", f">{tagline}<")
    if logo_mark != "W":
        html = html.replace('<div class="logo-mark">W</div>', f'<div class="logo-mark">{logo_mark}</div>')

    return html


# =====================================================================
# Pydantic Models for API Requests
# =====================================================================
class RecommendRequest(BaseModel):
    adjectives: List[str] = Field(default_factory=list)
    verbs: List[str] = Field(default_factory=list)
    target_business: Optional[str] = Field(default=None)
    domain_keyword: Optional[str] = Field(default=None)


class LayoutRecommendRequest(BaseModel):
    domain_keyword: Optional[str] = Field(default=None)
    head_features: List[str] = Field(default_factory=list)
    body_features: List[str] = Field(default_factory=list)


class AIGenerateStyleRequest(BaseModel):
    prompt: str = Field(..., description="생성할 디자인 스타일에 대한 자연어 설명 (업종, 분위기, 컬러감, 톤앤매너 등)")
    name_ko_hint: Optional[str] = Field(default=None, description="희망하는 스타일 국문명 (선택)")
    auto_save: bool = Field(default=True, description="생성 즉시 시스템에 등록(저장)할지 여부")


class AIGenerateLayoutRequest(BaseModel):
    prompt: str = Field(..., description="생성할 웹사이트 레이아웃에 대한 자연어 설명 (도메인, 참조 사이트, Head/Body 구조 등)")
    domain_ko_hint: Optional[str] = Field(default=None, description="희망하는 사업 도메인 국문명 (선택)")
    auto_save: bool = Field(default=True, description="생성 즉시 시스템에 등록(저장)할지 여부")


# =====================================================================
# API Router Definition
# =====================================================================
api_router = APIRouter(tags=["Design Templates & Website Layouts Helper API"])


@api_router.get("/status", summary="Docker 컨테이너 헬스체크 및 시스템 상태 확인 (/api/status)")
@api_router.get("/health", summary="시스템 상태, AI 설정 및 스타일·레이아웃 통계 확인 (/api/health)")
def get_health():
    styles_data = load_styles_data()
    layouts_data = load_layouts_data()
    gemini_cfg = get_gemini_config()
    return {
        "status": "ok",
        "service": "Design & Layout Studio (v5.0 IA · Style × Layout Helper System)",
        "version": "5.0.0",
        "prefix": PREFIX,
        "default_prefix": DEFAULT_PREFIX,
        "database_path": str(DATA_DIR),
        "port": 5000,
        "sample_company": "TheWayWorks",
        "total_representative_styles": len(styles_data.get("styles", [])),
        "total_representative_layouts": len(layouts_data.get("layouts", [])),
        "gemini_ai": {
            "configured": gemini_cfg["configured"],
            "model_name": gemini_cfg["model_name"],
        },
    }


@api_router.get("/studio/summary", summary="[디자인 스타일] 및 [레이아웃 스타일] 2대 분류 관리 현황 및 Gemini AI 상태 조회")
def get_studio_summary():
    styles_list = [TWAYWORKS_ORIGINAL_STYLE] + list(load_styles_data().get("styles", []))
    layouts_list = [TWAYWORKS_STANDARD_LAYOUT] + list(load_layouts_data().get("layouts", []))
    gemini_cfg = get_gemini_config()

    custom_styles = [s for s in styles_list if s.get("is_custom") or s.get("order", 0) > 10]
    custom_layouts = [l for l in layouts_list if l.get("is_custom") or l.get("order", 0) > 10]

    return {
        "gemini_ai": {
            "configured": gemini_cfg["configured"],
            "model_name": gemini_cfg["model_name"],
            "env_key": "GEMINI_API_KEY",
        },
        "categories": {
            "design_styles": {
                "category_name": "디자인 스타일 (Tone & Manner / Color / Typography)",
                "total_count": len(styles_list),
                "builtin_count": len(styles_list) - len(custom_styles),
                "custom_count": len(custom_styles),
                "items": styles_list,
            },
            "layout_styles": {
                "category_name": "웹사이트 레이아웃 스타일 (Head & Body Domain Pattern)",
                "total_count": len(layouts_list),
                "builtin_count": len(layouts_list) - len(custom_layouts),
                "custom_count": len(custom_layouts),
                "items": layouts_list,
            },
        },
    }


@api_router.get("/company/twayworks", summary="TheWayWorks 샘플 홈페이지 기업 소개 및 12종 스낵 앱 프로필 조회")
def get_twayworks_company_profile():
    return load_twayworks_profile()


@api_router.get(
    "/ia/architecture",
    summary="v5.0 정보설계(IA): 3-Depth 메뉴트리, GNB·LNB·SNB·FNB 관계 명세, 12대 정보 컴포넌트 레지스트리 및 레이아웃별 계층 재배치(Reflow) 전체 조회",
)
def get_ia_architecture_spec():
    layouts_list = [TWAYWORKS_STANDARD_LAYOUT] + list(load_layouts_data().get("layouts", []))
    return {
        "version": "5.0.0",
        "design_guide_principles": [
            {
                "step": 1,
                "code": "IA-01",
                "title_ko": "정보의 객체화 및 5대 계층 그룹핑",
                "summary_ko": "사이트의 모든 콘텐츠를 12개 정보 컴포넌트 객체(IC-01~12)로 등록하고 5대 계층(내비게이션·가치제안·카탈로그·스토리·전환/특화뷰)으로 구조화합니다.",
            },
            {
                "step": 2,
                "code": "IA-02",
                "title_ko": "최대 3-Depth · 1-Click 메뉴트리 (GNB ➔ LNB ➔ SNB)",
                "summary_ko": "사용자 목적에 가장 가까운 메뉴를 최우선 배치하고, 모든 기능은 1-Click 탭 전환(최대 3-Depth)으로 접근하여 긴 스크롤을 방지합니다.",
            },
            {
                "step": 3,
                "code": "IA-03",
                "title_ko": "톤앤매너(Style)와 공간 배치(Layout)의 직교 분리",
                "summary_ko": "디자인 스타일은 컬러·타이포·어조에 집중하고, 레이아웃은 메뉴(GNB/LNB/SNB) 배치와 본문 뷰 스타일에 집중하여 독립적으로 조합합니다.",
            },
            {
                "step": 4,
                "code": "IA-04",
                "title_ko": "메뉴트리 기반 컴포넌트 계층 재배치(Reflow) & 특화 뷰(FV)",
                "summary_ko": "레이아웃 변경 시 12개 정보 컴포넌트가 계층 규칙에 따라 슬롯별로 자동 재배치되며, 각 레이아웃 고유 특징적 뷰(FV-00~10)가 생성됩니다.",
            },
        ],
        "navigation_relationships": NAVIGATION_RELATIONSHIP_SPEC,
        "menu_tree": IA_MENU_TREE,
        "component_registry": INFORMATION_COMPONENT_REGISTRY,
        "layout_reflow_map": LAYOUT_IA_REFLOW_MAP,
        "total_layouts": len(layouts_list),
    }


@api_router.get(
    "/ia/reflow/{layout_id}",
    summary="특정 웹사이트 레이아웃 선택 시 메뉴트리(GNB·LNB·SNB·FNB) 배치 및 12대 정보 컴포넌트 계층 재배치(Reflow) 명세 조회",
)
def get_layout_ia_reflow_detail(layout_id: str):
    layout = resolve_layout_by_id(layout_id)
    enrich_layout_taxonomy(layout)
    return {
        "layout_id": layout["id"],
        "name_ko": layout["name_ko"],
        "domain_ko": layout["domain_ko"],
        "menu_placement_ko": layout.get("menu_placement_ko"),
        "view_style_ko": layout.get("view_style_ko"),
        "ia_reflow": layout.get("ia_reflow"),
        "characteristic_view": layout.get("characteristic_view"),
        "component_registry": INFORMATION_COMPONENT_REGISTRY,
    }


# ---------------------------------------------------------------------
# 1. Website Layout Styles Management & AI Generation (/layouts)
# ---------------------------------------------------------------------
@api_router.get("/layouts", summary="웹사이트 레이아웃 스타일(Head & Body) 전체 목록 조회 및 필터링")
def list_website_layouts(
    domain: Optional[str] = Query(default=None),
    company: Optional[str] = Query(default=None),
    keyword: Optional[str] = Query(default=None),
    include_standard: bool = Query(default=False),
):
    data = load_layouts_data()
    layouts = list(data.get("layouts", []))
    if include_standard:
        layouts = [TWAYWORKS_STANDARD_LAYOUT] + layouts

    if domain:
        q = domain.strip().lower()
        layouts = [
            l_item
            for l_item in layouts
            if q in l_item.get("domain_ko", "").lower()
            or q in l_item.get("domain_en", "").lower()
            or any(q in kw.lower() for kw in l_item.get("domain_keywords", []))
        ]
    if company:
        q = company.strip().lower()
        layouts = [
            l_item
            for l_item in layouts
            if any(q in comp.lower() for comp in l_item.get("representative_companies", []))
        ]
    if keyword:
        q = keyword.strip().lower()
        layouts = [
            l_item
            for l_item in layouts
            if q in l_item.get("name_ko", "").lower()
            or q in l_item.get("layout_structure", "").lower()
            or q in l_item.get("head_spec", {}).get("description", "").lower()
            or q in l_item.get("body_spec", {}).get("description", "").lower()
        ]

    return {
        "project": data.get("project"),
        "version": data.get("version"),
        "count": len(layouts),
        "layouts": layouts,
    }


@api_router.post("/layouts/ai-generate", summary="🤖 Gemini LLM AI를 활용하여 자연어 설명으로부터 신규 웹사이트 레이아웃 스타일 생성 및 등록")
def ai_generate_website_layout(payload: AIGenerateLayoutRequest):
    if not payload.prompt.strip():
        raise HTTPException(status_code=400, detail="레이아웃 생성 프롬프트(prompt)를 입력해 주세요.")

    generated_layout = generate_layout_with_gemini(payload.prompt, payload.domain_ko_hint)

    if payload.auto_save:
        data = load_layouts_data()
        layouts = list(data.get("layouts", []))
        layouts.append(generated_layout)
        data["layouts"] = layouts
        save_layouts_data(data)

    return {
        "status": "created" if payload.auto_save else "generated_draft",
        "auto_saved": payload.auto_save,
        "layout": generated_layout,
    }


@api_router.post("/layouts", summary="신규 웹사이트 레이아웃 스타일 직접 등록 (저장)")
def create_website_layout(layout_obj: Dict[str, Any]):
    data = load_layouts_data()
    layouts = list(data.get("layouts", []))

    next_order = max([l.get("order", 0) for l in layouts] + [10]) + 1
    if not layout_obj.get("order"):
        layout_obj["order"] = next_order
    if not layout_obj.get("id"):
        slug = slugify_en(layout_obj.get("name_en") or layout_obj.get("domain_en") or layout_obj.get("name_ko", ""), f"layout-{next_order}")
        layout_obj["id"] = f"layout-{int(layout_obj['order']):02d}-{slug}"

    # Check duplicate ID
    existing_idx = next((i for i, l in enumerate(layouts) if l["id"] == layout_obj["id"]), None)
    layout_obj["is_custom"] = layout_obj.get("is_custom", True)
    layout_obj["updated_at"] = datetime.now().isoformat()

    if existing_idx is not None:
        layouts[existing_idx] = layout_obj
    else:
        layouts.append(layout_obj)

    data["layouts"] = layouts
    save_layouts_data(data)
    return {"status": "saved", "layout": layout_obj, "total_layouts": len(layouts)}


@api_router.put("/layouts/{layout_id}", summary="기존 또는 커스텀 웹사이트 레이아웃 스타일 수정")
def update_website_layout(layout_id: str, updated_fields: Dict[str, Any]):
    if layout_id == "layout-00-twayworks-standard":
        raise HTTPException(status_code=400, detail="기본 표준 레이아웃(layout-00)은 직접 덮어쓸 수 없습니다. 복제 후 새 레이아웃으로 저장하세요.")

    data = load_layouts_data()
    layouts = list(data.get("layouts", []))
    target_idx = next((i for i, l in enumerate(layouts) if l["id"] == layout_id), None)
    if target_idx is None:
        raise HTTPException(status_code=404, detail=f"Layout '{layout_id}' not found.")

    merged = {**layouts[target_idx], **updated_fields, "id": layout_id, "updated_at": datetime.now().isoformat()}
    layouts[target_idx] = merged
    data["layouts"] = layouts
    save_layouts_data(data)
    return {"status": "updated", "layout": merged}


@api_router.delete("/layouts/{layout_id}", summary="등록된 웹사이트 레이아웃 스타일 삭제")
def delete_website_layout(layout_id: str):
    if layout_id == "layout-00-twayworks-standard":
        raise HTTPException(status_code=400, detail="기본 표준 레이아웃(layout-00)은 삭제할 수 없습니다.")

    data = load_layouts_data()
    layouts = list(data.get("layouts", []))
    new_layouts = [l for l in layouts if l["id"] != layout_id]
    if len(new_layouts) == len(layouts):
        raise HTTPException(status_code=404, detail=f"Layout '{layout_id}' not found.")

    data["layouts"] = new_layouts
    save_layouts_data(data)
    return {"status": "deleted", "deleted_id": layout_id, "total_layouts": len(new_layouts)}


@api_router.post("/layouts/recommend", summary="사업 도메인 및 Head/Body 요구사항 기반 최적 웹사이트 레이아웃 패턴 추천")
def recommend_website_layouts(payload: LayoutRecommendRequest):
    data = load_layouts_data()
    all_layouts = [TWAYWORKS_STANDARD_LAYOUT] + list(data.get("layouts", []))

    dom_q = (payload.domain_keyword or "").strip().lower()
    head_qs = [h.strip().lower() for h in payload.head_features if h.strip()]
    body_qs = [b.strip().lower() for b in payload.body_features if b.strip()]

    rankings = []
    for l_item in all_layouts:
        score = 0
        matched_reasons = []

        searchable_domain = (
            f"{l_item.get('domain_ko', '')} {l_item.get('domain_en', '')} "
            + " ".join(l_item.get("representative_companies", []))
            + " "
            + " ".join(l_item.get("domain_keywords", []))
        ).lower()

        if dom_q and dom_q in searchable_domain:
            score += 5
            matched_reasons.append(f"도메인/참조서비스 일치 ('{payload.domain_keyword}')")

        head_text = (
            f"{l_item.get('head_spec', {}).get('structure_name', '')} "
            f"{l_item.get('head_spec', {}).get('description', '')} "
            + " ".join(l_item.get("head_spec", {}).get("elements", []))
        ).lower()
        for hq in head_qs:
            if hq in head_text:
                score += 2
                matched_reasons.append(f"Head 특징 일치 ('{hq}')")

        body_text = (
            f"{l_item.get('body_spec', {}).get('structure_name', '')} "
            f"{l_item.get('body_spec', {}).get('description', '')} "
            + " ".join(l_item.get("body_spec", {}).get("elements", []))
        ).lower()
        for bq in body_qs:
            if bq in body_text:
                score += 2
                matched_reasons.append(f"Body 특징 일치 ('{bq}')")

        rankings.append(
            {
                "layout_id": l_item["id"],
                "order": l_item["order"],
                "domain_ko": l_item["domain_ko"],
                "name_ko": l_item["name_ko"],
                "representative_companies": l_item.get("representative_companies", []),
                "layout_structure": l_item["layout_structure"],
                "match_score": score,
                "matched_reasons": matched_reasons,
                "recommended_styles": l_item.get("recommended_styles", []),
                "layout_css_endpoint": f"{PREFIX}/api/layouts/{l_item['id']}/layout.css",
            }
        )

    rankings.sort(key=lambda x: (-x["match_score"], x["order"]))
    return {
        "query": payload.model_dump(),
        "recommended_top_layout": rankings[0] if rankings else None,
        "rankings": rankings,
    }


@api_router.get("/layouts/{layout_id}", summary="특정 웹사이트 레이아웃 패턴(Head & Body 구조) 상세 메타데이터 조회")
def get_website_layout_detail(layout_id: str):
    layout = resolve_layout_by_id(layout_id)
    return {
        **layout,
        "endpoints": {
            "self": f"{PREFIX}/api/layouts/{layout['id']}",
            "layout_css": f"{PREFIX}/api/layouts/{layout['id']}/layout.css",
        },
    }


@api_router.get(
    "/layouts/{layout_id}/layout.css",
    summary="선택된 웹사이트 레이아웃 패턴의 구조적 CSS 스타일시트(design-layout.css) 직접 참조",
    response_class=Response,
)
def get_layout_css_stylesheet(layout_id: str):
    layout = resolve_layout_by_id(layout_id)
    css_content = generate_design_layout_css(layout)
    return Response(
        content=css_content,
        media_type="text/css; charset=utf-8",
        headers={
            "Cache-Control": "no-cache",
            "Content-Disposition": f'inline; filename="{layout["id"]}-layout.css"',
        },
    )


# ---------------------------------------------------------------------
# 2. Design Styles Management, AI Generation & Package Export (/styles)
# ---------------------------------------------------------------------
@api_router.get("/styles", summary="디자인 스타일(톤앤매너) 전체 목록 조회 및 정체성 키워드 필터링")
def list_design_styles(
    adjective: Optional[str] = Query(default=None),
    verb: Optional[str] = Query(default=None),
    business: Optional[str] = Query(default=None),
    scheme: Optional[str] = Query(default=None),
    include_original: bool = Query(default=False),
):
    data = load_styles_data()
    styles = list(data.get("styles", []))
    if include_original:
        styles = [TWAYWORKS_ORIGINAL_STYLE] + styles

    if adjective:
        q = adjective.strip().lower()
        styles = [
            s
            for s in styles
            if any(q in a.lower() for a in s.get("identity", {}).get("adjectives", []) + s.get("identity", {}).get("adjectives_en", []))
        ]
    if verb:
        q = verb.strip().lower()
        styles = [
            s
            for s in styles
            if any(q in v.lower() for v in s.get("identity", {}).get("verbs", []) + s.get("identity", {}).get("verbs_en", []))
        ]
    if business:
        q = business.strip().lower()
        styles = [s for s in styles if any(q in b.lower() for b in s.get("target_businesses", []))]
    if scheme:
        q = scheme.strip().lower()
        styles = [s for s in styles if s.get("colors", {}).get("color_scheme", "").lower() == q]

    return {
        "project": data.get("project"),
        "version": data.get("version"),
        "count": len(styles),
        "styles": styles,
    }


@api_router.post("/styles/ai-generate", summary="🤖 Gemini LLM AI를 활용하여 자연어 설명으로부터 신규 디자인 스타일 생성 및 등록")
def ai_generate_design_style(payload: AIGenerateStyleRequest):
    if not payload.prompt.strip():
        raise HTTPException(status_code=400, detail="디자인 스타일 생성 프롬프트(prompt)를 입력해 주세요.")

    generated_style = generate_style_with_gemini(payload.prompt, payload.name_ko_hint)

    if payload.auto_save:
        data = load_styles_data()
        styles = list(data.get("styles", []))
        styles.append(generated_style)
        data["styles"] = styles
        save_styles_data(data)

    return {
        "status": "created" if payload.auto_save else "generated_draft",
        "auto_saved": payload.auto_save,
        "style": generated_style,
    }


@api_router.post("/styles", summary="신규 디자인 스타일 직접 등록 (저장)")
def create_design_style(style_obj: Dict[str, Any]):
    data = load_styles_data()
    styles = list(data.get("styles", []))

    next_order = max([s.get("order", 0) for s in styles] + [10]) + 1
    if not style_obj.get("order"):
        style_obj["order"] = next_order
    if not style_obj.get("id"):
        slug = slugify_en(style_obj.get("name_en") or style_obj.get("name_ko", ""), f"style-{next_order}")
        style_obj["id"] = f"style-{int(style_obj['order']):02d}-{slug}"

    existing_idx = next((i for i, s in enumerate(styles) if s["id"] == style_obj["id"]), None)
    style_obj["is_custom"] = style_obj.get("is_custom", True)
    style_obj["updated_at"] = datetime.now().isoformat()

    if existing_idx is not None:
        styles[existing_idx] = style_obj
    else:
        styles.append(style_obj)

    data["styles"] = styles
    save_styles_data(data)
    return {"status": "saved", "style": style_obj, "total_styles": len(styles)}


@api_router.put("/styles/{style_id}", summary="기존 또는 커스텀 디자인 스타일 수정")
def update_design_style(style_id: str, updated_fields: Dict[str, Any]):
    if style_id == "style-00-twayworks-original":
        raise HTTPException(status_code=400, detail="기본 오리지널 스타일(style-00)은 직접 덮어쓸 수 없습니다. 새 스타일로 등록하세요.")

    data = load_styles_data()
    styles = list(data.get("styles", []))
    target_idx = next((i for i, s in enumerate(styles) if s["id"] == style_id), None)
    if target_idx is None:
        raise HTTPException(status_code=404, detail=f"Style '{style_id}' not found.")

    merged = {**styles[target_idx], **updated_fields, "id": style_id, "updated_at": datetime.now().isoformat()}
    styles[target_idx] = merged
    data["styles"] = styles
    save_styles_data(data)
    return {"status": "updated", "style": merged}


@api_router.delete("/styles/{style_id}", summary="등록된 디자인 스타일 삭제")
def delete_design_style(style_id: str):
    if style_id == "style-00-twayworks-original":
        raise HTTPException(status_code=400, detail="기본 오리지널 스타일(style-00)은 삭제할 수 없습니다.")

    data = load_styles_data()
    styles = list(data.get("styles", []))
    new_styles = [s for s in styles if s["id"] != style_id]
    if len(new_styles) == len(styles):
        raise HTTPException(status_code=404, detail=f"Style '{style_id}' not found.")

    data["styles"] = new_styles
    save_styles_data(data)
    return {"status": "deleted", "deleted_id": style_id, "total_styles": len(new_styles)}


@api_router.post("/styles/recommend", summary="기업 정체성(형용사·동사·업종·도메인) 기반 최적 디자인 스타일 & 웹사이트 레이아웃 동시 매칭 추천")
def recommend_design_styles(payload: RecommendRequest):
    data = load_styles_data()
    all_styles = [TWAYWORKS_ORIGINAL_STYLE] + list(data.get("styles", []))
    layouts_data = load_layouts_data()
    all_layouts = [TWAYWORKS_STANDARD_LAYOUT] + list(layouts_data.get("layouts", []))

    req_adjs = [a.strip().lower() for a in payload.adjectives if a.strip()]
    req_verbs = [v.strip().lower() for v in payload.verbs if v.strip()]
    req_biz = (payload.target_business or "").strip().lower()
    req_dom = (payload.domain_keyword or payload.target_business or "").strip().lower()

    results = []
    for s in all_styles:
        ident = s.get("identity", {})
        s_adjs = ident.get("adjectives", []) + ident.get("adjectives_en", [])
        s_verbs = ident.get("verbs", []) + ident.get("verbs_en", [])
        s_biz = s.get("target_businesses", [])

        matched_adjs = [a for a in s_adjs if any(ra in a.lower() or a.lower() in ra for ra in req_adjs)]
        matched_verbs = [v for v in s_verbs if any(rv in v.lower() or v.lower() in rv for rv in req_verbs)]
        matched_biz = [b for b in s_biz if req_biz and (req_biz in b.lower() or b.lower() in req_biz)]

        score = (len(matched_adjs) * 2) + (len(matched_verbs) * 2) + (len(matched_biz) * 3)
        results.append(
            {
                "style_id": s["id"],
                "order": s["order"],
                "name_ko": s["name_ko"],
                "name_en": s["name_en"],
                "tagline": s.get("tagline", ""),
                "match_score": score,
                "matched_adjectives": matched_adjs,
                "matched_verbs": matched_verbs,
                "matched_businesses": matched_biz,
                "colors": s.get("colors", {}),
                "package_endpoint": f"{PREFIX}/api/styles/{s['id']}/package",
                "download_endpoint": f"{PREFIX}/api/styles/{s['id']}/download",
            }
        )

    results.sort(key=lambda x: (-x["match_score"], x["order"]))
    top_style_id = results[0]["style_id"] if results else "style-00-twayworks-original"

    layout_rankings = []
    for l_item in all_layouts:
        l_score = 0
        dom_pool = (
            f"{l_item.get('domain_ko', '')} {l_item.get('domain_en', '')} {l_item.get('name_ko', '')} "
            + " ".join(l_item.get("representative_companies", []))
            + " "
            + " ".join(l_item.get("domain_keywords", []))
        ).lower()
        if req_dom and req_dom in dom_pool:
            l_score += 5
        if top_style_id in l_item.get("recommended_styles", []):
            l_score += 2
        layout_rankings.append(
            {
                "layout_id": l_item["id"],
                "order": l_item["order"],
                "domain_ko": l_item["domain_ko"],
                "name_ko": l_item["name_ko"],
                "representative_companies": l_item.get("representative_companies", []),
                "layout_structure": l_item["layout_structure"],
                "match_score": l_score,
            }
        )
    layout_rankings.sort(key=lambda x: (-x["match_score"], x["order"]))

    return {
        "query": payload.model_dump(),
        "recommended_top_style": results[0] if results else None,
        "recommended_top_layout": layout_rankings[0] if layout_rankings else None,
        "rankings": results,
        "layout_rankings": layout_rankings,
    }


@api_router.get("/styles/{style_id}", summary="특정 디자인 스타일 상세 메타데이터 조회")
def get_design_style_detail(style_id: str):
    style = resolve_style_by_id(style_id)
    return {
        **style,
        "endpoints": {
            "self": f"{PREFIX}/api/styles/{style['id']}",
            "tokens_css": f"{PREFIX}/api/styles/{style['id']}/tokens.css",
            "package": f"{PREFIX}/api/styles/{style['id']}/package",
            "download_zip": f"{PREFIX}/api/styles/{style['id']}/download",
        },
    }


@api_router.get(
    "/styles/{style_id}/tokens.css",
    summary="선택된 디자인 스타일의 CSS Custom Properties(:root 토큰) 스타일시트 직접 참조",
    response_class=Response,
)
def get_style_tokens_css(style_id: str):
    style = resolve_style_by_id(style_id)
    css_content = generate_design_tokens_css(style)
    return Response(
        content=css_content,
        media_type="text/css; charset=utf-8",
        headers={
            "Cache-Control": "no-cache",
            "Content-Disposition": f'inline; filename="{style["id"]}-tokens.css"',
        },
    )


@api_router.get(
    "/styles/{style_id}/package",
    summary="선택된 [디자인 스타일 + 웹사이트 레이아웃] 패키지 통합 참조 API",
)
def get_style_package_reference(
    style_id: str,
    layout_id: str = Query(default="layout-00-twayworks-standard"),
    company_name: str = Query(default="TheWayWorks"),
    tagline: str = Query(default="THE WAY WORKS · AI APP BUILDER"),
    logo_mark: str = Query(default="W"),
):
    style = resolve_style_by_id(style_id)
    layout = resolve_layout_by_id(layout_id)
    tokens_css = generate_design_tokens_css(style)
    layout_css = generate_design_layout_css(layout)
    guide_md = generate_ci_and_style_guide_md(
        style, layout=layout, company_name=company_name, tagline=tagline, logo_mark=logo_mark
    )

    return {
        "style_id": style["id"],
        "name_ko": style["name_ko"],
        "name_en": style["name_en"],
        "tagline": style.get("tagline", ""),
        "layout_id": layout["id"],
        "layout_domain_ko": layout["domain_ko"],
        "layout_name_ko": layout["name_ko"],
        "layout_structure": layout["layout_structure"],
        "company_context": {
            "company_name": company_name,
            "tagline": tagline,
            "logo_mark": logo_mark,
        },
        "metadata": style,
        "layout_metadata": layout,
        "files": {
            "design_tokens_css": tokens_css,
            "design_layout_css": layout_css,
            "ci_and_style_guide_md": guide_md,
        },
        "endpoints": {
            "self": f"{PREFIX}/api/styles/{style['id']}/package?layout_id={layout['id']}",
            "tokens_css": f"{PREFIX}/api/styles/{style['id']}/tokens.css",
            "layout_css": f"{PREFIX}/api/layouts/{layout['id']}/layout.css",
            "download_zip": f"{PREFIX}/api/styles/{style['id']}/download?layout_id={layout['id']}&company_name={company_name}",
        },
    }


@api_router.get(
    "/styles/{style_id}/download",
    summary="선택된 [디자인 스타일 + 웹사이트 레이아웃] 패키지(.ZIP) 즉시 다운로드",
)
def download_style_package_zip(
    style_id: str,
    layout_id: str = Query(default="layout-00-twayworks-standard"),
    company_name: str = Query(default="TheWayWorks"),
    tagline: str = Query(default="THE WAY WORKS · AI APP BUILDER"),
    logo_mark: str = Query(default="W"),
):
    style = resolve_style_by_id(style_id)
    layout = resolve_layout_by_id(layout_id)
    sid = style["id"]
    lid = layout["id"]

    tokens_css = generate_design_tokens_css(style)
    layout_css = generate_design_layout_css(layout)
    guide_md = generate_ci_and_style_guide_md(
        style, layout=layout, company_name=company_name, tagline=tagline, logo_mark=logo_mark
    )
    style_metadata_json = json.dumps(style, ensure_ascii=False, indent=2)
    layout_metadata_json = json.dumps(layout, ensure_ascii=False, indent=2)
    sample_html = build_standalone_sample_html(
        style, layout=layout, company_name=company_name, tagline=tagline, logo_mark=logo_mark
    )

    readme_md = f"""# {company_name} — Design Style & Website Layout Package
- **적용 디자인 스타일 (Tone & Manner)**: `{sid}` ({style['name_ko']} / {style['name_en']})
- **적용 웹사이트 레이아웃 (Head & Body Pattern)**: `{lid}` ({layout['domain_ko']} — {layout['name_ko']})
- **대표 참조 서비스**: {', '.join(layout.get('representative_companies', []))}

본 패키지는 **Design Templates & Website Layout Helper 시스템**에서 생성된 웹앱/홈페이지 스타터 패키지입니다.
"""

    zip_buffer = io.BytesIO()
    with zipfile.ZipFile(zip_buffer, mode="w", compression=zipfile.ZIP_DEFLATED) as zf:
        zf.writestr("README.md", readme_md)
        zf.writestr("CI_AND_STYLE_GUIDE.md", guide_md)
        zf.writestr("style-metadata.json", style_metadata_json)
        zf.writestr("layout-metadata.json", layout_metadata_json)
        zf.writestr("design-tokens.css", tokens_css)
        zf.writestr("design-layout.css", layout_css)

        zf.writestr("sample-homepage/index.html", sample_html)
        base_css_path = STATIC_DIR / "css" / "base-twayworks.css"
        helper_css_path = STATIC_DIR / "css" / "design-helper-ui.css"
        app_js_path = STATIC_DIR / "js" / "twayworks-app.js"
        helper_js_path = STATIC_DIR / "js" / "design-helper.js"

        if base_css_path.exists():
            zf.writestr(
                "sample-homepage/css/base-twayworks.css",
                base_css_path.read_text(encoding="utf-8") + "\n\n" + tokens_css + "\n\n" + layout_css,
            )
        if helper_css_path.exists():
            zf.writestr("sample-homepage/css/design-helper-ui.css", helper_css_path.read_text(encoding="utf-8"))
        if app_js_path.exists():
            zf.writestr("sample-homepage/js/twayworks-app.js", app_js_path.read_text(encoding="utf-8"))
        if helper_js_path.exists():
            zf.writestr("sample-homepage/js/design-helper.js", helper_js_path.read_text(encoding="utf-8"))

        img_dir = STATIC_DIR / "img"
        if img_dir.exists():
            for img_file in sorted(img_dir.iterdir()):
                if img_file.is_file():
                    zf.write(img_file, arcname=f"sample-homepage/img/{img_file.name}")

    zip_buffer.seek(0)
    safe_company = "".join(ch for ch in company_name.lower() if ch.isalnum() or ch in ("-", "_")) or "company"
    filename = f"{safe_company}-{sid}-{lid}-package.zip"

    return StreamingResponse(
        zip_buffer,
        media_type="application/zip",
        headers={
            "Content-Disposition": f'attachment; filename="{filename}"',
        },
    )


# =====================================================================
# FastAPI App Initialization & Dynamic DEFAULT_PREFIX Mounting
# =====================================================================
DOCS_URL = f"{PREFIX}/docs" if PREFIX else "/docs"
REDOC_URL = f"{PREFIX}/redoc" if PREFIX else "/redoc"
OPENAPI_URL = f"{PREFIX}/openapi.json" if PREFIX else "/openapi.json"

app = FastAPI(
    title="Design & Layout Studio API (v5.0 IA)",
    description="웹디자인 가이드 기반 정보설계(3-Depth 메뉴트리 · 12대 객체화 컴포넌트 · GNB/LNB/SNB/FNB) 및 Gemini LLM AI 연동 디자인 스타일 & 레이아웃 스튜디오 시스템",
    version="5.0.0",
    docs_url=DOCS_URL,
    redoc_url=REDOC_URL,
    openapi_url=OPENAPI_URL,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if PREFIX:
    app.include_router(api_router, prefix=f"{PREFIX}/api")
    app.include_router(api_router, prefix="/api", include_in_schema=False)
else:
    app.include_router(api_router, prefix="/api")


def render_index_html_with_prefix() -> HTMLResponse:
    index_path = STATIC_DIR / "index.html"
    if not index_path.exists():
        raise HTTPException(status_code=404, detail="static/index.html not found.")
    html_text = index_path.read_text(encoding="utf-8")
    prefix_script = f'<script>window.__DEFAULT_PREFIX__ = {json.dumps(PREFIX)};</script>\n  '
    if '<script src="js/twayworks-app.js"></script>' in html_text:
        html_text = html_text.replace(
            '<script src="js/twayworks-app.js"></script>',
            prefix_script + '<script src="js/twayworks-app.js"></script>',
            1,
        )
    html_text = html_text.replace('href="/templates/docs"', f'href="{DOCS_URL}"')
    return HTMLResponse(content=html_text, media_type="text/html; charset=utf-8")


if PREFIX:
    @app.get("/", include_in_schema=False)
    def root_redirect():
        return RedirectResponse(url=f"{PREFIX}/")

    @app.get(PREFIX, include_in_schema=False)
    def prefix_redirect():
        return RedirectResponse(url=f"{PREFIX}/")

    @app.get(f"{PREFIX}/", response_class=HTMLResponse, include_in_schema=False)
    def serve_sample_homepage():
        return render_index_html_with_prefix()
else:
    @app.get("/", response_class=HTMLResponse, include_in_schema=False)
    def serve_sample_homepage():
        return render_index_html_with_prefix()


for subdir in ("css", "js", "img"):
    target_dir = STATIC_DIR / subdir
    if target_dir.exists():
        if PREFIX:
            app.mount(f"{PREFIX}/{subdir}", StaticFiles(directory=str(target_dir)), name=f"prefixed_{subdir}")
        app.mount(f"/{subdir}", StaticFiles(directory=str(target_dir)), name=f"root_{subdir}")

if PREFIX:
    app.mount(f"{PREFIX}/static", StaticFiles(directory=str(STATIC_DIR)), name="prefixed_static")
app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="root_static")


if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=5000, reload=False)
