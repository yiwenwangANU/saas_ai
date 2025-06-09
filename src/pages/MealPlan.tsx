import { Navigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

const MealPlan = () => {
  const { isLoggin } = useAuthContext();
  if (!isLoggin) return <Navigate to="/" replace />;
  else return <div>MealPlan Page</div>;
};

export default MealPlan;
