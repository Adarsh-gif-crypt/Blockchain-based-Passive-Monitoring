const ethAirBalloons = require("ethairballoons");
const Block = require("../models/block");
const nodemailer = require("nodemailer");
const path = require("path");

exports.postDetails = (req, res, next) => {
  console.log(req.body);
  res.render("filters");
};

exports.postFilters = async (req, res, next) => {
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
        res.render("success");
      } else res.send(err);
    }
  );
  //Sending email.....
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL,
      pass: process.env.MAILPASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  var mailOptions = {
    from: process.env.MAIL,
    to: `${req.body.kinEmail}, ${req.body.medicalEmail}, ${req.body.otherEmail}`,
    subject: `Access key for patient: ${req.user.displayName}`,
    text: `Your Unique access code is: ${req.user.uniqueCode}`,
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Couldn't send email: ", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  console.log(req.body);
};
