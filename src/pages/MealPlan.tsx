import { Navigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";
import { useModalContext } from "../contexts/ModalContext";
import SignupLoginList from "../ui/SignupLoginList";
import { useEffect } from "react";

const MealPlan = () => {
  const { isLoggin } = useAuthContext();
  const { handleOpenModal } = useModalContext();

  useEffect(() => {
    if (!isLoggin) handleOpenModal(<SignupLoginList />);
  }, [isLoggin, handleOpenModal]);

  if (!isLoggin) return <Navigate to="/" replace />;
  else return <div>MealPlan Page</div>;
};

export default MealPlan;
