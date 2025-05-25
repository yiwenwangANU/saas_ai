import { Route, Routes } from "react-router";
import "./App.css";
import Signup from "./pages/Signup";
import Applayout from "./ui/Applayout";
import Profile from "./pages/Profile";
import Subscription from "./pages/Subscription";
import MealPlan from "./pages/MealPlan";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route element={<Applayout />}>
        <Route index element={<Dashboard />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="mealplan" element={<MealPlan />} />
      </Route>
    </Routes>
  );
}

export default App;
