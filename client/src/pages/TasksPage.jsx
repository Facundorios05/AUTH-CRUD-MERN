import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (!tasks.length) return <p>No hay tareas</p>;

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TasksPage;
