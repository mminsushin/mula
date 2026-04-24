import React from 'react';
import Link from 'next/link';
import './geo-report.css';

export const metadata = {
  title: 'GEO 최적화 적용 현황 | 뮤라 Mula',
  description: '뮤라 공식 사이트에 적용된 GEO(Generative Engine Optimization) 최적화 항목 전체 리포트.',
  robots: { index: false },
};

const schemaTypes = [
  { type: 'Organization', page: '전체 (layout)', color: '#6b46c1' },
  { type: 'WebSite', page: '전체 (layout)', color: '#2563eb' },
  { type: 'BreadcrumbList', page: '모든 페이지', color: '#0891b2' },
  { type: 'FAQPage', page: '/qna, /guide, /guide/*', color: '#059669' },
  { type: 'Article', page: '/news/[slug], /guide/compare, /guide/trust, /guide/baby-waterproof-pad', color: '#d97706' },
  { type: 'Blog', page: '/news', color: '#dc2626' },
  { type: 'BlogPosting', page: '/news/[slug] ×12', color: '#e11d48' },
  { type: 'AboutPage', page: '/guide', color: '#7c3aed' },
  { type: 'Brand', page: '/guide', color: '#be185d' },
  { type: 'ContactPage', page: '/contact', color: '#0d9488' },
  { type: 'HowTo', page: '/guide/care', color: '#65a30d' },
  { type: 'ItemList', page: '/guide/size', color: '#b45309' },
];

