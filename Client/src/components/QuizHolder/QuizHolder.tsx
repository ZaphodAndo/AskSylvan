import React from "react";
import { RouteComponentProps } from "react-router";
import Quiz from "../../models/Quiz";
import QuizContent from "../../models/QuizContent";
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import ProgressBar from "../ProgressBar/ProgressBar";
import QuizResults from "../QuizResults/QuizResults";
import "./QuizHolder.scss";

interface QuizHolderProps extends RouteComponentProps<{ id: string }, {}, {}> {}

type QuizHolderState = {
  quiz: Quiz;
  error: null;
  finished: boolean;
  response: string;
};

class QuizHolder extends React.Component<QuizHolderProps, QuizHolderState> {
  public state = {
    quiz: { id: "", name: "", desc: "", quizBody: [] },
    error: null,
    finished: false,
    response: ""
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

  public setResponse = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    this.setState({ response: e.currentTarget.value });
  };

  public changeQuestion = (id: number, next: boolean) => {
    let quiz = this.state.quiz;

    quiz.quizBody.map((quizContent: QuizContent) => {
      if (quizContent.id === id) {
        quizContent.isHidden = true;

        if (this.state.response !== "") {
          quizContent.response = this.state.response;
          this.setState({ response: "" });
        }

        return quiz;
      } else {
        return quiz;
      }
    });

    next ? (id = id + 1) : (id = id - 1);

    quiz.quizBody.map((quizContent: QuizContent, i) => {
      if (quizContent.id === id) {
        quizContent.isHidden = false;
        return quiz;
      } else {
        return quiz;
      }
    });

    const numOfQuestions = quiz.quizBody.length;
    if (numOfQuestions === id) {
      this.setState({ finished: true });
    }

    this.setState({ quiz: quiz });
  };

  public render() {
    if (this.state.finished) {
      return <QuizResults quiz={this.state.quiz} />;
    } else {
      return (
        <>
          {this.state.quiz.quizBody.map((quizContent: QuizContent, i) => {
            if (!quizContent.isHidden) {
              return (
                <div className="quiz-holder" key={i}>
                  <div className="content">
                    <h1>{quizContent.question}</h1>
                    <textarea defaultValue={quizContent.response} onInput={this.setResponse} />
                    <div className="controls">
                      {quizContent.id === 0 ? null : (
                        <button className="back-btn" onClick={() => this.changeQuestion(quizContent.id, false)}>
                          <ArrowLeftIcon className="arrow-icon" />
                          Back
                        </button>
                      )}
                      <button className="next-btn" onClick={() => this.changeQuestion(quizContent.id, true)}>
                        Next
                        <ArrowRightIcon className="arrow-icon" />
                      </button>
                    </div>
                  </div>
                  <ProgressBar quiz={this.state.quiz} currentQuestion={quizContent.id} />
                </div>
              );
            }
          })}
        </>
      );
    }
  }
}

export default QuizHolder;
