//Importations
import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTasksById,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/task.controllers.js";

const router = Router();

//Tasks Routes Implementation
router.post("/tasks", authRequired, createTask);
router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTasksById);
router.put("/tasks/:id", authRequired, updateTask);
router.delete("/tasks/:id", authRequired, deleteTask);

export default router;
