import { useMutation } from "@tanstack/react-query";
import { LoginResponse, loginUser } from "../api/apiAuth";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useModalContext } from "../contexts/ModalContext";
import { useAuthContext } from "../contexts/AuthContext";
import { ErrorResponse } from "./useSignup";

const useLogin = () => {
  const { handleCloseModal } = useModalContext();
  const { handleLogin } = useAuthContext();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data: LoginResponse) => {
      const { token, message } = data;
      toast.success(message);
      handleLogin(token);
      handleCloseModal();
    },
    onError: (error: AxiosError) => {
      console.error("Error logining in:", error);
      // axios will wrap backend error in error.response.data
      const data = error.response?.data as ErrorResponse;
      const message = data?.message || error.message || "Error signing up";
      toast.error("Error signing up: " + message);
    },
  });
};
export default useLogin;
