const ActivityController = {};
const db = require("../models/pg");

ActivityController.userActivities = async (req, res, next) => {
  console.log("getting user activities");
  const { username } = req.params;
  const value = [username];
  const query =
    "SELECT a.* FROM activity a LEFT OUTER JOIN public.user u ON u.username = $1";
  try {
    const data = await db.query(query, value);
    res.locals.activities = data;
  } catch (err) {
    console.log(err);
  }
  return next();
};

ActivityController.newActivity = async (req, res, next) => {
  console.log("posting new activity");
  const { username, date, activity, duration, intensity } = req.body;

  try {
    const valueA = [username];
    const queryA = `SELECT id FROM public.user WHERE username = $1`;
    const userData = await db.query(queryA, valueA);
    if (userData.rows[0]) {
      const id = userData.rows[0].id;
    } else {
      console.log("error: no user is signed in");
    }
    console.log("id", id);
    const valueB = [id, date, activity, duration, intensity];
    const queryB = `INSERT INTO activity (user_id, date, activity, duration, intensity) VALUES ($1, $2, $3, $4, $5)`;
    const data = await db.query(queryB, valueB);

    return next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = ActivityController;
