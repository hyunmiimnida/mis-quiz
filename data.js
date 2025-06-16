export const initialQuestionData = [
    { "id": 1, "type": "주관식", "chapter": "Chapter 05", "text": "현실 세계에 관한 데이터를 컴퓨터에 바로 저장할 수 없기 때문에, 무엇을 어떻게 표현해야 할지 개념적으로 요약하는 과정을 무엇이라고 하는가?", "answer": "모형화 (Modeling)" },
    { "id": 2, "type": "객관식", "chapter": "Chapter 06", "text": "온라인 거래 처리(OLTP)와 온라인 분석 처리(OLAP)에 대한 비교 설명으로 옳은 것을 모두 고른 것은?", "options": ["가, 나, 다", "가, 다, 라", "나, 다, 라", "가, 나, 다, 라", "정답없음"], "answer": 4, "explanation": "보기 가, 나, 다, 라는 모두 OLTP와 OLAP의 특징을 올바르게 비교한 것이다." },
    { "id": 3, "type": "서술형", "chapter": "Chapter 07", "text": "기존의 마케팅과 CRM(고객관계관리)의 가장 큰 차이점을 '목표'와 '대상'의 관점에서 서술하시오.", "answer": "기존 마케팅은 불특정 다수를 대상으로 상품을 판매하는 것을 목표로 하지만, CRM은 이미 확보된 특정 고객을 대상으로 지속적인 관계를 유지하여 고객의 평생 가치를 극대화하는 것을 목표로 한다." },
    // ... (rest of the questions)
    { "id": 51, "type": "주관식", "chapter": "Chapter 07", "text": "기업이 고객과 관련된 내·외부 자료를 분석·통합하여 고객 특성에 맞게 마케팅 활동을 지원하고, 고객과의 지속적인 관계를 유지하여 고객 가치를 극대화하는 시스템을 (           )(이)라고 한다.", "answer": "고객관계관리 (CRM, Customer Relationship Management)" }
];

