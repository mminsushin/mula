import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content fade-in">
        <h2 className="serif">아이의 숙면을 위한<br/>가장 부드러운 선택</h2>
        <p>국내 유아 방수요 전문 브랜드 뮤라(mula).<br/>신생아부터 유아까지, 소재와 사이즈를 세분화하여 아이의 쾌적한 잠자리를 책임집니다.</p>
        <div className="hero-btns">
          <button className="btn">제품 보기</button>
          <button className="btn btn-outline">기술력 확인</button>
        </div>
      </div>
      <div className="hero-image-container fade-in">
        <img src="/assets/mula-1.jpg" alt="mula Premium Waterproof Pad" className="hero-img" onError={(e) => e.target.style.display='none'} />
        <div className="hero-image-placeholder">
          <span>Main Image (mula-1.jpg)</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