const checklist = [
  {
    phase: 'Phase 1 — 기술 기반',
    color: '#6b46c1',
    items: [
      { done: true, label: 'metadataBase + title.template 전역 설정', what: 'OG 태그와 페이지 제목 형식을 전체 사이트에 일괄 적용하는 메타데이터 기반 설정', detail: 'layout.jsx', before: 'OG 없음, 단순 title', after: 'template: \'%s | 뮤라 Mula\', metadataBase 자동 생성' },
      { done: true, label: 'Organization + WebSite JSON-LD 전역 주입', what: 'AI가 브랜드 이름·주소·연락처·특허를 구조화된 형태로 읽을 수 있게 하는 전역 스키마', detail: 'layout.jsx', before: '스키마 없음', after: 'Organization(창업·주소·연락처·특허) + WebSite(SearchAction)' },
      { done: true, label: 'robots.js — AI 크롤러 명시 허용', what: 'GPTBot·Perplexity 등 주요 AI 크롤러의 사이트 접근을 명시적으로 허용하는 설정', detail: 'app/robots.js', before: 'robots.txt 없음', after: 'GPTBot, PerplexityBot, Claude-Web, OAI-SearchBot Allow' },
      { done: true, label: 'sitemap.js — 11개 URL, priority 포함', what: '검색 엔진이 사이트의 모든 페이지를 누락 없이 수집할 수 있도록 URL 목록과 우선순위를 제공하는 파일', detail: 'app/sitemap.js', before: 'sitemap 없음', after: '11개 URL, changeFrequency, priority 0.5~1.0' },
      { done: true, label: 'public/llms.txt 신설', what: 'AI 모델이 브랜드 핵심 정보를 한 곳에서 즉시 파악할 수 있도록 만든 AI 전용 팩트 파일', detail: 'public/llms.txt', before: '없음', after: 'AI 전용 브랜드 팩트 파일 (브랜드·제품·특허·판매량·CS)' },
      { done: true, label: 'FAQ 답변 항상 DOM 노출', what: '접기·펼치기 FAQ의 답변을 HTML에 항상 존재시켜 AI 크롤러가 내용을 수집할 수 있게 하는 처리', detail: 'QnaList.jsx', before: '{isOpen && <div>} — AI 크롤러에 답변 숨겨짐', after: 'CSS max-height collapse — 답변 HTML 항상 DOM 존재' },
    ],
  },
  {
    phase: 'Phase 2 — 콘텐츠 강화',
    color: '#0891b2',
    items: [
      { done: true, label: '홈 GEO 섹션 4개 추가', what: 'AI가 브랜드를 인용할 수 있도록 리드 문단·추천 질문·신뢰지표·FAQ 미리보기를 홈에 추가한 콘텐츠 확장', detail: 'app/page.jsx', before: '5개 섹션 (Hero·Stat·Product·Split·CTA)', after: '+ Lead단락·추천질문·신뢰지표·FAQ미리보기' },
      { done: true, label: '뉴스 개별 아티클 라우트 신설', what: '각 뉴스 콘텐츠에 고유 URL과 Article 스키마를 부여해 AI가 개별 기사를 인용할 수 있게 하는 구조화', detail: 'news/[slug]/page.jsx', before: '목록만 존재, 개별 URL 없음', after: '/news/[slug] 12개, Article+BlogPosting JSON-LD' },
      { done: true, label: 'QnA 60개 FAQ 확장', what: 'AI가 자주 묻는 질문에 답변을 인용할 수 있도록 FAQ를 20개→60개로 확장하고 6개 카테고리로 구조화', detail: 'qna/page.jsx', before: '20개, 카테고리 없음', after: '60개 (6카테고리×10), FAQPage 60개 acceptedAnswer' },
      { done: true, label: '브랜드 스토리 페이지 심화', what: '브랜드 표·FAQ·출처 목록을 추가해 AI가 신뢰 정보를 풍부하게 인용할 수 있도록 강화한 페이지', detail: 'guide/page.jsx', before: '텍스트 위주 소개', after: '브랜드표 8행 + 4개 FAQ H3 + SourceList' },
      { done: true, label: '문의 페이지 상황별 구조화', what: '문의 유형을 5개 상황으로 구분하고 ContactPage 스키마를 적용해 AI가 CS 정보를 정확히 파악하게 한 구조화', detail: 'contact/page.jsx', before: '단순 연락처 나열', after: '5개 상황 섹션 + ContactPage + ContactPoint×2 스키마' },
      { done: true, label: 'SummaryBlock 가시화', what: 'AI 크롤러 클로킹을 방지하기 위해 숨겨진 요약 블록을 정상 DOM에 노출시킨 처리', detail: '각 page.jsx', before: 'display:none 숨김 (AI 크롤러 클로킹)', after: '모든 페이지 정상 DOM 노출' },
    ],
  },
  {
    phase: 'Phase 3 — 신규 허브 5개',
    color: '#059669',
    items: [
      { done: true, label: '/guide/size — 사이즈 가이드', what: '침대 사이즈별 매트리스 패드 권장 규격을 비교표와 FAQ로 구조화한 AI 인용용 허브 페이지', detail: 'guide/size/page.jsx', before: '없음', after: 'ItemList+FAQPage, 5사이즈 비교표, 침대별 권장' },
      { done: true, label: '/guide/care — 세탁·건조 가이드', what: '올바른 세탁·건조 방법을 HowTo 스키마로 단계화해 AI가 구체적인 관리법을 답변할 수 있게 한 가이드', detail: 'guide/care/page.jsx', before: '없음', after: 'HowTo 4단계 + FAQPage + Do/Don\'t 그리드' },
      { done: true, label: '/guide/compare — 제품 비교', what: '제품 유형을 비교표와 상황별 추천으로 구조화해 AI 비교 질문에 인용될 수 있도록 만든 콘텐츠', detail: 'guide/compare/page.jsx', before: '없음', after: 'Article + 3개 비교표 + 7개 상황별 추천' },
      { done: true, label: '/guide/trust — 신뢰·인증 정보', what: '브랜드 연혁·공장 과정·특허를 시각화해 AI가 신뢰 근거를 인용할 수 있도록 구조화한 페이지', detail: 'guide/trust/page.jsx', before: '없음', after: '연혁 타임라인 + 공장 6단계 + 특허 4영역' },
      { done: true, label: '/guide/baby-waterproof-pad — 구매 가이드', what: '아기 방수패드 선택 기준과 계절별 가이드를 Article·FAQ로 구조화한 롱테일 키워드 허브 페이지', detail: 'guide/baby-waterproof-pad/page.jsx', before: '없음', after: 'Article + FAQPage, 선택기준표, 계절별 가이드' },
    ],
  },
  {
    phase: 'Phase 4 — 심사용 가시화',
    color: '#dc2626',
    items: [
      { done: true, label: '/geo 리포트 페이지', what: 'GEO 적용 전체 현황을 체크리스트·비교표·스키마 현황으로 한눈에 볼 수 있는 심사용 리포트 페이지', detail: 'app/geo/page.jsx', before: '없음', after: '체크리스트, B/A비교, 스키마배지, 크롤러상태' },
      { done: true, label: '?geo=debug 배지 토글 시스템', what: 'URL 파라미터로 사이트 전체 GEO 최적화 섹션을 배지로 시각화해 검수할 수 있는 디버그 시스템', detail: 'GeoDebugContext + GeoBadge', before: '없음', after: 'localStorage 유지, 섹션별 GEO 배지 + hover 툴팁' },
      { done: true, label: 'Footer GEO Readiness 상태 표시', what: '사이트 하단에서 GEO 준비 상태와 적용 스키마 종류를 즉시 확인할 수 있는 상태 표시 영역', detail: 'Footer.jsx', before: '없음', after: '3개 체크마크 + 스키마 12종 칩 + 리포트 링크' },
    ],
  },
];

