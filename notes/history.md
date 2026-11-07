# 프로젝트 개발 요구사항 및 진행 이력 (Development History)

본 문서는 매 작업 시점별 개발 요구사항과 수행 요약을 시계열로 기록합니다.

---

## [2026-10-29 23:16] 초기 프로젝트 정의, 10대 대표 디자인 스타일 메타데이터 구축 및 MVP 개발 계획 수립

### 1. 개발 요구사항 요약
- 1인 기업(중소형 기업) 홍보/광고 홈페이지 제작을 돕는 **디자인 스타일 선택 및 템플릿 패키지 제공 Helper 앱** 프로젝트의 목표와 비전 정의.
- 각 스타일별 필수 속성 정의:
  1) 디자인 스타일명
  2) 디자인 템플릿 정의 (레이아웃, 히어로, 섹션, UI 컴포넌트 규칙)
  3) 정체성을 설명하는 형용사(Adjectives), 동사(Verbs), 톤앤매너(Tone & Manner)
  4) 색상 스타일 (Primary, Secondary, Accent, Background, Surface, Text 등 HEX 팔레트)
  5) 폰트 스타일 (Heading, Body, Accent 폰트 및 타이포그래피 수치)
- 초기 **대표 디자인 스타일 10개**를 정의하고 메타데이터로 기록.
- 최소 기능 제품(**MVP**) 정의 및 세부 개발 계획 수립.
- 지정된 노트 기록 체계(`notes/requirement.md`, `notes/history.md`, `notes/req_YYYYMMDDHHmm.md`, `notes/plan_YYYYMMDDHHmm.md`, `notes/result_YYYYMMDDHHmm.md`) 준수.

### 2. 작업 수행 요약
- **10대 대표 디자인 스타일 정의 완료**:
  1. `미니멀 에센셜 (Minimal Essential)`
  2. `테크 네오 브루탈리즘 (Tech Neo-Brutalism)`
  3. `웜 아티장 & 내추럴 (Warm Artisan & Natural)`
  4. `모던 트러스트 코퍼레이트 (Modern Trust Corporate)`
  5. `다크 퓨처 & AI SaaS (Dark Future & AI SaaS)`
  6. `에디토리얼 매거진 (Editorial Magazine)`
  7. `팝 크리에이티브 & 비비드 플레이 (Pop Creative & Vivid Play)`
  8. `럭셔리 프레스티지 & 노블 (Luxury Prestige & Noble)`
  9. `클린 그로스 & 스타트업 벤토 (Clean Growth & Startup Bento)`
  10. `레트로 인디 & 아날로그 바이브 (Retro Indie & Analog Vibe)`
- **MVP 5대 핵심 기능 및 4단계 개발 로드맵 수립** (`notes/plan_202610292316.md`).
- **웹앱 연동용 표준 JSON 메타데이터 파일 생성** (`data/styles_metadata.json`).

### 3. 관련 문서 링크
- 누적 요구사항: `notes/requirement.md`
- 원본 요구사항 및 계획: `notes/req_202610292316.md`
- MVP 및 세부 개발 계획서: `notes/plan_202610292316.md`
- 산출물 생성 기록: `notes/result_202610292316.md`
- 스타일 메타데이터 JSON: `data/styles_metadata.json`

---

## [2026-11-05 18:37] Design Templates Helper 시스템 요구사항 정의 및 TheWayWorks 샘플 홈페이지 기반 구축 계획 수립

### 1. 개발 요구사항 요약
- `notes/` 내 기존 문서(10대 디자인 템플릿 정의 및 MVP 요건)를 바탕으로 **Design Templates Helper 시스템 구축 요구사항**을 정의.
- `C:\Project\글쓰기\twayworks`의 **TheWayWorks** 회사 소개 자료를 바탕으로 샘플 홈페이지를 구성하고, 정체성에 맞는 디자인 템플릿 선택 시 샘플 홈페이지와 회사 CI가 실시간으로 변경되는 구조 설계.
- 디자인 패키지를 외부에서 참조할 수 있는 **API 엔드포인트** 제공 및 **디자인 템플릿 패키지(`.zip`) 다운로드 기능**을 포함한 상세 구축 계획 수립 (사용자 리뷰 단계).

