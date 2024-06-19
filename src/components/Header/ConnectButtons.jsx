const ConnectButtons = () => {
  return (
    <div className="font-avengers flex items-center gap-2 text-xs border-x border-slate-700 h-full px-2">
      <button className="relative group overflow-hidden text-white px-4 py-2 rounded-md">
        <span className="absolute inset-0 bg-red-600 transform -translate-x-full-more group-hover:translate-x-0 transition-transform duration-500 w-full"></span>
        <span className="relative z-10">Login</span>
      </button>
      <button className="relative group overflow-hidden text-white px-4 py-2 rounded-md">
        <span className="absolute inset-0 bg-red-600 transform -translate-x-full-more group-hover:translate-x-0 transition-transform duration-500 w-full"></span>
        <span className="relative z-10">Join</span>
      </button>
    </div>
  );
};

export default ConnectButtons;
