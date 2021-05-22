import { createContext, useContext, useReducer } from "react";
import { QUIZ_STATE } from "../Components/Types/quiz.type";

export const QuizContext = createContext<any>(null);

type QUIZ_STATE_DISPATCH = [quizState: QUIZ_STATE, quizDispatch: any];

const initState = {
  questions: null,
  score: 0,
};

const quizReducer = (state: QUIZ_STATE, action: any) => {
  console.log("Quiz Context payload", action.payload);

  switch (action.type) {
    case "ADD_QUESTIONS":
      return { ...state, questions: action.payload.question };
    case "UPDATE_SCORE":
      return { ...state, score: state.score + 5 };
    case "NEGATIVE_SCORE":
      return { ...state, score: state.score < 3 ? 0 : state.score - 3 };
    default:
      return state;
  }
};

export const QuizProvider = ({ children }: any) => {
  const [quizState, quizDispatch]: QUIZ_STATE_DISPATCH = useReducer(
    quizReducer,
    initState
  );
  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
