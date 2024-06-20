import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Character from "./pages/Character";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Home from "./pages/Home";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        isLoggedIn={isLoggedIn}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={<Characters inputValue={inputValue} />}
        />
        <Route path="/comics" element={<Comics inputValue={inputValue} />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </Router>
  );
}

export default App;
