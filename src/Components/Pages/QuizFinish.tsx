import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../Context/quizContext";
import { QUIZ_STATE } from "../Types/quiz.type";
import QuizFinishCard from "../Cards/QuizFinishCard";
import "./quizFinish.css";

type QUIZ_FINISH_PROPS = {
  score: number;
};

export default function QuizFinish({ score }: QUIZ_FINISH_PROPS) {
  const navigate = useNavigate();

  const { quizState }: { quizState: QUIZ_STATE } = useQuiz();

  return (
    <div className="quizFinishContainer">
      <h1 className="quizFinishedHead">Quiz Finished</h1>
      <h3 className="userScoreText">You Scored : {score}</h3>

      <div className="quizReviewContainer">
        <h3 className="reviewHead">Review your answers</h3>
        {quizState.userQuizData.map((data) => {
          let curQuestion = quizState.questions?.find(
            (item: { _id: string }) => item._id === data.questionId
          );
          let correctOption = curQuestion?.options.find(
            (option) => option.isCorrect === true
          );

          return (
            <QuizFinishCard
              question={data.question}
              selectedOption={data.selectedOption}
              correctOption={correctOption?.value}
            />
          );
        })}
      </div>
      <div className="playAgainContainer">
        <button
          className="playAgainBtn"
          onClick={() => {
            navigate("/categories");
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
