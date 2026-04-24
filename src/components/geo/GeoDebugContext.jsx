'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export const GeoDebugCtx = createContext(false);

export function GeoDebugProvider({ children }) {
  const searchParams = useSearchParams();
  const [isDebug, setIsDebug] = useState(false);

  useEffect(() => {
    const param = searchParams.get('geo');
    if (param === 'debug') {
      try { localStorage.setItem('geo-debug', '1'); } catch (_) {}
      setIsDebug(true);
    } else if (param === 'off') {
      try { localStorage.removeItem('geo-debug'); } catch (_) {}
      setIsDebug(false);
    } else {
      try { setIsDebug(localStorage.getItem('geo-debug') === '1'); } catch (_) {}
    }
  }, [searchParams]);

  return <GeoDebugCtx.Provider value={isDebug}>{children}</GeoDebugCtx.Provider>;
}

export function useGeoDebug() {
  return useContext(GeoDebugCtx);
}
