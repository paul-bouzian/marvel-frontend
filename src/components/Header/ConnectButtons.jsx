import { useNavigate } from "react-router-dom";

const ConnectButtons = ({ isLoggedIn, user }) => {
  const navigate = useNavigate();

  return isLoggedIn && user ? (
    <div className="flex h-full items-center gap-2 py-2 max-sm:hidden">
      <img
        src={user ? user.avatar : ""}
        alt="avatar"
        className={`h-full rounded-full ${user ? "block" : "hidden"}`}
      />
      <span className="font-avengers text-xs text-white">{user.username}</span>
    </div>
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
