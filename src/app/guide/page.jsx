import Link from 'next/link';
import SourceList from '../../components/geo/SourceList';
import GeoBadge from '../../components/geo/GeoBadge';
import './guide-page.css';

export const metadata = {
  title: 'Mula 브랜드 스토리 | 1983년부터 이어온 진심',
  description: '단순 유통을 거부하고 자체 기술력으로 빚어낸 100% 국내 생산 프리미엄 유아 침구, 뮤라(Mula)의 이야기.',
};

const guideSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://mula.co.kr/guide#webpage',
    name: '뮤라 브랜드 스토리 | 1983년부터 이어온 진심',
    url: 'https://mula.co.kr/guide',
    description: '단순 유통을 거부하고 자체 기술력으로 빚어낸 100% 국내 생산 프리미엄 유아 침구, 뮤라(Mula)의 이야기.',
    mainEntity: { '@id': 'https://mula.co.kr/#organization' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://mula.co.kr' },
        { '@type': 'ListItem', position: 2, name: '브랜드 스토리', item: 'https://mula.co.kr/guide' },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    '@id': 'https://mula.co.kr/#brand',
    name: '뮤라 (Mula)',
    alternateName: 'Mula',
    description: '1983년 섬유 명가 풍전티티에서 탄생한 방수요 전문 브랜드. 원단 직조부터 봉제까지 100% 국내 자체 생산, 관련 특허 14개 보유.',
    url: 'https://mula.co.kr',
    logo: 'https://mula.co.kr/assets/logo.png',
    foundingDate: '1983',
    award: '관련 특허 14개 보유',
    slogan: '아기 피부에 가장 편안한 선택',
  },
];

const hubCards = [
  {
    href: '/guide/size',
    tag: 'SIZE GUIDE',
    title: '사이즈 완전 정복',
    desc: '미니부터 퀸까지, 내 아이에게 맞는 사이즈 찾기',
    img: '/assets/main1000_1000.jpg',
  },
  {
    href: '/guide/care',
    tag: 'CARE GUIDE',
    title: '세탁·건조 완벽 가이드',
    desc: '방수요를 오래 쓰는 올바른 세탁법',
    img: '/assets/1f57e90f62b0a574.jpg',
  },
  {
    href: '/guide/compare',
    tag: 'COMPARE',
    title: '제품 비교 분석',
    desc: '쿨 vs 오리지널 vs 에어와플, 한번에 비교',
    img: '/assets/main1000_1000_2.jpg',
  },
  {
    href: '/guide/trust',
    tag: 'BRAND TRUST',
    title: '왜 뮤라를 믿을 수 있나',
    desc: '40년 역사와 14개 특허가 만든 신뢰의 근거',
    img: '/assets/0005c238d2989794.jpg',
  },
  {
    href: '/guide/baby-waterproof-pad',
    tag: 'COMPLETE GUIDE',
    title: '방수요 완전 정복',
    desc: '처음 구매자를 위한 A-Z 종합 가이드',
    img: '/assets/mula-1.jpg',
  },
];

const faqItems = [
  {
    q: '뮤라는 어떤 브랜드인가요?',
    a: '뮤라(Mula)는 1983년 설립된 대구 섬유 전문 기업 풍전티티가 운영하는 국내 방수요 전문 브랜드입니다. 신생아부터 유아까지 안전하게 사용할 수 있는 순면 방수요를 100% 국내에서 직접 생산합니다. 누적 판매 100만 개 이상, 고객 만족도 4.9/5.0을 기록하고 있습니다.',
  },
  {
    q: '풍전티티와 뮤라의 관계는?',
    a: '풍전티티는 1983년부터 대구 달성군에서 섬유를 생산해 온 40년 역사의 제조 기업입니다. 뮤라는 풍전티티가 자사 기술력을 바탕으로 론칭한 독립 유아 침구 브랜드입니다. 풍전티티의 직조·가공 설비와 14개 관련 특허 기술이 뮤라 방수요의 품질 기반입니다.',
  },
  {
    q: '왜 OEM이 아닌 자체 생산인가요?',
    a: 'OEM이나 해외 위탁 생산은 비용은 낮지만 품질 일관성과 소재 추적이 어렵습니다. 풍전티티는 같은 공장, 같은 기준으로 생산하는 All-in-One 시스템을 통해 첫 구매와 재구매 제품의 품질이 동일하도록 관리합니다.',
  },
  {
    q: '14개 특허는 어떤 문제를 해결하나요?',
    a: '뮤라의 14개 관련 특허는 세 영역에 집중됩니다. ① 세탁 내구성 — 100회 반복 세탁 후에도 방수막이 갈라지지 않는 코팅 기술, ② 통기성과 방수력 동시 확보 — 상층 순면 + 하층 방수막 분리 구조, ③ 빠른 건조 — 그늘에서 3~4시간 내 건조 가능한 원단 설계.',
  },
];

