const ethAirBalloons = require("ethairballoons");
const Block = require("../models/block");

const path = require("path");

exports.postDetails = (req, res, next) => {
  console.log(req.body);
  res.render("filters");
};

exports.postFilters = (req, res, next) => {
  //create new block
  const newBlock = {
    patientID: profile.id,
    kinEmail: "q",
    medicalEmail: "d",
    otherEmail: "s",
    heartRate: "off",
    bloodPressure: "off",
    temperature: "off",
    oxygenLevel: "off",
    glucoseLevel: "off",
    hydrationLevel: "off",
    tvActivity: "off",
    phoneActivity: "off",
    watchActivity: "off",
    sleepActivity: "off",
    lightingActivity: "off",
    oximeter: "off",
  };

  Block.save(newBlock, function (err, objectSaved) {
    if (!err) {
      console.log("Block saved!");
    } else {
      console.log(err);
    }
  });
  console.log(req.body);

  res.render("success");
};
