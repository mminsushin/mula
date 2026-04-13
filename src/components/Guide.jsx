import React from 'react';
import './Guide.css';

const Guide = () => {
  const features = [
    { title: '특허받은 멀티레이어', desc: '단일 층이 아닌 여러 층의 직물을 겹쳐 흡수성과 방수력을 동시에 잡았습니다.' },
    { title: '100% 순면 소재', desc: '아이의 피부에 직접 닿는 면은 부드러운 순면으로 제작되어 안전합니다.' },
    { title: '소음 없는 숙면', desc: '바스락거리는 소음이 적어 예민한 아이도 푹 잘 수 있습니다.' },
    { title: '간편한 세탁', desc: '고무 코팅이 없어 세탁기 사용이 가능하며 관리가 편리합니다.' },
  ];

  return (
    <section id="guide" className="guide">
      <h2 className="section-title">뮤라만의 기술력</h2>
      <p className="section-subtitle">아이의 숙면을 연구하는 뮤라의 특별함을 확인해보세요.</p>
      
      <div className="guide-grid">
        <div className="guide-visual card">
          <div className="layer-diagram">
            <div className="layer">순면 상단층</div>
            <div className="layer">흡수 극세사층</div>
            <div className="layer">방수 필름층</div>
            <div className="layer">미끄럼 방지층</div>
          </div>
          <p className="caption">특허받은 4중 구조 시스템</p>
        </div>
        
        <div className="guide-list">
          {features.map((f, i) => (
            <div key={i} className="feature-item">
              <h3 className="serif">{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guide;
