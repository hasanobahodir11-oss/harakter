// Karl Yungning 20 ta savoli va variantlari
const questions = [
    {
        id: 1,
        question: "Qaysi biri siz uchun muhimroq?",
        options: [
            { text: "a) Kichkina do'stlar davrasi", value: "a" },
            { text: "b) Ko'pgina o'rtoqlar davrasi", value: "b" }
        ],
        extraversionValue: "b"
    },
    {
        id: 2,
        question: "Qanday kitoblar sizga ko'proq yoqadi?",
        options: [
            { text: "a) Qiziqarli syujetli", value: "a" },
            { text: "b) Odamlar, ruhiy kechinmalar aks etgan", value: "b" }
        ],
        extraversionValue: "a"
    },
    {
        id: 3,
        question: "Ishda ko'proq nimaga yo'l qo'yishingiz mumkin?",
        options: [
            { text: "a) Kechikish", value: "a" },
            { text: "b) Xatoliklar", value: "b" }
        ],
        extraversionValue: "b"
    },
    {
        id: 4,
        question: "Agar yomon ish qilib qo'ygan bo'lsangiz?",
        options: [
            { text: "a) Juda qayg'urasiz", value: "a" },
            { text: "b) Unchalik qayg'urmaysiz", value: "b" }
        ],
        extraversionValue: "b"
    },
    {
        id: 5,
        question: "Odamlar bilan qanday chiqishasiz?",
        options: [
            { text: "a) Juda tez va oson", value: "a" },
            { text: "b) Sekin ehtiyotkorlik bilan", value: "b" }
        ],
        extraversionValue: "a"
    },
    {
        id: 6,
        question: "O'zingizni arazdash deb hisoblaysizmi?",
        options: [
            { text: "a) Ha", value: "a" },
            { text: "b) Yo'q", value: "b" }
        ],
        extraversionValue: "b"
    },
    {
        id: 7,
        question: "Chin dildan kulishga moyilmisiz?",
        options: [
            { text: "a) Ha", value: "a" },
            { text: "b) Yo'q", value: "b" }
        ],
        extraversionValue: "a"
    },
    {
        id: 8,
        question: "Siz qandaysiz?",
        options: [
            { text: "a) Kamgap", value: "a" },
            { text: "b) Sergap", value: "b" }
        ],
        extraversionValue: "b"
    },
    {
        id: 9,
        question: "Siz ochiqmisiz yoki hislaringizni birovlardan yashirasizmi?",
        options: [
            { text: "a) Ochiqman", value: "a" },
            { text: "b) Yashiraman", value: "b" }
        ],
        extraversionValue: "a"
    },
    {
        id: 10,
        question: "O'z his-kechinmalaringizni tahlil qilishni yoqtirasizmi?",
        options: [
            { text: "a) Ha", value: "a" },
            { text: "b) Yo'q", value: "b" }
        ],
        extraversionValue: "b"
    },
    {
        id: 11,
        question: "Ko'pchilik davrasida bo'lganda siz?",
        options: [
            { text: "a) Tinmay gapirasiz", value: "a" },
            { text: "b) Boshqalarni tinglaysiz", value: "b" }
        ],
        extraversionValue: "a"
    },
    {
        id: 12,
        question: "Tez-tez o'zingizdan norozi bo'lib turasizmi?",
        options: [
            { text: "a) Ha", value: "a" },
            { text: "b) Yo'q", value: "b" }
        ],
        extraversionValue: "b"
    },
    {
        id: 13,
        question: "Biror nimalarni tashkil qilishni yoqtirasizmi?",
        options: [
            { text: "a) Ha", value: "a" },
            { text: "b) Yo'q", value: "b" }
        ],
        extraversionValue: "a"
    },
    {
        id: 14,
        question: "Sirlaringiz yozilgan kundalik tutishni yoqtirasizmi?",
        options: [
            { text: "a) Ha", value: "a" },
            { text: "b) Yo'q", value: "b" }
        ],
        extraversionValue: "b"
    },
    {
        id: 15,
        question: "Biror narsaning qaroridan uni bajarishga tez o'tasizmi?",
        options: [
            { text: "a) Ha", value: "a" },
            { text: "b) Yo'q", value: "b" }
        ],
        extraversionValue: "a"
    },
    {
        id: 16,
        question: "Kayfiyatingizni tez o'zgartira olasizmi?",
        options: [
            { text: "a) Ha", value: "a" },
            { text: "b) Yo'q", value: "b" }
        ],
        extraversionValue: "a"
    },
    {
        id: 17,
        question: "O'zgalarni ishontirib, ularga o'z fikringizni o'tkazishni yoqtirasizmi?",
        options: [
            { text: "a) Ha", value: "a" },
            { text: "b) Yo'q", value: "b" }
        ],
        extraversionValue: "a"
    },
    {
        id: 18,
        question: "Sizning harakatlaringiz?",
        options: [
            { text: "a) Tez", value: "a" },
            { text: "b) Sekin", value: "b" }
        ],
        extraversionValue: "a"
    },
    {
        id: 19,
        question: "Siz bo'lishi mumkin bo'lgan noxush narsalardan ta'sirlanasizmi?",
        options: [
            { text: "a) Tez-tez", value: "a" },
            { text: "b) Ba'zan", value: "b" }
        ],
        extraversionValue: "b"
    },
    {
        id: 20,
        question: "Qiyin holatlarda siz:",
        options: [
            { text: "a) Yordam so'rashga shoshilasiz", value: "a" },
            { text: "b) Hech kimga murojaat qilmaysiz", value: "b" }
        ],
        extraversionValue: "a"
    }
];

