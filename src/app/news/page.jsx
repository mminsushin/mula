import Link from 'next/link';
import SummaryBlock from '../../components/geo/SummaryBlock';
import GeoBadge from '../../components/geo/GeoBadge';
import { posts } from './posts';
import './news-page.css';

export const metadata = {
  title: 'Mula 매거진 & 뉴스',
  description: '아기 방수요 세탁법, 신생아 침구 고르는 법, 쿨 방수요 vs 일반 비교 등 뮤라의 육아·침구 정보와 브랜드 소식을 확인하세요.',
};

const highlightMula = (text) => {
  if (!text) return null;
  const parts = text.split(/(뮤라)/g);
  return parts.map((part, index) =>
    part === '뮤라' ? <span key={index} className="mula-highlight">{part}</span> : part
  );
};

export default function NewsPage() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://mula.co.kr/news#blog',
    name: '뮤라 매거진 & 브랜드 뉴스',
    url: 'https://mula.co.kr/news',
    description: '아기 방수요 세탁법, 신생아 침구 선택 가이드, 쿨 방수요 vs 일반 비교 등 뮤라의 육아·침구 정보와 브랜드 소식.',
    publisher: { '@id': 'https://mula.co.kr/#organization' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://mula.co.kr' },
        { '@type': 'ListItem', position: 2, name: '뉴스 & 블로그', item: 'https://mula.co.kr/news' },
      ],
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.dateISO,
      url: `https://mula.co.kr/news/${post.slug}`,
      image: `https://mula.co.kr${post.mainImage}`,
      publisher: { '@id': 'https://mula.co.kr/#organization' },
      author: { '@id': 'https://mula.co.kr/#organization' },
    })),
  };

  return (
    <div className="fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero */}
      <section
        className="news-page-hero"
        style={{ backgroundImage: 'url(/assets/f04eb84f35b1260c.jpg)' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(50, 45, 40, 0.5)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 className="serif fade-in news-page-hero-title">
            뉴스 & 블로그
            <GeoBadge
              label="Blog 스키마 + BlogPosting ×12"
              schema="Blog"
              tooltip="Blog 스키마에 12개 게시글이 BlogPosting 배열로 포함. AI가 카테고리별 콘텐츠 목록을 한 번에 파악."
            />
          </h1>
          <p className="fade-in news-page-hero-desc">
            뮤라의 최신 브랜드 소식과 유익한 육아 지식을 전해드립니다.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%', paddingBottom: '100px' }}>

        <SummaryBlock
          title="아기 방수요 & 유아 침구 정보 허브"
          description="신생아 방수요 고르는 법, 세탁·건조 가이드, 쿨 방수요 vs 일반 비교 등 뮤라가 직접 알려드리는 육아 침구 실용 정보입니다."
          updatedAt="2026-04-22"
        />

        <div style={{ marginTop: '1.5rem' }}>
          <GeoBadge
            label="개별 아티클 라우트 12개"
            schema="Article"
            tooltip="각 게시글마다 고유 URL(/news/[slug])과 Article+BlogPosting JSON-LD 적용. AI가 개별 기사를 직접 인용 가능."
          />
        </div>

        {/* Card Grid */}
        <div
          className="news-page-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2.5rem',
            marginTop: '2.5rem',
          }}
        >
          {posts.map((post) => (
            <Link key={post.id} href={`/news/${post.slug}`} style={{ textDecoration: 'none' }}>
              <article style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                height: '100%',
              }} className="news-card-hover">

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
                    padding: '6px 14px',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    color: 'var(--dark-brown)',
                    fontWeight: 'bold',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  }}>
                    {post.tag}
                  </span>
                </div>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h2 className="serif" style={{ fontSize: '1.3rem', lineHeight: '1.45', marginBottom: '1rem', color: 'var(--dark-brown)', wordBreak: 'keep-all' }}>
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
                    margin: 0,
                  }}>
                    {highlightMula(post.excerpt)}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
                    <span style={{ color: '#aaa', fontSize: '0.85rem' }}>{post.date}</span>
                    <span style={{ color: 'var(--accent-beige)', fontSize: '0.9rem', fontWeight: 'bold' }}>자세히 보기 →</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .news-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08) !important;
        }
        @media (max-width: 768px) {
          .news-page-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </div>
  );
}
