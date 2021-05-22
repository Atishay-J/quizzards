import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { useQuiz } from "../../Context/quizContext";
import { useQuizData } from "../../Context/quizDataContext";
import { QUIZ_STATE, QUESTIONS } from "../Types/quiz.type";
import QuizCard from "../Cards/QuizCard";

export default function Quiz() {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const value = useQuizData();
  const { quizState } = useQuiz();

  console.log("New value", authState);

  console.log("QUIIZZZ STATTETETET", quizState);

  console.log("Newww Daata", value);

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

  return (
    <div className="quizContainer">
      <h1>I am The real quiz</h1>
      <div className="quizInfoContainer">
        <h1>Score : {quizState.score}</h1>
      </div>
      {quizState.questions?.map((question: QUESTIONS) => (
        <QuizCard question={question.question} options={question.options} />
      ))}
    </div>
  );
}
