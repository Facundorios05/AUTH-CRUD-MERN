import { useForm } from "react-hook-form";

import { useAuth } from "../context/AuthConext";

function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const { singup, user } = useAuth();
  
  console.log(user)
  const onSubmit = handleSubmit(async (values) => {
    singup(values)
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="username"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
