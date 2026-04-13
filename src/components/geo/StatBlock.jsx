import React from 'react';

export default function StatBlock({ stats }) {
  if (!stats || stats.length === 0) return null;
  
  return (
    <div className="stat-block" style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
      {stats.map((stat, idx) => (
        <div key={idx} style={{ flex: '1 1 200px', padding: '1.5rem', background: 'var(--pure-white)', borderRadius: '12px', boxShadow: 'var(--soft-shadow)', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-beige)', marginBottom: '0.5rem' }}>{stat.value}</div>
          <div style={{ fontSize: '1rem', color: 'var(--warm-grey)' }}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
