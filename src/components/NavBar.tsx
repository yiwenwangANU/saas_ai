import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <div className="fixed top-0 flex flex-row justify-between w-full bg-white items-center ">
        <img className="w-60 px-20 py-3" src="logo.png" alt="logo" />
        <div className="flex flex-row gap-5 text-black px-20">
          <Link to={"/"}>Home</Link>
          <Link to={"/subscription"}>Subscribe</Link>
          <Link to={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
