# 🎨 Design & Layout Studio (v5.0 IA) — 정보설계(메뉴트리·컴포넌트) 기반 웹사이트 제작 지원도구

> **웹디자인 기본 설계 가이드(정보설계 IA ➔ GNB·LNB·SNB·FNB 네비게이션 ➔ 디자인 스타일 톤앤매너 ➔ 레이아웃 계층 재배치)에 따라 1인 기업(Snap Company) 및 중소기업의 웹사이트를 체계적으로 설계·프리뷰·출고하는 올인원 웹 디자인 & 레이아웃 스튜디오**

---

## 📌 1. 프로젝트 목적 및 핵심 가치 (Purpose & Vision)

웹사이트나 신규 비즈니스 앱(Snack App)을 구축할 때, 단순히 색상만 바꾸거나 무작정 긴 샘플 페이지를 나열하면 사용자의 직관적 이해도가 떨어지고 화면 구조가 산만해집니다.

본 프로젝트(**Design & Layout Studio v5.0**)는 **웹디자인 기본 설계 가이드**의 4단계 원칙을 기반으로 사용자의 접근성(Accessibility)과 사용성(Usability)을 극대화합니다:

1. **정보설계(IA) 및 사이트 정보의 객체화 (`GRP-01`~`05` · `IC-01`~`12`)**:
   - 사이트를 구성하는 모든 정보를 **5대 계층 그룹**과 **12개 표준 정보 컴포넌트 객체(`IC-01`~`IC-12`)**로 정의·등록하여, 어떤 레이아웃을 선택하더라도 컴포넌트 단위로 체계적인 재배치(Reflow)가 이루어집니다.
2. **목적 최우선 배치 & 최대 3-Depth · 1-Click 내비게이션 (`GNB ➔ LNB ➔ SNB & FNB`)**:
   - **GNB (Depth 1)**: 사용자의 핵심 목적에 맞춘 5대 대메뉴를 상단에 배치하여 1-Click으로 이동합니다.
   - **LNB (Depth 2)**: 각 대메뉴 하위를 3개의 핵심 탭으로 분할하여 **스크롤이 길어지지 않도록 최대 1.5~2 페이지 이내**에 기능을 나열하며, 긴 설명은 **`[ⓘ 툴팁]`**과 **`[▾ 아코디언 확장]`**으로 처리하여 쾌적한 여백(Whitespace)을 유지합니다.
   - **SNB (Depth 3)**: 좌측 도킹 사이드바에서 디자인 스타일(톤앤매너), 웹사이트 레이아웃(메뉴·뷰), 기업 CI를 화면 이동 없이 1-Click으로 즉시 전환합니다.
   - **FNB (Global Footer Bar)**: 현재 3-Depth 경로 브레드크럼, 사이트맵 점프 링크, 다음 단계 시나리오 유도 CTA를 제공합니다.
3. **톤앤매너(Style Guide)와 공간 배치(Layout Architecture)의 명확한 분리**:
   - **디자인 스타일(11종+AI)**: 브랜드 분위기, 정체성 형용사·동사, 8대 컬러 토큰, 타이포그래피 중심.
   - **웹사이트 레이아웃(11종+AI)**: **메뉴들의 배치(Menu Placement)**와 **본문 뷰 스타일(View Style)** 중심.
4. **메뉴트리 기반 계층적 재배치(Reflow) 및 레이아웃별 특징적 뷰(`FV-00`~`FV-10`) 제공**:
   - 레이아웃 변경 시 `IC-01`~`IC-12` 컴포넌트가 각 슬롯(`SLOT-GNB / LNB / SNB / HERO / BODY-MAIN / CONVERSION / FNB`)으로 어떻게 이동하는지 다이어그램으로 시각화하고, 각 레이아웃 고유의 **특징적 뷰(Characteristic Feature View, `FV-00`~`FV-10`)**와 **4대 대표 표준 페이지 경량 프리뷰**를 제공합니다.
5. **Docker 컨테이너 및 `DEFAULT_PREFIX` · 영속 볼륨(`DATABASE_PATH`) 완벽 지원**:
   - 환경변수 `DEFAULT_PREFIX`(기본값 `/templates`)를 참조하여 Base URL을 동적으로 구성하고, `DATABASE_PATH` 볼륨 마운트를 통해 AI/커스텀 생성 스타일·레이아웃 데이터를 영구 보존합니다.

---

## 🗺️ 2. 정보설계(IA) 메뉴트리 및 객체화 컴포넌트 아키텍처 (v5.0)

### 2.1. GNB · LNB · SNB · FNB 내비게이션 계층 및 메뉴 간 관계

