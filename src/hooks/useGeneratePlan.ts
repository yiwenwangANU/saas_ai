import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { generateMealPlan, MealPlanResponse } from "../api/apiServices";
import { toast } from "react-toastify";
import { ErrorResponse } from "./useCheckout";

const useGeneratePlan = () => {
  return useMutation({
    mutationFn: generateMealPlan,
    onSuccess: async (mealPlanResponse: MealPlanResponse) => {
      const { mealPlan } = mealPlanResponse;
      console.log(mealPlan);
    },
    onError: (error: AxiosError) => {
      console.error("Error checking out:", error);
      // axios will wrap backend error in error.response.data
      const data = error.response?.data as ErrorResponse;
      const message = data?.message || error.message || "Error checking out";
      toast.error("Error checking out: " + message);
    },
  });
};
export default useGeneratePlan;
