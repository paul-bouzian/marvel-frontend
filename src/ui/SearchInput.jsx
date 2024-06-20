const SearchInput = ({ placeholder, inputValue, setInputValue }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        id="Search"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className="w-full rounded-md border-gray-700 bg-gray-800 py-2.5 pe-10 pl-4 text-gray-300 shadow-sm sm:text-sm"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" className="text-gray-400 hover:text-gray-300">
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default SearchInput;
