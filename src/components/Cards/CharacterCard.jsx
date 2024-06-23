import { useNavigate } from "react-router-dom";
import triangle from "../../assets/img/triangle.png";
import FavoriteButton from "../../ui/FavoriteButton";

const CharacterCard = ({
  name,
  description,
  item,
  favorites,
  userId,
  type,
  sizeFull,
  isNavigate,
}) => {
  const navigate = useNavigate();
  const imgUrl = item.thumbnail.path + "." + item.thumbnail.extension;
  return (
    <div
      className={`group cursor-pointer font-roboto ${sizeFull ? "w-full" : "w-48 max-sm:w-36 max-xs:w-32"}`}
      onClick={() => {
        if (isNavigate) {
          navigate(`/character/${item._id}`);
        }
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={imgUrl}
          alt={name}
          className={`-z-50 w-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-110 ${sizeFull ? "h-2/3" : "h-[210px] max-sm:h-[200px] max-xs:h-[180px]"}`}
        />
        <FavoriteButton
          itemId={item._id}
          favorites={favorites}
          userId={userId}
          type={type}
          noTranslate={true}
        />
      </div>
      <div
        className={`relative -z-50 ${sizeFull ? "h-48" : "h-32"} bg-[#151515] p-4 text-white`}
      >
        <div
          id="test"
          className="absolute left-0 top-0 -z-10 h-2 w-full bg-red-600 transition-all duration-500 group-hover:h-full"
        ></div>
        <img
          src={triangle}
          alt="triangle"
          className="absolute -right-1 bottom-0 z-50 size-8 scale-x-[-1] transform invert filter max-xs:size-6"
        />
        <p
          className={`font-semibold uppercase ${sizeFull && "text-3xl max-sm:text-2xl max-xs:text-xl"} `}
        >
          {name}
        </p>
        <p
          className={`line-clamp-2 text-xs font-light uppercase text-[#BBBBBB] transition-colors duration-300 group-hover:text-white max-xs:line-clamp-1 ${sizeFull && "line-clamp-6 text-2xl max-sm:text-xl max-xs:text-lg"}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
