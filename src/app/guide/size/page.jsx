import React from 'react';
import Link from 'next/link';
import SummaryBlock from '../../../components/geo/SummaryBlock';
import GeoBadge from '../../../components/geo/GeoBadge';
import '../guide-subpage.css';

export const metadata = {
  title: '뮤라 방수요 사이즈 가이드 | 미니·S·M·L·Q 침대별 선택법',
  description: '뮤라 방수요 5가지 사이즈(미니/S/M/L/Q) 치수·권장 침대·용도를 한눈에 비교합니다. 신생아부터 패밀리 침대까지 올바른 사이즈 선택법.',
};

const sizeSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': 'https://mula.co.kr/guide/size#sizelist',
  name: '뮤라 방수요 사이즈 가이드',
  description: '뮤라 방수요 5가지 사이즈의 치수, 권장 침대 유형, 적합 연령 및 용도 안내',
  url: 'https://mula.co.kr/guide/size',
  numberOfItems: 5,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: '미니 (Mini) 방수요',
      description: '가로 55cm × 세로 70cm. 유모차, 기저귀대, 바운서에 적합. 신생아 외출용.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'S 사이즈 방수요',
      description: '가로 65cm × 세로 90cm. 아기 바구니 침대, 신생아 전용 요람에 적합.',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'M 사이즈 방수요',
      description: '가로 90cm × 세로 120cm. 범퍼침대, 어린이집 낮잠 이불 위에 적합.',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'L 사이즈 방수요',
      description: '가로 100cm × 세로 140cm. 싱글 침대, 배변 훈련기 어린이 침대에 적합.',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Q(퀸) 사이즈 방수요',
      description: '가로 150cm × 세로 200cm. 부부 패밀리 침대에 적합. 온 가족이 함께 사용.',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '신생아에게는 방수요 어떤 사이즈가 맞나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '신생아에게는 S 사이즈(65×90cm)를 가장 많이 사용합니다. 아기 전용 요람이나 바구니 침대에 딱 맞으며, 미니(55×70cm)는 유모차나 기저귀대용으로 추가로 구비하시면 좋습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '어린이집 낮잠용은 어떤 사이즈인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '어린이집 낮잠용으로는 M 사이즈(90×120cm)가 적합합니다. 낮잠 이불 위에 깔아 사용하기에 충분한 크기이며, 배변 실수를 방지하는 역할을 합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '패밀리 침대(퀸/킹)에는 어떤 사이즈를 써야 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Q(퀸) 사이즈(150×200cm)를 사용하시면 됩니다. 부부가 아이와 함께 자는 패밀리 침대 전체를 덮을 수 있으며, 배변 훈련기나 야뇨증이 있는 경우에도 매트리스를 완전히 보호합니다.',
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
    { '@type': 'ListItem', position: 3, name: '사이즈 가이드', item: 'https://mula.co.kr/guide/size' },
  ],
};

const sizes = [
  {
    name: 'Mini',
    dimensions: '55 × 70 cm',
    bestFor: '유모차, 기저귀대, 바운서',
    age: '신생아 ~ 12개월',
    note: '외출 필수템. 기저귀 교환대에서 피부 보호.',
  },
  {
    name: 'S',
    dimensions: '65 × 90 cm',
    bestFor: '아기 바구니 침대, 신생아 전용 요람',
    age: '신생아 ~ 18개월',
    note: '신생아 시기 가장 인기 있는 사이즈.',
  },
  {
    name: 'M',
    dimensions: '90 × 120 cm',
    bestFor: '범퍼침대, 어린이집 낮잠 매트',
    age: '12개월 ~ 5세',
    note: '배변 훈련 시작 전후 가장 많이 선택.',
  },
  {
    name: 'L',
    dimensions: '100 × 140 cm',
    bestFor: '싱글 침대, 유아 침대',
    age: '4세 ~ 초등 저학년',
    note: '야뇨증·배변 훈련 완료 전 싱글 침대 보호.',
  },
  {
    name: 'Q (퀸)',
    dimensions: '150 × 200 cm',
    bestFor: '퀸·킹 패밀리 침대',
    age: '전 연령 (가족 공동)',
    note: '부부+아이 함께 사용. 매트리스 전체 보호.',
  },
];

const bedGuide = [
  { bed: '유모차 / 기저귀대', recommend: 'Mini', reason: '외출 시 피부 보호, 컴팩트한 휴대성' },
  { bed: '신생아 바구니 침대 / 요람', recommend: 'S', reason: '바구니 내부 사이즈와 가장 잘 맞음' },
  { bed: '아기 범퍼침대 (100×150 전후)', recommend: 'M', reason: '침대 내부를 충분히 커버' },
  { bed: '어린이집 낮잠 이불 위', recommend: 'M', reason: '낮잠 매트 위에 깔기 적합한 크기' },
  { bed: '싱글 침대 (100×200)', recommend: 'L', reason: '성인 싱글 매트리스 중앙부 보호' },
  { bed: '퀸 / 킹 패밀리 침대', recommend: 'Q', reason: '가족 전체 사용, 매트리스 전면 보호' },
];

