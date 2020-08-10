import React from "react";
import { Link } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";
import Quiz from "../../models/Quiz";
import "./QuizList.scss";

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
        <Link to="/createQuiz">Create Quiz</Link>
        <div className="list">
          {this.state.quizs.map((quiz: Quiz, i) => {
            return <QuizCard key={i} name={quiz.name} desc={quiz.desc} id={quiz.id}></QuizCard>;
          })}
        </div>
      </div>
    );
  }
}

export default QuizList;
