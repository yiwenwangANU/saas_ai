import { Link } from "react-router";
import Button from "./Button";
import { useModalContext } from "../contexts/ModalContext";
import ModalWindow from "./ModalWindow";
import Signup from "./SignupForm";
import SignupLoginList from "./SignupLoginList";
import { useAuthContext } from "../contexts/AuthContext";

const NavBar = () => {
  const { handleOpenModal } = useModalContext();
  const { isLoggin, username, handleLogout } = useAuthContext();
  const handleLogin = () => {
    handleOpenModal(<SignupLoginList />);
  };
  const handleSignup = () => {
    handleOpenModal(<Signup />);
  };
  return (
    <>
      <nav>
        <div className="flex flex-row justify-between w-full bg-white items-center ">
          <div className="flex flex-row items-center gap-4 text-gray-800 text-sm">
            <Link to={"/"}>
              <img className="w-28 px-7 py-3" src="logo.png" alt="logo" />
            </Link>
            <Link to={"subscription"}>
              <div className="rounded px-4 py-2 text-lg hover:bg-gray-100 cursor-pointer">
                Subscription
              </div>
            </Link>
            <Link to={"mealplan"}>
              <div className="rounded px-4 py-2 text-lg hover:bg-gray-100 cursor-pointer">
                meal plan
              </div>
            </Link>
            <div className="rounded px-4 py-2 text-lg hover:bg-gray-100 cursor-pointer">
              Items 3
            </div>
          </div>
          <div className="flex flex-row items-center gap-7 text-black px-20">
            {isLoggin && username ? (
              <>
                <div className="font-semibold">{username.split(" ")[0]}</div>
                <Button variant="login" onClick={handleLogout}>
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Button variant="login" onClick={handleLogin}>
                  Log in
                </Button>
                <Button variant="signup" onClick={handleSignup}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>
      <ModalWindow />
    </>
  );
};

export default NavBar;
