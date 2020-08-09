import React from "react";
import "./QuizBlock.scss";

type QuizBlockProps = {
  question: string;
  answer: string;
  id: number;
  isHidden: boolean;
  onClick: (id: number) => void;
};

class QuizBlock extends React.Component<QuizBlockProps> {
  public state = {
    answerIsShown: false
  };

  public revealAnswer = () => {
    this.setState({ answerIsShown: true });
  };

  public onButtonClick = () => {
    this.props.onClick(this.props.id);
  };

  public render() {
    if (this.props.isHidden) {
      return "";
    } else {
      return (
        <div className="quiz-block">
          <p>{this.props.question}</p>
          <div className="middle-section">
            <input></input>
            <p>
              {this.state.answerIsShown ? (
                this.props.answer
              ) : (
                <button onClick={this.revealAnswer}>Reveal Answer</button>
              )}
            </p>
          </div>
          <button onClick={this.onButtonClick}>Next Question</button>
        </div>
      );
    }
  }
}

export default QuizBlock;
