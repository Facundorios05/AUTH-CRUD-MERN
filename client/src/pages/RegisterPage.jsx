import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthConext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    singup(values);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {registerErrors.map((error, i) => (
        <p className="bg-red-500 p-2 text-white" key={i}>{error}</p>
      ))}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="username"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {errors.username && (
          <p className="text-red-500 text-xs italic">
            Username is required for the registration
          </p>
        )}
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">
            {" "}
            Email is required for the registration{" "}
          </p>
        )}
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic">
            {" "}
            Password is required for the registration{" "}
          </p>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
