import { Link } from "react-router-dom";
import marvelLogo from "../../assets/img/marvel-logo.svg";
import SearchInput from "../../ui/SearchInput";
import ConnectButtons from "./ConnectButtons";

const Header = () => {
  return (
    <header className=" bg-stone-900 text-white">
      <section
        id="banner"
        className="flex px-6 justify-between items-center max-w-7xl m-auto h-16"
      >
        <ConnectButtons />
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
          <img src={marvelLogo} alt="marvel-logo" className="h-16" />
        </Link>
        <SearchInput placeholder={"Rechercher"} />
      </section>
      <div id="border" className="border-b border-slate-700"></div>
      <nav className="flex px-6 justify-center items-center max-w-7xl m-auto gap-36 py-4 text-xs">
        <Link to="/">
          <div className="group relative hover:cursor-pointer">
            <span className="uppercase font-avengers">Personnages</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-500 transition-all group-hover:w-full"></span>
          </div>
        </Link>
        <Link to="/">
          <div className="group relative hover:cursor-pointer">
            <span className="uppercase font-avengers">Comics</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-500 transition-all group-hover:w-full"></span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