export const learningContent = {
    'Chapter 05': {
        title: 'Chapter 5: 데이터베이스 관리',
        content: `
            <h3>1. 데이터베이스 기본 개념</h3>
            <h4>데이터 (Data)</h4>
            <ul>
                <li>현실세계의 사물이나 사건을 관찰 또는 측정하여 얻는 사실 (Fact) 그 자체입니다.</li>
                <li>예: 제품 재고량, 제품 판매량, 영수증, 숫자, 문자, 사진 등</li>
            </ul>
            <h4>데이터베이스 (Database, DB)</h4>
            <ul>
                <li>여러 응용 프로그램들이 공동으로 사용할 수 있도록 체계적으로 컴퓨터에 저장되어 있는 데이터들의 집합입니다.</li>
                <li>여러 데이터 파일을 통합하여 데이터 항목의 중복을 없애고 구조화하여 저장합니다.</li>
            </ul>
            <h4>데이터베이스 관리시스템 (DBMS)</h4>
            <ul>
                <li>사용자 또는 응용프로그램이 데이터베이스 작업을 하기 위해 사용하는 소프트웨어입니다.</li>
                <li>예: ORACLE, MySQL</li>
            </ul>
            <h4>데이터베이스 시스템 (Database System)</h4>
            <ul>
                <li>데이터를 컴퓨터에 저장하여 사용자로 하여금 필요할 때 데이터를 수정하거나 검색할 수 있도록 하는 전체 시스템입니다.</li>
                <li><strong>구성요소:</strong> 데이터베이스(DB), DBMS, 하드웨어, 사용자</li>
            </ul>
            <hr class="my-6">
            <h3>2. 데이터베이스 시스템의 특징</h3>
            <ul>
                <li><strong>데이터 중복 통제:</strong> 데이터를 통합하여 관리하므로 데이터 중복 문제를 해결하고 최소화합니다. (↔ 파일 처리 시스템)</li>
                <li><strong>데이터 독립성 확보:</strong> 데이터베이스 내의 데이터와 이를 사용하는 프로그램이 서로 영향을 받지 않습니다. 데이터 구조가 변경되어도 사용자는 동일한 방법으로 데이터에 접근 가능합니다.</li>
                <li><strong>데이터 동시 공유:</strong> DBMS의 동시성 제어(Concurrency Control) 기능으로 여러 응용프로그램이 동시에 동일한 데이터베이스에 접근하여 작업할 수 있습니다. (예: 수강신청)</li>
                <li><strong>데이터 보안 향상:</strong> DBMS의 보안 기능으로 권한이 없는 사용자의 접근을 통제할 수 있습니다.</li>
                <li><strong>데이터 무결성 유지:</strong> 데이터를 허가되지 않은 방법으로 입력 및 수정할 수 없도록 보호합니다. (유효성 검사)</li>
                <li><strong>표준화 강화:</strong> 중앙 통제 방식으로 데이터의 양식, 내용, 처리 방식 등에 관한 표준화 적용이 용이합니다.</li>
                <li><strong>트랜잭션(Transaction) 지원:</strong> 여러 개의 DB 작업으로 이루어진 논리적 작업 단위가 전부 성공적으로 수행되거나, 하나라도 실패하면 원래 상태로 되돌리는 기능(All-or-Nothing)을 보장합니다. (예: 은행 간 이체)</li>
            </ul>
            <hr class="my-6">
            <h3>3. 데이터 모형화 (개체-관계 모델)</h3>
            <ul>
                <li><strong>모형화 (Modeling):</strong> 현실 세계에 관한 데이터를 컴퓨터에 저장하기 위해, 무엇을 어떻게 표현해야 할지 개념적으로 요약하는 과정입니다.</li>
                <li><strong>개체-관계 모델 (E-R Model):</strong> 현실 세계를 <strong>개체(Entity)</strong>와 그 개체들 간의 <strong>관계(Relationship)</strong>로 표현하는 가장 많이 사용되는 모델입니다.</li>
                <li><strong>개체 (Entity):</strong> 데이터베이스에서 표현하려는 현실 세계의 구별 가능한 객체 또는 대상입니다. (예: 학생, 과목, 부서, 도서)</li>
                <li><strong>관계 (Relationship):</strong> 개체들 사이에 존재하는 연관성입니다. (예: 학생과 과목의 '수강' 관계)</li>
                <li><strong>속성 (Attribute):</strong> 개체나 관계를 설명하는 데 사용되는 항목입니다. (예: '학생' 개체는 '학번', '이름' 속성을 가짐)</li>
                <li><strong>참여도 (Participation):</strong> 관계에 개체가 참여하는 정도로, <strong>전체 참여(두 줄)</strong>는 해당 개체 타입의 모든 구성원이 관계에 참여해야 함을, <strong>부분 참여(한 줄)</strong>는 일부만 참여해도 됨을 의미합니다.</li>
            </ul>
        `
    },
    'Chapter 06': {
        title: 'Chapter 6: Business Intelligence',
        content: `
            <h3>1. BI 기본 개념</h3>
            <ul>
                <li><strong>비즈니스 인텔리전스 (BI):</strong> ERP, SCM, CRM 등 기업 내부/외부에 축적된 데이터를 이용하여 경영정보 분석, 예측, 의사결정 지원, 계획 수립 등 정보 분석을 기반으로 한 모든 업무를 지원하는 일련의 IT 시스템 또는 프로세스입니다.</li>
                <li><strong>BI의 3가지 구성요소:</strong>
                    <ol class="list-decimal pl-5 mt-2">
                        <li><strong>데이터 관리:</strong> 데이터를 저장하고 관리하는 공간. (예: <strong>데이터 웨어하우스</strong>)</li>
                        <li><strong>업무 분석 도구 (Business Analytics):</strong> 저장된 데이터를 가공, 처리, 분석하는 도구. (예: <strong>데이터 마이닝, OLAP</strong>)</li>
                        <li><strong>사용자 인터페이스:</strong> 분석 결과를 사용자에게 시각적으로 제공하는 방식. (예: <strong>대시보드</strong>)</li>
                    </ol>
                </li>
            </ul>
            <hr class="my-6">
            <h3>2. 데이터 관리: 데이터 웨어하우스와 데이터 마트</h3>
            <ul>
                <li><strong>데이터 웨어하우스 (Data Warehouse, DW):</strong> 의사결정 지원을 위해 각 데이터베이스에서 수집된 데이터를 통합하여 저장하는 공간입니다. 외부 정보도 포함하며, 과거와 현재의 데이터를 모두 가집니다.</li>
                <li><strong>DW의 4가지 특징:</strong>
                    <ul class="list-disc pl-5 mt-2">
                        <li><strong>주제 중심 (Subject-oriented):</strong> 판매, 제품, 고객 등 특정 주제 중심으로 데이터가 구성됩니다.</li>
                        <li><strong>통합적 (Integrated):</strong> 여러 데이터베이스와 외부 데이터를 통합하여 일관된 형식으로 저장합니다.</li>
                        <li><strong>시간 의존적 (Time-variant):</strong> 과거 특정 시점부터 데이터가 계속 쌓여, 시간의 흐름에 따른 변화 추적(추세 분석)이 가능합니다.</li>
                        <li><strong>비휘발성 (Non-volatile):</strong> 데이터가 한번 저장되면 삭제되거나 수정되지 않고, 읽기 전용으로 질의 목적으로만 사용됩니다.</li>
                    </ul>
                </li>
                <li><strong>데이터 마트 (Data Mart):</strong> 데이터 웨어하우스의 한 부분으로, 마케팅, 판매, 광고 같은 단일 주제나 특정 부서의 데이터에 초점을 맞춘 소규모의 데이터 웨어하우스입니다.</li>
            </ul>
            <hr class="my-6">
            <h3>3. 업무 분석 도구</h3>
            <ul>
                <li><strong>데이터 마이닝 (Data Mining):</strong> 기업이 보유한 대량의 데이터 사이에 숨겨진 패턴과 규칙을 추론하여 중요한 의사결정을 지원하는 기법입니다.
                    <ul class="list-disc pl-5 mt-2">
                        <li><strong>연관 분석 (Association Analysis):</strong> 데이터 사이에 존재하는 연관성 규칙을 발견합니다. (예: 장바구니 분석 - 기저귀와 맥주)</li>
                        <li><strong>군집 분석 (Cluster Analysis):</strong> 유사한 특징을 가진 데이터들을 그룹으로 묶습니다. (예: 고객 세분화)</li>
                        <li><strong>예측 모델링 (Predictive Modeling):</strong> 데이터의 속성을 기준으로 특정 속성의 값을 예측하는 수리적 모델을 만듭니다. (예: 영화 관람객 수 예측)</li>
                        <li><strong>이상치 탐지 (Anomaly Detection):</strong> 기존 데이터 패턴과 상이한 데이터를 찾아냅니다. (예: 신용카드 도난 사용 탐지)</li>
                    </ul>
                </li>
                <li><strong>OLAP (Online Analytical Processing):</strong> 사용자가 다차원적인 데이터를 직접 대화식으로 분석하는 방식입니다. (의사결정 지원용)</li>
                <li><strong>OLTP (Online Transaction Processing):</strong> 일상의 반복적인 업무를 수행하는 시스템에서 필요로 하는 데이터를 조회, 저장하는 작업을 처리하는 방식입니다. (거래 업무용, 빠른 속도 요구)</li>
                <li><strong>드릴 다운 (Drill Down):</strong> BI의 보고서 기능에서, 요약된 정보에서 점차 상세한 수준의 정보로 단계적으로 접근하는 기능입니다.</li>
            </ul>
        `
    },
    'Chapter 07': {
        title: 'Chapter 7: 전사적 시스템',
        content: `
            <h3>1. ERP (전사적자원관리)</h3>
            <ul>
                <li><strong>ERP (Enterprise Resource Planning):</strong> 기업 내 생산, 물류, 재무, 회계, 구매, 재고 등 모든 경영 활동의 프로세스를 통합적으로 연계 및 관리하여, 기업의 정보들을 서로 공유하고 빠른 의사결정을 지원하는 시스템입니다.</li>
                <li><strong>등장 배경:</strong> 각 부서별로 분리된 개별 시스템(TPS 등)의 데이터 중복과 비효율성을 극복하고, 전사적 자원을 실시간으로 통합 관리하기 위해 등장했습니다.</li>
                <li><strong>BPR (Business Process Reengineering, 업무 재설계):</strong> ERP 시스템은 선진화된 표준 프로세스를 제공하므로, 기업은 ERP 도입 과정에서 자연스럽게 기존의 비효율적인 업무 방식을 시스템에 맞춰 재검토하고 최적화하게 됩니다.</li>
                <li><strong>발전 과정:</strong> <strong>MRP(자재소요량계획, 1970s)</strong> → <strong>MRP II(생산자원계획, 1980s)</strong> → <strong>ERP(전사적자원관리, 1990s)</strong> 순으로 기능과 범위가 확대되었습니다.</li>
            </ul>
            <hr class="my-6">
            <h3>2. SCM (공급사슬관리)</h3>
            <ul>
                <li><strong>SCM (Supply Chain Management):</strong> 자재 조달, 제품 생산, 유통, 판매에 이르는 공급망(공급사슬) 전체 과정을 최적화하여 효율적인 처리를 지원하는 시스템입니다.</li>
                <li><strong>SPA (Specialty store retailer of Private label Apparel):</strong> 의류의 기획, 디자인, 생산, 유통, 판매까지 모든 과정을 제조회사가 직접 관리하는 의류 전문점으로, 소비자의 요구를 빠르게 상품에 반영하는 것이 특징입니다. (예: ZARA, H&M)</li>
                <li><strong>ECR (Efficient Consumer Response):</strong> 주로 <strong>식품 산업</strong>에서 공급업체와 유통업체가 POS 데이터를 실시간으로 공유하여 재고관리와 생산계획을 효율화하는 SCM 기법입니다.</li>
                <li><strong>QR (Quick Response):</strong> 주로 <strong>의류 산업</strong>에서 소비자의 구매 동향을 신속하게 파악하여 생산량을 조절함으로써 재고 문제를 해결하는 SCM 기법입니다.</li>
            </ul>
            <hr class="my-6">
            <h3>3. CRM (고객관계관리)</h3>
            <ul>
                <li><strong>CRM (Customer Relationship Management):</strong> 기업이 고객과 관련된 데이터를 분석·통합하여 고객 특성에 맞게 마케팅 활동을 지원하고, 고객과의 지속적인 관계를 유지하여 고객 가치를 극대화하는 시스템입니다. (기존 고객 관리에 초점)</li>
                <li><strong>교차판매 (Cross-Selling):</strong> 특정 상품을 구매한 고객에게 그 상품과 연관된 다른 상품(예: 휴대폰 구매자에게 케이스 추천)의 구매를 유도하는 판매 방법입니다.</li>
                <li><strong>업셀링 (Up-Selling):</strong> 고객이 구매하려는 상품보다 가격이 더 높은 상위 모델이나 업그레이드된 상품의 구매를 유도하는 판매 방법입니다.</li>
            </ul>
        `
    },
    'Chapter 08': {
        title: 'Chapter 8: 경쟁전략과 전략정보시스템',
        content: `
            <h3>1. SIS (전략정보시스템)</h3>
            <ul>
                <li><strong>SIS (Strategic Information System):</strong> 기업 간 경쟁에서 우위를 차지하기 위한 전략적 무기로서, 기존의 정보시스템(TPS, MIS 등)에 정보기술과 경쟁전략 개념을 융합하여 기업의 프로세스, 제품, 서비스의 부가가치를 창출하는 시스템입니다.</li>
            </ul>
            <hr class="my-6">
            <h3>2. 마이클 포터의 경쟁전략 모형</h3>
            <h4>5가지 경쟁세력 모형 (5 Forces Model)</h4>
            <ul>
                <li>산업의 구조적 매력도를 결정하는 5가지 외부 요인을 분석하는 틀입니다.</li>
                <li><strong>5가지 세력:</strong> ① 산업 내 기존 기업 간의 경쟁, ② 신규 진입 기업의 위협, ③ 대체품 및 서비스의 위협, ④ 구매자의 협상력, ⑤ 공급자의 협상력.</li>
                <li><strong>진입장벽/철수장벽:</strong> 신규 기업의 진입이 어렵거나(진입장벽), 기존 기업이 사업을 접기 어려운(철수장벽) 정도를 나타냅니다.</li>
            </ul>
            <h4>본원적 경쟁전략 (Generic Strategies)</h4>
            <ul>
                <li>경쟁에서 우위를 차지하기 위한 3가지 기본 전략입니다. 포터는 여러 전략을 동시에 실행하면 실패할 수 있다고 보았습니다.</li>
                <li><strong>비용 우위 전략 (Cost Leadership):</strong> 경쟁사보다 낮은 원가로 제품/서비스를 제공하는 전략.</li>
                <li><strong>차별화 전략 (Differentiation):</strong> 제품/서비스에 독특한 가치를 부여하여 경쟁사와 구별되게 만드는 전략.</li>
                <li><strong>집중화 전략 (Focus):</strong> 특정 구매자 집단이나 틈새시장에 기업의 역량을 집중하는 전략 (비용 집중 또는 차별화 집중).</li>
            </ul>
            <h4>가치사슬 모형 (Value Chain Model)</h4>
            <ul>
                <li>기업이 가치를 창출하는 일련의 활동을 분석하는 도구입니다.</li>
                <li><strong>본원적 활동 (Primary Activities):</strong> 부가가치 창출에 직접적으로 기여하는 활동. (예: 내부 물류, 생산, 외부 물류, 마케팅/영업, 서비스)</li>
                <li><strong>지원 활동 (Support Activities):</strong> 본원적 활동이 원활히 이루어지도록 간접적으로 지원하는 활동. (예: 기업 하부구조, 인적자원관리, 기술개발, 조달)</li>
            </ul>
            <hr class="my-6">
            <h3>3. 기타 경쟁 우위 전략</h3>
            <ul>
                <li><strong>혁신 전략 (Innovation Strategy):</strong> 기업의 전통적인 운영 방식을 새로운 방식으로 획기적으로 바꾸거나, 새로운 제품이나 서비스를 개발하는 전략입니다. (예: Citibank의 ATM 도입)</li>
                <li><strong>운영효과성 전략 (Operational Effectiveness Strategy):</strong> 내부 업무의 프로세스를 개선하여 동종 경쟁사에 비해 업무를 더 쉽고 생산적으로 수행하도록 하는 전략입니다.</li>
                <li><strong>고객 전략 (Customer Strategy):</strong> 고객의 니즈(needs)를 충족시켜 고객만족도를 높이는 데 초점을 맞추는 전략입니다.</li>
            </ul>
        `
    }
};
