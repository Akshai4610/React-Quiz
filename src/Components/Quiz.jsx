import { useState } from "react";
import QUESTIONS from "../questions";
import quizCompletedImg from '../assets/quiz-complete.png'

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  
  function handleSelectAnswer(answer) {
    setUserAnswer((prevAnswer) => {
      return [...prevAnswer, answer];
    });
  }

  if (quizIsComplete) {
      return (
          <div id="summary">
            <img src={quizCompletedImg} alt="Quiz Completed" />
            <h2>Quiz Completed!</h2>
        </div>
    )
}

const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers]
shuffledAnswer.sort(()=>Math.random()-0.5);

  return (
    <div id="quiz">
    <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {shuffledAnswer.map((answer) => (
          <li className="answer" key={answer}>
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
