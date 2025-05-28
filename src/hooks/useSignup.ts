import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../api/apiAuth";
import { toast } from "react-toastify";

const useSignup = () => {
  return useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      toast.success("User created successfully!");
    },
    onError: (error) => {
      console.error("Error signing up:", error);
      const message = error.message || "Error signing up";
      toast.error("Error signing up: " + message);
    },
  });
};
export default useSignup;
