import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../api/apiAuth";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

type ErrorResponse = {
  message?: string;
  error?: string;
};

const useSignup = () => {
  return useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      toast.success("User created successfully!");
    },
    onError: (error: AxiosError) => {
      console.error("Error signing up:", error);
      const data = error.response?.data as ErrorResponse;
      const message =
        data?.message || data?.error || error.message || "Error signing up";
      toast.error("Error signing up: " + message);
    },
  });
};
export default useSignup;
