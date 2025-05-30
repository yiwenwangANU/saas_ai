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

  //   console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div className="text-black">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-4 flex flex-col gap-1 items-left">
          <label className="font-semibold text-xs text-gray-700 py-1">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              maxLength: 20,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            className="border-green-500 border-1 rounded-lg px-1 py-1 text-sm focus:border-green-300 focus:outline-none"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
          <label className="font-semibold text-xs text-gray-700 py-1">
            Password
          </label>
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
            className="border-green-500 border-1 rounded-lg px-1 py-1 text-sm focus:border-green-300 focus:outline-none"
          />
          {/* errors will return when field validation fails  */}
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}

          <label className="font-semibold text-xs text-gray-700 py-1">
            Nickname
          </label>
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
            className="border-green-500 border-1 rounded-lg px-1 py-1 text-sm focus:border-green-300 focus:outline-none"
          />
          {/* errors will return when field validation fails  */}
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
          <div className="flex justify-end pt-3">
            <Button variant="login">Create User</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
