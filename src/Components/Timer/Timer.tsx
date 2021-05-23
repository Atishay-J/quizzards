import { useEffect, useState } from "react";
import { useQuiz } from "../../Context/quizContext";

export default function Timer({ curQuestion }: any) {
  const [timer, setTimer] = useState<number>(15);
  const { quizDispatch } = useQuiz();

  useEffect(() => {
    let myInterval = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  useEffect(() => {
    setTimer(15);
  }, [curQuestion._id]);

  useEffect(() => {
    if (timer === 0) {
      quizDispatch({ type: "NEXT_QUESTION" });
      setTimer(15);
    }
  }, [quizDispatch, timer]);

  return <h1 className="timerText">Timer: {timer}</h1>;
}
