//Importations 
import Task from "../models/Task.model.js";

//Create a new Task logically
export const createTask = async (req, res) => {
  const { title, description, date } = req.body;

  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id
  });

  const savedTask = await newTask.save();
  res.json(savedTask);
};
//Get the user tasks Logically
export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id
  }).populate('user')
  res.json(tasks);
};

//Get a task for ID Logically
export const getTasksById = async (req, res) => {
  const task = await Task.findById(req.params.id).populate('user');
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

//Update a task with ID Logically
export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

//Delete a task with ID Logically
export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.sendStatus(204).json({ message: "Task deleted"});
};
