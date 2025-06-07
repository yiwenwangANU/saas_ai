import { Navigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

const MealPlan = () => {
  const { isLoggin } = useAuthContext();
  if (isLoggin) return <div>MealPlan Page</div>;
  else return <Navigate to="/" replace />;
};

export default MealPlan;
