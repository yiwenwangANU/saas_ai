import Button from "./Button";
import Login from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useModalContext } from "../contexts/ModalContext";
import useGoogleLogin from "../hooks/useGoogleLogin";

const SignupLoginList = () => {
  const { handleOpenModal } = useModalContext();
  const mutation = useGoogleLogin();
  const handleEmailLogin = () => {
    handleOpenModal(<Login />);
  };
  const handleGoogleLogin = () => {
    mutation.mutate();
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-2xl font-serif">Log in or sign up in seconds</div>
      <div className="text text-gray-800">
        Use your email or another service to continue
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <Button variant="login" onClick={handleGoogleLogin}>
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
        <Button variant="signup" onClick={handleEmailLogin}>
          Continue with Email
        </Button>
      </div>
    </div>
  );
};

export default SignupLoginList;
