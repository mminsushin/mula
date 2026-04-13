import React from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function SourceList({ sources }) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="source-list" style={{ marginTop: '2rem', padding: '1.5rem', border: '1px solid var(--accent-beige)', borderRadius: '12px' }}>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>관련 링크 및 참고 출처</h3>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {sources.map((source, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ExternalLink size={16} color="var(--warm-grey)" />
            <Link href={source.url} style={{ color: 'var(--dark-brown)', textDecoration: 'underline' }}>
              {source.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
