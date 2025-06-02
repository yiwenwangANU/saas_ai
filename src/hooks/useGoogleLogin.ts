import { useMutation } from "@tanstack/react-query";
import { loginWithGoogle } from "../api/apiAuth";
import { toast } from "react-toastify";
import { useModalContext } from "../contexts/ModalContext";
import { useAuthContext } from "../contexts/AuthContext";

const useGoogleLogin = () => {
  const { handleCloseModal } = useModalContext();
  const { handleLogin } = useAuthContext();
  return useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: (token) => {
      toast.success("User login successfully!");
      handleLogin(token);
      handleCloseModal();
    },
    onError: (error) => {
      console.error("Error logining in:", error);
      toast.error("Error logining in: Google login failed");
    },
  });
};
export default useGoogleLogin;
