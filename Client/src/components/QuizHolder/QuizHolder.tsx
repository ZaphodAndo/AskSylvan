import React from "react";
import { RouteComponentProps } from "react-router";
import Quiz from "../../models/Quiz";
import QuizContent from "../../models/QuizContent";
import QuizResults from "../QuizResults/QuizResults";

interface QuizHolderProps extends RouteComponentProps<{ id: string }, {}, {}> {}

type QuizHolderState = {
  quiz: Quiz;
  error: null;
  finished: boolean;
};

class QuizHolder extends React.Component<QuizHolderProps, QuizHolderState> {
  public state = {
    quiz: { id: "", name: "", desc: "", quizBody: [] },
    error: null,
    finished: false
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

  public changeQuestion = (id: number, next: boolean) => {
    let quiz = this.state.quiz;

    quiz.quizBody.map((quizContent: QuizContent) => {
      if (quizContent.id === id) {
        quizContent.isHidden = true;
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
      return <QuizResults />;
    } else {
      return (
        <>
          {this.state.quiz.quizBody.map((quizContent: QuizContent, i) => {
            if (!quizContent.isHidden) {
              return (
                <div className="quiz-holder" key={i}>
                  <h1>{quizContent.question}</h1>
                  <textarea></textarea>
                  <div className="controls">
                    {quizContent.id === 0 ? null : (
                      <button onClick={() => this.changeQuestion(quizContent.id, false)}>Back</button>
                    )}
                    <button onClick={() => this.changeQuestion(quizContent.id, true)}>forward</button>
                  </div>
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