let currentIndex = 0;
let matchedCount = 0;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const questionCounter = document.getElementById('question-counter');
const progressText = document.getElementById('progress-text');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

function startQuiz() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    currentIndex = 0;
    matchedCount = 0;
    loadQuestion();
}

function loadQuestion() {
    if (currentIndex < questions.length) {
        const q = questions[currentIndex];
        
        questionCounter.textContent = `Savol ${currentIndex + 1} / ${questions.length}`;
        progressText.textContent = `${Math.round(((currentIndex) / questions.length) * 100)}%`;
        questionText.textContent = `${q.id}. ${q.question}`;
        
        optionsContainer.innerHTML = '';
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt.text;
            btn.className = "w-full text-left bg-white/5 hover:bg-white/15 border border-white/10 hover:border-indigo-400 p-4 rounded-xl transition duration-200 text-sm md:text-base font-medium";
            btn.onclick = () => handleAnswer(opt.value, q.extraversionValue);
            optionsContainer.appendChild(btn);
        });
    } else {
        showResult();
    }
}

function handleAnswer(selectedVal, correctExtraversionVal) {
    if (selectedVal === correctExtraversionVal) {
        matchedCount++;
    }
    currentIndex++;
    loadQuestion();
}

function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    // Kalit formulasi: Mos kelgan javoblar soni * 5
    const totalScore = matchedCount * 5;
    document.getElementById('score-text').textContent = totalScore;

    let title = "";
    let desc = "";

    if (totalScore <= 35) {
        title = "Introversiya (Introvert)";
        desc = "Siz ko'proq ichki dunyongizga, shaxsiy his-tuyg'ular va o'ylaringizga yo'naltirildingiz. Yolg'izlikda quvvat olasiz, ehtiyotkor va muloqotda tanlab munosabat qilasiz.";
    } else if (totalScore <= 65) {
        title = "Ambiversiya (Ambivert)";
        desc = "Sizda ekstroversiya va introversiya xususiyatlari teng muvozanatlashgan. Vaziyatga qarab ochiq va muloqotchan bo'lishingiz yoki tinchlik va yolg'izlikni afzal ko'rishingiz mumkin.";
    } else {
        title = "Ekstroversiya (Ekstravert)";
        desc = "Siz tashqi dunyoga, odamlar bilan muloqotga va faol harakatlarga yo'naltirildingiz. Odamlar davrasida o'zingizni erkin his qilasiz, kirishuvchansiz va tez qaror qabul qilasiz.";
    }

    document.getElementById('result-title').textContent = title;
    document.getElementById('result-desc').textContent = desc;
}

function restartQuiz() {
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}