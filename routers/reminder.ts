import { Router } from "express";
import { CreateReminderDTO } from "../dtos/CreateReminderDTO";
import Reminder from "../models/reminder";
const router = Router();
const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.status(201).json(reminders);
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDTO;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).json(reminders);
});

export default router;
