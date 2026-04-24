import React from 'react';
import Link from 'next/link';
import SummaryBlock from '../../../components/geo/SummaryBlock';
import GeoBadge from '../../../components/geo/GeoBadge';
import '../guide-subpage.css';

export const metadata = {
  title: '신생아 방수요 추천·구매 가이드 | 뮤라 종합 안내',
  description: '신생아 방수요 선택 기준 완벽 정리. 소재, 사이즈, 세탁 내구성, 방수 구조, 여름용 vs 사계절, 뮤라 추천 제품까지 신생아 부모가 꼭 알아야 할 것들.',
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://mula.co.kr/guide/baby-waterproof-pad#article',
  headline: '신생아 방수요 추천·구매 가이드 2026 — 소재·사이즈·세탁 총정리',
  description: '신생아 방수요를 처음 구매하는 부모를 위한 종합 가이드. 소재, 사이즈, 방수 구조, 세탁법, 제품 비교까지 전부 다룹니다.',
  url: 'https://mula.co.kr/guide/baby-waterproof-pad',
  author: { '@type': 'Organization', name: '뮤라 (Mula)', url: 'https://mula.co.kr' },
  publisher: { '@type': 'Organization', name: '뮤라 (Mula)', url: 'https://mula.co.kr' },
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
  about: { '@type': 'Thing', name: '신생아 방수요', alternateName: ['아기 방수패드', '유아 방수요', '베이비 방수요'] },
  keywords: '신생아 방수요, 아기 방수패드, 방수요 추천, 신생아 침구, 유아 방수요, 방수요 사이즈, 방수요 세탁',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '신생아 방수요 언제부터 사용하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '출생 직후부터 사용 가능합니다. 신생아는 소변을 자주 보기 때문에 방수요가 매트리스를 보호하고 빠른 교체를 가능하게 합니다. 병원 퇴원 전에 미리 준비해 두는 것이 좋습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '신생아 방수요 어떤 소재가 좋나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '신생아 피부에 직접 닿는 면은 반드시 100% 순면이어야 합니다. 화학 합성 소재는 피부 자극과 발진의 원인이 될 수 있습니다. 방수막은 아랫면에만 있어야 하며, 아기 피부에 닿지 않아야 합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '신생아 방수요 사이즈는 어떻게 고르나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '신생아 바구니 침대·요람에는 S 사이즈(65×90cm), 유모차·기저귀대에는 Mini(55×70cm), 범퍼침대에는 M(90×120cm)을 사용합니다. 침대 내경보다 5~10cm 큰 사이즈를 선택하면 됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '방수요 세탁은 어떻게 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '세탁망에 넉넉히 접어 넣고, 울코스(섬세코스)로 유아용 중성세제를 사용해 단독 세탁합니다. 40°C 이하, 그늘에서 자연 건조(3~4시간)합니다. 건조기는 저온 모드만 허용, 고온은 방수막이 손상됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '방수요와 방수패드 차이가 뭔가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '방수요는 이불처럼 두껍고 위에 덮거나 깔아 쓸 수 있으며, 방수패드는 침대 시트 위에 까는 얇은 보조 제품입니다. 신생아에게는 흡수층이 두꺼운 방수요가 보호 효과가 더 높습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '여름에 신생아 방수요 어떤 걸 써야 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '여름 출산이라면 냉감 원사를 사용한 쿨 방수요를 추천합니다. 태열이 심하거나 땀이 많은 아이에게 체온 조절 효과가 있습니다. 사계절 겸용이 필요하다면 통기성 우수한 오리지널 순면 방수요도 좋습니다.',
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
    { '@type': 'ListItem', position: 3, name: '신생아 방수요 구매 가이드', item: 'https://mula.co.kr/guide/baby-waterproof-pad' },
  ],
};

