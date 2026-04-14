import React from 'react';
import SummaryBlock from '../components/geo/SummaryBlock';
import StatBlock from '../components/geo/StatBlock';
import Link from 'next/link';
import '../components/Hero.css';
import './home.css';

export const metadata = {
  title: 'Mula | 글로벌 No.1 홈베딩 방수패드',
  description: '아이의 쾌적한 잠자리를 위한 방수요 전문 브랜드 아기요 뮤라. 신생아부터 유아까지 안전한 소재로 만든 프리미엄 방수패드.',
};

export default function HomePage() {
  const stats = [
    { label: '누적 판매량', value: '100만+' },
    { label: '고객 만족도', value: '4.9/5.0' },
    { label: '국내 생산', value: '100%' }
  ];

  const products = [
    { name: '에코 쿨방수요', desc: '시원하고 끈적임 없는 여름용 방수패드', img: '/assets/04cc8f5e45239c1d.jpg' },
    { name: '에어 와플 방수요', desc: '조용하고 통기성 좋은 프리미엄 방수요', img: '/assets/2d82f0c8dc1ce0e9.jpg' },
    { name: '헤링본 브룩그린 방수요', desc: '멀티레이어 구조, 쾌적한 순면 방수패드', img: '/assets/3677ec40b72275d1.jpg' },
    { name: '뮤라x아메크 쿨 투웨이 이불', desc: '양면 기능, 사계절 맞춤 투웨이 이불', img: '/assets/22f2b2e7cbecb43d.jpg' },
    { name: '레이스 거즈 블랭킷 300g', desc: '가볍고 휴대성 좋은 순면 거즈 블랭킷', img: '/assets/47f38c45fbea4c79.jpg' },
    { name: '인견플러스 이불 (민트/베이지/그레이)', desc: '흡습·냉감 기능, 여름용 RF 이불', img: '/assets/452a36197f48a2ac.jpg' }
  ];

  return (
    <div className="home-page-container fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mula",
            "url": "https://mula.com",
            "logo": "https://mula.com/assets/logo.png"
          })
        }}
      />

      {/* 1. Immersive Hero Section with Background Image */}
      <section
        className="home-hero-section"
        style={{ backgroundImage: 'url(/assets/mula-1.jpg)' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>

        <div className="home-hero-inner">
          <h1 className="serif fade-in home-hero-title">
            사계절 내내<br/>아이 피부에 가장 편안한 선택
          </h1>
          <p className="fade-in home-hero-desc">
            국내 생산 순면 기반, 쾌적함과 안전성을 담은 방수패드{' '}
            <b style={{ display: 'inline-block', backgroundColor: 'rgba(253, 252, 240, 0.25)', padding: '2px 12px', borderRadius: '8px' }}>Mula</b>
          </p>

          <div className="fade-in" style={{ animationDelay: '0.3s' }}>
            <Link href="/guide" className="btn home-hero-btn">맞춤 상품 찾기</Link>
          </div>
        </div>
      </section>

      {/* 2. Stat Overlay Section (GEO SEO) */}
      <section className="home-stat-section">
        <div className="container home-stat-inner">
          <StatBlock stats={stats} />
          <div style={{ display: 'none' }}>
            <SummaryBlock
              title="아이의 숙면을 위한 가장 부드러운 선택"
              description="국내 유아 방수요 전문 브랜드 뮤라(mula). 신생아부터 유아까지, 소재와 사이즈를 세분화하여 아이의 쾌적한 잠자리를 책임집니다."
            />
          </div>
        </div>
      </section>

      {/* 3. Visual Product Grid */}
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
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }} className="news-image-hover" />
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem', zIndex: 2, color: 'white', pointerEvents: 'none' }}>
                  <h3 className="serif home-product-card-title">{item.name}</h3>
                  <p className="home-product-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Split Feature Section with Large Image */}
      <section className="home-split-section">
        <div className="home-split-inner">
          <div className="home-split-image" style={{ backgroundImage: 'url(/assets/e13ac44d902cf740.jpg)' }}></div>
          <div className="home-split-content">
            <div>
              <h2 className="serif home-split-title">
                안심할 수 있는<br/>100% 국내 생산
              </h2>
              <p className="home-split-desc">
                피부에 닿는 면은 순면만 사용합니다. 원단 직조부터 가공, 봉제까지 전 공정을 국내에서 관리해 반복 세탁에도 형태와 품질을 안정적으로 유지합니다.
              </p>
              <Link href="/news" className="btn btn-outline" style={{ fontSize: '1rem' }}>공정 스토리</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Massive Bottom CTA with Image Parallax */}
      <section
        className="home-cta-section"
        style={{ backgroundImage: 'url(/assets/940f02fd72315a32.jpg)' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(74, 68, 61, 0.7)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, color: 'var(--pure-white)' }}>
          <h2 className="serif home-cta-title">
            우리 아이 첫 방수패드,{' '}
            <span style={{ display: 'inline-block', backgroundColor: 'rgba(253, 252, 240, 0.2)', padding: '0 12px', borderRadius: '8px' }}>Mula</span>
          </h2>
          <p className="home-cta-desc">미니부터 패밀리 사이즈까지, 우리 집에 맞는 사이즈를 바로 만나보세요.</p>
          <a href="https://www.mula.co.kr/" target="_blank" rel="noopener noreferrer" className="btn home-cta-btn">공식몰 방문하기</a>
        </div>
      </section>

    </div>
  );
}
