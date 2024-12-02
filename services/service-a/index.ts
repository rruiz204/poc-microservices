import express from "express";

import ApiRouter from "./src/Router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/service-a", ApiRouter);

app.listen(3000, () => {
  console.log(`Server is listening at http://localhost:3000`);
});