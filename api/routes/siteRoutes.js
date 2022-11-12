const express = require("express");
const siteController = require("../controllers/siteControllers");
const authCheck = require("../utils/authCheck");
const router = express.Router();

router.get("/details", (req, res, next) => {
  res.render("details");
});

router.post("/details", siteController.postDetails);

router.get("/filters", (req, res, next) => {
  res.render("filters");
});

router.post("/filters", siteController.postFilters);

module.exports = router;
