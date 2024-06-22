import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CharacterCard from "../components/Cards/Card";

const Favorites = ({ user }) => {
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  const [favoriteComics, setFavoriteComics] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchFavorites = async () => {
      try {
        const charactersResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/favorites/characters/${user._id}`,
        );
        const comicsResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/favorites/comics/${user._id}`,
        );
        setFavoriteCharacters(charactersResponse.data);
        setFavoriteComics(comicsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFavorites();
  }, [user]);

  return loading ? (
    <div className="flex h-screen items-center justify-center">
      <i className="fa-solid fa-spinner fa-spin text-3xl"></i>
    </div>
  ) : (
    <section className="m-auto my-10 max-w-7xl px-4">
      <h1 className="mb-4 font-avengers text-4xl font-bold max-sm:text-3xl max-mini:text-2xl">
        Personnages Favoris
      </h1>
      <div className="flex flex-wrap justify-center gap-x-14 gap-y-6 p-10 max-sm:gap-x-8 max-sm:p-2">
        {favoriteCharacters.map((character) => (
          <Link to={`/character/${character._id}`} key={character._id}>
            <CharacterCard
              item={character}
              name={character.name}
              description={character.description}
              type={"characters"}
              userId={user ? user._id : null}
              favorites={favoriteCharacters}
              isNavigate={true}
            />
          </Link>
        ))}
        {favoriteCharacters.length === 0 && (
          <p className="mb-14 text-center text-2xl font-bold">
            Aucun personnage favoris
          </p>
        )}
      </div>
      <h1 className="mb-4 font-avengers text-4xl font-bold max-sm:text-3xl max-mini:text-2xl">
        Comics Favoris
      </h1>
      <div className="flex flex-wrap justify-center gap-x-14 gap-y-6 p-10 max-sm:gap-x-8 max-sm:p-2">
        {favoriteComics.map((comic, index) => (
          <CharacterCard
            key={index}
            item={comic}
            name={comic.title}
            description={comic.description}
            type={"comics"}
            userId={user ? user._id : null}
            favorites={favoriteComics}
          />
        ))}
        {favoriteComics.length === 0 && (
          <p className="text-center text-2xl font-bold">Aucun comic favoris</p>
        )}
      </div>
    </section>
  );
};

export default Favorites;
