const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.render("login");
});
router.get(
  "/login/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
  (req, res, next) => {}
);

//does serializing too
router.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req, res, next) => {
    res.redirect("/");
  }
);

router.get("/logout", (req, res, next) => {
  req.logOut();
  res.redirect("/login");
});

module.exports = router;
