import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/apiAuth";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useModalContext } from "../contexts/ModalContext";

const useLogin = () => {
  const { handleCloseModal } = useModalContext();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast.success("User login successfully!");
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
