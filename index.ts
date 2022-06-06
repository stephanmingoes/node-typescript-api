import express from "express";
const app = express();
import remindRouter from "./routers/reminder";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/reminders", remindRouter);

app.listen(8000, () => console.log("Server started"));
