import { useMutation } from "@tanstack/react-query";
import { LoginResponse, loginWithGoogle } from "../api/apiAuth";
import { toast } from "react-toastify";
import { useModalContext } from "../contexts/ModalContext";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

const useGoogleLogin = () => {
  const { handleCloseModal } = useModalContext();
  const { handleLogin, redirectUrl, handleSetRedirect } = useAuthContext();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: (data: LoginResponse) => {
      const { token, message } = data;
      toast.success(message);
      handleLogin(token);
      handleCloseModal();
      if (redirectUrl) {
        navigate(redirectUrl);
        handleSetRedirect(null);
      }
    },
    onError: (error) => {
      console.error("Error logining in:", error);
      toast.error("Error logining in: Google login failed");
    },
  });
};
export default useGoogleLogin;