export default function GuidePage() {
  return (
    <div className="fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
      />

      {/* 1. Hero */}
      <section
        className="guide-hero"
        style={{ backgroundImage: 'url(/assets/df8ac006e1fd7618.jpg)' }}
      >
        <div className="guide-hero-overlay" />
        <div className="guide-hero-inner">
          <h1 className="serif guide-hero-title">
            아이를 기준으로<br />만든 침구
            <GeoBadge
              label="AboutPage 스키마"
              schema="AboutPage"
              tooltip="브랜드 소개 페이지로 AboutPage + Brand JSON-LD 동시 적용. AI가 '뮤라는 어떤 브랜드인가'에 답변 가능."
            />
          </h1>
          <p className="guide-hero-sub">1983년 섬유 명가 풍전티티의 40년 장인 정신</p>
          <a
            href="https://www.mula.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="guide-hero-btn"
          >
            쇼핑몰 가기 →
          </a>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <section className="guide-stats-section">
        <div className="guide-stats-inner">
          {[
            { num: '1983', label: '브랜드 창립', sub: '40년 섬유 역사' },
            { num: '14개', label: '보유 특허', sub: '원단·방수막·봉제 기술' },
            { num: '100만+', label: '누적 판매', sub: '검증된 신뢰' },
            { num: '4.9★', label: '고객 만족도', sub: '5점 만점' },
          ].map(({ num, label, sub }) => (
            <div key={label} className="guide-stat-card">
              <span className="serif guide-stat-num">{num}</span>
              <span className="guide-stat-label">{label}</span>
              <span className="guide-stat-sub">{sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Origin Story */}
      <section className="guide-intro-section">
        <div className="guide-intro-inner">
          <img
            src="/assets/0b7ebe97df307468.jpg"
            alt="뮤라 연구 개발 과정"
            className="guide-intro-img"
          />
          <div>
            <span className="guide-intro-subtitle">THE BEGINNING</span>
            <h2 className="serif guide-intro-title">
              "편하게 세탁할 수 있는<br />방수요는 왜 없을까?"
            </h2>
            <div className="guide-intro-body">
              <p>
                기존 유아용 방수요들은 세탁기에 돌리면 형태가 망가지거나 방수막이 갈라지기 일쑤였습니다.
                건조 시간도 너무 길어 잦은 배변 실수에 대응하기엔 턱없이 부족했습니다.
              </p>
              <p>
                육아를 직접 겪으며 답답함을 느낀 부모 개발자들의 절실한 고민에서 뮤라가 탄생했습니다.
                아이 피부에는 가장 건강하면서도, 부모에게는 관리의 스트레스를 덜어주는
                '완벽한 세탁 내구성'을 목표로 5년의 연구 끝에 세상에 없던 원단을 완성했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Guide Hub */}
      <section className="guide-hub-section">
        <div className="guide-section-inner">
          <div className="guide-hub-header">
            <h2 className="serif guide-hub-title">뮤라 완전 분석 가이드</h2>
            <p className="guide-hub-desc">5가지 주제별 심층 가이드로 뮤라를 완벽히 이해하세요</p>
          </div>
          <div className="guide-hub-grid">
            {hubCards.map((card) => (
              <Link key={card.href} href={card.href} className="guide-hub-card">
                <div
                  className="guide-hub-card-bg"
                  style={{ backgroundImage: `url(${card.img})` }}
                />
                <div className="guide-hub-card-overlay" />
                <div className="guide-hub-card-body">
                  <span className="guide-hub-card-tag">{card.tag}</span>
                  <div className="guide-hub-card-title">{card.title}</div>
                  <div className="guide-hub-card-desc">{card.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Product Strip */}
      <section className="guide-products-section">
        <div className="guide-section-inner">
          <h2 className="serif guide-products-title">뮤라 대표 제품</h2>
          <div className="guide-products-strip">
            {[
              { img: '/assets/220_01_20241201.webp', name: '오리지널 에코 방수요' },
              { img: '/assets/220_02_20241201.webp', name: '쿨 방수요' },
              { img: '/assets/220_09_20241201.webp', name: '에어 와플 방수요' },
              { img: '/assets/221_08_20241201.webp', name: '헤링본 방수요' },
            ].map(({ img, name }) => (
              <div key={name} className="guide-product-item">
                <div className="guide-product-img-wrap">
                  <img src={img} alt={name} className="guide-product-img" />
                </div>
                <p className="guide-product-name">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Philosophy */}
      <section
        className="guide-philosophy-section"
        style={{ backgroundImage: 'url(/assets/d31bd7241e8ff98d.jpg)' }}
      >
        <div className="guide-philosophy-overlay" />
        <div className="guide-philosophy-inner">
          <h2 className="serif guide-philosophy-title">Brand Philosophy</h2>
          <p className="guide-philosophy-quote">
            "아기가 덮고 자는 이불, 피부에 가장 먼저 닿는 패드.<br />
            그 어떤 것보다 세심하고 정직해야 합니다."
          </p>
          <p className="guide-philosophy-body">
            단순히 예쁜 디자인을 넘어 실생활에 진짜 도움이 되는 기능성 생활 섬유를 향한
            뮤라의 여정은 멈추지 않습니다. 우리 가족이 매일 밤 안심하고 누울 수 있는
            침실 혁명을 이어가겠습니다.
          </p>
        </div>
      </section>

      {/* 7. Company / Patent */}
      <section className="guide-company-section">
        <div className="guide-company-inner">
          <div className="guide-company-img-wrap">
            <img
              src="/assets/0005c238d2989794.jpg"
              alt="풍전티티 섬유 공정"
              className="guide-company-img"
            />
          </div>
          <div>
            <span className="guide-intro-subtitle">THE COMPANY</span>
            <h2 className="serif guide-company-title">
              대구를 지켜온<br />섬유 자부심, 풍전티티
              <GeoBadge
                label="Brand 스키마 + 회사 정보표"
                schema="Brand"
                tooltip="Brand 스키마와 8행 정보표(브랜드·운영사·설립·제조·특허·시스템) 결합. AI가 회사 팩트를 정확히 인용 가능."
              />
            </h2>
            <div className="guide-company-body">
              <p>
                뮤라는 1983년부터 명맥을 이어온 섬유 명가 풍전티티의 독립 브랜드입니다.
                트렌드만 좇아 형태만 베끼는 유통 방식을 단호히 거부합니다.
              </p>
              <p>
                원사 직조부터 완제품 포장까지 소비자에게 닿는 모든 과정을 직접 통제하는
                All-in-One 시스템으로 현재 관련 특허만 14개에 달합니다.
              </p>
            </div>
            <table className="guide-company-table">
              <tbody>
                {[
                  ['브랜드', '뮤라 (Mula)'],
                  ['운영사', '(주)풍전티.티'],
                  ['설립', '1983년'],
                  ['제조', '대구 달성군 (100% 국내 생산)'],
                  ['특허', '관련 특허 14개'],
                  ['시스템', 'All-in-One 자체 생산'],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th>{k}</th>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2 className="serif guide-faq-title">
            뮤라에 대해 자주 묻는 질문
            <GeoBadge
              label="브랜드 FAQ H3"
              schema="FAQPage"
              tooltip="브랜드 핵심 질문 4개를 H3 구조로 노출. AI가 브랜드 관련 질문에 답변할 때 인용 가능한 구조화된 텍스트."
            />
          </h2>
          {faqItems.map((item, idx) => (
            <div key={idx} className="guide-faq-item">
              <h3 className="serif guide-faq-q">{item.q}</h3>
              <p className="guide-faq-a">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Sources */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 5% 80px' }}>
        <GeoBadge
          label="SourceList — 출처 목록"
          schema="AboutPage"
          tooltip="브랜드 정보의 출처(공식몰·FAQ·뉴스)를 명시. AI가 인용 시 신뢰 근거를 함께 제시할 수 있도록 구조화."
        />
        <SourceList
          sources={[
            { title: '뮤라 공식 쇼핑몰', url: 'https://www.mula.co.kr/' },
            { title: '뮤라 방수요 자주 묻는 질문(FAQ)', url: '/qna' },
            { title: '뮤라 브랜드 뉴스 & 블로그', url: '/news' },
          ]}
        />
      </div>
    </div>
  );
}
