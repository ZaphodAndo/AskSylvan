import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import QuizList from "../QuizList/QuizList";
import QuizView from "../QuizView/QuizView";
import QuizBuilder from "../QuizBuilder/QuizBuilder";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={QuizList} />
          <Route path="/quiz/:id" exact component={QuizView} />
          <Route path="/createQuiz" exact component={QuizBuilder} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
