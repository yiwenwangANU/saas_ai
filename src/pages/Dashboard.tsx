import Button from "../ui/Button";

const Dashboard = () => {
  return (
    <div className="pt-10">
      <div className="flex flex-col gap-2 items-center ">
        <div>Personalized AI Meal Plans</div>
        <div>
          Let our AI do the planning. You forcus on cooking and enjoying!
        </div>
        <Button>Get Start</Button>
      </div>
    </div>
  );
};

export default Dashboard;
