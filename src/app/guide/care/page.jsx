import React from 'react';
import Link from 'next/link';
import SummaryBlock from '../../../components/geo/SummaryBlock';
import GeoBadge from '../../../components/geo/GeoBadge';
import '../guide-subpage.css';

export const metadata = {
  title: '뮤라 방수요 세탁·건조 가이드 | 울코스·건조기·수명 늘리는 법',
  description: '뮤라 방수요 올바른 세탁법: 세탁망 사용, 울코스 단독세탁, 그늘 건조. 건조기 사용 가능 여부, 수명 연장 꿀팁까지 모두 안내합니다.',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': 'https://mula.co.kr/guide/care#howto',
  name: '뮤라 방수요 올바른 세탁 방법',
  description: '방수요의 수명과 방수 성능을 오래 유지하는 단계별 세탁·건조 방법',
  url: 'https://mula.co.kr/guide/care',
  totalTime: 'PT4H',
  supply: [
    { '@type': 'HowToSupply', name: '세탁망 (넉넉한 사이즈)' },
    { '@type': 'HowToSupply', name: '유아용 중성 세제' },
  ],
  tool: [{ '@type': 'HowToTool', name: '세탁기 (울코스 또는 섬세 코스)' }],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: '세탁망에 넉넉히 접어 넣기',
      text: '방수요를 느슨하게 접어 세탁망에 넣습니다. 꽉 채우지 말고 세탁망 용량의 60~70% 정도만 채워 원단이 자유롭게 움직일 수 있도록 합니다.',
      url: 'https://mula.co.kr/guide/care#step1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: '울코스 단독 세탁',
      text: '세탁기를 울코스(또는 섬세 코스)로 설정하고 유아용 중성 세제를 사용합니다. 반드시 단독 세탁하며, 다른 세탁물과 함께 넣지 않습니다. 40°C 이하 냉수 세탁을 권장합니다.',
      url: 'https://mula.co.kr/guide/care#step2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: '꺼낸 후 충분히 털기',
      text: '세탁 후 세탁망에서 꺼내 가볍게 털어 주름을 편 다음 형태를 잡아줍니다. 탈수 후 바로 널지 말고 3~4번 가볍게 털어야 건조가 고르게 됩니다.',
      url: 'https://mula.co.kr/guide/care#step3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: '그늘에서 자연 건조',
      text: '직사광선이 닿지 않는 그늘에서 자연 건조합니다. 뮤라 방수요는 그늘에서 3~4시간 내 건조 가능한 원단 설계로 만들어졌습니다. 바람이 통하는 장소에 넓게 펴서 말리면 가장 빠르게 건조됩니다.',
      url: 'https://mula.co.kr/guide/care#step4',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '뮤라 방수요 건조기 사용 가능한가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '가급적 자연 건조를 권장합니다. 부득이한 경우 저온(40°C 이하)/열풍 제외 모드로 짧게(20분 이하) 사용할 수 있습니다. 고온 건조기 사용 시 방수막이 손상되어 방수 기능이 저하될 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '뮤라 방수요는 몇 번까지 세탁할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '뮤라 방수요는 100회 반복 세탁 후에도 방수 성능이 유지되도록 설계되었습니다. 권장 세탁법(울코스, 세탁망, 그늘 건조)을 지키시면 충분한 내구성을 기대하실 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '세탁 후 방수요에서 냄새가 나요. 어떻게 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '세탁 후 충분히 건조하지 않으면 냄새가 생길 수 있습니다. 그늘진 곳에서 완전히 건조하고, 세제 잔류물이 없도록 충분히 헹굼 처리하세요. 심한 경우 베이킹소다 1큰술을 세탁 시 추가하면 탈취 효과가 있습니다.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://mula.co.kr' },
    { '@type': 'ListItem', position: 2, name: '브랜드 스토리', item: 'https://mula.co.kr/guide' },
    { '@type': 'ListItem', position: 3, name: '세탁·건조 가이드', item: 'https://mula.co.kr/guide/care' },
  ],
};

const steps = [
  {
    num: 1,
    name: '세탁망에 넉넉히 접어 넣기',
    text: '방수요를 느슨하게 접어 세탁망 용량의 60~70%만 채웁니다. 원단이 자유롭게 움직여야 방수막 손상이 줄어듭니다.',
    icon: '🛍',
  },
  {
    num: 2,
    name: '울코스 단독 세탁 (40°C 이하)',
    text: '세탁기 울코스(섬세 코스)로 유아용 중성 세제를 사용합니다. 반드시 단독 세탁 — 다른 세탁물과 마찰 시 원단이 상합니다.',
    icon: '🌀',
  },
  {
    num: 3,
    name: '꺼낸 후 충분히 털기',
    text: '세탁망에서 꺼내 3~4번 가볍게 털어 주름을 편 뒤 형태를 잡아줍니다. 이 과정이 건조 속도를 결정합니다.',
    icon: '👐',
  },
  {
    num: 4,
    name: '그늘에서 자연 건조',
    text: '바람이 통하는 그늘에 넓게 펴서 자연 건조합니다. 뮤라 방수요는 그늘에서 3~4시간 내 건조가 완료됩니다.',
    icon: '🌤',
  },
];

