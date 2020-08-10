import React from "react";
import QuizContentBlock from "../QuizContentBlock/QuizContentBlock";
import { RouteChildrenProps } from "react-router-dom";

type QuizContent = {
  question: string;
  answer: string;
};

type QuizBuilderState = {
  name: string;
  desc: string;
  quizBody: Array<QuizContent>;
};

interface QuizBuilderProps extends RouteChildrenProps {}

class QuizBuilder extends React.Component<QuizBuilderProps> {
  public state: QuizBuilderState = {
    name: "",
    desc: "",
    quizBody: []
  };

  public onNameInput = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    this.setState({ name: newValue });
  };

  public onDescriptionInput = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    this.setState({ desc: newValue });
  };

  public addQuizContent = () => {
    let newQuizBody = this.state.quizBody;
    const newQuizContent = { question: "", answer: "" };
    newQuizBody.push(newQuizContent);
    this.setState({ quizBody: newQuizBody });
  };

  public updateQuizContent = (index: number, newQuizContent: QuizContent) => {
    const newQuizBody = this.state.quizBody.map((quizContent, i) => {
      if (i === index) {
        return (quizContent = newQuizContent);
      } else {
        return quizContent;
      }
    });

    this.setState({ quizBody: newQuizBody });
  };

  public handleSubmit = () => {
    fetch("http://localhost:8081/createQuiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).catch((error) => {
      console.error("Error: ", error);
    });

    this.props.history.push("/");
  };

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Name" value={this.state.name} onChange={this.onNameInput}></input>
        <input placeholder="Description" value={this.state.desc} onChange={this.onDescriptionInput}></input>
        {this.state.quizBody.map((quizContent, i) => (
          <QuizContentBlock key={i} index={i} onUpdate={this.updateQuizContent}></QuizContentBlock>
        ))}
        <button type="button" onClick={this.addQuizContent}>
          Add QuizContent
        </button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default QuizBuilder;