| 내비게이션 | 계층 (Depth) | 화면 배치 및 속성 | 핵심 역할 및 메뉴 간 연동 관계 |
|:---:|:---:|:---|:---|
| **GNB**<br>*(Global Nav)* | **Depth 1** | 상단 고정 바 (`56px`, Sticky) | 사용자 목적 우선순위에 따른 5대 핵심 메뉴 1-Click 이동 + 현재 `[스타일 × 레이아웃]` 상태 캡슐 및 `.ZIP` 출고 제어. 클릭 시 하위 **LNB 탭 목록**을 즉시 교체합니다. |
| **LNB**<br>*(Local Nav)* | **Depth 2** | GNB 하단 밀착 바 (`44px`, Sticky) | 각 GNB 메뉴의 기능을 **3개의 1-Click 서브탭**으로 분할하여 **최대 2페이지 이내**로 화면 길이를 제어합니다. 우측에 **`[ⓘ 현재 화면 설계 관계]` 툴팁**과 **`[▾ 웹설계 가이드 요약]` 확장 드로어**를 제공합니다. |
| **SNB**<br>*(Side Nav)* | **Depth 3** | 좌측 도킹 패널 (`272px`, 접기/펼치기) | 디자인 스타일(00~10+), 레이아웃(00~10+), 기업 CI를 1-Click으로 즉시 변경합니다. 조작 즉시 우측 메인 뷰(타일·IA 재배치도·프리뷰·샘플 사이트)가 실시간 리렌더링됩니다. |
| **FNB**<br>*(Footer Nav)* | **Global** | 하단 슬림 바 (`52px`, Sticky) | 현재 위치의 3-Depth 경로(`GNB ➔ LNB ➔ 적용 프리셋`), 1-Click 사이트맵 점프, Swagger 문서 링크, 다음 시나리오 단계 이동 CTA를 제공합니다. |

### 2.2. 전체 기능 메뉴트리 (최대 3-Depth · 1-Click 구조)

```text
[Depth 1: GNB]                           [Depth 2: LNB (1-Click 탭)]                     [Depth 3: SNB / 조작 액션]
├─ 🎯 1. 대표 템플릿 갤러리 (최우선) ──┬─ 1-1. 대표 디자인 스타일 10선 (톤앤매너)       ──► 스타일 타일 1-Click 선택 & 키워드 필터
│                                      ├─ 1-2. 대표 레이아웃 아키텍처 10선 (메뉴·뷰)    ──► 레이아웃 타일 1-Click 선택 & 분류 필터
│                                      └─ 1-3. 웹디자인 기본 설계 가이드 & 활용법       ──► 4단계 설계 원칙 & 활용 시나리오 카드
│
├─ 🗺️ 2. 정보설계(IA) & 재배치도    ──┬─ 2-1. 레이아웃별 컴포넌트 계층 재배치 & 특화뷰 ──► 레이아웃 변경 시 슬롯별 IC 재배치 & FV 시연
│                                      ├─ 2-2. 3-Depth 메뉴트리 & 네비게이션 관계       ──► GNB·LNB·SNB·FNB 관계도 & 대화형 메뉴트리
│                                      └─ 2-3. 정보 컴포넌트 레지스트리 (12대 객체)     ──► GRP-01~05 계층 필터 & IC-01~12 명세
│
├─ 🖥️ 3. 스타일 & 표준·특화 프리뷰  ──┬─ 3-1. 4대 대표 표준페이지 한눈에 보기 (2×2)    ──► 홈·서비스·스토리·진단 4개 표준 화면 동시 비교
│                                      ├─ 3-2. 레이아웃별 고유 특화 뷰 (FV-00~10)       ──► 선택 레이아웃 전용 시그니처 화면 단독 시연
│                                      └─ 3-3. 스타일(톤앤매너) & 레이아웃 상세 명세    ──► 8대 컬러·폰트·메뉴배치·뷰스타일 상세 카드
│
├─ 🎛️ 4. 고급 조합 & AI 스튜디오    ──┬─ 4-1. 스타일 × 레이아웃 2축 조합 매트릭스      ──► 다중 조건 필터링 & 121+ 조합 즉시 시뮬레이션
│                                      ├─ 4-2. Gemini AI 신규 스타일·레이아웃 생성      ──► 자연어 프롬프트 기반 AI 자동 설계·등록
│                                      └─ 4-3. 기업 CI 커스터마이징 & 패키지 구성       ──► 기업명·로고·태그라인 실시간 반영
│
└─ 🚀 5. 전체 샘플 사이트 & 출고    ──┬─ 5-1. 전체 샘플 홈페이지 라이브 네비게이션      ──► HOME ~ 05 서브페이지 & 도메인 레이아웃 탐색
                                       ├─ 5-2. REST API 엔드포인트 & CSS 토큰 참조      ──► 외부 웹앱 `<link>` 및 AI 프롬프트 복사
                                       └─ 5-3. 최종 템플릿 스타터 패키지 (.ZIP) 출고    ──► 스타일+레이아웃+샘플웹 통합 ZIP 다운로드
```

### 2.3. 사이트 정보 객체화 레지스트리 (5대 계층 그룹 · 12개 표준 컴포넌트 `IC-01`~`IC-12`)

