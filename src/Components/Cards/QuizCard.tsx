import { useEffect, useState } from "react";
import { useQuiz } from "../../Context/quizContext";
import { QUIZ_CARD_PROPS, QUESTION_OPTIONS } from "../Types/quiz.type";
import _ from "lodash";
import "./quizCard.css";

export default function QuizCard({ question, options }: QUIZ_CARD_PROPS) {
  const { quizDispatch } = useQuiz();
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<any>(null);

  const handleResponse = (
    isCorrect: boolean,
    curQuestion: string,
    selectedOption: string,
    answerId: string
  ) => {
    setIsOptionSelected(true);

    quizDispatch({
      type: "SET_USER_QUIZ_DATA",
      payload: { curQuestion, selectedOption, isCorrect, answerId },
    });

    if (isOptionSelected !== true) {
      if (isCorrect) {
        return quizDispatch({ type: "UPDATE_SCORE" });
      }
      quizDispatch({ type: "NEGATIVE_SCORE" });
    }
  };

  useEffect(() => {
    setIsOptionSelected(false);
  }, [question]);

  useEffect(() => {
    setShuffledOptions(_.shuffle(options));
  }, [options]);

  return (
    <div className="quizCardContainer">
      <h1 className="quizQuestion">{question}</h1>
      <div className="quizOptionsContainer">
        {shuffledOptions?.map((option: QUESTION_OPTIONS) => (
          <button
            className={`quizOptionButton ${
              isOptionSelected &&
              (option.isCorrect ? "correctOption" : "incorrectOption")
            }`}
            onClick={() =>
              handleResponse(
                option.isCorrect,
                question,
                option.value,
                option._id
              )
            }
          >
            {option.value}
          </button>
        ))}
      </div>
    </div>
  );
}
