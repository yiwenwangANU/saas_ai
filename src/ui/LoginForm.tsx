import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import useLogin from "../hooks/useLogin";

type Inputs = {
  email: string;
  password: string;
};
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const mutation = useLogin();

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    mutation.mutate({
      email: email,
      password: password,
    });
  };

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div className="text-black">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-4 flex flex-col gap-2 items-left">
          <label htmlFor="email" className="font-semibold text-gray-700">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
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
          <label htmlFor="password" className="font-semibold text-gray-700">
            Password
          </label>
          <input
            {...register("password", { required: "Password is required" })}
            className="border-gray-300 border-1 rounded px-2 py-1 w-80 focus:border-black focus:outline-none"
            placeholder="Enter password"
          />
          {/* errors will return when field validation fails  */}
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
          <br />
          <Button variant="signup">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
