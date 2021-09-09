import "./quizCategoryCard.css";
import { useQuiz } from "../../Context/quizContext";
import { useNavigate } from "react-router-dom";

import { QUIZ_PROPS } from "../Types/quiz.type";

export default function QuizCard({ title, thumbnail, question }: QUIZ_PROPS) {
  const { quizDispatch } = useQuiz();
  const navigate = useNavigate();

  return (
    <div
      className="quizCategoryContainer"
      onClick={() => {
        quizDispatch({ type: "ADD_QUESTIONS", payload: { question } });
        navigate("/quiz");
      }}
    >
      <img
        className="quizCategoryThumbnail"
        src={thumbnail}
        alt="Quiz Thumbnail"
      />
      <h1 className="quizCategoryTitle">{title}</h1>
    </div>
  );
}
