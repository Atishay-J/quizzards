import "./quizCategoryCard.css";

type QUIZ_PROPS = {
  title: string;
  thumbnail: string;
};

export default function QuizCard({ title, thumbnail }: QUIZ_PROPS) {
  return (
    <div className="quizCardContainer">
      <img className="quizCardThumbnail" src={thumbnail} alt="Quiz Thumnail" />
      <h1 className="quizCardTitle">{title}</h1>
    </div>
  );
}
