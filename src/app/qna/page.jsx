import React from 'react';
import QnaList from '../../components/QnaList';
import GeoBadge from '../../components/geo/GeoBadge';
import './qna-page.css';

export const metadata = {
  title: 'Mula 자주 묻는 질문(FAQ)',
  description: '신생아 방수요 사용법, 세탁·건조 방법, 사이즈 선택, 소재 차이 등 뮤라 방수요에 대한 60가지 질문과 답변을 카테고리별로 확인하세요.',
};

export default function QnAPage() {
  const faqCategories = [
    {
      id: 'newborn-infant',
      title: '신생아·연령별 사용',
      faqs: [
        { slug: 'newborn-safe', question: '뮤라 방수요는 신생아도 사용할 수 있나요?', answer: '네, 100% 국내 생산 순면으로 까슬거림이나 피부 자극이 없어 갓 태어난 신생아도 안심하고 사용할 수 있습니다.' },
        { slug: 'birth-prep', question: '뮤라 제품은 출산 준비물로 왜 많이 찾나요?', answer: '신생아 시기 게워냄이나 잦은 기저귀 교환에 따른 이불 빨래 횟수를 획기적으로 줄여주어, 초보 엄마 아빠들의 수고를 크게 덜어주기 때문입니다.' },
        { slug: 'sensitive-skin', question: '뮤라 방수요는 피부가 예민한 아기에게도 괜찮나요?', answer: '원단 직조부터 최종 가공까지 화학적 유해 물질 공정을 배제한 믿을 수 있는 국내 생산 제품으로, 아토피나 극예민 피부 아이들에게도 자극을 최소화합니다.' },
        { slug: 'newborn-bump-bed', question: '뮤라 방수요를 범퍼 침대에 쓸 때 사이즈 어떻게 고르나요?', answer: '범퍼 침대는 대부분 70×130cm 전후입니다. 뮤라 중형(M)이 구겨짐 없이 가장 넉넉하게 잘 맞으며, 침대 바닥 면적보다 살짝 크게 선택해도 괜찮습니다.' },
        { slug: 'newborn-burp-frequent', question: '신생아가 자꾸 게워내서 방수요를 하루에도 여러 번 세탁해야 해요. 좋은 방법이 있나요?', answer: '미니(Mini)나 소형(S) 방수요를 2~3장 구비해두는 것을 추천합니다. 한 장을 세탁하는 동안 다른 장으로 교체해가며 사용할 수 있습니다. 뮤라 방수요는 그늘에서 3~4시간이면 건조됩니다.' },
        { slug: 'infant-roll-stage', question: '뒤집기 시작한 6개월 아기에게 방수요를 어떻게 배치하면 좋나요?', answer: '뒤집기 이후에는 아이가 방수요 위를 굴러 범위가 넓어집니다. 중형(M) 이상을 추천하며, 침구 세트 아래에 겹쳐 고정하면 밀리지 않습니다.' },
        { slug: 'atopy-baby', question: '아토피가 있는 아기에게 방수요를 써도 괜찮나요?', answer: '뮤라 오리지널 에코 방수요는 피부 접촉면이 100% 국내 순면으로 화학 처리를 최소화해 아토피 피부에도 자극이 적습니다. 처음 사용 전 무향·무형광 세제로 한 번 세탁 후 사용하는 것을 권장합니다.' },
        { slug: 'twin-baby', question: '쌍둥이를 키우고 있습니다. 방수요는 몇 장이 적당한가요?', answer: '쌍둥이 가정에서는 아이당 최소 2장, 총 4장 이상을 구비하는 것을 추천합니다. 동시에 두 아이의 방수요가 오염될 수 있어 세탁 주기를 고려한 여유 수량이 필요합니다.' },
        { slug: 'premature-safe', question: '이른둥이(조산아)에게도 뮤라 방수요를 사용할 수 있나요?', answer: '네, 화학 코팅 공정 없이 제조된 국내 순면 제품으로 이른둥이에게도 안전합니다. 처음 사용 전 세탁 한 번 후 사용하는 것이 일반적으로 권장됩니다.' },
        { slug: 'newborn-monthly-change', question: '아이가 성장하면 방수요 사이즈를 교체해야 하나요?', answer: '방수요는 침대 사이즈에 맞춰 선택하므로, 사용하는 침대가 달라질 때 교체하는 것이 일반적입니다. S → M → Q(퀸)으로 단계적으로 업사이즈하는 경우가 많습니다.' },
      ],
    },
    {
      id: 'size-guide',
      title: '사이즈 선택',
      faqs: [
        { slug: 'size-how-to-choose', question: '뮤라 방수요 사이즈는 어떻게 고르면 되나요?', answer: '기저귀 갈이대나 유모차용은 미니(Mini)/소형(S), 아기용 범퍼침대는 중형(M)/대형(L), 부모님과 함께 쓰는 패밀리 침대는 퀸(Q)사이즈를 추천합니다.' },
        { slug: 'crib-size', question: '뮤라 방수요는 아기 침대에서도 사용할 수 있나요?', answer: '네, 일반적인 우드 아기 침대나 크립 침대에는 M(중형) 사이즈가 구겨짐 없이 가장 넉넉하게 잘 맞습니다.' },
        { slug: 'first-purchase', question: '뮤라 방수요를 처음 살 때 어떤 제품부터 고르면 좋나요?', answer: '뮤라 브랜드의 정수가 담긴, 호불호 없는 \'오리지널 에코 방수요\' M(중형) 사이즈를 첫 입문용으로 가장 많이 권장해 드립니다.' },
        { slug: 'queen-size-family', question: '부부 침대에 방수요를 깔고 싶어요. 퀸 사이즈 방수요가 있나요?', answer: '네, 뮤라 방수요는 퀸(Q) 사이즈를 포함한 미니부터 퀸까지 풀 라인업을 갖추고 있습니다. 부부 침대에서 아이와 함께 자는 패밀리 사용이나 임산부 방수 침구로도 많이 활용됩니다.' },
        { slug: 'size-stroller', question: '유모차 방수 시트로 쓸 때 어떤 사이즈가 맞나요?', answer: '유모차용으로는 미니(Mini, 약 40×50cm) 사이즈가 가장 적합합니다. 유모차 시트 크기와 유사하며, 접어서 기저귀 가방에 보관하기도 편리합니다.' },
        { slug: 'size-diaper-mat', question: '기저귀 갈이대 방수 매트로 쓸 사이즈는?', answer: '기저귀 갈이대용으로는 소형(S, 약 50×70cm)이 가장 일반적입니다. 예비용으로 2장 구비해두면 세탁 중에도 교체 사용이 가능합니다.' },
        { slug: 'size-chart', question: '뮤라 방수요 사이즈별 정확한 치수가 궁금합니다', answer: '대략적인 사이즈는 미니(Mini): 약 40×50cm, 소형(S): 약 50×70cm, 중형(M): 약 70×130cm, 대형(L): 약 80×160cm, 퀸(Q): 약 150×200cm입니다. 제품별 정확한 치수는 공식몰에서 확인해주세요.' },
        { slug: 'size-overlap', question: '방수요를 매트리스보다 작게 써도 되나요?', answer: '네, 오염이 자주 발생하는 부위만 커버해도 됩니다. 매트리스 전체를 커버하지 않아도 방수 기능에 문제가 없으며, 세탁이 더 빠르고 편해지는 장점도 있습니다.' },
        { slug: 'size-compare', question: 'M(중형)과 L(대형) 중 어떤 것이 더 활용도가 높나요?', answer: '일반적인 아기 침대와 어린이 침대에는 M(중형)이 가장 많이 사용됩니다. 아이가 자라거나 좀 더 넓은 침대를 사용할 때는 L(대형)로 교체하는 경우가 많습니다.' },
        { slug: 'size-two-pieces', question: '방수요를 두 장 겹쳐서 사용하는 경우도 있나요?', answer: '네, 세탁 후 건조 중 교체를 빠르게 하기 위해 여러 장을 겹쳐 사용하는 방식도 있습니다. 방수요 기능 자체에는 이상이 없습니다.' },
      ],
    },
    {
      id: 'wash-care',
      title: '세탁·건조 관리',
      faqs: [
        { slug: 'washing-machine', question: '뮤라 방수요는 세탁기에 넣어도 괜찮나요?', answer: '물론입니다. 원단과 방수 코팅 보호를 위해 세탁망에 넉넉히 접어 넣은 후, 유아용 세제로 \'울코스\' 단독 세탁을 해주시는 것이 가장 좋습니다.' },
        { slug: 'dryer-use', question: '뮤라 방수요는 건조기 사용이 가능한가요?', answer: '가급적 그늘에 널어 자연 건조하는 것을 장려합니다. 건조기의 고온 열기는 뒷면 방수막을 쪼그라들게 할 수 있으므로, 부득이할 때는 꼭 \'저온/열풍제외 모드\'로 짧게 돌려주세요.' },
        { slug: 'long-lasting-care', question: '뮤라 방수요를 오래 사용하려면 어떻게 관리해야 하나요?', answer: '뜨거운 물로 삶는 행위, 표백제나 염소계 세제 사용을 피하시고, 오염 발생 시 방치하지 말고 즉각 세탁하여 통풍이 잘되는 그늘에 말려주시면 훨씬 수명이 늘어납니다.' },
        { slug: 'wash-bleach', question: '방수요에 표백제를 사용해도 되나요?', answer: '아니요, 염소계 표백제(락스 등)는 방수막 코팅을 빠르게 손상시킵니다. 오염이 심할 경우 산소계 표백제를 소량 사용하거나, 오염 부위를 중성 세제로 손세탁 후 세탁기에 넣는 방법을 추천합니다.' },
        { slug: 'wash-hot-water', question: '방수요를 삶아도 되나요?', answer: '안 됩니다. 60도 이상의 고온 세탁이나 열탕 삶기는 방수요 뒷면의 폴리우레탄 방수막을 변성시켜 방수 기능을 저하시킵니다.' },
        { slug: 'wash-frequency', question: '방수요는 얼마나 자주 세탁해야 하나요?', answer: '오염 여부와 상관없이 1주일에 1~2회 정기 세탁을 권장합니다. 아이가 땀을 많이 흘리거나 오염이 발생했을 때는 즉시 세탁하는 것이 좋습니다.' },
        { slug: 'wash-machine-type', question: '드럼세탁기와 통돌이 세탁기 중 어떤 것이 더 좋나요?', answer: '둘 다 사용 가능합니다. 드럼세탁기는 울코스 단독 세탁, 통돌이는 세탁망에 넣고 섬세/울 코스로 세탁하면 됩니다.' },
        { slug: 'wash-stain', question: '방수요에 얼룩이 생겼을 때 어떻게 처리하나요?', answer: '얼룩은 즉시 처리하는 것이 효과적입니다. 수건으로 물기를 흡수한 후 중성 세제를 도포하고 5~10분 후 가볍게 문질러 씻어낸 다음 세탁기로 울코스 세탁하세요.' },
        { slug: 'wash-air-dry', question: '방수요 자연 건조 시 주의사항이 있나요?', answer: '직사광선은 방수막 소재를 장기적으로 노화시킬 수 있어, 통풍이 잘 되는 그늘에 펴서 말리는 것이 가장 좋습니다. 실내에서 선풍기 바람을 활용하면 건조 시간을 단축할 수 있습니다.' },
        { slug: 'wash-new-product', question: '처음 구매한 방수요는 바로 사용해도 되나요?', answer: '처음 사용 전에 한 번 세탁 후 사용하는 것을 권장합니다. 제조·포장 과정의 미세 먼지나 냄새를 제거하고, 원단을 부드럽게 만들어 아이 피부에 더욱 안전합니다.' },
      ],
    },
    {
      id: 'material-feel',
      title: '소재·촉감·계절성',
      faqs: [
        { slug: 'summer-use', question: '뮤라 방수요는 여름에도 덥지 않게 사용할 수 있나요?', answer: '뮤라의 오리지널 시그니처 원단은 통기성 자체가 우수하여 여름철에도 엉덩이가 짓무르지 않도록 부드럽고 쾌적한 수면 환경을 제공합니다.' },
        { slug: 'four-seasons', question: '뮤라 방수요는 사계절 내내 사용해도 괜찮나요?', answer: '기본 라인업인 \'에코 순면\'은 땀 흡수력과 부드러운 보온성을 겸비해 봄, 여름, 가을, 겨울 언제 깔아두어도 스탠더드한 성능을 발휘합니다.' },
        { slug: 'mattress-placement', question: '뮤라 방수요는 침대 매트리스 위에 바로 깔아도 되나요?', answer: '네, 매트리스 커버 위에 단독으로 깔거나, 기존 면 패드 밑에 이중으로 깔아 매트리스로 오염이 스며드는 것만 막아두는 방식 등 자유롭게 사용 가능합니다.' },
        { slug: 'material-cool-fabric', question: '쿨 방수요 원단은 어떤 소재인가요?', answer: '뮤라 쿨 방수요는 특수 냉감 원사를 표면에 교차 직조해 만든 여름 전용 원단입니다. 접촉 냉감 효과로 피부에 닿는 순간 온도를 즉각적으로 낮춰주며, 일반 순면보다 끈적임이 적습니다.' },
        { slug: 'material-waffle', question: '에어 와플 방수요란 무엇인가요?', answer: '표면이 와플(벌집) 패턴으로 직조된 방수요입니다. 피부와의 접촉 면적을 줄여 여름에도 쾌적하고, 세탁 후 건조도 빠릅니다. 통기성과 부드러운 촉감을 동시에 원하는 분들에게 추천합니다.' },
        { slug: 'material-herringbone', question: '헤링본 방수요는 어떤 특징이 있나요?', answer: '헤링본 패턴은 V자 지그재그 직조 방식으로, 일반 평직보다 원단의 밀도와 내구성이 높습니다. 멀티레이어 구조로 흡수력이 뛰어나고 반복 세탁에도 변형이 적습니다.' },
        { slug: 'material-touch-difference', question: '쿨 방수요가 일반 방수요보다 피부에 더 차갑게 느껴지나요?', answer: '네, 쿨 방수요는 냉감 원사의 특성상 처음 피부에 닿을 때 일반 순면보다 시원한 느낌이 납니다. 기온이 낮은 계절에는 차갑게 느껴질 수 있어 사계절 사용에는 적합하지 않습니다.' },
        { slug: 'material-winter', question: '겨울에 방수요 위에 바로 눕히면 춥지 않나요?', answer: '방수요는 방수 보호층 역할이므로 계절에 맞는 이불이나 패드를 위에 함께 사용하세요. 오리지널 에코 방수요의 순면 원단은 차갑지 않아 겨울에도 부드럽게 사용할 수 있습니다.' },
        { slug: 'material-allergy', question: '방수요 소재가 알레르기를 일으킬 수 있나요?', answer: '뮤라 방수요의 피부 접촉면은 100% 국내 순면으로 알레르기 반응이 드뭅니다. 극도로 민감한 피부의 경우 처음 사용 전 팔꿈치 안쪽에 10~15분 접촉 테스트를 해보는 것이 좋습니다.' },
        { slug: 'material-vs-other-brands', question: '다른 방수요 브랜드와 뮤라 원단의 차이는 무엇인가요?', answer: '많은 방수요 제품이 원단을 외부에서 조달하거나 해외에서 생산합니다. 뮤라는 풍전티티의 자체 직조 시설에서 원단을 직접 제직하여 원사 선택·직조 밀도·가공 방식을 직접 통제합니다.' },
      ],
    },
    {
      id: 'usage-situation',
      title: '활용 상황',
      faqs: [
        { slug: 'portable-outdoor', question: '뮤라 방수요는 외출할 때도 휴대해서 쓸 수 있나요?', answer: '네, 미니(Mini)와 S사이즈는 가방에 쉽게 들어가 기저귀 가방 필수템으로 백화점, 식당, 차량 등에서 위생적인 매트로 대활약합니다.' },
        { slug: 'potty-training', question: '뮤라 방수요는 배변 훈련 시기에도 유용한가요?', answer: '그렇습니다. 밤 기저귀를 떼는 시기에 아이가 침대에 실수를 하더라도 매트리스 오염을 철벽 방어해주어 매트리스 청소 스트레스를 없애줍니다.' },
        { slug: 'daycare-nap', question: '뮤라 방수요는 어린이집 낮잠용으로도 사용할 수 있나요?', answer: '가벼운 무게로 돌돌 말아 휴대하기 좋아, 어린이집 낮잠 이불 세트 밑에 깔아주시면 아이의 배변 실수로부터 침구 전체의 오염을 방지해 줍니다.' },
        { slug: 'usage-car-seat', question: '카시트에도 방수요를 깔 수 있나요?', answer: '네, 미니(Mini) 사이즈가 카시트 쿠션 위에 딱 맞게 사용할 수 있습니다. 이유식이나 스낵을 먹으며 이동하거나 더운 여름 땀이 많이 나는 상황에서 유용합니다.' },
        { slug: 'usage-hospital', question: '병원 입원 시에도 방수요가 도움이 되나요?', answer: '네, 병원 침대 위에 방수요를 깔아두면 오염 시 방수요만 교체하면 되어 위생 관리가 훨씬 편합니다.' },
        { slug: 'usage-pregnancy', question: '임산부도 방수요를 사용할 수 있나요?', answer: '네, 임신 후기 상황이나 산후 오로로 인한 침구 오염 방지에 매우 유용합니다. 퀸(Q) 사이즈 방수요를 부부 침대에 깔아두면 임신·산후 기간 침구 관리가 훨씬 편해집니다.' },
        { slug: 'usage-art-play', question: '아이 미술 놀이 때 바닥 보호용으로 쓸 수 있나요?', answer: '물감이나 물놀이 등 창작 놀이 시 바닥 보호 시트로도 활용 가능합니다. 방수 기능이 있어 물기나 물감이 바닥에 스미는 것을 막아주며, 세탁이 쉬워 반복 사용할 수 있습니다.' },
        { slug: 'usage-travel', question: '해외여행이나 장거리 여행 시 방수요를 챙겨가면 좋을까요?', answer: '숙소 침구 위생이 걱정될 때 방수요 하나를 챙기면 현지 침대 오염 걱정 없이 아이를 재울 수 있습니다. 미니·소형 사이즈는 접으면 손수건 크기 수준으로 작아집니다.' },
        { slug: 'usage-grandparents', question: '조부모 집에 놀러갈 때도 방수요를 가져가나요?', answer: '명절이나 주말 방문 시 미니·소형 사이즈를 챙기면 조부모 침대나 이불을 오염시킬 걱정 없이 편하게 방문할 수 있습니다.' },
        { slug: 'usage-pet', question: '반려동물에게도 방수요를 쓸 수 있나요?', answer: '방수 기능과 세탁 내구성이 필요한 곳이라면 반려동물 용도로도 사용할 수 있습니다. 다만 발톱 등으로 인한 원단 손상에 주의가 필요합니다.' },
      ],
    },
    {
      id: 'compare-buy',
      title: '비교·구매 기준',
      faqs: [
        { slug: 'target-parent', question: '뮤라 방수요는 어떤 부모에게 잘 맞는 제품인가요?', answer: '화학 코팅 대신 통기성이 뛰어난 국내 순면 원단을 고집하고, 잦은 세탁에도 쉽게 닳지 않는 견고한 내구성을 중시하는 현명한 부모님들께 가장 적합합니다.' },
        { slug: 'vs-regular-pad', question: '뮤라 방수요와 일반 방수패드는 무엇이 다른가요?', answer: '피부에 닿는 상층부는 순면이나 특수 흡수층으로 쾌적하게 짜여 있고, 오직 맨 아랫면만 폴리우레탄 방수 처리하여 통기성과 방수력을 동시에 확보한 점이 특징입니다.' },
        { slug: 'cool-vs-original', question: '뮤라 쿨 방수요는 일반 방수요와 무엇이 다른가요?', answer: '한여름이나 태열이 심한 신생아를 위해 특수 냉감 원사를 표면에 교차 직조하여 피부 온도를 즉각적으로 떨어뜨려 주는 여름 전용 라인업입니다.' },
        { slug: 'gift-use', question: '뮤라 방수요는 선물용으로도 괜찮은가요?', answer: '활용도가 너무 좋아 한 번 써본 부모님들이 지인 출산 축하 용도로 재구매를 할 만큼 만족도가 최상위권인 선물 중 하나입니다.' },
        { slug: 'selection-criteria', question: '뮤라 제품을 고를 때 가장 먼저 봐야 할 기준은 무엇인가요?', answer: '아이의 체질(땀이 많은지=쿨링/통기성, 예민한지=오리지널)을 1순위로 확인하고, 그 다음 주로 깔아둘 공간의 사이즈를 선택하세요.' },
        { slug: 'buy-online-store', question: '뮤라 방수요는 어디서 구매할 수 있나요?', answer: '공식 쇼핑몰(mula.co.kr)에서 직접 구매할 수 있으며, 네이버 스마트스토어 등 국내 주요 온라인 마켓에서도 구매 가능합니다. 공식몰 구매 시 정품 인증과 AS 지원을 받을 수 있습니다.' },
        { slug: 'buy-price-value', question: '뮤라 방수요는 다른 방수요 브랜드에 비해 왜 비싼 편인가요?', answer: '국내 자체 생산과 14개 관련 특허 기술 기반이기 때문에 해외 생산 저가 제품보다 가격이 높습니다. 단, 세탁 내구성이 뛰어나 장기간 사용 시 교체 주기가 길어 실질적인 비용 효율이 높습니다.' },
        { slug: 'buy-warranty', question: '구매 후 불량이나 하자가 있을 때 어떻게 하나요?', answer: '공식몰 및 공식 채널 구매 제품은 수령 후 7일 이내 반품·교환이 가능합니다. 고객센터(070-7701-0670, mula2@mula.co.kr)에 연락하면 신속하게 처리해 드립니다.' },
        { slug: 'buy-gift-wrap', question: '선물 포장도 가능한가요?', answer: '공식몰에서 선물 포장 옵션 선택이 가능합니다. 출산 선물, 돌잔치 선물로 많이 구매되는 뮤라 방수요는 선물 포장 시 감사 메모카드 작성도 가능합니다.' },
        { slug: 'buy-set-discount', question: '방수요를 여러 장 함께 구매하면 할인이 되나요?', answer: '공식몰 및 공식 스마트스토어에서 세트 구성이나 수량 할인 프로모션을 진행하는 경우가 있습니다. 최신 할인 정보는 공식몰(mula.co.kr) 또는 고객센터를 통해 확인하세요.' },
      ],
    },
  ];

  const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://mula.co.kr/qna#faqpage',
    name: '뮤라 방수요 자주 묻는 질문',
    url: 'https://mula.co.kr/qna',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://mula.co.kr' },
        { '@type': 'ListItem', position: 2, name: '자주 묻는 질문', item: 'https://mula.co.kr/qna' },
      ],
    },
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      '@id': `https://mula.co.kr/qna#${faq.slug}`,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* Hero Section */}
      <section
        className="qna-page-hero"
        style={{ backgroundImage: 'url(/assets/d31bd7241e8ff98d.jpg)' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(74, 68, 61, 0.45)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="serif fade-in qna-page-hero-title">
            자주 묻는 질문
            <GeoBadge
              label="FAQPage 60개"
              schema="FAQPage"
              tooltip="6카테고리 × 10개 = 60개 Q&A. 모든 질문에 acceptedAnswer 포함, AI 검색엔진이 직접 답변을 인용 가능."
            />
          </h1>
          <p className="fade-in qna-page-hero-desc">
            세탁 방법부터 사이즈 가이드까지, 뮤라에 대한 모든 궁금증을 빠르게 해결하세요.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%', paddingBottom: '60px' }}>
        <div style={{ marginTop: '2rem' }}>
          <GeoBadge
            label="FAQ 답변 DOM 상시 노출"
            schema="FAQPage"
            tooltip="조건부 렌더링({isOpen && ...}) 대신 CSS max-height collapse로 답변이 항상 DOM에 존재. AI 크롤러가 모든 60개 답변 텍스트를 한 번에 수집."
          />
        </div>
        <QnaList faqCategories={faqCategories} />
      </div>
    </div>
  );
}
