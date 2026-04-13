import React from 'react';
import SummaryBlock from '../components/geo/SummaryBlock';
import StatBlock from '../components/geo/StatBlock';
import Link from 'next/link';
import '../components/Hero.css';

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
    { name: '오리지널 에코 (Eco)', desc: '사계절 부드러운 100% 순면 방수패드', img: '/assets/832f472577ff1674.jpg' },
    { name: '쿨 (Cool) 라인', desc: '태열 방지, 시원한 특수 냉감 소재', img: '/assets/220_02_20241201.webp' },
    { name: '에어 와플 (Waffle)', desc: '닿는 면적 최소화, 극대화된 쾌적함', img: '/assets/d31bd7241e8ff98d.jpg' },
    { name: '라이트 거즈 (Gauze)', desc: '우수한 통기성과 빠른 수분 흡수력', img: '/assets/221_04_20241201.webp' },
    { name: '미니 (Mini) 패드', desc: '외출 및 기저귀 교환에 최적화된 휴대성', img: '/assets/d288f3325967e8b3.jpg' },
    { name: '패밀리 (Family)', desc: '부모님과 함께 쓰는 초대형 안심 사이즈', img: '/assets/B1_00943-1.jpg' }
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
        style={{ 
          position: 'relative', 
          width: '100%', 
          height: '75vh', 
          minHeight: '600px',
          padding: '0',
          backgroundImage: 'url(/assets/mula-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
        
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 5%', maxWidth: '1200px' }}>
          <h1 className="serif fade-in" style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '500', textShadow: '0 2px 10px rgba(0,0,0,0.5)', wordBreak: 'keep-all' }}>
            어떤 계절, 어떤 수면 습관에도<br/>완벽하게 스며드는 포근함
          </h1>
          <p className="fade-in" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, textShadow: '0 1px 5px rgba(0,0,0,0.5)', fontWeight: '300', wordBreak: 'keep-all' }}>
             연약한 우리 아이의 첫 잠자리를 지키는 프리미엄 국내생산 방수패드, <b style={{ display: 'inline-block', backgroundColor: 'rgba(253, 252, 240, 0.25)', padding: '2px 12px', borderRadius: '8px' }}>Mula</b>
          </p>
          
          <div className="fade-in" style={{ animationDelay: '0.3s' }}>
            <Link href="/guide" className="btn" style={{ fontSize: '1.1rem', padding: '15px 40px', backgroundColor: 'var(--pure-white)', color: 'var(--dark-brown)' }}>맞춤 상품 찾기</Link>
          </div>
        </div>
      </section>

      {/* 2. Stat Overlay Section (GEO SEO) */}
      <section style={{ backgroundColor: 'var(--pure-white)', padding: '60px 5%' }}>
         <div className="container" style={{ marginTop: '-100px', position: 'relative', zIndex: 10 }}>
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
      <section style={{ padding: '80px 5%', backgroundColor: 'var(--soft-ivory)' }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="serif" style={{ fontSize: '3rem', color: 'var(--dark-brown)' }}>Mula Signature</h2>
            <p style={{ marginTop: '1rem', color: 'var(--warm-grey)', fontSize: '1.1rem' }}>아기 체질과 라이프스타일에 맞춘 6가지 맞춤 솔루션</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2.5rem' }}>
            {products.map((item, idx) => (
              <div key={idx} style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                height: '420px',
                position: 'relative',
                boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                cursor: 'pointer'
              }} className="product-card-premium">
                <div style={{ position: 'absolute', inset: 0 }}>
                   <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }} className="news-image-hover" />
                </div>
                {/* Dark Gradient Overlay for accurate text rendering */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem', zIndex: 2, color: 'white', pointerEvents: 'none' }}>
                  <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontWeight: 600 }}>{item.name}</h3>
                  <p style={{ fontSize: '1.05rem', opacity: 0.9, letterSpacing: '0.3px' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Split Feature Section with Large Image */}
      <section style={{ backgroundColor: 'var(--pure-white)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: '600px' }}>
          <div style={{ flex: '1 1 500px', backgroundImage: 'url(/assets/e13ac44d902cf740.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px' }}>
          </div>
          <div style={{ flex: '1 1 500px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5% 8%' }}>
            <div>
              <h2 className="serif" style={{ fontSize: '2.8rem', color: 'var(--dark-brown)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                오직 안심할 수 있는<br/>100% 국내 생산의 퀄리티
              </h2>
              <p style={{ color: 'var(--warm-grey)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                연약한 아이 피부에 닿는 면적은 오직 순면만 허락합니다. 원단 직조부터 후가공, 봉제 마감까지 대한민국 공장에서 엄격하게 수제작으로 관리되어, 수 백 번 세탁해도 변함없는 견고함을 제공합니다.
              </p>
              <Link href="/news" className="btn btn-outline" style={{ fontSize: '1rem' }}>공정 스토리 읽기</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Massive Bottom CTA with Image Parallax */}
      <section style={{ 
        position: 'relative', 
        padding: '120px 5%', 
        textAlign: 'center',
        backgroundImage: 'url(/assets/940f02fd72315a32.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(74, 68, 61, 0.7)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, color: 'var(--pure-white)' }}>
           <h2 className="serif" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '500' }}>당신의 첫 방수패드, <span style={{ display: 'inline-block', backgroundColor: 'rgba(253, 252, 240, 0.2)', padding: '0 12px', borderRadius: '8px' }}>Mula</span></h2>
           <p style={{ fontSize: '1.3rem', marginBottom: '3rem', opacity: 0.9 }}>미니 사이즈부터 대형 패밀리 침대용까지, 우리집에 맞는 사이즈를 쇼핑몰에서 바로 만나보세요.</p>
           <a href="https://www.mula.co.kr/" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '16px 50px', fontSize: '1.2rem', backgroundColor: 'var(--accent-beige)', color: 'var(--dark-brown)' }}>공식몰 방문하기</a>
        </div>
      </section>

    </div>
  );
}
