import React, { useState } from "react";
import ResetBtn from "./ResetBtn";

const App = () => {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: "Who is the richest person in the world in 2021?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Mukesh Ambani", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
      ],
    },
    {
      questionText: "How many days are there in a year?",
      answerOptions: [
        { answerText: "500", isCorrect: false },
        { answerText: "355", isCorrect: false },
        { answerText: "380", isCorrect: false },
        { answerText: "365", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      {showScore ? (
        <h2 className="quiz-heading">Your Quiz Result</h2>
      ) : (
        <h2 className="quiz-heading">Let's Play Quiz</h2>
      )}
      <div className="app">
        {showScore ? (
          <>
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
            <hr />
            <div className="result-section">
              {score === questions.length ? (
                <p style={{ color: "yellow" }}>
                  Excellent!! You got full points.
                </p>
              ) : (
                <p style={{ color: "crimson" }}>Try harder next time!</p>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      className="answer-btn"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
      {showScore ? <ResetBtn /> : ""}
    </>
  );
};

export default App;
