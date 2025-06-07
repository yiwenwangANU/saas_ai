import Button from "../ui/Button";

const Dashboard = () => {
  return (
    <div className="pt-10">
      <div className="flex flex-col gap-4 items-center bg-gradient-to-r from-emerald-400 to-emerald-600 mx-20 rounded-b-xl py-3">
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
    </div>
  );
};

export default Dashboard;
