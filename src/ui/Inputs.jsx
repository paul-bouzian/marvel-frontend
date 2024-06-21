const Inputs = ({ label, type, placeholder, id, value, onChange }) => {
  return (
    <label
      htmlFor="Username"
      className="focus-within:border-blue-6000 focus-within:ring-blue-6000 relative block h-12 rounded-md border border-gray-200 shadow-sm focus-within:ring-1"
    >
      <input
        type={type}
        id={id}
        className="peer w-full border-none bg-transparent pl-4 pt-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
        {label}
      </span>
    </label>
  );
};

export default Inputs;
