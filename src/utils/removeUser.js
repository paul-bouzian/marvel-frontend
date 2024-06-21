import Cookies from "js-cookie";

const logOut = (setIsLoggedIn, setUser) => {
  Cookies.remove("token");
  setIsLoggedIn(false);
  setUser(null);
};

export default logOut;