| 계층 그룹 | 컴포넌트 ID | 컴포넌트 객체명 | 기본 슬롯 | 레이아웃 변경 시 계층적 재배치(Reflow) 특징 |
|:---|:---:|:---|:---:|:---|
| **GRP-01**<br>내비게이션 계층 | **`IC-01`** | 브랜드 CI & 글로벌 헤더 객체 | `SLOT-GNB` | 상단 고정 GNB, 투명 오버레이 바(OTT), 반투명 플로팅 헤더(프롭테크), 미니멀 앵커(원페이지)로 변형 |
| **GRP-01**<br>내비게이션 계층 | **`IC-02`** | 로컬 탭 & 빠른 탐색 바 객체 | `SLOT-LNB` | 1차 카테고리 탭(이커머스), 빠른 예매 바(메가박스), 알약형 검색 위젯(여행), 뉴스 섹션 탭(포털)으로 변형 |
| **GRP-01**<br>내비게이션 계층 | **`IC-03`** | 사이드 트리 & 다중 필터 객체 | `SLOT-SNB` | 좌측 다중 필터(이커머스), 워크스페이스 폴더 트리(SaaS), 오버레이 매물 리스트(프롭테크)로 배치 |
| **GRP-01**<br>내비게이션 계층 | **`IC-04`** | 푸터 사이트맵 & 저작권 객체 | `SLOT-FNB` | 표준 푸터, 하단 미니 상태바(SaaS), 지도 범례 바(프롭테크)로 재배치 |
| **GRP-02**<br>핵심 가치 계층 | **`IC-05`** | 히어로 슬로건 & 액션 CTA 객체 | `SLOT-HERO` | 2단 가치제안 히어로, 풀스크린 빌보드(OTT), Chapter 01 초대형 매니페스토(토스형)로 재배치 |
| **GRP-02**<br>핵심 가치 계층 | **`IC-06`** | 4대 핵심 축 & 성과 지표 객체 | `SLOT-HERO` | 히어로 하단 지표, 포털 우측 실시간 가동 지수 위젯, 원페이지 대형 카운터로 재배치 |
| **GRP-03**<br>카탈로그 계층 | **`IC-07`** | 12종 프로덕션 스낵앱 카탈로그 객체 | `SLOT-BODY-MAIN` | 4열 상품 그리드(무신사), TOP 10 포스터 캐러셀(넷플릭스), 박스오피스 차트(CGV), 칸반/테이블(노션), 숙소 리스트(에어비앤비), 채용 포지션 카드(원티드)로 변환 |
| **GRP-03**<br>카탈로그 계층 | **`IC-08`** | 4대 코어 기술 엔진 탭 객체 | `SLOT-BODY-MAIN` | 표준 2분할 기술 탭, SaaS 좌측 채널, 에듀테크 기술스택 필터 칩으로 재배치 |
| **GRP-04**<br>스토리·증명 계층 | **`IC-09`** | 6컷 카툰 스토리보드 & 배선 객체 | `SLOT-BODY-SUB` | 히어로 우측 4단계 배선 카드, 포털 중앙 커버스토리 기사, 원페이지 Chapter 02 스토리로 재배치 |
| **GRP-04**<br>스토리·증명 계층 | **`IC-10`** | Wisdom 지식검증(DIKW) 객체 | `SLOT-BODY-SUB` | 아키텍처 섹션, SaaS 문서 스펙 탭, 채용 역량 검증표로 재배치 |
| **GRP-05**<br>전환·특화뷰 계층 | **`IC-11`** | 3분 무료 진단 & 신청 폼 객체 | `SLOT-CONVERSION` | 하단 진단 폼, 장바구니/즉시개통 모달, 1-Click 채용 지원 바로 재배치 |
| **GRP-05**<br>전환·특화뷰 계층 | **`IC-12`** | **레이아웃 도메인 특화 뷰 객체** | `SLOT-BODY-MAIN` | 각 레이아웃(`layout-00`~`10`)의 정체성을 대표하는 **시그니처 뷰(`FV-00`~`FV-10`)** 생성 |

---

## 🏗️ 3. 디자인 스타일(11종) & 웹사이트 레이아웃(11종) 카탈로그

### 3.1. 디자인 스타일 가이드 (Tone & Manner 중심 — 10+1종 + AI 확장)
[`data/styles_metadata.json`](data/styles_metadata.json)에 정의된 11종 스타일은 8대 시맨틱 컬러 토큰, 타이포그래피, UI 컴포넌트 곡률/그림자, 정체성 형용사·동사 및 카피라이팅 어조를 제공합니다.

| 코드 | 디자인 스타일명 | 핵심 정체성 (형용사 / 동사) | 컬러 스킴 & 주요 특징 |
|:---:|:---|:---|:---|
| **`style-00`** | **더웨이웍스 오리지널** *(Original)* | 지적인, 신뢰할 수 있는, 따뜻한 / 연결하다, 자동화하다 | Light & Deep Indigo (`#251E66`, `#4F46E5`, `#10B981`) |
| **`style-01`** | **미니멀 에센셜** *(Minimal Essential)* | 절제된, 명료한, 본질적인 / 정제하다, 집중하다 | Light Monochrome (`#111111`, `#FAFAFA`), `0px` 직각 보더 |
| **`style-02`** | **테크 네오 브루탈리즘** *(Neo-Brutalism)* | 대담한, 파격적인, 직관적인 / 타파하다, 돌직구를 던지다 | Vivid Pop (`#FF5722`, `#A3E635`), `3px solid #000` 하드 섀도우 |
| **`style-03`** | **웜 아티장 & 내추럴** *(Warm Artisan)* | 따뜻한, 정성스러운, 평온한 / 빚어내다, 치유하다 | Earthy Warm (`#8C5A3C`, `#5F6F52`, `#F7F4EF`), 라운드 프레임 |
| **`style-04`** | **모던 트러스트 코퍼레이트** *(Corporate)* | 신뢰할 수 있는, 체계적인, 검증된 / 해결하다, 증명하다 | Trust Navy & Blue (`#0F2942`, `#2563EB`), 정교한 표준 그리드 |
| **`style-05`** | **다크 퓨처 & AI SaaS** *(Dark Future)* | 혁신적인, 미래지향적인, 정밀한 / 가속하다, 확장하다 | Dark Mode & Neon Glow (`#090A0F`, `#6366F1`, `#06B6D4`) |
| **`style-06`** | **에디토리얼 매거진** *(Editorial Magazine)* | 감각적인, 우아한, 큐레이션된 / 조명하다, 서술하다 | Warm Paper & Ink (`#F4F1EA`, `#141413`), 세리프 헤딩 & 헤어라인 |
| **`style-07`** | **팝 크리에이티브 & 비비드** *(Pop Creative)* | 발랄한, 친근한, 유쾌한 / 즐기다, 상상하다 | Vivid Pink & Yellow (`#FF3366`, `#FFCC00`), 캡슐형 버튼 |
| **`style-08`** | **럭셔리 프레스티지 & 노블** *(Luxury)* | 독보적인, 품격 있는, 희소한 / 선사하다, 예우하다 | Deep Black & Champagne Gold (`#0B0B0C`, `#C5A059`) |
| **`style-09`** | **클린 그로스 & 스타트업 벤토** *(Bento)* | 스마트한, 효율적인, 투명한 / 성장시키다, 최적화하다 | Clean White & Emerald (`#10B981`, `#0F172A`), 모듈형 벤토 그리드 |
| **`style-10`** | **레트로 인디 & 아날로그** *(Retro Indie)* | 독창적인, 향수를 자극하는 / 기록하다, 수집하다 | Vintage Paper & Brick Red (`#F2E9D8`, `#C83E2B`), 티켓 스탬프 보더 |

