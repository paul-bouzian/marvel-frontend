import { Link } from "react-router-dom";

const NavButtons = () => {
  return (
    <nav className="flex px-6 justify-center items-center max-w-7xl m-auto gap-36 py-4 text-xs">
      <Link to="/characters">
        <div className="group relative hover:cursor-pointer">
          <span className="uppercase font-avengers">Personnages</span>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-500 transition-all group-hover:w-full"></span>
        </div>
      </Link>
      <Link to="/comics">
        <div className="group relative hover:cursor-pointer">
          <span className="uppercase font-avengers">Comics</span>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-500 transition-all group-hover:w-full"></span>
        </div>
      </Link>
    </nav>
  );
};

export default NavButtons;
