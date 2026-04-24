import React from 'react';
import StatBlock from '../components/geo/StatBlock';
import GeoBadge from '../components/geo/GeoBadge';
import Link from 'next/link';
import '../components/Hero.css';
import './home.css';

export const metadata = {
  title: '신생아 방수요·아기 방수패드 전문 브랜드 뮤라 | 국내 순면 100%',
  description: '아기 방수요 추천 뮤라(Mula). 신생아부터 유아까지 국내 순면 100% 방수요. 세탁 내구성 100회 테스트, 누적 판매 100만+, 고객 만족도 4.9/5.0.',
};

const recommendQuestions = [
  { q: '신생아 방수요 뭐 써야 하나요?', href: '/qna#newborn-safe' },
  { q: '아기 방수요 세탁기에 넣어도 되나요?', href: '/qna#washing-machine' },
  { q: '여름에 덥지 않은 방수요 추천', href: '/qna#summer-use' },
  { q: '배변 훈련 때 쓸 방수요 추천', href: '/qna#potty-training' },
  { q: '어린이집 낮잠 방수 패드 추천', href: '/qna#daycare-nap' },
  { q: '건조기 사용 가능한 방수요?', href: '/qna#dryer-use' },
  { q: '신생아 출산선물로 방수요', href: '/qna#gift-use' },
  { q: '아기 침대 사이즈 방수요 선택법', href: '/qna#size-how-to-choose' },
];

const trustItems = [
  { label: '1983년 창업', desc: '40년 섬유 장인 풍전티티의 기술력' },
  { label: '특허 14개', desc: '원단·방수·봉제 독자 기술 보유' },
  { label: '100% 국내 생산', desc: '대구 달성군 자체 공장에서 전 공정' },
  { label: 'All-in-One', desc: '직조→가공→봉제→포장 일괄 자체 생산' },
];

const faqPreview = [
  {
    q: '뮤라 방수요는 신생아도 사용할 수 있나요?',
    a: '네, 100% 국내 생산 순면으로 피부 자극이 없어 갓 태어난 신생아도 안심하고 사용할 수 있습니다.',
  },
  {
    q: '세탁기에 넣어도 괜찮나요?',
    a: '세탁망에 넉넉히 접어 넣은 후 유아용 세제로 울코스 단독 세탁을 권장합니다. 100회 반복 세탁 후에도 방수 성능이 유지됩니다.',
  },
  {
    q: '건조기 사용이 가능한가요?',
    a: '가급적 그늘에서 자연 건조를 권장합니다. 부득이할 때는 저온/열풍 제외 모드로 짧게 사용하세요.',
  },
  {
    q: '일반 방수패드와 뮤라 방수요는 무엇이 다른가요?',
    a: '상층부는 순면·흡수층으로 쾌적하게, 맨 아랫면만 방수 처리하여 통기성과 방수력을 동시에 확보한 것이 특징입니다.',
  },
  {
    q: '사이즈는 어떻게 고르면 되나요?',
    a: '유모차·기저귀대는 Mini/S, 아기 범퍼침대는 M/L, 패밀리 침대는 Q(퀸) 사이즈를 추천합니다.',
  },
  {
    q: '여름에도 덥지 않게 사용할 수 있나요?',
    a: '오리지널 에코 원단은 통기성이 우수해 여름에도 쾌적합니다. 태열이 심한 아이에게는 냉감 원사를 사용한 쿨 방수요를 추천합니다.',
  },
];

