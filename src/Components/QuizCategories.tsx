import { useQuizData } from "../Context/quizDataContext";
import QuizCard from "./Cards/QuizCategoryCard";

type QUESTION_OPTIONS = {
  _id: string;
  value: string;
  isCorrect: boolean;
};

type QUESTIONS = {
  _id: string;
  question: string;
  points: number;
  options: QUESTION_OPTIONS[];
};

type QUIZDATA = [
  {
    _id: string;
    quizTitle: string;
    quizThumbnail: string;
    questions: QUESTIONS[];
  }
];

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
            title={quiz.quizTitle}
            thumbnail={quiz.quizThumbnail}
          />
        ))}
      </div>
    </div>
  );
}
