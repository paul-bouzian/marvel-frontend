import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "../components/Cards/CharacterCard";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/characters`,
    );
    setCharacters(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return loading ? (
    <div className="flex h-screen items-center justify-center">
      <i className="fa-solid fa-spinner fa-spin text-3xl"></i>
    </div>
  ) : (
    <div className="m-auto flex max-w-7xl flex-wrap justify-center gap-x-14 gap-y-4 p-10">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
