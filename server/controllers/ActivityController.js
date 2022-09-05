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

module.exports = ActivityController;
