import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { useQuiz } from "../../Context/quizContext";
import QuizCard from "../Cards/QuizCard";
import Timer from "../Timer/Timer";

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
    <div className="quizContainer">
      {quizState.questions?.length >= quizState.curQuestion + 1 ? (
        <div className="quizInfoContainer">
          <h1>Score : {quizState.score}</h1>
          <Timer curQuestion={curQuestion} />
        </div>
      ) : (
        <div className="quizFinishedContainer">
          <h1>Quiz Finished</h1>
          <h3>You Scored : {quizState.score}</h3>
          <button
            onClick={() => {
              navigate("/categories");
              quizDispatch({ type: "RESET_QUIZ" });
            }}
          >
            Play Again
          </button>
        </div>
      )}

      {quizState.questions?.length >= quizState.curQuestion + 1 && (
        <QuizCard
          question={curQuestion.question}
          options={curQuestion.options}
        />
      )}

      {quizState.questions?.length >= quizState.curQuestion + 1 ? (
        <button onClick={() => quizDispatch({ type: "NEXT_QUESTION" })}>
          {" "}
          Next Question
        </button>
      ) : (
        <button>Finish</button>
      )}
    </div>
  );
}
