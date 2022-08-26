import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import UserContext from "./UserContext";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(UserContext);

  const userLogin = () => {
    // const res = await fetch(`/api/setuser?name=${username}`);
    // const json = await res.json();
    setUser(username);
  };

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
      <button>
        <Link to={`/welcome/${username}`}>Login</Link>
      </button>
    </form>
  );
};

export default LogIn;
