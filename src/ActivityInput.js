import { useState } from "react";

const activities = ["Walk", "Run", "Bike", "Hike", "Swim", "Gym", "Yoga"];
const intensities = ["Easy", "Medium", "Hard"];

const ActivityInput = () => {
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");

  // async function postActivity() {
  //   const res = await
  // }

  return (
    <div id="activity-input">
      <form>
        <label htmlFor="date">
          <input id="date" value={date} placeholder="Date" />
        </label>
        <label htmlFor="activity">
          <select id="activity" value={activity}>
            <option>Activity</option>
            {activities.map((activity) => (
              <option key={activity} value={activity}>
                {activity}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="duration">
          <input id="duration" value={duration} placeholder="Duration" />
        </label>
        <label htmlFor="intensity">
          <select id="intensity" value={intensity}>
            <option>Intensity</option>
            {intensities.map((intensity) => (
              <option key={intensity} value={intensity}>
                {intensity}
              </option>
            ))}
          </select>
        </label>
        <button>Submit Activity</button>
      </form>
    </div>
  );
};

export default ActivityInput;
