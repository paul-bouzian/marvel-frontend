import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../components/Cards/Card";

const Character = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  const fetchComics = async () => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/comics/${id}`,
    );
    console.log(response.data);
    setCharacter(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchComics();
  }, []);

  return loading ? (
    <div className="flex h-screen items-center justify-center">
      <i className="fa-solid fa-spinner fa-spin text-3xl"></i>
    </div>
  ) : (
    <section className="m-auto my-10 max-w-7xl px-4">
      <h1 className="mb-4 font-avengers text-4xl font-bold max-sm:text-3xl max-mini:text-2xl">
        {character.name}
      </h1>
      <div className="mt-10 flex justify-between gap-10 max-md:flex-col">
        <div className="flex-1 lg:mr-14">
          <CharacterCard
            item={character}
            name={character.name}
            description={character.description}
            sizeFull={true}
          />
        </div>

        <div className="border-l border-gray-300 max-lg:border-b"></div>

        <div className="flex flex-[2] flex-wrap justify-center gap-x-14 gap-y-6">
          {character.comics.map((comic, index) => (
            <CharacterCard
              key={index}
              item={comic}
              name={comic.title}
              description={comic.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Character;