import { useNavigate } from "react-router-dom";
import marvelLogo from "../../assets/img/marvel-logo.svg";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const ConnectionCard = ({ type, setIsLoggedIn, setUser }) => {
  const navigate = useNavigate();
  return (
    <section className="z-10 m-auto flex h-full max-w-2xl flex-col items-center gap-6 px-10 py-10 max-xs:px-0 max-xs:py-0">
      <div className="w-32">
        <img src={marvelLogo} alt="marvel-logo" className="w-full" />
      </div>

      <div
        id="form"
        className="w-full rounded-3xl bg-white p-16 shadow-md max-md:px-6 max-md:py-12 max-xs:h-screen"
      >
        <h2 className="text-2xl font-bold">
          {"Entrez vos identifiants pour continuer"}
        </h2>
        <p className="mt-4 text-sm text-gray-500">
          {type === "login" ? (
            <>
              Connectez-vous à votre compte Marvel pour continuer. Si vous
              n'avez pas de compte, vous pouvez en créer un gratuitement
              <span
                className="cursor-pointer text-blue-500"
                onClick={() => navigate("/signup")}
              >
                {" "}
                ici
              </span>
              .
            </>
          ) : (
            "Inscrivez-vous à votre compte Marvel pour continuer."
          )}
        </p>
        {type === "login" ? (
          <LoginForm setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
        ) : (
          <SignupForm setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
        )}
      </div>
    </section>
  );
};

export default ConnectionCard;
