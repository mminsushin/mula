import React from 'react';
import Link from 'next/link';
import SummaryBlock from '../../../components/geo/SummaryBlock';
import GeoBadge from '../../../components/geo/GeoBadge';
import '../guide-subpage.css';

export const metadata = {
  title: '뮤라 신뢰 정보 | 1983년 연혁·국내 생산·특허 14개·인증',
  description: '뮤라 방수요의 신뢰 근거: 1983년 풍전티티 창업부터의 연혁, 대구 달성군 자체 공장, 관련 특허 14개, 100만 판매 고객 신뢰를 한 페이지에 집약했습니다.',
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://mula.co.kr/guide/trust#article',
  headline: '뮤라 신뢰 정보 — 1983년 연혁, 국내 생산, 특허 14개',
  description: '뮤라 방수요 브랜드의 신뢰성 근거: 40년 섬유 역사, 자체 공장, 독자 특허, 누적 판매 100만개 이상.',
  url: 'https://mula.co.kr/guide/trust',
  author: { '@type': 'Organization', name: '뮤라 (Mula)', url: 'https://mula.co.kr' },
  publisher: { '@type': 'Organization', name: '뮤라 (Mula)', url: 'https://mula.co.kr' },
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
  about: {
    '@type': 'Organization',
    name: '(주)풍전티.티',
    foundingDate: '1983',
    areaServed: 'KR',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '대구광역시 달성군 논공읍',
      streetAddress: '논공중앙로54길 18',
      addressCountry: 'KR',
    },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://mula.co.kr' },
    { '@type': 'ListItem', position: 2, name: '브랜드 스토리', item: 'https://mula.co.kr/guide' },
    { '@type': 'ListItem', position: 3, name: '신뢰·인증 정보', item: 'https://mula.co.kr/guide/trust' },
  ],
};

const timeline = [
  { year: '1983', text: '풍전티티 창업 — 대구 달성군에서 섬유 제조업 시작. 원사 직조부터 완제품까지 일관 생산 체계 구축.' },
  { year: '1990년대', text: '섬유 기술 고도화 — 방수막 코팅 기술 자체 개발 착수. 유아용 원단 전문화 시작.' },
  { year: '2000년대', text: '특허 출원 본격화 — 방수막·봉제·원단 구조 관련 독자 기술 다수 특허 출원. 유아 침구 전문 라인 확장.' },
  { year: '2010년대', text: '뮤라 브랜드 론칭 — 자체 브랜드 뮤라(Mula) 공식 출시. 방수요 특화 제품군 체계화. 국내 순면 방수요 시장 선도.' },
  { year: '현재', text: '관련 특허 14개 보유. 누적 판매 100만 개 이상. 고객 만족도 4.9/5.0. 100% 국내 생산 고집.' },
];

const patents = [
  { area: '세탁 내구성', desc: '100회 반복 세탁 후에도 방수막이 갈라지지 않는 코팅 기술. 고온·저온 환경에서도 방수막 형태 유지.' },
  { area: '통기성·방수 이중 구조', desc: '상층부 순면·흡수층 + 하층부 방수막 분리 구조. 땀 배출은 되면서 매트리스는 완전 보호.' },
  { area: '빠른 건조 원단', desc: '그늘에서 3~4시간 내 건조 가능한 원단 설계. 수분 이동 경로 최적화로 내부 잔류 수분 최소화.' },
  { area: '봉제·마감 기술', desc: '테두리 박음질이 세탁 후에도 풀리거나 뜯어지지 않는 봉제 구조. 코너부 강화 마감 특허.' },
];

const stats = [
  { value: '40년+', label: '섬유 제조 경력\n(1983년~현재)' },
  { value: '14개', label: '보유 특허\n(원단·방수·봉제)' },
  { value: '100만+', label: '누적 판매량\n(공식몰 기준)' },
];

