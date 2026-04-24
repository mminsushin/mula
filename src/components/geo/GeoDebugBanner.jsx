'use client';
import Link from 'next/link';
import { useGeoDebug } from './GeoDebugContext';

export default function GeoDebugBanner() {
  const isDebug = useGeoDebug();
  if (!isDebug) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
      backgroundColor: '#1a3a1a', color: '#7fff7f',
      padding: '7px 16px', fontSize: '0.8rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '1rem', borderBottom: '1px solid #3a6a3a',
    }}>
      <span>
        🔍 <strong>GEO Debug Mode 활성</strong>
        &nbsp;— 각 섹션의 <span style={{ backgroundColor: '#2d6a2d', padding: '1px 6px', borderRadius: '4px' }}>GEO</span> 배지를 확인하세요.
        &nbsp;|&nbsp;
        <Link href="/geo" style={{ color: '#a0ffa0', textDecoration: 'underline' }}>GEO 리포트 전체 보기</Link>
      </span>
      <Link href="/?geo=off" style={{ color: '#7fff7f', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
        ✕ 종료
      </Link>
    </div>
  );
}
