import { Link } from "react-router";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav>
      <div className="fixed top-0 flex flex-row justify-between w-full bg-white items-center ">
        <div className="flex flex-row items-center gap-4 text-gray-800 text-sm">
          <Link to={"/"}>
            <img className="w-24 px-7 py-3" src="logo.png" alt="logo" />
          </Link>
          <div className="rounded px-3 py-1 hover:bg-gray-100 cursor-pointer">
            Items 1
          </div>
          <div>Items 2</div>
          <div>Items 3</div>
        </div>
        <div className="flex flex-row gap-5 text-black px-20">
          <Button variant="login">Log in</Button>
          <Button variant="signup">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
