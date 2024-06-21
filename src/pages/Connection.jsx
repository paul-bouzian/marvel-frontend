import { useNavigate } from "react-router-dom";
import marvelBackground from "../assets/img/marvel-background.webp";
import ConnectionCard from "../components/Connection/ConnectionCard";

const Connection = ({ type, setIsLoggedIn, setUser }) => {
  const navigate = useNavigate();

  return (
    <main className="relative h-screen">
      <img
        src={marvelBackground}
        alt="marvel-background"
        className="absolute -z-10 h-full w-full object-cover"
      />
      <button
        className="absolute right-0 top-0 m-5 text-4xl text-white hover:text-gray-200"
        onClick={() => navigate("/")}
      >
        <i className="fa fa-times-circle"></i>
      </button>

      <ConnectionCard
        type={type}
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
      />
    </main>
  );
};

export default Connection;
