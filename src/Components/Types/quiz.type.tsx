export type QUESTION_OPTIONS = {
  _id: string;
  value: string;
  isCorrect: boolean;
};

export type QUESTIONS = {
  _id: string;
  question: string;
  points: number;
  options: QUESTION_OPTIONS[];
};

export type QUIZDATA = [
  {
    _id: string;
    quizTitle: string;
    quizThumbnail: string;
    questions: QUESTIONS[];
  }
];

export type SERVERERROR = {
  errorMessage: string;
};

export type QUIZ_PROPS = {
  _id: string;
  title: string;
  thumbnail: string;
  question: QUESTIONS[];
};

export type QUIZ_CARD_PROPS = {
  question: string;
  options: QUESTION_OPTIONS[];
};

export type USER_QUIZ_DATA = {
  // _id: string;
  question: string;
  answer: string;
  isCorrect: boolean;
  answerId: string;
};

export type QUIZ_STATE = {
  questions: null | QUESTIONS[];
  score: number;
  curQuestion: number;
  userQuizData: USER_QUIZ_DATA[];
};
