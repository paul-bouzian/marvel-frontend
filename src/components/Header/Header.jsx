import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import marvelLogo from "../../assets/img/marvel-logo.svg";
import SearchInput from "../../ui/SearchInput";
import SideMenu from "../../ui/SideMenu";
import ConnectButtons from "./ConnectButtons";
import NavButtons from "./NavButtons";
import marvelIcon from "/marvel-icon.png";

const Header = ({
  inputValue,
  setInputValue,
  isLoggedIn,
  setIsLoggedIn,
  user,
  setUser,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className={`relative z-50 w-full bg-stone-950 text-white ${
        location.pathname === "/login" || location.pathname === "/signup"
          ? "hidden"
          : ""
      }`}
    >
      <button
        className={`absolute left-5 top-8 -translate-y-1/2 sm:hidden`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className="fa-solid fa-bars text-xl"></i>
      </button>
      <div
        className={`absolute z-20 -translate-x-full-more transition-transform duration-700 sm:hidden ${isMenuOpen && "translate-x-0"}`}
      >
        <SideMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          user={user}
          setUser={setUser}
        />
      </div>

      <section
        id="banner"
        className="m-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        <ConnectButtons
          isLoggedIn={isLoggedIn}
          user={user}
          setIsLoggedIn={setIsLoggedIn}
          setUser={setUser}
          setIsMenuOpen={setIsMenuOpen}
        />

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
          <SearchInput
            placeholder={"Rechercher"}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
      </section>
      <div id="border" className="border-b border-slate-700"></div>
      <NavButtons isLoggedIn={isLoggedIn} />
    </header>
  );
};

export default Header;