const checklistItems = [
  { check: '소재', good: '피부 접촉면 100% 순면', bad: '화학 합성 소재, 방수막이 위에 노출되는 구조' },
  { check: '방수 구조', good: '흡수층 + 방수막 분리 구조 (통기성 확보)', bad: '방수막이 표면에 노출되는 단층 구조' },
  { check: '세탁 내구성', good: '50회 이상 세탁 후에도 방수 유지', bad: '10~20회 세탁 후 방수막 박리' },
  { check: '건조 시간', good: '그늘에서 4시간 이내', bad: '반나절~1일 이상 (잦은 사고 대응 불가)' },
  { check: '사이즈 다양성', good: 'Mini·S·M·L·Q 선택 가능', bad: '1~2가지 사이즈만 있어 침대별 선택 불가' },
  { check: '생산지', good: '국내 생산 (소재 추적 가능)', bad: '해외 OEM (소재 검증 어려움)' },
];

const subpageLinks = [
  { title: '사이즈 가이드', desc: '미니·S·M·L·Q 치수와 침대별 선택법', href: '/guide/size', icon: '📐' },
  { title: '세탁·건조 가이드', desc: '울코스 세탁, 건조기 사용 가능 여부', href: '/guide/care', icon: '🧺' },
  { title: '제품 비교', desc: '쿨 vs 일반, 방수요 vs 방수패드', href: '/guide/compare', icon: '⚖️' },
  { title: '신뢰·인증 정보', desc: '1983년 연혁, 특허 14개, 공장 정보', href: '/guide/trust', icon: '🏭' },
  { title: '자주 묻는 질문', desc: '세탁·사이즈·소재 60가지 Q&A', href: '/qna', icon: '💬' },
  { title: '브랜드 스토리', desc: '풍전티티와 뮤라의 40년 이야기', href: '/guide', icon: '📖' },
];

