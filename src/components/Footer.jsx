import React from 'react';
import Link from 'next/link';

const GEO_SCHEMAS = ['Organization', 'WebSite', 'FAQPage', 'Article', 'Blog', 'BlogPosting', 'AboutPage', 'Brand', 'ContactPage', 'HowTo', 'ItemList', 'BreadcrumbList'];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#FAF9F6', borderTop: '1px solid #EBE9E1', color: 'var(--warm-grey)', fontSize: '0.9rem', lineHeight: '1.6' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 5% 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', borderBottom: '1px solid #EBE9E1', paddingBottom: '3rem', marginBottom: '3rem' }}>
          
          {/* CS Center */}
          <div>
            <h3 className="serif" style={{ fontSize: '1.2rem', color: 'var(--dark-brown)', marginBottom: '1rem', letterSpacing: '1px' }}>CS CENTER</h3>
            <p style={{ fontSize: '1.5rem', color: 'var(--dark-brown)', fontWeight: 'bold', marginBottom: '0.5rem' }}>070-7701-0670</p>
            <p>이메일 : <a href="mailto:mula2@mula.co.kr" style={{ textDecoration: 'underline' }}>mula2@mula.co.kr</a></p>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
              상담시간 안내<br/>
              평일 : AM 10:00 ~ PM 17:00<br/>
              점심 : PM 12:00 ~ PM 13:00<br/>
              (주말 및 공휴일 휴무)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="serif" style={{ fontSize: '1.2rem', color: 'var(--dark-brown)', marginBottom: '1.2rem', letterSpacing: '1px' }}>QUICK LINKS</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="#" style={{ transition: 'color 0.2s' }}>회사소개</a></li>
              <li><a href="#" style={{ transition: 'color 0.2s' }}>이용약관</a></li>
              <li><a href="#" style={{ fontWeight: 'bold', color: 'var(--dark-brown)' }}>개인정보처리방침</a></li>
              <li><a href="#" style={{ transition: 'color 0.2s' }}>이용안내</a></li>
            </ul>
          </div>

          {/* Bank Info */}
          <div>
            <h3 className="serif" style={{ fontSize: '1.2rem', color: 'var(--dark-brown)', marginBottom: '1.2rem', letterSpacing: '1px' }}>BANK INFO</h3>
            <div style={{ padding: '20px', backgroundColor: 'var(--pure-white)', border: '1px solid #EBE9E1', borderRadius: '8px' }}>
              <p style={{ color: 'var(--dark-brown)', fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '0.3rem' }}>기업은행</p>
              <p style={{ fontSize: '1.1rem', letterSpacing: '0.5px' }}>57901727501046</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>예금주 : 풍전티티</p>
            </div>
          </div>
        </div>

        {/* Corporate Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            <span><strong>(주)풍전티.티</strong></span>
            <span>대표자명 : 윤석천</span>
            <span>사업자등록번호 : 514-81-36137 <a href="#" style={{ textDecoration: 'underline' }}>[사업자정보확인]</a></span>
            <span>통신판매업신고번호 : 2009-대구달성-0074</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            <span>주소 : 대구광역시 달성군 논공읍 논공중앙로54길 18 풍전티티</span>
            <span>개인정보보호책임자 : 윤석천</span>
            <span>호스팅제공 : 엔에이치엔커머스(주)</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            <span>대표전화번호 : 070-7701-0670</span>
            <span>팩스번호 : 030306150672</span>
            <span>이메일 : mula2@mula.co.kr</span>
          </div>
          
          <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#AAA' }}>
            Copyright ⓒ 2024 <strong>(주)풍전티.티</strong> all rights reserved.
          </div>
        </div>
      </div>

      {/* GEO Readiness Strip */}
      <div className="geo-readiness-strip">
        <div className="geo-readiness-inner">
          <span className="geo-readiness-label">GEO READINESS</span>
          <div className="geo-readiness-checks">
            <span className="geo-readiness-check">
              <span className="geo-readiness-check-ok">✓</span> robots.txt (AI 크롤러 허용)
            </span>
            <span className="geo-readiness-check">
              <span className="geo-readiness-check-ok">✓</span> sitemap.xml (11 URL)
            </span>
            <span className="geo-readiness-check">
              <span className="geo-readiness-check-ok">✓</span> llms.txt (AI 팩트 파일)
            </span>
          </div>
          <div className="geo-readiness-schemas">
            {GEO_SCHEMAS.map((s) => (
              <span key={s} className="geo-readiness-schema-chip">{s}</span>
            ))}
          </div>
          <Link href="/geo" className="geo-readiness-link">GEO 리포트 →</Link>
        </div>
      </div>
    </footer>
  );
}
