import express, { Request, Response } from "express";

const app = express();

app.get("/", (re: Request, res: Response) =>
  res.json({ message: "ola mundo" })
);

app.listen(3000, () => console.log("app runnig o port 3000"));
