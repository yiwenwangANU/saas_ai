import { useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

const Subscribe_success = () => {
  const { isLoggin, email } = useAuthContext();
  const navigate = useNavigate();
  if (!isLoggin || !email) navigate("/");
  return <div>Subscribe_success Page</div>;
};

export default Subscribe_success;
