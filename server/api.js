const express = require("express");
const UserController = require("./controllers/UserController");
const ActivityController = require("./controllers/ActivityController");
const { restart } = require("nodemon");

const router = express.Router();

router.post(
  "/newuser",
  UserController.verifyNewUser,
  UserController.addNewUser,
  (req, res) => {
    if (res.locals.error) {
      console.log("err", res.locals.error);
      return res.status(300).json(res.locals.error);
    } else if (res.locals.username) {
      console.log("username", res.locals.username);
      return res.status(200).json(res.locals.username);
    }
  }
);

router.post("/login", UserController.verifyExistingUser, (req, res) => {
  if (res.locals.success) {
    return res.status(200).send("success");
  } else return res.status(300).send("unsuccessful login");
});

router.get(
  "/activities/:username",
  ActivityController.userActivities,
  (req, res) => {
    return res.status(200).json(res.locals.activities);
  }
);

router.post("/activities", ActivityController.newActivity, (req, res) => {
  return res.status(200).send("success");
});

module.exports = router;
