import Button from "../../ui/Button";
import Inputs from "../../ui/Inputs";

import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../utils/fetchUser";

const LoginForm = ({ setIsLoggedIn, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitLoading(true);
      setError(null);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        { email, password },
      );
      const token = response.data.token;
      Cookies.set("token", token);
      fetchUser(token, setUser, setIsLoggedIn);
      navigate("/");
    } catch (error) {
      console.error(error.response.data.message);
      setError(error.response.data.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
      <Inputs
        label="Email"
        type="email"
        placeholder="Email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Inputs
        label="Mot de passe"
        type="password"
        placeholder="Mot de passe"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-center text-red-500">{error}</p>}
      <Button disabled={submitLoading}>
        {submitLoading ? "Chargement..." : "Connexion"}
      </Button>
    </form>
  );
};

export default LoginForm;