const pageSchemaMap = [
  { page: '/ (홈)', schemas: ['Organization*', 'WebSite*', 'BreadcrumbList'] },
  { page: '/qna', schemas: ['FAQPage (60 Q&A)', 'BreadcrumbList'] },
  { page: '/guide', schemas: ['AboutPage', 'Brand', 'BreadcrumbList'] },
  { page: '/guide/size', schemas: ['ItemList', 'FAQPage', 'BreadcrumbList'] },
  { page: '/guide/care', schemas: ['HowTo', 'FAQPage', 'BreadcrumbList'] },
  { page: '/guide/compare', schemas: ['Article', 'FAQPage', 'BreadcrumbList'] },
  { page: '/guide/trust', schemas: ['Article', 'BreadcrumbList'] },
  { page: '/guide/baby-waterproof-pad', schemas: ['Article', 'FAQPage', 'BreadcrumbList'] },
  { page: '/news', schemas: ['Blog', 'BlogPosting ×12', 'BreadcrumbList'] },
  { page: '/news/[slug] ×12', schemas: ['Article', 'BlogPosting', 'BreadcrumbList'] },
  { page: '/contact', schemas: ['ContactPage', 'ContactPoint ×2', 'BreadcrumbList'] },
];

const totalChecks = checklist.reduce((s, p) => s + p.items.length, 0);
const doneChecks = checklist.reduce((s, p) => s + p.items.filter((i) => i.done).length, 0);

const sidebarNav = [
  { label: '스키마 타입 12종', href: '#schemas' },
  { label: 'AI 크롤러 설정', href: '#crawlers' },
  { label: '단계별 Before / After', href: '#checklist' },
  { label: '페이지별 현황', href: '#pages' },
  { label: 'GEO Debug 모드', href: '#debug' },
  { label: '사이트 바로가기', href: '#links' },
];

