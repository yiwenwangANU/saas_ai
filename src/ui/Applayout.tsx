import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Applayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Applayout;
