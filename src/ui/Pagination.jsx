const Pagination = ({ currentPage, setCurrentPage, totalCharacters }) => {
  return (
    <ol className="flex justify-center gap-2 text-xs font-medium">
      <li
        className={`inline-flex size-10 cursor-pointer items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${currentPage === 1 && "hidden"}`}
        onClick={() => {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </li>

      <li
        className={`text-whit inline-flex size-10 cursor-pointer items-center justify-center rounded border border-blue-600 bg-blue-600 text-center leading-8 text-white`}
      >
        {currentPage}
      </li>

      <li
        className={`inline-flex size-10 cursor-pointer items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${totalCharacters < 100 && "hidden"}`}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </li>
    </ol>
  );
};

export default Pagination;
