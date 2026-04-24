import React from 'react';
import Link from 'next/link';
import SummaryBlock from '../../../components/geo/SummaryBlock';
import GeoBadge from '../../../components/geo/GeoBadge';
import '../guide-subpage.css';

export const metadata = {
  title: '뮤라 방수요 제품 비교 | 쿨 vs 일반, 방수요 vs 방수패드, 사계절 vs 여름',
  description: '뮤라 쿨 방수요 vs 오리지널 방수요 차이, 방수요 vs 방수패드 비교, 사계절형 vs 여름용 선택 기준을 표로 한눈에 비교합니다.',
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://mula.co.kr/guide/compare#article',
  headline: '뮤라 방수요 제품 비교 — 쿨 vs 일반, 방수요 vs 방수패드',
  description: '뮤라 쿨 방수요와 오리지널 방수요의 차이, 방수요와 방수패드의 차이, 사계절형과 여름용 선택 기준을 상세히 비교합니다.',
  url: 'https://mula.co.kr/guide/compare',
  author: { '@type': 'Organization', name: '뮤라 (Mula)', url: 'https://mula.co.kr' },
  publisher: { '@type': 'Organization', name: '뮤라 (Mula)', url: 'https://mula.co.kr' },
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '쿨 방수요와 일반 방수요 차이는 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '쿨 방수요는 냉감 원사를 사용하여 체온을 낮춰주는 기능이 있어 여름철 태열이 심한 아이에게 적합합니다. 일반(오리지널) 방수요는 순면 소재로 사계절 사용 가능하며 따뜻한 계절감이 있습니다. 냉감 효과가 필요하면 쿨, 사계절 범용성이 필요하면 오리지널을 선택하세요.',
      },
    },
    {
      '@type': 'Question',
      name: '방수요와 방수패드는 뭐가 다른가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '방수요는 이불처럼 넓고 두꺼우며 침구로도 사용할 수 있습니다. 방수패드는 얇고 가벼우며 침대 시트 위에 깔아 쓰는 보조 용품입니다. 뮤라의 방수요는 위에 덮거나 깔아 쓰는 양용으로 설계되어 있으며, 더 두꺼운 흡수층이 있어 방수패드보다 보호 성능이 높습니다.',
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
    { '@type': 'ListItem', position: 3, name: '제품 비교', item: 'https://mula.co.kr/guide/compare' },
  ],
};

