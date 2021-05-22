import { createContext, useContext } from "react";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { QUIZDATA, SERVERERROR } from "../Components/Types/quiz.type";

export const QuizDataContext = createContext<any | null>(null);

const getQuizData = async () => {
  try {
    const quizData = await axios.get<QUIZDATA>(
      "https://quizzards.herokuapp.com/quizdata"
    );
    return quizData;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<SERVERERROR>;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }
    console.error(err);
    return { errorMessage: "Something went wrong" };
  }
};

export const QuizDataProvider = ({ children }: any) => {
  const [quizData, setQuizData] = useState<QUIZDATA | null>(null);
  const [error, setError] = useState<SERVERERROR | null>(null);

  useEffect(() => {
    (async function () {
      const quizData = await getQuizData();
      if ("data" in quizData) {
        return setQuizData(quizData.data);
      }
      return setError(error);
    })();
  }, []);

  console.log("STate", quizData);

  return (
    <QuizDataContext.Provider value={quizData}>
      {children}
    </QuizDataContext.Provider>
  );
};

export const useQuizData = () => {
  return useContext(QuizDataContext);
};
