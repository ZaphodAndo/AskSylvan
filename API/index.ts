import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import createQuiz from "./src/routes/createQuiz";
import getQuiz from "./src/routes/getQuiz";
import listQuizs from "./src/routes/listQuizs";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = app.listen(8081, function () {
  console.log("App running");
});

app.post("/createQuiz", createQuiz);
app.get("/getQuiz/:id", getQuiz);
app.get("/listQuizs", listQuizs);