export default function ComparePage() {
  return (
    <div className="fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div className="gsub-hero">
        <p className="gsub-breadcrumb">
          <Link href="/">홈</Link><span>›</span>
          <Link href="/guide">브랜드 스토리</Link><span>›</span>
          제품 비교
        </p>
        <h1 className="serif gsub-hero-title">
          제품 비교 가이드
          <GeoBadge
            label="Article + 비교표 3개"
            schema="Article"
            tooltip="Article 스키마 + 3개 비교표(쿨vs일반·요vs패드·와플vs일반). AI가 '쿨 방수요 차이' 같은 비교 질문에 표 데이터 인용."
          />
        </h1>
        <p className="gsub-hero-desc">쿨 vs 일반, 방수요 vs 방수패드, 사계절 vs 여름용 — 내 아이에게 맞는 제품을 바로 선택하세요.</p>
      </div>

      <div className="gsub-container">

        <SummaryBlock
          title="뮤라 방수요 제품 비교 핵심 요약"
          description="쿨 방수요는 냉감 원사로 여름·태열 아이에게 적합, 오리지널은 순면 사계절 범용. 방수요는 이불 겸용 두꺼운 타입, 방수패드는 시트 위에 까는 얇은 타입. 에어 와플은 통기성 극대화 프리미엄 라인."
          updatedAt="2026-04-22"
        />

        {/* 비교 1: 쿨 vs 오리지널 */}
        <section className="gsub-section" id="cool-vs-original">
          <h2 className="serif gsub-section-title">쿨 방수요 vs 오리지널 방수요</h2>
          <p className="gsub-section-desc">가장 많이 묻는 비교입니다. 여름철 또는 태열이 심한 아이라면 쿨, 사계절 범용이 필요하다면 오리지널을 선택하세요.</p>
          <table className="compare-table">
            <thead>
              <tr>
                <th>비교 항목</th>
                <th>쿨 방수요 (에코 쿨)</th>
                <th>오리지널 방수요</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['소재', '냉감 원사 + 순면 혼방', '100% 순면'],
                ['냉감 효과', '있음 (피부 접촉 시 서늘함)', '없음 (체온 유지형)'],
                ['적합 계절', '봄·여름 (특히 여름)', '사계절 (봄·가을·겨울 강점)'],
                ['태열 아이', '강력 추천', '적합 (통기성 우수)'],
                ['포근함', '상대적으로 얇고 청량감', '포근하고 부드러움'],
                ['흡수력', '빠른 흡수', '높은 흡수량'],
                ['방수 기능', '동일 (방수막 구조 공통)', '동일 (방수막 구조 공통)'],
                ['세탁 내구성', '100회 세탁 유지', '100회 세탁 유지'],
                ['추천 대상', '여름 출산 가정, 태열·땀 많은 아이', '사계절 사용, 민감한 피부 아이'],
              ].map(([label, cool, orig], idx) => (
                <tr key={idx}>
                  <td>{label}</td>
                  <td>{cool}</td>
                  <td>{orig}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="gsub-info-box" style={{ marginTop: '1rem' }}>
            <strong>선택 기준 요약:</strong> 6~9월 사용 비중이 높고 아이 땀이 많다면 쿨 방수요. 연중 사용하며 포근한 촉감이 중요하다면 오리지널.
          </div>
        </section>

        {/* 비교 2: 방수요 vs 방수패드 */}
        <section className="gsub-section" id="pad-vs-mat">
          <h2 className="serif gsub-section-title">방수요 vs 방수패드 차이</h2>
          <p className="gsub-section-desc">같아 보이지만 용도와 두께가 다릅니다. 뮤라의 방수요는 이불로도 사용 가능한 두꺼운 타입입니다.</p>
          <table className="compare-table">
            <thead>
              <tr>
                <th>비교 항목</th>
                <th>뮤라 방수요</th>
                <th>일반 방수패드</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['두께', '두꺼운 다층 구조', '얇은 단층 구조'],
                ['구조', '순면 겉감 + 흡수층 + 방수막', '표면층 + 방수막 (단순)'],
                ['용도', '깔거나 덮거나 (이불 겸용)', '침대 시트 위에 까는 용'],
                ['흡수량', '높음 (두꺼운 흡수층)', '낮음~중간'],
                ['휴대성', '상대적으로 무겁고 부피 있음', '가볍고 접기 쉬움'],
                ['세탁 편의', '중간 (세탁망 권장)', '상대적으로 간편'],
                ['방수 성능', '높음 (매트리스 완전 보호)', '중간'],
                ['가격대', '중간~고가', '저가~중간'],
                ['추천 상황', '야뇨, 배변 훈련, 신생아 깔개', '가벼운 보조 보호 용도'],
              ].map(([label, mat, pad], idx) => (
                <tr key={idx}>
                  <td>{label}</td>
                  <td>{mat}</td>
                  <td>{pad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 비교 3: 에어 와플 vs 일반 */}
        <section className="gsub-section" id="wafle-vs-standard">
          <h2 className="serif gsub-section-title">에어 와플 방수요 vs 일반 방수요</h2>
          <p className="gsub-section-desc">에어 와플은 뮤라의 프리미엄 라인입니다. 통기성과 정숙성을 최우선으로 하는 경우에 선택하세요.</p>
          <table className="compare-table">
            <thead>
              <tr>
                <th>비교 항목</th>
                <th>에어 와플 방수요</th>
                <th>일반(오리지널) 방수요</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['원단 구조', '와플 직조 — 공기층 형성', '평직 순면'],
                ['통기성', '최상 (공기 순환 극대화)', '우수'],
                ['소음', '조용함 (방수막 마찰음 최소)', '약간의 방수막 소리 있을 수 있음'],
                ['촉감', '입체적 와플 텍스처, 부드러움', '매끈한 순면 촉감'],
                ['무게', '상대적으로 가벼움', '보통'],
                ['가격', '프리미엄', '일반'],
                ['추천 대상', '예민한 아이, 수면 중 소음 민감 가정', '가성비 우선, 사계절 범용'],
              ].map(([label, waffle, std], idx) => (
                <tr key={idx}>
                  <td>{label}</td>
                  <td>{waffle}</td>
                  <td>{std}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 선택 가이드 요약 */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">
            상황별 빠른 선택 가이드
            <GeoBadge
              label="7개 상황별 추천"
              tooltip="신생아·여름·땀·낮잠·소음·배변·패밀리 7개 시나리오. AI가 '여름 출산인데 어떤 방수요?' 같은 구체 질문에 즉답 가능."
            />
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1rem' }}>
            {[
              { situation: '신생아가 태어났어요', recommend: '오리지널 방수요 S 사이즈', reason: '부드러운 순면, 신생아 피부에 안전' },
              { situation: '여름 출산이라 더울 것 같아요', recommend: '쿨 방수요 S 또는 M', reason: '냉감 원사로 체온 조절, 태열 아이에게 최적' },
              { situation: '아이 땀이 엄청 많아요', recommend: '에코 쿨 방수요', reason: '냉감 + 빠른 흡수로 쾌적한 수면 환경' },
              { situation: '어린이집 낮잠 패드 필요해요', recommend: '오리지널 방수요 M', reason: '낮잠 이불 위에 깔기 딱 맞는 사이즈' },
              { situation: '수면 중 방수막 소리가 신경 쓰여요', recommend: '에어 와플 방수요', reason: '와플 직조로 소음 최소화' },
              { situation: '배변 훈련 시작했어요', recommend: '오리지널 방수요 M~L', reason: '두꺼운 흡수층으로 매트리스 완전 보호' },
              { situation: '온 가족 패밀리 침대 보호가 필요해요', recommend: '오리지널 방수요 Q(퀸)', reason: '150×200cm로 퀸 침대 전체 커버' },
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', padding: '1.1rem 1.3rem', border: '1px solid var(--soft-ivory)', borderRadius: '12px', backgroundColor: 'var(--pure-white)', alignItems: 'start' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--warm-grey)', display: 'block', marginBottom: '0.2rem' }}>상황</span>
                  <strong style={{ fontSize: '0.93rem', color: 'var(--dark-brown)', wordBreak: 'keep-all' }}>{item.situation}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--warm-grey)', display: 'block', marginBottom: '0.2rem' }}>추천</span>
                  <strong style={{ fontSize: '0.93rem', color: 'var(--dark-brown)' }}>{item.recommend}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--warm-grey)', display: 'block', marginBottom: '0.2rem' }}>이유</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--warm-grey)', wordBreak: 'keep-all' }}>{item.reason}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">
            비교 관련 자주 묻는 질문
            <GeoBadge
              label="FAQPage 비교 답변"
              schema="FAQPage"
              tooltip="제품 비교 핵심 질문을 FAQPage 스키마로 노출. AI가 비교 질문에 직접 인용 가능한 답변 텍스트 제공."
            />
          </h2>
          {[
            {
              q: '쿨 방수요와 일반 방수요 차이는 무엇인가요?',
              a: '쿨 방수요는 냉감 원사를 사용하여 피부 접촉 시 서늘함을 느끼게 해 여름철 태열이 심한 아이에게 적합합니다. 일반(오리지널) 방수요는 100% 순면으로 사계절 사용 가능하며 포근한 촉감이 특징입니다.',
            },
            {
              q: '방수요와 방수패드는 뭐가 다른가요?',
              a: '방수요는 이불처럼 넓고 두꺼우며 침구로도 사용할 수 있습니다. 방수패드는 얇고 가벼우며 침대 시트 위에 깔아 쓰는 보조 용품입니다. 뮤라 방수요는 더 두꺼운 흡수층이 있어 보호 성능이 높습니다.',
            },
            {
              q: '에어 와플 방수요는 어떤 아이에게 맞나요?',
              a: '수면 중 소음에 민감한 아이, 통기성을 극대화하고 싶은 경우, 또는 프리미엄 소재를 선호하는 가정에 적합합니다. 와플 직조 구조로 공기 순환이 뛰어나고 방수막 마찰음이 최소화되어 있습니다.',
            },
          ].map((item, idx) => (
            <div key={idx} style={{ marginBottom: '1.8rem', paddingBottom: '1.8rem', borderBottom: idx < 2 ? '1px solid var(--soft-ivory)' : 'none' }}>
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
              { label: '세탁·건조 가이드', href: '/guide/care' },
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
