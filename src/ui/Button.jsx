const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="group mt-4 inline-block rounded-full bg-gradient-to-r from-red-500 via-red-700 to-red-900 p-[2px] transition-all duration-300 hover:text-white focus:outline-none focus:ring active:text-opacity-75"
    >
      <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
        {children}
      </span>
    </button>
  );
};

export default Button;
