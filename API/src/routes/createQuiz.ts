import fs from "fs";
import { v4 } from "uuid";
import { Response, Request } from "express";

const dir = __dirname.replace("/dist/src/routes", "");

const createQuiz = (req: Request, res: Response) => {
  fs.readFile(dir + "/" + "quiz.json", "utf8", (err, data) => {
    let quizs = JSON.parse(data);

    req.body.id = v4();

    quizs.push(req.body);
    quizs = JSON.stringify(quizs);

    fs.writeFile(dir + "/" + "quiz.json", quizs, (error) => {
      if (error) {
        console.log(error);
      }
    });

    const msg = JSON.stringify({ Message: "Created quiz" });
    res.send(msg);
  });
};

export default createQuiz;
