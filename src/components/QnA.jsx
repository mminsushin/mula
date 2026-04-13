import React, { useState } from 'react';
import './QnA.css';

const QnA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    { q: '방수요를 세탁기로 빨아도 되나요?', a: '네, 뮤라 방수요는 고무 코팅이 없는 특수 원단으로 제작되어 일반 세탁기 사용이 가능합니다. 단, 고온 세탁이나 건조기 사용은 제품 변형의 원인이 될 수 있으므로 찬물 세탁과 자연 건조를 권장합니다.' },
    { q: '신생아가 사용해도 안전한가요?', a: '뮤라의 모든 제품은 무형광, 무독성 테스트를 완료하였습니다. 특히 상단층이 100% 순면으로 제작되어 민감한 아기 피부에도 안전하게 사용할 수 있습니다.' },
    { q: '소리가 나지 않는 방수요가 맞나요?', a: '일반적인 비닐 소재의 방수요와 달리, 뮤라는 고품질 PU 필름을 원단 사이에 삽입하는 기술로 부스럭거리는 소음을 최소화하였습니다.' },
    { q: '사이즈 선택 팁을 알려주세요.', a: '기저귀 교환대나 휴대용으로는 미니/스몰 사이즈, 아기 침대용으로는 미디엄 사이즈, 퀸 사이즈 이상의 패밀리 침대에는 라지 사이즈를 추천드립니다.' },
  ];

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section id="qna" className="qna">
      <h2 className="section-title">자주 묻는 질문</h2>
      <p className="section-subtitle">뮤라 제품에 대해 궁금한 점을 해결해 드립니다.</p>
      
      <div className="qna-list container">
        {items.map((item, i) => (
          <div key={i} className={`qna-item ${activeIndex === i ? 'active' : ''}`}>
            <div className="qna-header serif" onClick={() => toggle(i)}>
              <span>{item.q}</span>
              <span className="icon">{activeIndex === i ? '−' : '+'}</span>
            </div>
            <div className="qna-body">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QnA;
