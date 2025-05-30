import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignupLoginList = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-lg font-serif">Log in or sign up in seconds</div>
      <div className="text-xs text-gray-800">
        Use your email or another service to continue
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <Button variant="login">
          <div className="relative flex items-center justify-center">
            <FcGoogle className="absolute left-1" size={20} />
            <span>Continue with Google</span>
          </div>
        </Button>
        <Button variant="login">
          <div className="relative flex items-center justify-center">
            <FaFacebook className="absolute left-1 text-blue-600" size={20} />
            <span>Continue with Facebook</span>
          </div>
        </Button>
        <Button variant="signup">Continue with Email</Button>
      </div>
    </div>
  );
};

export default SignupLoginList;
