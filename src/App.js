import { render } from "react-dom";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { StrictMode, useState } from "react";
import ActivityInput from "./ActivityInput";
import NavBar from "./NavBar";
import LogIn from "./LogIn";
import ActivityLog from "./ActivityLog";
import UserContext from "./UserContext";

const App = () => {
  const user = useState("");
  return (
    <StrictMode>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <NavBar />
          <h3>Your hub for fitness accountability</h3>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/newactivity" element={<ActivityInput />} />
            <Route path="/welcome/:user" element={<ActivityLog />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
