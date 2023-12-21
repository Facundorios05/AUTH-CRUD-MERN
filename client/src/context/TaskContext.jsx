import { createContext, useContext, useState } from "react";
import { addTaskRequest, getTasksRequest } from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask debe estar dentro del proveedor TaskContext");
  }

  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async (task) => {
    const res = await addTaskRequest(task);
    console.log(res);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        getTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
