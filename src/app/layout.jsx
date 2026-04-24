import { Suspense } from 'react';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GeoDebugProvider } from '../components/geo/GeoDebugContext';
import GeoDebugBanner from '../components/geo/GeoDebugBanner';

export const metadata = {
  metadataBase: new URL('https://mula.co.kr'),
  title: {
    template: '%s | 뮤라 Mula',
    default: '뮤라 Mula | 국내 순면 방수요 전문 브랜드',
  },
  description: '1983년 섬유 장인 풍전티티가 만든 방수요 전문 브랜드. 신생아부터 유아까지 안전한 국내 순면 방수요 뮤라(Mula). 누적 판매 100만+, 고객 만족도 4.9/5.0.',
  keywords: ['방수요', '아기 방수요', '신생아 방수패드', '유아 방수요', '뮤라', 'Mula', '방수패드 추천', '순면 방수요'],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://mula.co.kr',
    siteName: '뮤라 Mula',
    title: '뮤라 Mula | 국내 순면 방수요 전문 브랜드',
    description: '1983년 섬유 장인 풍전티티가 만든 방수요 전문 브랜드. 신생아 안전 국내 순면, 누적 판매 100만+.',
    images: [
      {
        url: '/assets/mula-1.jpg',
        width: 1200,
        height: 630,
        alt: '뮤라 Mula 방수요 — 국내 순면 프리미엄 방수패드',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '뮤라 Mula | 국내 순면 방수요 전문 브랜드',
    description: '1983년 섬유 장인 풍전티티가 만든 방수요 전문 브랜드. 신생아 안전 국내 순면.',
    images: ['/assets/mula-1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://mula.co.kr',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://mula.co.kr/#organization',
  name: '뮤라 (Mula)',
  alternateName: ['Mula', '뮤라', '풍전티티', '(주)풍전티.티'],
  url: 'https://mula.co.kr',
  logo: {
    '@type': 'ImageObject',
    url: 'https://mula.co.kr/assets/logo.png',
  },
  foundingDate: '1983',
  description:
    '1983년부터 섬유 명가 풍전티티가 운영하는 국내 방수요 전문 브랜드. 원단 직조부터 봉제까지 100% 국내 자체 생산, 관련 특허 14개 보유. 신생아부터 유아까지 안전한 국내 순면 방수요를 만든다.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+82-70-7701-0670',
    email: 'mula2@mula.co.kr',
    contactType: 'customer service',
    availableLanguage: 'Korean',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '17:00',
    },
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '논공중앙로54길 18',
    addressLocality: '달성군',
    addressRegion: '대구광역시',
    addressCountry: 'KR',
  },
  sameAs: ['https://www.mula.co.kr/'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://mula.co.kr/#website',
  name: '뮤라 Mula',
  url: 'https://mula.co.kr',
  description:
    '국내 순면 방수요 전문 브랜드 뮤라. 신생아부터 유아까지, 소재와 사이즈를 세분화하여 아이의 쾌적한 잠자리를 책임집니다.',
  publisher: { '@id': 'https://mula.co.kr/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://mula.co.kr/qna?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Suspense>
          <GeoDebugProvider>
            <GeoDebugBanner />
            <Header />
            <main>{children}</main>
            <Footer />
          </GeoDebugProvider>
        </Suspense>
      </body>
    </html>
  );
}