export default function SizeGuidePage() {
  return (
    <div className="fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sizeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div className="gsub-hero">
        <p className="gsub-breadcrumb">
          <Link href="/">홈</Link><span>›</span>
          <Link href="/guide">브랜드 스토리</Link><span>›</span>
          사이즈 가이드
        </p>
        <h1 className="serif gsub-hero-title">
          방수요 사이즈 가이드
          <GeoBadge
            label="ItemList 5사이즈"
            schema="ItemList"
            tooltip="ItemList 스키마로 5가지 사이즈를 position·name·description으로 구조화. AI가 사이즈 비교 질문에 정확히 답변 가능."
          />
        </h1>
        <p className="gsub-hero-desc">미니부터 퀸까지 5가지 사이즈, 침대 유형과 연령에 맞는 선택법을 한눈에 정리했습니다.</p>
      </div>

      <div className="gsub-container">

        <SummaryBlock
          title="뮤라 방수요 사이즈 한눈에"
          description="뮤라 방수요는 Mini(55×70cm) · S(65×90cm) · M(90×120cm) · L(100×140cm) · Q(150×200cm) 5가지 사이즈로 구성됩니다. 신생아 요람부터 가족 침대까지 모든 침대 유형에 맞는 사이즈가 있습니다."
          updatedAt="2026-04-22"
        />

        {/* 사이즈 표 */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">
            전체 사이즈 비교표
            <GeoBadge
              label="5사이즈 비교표"
              schema="ItemList"
              tooltip="치수·침대·연령·특이사항 5열 표. AI가 '신생아 방수요 사이즈?' 같은 질문에 표 데이터를 직접 인용."
            />
          </h2>
          <table className="gsub-table">
            <thead>
              <tr>
                <th>사이즈</th>
                <th>치수 (가로×세로)</th>
                <th>적합 침대·용도</th>
                <th>권장 연령</th>
                <th>특이사항</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((s, idx) => (
                <tr key={idx}>
                  <td><strong>{s.name}</strong></td>
                  <td>{s.dimensions}</td>
                  <td>{s.bestFor}</td>
                  <td>{s.age}</td>
                  <td style={{ color: 'var(--warm-grey)', fontSize: '0.88rem' }}>{s.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 침대별 권장 */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">침대 유형별 권장 사이즈</h2>
          <p className="gsub-section-desc">사용하는 침대 유형을 기준으로 적합한 사이즈를 빠르게 확인하세요.</p>
          <table className="gsub-table">
            <thead>
              <tr>
                <th>침대 / 사용 상황</th>
                <th>권장 사이즈</th>
                <th>선택 이유</th>
              </tr>
            </thead>
            <tbody>
              {bedGuide.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.bed}</strong></td>
                  <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--dark-brown)' }}>{row.recommend}</td>
                  <td style={{ color: 'var(--warm-grey)', fontSize: '0.9rem' }}>{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 사이즈 선택 팁 */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">사이즈 선택 팁</h2>
          <div className="gsub-info-box">
            <strong>침대 내경 사이즈 먼저 측정하세요.</strong><br />
            방수요는 침대 내부 바닥에 딱 맞아야 효과적입니다. 침대 내경(내부 가로×세로)보다 약 5~10cm 큰 방수요를 선택하면 모서리까지 잘 덮입니다.<br /><br />
            <strong>여러 용도로 쓰신다면 중간 사이즈(M·L)가 유리합니다.</strong><br />
            M 사이즈는 범퍼침대, 낮잠 매트, 소파 위 등 다양하게 활용할 수 있어 가성비가 높습니다.
          </div>
        </section>

        {/* FAQ */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">
            사이즈 관련 자주 묻는 질문
            <GeoBadge
              label="FAQPage 4문항"
              schema="FAQPage"
              tooltip="사이즈 선택 관련 핵심 질문 4개를 FAQPage 스키마로 노출. 신생아·낮잠·패밀리·여유공간 시나리오 커버."
            />
          </h2>
          {[
            {
              q: '신생아에게는 방수요 어떤 사이즈가 맞나요?',
              a: '신생아에게는 S 사이즈(65×90cm)를 가장 많이 사용합니다. 아기 전용 요람이나 바구니 침대에 딱 맞으며, 미니(55×70cm)는 유모차나 기저귀대용으로 추가로 구비하시면 좋습니다.',
            },
            {
              q: '어린이집 낮잠용은 어떤 사이즈인가요?',
              a: '어린이집 낮잠용으로는 M 사이즈(90×120cm)가 적합합니다. 낮잠 이불 위에 깔아 사용하기에 충분한 크기이며, 배변 실수를 방지하는 역할을 합니다.',
            },
            {
              q: '패밀리 침대(퀸/킹)에는 어떤 사이즈를 써야 하나요?',
              a: 'Q(퀸) 사이즈(150×200cm)를 사용하시면 됩니다. 부부가 아이와 함께 자는 패밀리 침대 전체를 덮을 수 있으며, 야뇨증이 있는 경우에도 매트리스를 완전히 보호합니다.',
            },
            {
              q: '사이즈가 침대보다 크면 어떻게 되나요?',
              a: '방수요가 침대보다 약간 크면 테두리가 올라오게 됩니다. 측면으로 약간 넘어가도 방수 기능에는 문제가 없으나, 너무 크면 아이가 걸려 넘어질 수 있으니 5~10cm 여유 정도가 적당합니다.',
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
              { label: '세탁·건조 가이드', href: '/guide/care' },
              { label: '제품 비교 (쿨 vs 일반)', href: '/guide/compare' },
              { label: '신뢰·인증 정보', href: '/guide/trust' },
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
