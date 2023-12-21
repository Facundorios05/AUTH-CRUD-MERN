import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { addTask } = useTasks();
  console.log(addTask);

  const onSubmit = handleSubmit((data) => {
    addTask(data);
  });
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <h1>Task Form Page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("title")}
          autoFocus
        />
        <textarea
          rows="3"
          placeholder="Description"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("description")}
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
