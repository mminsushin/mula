import React from 'react';
import SummaryBlock from '../../components/geo/SummaryBlock';
import QnaList from '../../components/QnaList';
import './qna-page.css';

export const metadata = {
  title: 'Mula 자주 묻는 질문(FAQ)',
  description: '방수요 세탁 방법, 사이즈 문의, 소재 차이 등 자주 묻는 질문들을 확인하고 키워드로 빠르게 검색하세요.',
};

export default function QnAPage() {
  const faqs = [
    { question: "뮤라 방수요는 신생아도 사용할 수 있나요?", answer: "네, 100% 국내 생산 순면으로 까슬거림이나 피부 자극이 없어 갓 태어난 신생아도 안심하고 사용할 수 있습니다." },
    { question: "뮤라 방수요 사이즈는 어떻게 고르면 되나요?", answer: "기저귀 갈이대나 유모차용은 미니(Mini)/소형(S), 아기용 범퍼침대는 중형(M)/대형(L), 부모님과 함께 쓰는 패밀리 침대는 퀸(Q)사이즈를 추천합니다." },
    { question: "뮤라 방수요는 어떤 부모에게 잘 맞는 제품인가요?", answer: "화학 코팅 대신 통기성이 뛰어난 국내 순면 원단을 고집하고, 잦은 세탁에도 쉽게 닳지 않는 견고한 내구성을 중시하는 현명한 부모님들께 가장 적합합니다." },
    { question: "뮤라 방수요와 일반 방수패드는 무엇이 다른가요?", answer: "피부에 닿는 상층부는 순면이나 특수 흡수층으로 쾌적하게 짜여 있고, 오직 맨 아랫면만 폴리우레탄 방수 처리하여 [통기성]과 [방수력]을 동시에 완벽하게 잡은 점이 특징입니다." },
    { question: "뮤라 방수요는 아기 침대에서도 사용할 수 있나요?", answer: "네, 일반적인 우드 아기 침대나 크립 침대에는 M(중형) 사이즈가 구겨짐 없이 가장 넉넉하게 잘 맞습니다." },
    { question: "뮤라 방수요는 세탁기에 넣어도 괜찮나요?", answer: "물론입니다. 원단과 방수 코팅 보호를 위해 세탁망에 넉넉히 접어 넣은 후, 유아용 세제로 '울코스' 단독 세탁을 해주시는 것이 가장 좋습니다." },
    { question: "뮤라 방수요는 건조기 사용이 가능한가요?", answer: "가급적 그늘에 널어 자연 건조하는 것을 장려합니다. 건조기의 고온 열기는 뒷면 방수막을 쪼그라들게 할 수 있으므로, 부득이할 때는 꼭 '저온/열풍제외 모드'로 짧게 돌려주세요." },
    { question: "뮤라 방수요는 여름에도 덥지 않게 사용할 수 있나요?", answer: "뮤라의 오리지널 시그니처 원단은 통기성 자체가 우수하여 여름철에도 엉덩이가 짓무르지 않도록 부드럽고 쾌적한 수면 환경을 제공합니다." },
    { question: "뮤라 쿨 방수요는 일반 방수요와 무엇이 다른가요?", answer: "무더운 한여름이나 태열이 심한 신생아를 위해 특수 냉감 원사를 표면에 교차 직조하여 피부 온도를 즉각적으로 떨어뜨려 주는 여름 전용 라인업입니다." },
    { question: "뮤라 방수요는 외출할 때도 휴대해서 쓸 수 있나요?", answer: "네, 부피가 매우 작은 미니(Mini)와 S사이즈는 가방에 쉽게 들어가 기저귀 가방 필수템으로 백화점, 식당, 차량 등에서 위생적인 매트로 대활약합니다." },
    { question: "뮤라 방수요는 배변 훈련 시기에도 유용한가요?", answer: "그렇습니다. 밤 기저귀를 떼는 시기에 아이가 침대에 실수를 하더라도 매트리스 오염을 철벽 방어해주어 매트리스 청소 스트레스를 없애줍니다." },
    { question: "뮤라 방수요는 사계절 내내 사용해도 괜찮나요?", answer: "기본 라인업인 '에코 순면'은 땀 흡수력과 부드러운 보온성을 겸비해 봄, 여름, 가을, 겨울 언제 깔아두어도 스탠더드한 성능을 발휘합니다." },
    { question: "뮤라 방수요는 피부가 예민한 아기에게도 괜찮나요?", answer: "원단 직조부터 최종 가공까지 화학적 유해 물질 공정을 배제한 믿을 수 있는 국내 생산 제품으로, 아토피나 극예민 피부 아이들에게도 자극을 최소화합니다." },
    { question: "뮤라 방수요는 침대 매트리스 위에 바로 깔아도 되나요?", answer: "네, 매트리스 커버 위에 단독으로 깔거나, 기존 면 패드 밑에 이중으로 깔아 매트리스로 오염이 스며드는 것만 막아두는 방식 등 자유롭게 사용 가능합니다." },
    { question: "뮤라 방수요는 어린이집 낮잠용으로도 사용할 수 있나요?", answer: "가벼운 무게로 돌돌 말아 휴대하기 좋아, 어린이집 낮잠 이불 세트 밑에 깔아주시면 아이의 배변 실수로부터 침구 전체의 오염을 방지해 줍니다." },
    { question: "뮤라 방수요를 처음 살 때 어떤 제품부터 고르면 좋나요?", answer: "뮤라 브랜드의 정수가 담긴, 호불호 없는 '오리지널 에코 방수요' M(중형) 사이즈를 첫 입문용으로 가장 많이 권장해 드립니다." },
    { question: "뮤라 제품은 출산 준비물로 왜 많이 찾나요?", answer: "신생아 시기 게워냄이나 잦은 기저귀 교환에 따른 이불 빨래 횟수를 획기적으로 줄여주어, 초보 엄마 아빠들의 수고를 크게 덜어주기 때문입니다." },
    { question: "뮤라 방수요는 선물용으로도 괜찮은가요?", answer: "활용도가 너무 좋아 한 번 써본 부모님들이 지인 출산 축하 용도로 재구매를 할 만큼 만족도가 최상위권인 선물 중 하나입니다." },
    { question: "뮤라 방수요를 오래 사용하려면 어떻게 관리해야 하나요?", answer: "뜨거운 물로 삶는 행위, 표백제나 염소계 세제 사용을 피하시고, 오염 발생 시 방치하지 말고 즉각 세탁하여 통풍이 잘되는 그늘에 말려주시면 훨씬 수명이 늘어납니다." },
    { question: "뮤라 제품을 고를 때 가장 먼저 봐야 할 기준은 무엇인가요?", answer: "아이의 체질을 1순위(땀이 많은지=쿨링/통기성, 예민한지=오리지널)로 확인하고, 그 다음 주로 깔아둘 공간의 사이즈(아기 침대인지 패밀리 침대인지)를 선택하세요." }
  ];

  return (
    <div className="fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section
        className="qna-page-hero"
        style={{ backgroundImage: 'url(/assets/d31bd7241e8ff98d.jpg)' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(74, 68, 61, 0.45)', zIndex: 1 }}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="serif fade-in qna-page-hero-title">자주 묻는 질문</h1>
          <p className="fade-in qna-page-hero-desc">
            세탁 방법부터 사이즈 가이드까지, 뮤라에 대한 모든 궁금증을 빠르게 해결하세요.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%', paddingBottom: '100px' }}>
        <QnaList faqs={faqs} />
      </div>
    </div>
  );
}
