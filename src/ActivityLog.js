import { useEffect, useContext } from "react";
import UserContext from "./UserContext";

const ActivityLog = () => {
  const [user, setUser] = useContext(UserContext);

  // useEffect(() => {
  //   fetch()
  // }, [])

  return (
    <div id="display">
      <h3>Welcome Back, {user}</h3>
      <h3>Let's take a look at your progress...</h3>
      <table id="activity-table">
        <thead id="table-header">
          <tr>
            <th>Date</th>
            <th>Activity</th>
            <th>Duration</th>
            <th>Intensity</th>
          </tr>
        </thead>
        <tbody id="table-body"></tbody>
      </table>
    </div>
  );
};

export default ActivityLog;