### 3.2. 웹사이트 레이아웃 패턴 (메뉴 배치 & 뷰 스타일 중심 — 10+1종 + 특화 뷰 `FV-00`~`10`)
[`data/layouts_metadata.json`](data/layouts_metadata.json)에 정의된 11종 레이아웃은 **메뉴 배치(Menu Placement)**와 **바디 뷰 스타일(View Style)**로 구분되며, 각 레이아웃마다 고유한 **특징적 뷰(`FV-00`~`FV-10`)**를 생성합니다.

| 코드 | 도메인 & 참조 서비스 | 메뉴 배치 (GNB / LNB / SNB) | 바디 뷰 스타일 | 생성되는 고유 특화 뷰 (`IC-12`) |
|:---:|:---|:---|:---|:---|
| **`layout-00`** | **기본 기업형 표준**<br>*(더웨이웍스)* | 상단 고정 표준 GNB (6대 메뉴 탭) | 2단 히어로 + 교차형 섹션 뷰 | **`FV-00`**: Vibe-to-App 4단계 자동배선 파이프라인 & 6컷 카툰 스토리 뷰 |
| **`layout-01`** | **이커머스 / 쇼핑몰**<br>*(무신사)* | 통합 검색바 + 1차 카테고리 멀티탭 + 좌측 필터 SNB | 좌측 다중 필터 + 4열 상품 카드 그리드 | **`FV-01`**: 실시간 브랜드 필터 사이드바 + 랭킹·할인율·장바구니 상품 그리드 뷰 |
| **`layout-02`** | **콘텐츠 스트리밍 & OTT**<br>*(넷플릭스 / 왓챠)* | 상단 투명 그라데이션 오버레이 미니멀 GNB | 풀스크린 빌보드 + 수평 캐러셀(Row) | **`FV-02`**: 시네마틱 빌보드 배너 + TOP 10 아웃라인 넘버링 포스터 수평 캐러셀 뷰 |
| **`layout-03`** | **엔터테인먼트 & 예매**<br>*(메가박스 / CGV)* | 상단 GNB + **밀착형 3단계 빠른 예매 고정 바(LNB)** | 박스오피스 포스터 차트 그리드 | **`FV-03`**: 3-Step 빠른 예매 바(앱·극장·회차) + 실시간 티켓 발권 & 박스오피스 차트 뷰 |
| **`layout-04`** | **종합 포털 & 언론사**<br>*(네이버 뉴스 / 조선일보)* | 마스트헤드 대형 검색창 + 뉴스 섹션 탭바 | 3단 신문 편집 그리드 (`속보 · 헤드라인 · 위젯`) | **`FV-04`**: 3단 언론사 편집 데스크 (좌측 타임라인 속보 + 중앙 커버스토리 + 우측 지수 위젯) |
| **`layout-05`** | **기업형 대시보드 & SaaS**<br>*(노션 / 슬랙 / 잔디)* | **좌측 고정 계층형 트리 사이드바(SNB)** + 워크스페이스 헤더 | 좌우 분할 앱 쉘 & 멀티뷰 워크스페이스 | **`FV-05`**: 좌측 폴더·채널 트리 내비게이션 + 우측 칸반 보드 & 데이터베이스 테이블 뷰 |
| **`layout-06`** | **여행 & 숙박 예약**<br>*(야놀자 / 에어비앤비)* | 상단 중앙 **알약형 조건 검색 위젯**(지역·날짜·인원) | 좌측 숙소 카드 + 우측 가격 핀 지도 2분할 | **`FV-06`**: 좌측 스테이 카드 리스트 + 우측 실시간 요금 캡슐(`₩0`) 인터랙티브 지도 스플릿 뷰 |
| **`layout-07`** | **IT 교육 & 온라인 강의**<br>*(인프런 / 패스트캠퍼스)* | 카테고리 드롭다운 GNB + 난이도/기술스택 태그 LNB | 프로모션 배너 + 4열 강의 큐레이션 그리드 | **`FV-07`**: 부트캠프 로드맵 배너 + 기술스택 해시태그 필터 & 수강평점(`★5.0`) 클래스 뷰 |
| **`layout-08`** | **구인구직 & 채용 플랫폼**<br>*(원티드 / 사람인)* | 직군·직무 키워드 태그 필터 헤더 + 우측 계산기 SNB | AI 부서원 포지션 매칭 피드 + 우측 계산기 | **`FV-08`**: AI 디지털 부서원 포지션 매칭 카드(매칭률 99%) + 우측 연간 외주비 절감 계산기 뷰 |
| **`layout-09`** | **부동산 & 프롭테크**<br>*(직방 / 다방)* | 지도 상단 반투명 플로팅 헤더 + 좌측 오버레이 패널 SNB | 100% 풀스크린 지도 + 좌측 슬라이드 패널 | **`FV-09`**: 100% 풀스크린 클러스터 핀 지도 + 좌측 오버레이 단지 브리핑 드로어 뷰 |
| **`layout-10`** | **기업 브랜딩 & 포트폴리오**<br>*(토스 브랜드 페이지)* | 초미니멀 글래스 플로팅 헤더 + 우측 챕터 앵커 닷 | 초대형 타이포 원페이지 패럴랙스 스토리 | **`FV-10`**: 초대형 타이포그래피 매니페스토 + Chapter 01~04 원페이지 스토리텔링 뷰 |

