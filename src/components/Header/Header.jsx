import { Link } from "react-router-dom";
import marvelLogo from "../../assets/img/marvel-logo.svg";
import SearchInput from "../../ui/SearchInput";
import ConnectButtons from "./ConnectButtons";
import NavButtons from "./NavButtons";

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
      <NavButtons />
    </header>
  );
};

export default Header;