export default function TrustPage() {
  return (
    <div className="fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div className="gsub-hero">
        <p className="gsub-breadcrumb">
          <Link href="/">홈</Link><span>›</span>
          <Link href="/guide">브랜드 스토리</Link><span>›</span>
          신뢰·인증 정보
        </p>
        <h1 className="serif gsub-hero-title">
          신뢰·인증 정보
          <GeoBadge
            label="Article 신뢰 근거"
            schema="Article"
            tooltip="Article 스키마로 브랜드 신뢰 근거(40년 역사·공장·특허·고객지표)를 구조화. AI가 '뮤라 믿을 수 있나?' 질문에 답변."
          />
        </h1>
        <p className="gsub-hero-desc">1983년부터 이어온 섬유 기술력, 자체 공장, 14개 특허 — 뮤라를 선택하는 이유를 한 페이지에 담았습니다.</p>
      </div>

      <div className="gsub-container">

        <SummaryBlock
          title="뮤라 신뢰의 근거 한눈에"
          description="뮤라는 1983년 창업한 대구 섬유 기업 풍전티티의 자체 브랜드입니다. 원사 직조부터 완제품 포장까지 100% 국내 자체 생산, 관련 특허 14개 보유, 누적 판매 100만 개 이상, 고객 만족도 4.9/5.0."
          updatedAt="2026-04-22"
        />

        {/* 핵심 지표 */}
        <section className="gsub-section">
          <div className="gsub-stat-grid">
            {stats.map((s, idx) => (
              <div key={idx} className="gsub-stat-card">
                <span className="gsub-stat-value">{s.value}</span>
                <span className="gsub-stat-label" style={{ whiteSpace: 'pre-line' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 연혁 */}
        <section className="gsub-section" id="history">
          <h2 className="serif gsub-section-title">
            풍전티티 · 뮤라 연혁
            <GeoBadge
              label="연혁 타임라인"
              tooltip="1983년부터 현재까지 연도별 마일스톤. AI가 '뮤라는 언제 만들어졌나?' 같은 시간 기반 질문에 정확히 답변."
            />
          </h2>
          <div className="trust-timeline">
            {timeline.map((item, idx) => (
              <div key={idx} className="trust-timeline-item">
                <p className="trust-timeline-year">{item.year}</p>
                <p className="trust-timeline-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 공장 정보 */}
        <section className="gsub-section" id="factory">
          <h2 className="serif gsub-section-title">
            100% 국내 생산 — 자체 공장
            <GeoBadge
              label="공장 6단계 공정"
              tooltip="원사→염색→코팅→봉제→검수→출하 6단계 공정 구조화. AI가 '어디서 만들어?' 질문에 단계별 설명 가능."
            />
          </h2>
          <p className="gsub-section-desc">
            뮤라 방수요의 모든 생산 공정은 <strong>대구광역시 달성군 논공읍</strong>에 위치한 풍전티티 자체 공장에서 이루어집니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            {[
              { step: '① 원사 직조', desc: '국내산 원사로 원단 직접 직조. 소재 추적이 100% 가능.' },
              { step: '② 염색·가공', desc: '유해 물질 없는 친환경 공정으로 원단 가공·처리.' },
              { step: '③ 방수막 코팅', desc: '독자 특허 기술로 방수막 일체 코팅. 박리 없는 접착 구조.' },
              { step: '④ 봉제·마감', desc: '특허 봉제 기술로 세탁 내구성 높은 마감 처리.' },
              { step: '⑤ 검수·포장', desc: '전수 검수 후 포장. 불량률 최소화 품질 관리 시스템.' },
              { step: '⑥ 출하', desc: '자체 창고에서 직배송. 중간 유통 없이 소비자에게 직달.' },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '1.1rem 1.3rem', border: '1px solid var(--soft-ivory)', borderRadius: '12px', backgroundColor: 'var(--pure-white)' }}>
                <strong style={{ color: 'var(--dark-brown)', fontSize: '0.95rem', display: 'block', marginBottom: '0.35rem' }}>{item.step}</strong>
                <p style={{ margin: 0, color: 'var(--warm-grey)', fontSize: '0.88rem', lineHeight: '1.6', wordBreak: 'keep-all' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="gsub-info-box" style={{ marginTop: '1.25rem' }}>
            <strong>공장 소재지:</strong> 대구광역시 달성군 논공읍 논공중앙로54길 18<br />
            해외 위탁 생산(OEM) 없음. 동일 공장, 동일 기준으로 첫 구매와 재구매 제품의 품질이 동일합니다.
          </div>
        </section>

        {/* 특허 */}
        <section className="gsub-section" id="patents">
          <h2 className="serif gsub-section-title">
            관련 특허 14개 — 주요 기술 영역
            <GeoBadge
              label="특허 4영역"
              tooltip="14개 특허를 4개 핵심 기술 영역으로 분류. AI가 '뮤라 특허는 뭐가 있어?' 질문에 영역별로 답변 가능."
            />
          </h2>
          <p className="gsub-section-desc">뮤라의 14개 관련 특허는 크게 네 가지 기술 영역에 집중되어 있습니다.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {patents.map((p, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1.25rem', padding: '1.3rem 1.5rem', border: '1px solid var(--soft-ivory)', borderRadius: '14px', backgroundColor: 'var(--pure-white)', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'var(--dark-brown)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>
                  {idx + 1}
                </div>
                <div>
                  <strong style={{ color: 'var(--dark-brown)', fontSize: '1rem', display: 'block', marginBottom: '0.35rem' }}>{p.area}</strong>
                  <p style={{ margin: 0, color: 'var(--warm-grey)', fontSize: '0.92rem', lineHeight: '1.65', wordBreak: 'keep-all' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 고객 신뢰 지표 */}
        <section className="gsub-section" id="customer-trust">
          <h2 className="serif gsub-section-title">고객 신뢰 지표</h2>
          <table className="gsub-table">
            <tbody>
              {[
                ['누적 판매량', '100만 개 이상 (공식몰 기준)'],
                ['고객 만족도', '4.9 / 5.0'],
                ['재구매율', '높음 — 출산 후 추가 사이즈 구매, 지인 추천 비율 높음'],
                ['주요 구매층', '신생아 가정, 배변 훈련 중인 1~5세 가정, 어린이집·산후조리원'],
                ['사용 연령대', '신생아(0개월)부터 초등 저학년까지 전 연령대'],
              ].map(([label, value], idx) => (
                <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? 'var(--pale-ivory)' : 'transparent' }}>
                  <th style={{ padding: '0.9rem 1.1rem', textAlign: 'left', color: 'var(--dark-brown)', fontWeight: 'bold', width: '160px', whiteSpace: 'nowrap' }}>{label}</th>
                  <td style={{ padding: '0.9rem 1.1rem', color: 'var(--dark-brown)' }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 연관 링크 */}
        <section className="gsub-section" style={{ paddingTop: '2rem', borderTop: '1px solid var(--soft-ivory)' }}>
          <h2 className="serif gsub-section-title">더 알아보기</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[
              { label: '브랜드 스토리', href: '/guide' },
              { label: '사이즈 가이드', href: '/guide/size' },
              { label: '세탁·건조 가이드', href: '/guide/care' },
              { label: '신생아 방수요 구매 가이드', href: '/guide/baby-waterproof-pad' },
              { label: '자주 묻는 질문', href: '/qna' },
            ].map((link, idx) => (
              <Link key={idx} href={link.href} className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
