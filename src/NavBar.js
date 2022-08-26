import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/" className="page-title">
        @WorkoutBuddy
      </Link>
      <Link to="/newactivity" className="log-activity">
        Log Activity
      </Link>
      <h3>Your hub for fitness accountability</h3>
    </header>
  );
};

export default NavBar;
