import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import UserContext from "./UserContext";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useContext(UserContext);

  async function userLogin() {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("status", res.status);
    console.log("user", user);
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to="/welcome" />;
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
        onChange={(e) => {
          setUsername(e.target.value);
          setUser(e.target.value);
        }}
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
      <button id="login-button">Login</button>
      <Link to="/signup">
        <button id="login-button">Sign Up</button>
      </Link>
    </form>
  );
};

export default LogIn;
