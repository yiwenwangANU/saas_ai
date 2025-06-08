import { useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

const useLogout = () => {
  const navigate = useNavigate();
  const { handleLogout } = useAuthContext();
  return () => {
    handleLogout();
    navigate("/");
  };
};

export default useLogout;
