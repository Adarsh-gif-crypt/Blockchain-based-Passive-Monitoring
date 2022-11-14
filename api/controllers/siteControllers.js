const ethAirBalloons = require("ethairballoons");
const Block = require("../models/block");

const path = require("path");

exports.postDetails = (req, res, next) => {
  console.log(req.body);
  res.render("filters");
};

exports.postFilters = (req, res, next) => {
  //updates block with given patientID

  const updatedBlock = {
    uniqueCode: req.user.uniqueCode,
    patientID: req.user.googleId,
    kinEmail: req.body.kinEmail,
    medicalEmail: req.body.medicalEmail,
    otherEmail: req.body.otherEmail,
    heartRate: req.body.heartRate,
    bloodPressure: req.body.bloodPressure,
    temperature: req.body.temperature,
    oxygenLevel: req.body.oxygenLevel,
    glucoseLevel: req.body.glucoseLevel,
    hydrationLevel: req.body.hydrationLevel,
    tvActivity: req.body.tvActivity,
    phoneActivity: req.body.phoneActivity,
    watchActivity: req.body.watchActivity,
    sleepActivity: req.body.sleepActivity,
    lightingActivity: req.body.lightingActivity,
    oximeter: req.body.oximeter,
  };
  Block.updateById(
    req.user.uniqueCode,
    updatedBlock,
    function (err, updatedObject) {
      if (!err) {
        console.log("object updated successfully");
        res.send(updatedObject);
      } else res.send(err);
    }
  );
  console.log(req.body);
};
