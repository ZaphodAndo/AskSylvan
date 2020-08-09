import fs from "fs";
import { Response, Request } from "express";
import Quiz from "../models/Quiz";

const dir = __dirname.replace("/dist/src/routes", "");

const getQuiz = (req: Request, res: Response) => {
  fs.readFile(dir + "/" + "quiz.json", "utf8", (err, data) => {
    let quizs = JSON.parse(data);
    let selectedQuiz = {};

    quizs.map((quiz: Quiz) => {
      if (quiz.id === req.params.id) {
        selectedQuiz = quiz;
      }
    });
    selectedQuiz = JSON.stringify(selectedQuiz);
    res.end(selectedQuiz);
  });
};

export default getQuiz;
