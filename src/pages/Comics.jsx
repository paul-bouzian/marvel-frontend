import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CharacterCard from "../components/Cards/Card";
import Pagination from "../ui/Pagination";
import useDebounce from "../utils/debounceHook";
import fetchFavorites from "../utils/fetchFavorites";

const Comics = ({ inputValue, user }) => {
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState([]);
  const [totalComics, setTotalComics] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const prevInputValueRef = useRef();
  const [favorites, setFavorites] = useState([]);
  const [loadingFavorites, setLoadingFavorites] = useState(false);

  const debouncedInputValue = useDebounce(inputValue, 1000);

  useEffect(() => {
    const fetchComics = async (pageToSet) => {
      if (pageToSet) setCurrentPage(pageToSet);
      setLoading(true);
      window.scrollTo({ top: 0 });
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/comics`,
        {
          params: {
            skip: pageToSet || currentPage * 100 - 100,
            title: debouncedInputValue,
          },
        },
      );
      setComics(response.data.results);
      setTotalComics(response.data.count);
      setLoading(false);
    };

    const fetchingFavorites = async () => {
      if (user) {
        setLoadingFavorites(true);
        const favorites = await fetchFavorites(user._id, "comics");
        setFavorites(favorites);
        setLoadingFavorites(false);
      } else {
        setLoadingFavorites(false);
      }
    };

    fetchingFavorites();

    if (prevInputValueRef.current !== debouncedInputValue) {
      fetchComics(1);
    } else {
      fetchComics();
    }

    prevInputValueRef.current = debouncedInputValue;
  }, [currentPage, debouncedInputValue, user]);

  return loading || loadingFavorites ? (
    <div className="flex h-screen items-center justify-center">
      <i className="fa-solid fa-spinner fa-spin text-3xl"></i>
    </div>
  ) : (
    <section className="m-auto my-10 max-w-7xl px-4">
      <h1 className="mb-4 font-avengers text-4xl font-bold max-sm:text-3xl max-mini:text-2xl">
        Comics
      </h1>
      <div className="flex flex-wrap justify-center gap-x-14 gap-y-6 p-10 max-sm:gap-x-8 max-sm:p-2">
        {comics.map((comic, index) => (
          <CharacterCard
            key={index}
            item={comic}
            name={comic.title}
            description={comic.description}
            favorites={favorites}
            userId={user ? user._id : null}
            type={"comics"}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCharacters={totalComics}
      />
    </section>
  );
};

export default Comics;
