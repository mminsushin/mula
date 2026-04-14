import React from 'react';

import './StatBlock.css';

export default function StatBlock({ stats }) {
  if (!stats || stats.length === 0) return null;
  
  return (
    <div className="stat-block-container">
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-block-card">
          <div className="stat-block-value">{stat.value}</div>
          <div className="stat-block-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
