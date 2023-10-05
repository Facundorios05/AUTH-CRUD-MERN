//Importations
import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTasksById,
  postTasks,
  deleteTasks,
  updateTasks,
} from "../controllers/task.controllers.js";

const router = Router();

router.post("/tasks", authRequired, postTasks);
router.get("/tasks", authRequired, getTasks);
router.get("/tasks:id", authRequired, getTasksById);
router.put("/tasks", authRequired, updateTasks);
router.delete("/tasks", authRequired, deleteTasks);

export default router;
