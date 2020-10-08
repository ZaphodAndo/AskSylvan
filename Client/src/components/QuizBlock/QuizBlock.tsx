import React from "react";
import Scroll from "react-scroll";
import DownArrowIcon from "../Icons/DownArrowIcon";
import EyeIcon from "../Icons/EyeIcon";
import "./QuizBlock.scss";

const Element  = Scroll.Element;
const scroller = Scroll.scroller;

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

    scroller.scrollTo('scroll-element', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 200
    });
  };

  public render() {
    if (this.props.isHidden) {
      return "";
    } else {
      return (
        <div className="quiz-block">
          <p className="question">{this.props.question}</p>
          <div className="middle-section">
            <textarea className="quiz-box"></textarea>
            <div className="quiz-box answer-box">
              {this.state.answerIsShown ? (
                this.props.answer
              ) : (
                <div className="reveal-answer" onClick={this.revealAnswer}>
                  <EyeIcon className="eye-icon"></EyeIcon>
                  <p>Reveal Answer</p>
                </div>
              )}
            </div>
          </div>
          <div className="next-question">
            <button className="next-question-btn" onClick={this.onButtonClick}>
              Next
            </button>
            <DownArrowIcon className="down-arrow-icon"></DownArrowIcon>
          </div>
          <Element name="scroll-element"></Element>
        </div>
      );
    }
  }
}

export default QuizBlock;
