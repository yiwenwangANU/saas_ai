import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import useSignup from "../hooks/useSignup";

type Inputs = {
  email: string;
  password: string;
  name: string;
};
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const mutation = useSignup();

  const onSubmit: SubmitHandler<Inputs> = ({ email, password, name }) => {
    mutation.mutate({
      email: email,
      password: password,
      name: name,
    });
  };

  return (
    <div className="text-black">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-4 flex flex-col gap-1 items-left">
          <label className="font-semibold text-gray-700">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              maxLength: {
                value: 40,
                message: "Email must be at most 40 characters long",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            className="border-gray-300 border-1 rounded px-2 py-1 w-80 focus:border-black focus:outline-none"
            placeholder="Enter email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          <label className="font-semibold text-gray-700">Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              maxLength: {
                value: 20,
                message: "Password should contain 5-20 chars",
              },
              minLength: {
                value: 5,
                message: "Password should contain 5-20 chars",
              },
            })}
            type="password"
            className="border-gray-300 border-1 rounded px-2 py-1 w-80 focus:border-black focus:outline-none"
            placeholder="Enter password"
          />
          {/* errors will return when field validation fails  */}
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}

          <label className="font-semibold text-gray-700">Nickname</label>
          <input
            {...register("name", {
              required: "Nickname is required",
              maxLength: {
                value: 20,
                message: "Nickname should contain 5-20 chars",
              },
              minLength: {
                value: 5,
                message: "Nickname should contain 5-20 chars",
              },
            })}
            className="border-gray-300 border-1 rounded px-2 py-1 w-80 focus:border-black focus:outline-none"
            placeholder="Enter nickname"
          />
          {/* errors will return when field validation fails  */}
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
          <br />
          <Button variant="signup">Create User</Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
