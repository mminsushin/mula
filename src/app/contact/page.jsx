import GeoBadge from '../../components/geo/GeoBadge';
import './contact-page.css';

export const metadata = {
  title: 'Mula 연락처 및 B2B 제휴',
  description: '뮤라 고객센터, 어린이집 단체구매, 도매/출산선물 대량주문, 백화점 입점, 콘텐츠 제휴 등 목적별 문의 채널을 안내합니다. 전화 070-7701-0670.',
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://mula.co.kr/contact#webpage',
  name: '뮤라 연락처 및 B2B 제휴',
  url: 'https://mula.co.kr/contact',
  description: '뮤라 고객센터 및 B2B 제휴 문의. 어린이집 단체구매, 출산선물 도매, 백화점 입점, 콘텐츠 제휴를 환영합니다.',
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://mula.co.kr/#organization',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+82-70-7701-0670',
        contactType: 'customer service',
        availableLanguage: 'Korean',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '10:00',
          closes: '17:00',
        },
      },
      {
        '@type': 'ContactPoint',
        email: 'mula2@mula.co.kr',
        contactType: 'sales',
        availableLanguage: 'Korean',
      },
    ],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: 'https://mula.co.kr' },
      { '@type': 'ListItem', position: 2, name: '문의하기', item: 'https://mula.co.kr/contact' },
    ],
  },
};