---

## 📂 4. 프로젝트 디렉토리 및 구현 구조 (Directory Structure)

```text
C:\Dev\python\snapcompany\templates\
├── main.py                         # 컨테이너 & ASGI/WSGI 표준 엔트리포인트 (uvicorn main:app / gunicorn main:app 호환)
├── app.py                          # FastAPI 메인 애플리케이션 서버 (v5.0 IA, DEFAULT_PREFIX, DATABASE_PATH 볼륨 시딩, AI, ZIP 빌더)
├── gunicorn.conf.py                # Gunicorn 운영 서버 설정 (UvicornWorker 자동 바인딩, Port 5000, Workers 2)
├── Dockerfile                      # Docker 컨테이너 이미지 빌드 명세 (Port 5000, DEFAULT_PREFIX, DATABASE_PATH, HEALTHCHECK)
├── .dockerignore                   # Docker 빌드 컨텍스트 제외 파일 목록
├── requirements.txt                # Python 패키지 의존성 (fastapi, uvicorn, gunicorn, pydantic, python-dotenv, requests, google-genai)
├── README.md                       # 프로젝트 종합 가이드 문서 (현재 파일)
├── data/                           # JSON 데이터베이스 디렉토리 (Docker 볼륨 마운트 대상: DATABASE_PATH=/app/data)
│   ├── styles_metadata.json        # 10대 대표 디자인 스타일(Tone & Manner) + 커스텀/AI 스타일 영구 저장소
│   ├── layouts_metadata.json       # 10대 도메인별 웹사이트 레이아웃(Head & Body) + 커스텀/AI 레이아웃 영구 저장소
│   └── twayworks_profile.json      # 샘플 홈페이지(TheWayWorks) 기업 철학 및 12종 프로덕션 스낵 앱 프로필
├── static/
│   ├── index.html                  # v5.0 GNB·LNB·SNB·FNB App Shell + 5대 스테이지 뷰 + TheWayWorks 샘플 홈페이지 HTML
│   ├── css/
│   │   ├── base-twayworks.css      # CSS Custom Properties(--dh-*) 기반 반응형 스타일시트
│   │   └── design-helper-ui.css    # v5.0 GNB/LNB/SNB/FNB, 툴팁, IA 재배치 다이어그램, 특화 뷰(FV), 도메인 레이아웃 스타일시트
│   ├── js/
│   │   ├── design-helper.js        # v5.0 3-Depth 라우터, IA 재배치 & 특화 뷰 렌더러, 스타일×레이아웃 변환 엔진, AI 스튜디오 클라이언트
│   │   └── twayworks-app.js        # 샘플 홈페이지 서브페이지 라우터, 12종 스낵 앱 필터, 코어 엔진 탭, 라이트박스 컨트롤러
│   └── img/                        # 카툰 파이프라인 SVG(cartoon-pipeline-v02.svg) 및 12종 프로덕션 스낵 앱 스크린샷(13종)
└── notes/                          # 요구사항, 설계 계획, 수행 결과 및 시계열 개발 히스토리 문서
```

---

## 🚀 5. 로컬 실행 및 Docker 컨테이너 배포 방법 (Execution & Deployment Guide)

### 5.1. 환경변수 (Environment Variables) 명세

애플리케이션은 다음 환경변수를 통해 라우팅 Prefix와 영속 데이터 볼륨 경로를 제어합니다:

| 환경변수명 | 기본값 | 설명 |
|:---|:---|:---|
| **`DEFAULT_PREFIX`** | `"/templates"` | 웹앱의 기본 Base URL Prefix를 지정합니다.<br>- 예: `DEFAULT_PREFIX=/templates` ➔ 웹 UI: `/templates/`, 상태 API: `/templates/api/status`, Swagger: `/templates/docs`<br>- 빈 값(`""`) 설정 시 루트(`/`, `/api/status`, `/docs`)를 기본 경로로 작동합니다. |
| **`DATABASE_PATH`** *(또는 `DATA_DIR`)* | `./data` *(Docker: `/app/data`)* | 디자인 스타일(`styles_metadata.json`), 레이아웃(`layouts_metadata.json`), 기업 프로필(`twayworks_profile.json`) 데이터베이스 파일이 저장되는 Persistent Volume 경로입니다.<br>- **자동 시딩(Auto-Seeding)**: 마운트된 볼륨 디렉토리가 비어 있을 경우, 컨테이너 내장 초기 데이터(`/app/seed_data`)에서 기본 JSON 파일들을 자동으로 복사하여 초기화합니다. |
| **`GEMINI_API_KEY`** | *(선택)* | Gemini LLM AI 기반 신규 디자인 스타일 및 레이아웃 자동 생성에 사용되는 API 키입니다. (미설정 시에도 로컬 스마트 폴백 생성기가 100% 정상 작동합니다.) |
| **`GEMINI_MODEL_NAME`** | `"gemini-2.5-flash"` | 사용할 Gemini 모델명입니다. |

