import { Route, Routes } from "react-router";
import "./App.css";
import Applayout from "./ui/Applayout";
import Profile from "./pages/Profile";
import Subscription from "./pages/Subscription";
import MealPlan from "./pages/MealPlan";
import Dashboard from "./pages/Dashboard";
import Subscribe_success from "./pages/Subscribe_success";

function App() {
  return (
    <Routes>
      <Route element={<Applayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="Subscribe_success" element={<Subscribe_success />} />
        <Route path="mealplan" element={<MealPlan />} />
      </Route>
    </Routes>
  );
}

export default App;
