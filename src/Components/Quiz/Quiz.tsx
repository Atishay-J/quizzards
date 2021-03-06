import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { useQuiz } from "../../Context/quizContext";
import QuizCard from "../Cards/QuizCard";
import Timer from "../Timer/Timer";
import QuizFinish from "../Pages/QuizFinish";
import "./quiz.css";

export default function Quiz() {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { quizState, quizDispatch } = useQuiz();

  useEffect(() => {
    if (authState.isUserLoggedIn !== true) {
      navigate("/login");
    }
  }, [authState.isUserLoggedIn, navigate]);

  useEffect(() => {
    if (quizState.questions === null) {
      navigate("/categories");
    }
  }, [navigate, quizState.questions]);

  let curQuestion = quizState.questions?.[quizState.curQuestion];

  return (
    <>
      {quizState.questions?.length >= quizState.curQuestion + 1 ? (
        <div className="quizContainer">
          <div className="quizInfoContainer">
            <h1 className="scoreText">Score : {quizState.score}</h1>
            <Timer curQuestion={curQuestion} />
          </div>
          <QuizCard
            questionId={curQuestion._id}
            question={curQuestion.question}
            options={curQuestion.options}
          />
          <button
            className="nextQuesBtn"
            onClick={() => quizDispatch({ type: "NEXT_QUESTION" })}
          >
            {" "}
            Next Question
          </button>
        </div>
      ) : (
        <QuizFinish score={quizState.score} />
      )}
    </>
  );
}
