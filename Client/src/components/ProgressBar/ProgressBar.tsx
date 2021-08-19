import React from "react";
import Quiz from "../../models/Quiz";
import Filler from "./Filler/Filler";
import "./ProgressBar.scss";

type ProgressBarProps = {
  quiz: Quiz;
  currentQuestion: number;
};

export class ProgressBar extends React.Component<ProgressBarProps> {
  public render() {
    const numOfQuestions = this.props.quiz.quizBody.length;
    const currentQuestion = this.props.currentQuestion + 1;
    const value = (currentQuestion / numOfQuestions) * 100;

    return (
      <div className="progress-bar">
        <Filler percentage={value} />
      </div>
    );
  }
}

export default ProgressBar;
