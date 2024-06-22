import { useNavigate } from "react-router-dom";
import Dropdown from "../../ui/DropDown";

const ConnectButtons = ({
  isLoggedIn,
  user,
  setIsLoggedIn,
  setUser,
  setIsMenuOpen,
}) => {
  const navigate = useNavigate();

  return isLoggedIn && user ? (
    <Dropdown
      user={user}
      setIsLoggedIn={setIsLoggedIn}
      setUser={setUser}
      setIsMenuOpen={setIsMenuOpen}
    />
  ) : (
    <div
      className={`flex h-full items-center border-x border-slate-700 px-2 font-avengers text-xs max-sm:hidden sm:gap-2 ${
        isLoggedIn ? "hidden" : ""
      }`}
    >
      <button
        className="group relative overflow-hidden rounded-md py-2 text-white sm:px-4"
        onClick={() => navigate("/login")}
      >
        <span className="absolute inset-0 w-full -translate-x-full-more transform bg-red-600 transition-transform duration-500 group-hover:translate-x-0"></span>
        <span className="relative z-10">Login</span>
      </button>
      <button
        className="group relative overflow-hidden rounded-md py-2 text-white sm:px-4"
        onClick={() => navigate("/signup")}
      >
        <span className="absolute inset-0 w-full -translate-x-full-more transform bg-red-600 transition-transform duration-500 group-hover:translate-x-0"></span>
        <span className="relative z-10">Join</span>
      </button>
    </div>
  );
};

export default ConnectButtons;