### 2. 작업 수행 요약
- **최소 개발요구조건(FR-01 ~ FR-05, NFR-01 ~ NFR-03) 정의 완료**:
  - `FR-01`: 정체성(형용사·동사·업종) 기반 스타일 탐색 및 매칭 추천
  - `FR-02`: `C:\Project\글쓰기\twayworks` 기반 TheWayWorks 샘플 홈페이지 구성 및 10대 디자인 스타일 실시간 변환(Live Theme & CI Engine)
  - `FR-03`: 회사 CI & 디자인 토큰 인스펙터 모달/패널
  - `FR-04`: 디자인 패키지 참조 REST API 엔드포인트 7종 설계 (`/api/styles`, `/api/styles/{id}`, `/api/styles/recommend`, `/api/styles/{id}/tokens.css`, `/api/styles/{id}/package`, `/api/styles/{id}/download`, `/api/company/twayworks`)
  - `FR-05`: 디자인 템플릿 패키지(`.zip` — `design-tokens.css`, `style-metadata.json`, `CI_AND_STYLE_GUIDE.md`, `sample-homepage/`) 동적 생성 및 다운로드 설계
- **단계별 구현 로드맵(Step 1 ~ Step 4) 및 디렉토리 아키텍처 수립 완료** (`notes/plan_202611051837.md`).

### 3. 관련 문서 링크
- 누적 요구사항: `notes/requirement.md` (`[REQ-002]` 추가)
- 원본 요구사항 및 계획: `notes/req_202611051837.md`
- 시스템 요구사항 정의 및 구축 계획서: `notes/plan_202611051837.md`
- 산출물 생성 기록: `notes/result_202611051837.md`

---

## [2026-11-05 18:44] FastAPI (Port 5000, Prefix `/templates`) 기반 Design Templates Helper 시스템 및 TheWayWorks 샘플 홈페이지 구현 완료

### 1. 개발 요구사항 요약
- 계획서 승인에 따른 전체 시스템 구현 착수.
- `FastAPI` 프레임워크 및 기본 포트 `5000`번 적용.
- 시작 SUBPATH PREFIX를 `/templates`로 설정하여 웹 UI(`/templates/`), REST API(`/templates/api/...`), Swagger 문서(`/templates/docs`) 제공.

### 2. 작업 수행 요약
- **백엔드(`app.py`) 구현 및 서버 구동 완료**:
  - `FastAPI` 앱에 `PREFIX = "/templates"` 및 기본 포트 `5000` 설정 완료.
  - 디자인 패키지 참조 API 엔드포인트(`/templates/api/styles`, `/templates/api/styles/{id}`, `/templates/api/styles/recommend`, `/templates/api/styles/{id}/tokens.css`, `/templates/api/styles/{id}/package`, `/templates/api/company/twayworks`) 구현.
  - 인메모리 `.zip` 패키지 생성 및 다운로드 엔드포인트(`/templates/api/styles/{id}/download`) 구현.
- **프론트엔드(`static/`) 및 TheWayWorks 샘플 홈페이지 통합 완료**:
  - `C:\Project\글쓰기\twayworks`의 6개 페이지 뷰 및 13종 이미지/카툰 SVG 에셋(`static/img/`) 완벽 이관.
  - 상단 **Design Helper Studio 컨트롤 바**를 통해 정체성(형용사·동사·업종) 매칭 추천, 10대 디자인 스타일 실시간 스위칭, 회사 CI(기업명·로고·태그라인) 라이브 커스터마이징, API/토큰 인스펙터 모달, 원클릭 `.zip` 다운로드 구현 완료.
- **전체 API 및 ZIP 다운로드 자동화 검증 통과 후 `http://localhost:5000/templates/` 서버 실행 중**.

### 3. 관련 문서 링크
- 누적 요구사항: `notes/requirement.md` (`[REQ-003]` 추가)
- 원본 요구사항 및 계획: `notes/req_202611051844.md`
- 세부 구현 계획서: `notes/plan_202611051844.md`
- 산출물 및 검증 기록: `notes/result_202611051844.md`


---