---

### 5.2. 로컬 Python 환경에서 실행하기

#### 1) 패키지 설치
```powershell
cd C:\Dev\python\snapcompany\templates
pip install -r requirements.txt
```

#### 2) 서버 기동 (3가지 방식 모두 지원)
```powershell
# 방식 A: Uvicorn으로 main:app 실행 (권장)
uvicorn main:app --host 0.0.0.0 --port 5000

# 방식 B: Python 직접 실행
python main.py
# 또는
python app.py

# 방식 C: Linux/컨테이너 환경에서 Gunicorn 운영서버로 실행 (gunicorn.conf.py 자동 참조)
gunicorn --bind 0.0.0.0:5000 --workers 2 --log-level debug --access-logfile - --error-logfile - --capture-output main:app
```

---

### 5.3. Docker 컨테이너 빌드 및 배포 방법 (`Dockerfile`)

본 프로젝트 루트에는 다음 사양이 반영된 [`Dockerfile`](Dockerfile)이 준비되어 있습니다:
- **노출 포트**: `EXPOSE 5000`
- **영속 볼륨 환경변수**: `ENV DATABASE_PATH=/app/data`, `ENV DATA_DIR=/app/data`, `VOLUME ["/app/data"]`
- **기본 Base URL Prefix**: `ENV DEFAULT_PREFIX=/templates`
- **컨테이너 헬스체크 (`HEALTHCHECK`)**:
  ```dockerfile
  HEALTHCHECK --interval=30s --timeout=10s --retries=3 --start-period=5s \
      CMD python -c "import os, requests; prefix = os.getenv('DEFAULT_PREFIX', ''); requests.get(f'http://localhost:5000{prefix}/api/status')"
  ```
- **시작 `CMD` (2가지 옵션 중 선택 가능)**:
  ```dockerfile
  # 1) Gunicorn 운영서버로 기동 (최적화 워커 및 디버깅 로그 옵션)
  # CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "2", "--log-level", "debug", "--access-logfile", "-", "--error-logfile", "-", "--capture-output", "main:app"]

  # 2) Run the FastAPI server using Uvicorn on port 5000 (기본 활성)
  CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000"]
  ```

#### 1) Docker 이미지 빌드
```bash
docker build -t design-layout-studio:latest .
```

#### 2) Docker 컨테이너 실행 (기본 `/templates` Prefix + 호스트 Persistent Volume 연동)
```bash
docker run -d \
  --name design-layout-studio \
  -p 5000:5000 \
  -e DEFAULT_PREFIX=/templates \
  -e DATABASE_PATH=/app/data \
  -v $(pwd)/data:/app/data \
  design-layout-studio:latest
```
> **Windows PowerShell에서 실행 시**:
> ```powershell
> docker run -d --name design-layout-studio -p 5000:5000 -e DEFAULT_PREFIX=/templates -e DATABASE_PATH=/app/data -v "${PWD}/data:/app/data" design-layout-studio:latest
> ```

#### 3) Gunicorn 운영 서버 모드로 컨테이너 기동 시 (CMD 오버라이드 예시)
```bash
docker run -d \
  --name design-layout-studio-gunicorn \
  -p 5000:5000 \
  -e DEFAULT_PREFIX=/templates \
  -v $(pwd)/data:/app/data \
  design-layout-studio:latest \
  gunicorn --bind 0.0.0.0:5000 --workers 2 --log-level debug --access-logfile - --error-logfile - --capture-output main:app
```

#### 4) 컨테이너 상태 및 헬스체크 확인
```bash
# 컨테이너 HEALTHCHECK 상태 확인 (healthy 여부)
docker ps

# 헬스체크 엔드포인트 직접 호출
curl http://localhost:5000/templates/api/status
```

---

## 🖥️ 6. 웹 스튜디오(v5.0) 상세 사용법 (User Scenario Guide)

브라우저에서 **`http://localhost:5000/templates/`** (또는 설정한 `DEFAULT_PREFIX` 경로)에 접속하면 **GNB · LNB · SNB · FNB** 구조의 스튜디오가 열립니다.

### 시나리오 1: 첫 페이지에서 대표 스타일·레이아웃 타일 한눈에 탐색 (`🎯 1. 대표 템플릿 갤러리`)
1. 상단 **GNB `1. 대표 템플릿 갤러리`**가 기본 선택되어 있습니다.
2. **LNB 탭**을 클릭하여 1-Click으로 뷰를 전환합니다:
   - **`1-1. 대표 디자인 스타일 10선 (톤앤매너)`**: 컬러 팔레트, 타이포그래피, 정체성 형용사·동사가 요약된 11개 스타일 타일을 비교합니다.
   - **`1-2. 대표 레이아웃 아키텍처 10선 (메뉴·뷰)`**: 메뉴 배치(GNB/LNB/SNB)와 바디 뷰 스타일이 시각화된 11개 도메인 레이아웃 타일을 비교합니다.
   - **`1-3. 웹디자인 기본 설계 가이드 & 활용법`**: 도구의 목적, 4대 웹설계 원칙, 활용 시나리오를 1페이지 내에 확인합니다.
3. 원하는 타일에서 **`[상세 가이드 & 표준 프리뷰]`** 버튼을 누르거나 좌측 **SNB(사이드바)**에서 1-Click으로 즉시 적용할 수 있습니다.

