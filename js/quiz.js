/**
 * CodingHamme – Interactive quiz demonstration
 * Client-side only. Score calculation and navigation work fully offline.
 */

(function () {
  "use strict";

  const questions = [
    {
      question: "Which protocol is commonly used for secure web communication?",
      options: ["FTP", "HTTP", "HTTPS", "SMTP"],
      correct: 2,
    },
    {
      question: "What does the 'C' in CIA triad stand for in cybersecurity?",
      options: ["Control", "Confidentiality", "Compliance", "Configuration"],
      correct: 1,
    },
    {
      question: "Which of the following is a strongly typed programming language?",
      options: ["JavaScript", "Python", "Java", "PHP"],
      correct: 2,
    },
    {
      question: "What is the primary purpose of a firewall?",
      options: [
        "To speed up internet connection",
        "To monitor and control network traffic",
        "To store encrypted passwords",
        "To design network topology",
      ],
      correct: 1,
    },
    {
      question: "In HTML, which tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1,
    },
  ];

  let currentIndex = 0;
  let score = 0;
  let answered = false;
  let userAnswers = [];

  const els = {};

  function cacheElements() {
    els.container = document.getElementById("quiz-container");
    if (!els.container) return false;

    els.progress = document.getElementById("quiz-progress");
    els.scoreEl = document.getElementById("quiz-score");
    els.question = document.getElementById("quiz-question");
    els.options = document.getElementById("quiz-options");
    els.prevBtn = document.getElementById("quiz-prev");
    els.nextBtn = document.getElementById("quiz-next");
    els.result = document.getElementById("quiz-result");
    els.quizBody = document.getElementById("quiz-body");
    return true;
  }

  function renderQuestion() {
    const q = questions[currentIndex];
    answered = userAnswers[currentIndex] !== undefined;

    els.progress.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
    els.scoreEl.textContent = `Score: ${score}`;
    els.question.textContent = q.question;

    els.options.innerHTML = q.options
      .map((opt, i) => {
        let cls = "quiz-option";
        if (userAnswers[currentIndex] === i) {
          cls += userAnswers[currentIndex] === q.correct ? " correct" : " incorrect selected";
          if (i === q.correct) cls = "quiz-option correct";
        } else if (answered && i === q.correct) {
          cls += " correct";
        }
        return `
          <button class="${cls}" data-index="${i}" ${answered ? "disabled" : ""}>
            <span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `;
      })
      .join("");

    els.options.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", onSelect);
    });

    els.prevBtn.disabled = currentIndex === 0;
    els.nextBtn.textContent = currentIndex === questions.length - 1 ? "Finish" : "Next";
  }

  function onSelect(e) {
    if (answered) return;
    const btn = e.currentTarget;
    const index = parseInt(btn.dataset.index, 10);
    const q = questions[currentIndex];

    userAnswers[currentIndex] = index;
    answered = true;

    if (index === q.correct) {
      score++;
      btn.classList.add("correct");
    } else {
      btn.classList.add("incorrect", "selected");
      const correctBtn = els.options.querySelector(`[data-index="${q.correct}"]`);
      if (correctBtn) correctBtn.classList.add("correct");
    }

    els.scoreEl.textContent = `Score: ${score}`;
    els.options.querySelectorAll(".quiz-option").forEach((b) => (b.disabled = true));
  }

  function next() {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      showResult();
    }
  }

  function prev() {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  }

  function showResult() {
    els.quizBody.classList.add("hidden");
    els.result.classList.remove("hidden");
    const percent = Math.round((score / questions.length) * 100);
    els.result.innerHTML = `
      <h3>Quiz Complete!</h3>
      <div class="score-big">${score}/${questions.length}</div>
      <p>You scored ${percent}%. ${percent >= 70 ? "Great job!" : "Keep practising — you can do better!"}</p>
      <button class="btn btn-primary mt-1" id="quiz-restart">Try Again</button>
    `;
    document.getElementById("quiz-restart").addEventListener("click", restart);
  }

  function restart() {
    currentIndex = 0;
    score = 0;
    answered = false;
    userAnswers = [];
    els.result.classList.add("hidden");
    els.quizBody.classList.remove("hidden");
    renderQuestion();
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function init() {
    if (!cacheElements()) return;
    els.prevBtn.addEventListener("click", prev);
    els.nextBtn.addEventListener("click", next);
    renderQuestion();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
