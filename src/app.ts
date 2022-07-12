import express from "express";
import "reflect-metadata";
import "express-async-errors";

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is running!`);
});