## [2026-11-06 20:05] 10대 사업 도메인별 웹사이트 레이아웃 패턴(Head & Body) 정의 및 2축(Style × Layout) 디자인 헬퍼 시스템 구축 완료

### 1. 개발 요구사항 요약
- 디자인 스타일(톤앤매너)뿐 아니라 **10개 대표 사업 도메인의 웹사이트 레이아웃(Head & Body 구조)**까지 정의하여 선택·변환할 수 있도록 수정.
- 참조 10대 도메인(1. 이커머스/무신사, 2. OTT/넷플릭스, 3. 예매/메가박스·CGV, 4. 포털·언론/네이버·조선일보, 5. 대시보드·SaaS/노션·슬랙, 6. 여행·숙박/야놀자·에어비앤비, 7. IT교육/인프런·패스트캠퍼스, 8. 채용/원티드·사람인, 9. 부동산·프롭테크/직방·다방, 10. 브랜딩·포트폴리오/토스)을 검토하고 실제 레이아웃 적용 예시까지 포함하여 구축.

### 2. 작업 수행 요약
- **10대 도메인 레이아웃 표준 메타데이터(`data/layouts_metadata.json`) 구축 완료**.
- **백엔드(`app.py` v2.0.0) 레이아웃 API 및 통합 패키지 빌더 구현 완료**:
  - `GET /templates/api/layouts`, `GET /templates/api/layouts/{layout_id}`, `GET /templates/api/layouts/{layout_id}/layout.css`, `POST /templates/api/layouts/recommend` 추가.
  - `GET /templates/api/styles/{style_id}/package` 및 `/download`에 `layout_id` 연동 (`design-tokens.css` + `design-layout.css` + `layout-metadata.json` + 통합 CI/AI 프롬프트 가이드 포함 `.ZIP` 생성).
- **프론트엔드(`static/`) 2단 스위처 및 10대 도메인 인터랙티브 레이아웃(Head + Body) 적용 예시 구현 완료**:
  - 상단 스튜디오 컨트롤러에 **[1. 디자인 스타일 퀵 스트립(11종)]** + **[2. 웹사이트 레이아웃 퀵 스트립(11종)]** 배치.
  - 각 레이아웃 선택 시 TheWayWorks의 12종 프로덕션 스낵 앱·4대 부품·Wisdom 자산이 해당 도메인 고유의 **Head + Body 레이아웃**으로 실시간 렌더링되며, 현재 선택된 디자인 스타일(톤앤매너)과 즉시 결합됨.

### 3. 관련 문서 링크
- 누적 요구사항: `notes/requirement.md` (`[REQ-004]` 추가)
- 원본 요구사항 및 계획: `notes/req_202611062005.md`
- 세부 구현 계획서: `notes/plan_202611062005.md`
- 산출물 및 검증 기록: `notes/result_202611062005.md`
- 레이아웃 메타데이터 JSON: `data/layouts_metadata.json`


---

## [2026-11-06 23:56] 프로젝트 종합 가이드 문서(README.md) 작성 완료

### 1. 개발 요구사항 요약
- 프로젝트의 목적, 구현 내역, 웹 스튜디오 및 API 사용 설명 등을 자세히 기술하여 루트 `README.md`에 작성.

### 2. 작업 수행 요약
- 루트 [`README.md`](../README.md) 파일 작성 완료 (1. 프로젝트 목적 및 배경, 2. 11종 스타일 & 11종 도메인 레이아웃 구현 내역 표, 3. 디렉토리 구조, 4. 설치 및 서버 실행 방법, 5. 웹 스튜디오 4단계 상세 사용법, 6. REST API 12종 명세 및 외부 `<link>` 연동 예시, 7. `.ZIP` 패키지 구조 및 AI 바이브코딩 활용 가이드, 8. `notes/` 문서 관리 체계).

### 3. 관련 문서 링크
- 프로젝트 루트 가이드: `README.md`
- 누적 요구사항: `notes/requirement.md` (`[REQ-005]` 추가)
- 원본 요구사항 및 계획: `notes/req_202611062356.md`, `notes/plan_202611062356.md`, `notes/result_202611062356.md`


---

## [2026-11-07 00:08] `.env` Gemini LLM AI 연동 디자인 스타일 & 레이아웃 스타일 2원 분류 제작·관리 스튜디오 구현 완료

