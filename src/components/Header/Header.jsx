import { useState } from "react";
import { Link } from "react-router-dom";
import marvelIcon from "../../../public/marvel-icon.png";
import marvelLogo from "../../assets/img/marvel-logo.svg";
import SearchInput from "../../ui/SearchInput";
import SideMenu from "../../ui/SideMenu";
import ConnectButtons from "./ConnectButtons";
import NavButtons from "./NavButtons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-stone-950 text-white">
      <button
        className={`absolute left-5 top-8 -translate-y-1/2 sm:hidden`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className="fa-solid fa-bars text-xl"></i>
      </button>
      <div
        className={`absolute z-20 -translate-x-full-more transition-transform duration-700 sm:hidden ${isMenuOpen && "translate-x-0"}`}
      >
        <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      <section
        id="banner"
        className="m-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        <ConnectButtons />

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 transform">
          <img
            src={marvelLogo}
            alt="marvel-logo"
            className="h-16 sm:hidden md:block"
          />
          <img
            src={marvelIcon}
            alt="marvel-icon"
            className="hidden h-16 sm:block md:hidden"
          />
        </Link>

        <div className="w-72 max-lg:w-60 max-md:w-52 max-sm:hidden">
          <SearchInput placeholder={"Rechercher"} />
        </div>
      </section>
      <div id="border" className="border-b border-slate-700"></div>
      <NavButtons />
    </header>
  );
};

export default Header;
