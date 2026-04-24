import { notFound } from 'next/navigation';
import Link from 'next/link';
import GeoBadge from '../../../components/geo/GeoBadge';
import { posts } from '../posts';

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.dateISO,
      images: [{ url: post.mainImage, alt: post.title }],
    },
    alternates: { canonical: `https://mula.co.kr/news/${post.slug}` },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://mula.co.kr/news/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    image: `https://mula.co.kr${post.mainImage}`,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: { '@id': 'https://mula.co.kr/#organization' },
    publisher: { '@id': 'https://mula.co.kr/#organization' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mula.co.kr/news/${post.slug}`,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://mula.co.kr' },
        { '@type': 'ListItem', position: 2, name: '뉴스 & 블로그', item: 'https://mula.co.kr/news' },
        { '@type': 'ListItem', position: 3, name: post.title, item: `https://mula.co.kr/news/${post.slug}` },
      ],
    },
  };

  return (
    <div className="fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Image */}
      <div style={{ width: '100%', height: '420px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={post.mainImage}
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 55%)' }} />
      </div>

      <div className="container" style={{ maxWidth: '780px', margin: '0 auto', padding: '60px 5% 100px' }}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: '2rem', fontSize: '0.88rem', color: 'var(--warm-grey)' }}>
          <Link href="/" style={{ color: 'var(--warm-grey)', textDecoration: 'none' }}>홈</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/news" style={{ color: 'var(--warm-grey)', textDecoration: 'none' }}>뉴스 &amp; 블로그</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--dark-brown)' }}>{post.tag}</span>
        </nav>

        {/* Tag + Date */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.2rem' }}>
          <span style={{
            padding: '4px 14px',
            backgroundColor: 'var(--accent-beige)',
            color: 'var(--dark-brown)',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
          }}>
            {post.tag}
          </span>
          <time dateTime={post.dateISO} style={{ color: 'var(--warm-grey)', fontSize: '0.85rem' }}>
            {post.date}
          </time>
        </div>

        {/* Title */}
        <h1 className="serif" style={{
          fontSize: '2.2rem',
          color: 'var(--dark-brown)',
          lineHeight: 1.45,
          marginBottom: '2rem',
          wordBreak: 'keep-all',
        }}>
          {post.title}
          <GeoBadge
            label="Article + BlogPosting"
            schema="Article"
            tooltip="개별 아티클에 Article + BlogPosting JSON-LD 동시 적용. headline·datePublished·publisher 포함, AI가 출처와 발행일 함께 인용."
          />
        </h1>

        <div style={{ width: '48px', height: '2px', backgroundColor: 'var(--accent-beige)', marginBottom: '2.5rem' }} />

        {/* Body */}
        <article>
          {post.paragraphs.map((para, idx) => (
            <p key={idx} style={{
              color: 'var(--dark-brown)',
              fontSize: '1.08rem',
              lineHeight: '1.95',
              marginBottom: '1.8rem',
              wordBreak: 'keep-all',
            }}>
              {para}
            </p>
          ))}
        </article>

        {/* Related CTA */}
        <div style={{
          marginTop: '3.5rem',
          padding: '2rem',
          backgroundColor: 'var(--soft-ivory)',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
        }}>
          <p style={{ fontWeight: 'bold', color: 'var(--dark-brown)', margin: 0 }}>뮤라 방수요가 궁금하신가요?</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/qna" style={{ color: 'var(--accent-beige)', fontWeight: 'bold', fontSize: '0.95rem', textDecoration: 'none' }}>
              자주 묻는 질문 보기 →
            </Link>
            <a href="https://www.mula.co.kr/" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--dark-brown)', fontWeight: 'bold', fontSize: '0.95rem', textDecoration: 'none' }}>
              공식몰 바로가기 →
            </a>
          </div>
        </div>

        {/* Back link */}
        <div style={{ marginTop: '2.5rem' }}>
          <Link href="/news" style={{ color: 'var(--warm-grey)', fontSize: '0.9rem', textDecoration: 'none' }}>
            ← 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