### 1. 개발 요구사항 요약
- `.env`의 `GEMINI_API_KEY`를 활용하여 신규 디자인 스타일 및 레이아웃 스타일을 AI로 생성·등록·편집·삭제하는 기능 구축.
- 템플릿을 **[1. 디자인 스타일]**과 **[2. 레이아웃 스타일]** 2개로 분류하여 관리하고, 신규 생성된 레이아웃을 기존 샘플 웹에 즉시 적용.

### 2. 작업 수행 요약
- **백엔드(`app.py` v3.0.0) Gemini AI 생성기 및 CRUD API 완성**:
  - `GET /templates/api/studio/summary`: 2대 분류(디자인 스타일 / 레이아웃 스타일) 현황 및 Gemini AI 연결 상태 조회.
  - `POST /templates/api/styles/ai-generate`, `POST /templates/api/styles`, `PUT /templates/api/styles/{id}`, `DELETE /templates/api/styles/{id}` 구현.
  - `POST /templates/api/layouts/ai-generate`, `POST /templates/api/layouts`, `PUT /templates/api/layouts/{id}`, `DELETE /templates/api/layouts/{id}` 구현.
- **프론트엔드(`static/index.html`, `static/css/design-helper-ui.css`, `static/js/design-helper.js`) AI 스튜디오 모달 및 동적 레이아웃 렌더러 완성**:
  - `#dh-studio-manager-modal`: 2대 분류 탭(`🎨 1. 디자인 스타일 관리 & AI 제작`, `📐 2. 레이아웃 스타일 관리 & AI 제작`), Gemini AI 프롬프트 생성기, 상세 편집 폼 구현.
  - `buildDynamicCustomLayout(layout, ci)`: 신규 생성된 커스텀/AI 레이아웃을 기존 TheWayWorks 샘플 웹(12종 스낵앱 + 4대 코어 엔진)에 6대 아키타입으로 실시간 렌더링.

### 3. 관련 문서 링크
- 누적 요구사항: `notes/requirement.md` (`[REQ-006]` 추가)
- 원본 요구사항 및 계획: `notes/req_202611070008.md`
- 세부 구현 계획서: `notes/plan_202611070008.md`
- 산출물 및 검증 기록: `notes/result_202611070008.md`


---

## [2026-11-07 14:06] 웹사이트 제작 지원도구 UI/UX 전면 개편(v4.0) 4단계 사용자 흐름 설계 및 구현 완료

### 1. 개발 요구사항 요약
- 복잡하고 조잡한 현행 UI/UX를 개편하여 사용자 접근성과 사용성을 높이는 **4단계 점진적 탐색(Progressive Disclosure) 흐름** 수립 및 승인 후 구현 완료:
  1) **첫 페이지 (`#dh-stage-landing`)**: 지원도구의 목적·사용법·활용방법을 세련되게 안내하고, 표준 구성요소를 한눈에 볼 수 있는 대표 디자인 스타일 및 레이아웃 타일(10~20개) 제공.
  2) **상세 가이드 & 경량 표준 프리뷰 (`#dh-stage-preview`)**: 타일 선택 시 스타일 가이드(톤앤매너 중심)와 레이아웃(메뉴 배치 & 뷰 스타일 중심) 상세 설명, 템플릿(`.ZIP`) 다운로드, 그리고 최종 적용 전 표준 구성을 한눈에 볼 수 있는 **4대 대표 페이지 구성 경량 프리뷰** 제공.
  3) **고급 선택 & 디자인 관리 페이지 (`#dh-stage-advanced`)**: 대표 타일 외 상세 요구사항에 맞게 `[스타일 가이드(톤앤매너) × 레이아웃(메뉴 배치·뷰 스타일)]` 조합을 비교·선택하거나 Gemini AI/커스텀 편집으로 신규 생성하고, 동일하게 표준 프리뷰 및 샘플 홈페이지 적용으로 연결.
  4) **전체 샘플 홈페이지 네비게이션 & 최종 확정 (`#dh-stage-sample`)**: 샘플 디자인 적용 후 전체 샘플 홈페이지(HOME ~ 05 서브페이지 및 도메인 레이아웃 뷰)를 자유롭게 네비게이션하며 최종 확정.

