import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const Applayout = () => {
  return (
    <div>
      <NavBar />

      <Outlet />
    </div>
  );
};

export default Applayout;
