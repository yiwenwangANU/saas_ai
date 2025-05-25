import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";

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

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div className="text-black">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-4 flex flex-col gap-2 items-left">
          <label>Email</label>
          <input
            {...register("email")}
            className="border-green-300 border-2 rounded-xl px-1  focus:border-green-300 focus:outline-none"
          />

          <label>Password</label>
          <input
            {...register("password", { required: true })}
            className="border-green-300 border-2 rounded-xl px-1  focus:border-green-300 focus:outline-none"
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <span>This field is required</span>}

          <div className="flex justify-end pt-3">
            <Button variant="login">Login</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
