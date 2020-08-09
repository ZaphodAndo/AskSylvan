import QuizMeme from "./QuizMeme";

type Quiz = {
  id: string;
  name: string;
  desc: string;
  quizBody: Array<QuizMeme>;
};

export default Quiz;
