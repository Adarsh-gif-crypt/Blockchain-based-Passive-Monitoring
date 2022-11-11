const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/login",
  passport.authenticate("google", { scope: ["email", "profile"] }),
  (req, res, next) => {}
);

//does serializing too
router.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req, res, next) => {
    res.redirect("/faucet");
  }
);

router.get("/logout", (req, res, next) => {
  req.logOut();
  res.redirect("/");
});

module.exports = router;
