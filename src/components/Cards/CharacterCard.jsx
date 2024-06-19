const CharacterCard = ({ character }) => {
  const imgUrl = character.thumbnail.path + "." + character.thumbnail.extension;

  return (
    <div className="group h-[350px] w-44 cursor-pointer font-roboto">
      <img
        src={imgUrl}
        alt={character.name}
        className="mb-3 h-[225px] w-44 rounded-lg object-cover shadow-lg shadow-gray-700 transition-transform duration-200 group-hover:-translate-y-1"
      />
      <p className="font-bold group-hover:text-red-600">{character.name}</p>
      <p className="line-clamp-3 text-xs font-thin">{character.description}</p>
    </div>
  );
};

export default CharacterCard;
