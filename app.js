const initialQuestionData = [
    { "id": 1, "type": "주관식", "chapter": "Chapter 05", "text": "현실 세계에 관한 데이터를 컴퓨터에 바로 저장할 수 없기 때문에, 무엇을 어떻게 표현해야 할지 개념적으로 요약하는 과정을 무엇이라고 하는가?", "answer": "모형화 (Modeling)" },
    { "id": 2, "type": "객관식", "chapter": "Chapter 06", "text": "온라인 거래 처리(OLTP)와 온라인 분석 처리(OLAP)에 대한 비교 설명으로 옳은 것을 모두 고른 것은?", "options": ["가, 나, 다", "가, 다, 라", "나, 다, 라", "가, 나, 다, 라", "정답없음"], "answer": 4, "explanation": "보기 가, 나, 다, 라는 모두 OLTP와 OLAP의 특징을 올바르게 비교한 것이다." },
    // ... (rest of the questions)
    { "id": 51, "type": "주관식", "chapter": "Chapter 07", "text": "기업이 고객과 관련된 내·외부 자료를 분석·통합하여 고객 특성에 맞게 마케팅 활동을 지원하고, 고객과의 지속적인 관계를 유지하여 고객 가치를 극대화하는 시스템을 (           )(이)라고 한다.", "answer": "고객관계관리 (CRM, Customer Relationship Management)" }
];

const learningContent = {
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

let questionData = [];
const ADMIN_PASSWORD = 'mis';

const state = {
    currentView: 'main',
    selectedChapters: [],
    currentQuizQuestions: [],
    userAnswers: {}
};

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`${viewId}-view`).classList.add('active');
    state.currentView = viewId;
    window.scrollTo(0, 0);
}

// ... (The rest of the functions from the previous app.js file) ...

