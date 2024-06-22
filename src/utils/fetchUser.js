import axios from "axios";
import Cookies from "js-cookie";

export const fetchUser = async (token, setUser, setIsLoggedIn) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(response.data);
    setIsLoggedIn(true);
  } catch (error) {
    console.error(error);
    Cookies.remove("token");
    setIsLoggedIn(false);
  }
};
