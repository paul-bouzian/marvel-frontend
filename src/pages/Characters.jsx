import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CharacterCard from "../components/Cards/CharacterCard";
import Pagination from "../ui/Pagination";
import useDebounce from "../utils/debounceHook";

const Characters = ({ inputValue }) => {
  const [characters, setCharacters] = useState([]);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const prevInputValueRef = useRef();

  const debouncedInputValue = useDebounce(inputValue, 1000);

  const fetchCharacters = async (pageToSet) => {
    if (pageToSet) setCurrentPage(pageToSet);
    setLoading(true);
    window.scrollTo({ top: 0 });
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/characters`,
      {
        params: {
          skip: pageToSet || currentPage * 100 - 100,
          name: debouncedInputValue,
        },
      },
    );

    setCharacters(response.data.results);
    setTotalCharacters(response.data.results.length);
    setLoading(false);
  };

  useEffect(() => {
    if (prevInputValueRef.current !== debouncedInputValue) {
      fetchCharacters(1);
    } else {
      fetchCharacters();
    }

    prevInputValueRef.current = debouncedInputValue;
  }, [currentPage, debouncedInputValue]);

  return loading ? (
    <div className="flex h-screen items-center justify-center">
      <i className="fa-solid fa-spinner fa-spin text-3xl"></i>
    </div>
  ) : (
    <section className="m-auto my-10 max-w-7xl">
      <h1 className="mb-4 font-avengers text-4xl font-bold">Personnages</h1>
      <div className="flex flex-wrap justify-center gap-x-14 gap-y-4 p-10">
        {characters.map((character) => (
          <CharacterCard key={character.name} character={character} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCharacters={totalCharacters}
      />
    </section>
  );
};

export default Characters;
