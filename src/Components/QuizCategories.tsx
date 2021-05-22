import { useQuizData } from "../Context/quizDataContext";
import QuizCard from "./Cards/QuizCategoryCard";
import { QUIZDATA } from "../Components/Types/quiz.type";

export default function QuizCategories() {
  const quizData: QUIZDATA = useQuizData();

  console.log("QUUUUIIIXXXX", quizData);

  return (
    <div className="quizContainer">
      <h1>Hello I am quiz</h1>
      <div className="quizWrapper">
        {quizData?.map((quiz) => (
          <QuizCard
            key={quiz._id}
            _id={quiz._id}
            title={quiz.quizTitle}
            thumbnail={quiz.quizThumbnail}
            question={quiz.questions}
          />
        ))}
      </div>
    </div>
  );
}
