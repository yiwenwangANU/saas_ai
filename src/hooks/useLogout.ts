import { useNavigate } from "react-router";

const useLogout = () => {
  const navigate = useNavigate();

  return () => {
    localStorage.removeItem("token");
    navigate("/");
  };
};

export default useLogout;
