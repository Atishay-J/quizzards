import { useEffect, useState } from "react";
import { useQuiz } from "../../Context/quizContext";

export default function Timer({ curQuestion }: any) {
  const [timer, setTimer] = useState<number>(15);
  const { quizDispatch } = useQuiz();

  //   console.log("=======CUR QUESTION", curQuestion);

  useEffect(() => {
    console.log("Timer is running");
    let myInterval = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  useEffect(() => {
    setTimer(15);
    console.log("Timer REseett");
  }, [curQuestion._id]);

  useEffect(() => {
    if (timer === 0) {
      quizDispatch({ type: "NEXT_QUESTION" });
      setTimer(15);
    }
  }, [quizDispatch, timer]);

  return <h1>Timer: {timer}</h1>;
}
