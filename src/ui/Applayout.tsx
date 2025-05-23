import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Applayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Applayout;