### 시나리오 2: 정보설계(IA) 메뉴트리 및 레이아웃별 컴포넌트 계층 재배치 확인 (`🗺️ 2. 정보설계(IA) & 재배치도`)
1. 상단 **GNB `2. 정보설계(IA) & 재배치도`**를 클릭합니다.
2. **LNB 탭**을 통해 다음 3가지 핵심 설계 뷰를 확인합니다:
   - **`2-1. 레이아웃별 컴포넌트 계층 재배치 & 특화 뷰`**: 좌측 SNB나 상단에서 레이아웃(`layout-00`~`10`)을 바꿀 때마다, 12개 정보 컴포넌트(`IC-01`~`12`)가 `SLOT-GNB / LNB / SNB / HERO / BODY / CONVERSION / FNB` 슬롯으로 어떻게 이동하는지 다이어그램으로 보여주고, 우측에서 해당 레이아웃의 **고유 특화 뷰(`FV-00`~`FV-10`)**를 즉시 시연합니다.
   - **`2-2. 3-Depth 메뉴트리 & 네비게이션 관계`**: GNB·LNB·SNB·FNB 역할 정의와 클릭 시 해당 화면으로 즉시 점프하는 인터랙티브 메뉴트리를 제공합니다.
   - **`2-3. 정보 컴포넌트 레지스트리 (12대 객체)`**: 5대 계층 그룹(`GRP-01`~`05`) 필터와 각 컴포넌트가 현재 레이아웃에서 어느 슬롯에 배치되어 있는지 표시합니다.

### 시나리오 3: 전체 적용 전 4대 대표 표준페이지 & 특화 뷰 경량 프리뷰 (`🖥️ 3. 스타일 & 표준·특화 프리뷰`)
1. 상단 **GNB `3. 스타일 & 표준·특화 프리뷰`**를 클릭합니다.
2. 전체 홈페이지를 무겁게 탐색하기 전, **LNB `3-1. 4대 대표 표준페이지 한눈에 보기 (2×2)`**에서 **① 메인 홈 & 히어로**, **② 서비스 카탈로그 카드뷰**, **③ 아키텍처 스토리 & 신뢰지표**, **④ 3분 무료진단 폼 & 푸터** 4개 표준 화면을 한눈에 검토합니다.
3. **LNB `3-2. 레이아웃별 고유 특화 뷰`**에서 선택된 레이아웃의 시그니처 화면(`FV-00`~`10`)을 확인하고, 마음에 들면 우측 상단의 **`[🚀 이 디자인으로 전체 샘플 홈페이지 네비게이션 →]`**을 클릭합니다.

### 시나리오 4: 고급 조합 매트릭스 탐색 및 Gemini AI 신규 생성 (`🎛️ 4. 고급 조합 & AI 스튜디오`)
1. 대표 타일 외에 세밀한 조합을 원하면 **GNB `4. 고급 조합 & AI 스튜디오`**를 클릭합니다.
2. **톤앤매너(형용사·동사·배경모드)**와 **레이아웃(메뉴 배치·뷰 스타일)** 조건을 교차 선택하거나, **`[✨ Gemini AI 디자인·레이아웃 생성기]`**에 자연어 프롬프트를 입력하여 새로운 스타일/레이아웃을 생성·저장·적용합니다.

### 시나리오 5: 전체 샘플 홈페이지 네비게이션 및 `.ZIP` 템플릿 패키지 출고 (`🚀 5. 전체 샘플 사이트 & 출고`)
1. **GNB `5. 전체 샘플 사이트 & 출고`**에서는 선택된 `[스타일 × 레이아웃 × 기업 CI]`가 완전히 적용된 전체 샘플 홈페이지(`HOME` ~ `05 3분 무료진단` 및 도메인 레이아웃 스테이지)를 실제 웹사이트처럼 네비게이션합니다.
2. 상단 GNB 우측의 **`[📦 .ZIP 다운로드]`** 버튼을 클릭하면 CSS 토큰(`design-tokens.css`), 레이아웃 스타일시트(`design-layout.css`), AI 바이브코딩 가이드(`CI_AND_STYLE_GUIDE.md`), 독립 실행형 샘플 홈페이지(`sample-homepage/`)가 담긴 `.ZIP` 스타터 패키지를 즉시 다운로드합니다.

---

## 🔗 7. REST API 엔드포인트 명세 (API Reference)

모든 API는 `{DEFAULT_PREFIX}/api` (기본값 `/templates/api`) 및 호환용 `/api` 하위에서 제공됩니다.

