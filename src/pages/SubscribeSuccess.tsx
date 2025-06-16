import { useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

const SubscribeSuccess = () => {
  const { isLoggin, email } = useAuthContext();
  const navigate = useNavigate();
  if (!isLoggin || !email) navigate("/");
  return <div>Subscribe_success Page</div>;
};

export default SubscribeSuccess;
