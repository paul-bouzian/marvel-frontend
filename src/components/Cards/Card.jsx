import { useNavigate } from "react-router-dom";
import FavoriteButton from "../../ui/FavoriteButton";

const CharacterCard = ({
  item,
  name,
  description,
  sizeFull,
  favorites,
  userId,
  type,
  isNavigate,
}) => {
  const imgUrl = item.thumbnail.path + "." + item.thumbnail.extension;
  const navigate = useNavigate();

  return (
    <div
      className={`group cursor-pointer font-roboto ${sizeFull ? "w-full" : "w-44 max-sm:w-36 max-xs:w-32"}`}
      onClick={() => {
        if (isNavigate) {
          navigate(`/character/${item._id}`);
        }
      }}
    >
      <div className="relative">
        <img
          src={imgUrl}
          alt={name}
          className={`mb-3 w-full rounded-lg object-cover shadow-lg shadow-gray-700 transition-transform duration-200 group-hover:-translate-y-1 ${sizeFull ? "h-2/3" : "h-[225px] max-sm:h-[200px] max-xs:h-[180px]"}`}
        />
        <FavoriteButton
          itemId={item._id}
          favorites={favorites}
          userId={userId}
          type={type}
        />
      </div>

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
