import React from 'react';
import SummaryBlock from '../../components/geo/SummaryBlock';
import '../../components/Contact.css';

export const metadata = {
  title: 'Mula 연락처 및 B2B 제휴',
  description: '뮤라 제품 대량 구매, B2B 제휴 및 입점 관련 문의.',
};

export default function ContactPage() {
  return (
    <div className="container fade-in" style={{ padding: '100px 5%' }}>
      <SummaryBlock
        title="B2B 및 제휴 문의"
        description="도매, 어린이집 단체 주문, 백화점 팝업 스토어 입점 등 비즈니스 파트너십을 환영합니다."
        updatedAt="2026-04-12"
      />

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 className="serif">고객 센터</h3>
        <p style={{ marginTop: '1rem', color: 'var(--warm-grey)' }}>
          전화: 070-7701-0670 (평일 10:00 - 17:00)<br />
          이메일: mula2@mula.co.kr
        </p>

        <form style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="이름/회사명" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
          <input type="email" placeholder="이메일 주소" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
          <textarea placeholder="문의 내용" rows="5" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}></textarea>
          <button className="btn" type="button" style={{ alignSelf: 'flex-start' }}>메시지 보내기</button>
        </form>
      </div>
    </div>
  );
}