const situations = [
  {
    id: 'customer',
    icon: '💬',
    title: '일반 고객 문의 · CS',
    desc: '제품 사용법, 세탁 방법, 사이즈 추천, 교환·반품 등.',
    items: [
      { label: '전화', value: '070-7701-0670', href: 'tel:07077010670' },
      { label: '이메일', value: 'mula2@mula.co.kr', href: 'mailto:mula2@mula.co.kr' },
      { label: '운영시간', value: '평일 10:00 – 17:00' },
    ],
  },
  {
    id: 'bulk',
    icon: '🏫',
    title: '어린이집·기관 단체 구매',
    desc: '어린이집, 유치원, 산후조리원 등 기관 대량 구매. 수량별 별도 견적 안내.',
    items: [
      { label: '이메일', value: 'mula2@mula.co.kr', href: 'mailto:mula2@mula.co.kr' },
      { label: '필요 정보', value: '기관명, 희망 수량·사이즈, 납기 일정' },
    ],
  },
  {
    id: 'wholesale',
    icon: '🎁',
    title: '출산선물 도매 · 대량 주문',
    desc: '출산용품 편집샵, 선물세트, 기업 복지몰 납품 등 도매 문의.',
    items: [
      { label: '이메일', value: 'mula2@mula.co.kr', href: 'mailto:mula2@mula.co.kr' },
      { label: '필요 정보', value: '회사명, 품목·수량, 단가 조건, 사업자등록증' },
    ],
  },
  {
    id: 'retail',
    icon: '🏬',
    title: '백화점 · 편집샵 입점 제안',
    desc: '백화점 팝업, 유아용품 편집샵, 오프라인 리테일 파트너십.',
    items: [
      { label: '이메일', value: 'mula2@mula.co.kr', href: 'mailto:mula2@mula.co.kr' },
      { label: '필요 정보', value: '매장 위치, 입점 형태(직매입/위탁), 예상 시기' },
    ],
  },
  {
    id: 'content',
    icon: '📱',
    title: '콘텐츠 · 인플루언서 제휴',
    desc: '육아 크리에이터, 맘카페, 유튜버·인스타그래머 콘텐츠 협업.',
    items: [
      { label: '이메일', value: 'mula2@mula.co.kr', href: 'mailto:mula2@mula.co.kr' },
      { label: '필요 정보', value: '채널명·URL, 팔로워 수, 원하는 협업 형태' },
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero */}
      <section
        className="contact-hero"
        style={{ backgroundImage: 'url(/assets/B1_00943-1.jpg)' }}
      >
        <div className="contact-hero-overlay" />
        <div className="contact-hero-inner">
          <h1 className="serif contact-hero-title">
            문의하기
            <GeoBadge
              label="ContactPage 스키마"
              schema="ContactPage"
              tooltip="ContactPage + ContactPoint×2 (CS·Sales) 적용. AI가 '뮤라 연락처 알려줘' 질문에 정확히 답변 가능."
            />
          </h1>
          <p className="contact-hero-sub">뮤라 팀이 빠르게 도와드립니다</p>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="contact-quick">
        <div className="contact-quick-inner" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-1.5rem', left: 0 }}>
            <GeoBadge
              label="ContactPoint ×2"
              schema="ContactPoint"
              tooltip="전화(CS)·이메일(Sales) 두 종류의 ContactPoint 노출. AI가 문의 유형별 채널을 구분해 안내 가능."
            />
          </div>
          <div className="contact-quick-card">
            <span className="contact-quick-icon">📞</span>
            <span className="contact-quick-label">PHONE</span>
            <a href="tel:07077010670" className="contact-quick-value">070-7701-0670</a>
            <span className="contact-quick-sub">평일 10:00 – 17:00</span>
          </div>
          <div className="contact-quick-card">
            <span className="contact-quick-icon">📧</span>
            <span className="contact-quick-label">EMAIL</span>
            <a href="mailto:mula2@mula.co.kr" className="contact-quick-value">mula2@mula.co.kr</a>
            <span className="contact-quick-sub">24시간 접수</span>
          </div>
          <div className="contact-quick-card">
            <span className="contact-quick-icon">🛒</span>
            <span className="contact-quick-label">SHOP</span>
            <a
              href="https://www.mula.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-quick-value"
            >
              mula.co.kr
            </a>
            <span className="contact-quick-sub">공식 쇼핑몰 1:1 채팅</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-inner">
          <h2 className="serif contact-form-title">메시지 남기기</h2>
          <p className="contact-form-desc">
            문의 내용을 남겨주시면 영업일 기준 1일 이내 답변드립니다.
          </p>
          <form className="contact-form">
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label className="contact-form-label">이름 · 회사명</label>
                <input
                  type="text"
                  placeholder="홍길동 / (주)예시"
                  className="contact-form-input"
                />
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label">이메일 주소</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="contact-form-input"
                />
              </div>
            </div>
            <div className="contact-form-group">
              <label className="contact-form-label">문의 유형</label>
              <select className="contact-form-select">
                <option value="">선택해 주세요</option>
                <option value="customer">일반 고객 문의 · CS</option>
                <option value="bulk">어린이집 · 기관 단체 구매</option>
                <option value="wholesale">출산선물 도매 · 대량 주문</option>
                <option value="retail">백화점 · 편집샵 입점</option>
                <option value="content">콘텐츠 · 인플루언서 제휴</option>
              </select>
            </div>
            <div className="contact-form-group">
              <label className="contact-form-label">문의 내용</label>
              <textarea
                className="contact-form-textarea"
                rows={6}
                placeholder="문의 내용을 상세히 적어주세요."
              />
            </div>
            <button type="button" className="contact-form-submit">
              메시지 보내기
            </button>
          </form>
        </div>
      </section>

      {/* B2B Situations */}
      <section className="contact-b2b-section">
        <div className="contact-b2b-inner">
          <h2 className="serif contact-b2b-title">
            비즈니스 문의 안내
            <GeoBadge
              label="5개 상황별 문의 카드"
              schema="ContactPage"
              tooltip="CS·단체구매·도매·입점·콘텐츠 5개 상황을 anchor ID로 분리. AI가 '어린이집 단체구매' 같은 구체적 질문에 직접 답변."
            />
          </h2>
          <p className="contact-b2b-desc">
            각 유형별로 아래 정보를 함께 보내주시면 빠른 처리가 가능합니다.
          </p>
          <div className="contact-b2b-grid">
            {situations.map((sit) => (
              <div key={sit.id} id={sit.id} className="contact-b2b-card">
                <span className="contact-b2b-icon">{sit.icon}</span>
                <h3 className="contact-b2b-card-title">{sit.title}</h3>
                <p className="contact-b2b-card-desc">{sit.desc}</p>
                <ul className="contact-b2b-card-list">
                  {sit.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="contact-b2b-item-label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="contact-b2b-item-link">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-b2b-item-value">{item.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
