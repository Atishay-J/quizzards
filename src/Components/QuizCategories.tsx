import { useQuizData } from "../Context/quizDataContext";
import QuizCard from "./Cards/QuizCategoryCard";
import { QUIZDATA } from "../Components/Types/quiz.type";
import { useEffect } from "react";
import { useQuiz } from "../Context/quizContext";

export default function QuizCategories() {
  const quizData: QUIZDATA = useQuizData();
  const { quizDispatch } = useQuiz();
  console.log("QUUUUIIIXXXX", quizData);

  useEffect(() => {
    quizDispatch({ type: "RESET_QUIZ" });
  }, []);

  return (
    <div className="quizContainer">
      <h1>Hello I am quiz</h1>
      <div className="quizWrapper">
        {quizData ? (
          quizData?.map((quiz) => (
            <QuizCard
              key={quiz._id}
              _id={quiz._id}
              title={quiz.quizTitle}
              thumbnail={quiz.quizThumbnail}
              question={quiz.questions}
            />
          ))
        ) : (
          <h1>Loadingg....</h1>
        )}
      </div>
    </div>
  );
}
