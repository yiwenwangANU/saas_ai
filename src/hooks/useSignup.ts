import { useMutation } from "@tanstack/react-query";
import { SignupResponse, signupUser } from "../api/apiAuth";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useModalContext } from "../contexts/ModalContext";

export type ErrorResponse = {
  status?: number;
  message?: string;
  data?: string;
};

const useSignup = () => {
  const { handleCloseModal } = useModalContext();
  return useMutation({
    mutationFn: signupUser,
    onSuccess: (data: SignupResponse) => {
      toast.success(data.message);
      handleCloseModal();
    },
    onError: (error: AxiosError) => {
      console.error("Error signing up:", error);
      // axios will wrap backend error in error.response.data
      const data = error.response?.data as ErrorResponse;
      const message = data?.message || error.message || "Error signing up";
      toast.error("Error signing up: " + message);
    },
  });
};
export default useSignup;
