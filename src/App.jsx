import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Home from "./pages/Home";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Router>
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCurrentPage={setCurrentPage}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={
            <Characters
              inputValue={inputValue}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
