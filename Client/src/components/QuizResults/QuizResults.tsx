import React from "react";
import confetti from "canvas-confetti";
import Quiz from "../../models/Quiz";
import QuizContent from "../../models/QuizContent";
import "./QuizResults.scss";

type QuizResultsProps = {
  quiz: Quiz;
};

class QuizResults extends React.Component<QuizResultsProps> {
  public confetti = () => {
    const duration = 15 * 500;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
      );
      confetti(
        Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
      );
    }, 300);
  };

  public render() {
    this.confetti();
    return (
      <div className="quiz-results">
        <h1>{this.props.quiz.name}</h1>
        {this.props.quiz.quizBody.map((quizContent: QuizContent, i) => {
          return (
            <div className="question-section" key={i}>
              <div className="divider">
                <h2>Q{i + 1}</h2>
                <hr />
              </div>
              <h3>Question</h3>
              <p>{quizContent.question}</p>
              <h3>Answer</h3>
              <p>{quizContent.answer}</p>
              <h3>Your Response</h3>
              <p>{quizContent.response ? quizContent.response : "(╯°□°）╯︵ ┻━┻"}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default QuizResults;
