import { Navigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

const MealPlan = () => {
  const { isLoggin } = useAuthContext();
  if (!isLoggin) return <Navigate to="/" replace />;
  else
    return (
      <div className="p-40 shadow-2xl grid grid-cols-5 gap-0">
        <div className="bg-emerald-500 text-white flex flex-col gap-6 rounded-l-2xl">
          <div className="text-3xl text-center font-semibold px-0 py-5">
            AI Meal Plan Generator
          </div>
        </div>
        <div className="col-span-4 rounded-r-2xl shadow-2xl">
          <div className="text-emerald-500 text-3xl px-8 py-5 font-bold ">
            Weekly Meal Plan
          </div>
        </div>
      </div>
    );
};

export default MealPlan;