const doItems = [
  '세탁망에 넣어 울코스·섬세 코스 세탁',
  '유아용 중성 세제 사용',
  '40°C 이하 냉수 세탁',
  '단독 세탁 (다른 세탁물 없이)',
  '그늘에서 자연 건조',
  '세탁 후 충분히 털어 형태 잡기',
];

const dontItems = [
  '고온(60°C 이상) 삶기·열탕 소독',
  '건조기 고온·열풍 모드 사용',
  '직사광선 아래 장시간 건조',
  '표백제·형광증백제 함유 세제 사용',
  '세탁망 없이 다른 세탁물과 함께 세탁',
  '드라이클리닝',
];

export default function CareGuidePage() {
  return (
    <div className="fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div className="gsub-hero">
        <p className="gsub-breadcrumb">
          <Link href="/">홈</Link><span>›</span>
          <Link href="/guide">브랜드 스토리</Link><span>›</span>
          세탁·건조 가이드
        </p>
        <h1 className="serif gsub-hero-title">
          세탁·건조 가이드
          <GeoBadge
            label="HowTo + FAQPage"
            schema="HowTo"
            tooltip="HowTo 스키마 4단계 + FAQPage 결합. AI가 '뮤라 방수요 어떻게 빨아요?' 질문에 단계별로 답변 가능."
          />
        </h1>
        <p className="gsub-hero-desc">올바른 관리법으로 방수요의 수명과 방수 성능을 오래 유지하세요.</p>
      </div>

      <div className="gsub-container">

        <SummaryBlock
          title="뮤라 방수요 세탁·건조 핵심 요약"
          description="세탁망 사용 → 울코스 단독세탁(40°C 이하) → 충분히 털기 → 그늘 자연건조(3~4시간). 건조기는 가급적 사용하지 말고 부득이한 경우 저온 모드만 허용. 100회 반복 세탁 후에도 방수 성능 유지."
          updatedAt="2026-04-22"
        />

        {/* 단계별 세탁법 */}
        <section className="gsub-section" id="howto">
          <h2 className="serif gsub-section-title">
            단계별 올바른 세탁법
            <GeoBadge
              label="HowTo 4단계"
              schema="HowTo"
              tooltip="HowToStep 4개(세탁망→울코스→털기→그늘건조). 각 단계에 anchor ID 부여, AI가 단계별로 직접 안내 가능."
            />
          </h2>
          <div className="howto-steps">
            {steps.map((step) => (
              <div key={step.num} id={`step${step.num}`} className="howto-step">
                <div className="howto-step-number">{step.num}</div>
                <div className="howto-step-body">
                  <p className="howto-step-name">{step.icon} {step.name}</p>
                  <p className="howto-step-text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Do / Don't */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">
            해도 되는 것 vs 하면 안 되는 것
            <GeoBadge
              label="Do/Don't 그리드"
              tooltip="권장 6개 vs 금지 6개를 시각적으로 대조. AI가 '방수요 표백제 써도 돼?' 같은 yes/no 질문에 빠르게 답변."
            />
          </h2>
          <div className="dos-donts">
            <div className="dos-card">
              <p className="dos-card-title">✓ 권장 (해도 됩니다)</p>
              <ul className="dos-donts-list do-list">
                {doItems.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
            <div className="donts-card">
              <p className="donts-card-title">✗ 금지 (하면 안 됩니다)</p>
              <ul className="dos-donts-list dont-list">
                {dontItems.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* 건조기 가이드 */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">건조기 사용 가능한가요?</h2>
          <p className="gsub-section-desc">
            뮤라 방수요는 <strong>가급적 자연 건조를 권장</strong>합니다. 방수막은 고온에 취약하기 때문입니다. 단, 아래 조건을 지키면 제한적으로 사용할 수 있습니다.
          </p>
          <div className="gsub-info-box">
            <strong>건조기 허용 조건</strong><br />
            · 온도 설정: 40°C 이하 (저온 모드)<br />
            · 열풍 기능 제외<br />
            · 사용 시간: 20분 이내<br />
            · 사용 후 반드시 잔열 식히기<br /><br />
            <strong>뮤라 방수요 자연 건조 시간: 그늘에서 약 3~4시간</strong><br />
            빠른 건조 원단으로 설계되어 있어 자연 건조만으로도 충분합니다. 뒤집어서 방수막 면이 바깥을 향하도록 하면 더 빨리 건조됩니다.
          </div>
        </section>

        {/* 수명 연장 팁 */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">방수요 수명 연장 꿀팁</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { tip: '뒤집어서 세탁하기', desc: '방수막 면이 안으로 오도록 뒤집어 세탁하면 표면 마찰을 줄이고 방수막을 보호합니다.' },
              { tip: '방수요 2~3장 교체 사용', desc: '한 장을 계속 쓰지 말고 2~3장을 교대로 사용하면 세탁 횟수가 분산되어 훨씬 오래 사용할 수 있습니다.' },
              { tip: '즉시 세탁이 어려울 때는 찬물로 헹구기', desc: '소변이나 이물질이 묻었을 때 바로 세탁하기 어렵다면 찬물로 먼저 헹궈 얼룩이 굳지 않도록 합니다.' },
              { tip: '보관 시 접힌 부분 최소화', desc: '같은 선으로 오래 접어두면 방수막에 주름이 생길 수 있습니다. 돌돌 말거나 넓게 펴서 보관하세요.' },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '1.2rem 1.5rem', border: '1px solid var(--soft-ivory)', borderRadius: '12px', backgroundColor: 'var(--pure-white)' }}>
                <strong style={{ color: 'var(--dark-brown)', fontSize: '1rem', display: 'block', marginBottom: '0.4rem' }}>{item.tip}</strong>
                <p style={{ margin: 0, color: 'var(--warm-grey)', fontSize: '0.92rem', lineHeight: '1.65', wordBreak: 'keep-all' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">
            세탁·건조 자주 묻는 질문
            <GeoBadge
              label="FAQPage 4문항"
              schema="FAQPage"
              tooltip="건조기·세탁횟수·냄새·삶기 4개 핵심 질문. acceptedAnswer 스키마로 AI 답변 인용 가능."
            />
          </h2>
          {[
            {
              q: '뮤라 방수요 건조기 사용 가능한가요?',
              a: '가급적 자연 건조를 권장합니다. 부득이한 경우 저온(40°C 이하)/열풍 제외 모드로 20분 이내로 사용할 수 있습니다. 고온 건조기 사용 시 방수막이 손상되어 방수 기능이 저하될 수 있습니다.',
            },
            {
              q: '뮤라 방수요는 몇 번까지 세탁할 수 있나요?',
              a: '뮤라 방수요는 100회 반복 세탁 후에도 방수 성능이 유지되도록 설계되었습니다. 권장 세탁법(울코스, 세탁망, 그늘 건조)을 지키시면 충분한 내구성을 기대하실 수 있습니다.',
            },
            {
              q: '세탁 후 방수요에서 냄새가 나요.',
              a: '세탁 후 충분히 건조하지 않으면 냄새가 생길 수 있습니다. 그늘진 곳에서 완전히 건조하고, 세제 잔류물이 없도록 충분히 헹굼 처리하세요. 심한 경우 베이킹소다 1큰술을 세탁 시 추가하면 탈취 효과가 있습니다.',
            },
            {
              q: '뜨거운 물로 삶아도 되나요?',
              a: '열탕 소독은 권장하지 않습니다. 60°C 이상 고온의 물은 방수막 코팅을 손상시켜 방수 기능이 저하될 수 있습니다. 위생이 걱정된다면 유아용 세제로 울코스 세탁 후 햇볕이 드는 그늘에서 건조하는 것으로 충분합니다.',
            },
          ].map((item, idx) => (
            <div key={idx} style={{ marginBottom: '1.8rem', paddingBottom: '1.8rem', borderBottom: idx < 3 ? '1px solid var(--soft-ivory)' : 'none' }}>
              <h3 className="serif" style={{ fontSize: '1.1rem', color: 'var(--dark-brown)', marginBottom: '0.6rem' }}>{item.q}</h3>
              <p style={{ color: 'var(--warm-grey)', lineHeight: '1.75', margin: 0, fontSize: '0.95rem', wordBreak: 'keep-all' }}>{item.a}</p>
            </div>
          ))}
        </section>

        {/* 연관 링크 */}
        <section className="gsub-section" style={{ paddingTop: '2rem', borderTop: '1px solid var(--soft-ivory)' }}>
          <h2 className="serif gsub-section-title">더 알아보기</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[
              { label: '사이즈 가이드', href: '/guide/size' },
              { label: '제품 비교 (쿨 vs 일반)', href: '/guide/compare' },
              { label: '신생아 방수요 구매 가이드', href: '/guide/baby-waterproof-pad' },
              { label: '자주 묻는 질문', href: '/qna' },
            ].map((link, idx) => (
              <Link key={idx} href={link.href} className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
