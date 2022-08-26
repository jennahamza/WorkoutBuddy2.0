import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import UserContext from "./UserContext";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(UserContext);

  async function userLogin() {
    const res = await fetch(`/api/setuser?name=${username}`);
    const json = await res.json();
    console.log("userLogin response", json);
    setUser(username);
  }

  return (
    <form
      id="login"
      onSubmit={(e) => {
        e.preventDefault();
        userLogin();
      }}
    >
      <input
        onChange={(e) => setUsername(e.target.value)}
        id="username"
        type="text"
        placeholder="Username"
      ></input>
      <input
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        type="text"
        placeholder="Password"
      ></input>
      <Link to={`/welcome/${username}`}>
        <button id="login-button">Login</button>
      </Link>
    </form>
  );
};

export default LogIn;
