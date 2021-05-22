import { useQuiz } from "../../Context/quizContext";
import { QUIZ_CARD_PROPS } from "../Types/quiz.type";
import "./quizCard.css";

export default function QuizCard({ question, options }: QUIZ_CARD_PROPS) {
  const { quizDispatch } = useQuiz();

  const handleResponse = (isCorrect: boolean) => {
    console.log("OPTION SELECTED, OPTION IS CORRECT ", isCorrect);
    if (isCorrect) {
      return quizDispatch({ type: "UPDATE_SCORE" });
    }
    quizDispatch({ type: "NEGATIVE_SCORE" });
  };

  return (
    <div className="quizCardContainer">
      <h1 className="quizQuestion">{question}</h1>
      <div className="quizOptionsContainer">
        {options.map((option) => (
          <button
            className="quizOptionButton"
            onClick={() => handleResponse(option.isCorrect)}
          >
            {option.value}
          </button>
        ))}
      </div>
    </div>
  );
}
