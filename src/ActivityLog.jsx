import { useEffect, useContext, useState } from "react";
import UserContext from "./UserContext";

const ActivityLog = () => {
  const [user, setUser] = useContext(UserContext);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    requestActivities();
  }, []);

  async function requestActivities() {
    const res = await fetch(`/api/activities/${user}`);
    const data = await res.json();
    console.log("activities json", data.rows);
    setActivities(data.rows);
  }

  return (
    <div id="display">
      <h3>Welcome Back, {user}</h3>
      <h3>Let's take a look at your progress...</h3>
      <table id="activity-table">
        <thead id="table-header">
          <td>Date</td>
          <td>Activity</td>
          <td>Duration</td>
          <td>Intensity</td>
        </thead>
        {activities.map((activity) => (
          <tr id="table-row">
            <td>{activity.date}</td>
            <td>{activity.activity}</td>
            <td>{activity.duration}</td>
            <td>{activity.intensity}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ActivityLog;
