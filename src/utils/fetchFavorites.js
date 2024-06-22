import axios from "axios";

const fetchFavorites = async (userId, type) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/favorites/${type}/${userId}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchFavorites;
