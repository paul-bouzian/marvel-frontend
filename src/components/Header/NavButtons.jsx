import { Link, useLocation, useNavigate } from "react-router-dom";

const NavButtons = ({ isLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isInCharactersPage = location.pathname === "/characters";
  const isInComicsPage = location.pathname === "/comics";
  const isInFavoritesPage = location.pathname === "/favorites";

  return (
    <div className="m-auto max-w-sm">
      <nav className="flex items-center justify-between px-6 py-4 text-xs max-sm:text-[11px] max-mini:text-[9px]">
        <Link to="/characters">
          <div className="group relative hover:cursor-pointer">
            <span className="font-avengers uppercase">Personnages</span>
            <span
              className={`absolute -bottom-1 left-0 h-1 w-0 bg-red-500 transition-all group-hover:w-full ${isInCharactersPage && "w-full"}`}
            ></span>
          </div>
        </Link>
        <Link to="/comics">
          <div className="group relative hover:cursor-pointer">
            <span className="font-avengers uppercase">Comics</span>
            <span
              className={`absolute -bottom-1 left-0 h-1 w-0 bg-red-500 transition-all group-hover:w-full ${isInComicsPage && "w-full"}`}
            ></span>
          </div>
        </Link>
        <div
          className="group relative hover:cursor-pointer"
          onClick={() => {
            if (!isLoggedIn) {
              navigate("/login");
            } else {
              navigate("/favorites");
            }
          }}
        >
          <span className="font-avengers uppercase">Favoris</span>
          <span
            className={`absolute -bottom-1 left-0 h-1 w-0 bg-red-500 transition-all group-hover:w-full ${isInFavoritesPage && "w-full"}`}
          ></span>
        </div>
      </nav>
    </div>
  );
};

export default NavButtons;
