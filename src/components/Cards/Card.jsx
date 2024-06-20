const CharacterCard = ({ item, name, description, sizeFull }) => {
  const imgUrl = item.thumbnail.path + "." + item.thumbnail.extension;

  return (
    <div
      className={`group cursor-pointer font-roboto ${sizeFull ? "w-full" : "w-44"}`}
    >
      <img
        src={imgUrl}
        alt={name}
        className={`mb-3 rounded-lg object-cover shadow-lg shadow-gray-700 transition-transform duration-200 group-hover:-translate-y-1 ${sizeFull ? "h-2/3 w-full" : "h-[225px] w-44"}`}
      />
      <p
        className={`font-bold ${sizeFull && "text-3xl max-sm:text-2xl max-xs:text-xl"} group-hover:text-red-600`}
      >
        {name}
      </p>
      <p
        className={`line-clamp-3 text-xs font-thin ${sizeFull && "line-clamp-6 text-2xl max-sm:text-xl max-xs:text-lg"}`}
      >
        {description}
      </p>
    </div>
  );
};

export default CharacterCard;
