import Button from "./Button";
import Login from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useAuthContext } from "../contexts/AuthContext";
import { useModalContext } from "../contexts/ModalContext";

const SignupLoginList = () => {
  const { handleLogin } = useAuthContext();
  const { handleOpenModal, handleCloseModal } = useModalContext();
  const handleEmailLogin = () => {
    handleOpenModal(<Login />);
  };
  const handleGoogleLogin = () => {
    window.open(
      `${import.meta.env.VITE_API_BASE_URL}/auth/google`,
      "_blank",
      "width=500,height=600"
    );

    window.addEventListener("message", (event) => {
      if (event.origin !== `${import.meta.env.VITE_API_BASE_URL}`) return;
      const { token } = event.data;
      if (token) {
        handleLogin(token);
        handleCloseModal();
      }
    });
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
