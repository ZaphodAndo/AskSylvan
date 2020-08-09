import React from "react";
import { RouteComponentProps } from "react-router";
import QuizBlock from "../QuizBlock/QuizBlock";
import Quiz from "../../models/Quiz";
import QuizMeme from "../../models/QuizMeme";
import "./QuizView.scss";

interface QuizProps extends RouteComponentProps<{ id: string }, {}, {}> {}

type QuizState = {
  quiz: Quiz;
  error: null;
};

class QuizView extends React.Component<QuizProps, QuizState> {
  public state = {
    quiz: { id: "", name: "", desc: "", quizBody: [] },
    error: null
  };

  public componentDidMount() {
    fetch(`http://localhost:8081/getQuiz/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ quiz: result });
        },
        (error) => {
          this.setState({ error: error });
        }
      );
  }

  public showNextQuestion = (id: number) => {
    id = id + 1;
    let quiz = this.state.quiz;

    quiz.quizBody.map((quizMeme: QuizMeme, i) => {
      if (quizMeme.id === id) {
        quizMeme.isHidden = false;
        return quiz;
      } else {
        return quiz;
      }
    });

    this.setState({ quiz: quiz });
  };

  public render() {
    return (
      <div className="quiz-content">
        {this.state.quiz.quizBody.map((quiz: QuizMeme, i) => {
          if (i === 0) {
            return (
              <QuizBlock
                key={i}
                question={quiz.question}
                answer={quiz.answer}
                id={quiz.id}
                isHidden={false}
                onClick={this.showNextQuestion}
              ></QuizBlock>
            );
          } else {
            return (
              <QuizBlock
                key={i}
                question={quiz.question}
                answer={quiz.answer}
                id={quiz.id}
                isHidden={quiz.isHidden}
                onClick={this.showNextQuestion}
              ></QuizBlock>
            );
          }
        })}
      </div>
    );
  }
}

export default QuizView;
