import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Applayout = () => {
  return (
    <div className="grid grid-rows-[auto-1fr]">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Applayout;
