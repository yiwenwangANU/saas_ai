import {
  AdjustmentsHorizontalIcon,
  InboxArrowDownIcon,
  UserPlusIcon,
} from "@heroicons/react/16/solid";
import Button from "../ui/Button";

const Dashboard = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col gap-4 items-center bg-gradient-to-r from-emerald-400 to-emerald-600 mx-20 rounded-xl py-10 my-10">
        <div className="text-white text-4xl font-bold">
          Personalized AI Meal Plans
        </div>
        <div className="text-white text-2xl">
          Let our AI do the planning. You forcus on cooking and enjoying!
        </div>
        <div className="py-4">
          <Button variant="getStart">Get Started</Button>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center py-20">
        <div className="text-black font-bold text-4xl">How It Works</div>
        <div className="text-xl text-gray-800">
          Follow these simple steps to get your personalized meal plan
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-4">
          <UserPlusIcon className="w-20 text-white bg-emerald-500 rounded-full p-4" />
          <div className="text-2xl text-gray-800">Create an Account</div>
          <div className="text-xl text-gray-600">
            Sign up or sign in to access your personalized meal plans.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <AdjustmentsHorizontalIcon className="w-20 text-white bg-emerald-500 rounded-full p-4" />
          <div className="text-2xl text-gray-800">Set Your Preferences</div>
          <div className="text-xl text-gray-600">
            Input your dietary preferences and goals to tailor your meal plans.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <InboxArrowDownIcon className="w-20 text-white bg-emerald-500 rounded-full p-4" />
          <div className="text-2xl text-gray-800">Receive Your Meal Plan</div>
          <div className="text-xl text-gray-600">
            Get your customized meal plan delivered weekly to your account.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
