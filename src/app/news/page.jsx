import React from 'react';
import SummaryBlock from '../../components/geo/SummaryBlock';

export const metadata = {
  title: 'Mula 매거진 & 뉴스',
  description: '뮤라의 최신 소식과 유용한 육아/수면 팁 매거진을 확인해보세요.',
};

export default function NewsPage() {
  const posts = [
    {
      id: 1,
      tag: "뉴스",
      title: "뮤라, 자주 세탁해도 편하게 사용할 수 있는 침구 개발에 집중",
      date: "2026. 04. 10",
      excerpt: "뮤라는 일상에서 자주 세탁하며 위생적으로 사용할 수 있는 침구 제품 개발에 집중하고 있습니다. 기존 유아용 침구의 건조 불편과 형태 변형 문제를 줄이기 위해 원단 개발부터 제품화까지 직접 관리하는 체계를 이어가고 있습니다. 앞으로도 실용성과 소재 기술을 함께 고려한 제품 개발을 확대해나갈 계획입니다.",
      mainImage: "/assets/B1_00916-1.jpg"
    },
    {
      id: 2,
      tag: "뉴스",
      title: "뮤라, 섬유 기술 기반의 생활 침구 브랜드로 제품군 확장",
      date: "2026. 03. 28",
      excerpt: "뮤라는 유아용 침구를 넘어 가족이 함께 사용할 수 있는 생활 침구 제품군으로 브랜드 확장을 이어가고 있습니다. 섬유 기반의 기능성을 바탕으로 방수패드, 방수요, 이불 등 실생활에 밀접한 제품을 선보이고 있습니다. 브랜드는 앞으로도 소재 기술을 기반으로 한 실용적인 제품 개발에 힘쓸 예정입니다.",
      mainImage: "/assets/3714c6098a725747.jpg"
    },
    {
      id: 3,
      tag: "뉴스",
      title: "뮤라, 원단 개발부터 생산까지 직접 책임지는 브랜드 운영 강화",
      date: "2026. 03. 15",
      excerpt: "뮤라는 원단 개발, 생산, 판매까지 직접 관리하는 방식으로 제품 완성도와 품질 기준을 꾸준히 관리하고 있습니다. 단순 유통 중심이 아니라 제품의 기능성과 사용성을 브랜드 기준에 맞춰 일관되게 운영하는 점이 특징입니다. 이를 통해 소비자가 안심하고 선택할 수 있는 침구 브랜드로 자리잡고자 합니다.",
      mainImage: "/assets/c0a3fbc40603df3d.jpg"
    },
    {
      id: 4,
      tag: "블로그",
      title: "유아용 침구는 왜 자주 세탁해 쓰기 편해야 할까요?",
      date: "2026. 02. 20",
      excerpt: "아기 침구는 피부에 자주 닿고 오염도 잦기 때문에 세탁과 건조가 편한지가 매우 중요합니다. 세탁 후 형태가 쉽게 변하거나 건조 시간이 길면 위생적으로 관리하기 어려워질 수 있습니다. 그래서 유아용 침구를 고를 때는 촉감뿐 아니라 관리 편의성과 실사용성을 함께 살펴보는 것이 좋습니다.",
      mainImage: "/assets/91fe8fe5ad874717.jpg"
    },
    {
      id: 5,
      tag: "블로그",
      title: "방수요를 고를 때 소재보다 먼저 봐야 할 것은 무엇일까요?",
      date: "2026. 02. 05",
      excerpt: "방수요는 단순히 물이 새지 않는지만 볼 것이 아니라, 피부에 닿는 감촉과 통기성, 세탁 후 관리 편의성까지 함께 확인해야 합니다. 특히 아기나 아이가 매일 사용하는 제품일수록 실제 생활에서 얼마나 편하게 쓸 수 있는지가 중요합니다. 좋은 방수요는 기능성과 사용감이 함께 균형을 이루는 제품입니다.",
      mainImage: "/assets/d318502ff85e1aba.jpg"
    },
    {
      id: 6,
      tag: "블로그",
      title: "뮤라는 왜 침구의 실용성을 중요하게 생각할까요?",
      date: "2026. 01. 18",
      excerpt: "뮤라는 침구가 단순히 보기 좋은 제품이 아니라 일상에서 자주 쓰이고 쉽게 관리할 수 있어야 한다고 생각합니다. 그래서 소재 기능을 높이는 동시에 세탁, 건조, 사용감까지 함께 고려한 제품 개발에 집중해왔습니다. 결국 좋은 침구는 특별한 순간보다 매일의 생활에서 편하게 느껴지는 제품에 더 가깝습니다.",
      mainImage: "/assets/72febcdc9a356bf4.jpg"
    }
  ];

  // Helper function to auto-highlight the brand name "뮤라"
  const highlightMula = (text) => {
    if (!text) return null;
    const parts = text.split(/(뮤라)/g);
    return parts.map((part, index) => 
      part === '뮤라' ? <span key={index} className="mula-highlight">{part}</span> : part
    );
  };

  return (
    <div className="fade-in">
      
      {/* 1. Hero / Header Section */}
      <section style={{
        position: 'relative',
        width: '100%',
        minHeight: '350px',
        padding: '120px 5%',
        backgroundImage: 'url(/assets/f04eb84f35b1260c.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        marginBottom: '3rem'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(50, 45, 40, 0.5)', zIndex: 1 }}></div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 className="serif fade-in" style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '500', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            뉴스 & 블로그
          </h1>
          <p className="fade-in" style={{ fontSize: '1.2rem', opacity: 0.9, textShadow: '0 1px 5px rgba(0,0,0,0.5)', letterSpacing: '0.5px' }}>
            뮤라의 최신 브랜드 소식과 유익한 육아 지식을 전해드립니다.
          </p>
        </div>
      </section>

      {/* 2. Content Container */}
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%', paddingBottom: '100px' }}>
        
        {/* Invisible SEO Summary Block */}
        <div style={{ display: 'none' }}>
          <SummaryBlock
            title="Mula 매거진 & 브랜드 소식"
            description="시즌별 신제품 소식부터 육아/수면 팁을 매주 확인하세요."
            updatedAt="2026-04-13"
          />
        </div>
        
        {/* 3-Column Image Card Grid layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '2.5rem', 
          marginTop: '2rem' 
        }}>
          {posts.map((post) => (
            <article key={post.id} style={{ 
              backgroundColor: 'white', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer'
            }} className="news-card-hover">
              
              {/* Card Image Banner */}
              <div style={{ height: '250px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={post.mainImage} 
                  alt={post.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  className="news-image-hover"
                />
                <span style={{ 
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  display: 'inline-block', 
                  padding: '6px 14px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                  color: 'var(--dark-brown)',
                  fontWeight: 'bold',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}>
                  {post.tag}
                </span>
              </div>
              
              {/* Card Content Body */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h2 className="serif" style={{ fontSize: '1.4rem', lineHeight: '1.4', marginBottom: '1rem', color: 'var(--dark-brown)' }}>
                  {post.title}
                </h2>
                <p style={{ 
                  color: 'var(--warm-grey)', 
                  lineHeight: '1.6', 
                  fontSize: '0.95rem', 
                  flexGrow: 1, 
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  margin: 0
                }}>
                  {highlightMula(post.excerpt)}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
                  <span style={{ color: '#aaa', fontSize: '0.85rem' }}>{post.date}</span>
                  <span style={{ color: 'var(--accent-beige)', fontSize: '0.9rem', fontWeight: 'bold' }}>자세히 보기 &rarr;</span>
                </div>
              </div>
              
            </article>
          ))}
        </div>
        
        {/* 페이징 (UI용) */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem', gap: '10px' }}>
           <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', backgroundColor: 'var(--dark-brown)', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>1</button>
           <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd', backgroundColor: 'transparent', color: '#666', cursor: 'pointer' }}>2</button>
        </div>
      </div>
      
      {/* Add hover effect CSS locally for cards since it's only used here */}
      <style dangerouslySetInnerHTML={{__html: `
        .news-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08) !important;
        }
      `}} />
    </div>
  );
}