export default function BabyWaterproofPadPage() {
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
          신생아 방수요 구매 가이드
        </p>
        <h1 className="serif gsub-hero-title">
          신생아 방수요 구매 가이드
          <GeoBadge
            label="Article + FAQPage"
            schema="Article"
            tooltip="롱테일 키워드('신생아 방수요 구매 가이드') 허브 페이지. Article + FAQPage 결합으로 AI 답변에 자주 인용 가능."
          />
        </h1>
        <p className="gsub-hero-desc">처음 방수요를 고르는 부모님을 위해 소재·사이즈·세탁법·제품 비교까지 한 곳에 정리했습니다.</p>
      </div>

      <div className="gsub-container">

        <SummaryBlock
          title="신생아 방수요 핵심 요약"
          description="신생아 방수요는 ① 피부 접촉면 100% 순면, ② 흡수층+방수막 분리 구조, ③ 50회 이상 세탁 내구성, ④ 그늘 4시간 내 건조가 핵심 기준입니다. 뮤라는 이 네 가지를 모두 충족하며 국내 생산·특허 14개로 신뢰성을 보장합니다."
          updatedAt="2026-04-22"
        />

        {/* 방수요가 필요한 이유 */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">신생아에게 방수요가 꼭 필요한 이유</h2>
          <p className="gsub-section-desc">
            신생아는 하루 평균 10~15회 소변을 봅니다. 기저귀 누출, 침 흘림, 수유 실수가 일상인 신생아 시기에 방수요는 단순한 선택이 아닌 필수품입니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            {[
              { icon: '🛡', title: '매트리스 보호', desc: '고가의 유아 매트리스를 소변·구토·이물질로부터 완전 보호합니다.' },
              { icon: '⚡', title: '즉각 교체 가능', desc: '방수요만 교체하면 되어 새벽 사고 처리가 훨씬 빠릅니다.' },
              { icon: '🧼', title: '위생 관리 편의', desc: '세탁 가능한 방수요는 일회용 패드보다 위생적이고 경제적입니다.' },
              { icon: '😊', title: '아이 쾌적함 유지', desc: '젖은 상태가 지속되지 않아 아이 피부 트러블을 예방합니다.' },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '1.25rem', border: '1px solid var(--soft-ivory)', borderRadius: '14px', backgroundColor: 'var(--pure-white)' }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <strong style={{ color: 'var(--dark-brown)', fontSize: '0.97rem', display: 'block', marginBottom: '0.3rem' }}>{item.title}</strong>
                <p style={{ margin: 0, color: 'var(--warm-grey)', fontSize: '0.88rem', lineHeight: '1.6', wordBreak: 'keep-all' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 선택 기준 체크리스트 */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">
            좋은 방수요 선택 기준
            <GeoBadge
              label="선택 기준표"
              tooltip="6가지 확인 항목을 좋음/피해야 할 두 컬럼으로 비교. AI가 '신생아 방수요 어떻게 골라?' 질문에 표로 답변."
            />
          </h2>
          <p className="gsub-section-desc">방수요를 고를 때 반드시 확인해야 할 6가지 항목입니다.</p>
          <table className="gsub-table">
            <thead>
              <tr>
                <th>확인 항목</th>
                <th>✓ 좋은 방수요</th>
                <th>✗ 피해야 할 방수요</th>
              </tr>
            </thead>
            <tbody>
              {checklistItems.map((item, idx) => (
                <tr key={idx}>
                  <td><strong>{item.check}</strong></td>
                  <td style={{ color: '#2a7a4b' }}>{item.good}</td>
                  <td style={{ color: '#b53a3a', fontSize: '0.88rem' }}>{item.bad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 사이즈 빠른 가이드 */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">신생아 방수요 사이즈 빠른 선택</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
            {[
              { situation: '신생아 바구니 침대 / 요람', size: 'S (65×90cm)', icon: '🧸' },
              { situation: '유모차 · 기저귀대', size: 'Mini (55×70cm)', icon: '🚼' },
              { situation: '아기 범퍼침대 (100×150 전후)', size: 'M (90×120cm)', icon: '🛏' },
              { situation: '어린이집 낮잠 이불 위', size: 'M (90×120cm)', icon: '🏫' },
              { situation: '싱글 침대 / 배변 훈련기', size: 'L (100×140cm)', icon: '🌙' },
              { situation: '가족 패밀리 침대 (퀸·킹)', size: 'Q (150×200cm)', icon: '👨‍👩‍👧' },
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.3rem', border: '1px solid var(--soft-ivory)', borderRadius: '12px', backgroundColor: 'var(--pure-white)' }}>
                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.icon}</span>
                <div style={{ flex: 1, fontSize: '0.93rem', color: 'var(--dark-brown)', wordBreak: 'keep-all' }}>{item.situation}</div>
                <strong style={{ flexShrink: 0, color: 'var(--dark-brown)', fontSize: '0.93rem' }}>{item.size}</strong>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'right', marginTop: '0.75rem' }}>
            <Link href="/guide/size" style={{ fontSize: '0.88rem', color: 'var(--warm-grey)', textDecoration: 'underline' }}>전체 사이즈 가이드 →</Link>
          </div>
        </section>

        {/* 계절별 선택 */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">
            계절·상황별 제품 선택
            <GeoBadge
              label="계절·상황별 가이드"
              tooltip="사계절·여름·소음·외출 4가지 상황별 추천 제품. AI가 '여름 출산인데 어떤 방수요?' 질문에 즉답 가능."
            />
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            {[
              { season: '봄·가을·겨울 (사계절)', product: '오리지널 방수요', reason: '100% 순면, 포근한 촉감, 사계절 범용. 신생아 첫 방수요로 가장 많이 선택.' },
              { season: '여름 / 태열이 심한 아이', product: '쿨 방수요 (에코 쿨)', reason: '냉감 원사로 피부 온도 낮춤. 땀 많은 아이, 여름 출산 가정에 강력 추천.' },
              { season: '소음 민감 아이', product: '에어 와플 방수요', reason: '와플 직조로 방수막 마찰음 최소화. 예민한 신생아의 수면 방해 없음.' },
              { season: '외출·유모차 겸용', product: '미니 방수요 (Mini)', reason: '55×70cm 컴팩트 사이즈. 유모차·기저귀대에 딱 맞는 외출용 필수템.' },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '1.25rem 1.4rem', border: '1px solid var(--soft-ivory)', borderRadius: '14px', backgroundColor: 'var(--pure-white)' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--warm-grey)', display: 'block', marginBottom: '0.3rem' }}>{item.season}</span>
                <strong style={{ color: 'var(--dark-brown)', fontSize: '1rem', display: 'block', marginBottom: '0.5rem' }}>{item.product}</strong>
                <p style={{ margin: 0, color: 'var(--warm-grey)', fontSize: '0.88rem', lineHeight: '1.6', wordBreak: 'keep-all' }}>{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">
            신생아 방수요 자주 묻는 질문
            <GeoBadge
              label="FAQPage 신생아 특화"
              schema="FAQPage"
              tooltip="신생아 방수요 핵심 질문(시기·소재·사이즈·여름)을 FAQPage 스키마로 노출. 출산 준비 검색 키워드 커버."
            />
          </h2>
          {[
            {
              q: '신생아 방수요 언제부터 사용하나요?',
              a: '출생 직후부터 사용 가능합니다. 신생아는 소변을 자주 보기 때문에 방수요가 매트리스를 보호하고 빠른 교체를 가능하게 합니다. 병원 퇴원 전에 미리 준비해 두는 것이 좋습니다.',
            },
            {
              q: '신생아 방수요 어떤 소재가 좋나요?',
              a: '신생아 피부에 직접 닿는 면은 반드시 100% 순면이어야 합니다. 방수막은 아랫면에만 있어야 하며, 아기 피부에 닿지 않아야 합니다. 화학 합성 소재는 피부 자극과 발진의 원인이 될 수 있습니다.',
            },
            {
              q: '방수요를 출산 선물로 받았는데 사이즈가 맞지 않아요.',
              a: '가장 먼저 사용하는 침대의 내경을 측정하세요. 신생아 바구니·요람은 S(65×90cm), 범퍼침대는 M(90×120cm)이 적합합니다. 사이즈가 맞지 않는 경우 뮤라 고객센터(070-7701-0670)로 문의하시면 교환 안내를 받으실 수 있습니다.',
            },
            {
              q: '여름에 신생아 방수요 어떤 걸 써야 하나요?',
              a: '여름 출산이라면 냉감 원사를 사용한 쿨 방수요를 추천합니다. 태열이 심하거나 땀이 많은 아이에게 체온 조절 효과가 있습니다. 사계절 겸용이 필요하다면 통기성 우수한 오리지널 순면 방수요도 좋습니다.',
            },
            {
              q: '방수요 세탁은 어떻게 하나요?',
              a: '세탁망에 넉넉히 접어 넣고, 울코스(섬세코스)로 유아용 중성세제를 사용해 단독 세탁합니다. 40°C 이하, 그늘에서 자연 건조(3~4시간)합니다. 건조기는 저온 모드만 허용, 고온은 방수막이 손상됩니다.',
            },
            {
              q: '방수요와 방수패드 차이가 뭔가요?',
              a: '방수요는 이불처럼 두껍고 위에 덮거나 깔아 쓸 수 있으며, 방수패드는 침대 시트 위에 까는 얇은 보조 제품입니다. 신생아에게는 흡수층이 두꺼운 방수요가 보호 효과가 더 높습니다.',
            },
          ].map((item, idx) => (
            <div key={idx} style={{ marginBottom: '1.8rem', paddingBottom: '1.8rem', borderBottom: idx < 5 ? '1px solid var(--soft-ivory)' : 'none' }}>
              <h3 className="serif" style={{ fontSize: '1.1rem', color: 'var(--dark-brown)', marginBottom: '0.6rem' }}>{item.q}</h3>
              <p style={{ color: 'var(--warm-grey)', lineHeight: '1.75', margin: 0, fontSize: '0.95rem', wordBreak: 'keep-all' }}>{item.a}</p>
            </div>
          ))}
        </section>

        {/* 관련 가이드 허브 */}
        <section className="gsub-section">
          <h2 className="serif gsub-section-title">더 자세한 가이드</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {subpageLinks.map((link, idx) => (
              <Link key={idx} href={link.href} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', padding: '1.25rem', border: '1px solid var(--soft-ivory)', borderRadius: '14px', backgroundColor: 'var(--pure-white)', textDecoration: 'none', transition: 'box-shadow 0.2s ease' }}>
                <span style={{ fontSize: '1.4rem' }}>{link.icon}</span>
                <strong style={{ color: 'var(--dark-brown)', fontSize: '0.97rem' }}>{link.title}</strong>
                <span style={{ color: 'var(--warm-grey)', fontSize: '0.85rem', lineHeight: '1.5', wordBreak: 'keep-all' }}>{link.desc}</span>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