### 2. 작업 수행 요약
- **백엔드(`app.py`)**: 레이아웃 메타데이터의 직관적 이원 분류(`menu_placement_type/ko` 메뉴 배치 / `view_style_type/ko` 바디 뷰 스타일) 보강 완료.
- **프론트엔드(`static/index.html`, `static/css/design-helper-ui.css`, `static/js/design-helper.js`)**:
  - 글로벌 4단계 스텝 내비게이션 바(`#dh-app-navbar`) 및 4대 전용 화면 컨테이너(`#dh-stage-landing`, `#dh-stage-preview`, `#dh-stage-advanced`, `#dh-stage-sample`) 구축 완료.
  - 첫 페이지 대표 스타일 10선 / 대표 레이아웃 10선 / 통합 20선 미니 웹 와이어프레임 타일 그리드(`renderLandingRepresentativeTiles`) 및 선택 전 **4대 표준 대표 페이지(홈·히어로 / 서비스 카드뷰 / 스토리·아키텍처 / 진단폼·푸터) 2×2 경량 프리뷰 엔진(`buildRepresentativeStandardPagesHtml`)** 구현 완료.
  - 고급 조합 관리 스튜디오(`renderAdvancedStudioWorkspace`) 구현 및 전체 테스트·검증 통과.

### 3. 관련 문서 링크
- 누적 요구사항: `notes/requirement.md` (`[REQ-007]` 추가)
- 원본 요구사항 및 분석: `notes/req_202611071406.md`
- UI/UX 전면 개편 상세 계획서: `notes/plan_202611071406.md`
- 산출물 생성 및 완료 기록: `notes/result_202611071406.md`


---

## [2026-11-07 15:24] 정보설계(IA) 메뉴트리 · 12대 객체화 컴포넌트 · GNB/LNB/SNB/FNB 및 계층적 레이아웃 재배치 스튜디오(v5.0) 개발 완료

### 1. 개발 요구사항 요약
- 웹디자인 가이드에 따라 기능 나열 ➔ 네비게이션 배치 ➔ 디자인 스타일 적용 ➔ 레이아웃 계층 배치를 순차 설계하여 직관적이고 여백 있는 **Design & Layout Studio (v5.0)**로 재구조화:
  1) **정보설계(IA) 메뉴트리 & 객체화 컴포넌트 레지스트리**: 최대 3-Depth(`GNB ➔ LNB ➔ SNB`), 1-Click 이동, 목적 최우선 배치 메뉴트리 작성 및 사이트 정보를 **5대 계층 그룹(`GRP-01`~`05`) · 12개 정보 컴포넌트 객체(`IC-01`~`IC-12`)**로 등록.
  2) **GNB · LNB · SNB · FNB 아키텍처**: 상단 GNB(Depth 1), 서브 LNB(Depth 2 탭 & 툴팁/드로어), 좌측 SNB(Depth 3 빠른 스타일·레이아웃·CI 제어), 하단 FNB(경로·사이트맵·다음 단계 CTA) 구성 및 상호 관계 정의.
  3) **여백 확보 · 스크롤 최소화(최대 2페이지 이내) · 툴팁/확장 방식 적용**: 긴 설명은 `[ⓘ 툴팁]`과 `<details>` 아코디언으로 분리하고, LNB 탭 분할을 통해 모든 기능 뷰가 1~2 페이지 이내에 쾌적하게 표시되도록 개선.
  4) **메뉴트리 기반 컴포넌트 계층 재배치(Reflow) & 특징적 뷰(`FV-00`~`FV-10`) 생성**: 레이아웃(`layout-00`~`10`) 선택 시 12개 정보 컴포넌트가 슬롯별로 어떻게 재배치되는지 시각화하고, 각 레이아웃 고유 정보구조로 설계된 **특징적 뷰(`FV-00`~`FV-10`)**를 별도 생성하여 제공.

