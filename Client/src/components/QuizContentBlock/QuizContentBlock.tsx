import React from "react";
import "./QuizContentBlock.scss";

type QuizContent = {
  question: string;
  answer: string;
};

type QuizContentBlockProps = {
  index: number;
  onUpdate: (key: number, newQuizContent: QuizContent) => void;
};

class QuizContentBlock extends React.Component<QuizContentBlockProps> {
  public state = {
    question: "",
    answer: ""
  };

  public onQuestionInput = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const newValue = event.currentTarget.value;
    const newQuizContent = { question: newValue, answer: this.state.answer };
    this.props.onUpdate(this.props.index, newQuizContent);
    this.setState({ question: newValue });
  };

  public onAnswerInput = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const newValue = event.currentTarget.value;
    const newQuizContent = { question: this.state.question, answer: newValue };
    this.props.onUpdate(this.props.index, newQuizContent);
    this.setState({ answer: newValue });
  };

  render() {
    return (
      <div className="quiz-content-block">
        <textarea placeholder="Question" value={this.state.question} onChange={this.onQuestionInput}></textarea>
        <textarea placeholder="Answer" value={this.state.answer} onChange={this.onAnswerInput}></textarea>
      </div>
    );
  }
}

export default QuizContentBlock;
