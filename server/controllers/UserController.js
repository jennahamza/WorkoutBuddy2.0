const UserController = {};
const db = require("../models/pg");

UserController.verifyNewUser = async (req, res, next) => {
  console.log("verify new user");
  const { username, password } = req.body;
  const value = [username];
  const query = "SELECT * From public.user WHERE username = $1";
  try {
    const data = await db.query(query, value);
    if (data.rows[0]) {
      res.locals.error = "user already exists";
      console.log("user already exists");
      return next();
    } else {
      res.locals.username = username;
      res.locals.password = password;
      return next();
    }
  } catch (err) {
    console.log(err, "err in verify new user");
    return next("error in verify new user");
  }
};

UserController.addNewUser = async (req, res, next) => {
  console.log("add new user");
  if (res.locals.error) return next();
  const { username, password } = res.locals;
  const value = [username, password];
  const query = "INSERT INTO public.user (username, password) VALUES ($1, $2)";
  try {
    const data = await db.query(query, value);
  } catch (err) {
    console.log(err);
  }

  return next();
};

UserController.verifyExistingUser = async (req, res, next) => {
  console.log("verify existing user");
  const { username, password } = req.body;
  const value = [username, password];
  const query =
    "SELECT * FROM public.user WHERE username = $1 AND password = $2";
  const data = await db.query(query, value);
  console.log("verify user data", data);
  if (data.rows[0]) {
    res.locals.success = true;
    return next();
  } else {
    res.locals.success = false;
    return next();
  }
};

module.exports = UserController;