### 2. 작업 수행 요약
- **백엔드(`app.py`)**: `NAVIGATION_RELATIONSHIP_SPEC`, `IA_MENU_TREE`, `INFORMATION_COMPONENT_REGISTRY`, `LAYOUT_IA_REFLOW_MAP` 정의 및 `GET /templates/api/ia/architecture`, `GET /templates/api/ia/reflow/{layout_id}` 엔드포인트 추가.
- **프론트엔드(`static/index.html`, `static/css/design-helper-ui.css`, `static/js/design-helper.js`)**:
  - GNB · LNB · SNB · FNB 3-Depth App Shell 및 `#dh-stage-ia` (`2-1. 레이아웃별 컴포넌트 계층 재배치 & 특화 뷰`, `2-2. 3-Depth 메뉴트리 & 네비게이션 관계`, `2-3. 정보 컴포넌트 레지스트리 12대 객체`) 구현 완료.
  - `node --check` 및 FastAPI `TestClient` 통합 검증 통과 후 포트 5000 서버 재기동 완료.

### 3. 관련 문서 링크
- 누적 요구사항: `notes/requirement.md` (`[REQ-008]` 추가)
- 원본 요구사항 기록: `notes/req_202611071524.md`
- 정보설계 및 구현 계획서: `notes/plan_202611071524.md`
- 구현 완료 및 검증 보고서: `notes/result_202611071524.md`


---

## [2026-11-07 17:31] Docker 컨테이너(`Dockerfile`), `DEFAULT_PREFIX` 동적 라우팅, 영속 볼륨(`DATABASE_PATH`), `/api/status` 헬스체크 및 `README.md` 종합 업데이트 완료

### 1. 개발 요구사항 요약
- Docker 컨테이너 생성을 위한 `Dockerfile` 작성 (Persistent Volume `DATABASE_PATH` 환경변수, 노출 포트 `5000`, `DEFAULT_PREFIX` Base URL 환경변수, `{prefix}/api/status` 연동 `HEALTHCHECK`, `uvicorn`/`gunicorn` 기반 `main:app` 시작 `CMD`).
- `Dockerfile` 조건과 `DEFAULT_PREFIX`를 고려하여 애플리케이션 코드(`main.py`, `app.py`, `static/js/design-helper.js`) 수정.
- 프로젝트 목적, 사용법, 기능 설명, 구현 내용, 실행 방법, 배포 방법을 `README.md`에 업데이트하여 기록 유지.

### 2. 작업 수행 요약
- **컨테이너 및 서버 엔트리포인트 구축 (`Dockerfile`, `.dockerignore`, `main.py`, `gunicorn.conf.py`, `requirements.txt`)**:
  - `Dockerfile`에 `ENV DATABASE_PATH=/app/data`, `ENV DATA_DIR=/app/data`, `ENV DEFAULT_PREFIX=/templates`, `EXPOSE 5000`, `VOLUME ["/app/data"]`, 요청된 `HEALTHCHECK` 및 `CMD` 적용.
  - `main.py` 및 `gunicorn.conf.py` 생성으로 `uvicorn main:app`과 `gunicorn ... main:app` 모두 지원.
- **`DEFAULT_PREFIX` · 영속 볼륨 자동 시딩 · `/api/status` 구현 (`app.py`, `static/js/design-helper.js`)**:
  - `DEFAULT_PREFIX` 환경변수 기반 동적 라우팅 및 HTML `window.__DEFAULT_PREFIX__` 자동 주입.
  - 빈 볼륨 마운트 시 `/app/seed_data`에서 JSON 데이터베이스 3종 자동 복원(`ensure_persistent_data_seeded()`).
  - `GET {DEFAULT_PREFIX}/api/status` 및 `GET /api/status` 헬스체크 엔드포인트 구현.
- **`README.md` 전면 업데이트 및 통합 검증 완료**:
  - 프로젝트 목적, v5.0 IA 메뉴트리/컴포넌트/특화뷰 기능 설명, 시나리오별 사용법, 로컬 및 Docker 배포 방법 상세 문서화 완료.

### 3. 관련 문서 링크
- 프로젝트 종합 가이드: [`README.md`](../README.md)
- 누적 요구사항: `notes/requirement.md` (`[REQ-009]` 추가)
- 원본 요구사항 기록: `notes/req_202611071731.md`
- 구현 계획서: `notes/plan_202611071731.md`
- 구현 완료 및 검증 보고서: `notes/result_202611071731.md`
