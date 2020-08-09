import fs from "fs";
import { Response, Request } from "express";

const dir = __dirname.replace("/dist/src/routes", "");

const listQuizs = (req: Request, res: Response) => {
  fs.readFile(dir + "/" + "quiz.json", "utf8", (err, data) => {
    res.end(data);
  });
};

export default listQuizs;
