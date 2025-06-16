import { initialQuestionData, learningContent } from './data.js';

let questionData = [];
const ADMIN_PASSWORD = 'mis';

const state = {
    currentView: 'main',
    selectedChapters: [],
    currentQuizQuestions: [],
    userAnswers: {}
};

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

function showView(viewId) {
    Object.values(views).forEach(v => {
        if(v) v.classList.remove('active');
    });
    if(views[viewId]) {
        views[viewId].classList.add('active');
    }
    state.currentView = viewId;
    window.scrollTo(0, 0);
}

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