| HTTP Method | Endpoint 경로 (`{prefix}` = `DEFAULT_PREFIX`) | 설명 |
|:---:|:---|:---|
| `GET` | **`{prefix}/api/status`** | **Docker 컨테이너 `HEALTHCHECK` 연동용 상태 확인 엔드포인트** (`status: "ok"`, `default_prefix`, `database_path` 반환) |
| `GET` | `{prefix}/api/health` | 서버 상태, Gemini AI 설정 여부 및 등록된 스타일·레이아웃 수 확인 |
| `GET` | `{prefix}/api/ia/architecture` | **[v5.0 IA]** 3-Depth 메뉴트리, GNB/LNB/SNB/FNB 관계, 12대 정보 컴포넌트 레지스트리 및 전체 레이아웃 Reflow 맵 조회 |
| `GET` | `{prefix}/api/ia/reflow/{layout_id}` | **[v5.0 IA]** 특정 레이아웃 선택 시 메뉴 배치, 슬롯별 컴포넌트(`IC-01`~`12`) 재배치 및 고유 특화 뷰(`FV`) 명세 조회 |
| `GET` | `{prefix}/api/studio/summary` | 디자인 스타일 & 레이아웃 스타일 2대 분류 카탈로그 통계 및 Gemini AI 연동 상태 확인 |
| `GET` | `{prefix}/api/styles` | 디자인 스타일(톤앤매너) 목록 조회 및 필터링 (`adjective`, `verb`, `business`, `scheme`, `include_original`) |
| `GET` | `{prefix}/api/styles/{style_id}` | 특정 디자인 스타일 상세 메타데이터 조회 |
| `GET` | `{prefix}/api/styles/{style_id}/tokens.css` | 선택된 스타일의 `:root` CSS Custom Properties 스타일시트(`text/css`) 반환 |
| `POST` | `{prefix}/api/styles/recommend` | 정체성(형용사·동사·업종·도메인) 기반 최적 스타일 & 레이아웃 동시 추천 |
| `POST` | `{prefix}/api/styles/ai-generate` | Gemini LLM AI 기반 자연어 프롬프트로부터 신규 디자인 스타일 자동 생성 및 저장 |
| `POST / PUT / DELETE` | `{prefix}/api/styles` / `{prefix}/api/styles/{style_id}` | 커스텀 디자인 스타일 등록, 수정, 삭제 (영속 볼륨 `styles_metadata.json`에 즉시 반영) |
| `GET` | `{prefix}/api/layouts` | 웹사이트 레이아웃 패턴(Head & Body) 목록 조회 및 필터링 (`domain`, `company`, `keyword`, `include_standard`) |
| `GET` | `{prefix}/api/layouts/{layout_id}` | 특정 웹사이트 레이아웃 상세 명세(메뉴 배치·뷰 스타일·IA Reflow·특화 뷰 포함) 조회 |
| `GET` | `{prefix}/api/layouts/{layout_id}/layout.css` | 선택된 레이아웃의 Head/Body 구조 CSS 스타일시트(`text/css`) 반환 |
| `POST` | `{prefix}/api/layouts/recommend` | 사업 도메인 및 Head/Body 요구사항 기반 최적 레이아웃 추천 |
| `POST` | `{prefix}/api/layouts/ai-generate` | Gemini LLM AI 기반 자연어 프롬프트로부터 신규 웹사이트 레이아웃 자동 생성 및 저장 |
| `POST / PUT / DELETE` | `{prefix}/api/layouts` / `{prefix}/api/layouts/{layout_id}` | 커스텀 웹사이트 레이아웃 등록, 수정, 삭제 (영속 볼륨 `layouts_metadata.json`에 즉시 반영) |
| `GET` | `{prefix}/api/styles/{style_id}/package` | **[스타일 + 레이아웃] 통합 패키지 JSON** (`design_tokens_css`, `design_layout_css`, `ci_and_style_guide_md` 포함) |
| `GET` | `{prefix}/api/styles/{style_id}/download` | **[스타일 + 레이아웃 + 샘플 홈페이지] `.ZIP` 스타터 패키지 즉시 다운로드** |
| `GET` | `{prefix}/api/company/twayworks` | TheWayWorks 샘플 홈페이지 기업 소개 및 12종 프로덕션 스낵 앱 프로필 조회 |

---

## 📝 8. 프로젝트 문서 및 히스토리 관리 (`notes/`)

본 프로젝트의 모든 요구사항과 설계 계획, 검증 결과는 [`notes/`](notes/) 디렉토리 아래 체계적으로 기록·관리됩니다:
- **누적 요구사항 마스터 명세**: [`notes/requirement.md`](notes/requirement.md) (`[REQ-001]` ~ `[REQ-009]`)
- **시계열 개발 진행 이력 요약**: [`notes/history.md`](notes/history.md)
- **주요 마일스톤 문서**:
  - `2026-10-29 23:16`: 초기 10대 디자인 스타일 메타데이터 정의 및 MVP 수립 (`req/plan/result_202610292316.md`)
  - `2026-11-05 18:44`: FastAPI (`Port 5000`, Prefix `/templates`) 기반 v1.0 시스템 구현 (`req/plan/result_202611051844.md`)
  - `2026-11-06 20:05`: 10대 사업 도메인 웹사이트 레이아웃(Head & Body) 정의 및 라이브 적용 예시 v2.0 구축 (`req/plan/result_202611062005.md`)
  - `2026-11-07 00:08`: `.env` Gemini LLM AI 기반 디자인 스타일 & 레이아웃 스타일 2원 분류 생성·관리 스튜디오 v3.0 구축 (`req/plan/result_202611070008.md`)
  - `2026-11-07 14:06`: 웹사이트 제작 지원도구 UI/UX 전면 재구성 및 4단계 사용자 흐름 v4.0 구현 (`req/plan/result_202611071406.md`)
  - `2026-11-07 15:24`: 웹디자인 가이드 기반 정보설계(IA) 메뉴트리 · 12대 객체화 컴포넌트 · GNB/LNB/SNB/FNB 및 계층적 레이아웃 재배치 스튜디오 v5.0 구축 (`req/plan/result_202611071524.md`)
  - `2026-11-07 17:31`: Docker 컨테이너(`Dockerfile`), `DEFAULT_PREFIX` 동적 라우팅, 영속 볼륨(`DATABASE_PATH`), `/api/status` 헬스체크 및 `README.md` 종합 업데이트 (`req/plan/result_202611071731.md`)
