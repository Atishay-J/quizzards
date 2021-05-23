import "./quizFinishCard.css";

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
  return (
    <div className="quizFinishCard">
      <h1 className="reviewQue">{question}</h1>
      <h2 className="reviewOption">
        You Selected: <span className="reviewText"> {selectedOption}</span>
      </h2>
      <h2 className="reviewOption">
        Correct Option: <span className="reviewText">{correctOption} </span>
      </h2>
    </div>
  );
}
