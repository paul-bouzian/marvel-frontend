const SideMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="flex h-screen w-auto flex-col justify-between border-e border-gray-900 bg-stone-950 font-avengers">
      <div>
        <div className="inline-flex size-16 items-center justify-center">
          <span className="grid size-10 place-content-center rounded-lg text-xs">
            <i
              className="fa-solid fa-bars cursor-pointer text-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></i>
          </span>
        </div>

        <div className="border-t border-gray-400">
          <div className="px-2">
            <ul className="space-y-2 pt-4">
              <li>
                <a
                  href="#"
                  className="group relative flex items-center justify-center gap-2 rounded bg-stone-800 px-3 py-2 hover:bg-stone-700"
                >
                  <i className="fas fa-sign-in-alt"></i>
                  <span className="">Login</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="group relative flex items-center justify-center gap-2 rounded bg-stone-800 px-3 py-2 hover:bg-stone-700"
                >
                  <i className="fas fa-user-plus"></i>
                  <span className="">Join</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-400 bg-stone-950 p-2">
        <form action="#">
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm hover:bg-stone-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>

            <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
              Logout
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SideMenu;
