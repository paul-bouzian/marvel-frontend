import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Character from "./pages/Character";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Connection from "./pages/Connection";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { fetchUser } from "./utils/fetchUser";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const token = Cookies.get("token");
      if (token) {
        await fetchUser(token, setUser, setIsLoggedIn);
      }
      setIsLoading(false);
    };
    fetch();
  }, []);

  return isLoading ? (
    <div className="flex h-screen items-center justify-center">
      <i className="fa-solid fa-spinner fa-spin text-3xl"></i>
    </div>
  ) : (
    <Router>
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        user={user}
        setUser={setUser}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={<Characters inputValue={inputValue} />}
        />
        <Route path="/comics" element={<Comics inputValue={inputValue} />} />
        <Route path="/character/:id" element={<Character />} />
        <Route
          path="/login"
          element={
            <Connection
              type="login"
              setIsLoggedIn={setIsLoggedIn}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Connection
              type="signup"
              setIsLoggedIn={setIsLoggedIn}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/favorites"
          element={<Favorites user={user} setUser={setUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
