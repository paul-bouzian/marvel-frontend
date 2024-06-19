const ConnectButtons = () => {
  return (
    <div className="flex h-full items-center border-x border-slate-700 px-2 font-avengers text-xs max-sm:hidden sm:gap-2">
      <button className="group relative overflow-hidden rounded-md py-2 text-white sm:px-4">
        <span className="absolute inset-0 w-full -translate-x-full-more transform bg-red-600 transition-transform duration-500 group-hover:translate-x-0"></span>
        <span className="relative z-10">Login</span>
      </button>
      <button className="group relative overflow-hidden rounded-md px-4 py-2 text-white">
        <span className="absolute inset-0 w-full -translate-x-full-more transform bg-red-600 transition-transform duration-500 group-hover:translate-x-0"></span>
        <span className="relative z-10">Join</span>
      </button>
    </div>
  );
};

export default ConnectButtons;
