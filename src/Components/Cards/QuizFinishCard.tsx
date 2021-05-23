type QUIZ_FINISH_CARD_PROPS = {
  question: string;
  selectedOption: string;
  correctOption: any;
};

export default function QuizFinishCard({
  question,
  selectedOption,
  correctOption,
}: QUIZ_FINISH_CARD_PROPS) {
  console.log(
    "============================\n ============================\n",
    "\nQuestion",
    question,
    "\nSelectedOption",
    selectedOption,
    "\nCorrect Option",
    correctOption,
    "============================\n ============================\n"
  );
  return (
    <div className="quizFinishCard">
      <h1>{question}</h1>
      <h2>You Selected {selectedOption}</h2>
      <h2>Correct Option {correctOption}</h2>
    </div>
  );
}
