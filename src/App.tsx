import { Route, Routes } from "react-router";
import "./App.css";
import Signup from "./pages/Signup";
import Applayout from "./ui/Applayout";
import Profile from "./pages/Profile";
import Subscription from "./pages/Subscription";
import MealPlan from "./pages/MealPlan";

function App() {
  return (
    <Routes>
      <Route index element={<Signup />} />
      <Route element={<Applayout />}>
        <Route path="sign-up" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="mealplan" element={<MealPlan />} />
      </Route>
    </Routes>
  );
}

export default App;
