import React from "react";
import { Link } from "react-router-dom";
import "./QuizCard.scss";

type QuizCardProps = {
  name: string;
  desc: string;
  id: string;
};

function QuizCard(props: QuizCardProps) {
  return (
    <Link className="quiz" to={"/quiz/" + props.id}>
      <div className="quiz-content">
        <p className="name">{props.name}</p>
        <p className="desc">{props.desc}</p>
      </div>
      <hr />
    </Link>
  );
}

export default QuizCard;
