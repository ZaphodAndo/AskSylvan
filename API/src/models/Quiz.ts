import QuizContent from "./QuizContent";

type Quiz = {
  id: string;
  name: string;
  desc: string;
  quizBody: Array<QuizContent>;
};

export default Quiz;
