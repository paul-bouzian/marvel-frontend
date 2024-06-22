import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import logOut from "../utils/removeUser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({
  user,
  setIsLoggedIn,
  setUser,
  setIsMenuOpen,
}) {
  const navigate = useNavigate();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="flex h-16 items-center gap-2 py-2 max-sm:hidden">
          <img
            src={user ? user.avatar : ""}
            alt="avatar"
            className={`h-full rounded-lg ${user ? "block" : "hidden"}`}
          />
          <span className="font-avengers text-xs text-white">
            {user.username}
          </span>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 transition hover:bg-slate-700 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div
          className="py-1"
          onClick={() => {
            logOut(setIsLoggedIn, setUser);
            setIsMenuOpen(false);
            navigate("/");
          }}
        >
          <MenuItem>
            {({ focus }) => (
              <span
                className={classNames(
                  focus
                    ? "flex cursor-pointer items-center text-white"
                    : "flex items-center text-slate-300",
                  "block px-4 py-2 text-sm",
                )}
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                Logout
              </span>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
