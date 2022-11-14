const express = require("express");
const siteController = require("../controllers/siteControllers");
const authCheck = require("../utils/authCheck");
const Block = require("../models/block");
const bytes32 = require("bytes32");

const router = express.Router();

router.get("/details", (req, res, next) => {
  res.render("details");
});

router.post("/details", siteController.postDetails);

router.get("/filters", (req, res, next) => {
  res.render("filters");
});

router.get("/getById/:id", (req, res, next) => {
  console.log("Patient id: ", req.params.id);
  console.log(typeof req.params.id);
  Block.find(function (err, allRecords) {
    if (!err) {
      console.log(allRecords);
    } else {
      console.log("No records found");
    }
  });
  res.send("done");
});

router.post("/filters", siteController.postFilters);

module.exports = router;
