import { useState, useContext } from "react";
import UserContext from "./UserContext";

const activities = ["Walk", "Run", "Bike", "Hike", "Swim", "Gym", "Yoga"];
const intensities = ["Easy", "Medium", "Hard"];

const ActivityInput = () => {
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");
  const [user, setUser] = useContext(UserContext);

  async function postActivity() {
    console.log("Posting Activity:", user, date, activity, duration, intensity);
    const res = await fetch("/api/activities", {
      method: "POST",
      body: JSON.stringify({
        username: user,
        date: date,
        activity: activity,
        duration: duration,
        intensity: intensity,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div>
      <form
        id="activity-input"
        onSubmit={(e) => {
          e.preventDefault();
          postActivity();
          e.target.reset();
        }}
      >
        <label htmlFor="date">
          <input
            id="date"
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label htmlFor="activity">
          <select
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option>Activity</option>
            {activities.map((activity) => (
              <option key={activity} value={activity}>
                {activity}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="duration">
          <input
            id="duration"
            placeholder="Duration"
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>
        <label htmlFor="intensity">
          <select
            id="intensity"
            value={intensity}
            onChange={(e) => setIntensity(e.target.value)}
          >
            <option>Intensity</option>
            {intensities.map((intensity) => (
              <option key={intensity} value={intensity}>
                {intensity}
              </option>
            ))}
          </select>
        </label>
        <button id="submit-activity">Submit Activity</button>
      </form>
    </div>
  );
};

export default ActivityInput;
