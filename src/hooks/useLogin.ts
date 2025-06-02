import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/apiAuth";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useModalContext } from "../contexts/ModalContext";
import { useAuthContext } from "../contexts/AuthContext";

const useLogin = () => {
  const { handleCloseModal } = useModalContext();
  const { handleLogin } = useAuthContext();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (token) => {
      toast.success("User login successfully!");
      handleLogin(token);
      handleCloseModal();
    },
    onError: (error) => {
      console.error("Error logining in:", error);
      let message = "Error logining in";
      if (error instanceof AxiosError) {
        message = error.response?.data?.message || error.message || message;
      }
      toast.error("Error logining in: " + message);
    },
  });
};
export default useLogin;
