import { useMutation } from "@tanstack/react-query";
import { loginWithGoogle } from "../api/apiAuth";
import { toast } from "react-toastify";
import { useModalContext } from "../contexts/ModalContext";

const useGoogleLogin = () => {
  const { handleCloseModal } = useModalContext();
  return useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: () => {
      toast.success("User login successfully!");
      handleCloseModal();
    },
    onError: (error) => {
      console.error("Error logining in:", error);
      toast.error("Error logining in: Google login failed");
    },
  });
};
export default useGoogleLogin;