export default function GeoReportPage() {
  return (
    <div className="fade-in geo-report">

      {/* ── Hero ── */}
      <div className="geo-hero">
        <div className="geo-hero-inner">
          <div className="geo-hero-left">
            <h1 className="serif geo-hero-title">GEO 최적화 적용 현황</h1>
            <p className="geo-hero-desc">
              뮤라 사이트에 적용된 <strong>Generative Engine Optimization</strong> 전체 리포트입니다.<br />
              ChatGPT · Perplexity · Google AI Overview · Claude가 브랜드를 인용할 수 있도록
              스키마 12종, FAQ 60개, 뉴스 아티클 12개, AI 크롤러 설정을 구조화했습니다.
            </p>
            <div className="geo-hero-progress">
              <div className="geo-hero-progress-bar" style={{ width: `${Math.round(doneChecks / totalChecks * 100)}%` }} />
            </div>
            <p className="geo-hero-progress-label">{doneChecks} / {totalChecks} 항목 완료 ({Math.round(doneChecks / totalChecks * 100)}%)</p>
          </div>

          <div className="geo-hero-stats">
            {[
              { value: '12종', label: '적용 스키마 타입' },
              { value: '11개', label: '최적화 페이지' },
              { value: '60개', label: 'FAQ DOM 상시 노출' },
              { value: '12개', label: '뉴스 Article URL' },
            ].map((s, i) => (
              <div key={i} className="geo-hero-stat">
                <span className="geo-hero-stat-value">{s.value}</span>
                <span className="geo-hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Dashboard body ── */}
      <div className="geo-body">

        {/* ── Sidebar ── */}
        <aside className="geo-sidebar">
          <div className="geo-sidebar-card">
            <span className="geo-sidebar-title">NAVIGATION</span>
            <ul className="geo-sidebar-nav">
              {sidebarNav.map((n, i) => (
                <li key={i}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="geo-sidebar-card">
            <span className="geo-sidebar-title">AI 크롤러 설정</span>
            <div className="geo-sidebar-checks">
              {[
                { label: 'robots.js', sub: 'GPTBot·Perplexity·Claude' },
                { label: 'sitemap.xml', sub: '11개 URL + priority' },
                { label: 'llms.txt', sub: 'AI 팩트 파일 신설' },
              ].map((c, i) => (
                <div key={i} className="geo-sidebar-check">
                  <span className="geo-sidebar-check-ok">✓</span>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: 'var(--dark-brown)' }}>{c.label}</div>
                    <div style={{ fontSize: '0.72rem', color: '#9ca3af' }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="geo-sidebar-card">
            <span className="geo-sidebar-title">적용 스키마</span>
            <div className="geo-sidebar-schema-list">
              {schemaTypes.map((s, i) => (
                <span key={i} className="geo-sidebar-schema-chip">{s.type}</span>
              ))}
            </div>
          </div>

          <div className="geo-sidebar-card" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
            <span className="geo-sidebar-title" style={{ color: '#059669' }}>GEO DEBUG</span>
            <p style={{ fontSize: '0.78rem', color: '#374151', lineHeight: '1.55', marginBottom: '0.75rem', wordBreak: 'keep-all' }}>
              GEO 배지 오버레이를 켜고 사이트 전체를 확인하세요.
            </p>
            <Link href="/?geo=debug" className="geo-debug-url" style={{ display: 'block', textAlign: 'center', borderRadius: '8px', padding: '7px' }}>
              ?geo=debug 시작
            </Link>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="geo-main">

          {/* 스키마 타입 */}
          <section id="schemas" className="geo-section">
            <h2 className="serif geo-section-title">적용 스키마 타입 — 12종</h2>
            <p className="geo-section-desc">Schema.org JSON-LD로 구조화된 데이터. AI 답변 엔진이 정보를 추출·인용하는 핵심 신호입니다.</p>
            <div className="geo-schema-badges">
              {schemaTypes.map((s, i) => (
                <span key={i} className="geo-schema-badge" style={{ backgroundColor: s.color }}>
                  {s.type}
                  <span className="geo-schema-badge-page">{s.page}</span>
                </span>
              ))}
            </div>
          </section>

          {/* AI 크롤러 */}
          <section id="crawlers" className="geo-section">
            <h2 className="serif geo-section-title">AI 크롤러 접근 설정</h2>
            <p className="geo-section-desc">AI 검색 엔진이 사이트를 읽고 인용하려면 세 가지 파일이 필수입니다. 각 파일의 역할과 적용 현황입니다.</p>
            <div className="geo-crawler-grid">
              {[
                {
                  icon: '🤖',
                  title: 'robots.js',
                  status: '설정 완료',
                  what: '어떤 크롤러가 사이트에 접근할 수 있는지 허용·차단을 제어하는 파일',
                  detail: 'GPTBot (ChatGPT), PerplexityBot, Claude-Web, OAI-SearchBot, Google-Extended 명시 허용.',
                  link: '/robots.txt',
                  linkLabel: 'robots.txt 확인 ↗',
                },
                {
                  icon: '🗺️',
                  title: 'sitemap.xml',
                  status: '설정 완료',
                  what: '사이트 내 모든 URL을 검색 엔진에 알려 자동으로 색인하게 하는 목록 파일',
                  detail: '11개 URL, 페이지별 priority(0.5~1.0)와 changeFrequency 포함. 검색엔진 자동 색인.',
                  link: '/sitemap.xml',
                  linkLabel: 'sitemap.xml 확인 ↗',
                },
                {
                  icon: '📄',
                  title: 'llms.txt',
                  status: '설정 완료',
                  what: 'AI 모델이 브랜드 핵심 정보를 즉시 파악할 수 있도록 만든 AI 전용 팩트 파일',
                  detail: 'AI 전용 브랜드 팩트 파일. 브랜드명·제품군·특허·판매량·CS·주요 URL 구조화.',
                  link: '/llms.txt',
                  linkLabel: 'llms.txt 확인 ↗',
                },
              ].map((c, i) => (
                <div key={i} className="geo-crawler-card">
                  <div className="geo-crawler-icon">{c.icon}</div>
                  <div className="geo-crawler-header">
                    <strong>{c.title}</strong>
                    <span className="geo-crawler-status">✓ {c.status}</span>
                  </div>
                  <p className="geo-crawler-what">{c.what}</p>
                  <p className="geo-crawler-detail">{c.detail}</p>
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="geo-crawler-link">{c.linkLabel}</a>
                </div>
              ))}
            </div>
          </section>

          {/* 단계별 Before / After (통합) */}
          <section id="checklist" className="geo-section">
            <h2 className="serif geo-section-title">단계별 GEO 적용 — Before / After</h2>
            <p className="geo-section-desc">
              일반적인 브랜드 사이트(뮤라 적용 전) 대비 각 단계에서 무엇이 달라졌는지 항목별로 비교합니다.
              총 {doneChecks}/{totalChecks} 항목 완료.
            </p>

            {checklist.map((phase, pi) => (
              <div key={pi} className="geo-phase-group">
                {/* Phase header */}
                <div className="geo-phase-group-header">
                  <span
                    className="geo-phase-badge"
                    style={{ backgroundColor: phase.color + '20', color: phase.color, border: `1px solid ${phase.color}50` }}
                  >
                    Phase {pi + 1}
                  </span>
                  <h3 className="geo-phase-group-title">{phase.phase.replace(/^Phase \d+ — /, '')}</h3>
                  <span className="geo-phase-group-count">
                    ✓ {phase.items.filter((i) => i.done).length}/{phase.items.length} 완료
                  </span>
                </div>

                {/* Items */}
                {phase.items.map((item, ii) => (
                  <div key={ii} className="geo-phase-item">
                    <div className="geo-phase-item-top">
                      <span className="geo-phase-item-icon">✓</span>
                      <span className="geo-phase-item-label">{item.label}</span>
                      <code className="geo-ba-file">{item.detail}</code>
                    </div>
                    {item.what && <p className="geo-phase-item-what">{item.what}</p>}
                    <div className="geo-phase-ba">
                      <div className="geo-phase-ba-before">
                        <span className="geo-ba-tag before">BEFORE</span>
                        <p>{item.before}</p>
                      </div>
                      <div className="geo-phase-ba-after">
                        <span className="geo-ba-tag after">AFTER</span>
                        <p>{item.after}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </section>

          {/* 페이지별 현황 */}
          <section id="pages" className="geo-section">
            <h2 className="serif geo-section-title">페이지별 스키마 적용 현황</h2>
            <table className="geo-page-table">
              <thead>
                <tr>
                  <th>페이지</th>
                  <th>적용된 스키마</th>
                </tr>
              </thead>
              <tbody>
                {pageSchemaMap.map((row, i) => (
                  <tr key={i}>
                    <td><code>{row.page}</code></td>
                    <td>
                      <div className="geo-page-schema-list">
                        {row.schemas.map((s, si) => (
                          <span key={si} className="geo-page-schema-chip">{s}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.5rem' }}>
              * Organization + WebSite는 layout.jsx에서 전체 페이지에 공통 적용
            </p>
          </section>

          {/* Debug 안내 */}
          <section id="debug" className="geo-section geo-debug-guide">
            <h2 className="serif geo-section-title" style={{ marginBottom: '0.5rem' }}>🔍 GEO Debug 모드 사용법</h2>
            <p className="geo-section-desc">
              <code>?geo=debug</code>를 URL에 추가하면 사이트 전체 GEO 최적화 섹션에 배지가 표시됩니다.
              localStorage에 저장되어 페이지 이동 후에도 유지됩니다.
            </p>
            <div className="geo-debug-steps">
              <div className="geo-debug-step">
                <span className="geo-debug-step-num">1</span>
                <div>
                  <strong>Debug 모드 시작</strong>
                  <p>아래 URL로 이동하면 초록 배너와 [GEO] 배지가 표시됩니다.</p>
                  <Link href="/?geo=debug" className="geo-debug-url">mula.co.kr/?geo=debug</Link>
                </div>
              </div>
              <div className="geo-debug-step">
                <span className="geo-debug-step-num">2</span>
                <div>
                  <strong>배지 확인</strong>
                  <p>홈·QnA·가이드 등 주요 페이지 GEO 섹션 옆 [GEO] 배지에 커서를 올리면 적용 기법 설명이 표시됩니다.</p>
                </div>
              </div>
              <div className="geo-debug-step">
                <span className="geo-debug-step-num">3</span>
                <div>
                  <strong>종료</strong>
                  <p>상단 배너의 "✕ 종료" 클릭 또는:</p>
                  <Link href="/?geo=off" className="geo-debug-url off">mula.co.kr/?geo=off</Link>
                </div>
              </div>
            </div>
          </section>

          {/* 사이트 바로가기 */}
          <section id="links" className="geo-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
            <h2 className="serif geo-section-title">사이트 바로가기</h2>
            <div className="geo-links">
              {[
                { label: '홈', href: '/' },
                { label: '브랜드 스토리', href: '/guide' },
                { label: 'FAQ (60개)', href: '/qna' },
                { label: '뉴스', href: '/news' },
                { label: '사이즈 가이드', href: '/guide/size' },
                { label: '세탁 가이드', href: '/guide/care' },
                { label: '제품 비교', href: '/guide/compare' },
                { label: '신뢰 정보', href: '/guide/trust' },
                { label: '구매 가이드', href: '/guide/baby-waterproof-pad' },
                { label: '문의하기', href: '/contact' },
                { label: 'robots.txt ↗', href: '/robots.txt' },
                { label: 'sitemap.xml ↗', href: '/sitemap.xml' },
                { label: 'llms.txt ↗', href: '/llms.txt' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="geo-link-btn">{link.label}</Link>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
