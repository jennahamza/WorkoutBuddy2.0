import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="nav-bar">
        <Link to="/">
          <h1>@WorkoutBuddy</h1>
        </Link>
        <Link to="/newactivity">
          <button id="log-activity">Log Activity</button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