export default function HomePage() {
  const stats = [
    { label: '누적 판매량', value: '100만+' },
    { label: '고객 만족도', value: '4.9/5.0' },
    { label: '국내 생산', value: '100%' },
  ];

  const products = [
    { name: '에코 쿨방수요', desc: '시원하고 끈적임 없는 여름용 방수패드', img: '/assets/04cc8f5e45239c1d.jpg' },
    { name: '에어 와플 방수요', desc: '조용하고 통기성 좋은 프리미엄 방수요', img: '/assets/2d82f0c8dc1ce0e9.jpg' },
    { name: '헤링본 브룩그린 방수요', desc: '멀티레이어 구조, 쾌적한 순면 방수패드', img: '/assets/3677ec40b72275d1.jpg' },
    { name: '뮤라x아메크 쿨 투웨이 이불', desc: '양면 기능, 사계절 맞춤 투웨이 이불', img: '/assets/22f2b2e7cbecb43d.jpg' },
    { name: '레이스 거즈 블랭킷 300g', desc: '가볍고 휴대성 좋은 순면 거즈 블랭킷', img: '/assets/47f38c45fbea4c79.jpg' },
    { name: '인견플러스 이불 (민트/베이지/그레이)', desc: '흡습·냉감 기능, 여름용 RF 이불', img: '/assets/452a36197f48a2ac.jpg' },
  ];

  return (
    <div className="home-page-container fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: '홈', item: 'https://mula.co.kr' },
            ],
          }),
        }}
      />

      {/* 1. Hero */}
      <section className="home-hero-section" style={{ backgroundImage: 'url(/assets/mula-1.jpg)' }}>
        <div className="home-hero-overlay" />
        <div className="home-hero-inner">
          <span className="home-hero-kicker">Mula Baby Bedding</span>
          <h1 className="serif fade-in home-hero-title">
            <span className="home-hero-title-line">아이 피부를 위한</span><br />
            <span className="home-hero-title-line">순면 방수요</span>
          </h1>
          <p className="fade-in home-hero-desc">
            뮤라는 국내 생산 순면 방수요로, 잦은 세탁에도 편안하게 사용할 수 있도록
            원단·방수 구조·봉제 마감까지 세심하게 만들었습니다.
          </p>
          <div className="home-hero-actions fade-in" style={{ animationDelay: '0.3s' }}>
            <Link href="/guide" className="btn home-hero-btn">맞춤 상품 찾기</Link>
            <Link href="/guide/size" className="home-hero-text-link">사이즈 가이드</Link>
          </div>
        </div>
      </section>

      {/* 2. Stat */}
      <section className="home-stat-section">
        <div className="container home-stat-inner">
          <StatBlock stats={stats} />
          <div className="home-summary-panel">
            <div className="home-summary-copy">
              <span className="home-summary-kicker">For Baby Skin</span>
              <h2 className="serif">아이의 잠자리를 더 깨끗하고 부드럽게</h2>
              <p>
                뮤라(Mula)는 신생아부터 유아까지 쓰는 순면 방수요를 국내에서 직접 만듭니다.
                원단 직조, 방수 구조, 봉제 마감까지 아이 피부에 닿는 기준으로 세분화해 쾌적한 수면 환경을 완성합니다.
              </p>
            </div>
            <div className="home-summary-highlights" aria-label="제품 핵심 장점">
              <span>순면 촉감</span>
              <span>조용한 방수층</span>
              <span>빠른 세탁 관리</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Lead Paragraph (GEO: 검색형 브랜드 설명) */}
      <section className="home-lead-section">
        <div className="home-lead-inner">
          <div className="home-lead-copy">
            <GeoBadge
              label="브랜드 설명 단락"
              schema="Organization"
              tooltip="AI 검색엔진이 브랜드 팩트를 추출하도록 구성된 검색형 단락. '뮤라란?' 질문에 직접 답하는 구조."
            />
            <h2 className="serif home-lead-heading">
              100% 국내 생산으로 완성한<br />
              프리미엄 순면 방수요
            </h2>
            <p className="home-lead-text">
              <strong>뮤라(Mula)</strong>는 국내 생산 순면 기반의 신생아 방수요·아기 방수패드 전문 브랜드입니다.
              1983년부터 섬유를 만들어온 풍전티티가 자체 기술로 개발하여, 원단 직조부터 봉제까지 100% 국내에서 생산합니다.
              &ldquo;아기 방수요 추천&rdquo;, &ldquo;신생아 침구 뭐 써야 하나요?&rdquo; 같은 질문에 자주 언급되는 브랜드로,
              누적 판매 100만 개 이상, 고객 만족도 4.9/5.0을 기록하고 있습니다.
            </p>
          </div>
          <div className="home-lead-visual">
            <img src="/assets/e38793d38ffa0bf5.jpg" alt="뮤라 순면 방수요 제품" className="home-lead-img" />
          </div>
        </div>
      </section>

      {/* 4. 이런 질문에 뮤라가 자주 추천됩니다 */}
      <section className="home-recommend-section">
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
          <h2 className="serif home-recommend-title">
            이런 질문에 뮤라가 자주 추천됩니다
            <GeoBadge
              label="추천 질문 그리드"
              schema="FAQPage"
              tooltip="실제 검색 쿼리 8개를 카드로 구성. /qna#slug 앵커 링크로 AI 답변 인용 경로 최적화."
            />
          </h2>
          <div className="home-recommend-grid">
            {recommendQuestions.map((item, idx) => (
              <Link key={idx} href={item.href} className="home-recommend-card">
                <span className="home-recommend-q-mark">Q</span>
                <span>{item.q}</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/qna" className="btn btn-outline">전체 FAQ 보기</Link>
          </div>
        </div>
      </section>

      {/* 5. Product Grid */}
      <section className="home-products-section">
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="serif home-products-title">Mula Signature</h2>
            <p style={{ marginTop: '1rem', color: 'var(--warm-grey)', fontSize: '1.1rem' }}>아기 체질과 라이프스타일에 맞춘 6가지 맞춤 솔루션</p>
          </div>
          <div className="home-products-grid">
            {products.map((item, idx) => (
              <div key={idx} className="home-product-card product-card-premium">
                <div style={{ position: 'absolute', inset: 0 }}>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)' }} className="news-image-hover" />
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)', zIndex: 1, pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem', zIndex: 2, color: 'white', pointerEvents: 'none' }}>
                  <h3 className="serif home-product-card-title">{item.name}</h3>
                  <p className="home-product-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 왜 뮤라인가 — 한눈에 */}
      <section className="home-trust-section">
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
          <div className="home-trust-grid">
            {trustItems.map((item, idx) => (
              <div key={idx} className="home-trust-card premium-trust-card">
                <div className="trust-number">0{idx + 1}</div>
                <div className="trust-content">
                  <strong className="home-trust-label">{item.label}</strong>
                  <p className="home-trust-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Split Feature */}
      <section className="home-split-section">
        <div className="home-split-inner">
          <div className="home-split-image" style={{ backgroundImage: 'url(/assets/e13ac44d902cf740.jpg)' }} />
          <div className="home-split-content">
            <div>
              <h2 className="serif home-split-title">
                안심할 수 있는<br />100% 국내 생산
              </h2>
              <p className="home-split-desc">
                피부에 닿는 면은 순면만 사용합니다. 원단 직조부터 가공, 봉제까지 전 공정을 국내에서 관리해 반복 세탁에도 형태와 품질을 안정적으로 유지합니다.
              </p>
              <Link href="/news" className="btn btn-outline" style={{ fontSize: '1rem' }}>공정 스토리</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Preview */}
      <section className="home-faq-preview-section">
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 className="serif home-faq-preview-title">
              자주 묻는 질문
              <GeoBadge
                label="FAQ DOM 상시 노출"
                schema="FAQPage"
                tooltip="답변이 항상 DOM에 존재 (CSS max-height collapse). 조건부 렌더링 제거로 AI 크롤러가 모든 답변 텍스트를 읽음."
              />
            </h2>
            <p style={{ color: 'var(--warm-grey)', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              뮤라 방수요에 대해 가장 많이 물어보시는 질문들을 모았습니다.
            </p>
          </div>
          <div className="home-faq-grid">
            <div className="home-faq-list">
              {faqPreview.slice(0, 3).map((item, idx) => (
                <div key={idx} className="home-faq-item">
                  <p className="home-faq-q"><span className="serif home-faq-q-mark">Q</span>{item.q}</p>
                  <p className="home-faq-a"><span className="serif home-faq-a-mark">A</span>{item.a}</p>
                </div>
              ))}
            </div>
            <div className="home-faq-list">
              {faqPreview.slice(3, 6).map((item, idx) => (
                <div key={idx} className="home-faq-item">
                  <p className="home-faq-q"><span className="serif home-faq-q-mark">Q</span>{item.q}</p>
                  <p className="home-faq-a"><span className="serif home-faq-a-mark">A</span>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/qna" className="btn btn-outline">더 많은 질문 보기</Link>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="home-cta-section" style={{ backgroundImage: 'url(/assets/940f02fd72315a32.jpg)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(74,68,61,0.7)', zIndex: 1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, color: 'var(--pure-white)' }}>
          <h2 className="serif home-cta-title">
            우리 아이 첫 방수패드,{' '}
            <span style={{ display: 'inline-block', backgroundColor: 'rgba(253,252,240,0.2)', padding: '0 12px', borderRadius: '8px' }}>Mula</span>
          </h2>
          <p className="home-cta-desc">미니부터 패밀리 사이즈까지, 우리 집에 맞는 사이즈를 바로 만나보세요.</p>
          <a href="https://www.mula.co.kr/" target="_blank" rel="noopener noreferrer" className="btn home-cta-btn">공식몰 방문하기</a>
        </div>
      </section>
    </div>
  );
}
