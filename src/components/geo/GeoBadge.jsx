'use client';
import { useGeoDebug } from './GeoDebugContext';

export default function GeoBadge({ label, tooltip, schema }) {
  const isDebug = useGeoDebug();
  if (!isDebug) return null;

  return (
    <span className="geo-badge" aria-label={`GEO: ${label}`}>
      <span className="geo-badge-label">GEO</span>
      {schema && <span className="geo-badge-schema">{schema}</span>}
      <span className="geo-badge-tooltip">{tooltip || label}</span>
    </span>
  );
}
