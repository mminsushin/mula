import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container card">
        <div className="contact-info">
          <h2 className="serif">문의하기</h2>
          <p>제품 대량 구매, 제휴 문의 또는 기타 궁금한 점이 있으시면 언제든 연락주세요.</p>
          <div className="info-items">
            <div className="info-item">
              <span className="label">Add.</span>
              <span>서울특별시 강남구 ... (뮤라 본사)</span>
            </div>
            <div className="info-item">
              <span className="label">Tel.</span>
              <span>1544-XXXX</span>
            </div>
            <div className="info-item">
              <span className="label">Mail.</span>
              <span>help@mula.co.kr</span>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="성함" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="이메일" required />
          </div>
          <div className="form-group">
            <textarea placeholder="문의 내용을 입력해주세요" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn">문의 보내기</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
