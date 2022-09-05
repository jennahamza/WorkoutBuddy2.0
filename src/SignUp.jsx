import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "./UserContext";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useContext(UserContext);
  console.log("USER", user);

  async function InputNewUser(person, pass) {
    const res = await fetch("/api/newuser", {
      method: "POST",
      body: JSON.stringify({
        username: person,
        password: pass,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 300) {
      const json = await res.json();
      setError(json);
    } else if (res.status === 200) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to="/newactivity" />;
  }

  return (
    <form
      id="sign-up"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("username", username);
        InputNewUser(username, password);
      }}
    >
      <input
        id="username"
        type="text"
        placeholder="Choose a Username"
        onChange={(e) => {
          setUsername(e.target.value);
          setUser(e.target.value);
        }}
      ></input>
      <input
        id="password"
        type="password"
        placeholder="Choose a Password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button id="login-button">Complete Sign Up</button>
      <div className="error-message">{error}</div>
    </form>
  );
};

export default SignUp;
