import { useRef } from "react";

export default function Answers({answers, selectedAnswers, answerState, onSelect}){
    const shuffledAnswer =useRef();

    if(!shuffledAnswer.current){
        shuffledAnswer.current = [...answers];
        shuffledAnswer.current.sort(() => Math.random() - 0.5);
      }

    return(
        <ul id="answers">
          {shuffledAnswer.current.map((answer) => {
            const isSelected = selectedAnswers === answer;
            let cssClassName = "";

            if (answerState === "answered" && isSelected) {
              cssClassName = "selected";
            }

            if (
              (answerState === "correct" || answerState === "wrong") &&
              isSelected
            ) {
              cssClassName = answerState;
            }

            return (
              <li className="answer" key={answer}>
                <button
                  onClick={()=> onSelect(answer)}
                  className={cssClassName}
                  disabled={answerState !== ''}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
    )
}