import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FavoriteButton = ({ itemId, favorites, userId, type }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const checkFavorite =
    favorites.length === 0
      ? false
      : favorites.some((favorite) => favorite._id === itemId);

  useEffect(() => {
    setIsFavorite(checkFavorite);
  }, [checkFavorite]);

  const navigate = useNavigate();
  const token = Cookies.get("token");

  const handleFavorite = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!userId) {
      navigate("/login");
      return;
    }
    if (isFavorite) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/favorites/${type}`,
          {
            data: { id: itemId },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setIsFavorite(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log(token);
      try {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/favorites/${type}`,
          {
            id: itemId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setIsFavorite(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <i
      className={`${isFavorite ? "fa-solid" : "fa-regular"} fa-heart absolute bottom-2 right-2 text-2xl text-red-500 transition-all duration-300 hover:scale-110 group-hover:-translate-y-2 group-hover:text-red-600`}
      onClick={handleFavorite}
    ></i>
  );
};

export default FavoriteButton;
