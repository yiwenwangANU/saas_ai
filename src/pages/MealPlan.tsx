import { Navigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../ui/Button";
import useGeneratePlan from "../hooks/useGeneratePlan";

type Inputs = {
  dietType: string;
  calories: string;
  allergies: string;
  prefer: string;
  snacks: boolean;
  days: string;
};

const MealPlan = () => {
  const { isLoggin } = useAuthContext();
  const { register, handleSubmit } = useForm<Inputs>();
  const {
    mutate,
    isPending,
    data: mealPlan,
    isError,
    isSuccess,
  } = useGeneratePlan();

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
  };

  if (!isLoggin) return <Navigate to="/" replace />;
  else
    return (
      <div className="p-40 shadow-2xl grid grid-cols-5 gap-0">
        <div className="bg-emerald-500 text-white flex flex-col gap-6 rounded-l-2xl py-5">
          <div className="text-3xl text-center font-semibold px-5 ">
            AI Meal Plan Generator
          </div>
          <form
            className="flex flex-col gap-3 px-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <label className="text-lg block py-2" htmlFor="dietType">
                Diet Type
              </label>
              <input
                className="bg-white rounded text-black px-2 py-2 w-full focus:outline-none"
                id="dietType"
                placeholder="e.g. Vegetarian,Keto"
                {...register("dietType", { required: true })}
              />
            </div>
            <div className="w-full">
              <label className="text-lg block py-2" htmlFor="calorie">
                Daily Calorie Goal
              </label>
              <input
                className="bg-white rounded text-black px-2 py-2 w-full focus:outline-none"
                id="calorie"
                placeholder="e.g. 2000"
                {...register("calories", { required: true })}
              />
            </div>
            <div className="w-full">
              <label className="text-lg block py-2" htmlFor="allergies">
                Allergies or Restrictions
              </label>
              <input
                className="bg-white rounded text-black px-2 py-2 w-full focus:outline-none"
                id="allergies"
                placeholder="e.g. Nuts, Dairy, None"
                {...register("allergies", { required: true })}
              />
            </div>
            <div className="w-full">
              <label className="text-lg block py-2" htmlFor="prefer">
                Preferred Cuisine
              </label>
              <input
                className="bg-white rounded text-black px-2 py-2 w-full focus:outline-none"
                id="prefer"
                placeholder="e.g. Italian, Chinese"
                {...register("prefer", { required: true })}
              />
            </div>
            <div className="w-full">
              <input type="checkbox" id="snacks" {...register("snacks")} />
              <label className="text-lg px-2" htmlFor="prefer">
                Include Snacks
              </label>
            </div>
            <input
              type="text"
              hidden
              defaultValue={7}
              id="days"
              {...register("days")}
            />

            <Button variant="mealplan" type="submit" disabled={isPending}>
              {isPending ? "Generating..." : "Generate Plan"}
            </Button>
          </form>
        </div>
        <div className="col-span-4 rounded-r-2xl shadow-2xl bg-gray-50 h-[70vh] overflow-auto">
          <div className="text-emerald-500 text-3xl px-8 py-5 font-bold ">
            Weekly Meal Plan
          </div>
          {isError ? (
            <div>isError</div>
          ) : isPending ? (
            <div>isPending</div>
          ) : isSuccess && mealPlan?.mealPlan ? (
            <div>
              {weekdays.map((day) => {
                if (!mealPlan.mealPlan?.[day])
                  return <div>Something went wrong, please try again!</div>;
                return (
                  <div className="bg-white rounded-2xl px-8 py-5 my-6 mx-8 shadow-xl flex flex-col gap-3 hover:scale-[1.01] duration-75">
                    <div className="text-2xl text-emerald-500 font-bold">
                      {day}
                    </div>
                    <div className="text-lg">
                      <span className="font-bold">Breakfast: </span>
                      {mealPlan.mealPlan?.[day]?.Breakfast}
                    </div>
                    <div className="text-lg">
                      <span className="font-bold">Lunch: </span>
                      {mealPlan.mealPlan?.[day]?.Lunch}
                    </div>
                    <div className="text-lg">
                      <span className="font-bold">Dinner: </span>
                      {mealPlan.mealPlan?.[day]?.Dinner}
                    </div>
                    {!mealPlan.mealPlan?.[day]?.Snacks ? null : (
                      <div className="text-lg">
                        <span className="font-bold">Snacks: </span>
                        {mealPlan.mealPlan?.[day]?.Snacks}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div>Please generate a meal plan to see it here.</div>
          )}
        </div>
      </div>
    );
};

export default MealPlan;
