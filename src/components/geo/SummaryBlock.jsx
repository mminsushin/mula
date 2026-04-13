import React from 'react';

export default function SummaryBlock({ title, description, updatedAt }) {
  return (
    <div className="summary-block" style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--soft-ivory)', borderRadius: '12px' }}>
      <h1 className="serif">{title}</h1>
      <p style={{ marginTop: '1rem', fontSize: '1.1rem', color: 'var(--dark-brown)' }}>
        {description}
      </p>
      {updatedAt && (
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--warm-grey)' }}>
          마지막 업데이트: {updatedAt}
        </p>
      )}
    </div>
  );
}
