import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { useQuiz } from "../../Context/quizContext";
import QuizCard from "../Cards/QuizCard";
import Timer from "../Timer/Timer";
import QuizFinish from "../Pages/QuizFinish";

export default function Quiz() {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { quizState, quizDispatch } = useQuiz();

  console.log("Quiz STATE", quizState);

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
        <QuizFinish score={quizState.score} />
      )}

      {quizState.questions?.length >= quizState.curQuestion + 1 && (
        <QuizCard
          questionId={curQuestion._id}
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
