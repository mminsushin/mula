import React from 'react';
import SummaryBlock from '../../components/geo/SummaryBlock';
import './guide-page.css';

export const metadata = {
  title: 'Mula 브랜드 스토리 | 1983년부터 이어온 진심',
  description: '단순 유통을 거부하고 자체 기술력으로 빚어낸 100% 국내 생산 프리미엄 유아 침구, 뮤라(Mula)의 이야기.',
};

export default function GuidePage() {
  return (
    <div className="fade-in">
      {/* 1. Brand Hero Section */}
      <section
        className="guide-page-hero"
        style={{ backgroundImage: 'url(/assets/df8ac006e1fd7618.jpg)' }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1 }}></div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 5%' }}>
          <h1 className="serif fade-in guide-page-hero-title">
            아이를 기준으로 만든 침구
          </h1>
          <p className="fade-in guide-page-hero-desc">
            안전함과 편안함을 담은 <strong className="mula-highlight">뮤라(Mula)</strong>
          </p>
        </div>
      </section>

      {/* 실질적 첫 화면 요약 블록 (GEO 최적화) */}
      <div className="container" style={{ marginTop: '4rem', padding: '0 5%' }}>
        <SummaryBlock
          title="1983년부터 이어온 40년 섬유 장인의 고집"
          description="뮤라는 대한민국 대구에 뿌리를 둔 모기업 '풍전티티'의 기술력을 집약한 자체 브랜드입니다. OEM과 단순 유통을 거부하고, 무려 14개의 관련 특허를 기반으로 원단 제직부터 완제품까지 100% 자체 생산하는 'All-in-One' 시스템을 고집합니다."
        />
      </div>

      {/* 2. 문제 인식 (개발 스토리) */}
      <section className="guide-split-section">
        <div className="container guide-split-inner">
          <div className="guide-split-img-wrap">
            <img src="/assets/c0a3fbc40603df3d.jpg" alt="뮤라 연구 개발 과정" style={{ width: '100%', borderRadius: '16px', boxShadow: 'var(--soft-shadow)' }} />
          </div>
          <div className="guide-split-text">
            <h4 className="guide-split-subtitle">THE BEGINNING</h4>
            <h2 className="serif guide-split-title">
              "편하게 푹푹 삶고 빨 수 있는<br/>침구는 왜 없을까?"
            </h2>
            <div className="guide-split-body">
              <p style={{ marginBottom: '1rem' }}>
                기존의 유아용 방수요들은 세탁기에 돌리거나 열탕 소독을 하면 형태가 망가지거나 방수막이 갈라지기 일쑤였습니다. 건조 시간도 너무 길어 잦은 배변 실수에 대응하기엔 턱없이 부족했습니다.
              </p>
              <p>
                육아를 직접 겪으며 답답함을 느낀 <strong>부모 개발자들의 절실한 고민</strong>에서 뮤라가 탄생했습니다. 아이 피부에는 가장 건강하면서도, 부모에게는 관리의 스트레스를 덜어주는 '완벽한 세탁 내구성'을 목표로 5년의 연구 끝에 마침내 세상에 없던 원단을 완성했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 모기업/특허 스토리 */}
      <section className="guide-patent-section">
        <div className="container guide-patent-inner">
          <div className="guide-patent-text-box">
            <h3 className="serif guide-patent-title">
              대구를 지켜온 섬유 자부심,<br/>풍전티티
            </h3>
            <div className="guide-patent-body">
              <p style={{ marginBottom: '1.5rem' }}>
                <strong className="mula-highlight">뮤라</strong>는 1983년부터 명맥을 이어온 섬유 명가 <strong style={{ color: 'var(--dark-brown)' }}>'풍전티티'</strong>의 독립 브랜드입니다.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                트렌드만 좇아 형태만 베끼는 유통 방식을 단호히 거부합니다. 변화하는 섬유 시장 속에서 오직 기술력 하나로 승부하며, 현재 보유한 <strong>관련 특허만 14개</strong>에 달합니다.
              </p>
              <p>
                원사 직조부터 완제품 포장까지 소비자에게 닿는 모든 과정을 직접 통제하는 <strong>'All-in-One 시스템'</strong>. 이것이 바로 뮤라가 흔들림 없는 품질을 약속할 수 있는 유일한 비결입니다.
              </p>
            </div>
          </div>
          <div className="guide-patent-img-wrap">
            <img src="/assets/0005c238d2989794.jpg" alt="풍전티티 섬유 공정" style={{ width: '100%', minHeight: '400px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 4. 브랜드의 약속 */}
      <section className="guide-philosophy-section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="serif guide-philosophy-title">Brand Philosophy</h2>
          <p className="guide-philosophy-quote">
            "아기가 덮고 자는 이불, 피부에 가장 먼저 닿는 패드.<br/>그 어떤 것보다 세심하고 정직해야 합니다."
          </p>
          <div style={{ width: '50px', height: '2px', backgroundColor: 'var(--pale-ivory)', margin: '2rem auto' }}></div>
          <p className="guide-philosophy-body">
            단순히 예쁜 디자인을 넘어 실생활에 진짜 도움이 되는 기능성 생활 섬유를 향한 뮤라의 여정은 멈추지 않습니다. 우리 가족이 매일 밤 안심하고 누울 수 있는, 세탁이 즐거워지는 침실 혁명을 이어가겠습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