document.addEventListener('DOMContentLoaded', () => {
    // All the setup and event listeners from the previous app.js
    // should be placed here, inside the DOMContentLoaded event listener.
    const views = {
        main: document.getElementById('main-view'),
        learning: document.getElementById('learning-view'),
        quizHome: document.getElementById('quiz-home-view'),
        quiz: document.getElementById('quiz-view'),
        results: document.getElementById('results-view'),
        admin: document.getElementById('admin-view')
    };

    const learningContentContainer = document.getElementById('learning-content-container');
    const chapterSelectionContainer = document.getElementById('chapter-selection');
    const generateQuizBtn = document.getElementById('generate-quiz-btn');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const dataEditor = document.getElementById('data-editor');
    const quizTitle = document.getElementById('quiz-title');
    const gradeButton = document.getElementById('grade-button');
    const resultsSummary = document.getElementById('results-summary');

    function setupLearningMode() {
        let contentHTML = '';
        for (const chapterKey in learningContent) {
            const chapter = learningContent[chapterKey];
            contentHTML += `
                <section id="learn-${chapterKey.toLowerCase().replace(/ /g, '-')}" class="mb-12">
                    <h2 class="text-3xl font-bold mb-6 pb-2 border-b">${chapter.title}</h2>
                    <div>${chapter.content}</div>
                    <div class="mt-8 text-center">
                        <button class="generate-ai-btn px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition" data-chapter="${chapterKey}">
                            <i class="fas fa-magic-wand-sparkles mr-2"></i>AI 응용문제 만들기
                        </button>
                        <div id="ai-question-${chapterKey}" class="mt-4"></div>
                    </div>
                </section>
            `;
        }
        learningContentContainer.innerHTML = contentHTML;

        document.querySelectorAll('.generate-ai-btn').forEach(button => {
            button.addEventListener('click', () => generateAIQuestion(button.dataset.chapter));
        });
        
        setupLearningNav();
    }

    function setupLearningNav() {
        const navLinks = document.querySelectorAll('.learning-nav a');
        const sections = document.querySelectorAll('#learning-content-container section');

        const observer = new IntersectionObserver((entries) => {
            let activeSectionId = null;
            entries.forEach(entry => {
                 if (entry.isIntersecting) {
                     if (!activeSectionId) {
                        activeSectionId = entry.target.id;
                     }
                }
            });
            
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href');
                if (linkHref && `#${activeSectionId}` === linkHref) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }, { rootMargin: "-40% 0px -60% 0px", threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
    }

    async function generateAIQuestion(chapterKey) {
        const container = document.getElementById(`ai-question-${chapterKey}`);
        container.innerHTML = `<div class="p-4 bg-slate-100 rounded-lg text-slate-600"><i class="fas fa-spinner fa-spin mr-2"></i>AI가 응용문제를 생성하고 있습니다. 잠시만 기다려주세요...</div>`;
        
        const concepts = learningContent[chapterKey].content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const prompt = `경영정보시스템의 다음 핵심 개념들을 바탕으로, 실제 기업 사례(예: 쿠팡, 삼성전자, 현대자동차, 네이버 등)를 적용한 객관식 응용문제 1개와 그에 대한 정답, 그리고 상세한 해설을 만들어줘. 문제는 반드시 4지선다 형식이어야 해.\n\n핵심 개념: "${concepts}"\n\n출력 형식은 다음 JSON 구조를 반드시 따라줘.\n\n{\n  "question": "문제 내용",\n  "options": ["보기 1", "보기 2", "보기 3", "보기 4"],\n  "answer": "정답 보기의 텍스트",\n  "explanation": "상세한 해설"\n}`;

        try {
            let chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
            const payload = { contents: chatHistory };
            const apiKey = "";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API 요청 실패: ${response.statusText}`);
            }

            const result = await response.json();
            
            if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0]) {
                const rawText = result.candidates[0].content.parts[0].text;
                const cleanedText = rawText.replace(/^```json\s*|```\s*$/g, '').trim();
                const aiData = JSON.parse(cleanedText);
                
                let optionsHTML = aiData.options.map((opt, i) => `<div class="p-3 bg-slate-50 rounded mt-2">${i+1}. ${opt}</div>`).join('');
                
                container.innerHTML = `
                    <div class="ai-question-box text-left p-6 bg-blue-50 border border-blue-200 rounded-lg mt-4">
                        <h4 class="font-bold text-lg text-blue-800 mb-3"><i class="fas fa-lightbulb mr-2"></i>AI 생성 응용문제</h4>
                        <p class="mb-4">${aiData.question}</p>
                        <div class="space-y-2">${optionsHTML}</div>
                        <div class="mt-4 pt-4 border-t border-blue-200">
                            <p class="font-bold">정답: ${aiData.answer}</p>
                            <p class="mt-2 text-sm text-slate-700"><b>해설:</b> ${aiData.explanation.replace(/\n/g, '<br>')}</p>
                        </div>
                    </div>
                `;
            } else {
                throw new Error("AI로부터 유효한 응답을 받지 못했습니다.");
            }
        } catch (error) {
            console.error("AI Question Generation Error:", error);
            container.innerHTML = `<div class="p-4 bg-red-100 rounded-lg text-red-700">문제 생성에 실패했습니다. 잠시 후 다시 시도해 주세요. (${error.message})</div>`;
        }
    }

    function toggleChapterSelection(chapter, cardElement) {
        const index = state.selectedChapters.indexOf(chapter);
        if (index > -1) {
            state.selectedChapters.splice(index, 1);
            cardElement.classList.remove('selected');
        } else {
            state.selectedChapters.push(chapter);
            cardElement.classList.add('selected');
        }
        generateQuizBtn.disabled = state.selectedChapters.length === 0;
    }

    function createChapterCards() {
        const chapters = [...new Set(questionData.map(q => q.chapter))].sort();
        chapterSelectionContainer.innerHTML = '';
        chapters.forEach((chapter) => {
            const questionCount = questionData.filter(q => q.chapter === chapter).length;
            const card = document.createElement('div');
            card.className = `chapter-card p-6 rounded-lg text-slate-800 bg-white shadow-sm cursor-pointer`;
            card.dataset.chapter = chapter;
            card.innerHTML = `<h3 class="text-xl font-bold">${chapter.replace('Chapter 0', 'Chapter ')}</h3><p class="mt-2 text-slate-500">${questionCount} 문제</p>`;
            card.addEventListener('click', () => toggleChapterSelection(chapter, card));
            chapterSelectionContainer.appendChild(card);
        });
    }
    
    function startQuiz() {
        if (state.selectedChapters.length === 0) return;
        state.userAnswers = {};
        const questions = questionData.filter(q => state.selectedChapters.includes(q.chapter));
        state.currentQuizQuestions = questions.sort(() => Math.random() - 0.5);
        const chapterNames = state.selectedChapters.map(c => c.replace('Chapter 0', '')).sort().join(', ');
        quizTitle.textContent = `Chapter ${chapterNames} 종합 테스트`;
        renderQuizQuestions();
        showView('quiz');
    }

    function renderQuizQuestions() {
        quizContainer.innerHTML = '';
        state.currentQuizQuestions.forEach((q, index) => {
            const questionEl = document.createElement('div');
            questionEl.className = 'bg-white p-6 rounded-lg shadow-sm';
            questionEl.dataset.questionId = q.id;
            let answerInputHTML = '';
            if (q.type === '객관식') {
                const optionsHTML = q.options.map((opt, optIndex) => `
                    <label class="mcq-option block p-3 border rounded-lg cursor-pointer hover:bg-slate-100 has-[:checked]:bg-indigo-100 has-[:checked]:border-indigo-500">
                        <input type="radio" name="q-${q.id}" value="${optIndex}" class="sr-only">
                        <span class="font-medium">${optIndex + 1}.</span> ${opt.replace(/\*\*/g, '')}
                    </label>`).join('');
                answerInputHTML = `<div class="mt-4 space-y-2" onclick="event.target.closest('label')?.querySelector('input').click()">${optionsHTML}</div>`;
            } else if (q.type === '주관식') {
                answerInputHTML = `<input type="text" name="q-${q.id}" class="mt-4 w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="정답을 입력하세요...">`;
            } else {
                answerInputHTML = `<textarea name="q-${q.id}" rows="4" class="mt-4 w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="답안을 서술하세요..."></textarea>`;
            }
            questionEl.innerHTML = `<p class="text-sm font-bold text-indigo-600">문제 ${index + 1} (${q.type})</p><p class="mt-2 text-lg text-slate-800">${q.text.replace(/\*\*/g, '')}</p>${answerInputHTML}`;
            quizContainer.appendChild(questionEl);
        });
    }

    function gradeQuiz() {
        let score = 0;
        let gradableCount = 0;
        state.currentQuizQuestions.forEach(q => {
            let userAnswer;
            if (q.type === '객관식') {
                const selectedOption = document.querySelector(`input[name="q-${q.id}"]:checked`);
                userAnswer = selectedOption ? parseInt(selectedOption.value) : -1;
                state.userAnswers[q.id] = userAnswer;
                if (userAnswer === q.answer) score++;
                gradableCount++;
            } else if (q.type === '주관식') {
                const input = document.querySelector(`input[name="q-${q.id}"]`);
                userAnswer = input.value.trim();
                state.userAnswers[q.id] = userAnswer;
                const formattedCorrectAnswer = q.answer.replace(/\s*\(.*\)\s*/, '').toLowerCase().trim();
                if (userAnswer.toLowerCase() === formattedCorrectAnswer) score++;
                gradableCount++;
            } else {
                const textarea = document.querySelector(`textarea[name="q-${q.id}"]`);
                state.userAnswers[q.id] = textarea.value;
            }
        });
        displayResults(score, gradableCount);
    }
    
    function displayResults(score, gradableCount) {
        resultsSummary.textContent = gradableCount > 0 ? `자동 채점 문제 ${gradableCount}개 중 ${score}개 정답!` : '채점할 문제가 없습니다.';
        resultsContainer.innerHTML = '';
        state.currentQuizQuestions.forEach((q, index) => {
            const userAnswer = state.userAnswers[q.id];
            let resultClass = 'manual', feedbackHTML = '', resultIcon = `<span class="text-amber-500 font-bold">확인</span>`;
            if (q.type === '객관식') {
                const isCorrect = userAnswer === q.answer;
                resultClass = isCorrect ? 'correct' : 'incorrect';
                resultIcon = isCorrect ? `<span class="text-green-500 font-bold">정답</span>` : `<span class="text-red-500 font-bold">오답</span>`;
                feedbackHTML = `<p class="text-sm mt-2"><span class="font-semibold">제출 답안:</span> ${userAnswer === -1 ? '미선택' : (userAnswer + 1) + '. ' + q.options[userAnswer]}</p><p class="text-sm"><span class="font-semibold">정답:</span> ${q.answer + 1}. ${q.options[q.answer]}</p>${q.explanation && !isCorrect ? `<p class="text-sm text-slate-500 mt-1"><b>해설:</b> ${q.explanation}</p>` : ''}`;
            } else if (q.type === '주관식') {
                 const isCorrect = userAnswer.toLowerCase() === q.answer.replace(/\s*\(.*\)\s*/, '').toLowerCase().trim();
                resultClass = isCorrect ? 'correct' : 'incorrect';
                resultIcon = isCorrect ? `<span class="text-green-500 font-bold">정답</span>` : `<span class="text-red-500 font-bold">오답</span>`;
                feedbackHTML = `<p class="text-sm mt-2"><span class="font-semibold">제출 답안:</span> ${userAnswer || '미입력'}</p><p class="text-sm"><span class="font-semibold">정답:</span> ${q.answer}</p>`;
            } else {
                 feedbackHTML = `<div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"><div><h4 class="font-semibold text-sm text-slate-600 mb-1">제출 답안</h4><p class="text-sm p-3 bg-slate-100 rounded-lg min-h-[60px]">${userAnswer || '미입력'}</p></div><div><h4 class="font-semibold text-sm text-slate-600 mb-1">모범 답안</h4><div class="text-sm p-3 bg-green-50 rounded-lg min-h-[60px]">${q.answer.replace(/\n/g, '<br>')}</div></div></div>`;
            }
            const resultEl = document.createElement('div');
            resultEl.className = `result-card bg-white p-4 rounded-lg shadow-sm border-l-4 ${resultClass}`;
            resultEl.innerHTML = `<div class="flex justify-between items-center"><p class="font-bold text-slate-700">문제 ${index + 1}. (${q.type})</p>${resultIcon}</div><p class="mt-2 text-slate-800">${q.text.replace(/\*\*/g, '')}</p><div class="mt-3 border-t pt-3">${feedbackHTML}</div>`;
            resultsContainer.appendChild(resultEl);
        });
        showView('results');
    }

    function loadData() {
        try {
            const savedData = localStorage.getItem('misQuizData');
            questionData = savedData ? JSON.parse(savedData) : initialQuestionData;
        } catch (e) {
            console.error("Error loading data from localStorage:", e);
            questionData = initialQuestionData;
        }
    }
    
    function setupAdminMode() {
        const passwordModal = document.getElementById('password-modal');
        const passwordInput = document.getElementById('password-input');
        const passwordError = document.getElementById('password-error');
        const saveDataBtn = document.getElementById('save-data-btn');
        const dataEditor = document.getElementById('data-editor');

        document.getElementById('admin-mode-btn').addEventListener('click', () => {
            passwordModal.classList.remove('hidden');
            passwordInput.focus();
        });

        document.getElementById('password-cancel').addEventListener('click', () => {
            passwordModal.classList.add('hidden');
            passwordInput.value = '';
            passwordError.classList.add('hidden');
        });

        document.getElementById('password-submit').addEventListener('click', () => {
            if (passwordInput.value === ADMIN_PASSWORD) {
                passwordModal.classList.add('hidden');
                passwordInput.value = '';
                passwordError.classList.add('hidden');
                dataEditor.value = JSON.stringify(questionData, null, 2);
                showView('admin');
            } else {
                passwordError.classList.remove('hidden');
            }
        });

        saveDataBtn.addEventListener('click', () => {
             try {
                const editorData = JSON.parse(dataEditor.value);
                localStorage.setItem('misQuizData', JSON.stringify(editorData, null, 2));
                questionData = editorData; 
                document.getElementById('save-status').textContent = '성공적으로 저장되었습니다!';
                setTimeout(() => { document.getElementById('save-status').textContent = ''; }, 3000);
            } catch (e) {
                alert('JSON 형식이 올바르지 않습니다. 저장에 실패했습니다.');
            }
        });
        
        document.getElementById('exit-admin-btn').addEventListener('click', () => showView('main'));

        document.getElementById('download-data-btn').addEventListener('click', () => {
            const dataStr = JSON.stringify(questionData, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            const exportFileDefaultName = 'mis_quiz_data.json';
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
        });
            
        document.getElementById('upload-data-input').addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const content = e.target.result;
                    JSON.parse(content);
                    dataEditor.value = content;
                    saveDataBtn.click();
                    alert('데이터 복원이 완료되었습니다. 앱이 새로고침됩니다.');
                    location.reload();
                } catch (err) {
                    alert('파일을 읽는 데 실패했습니다. 올바른 JSON 파일인지 확인하세요.');
                }
            };
            reader.readAsText(file);
            event.target.value = '';
        });
    }
        
    // --- Initial Setup ---
    document.addEventListener('DOMContentLoaded', () => {
        // Mode Selection Buttons
        document.getElementById('learning-mode-btn').addEventListener('click', () => showView('learning'));
        document.getElementById('quiz-mode-btn').addEventListener('click', () => {
             state.selectedChapters = [];
            createChapterCards();
            document.getElementById('generate-quiz-btn').disabled = true;
            showView('quiz-home');
        });

        // Go back to Main Menu
        document.querySelectorAll('.main-home-btn').forEach(btn => btn.addEventListener('click', () => showView('main')));

        // Quiz home view navigation
        document.getElementById('generate-quiz-btn').addEventListener('click', startQuiz);
        
        // Back buttons in quiz/results
        document.getElementById('back-to-quiz-home').addEventListener('click', () => showView('quiz-home'));
        document.getElementById('go-to-quiz-home').addEventListener('click', () => showView('quiz-home'));

        // Grade and restart
        document.getElementById('grade-button').addEventListener('click', gradeQuiz);
        document.getElementById('restart-quiz').addEventListener('click', startQuiz);
        
        setupAdminMode();

        loadData();
        setupLearningMode();
        createChapterCards();
        
        showView('main');
    });
</script>
</body>
</html>
