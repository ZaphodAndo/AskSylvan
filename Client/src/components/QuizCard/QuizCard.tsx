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
      <p>{props.name}</p>
      <p>{props.desc}</p>
    </Link>
  );
}

export default QuizCard;
