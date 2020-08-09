import React from "react";
import QuizCard from "../QuizCard/QuizCard";
import QuizMeme from "../../models/QuizMeme";
import "./QuizList.scss";

type QuizType = {
  id: string;
  name: string;
  desc: string;
  quizBody: Array<QuizMeme>;
};

class QuizList extends React.Component {
  public state = {
    quizs: [],
    error: null
  };

  public componentDidMount() {
    fetch("http://localhost:8081/listQuizs")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ quizs: result });
        },
        (error) => {
          this.setState({ error: error });
        }
      );
  }

  public render() {
    return (
      <div>
        <h1>
          Ask Sylvan
          <span role="img" aria-label="its sylvan">
            👨‍🦲
          </span>
        </h1>
        <div className="list">
          {this.state.quizs.map((quiz: QuizType, i) => {
            return <QuizCard key={i} name={quiz.name} desc={quiz.desc} id={quiz.id}></QuizCard>;
          })}
        </div>
      </div>
    );
  }
}

export default QuizList;
