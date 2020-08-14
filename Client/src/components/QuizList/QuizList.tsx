import React from "react";
import { Link } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";
import Quiz from "../../models/Quiz";
import AddIcon from "../Icons/AddIcon";
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
      <div className="quiz-list">
        <div className="title-section">
          <h1>
            <span className="ask-text">Ask</span> Sylvan
          </h1>
          <p className="tag-line">THE QUIZ REPOSITORY</p>
        </div>
        <Link className="create-quiz-link" to="/createQuiz">
          Create Quiz<AddIcon className="add-icon"></AddIcon>
        </Link>
        <div className="list">
          <hr />
          {this.state.quizs.map((quiz: Quiz, i) => {
            return <QuizCard key={i} name={quiz.name} desc={quiz.desc} id={quiz.id}></QuizCard>;
          })}
        </div>
      </div>
    );
  }
}

export default QuizList;
