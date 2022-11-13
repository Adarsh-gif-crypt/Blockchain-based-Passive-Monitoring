const ethAirBalloons = require("ethairballoons");
const path = require("path");
let savePath = path.resolve(__dirname + "/contracts");

console.log("dirname: ", __dirname);
const ethAirBalloonsProvider = ethAirBalloons(
  "http://127.0.0.1:8545",
  savePath
);

const Block = ethAirBalloonsProvider.createSchema({
  name: "Block",
  contractName: "HealthContract",
  properties: [
    {
      name: "patientID",
      type: "bytes32",
      primaryKey: true,
    },
    {
      name: "heartRate",
      type: "bytes32",
    },
    {
      name: "bloodPressure",
      type: "bytes32",
    },
    {
      name: "temperature",
      type: "bytes32",
    },
    {
      name: "oxygenLevel",
      type: "bytes32",
    },
    {
      name: "glucoseLevel",
      type: "bytes32",
    },
    {
      name: "hydrationLevel",
      type: "bytes32",
    },
    {
      name: "tvActivity",
      type: "bytes32",
    },
    {
      name: "phoneActivity",
      type: "bytes32",
    },
    {
      name: "watchActivity",
      type: "bytes32",
    },
    {
      name: "sleepActivity",
      type: "bytes32",
    },
    {
      name: "lightingActivity",
      type: "bytes32",
    },
    {
      name: "oximeter",
      type: "bytes32",
    },
    {
      name: "kinEmail",
      type: "bytes32",
    },
    {
      name: "medicalEmail",
      type: "bytes32",
    },
    {
      name: "otherEmail",
      type: "bytes32",
    },
  ],
});

Block.deploy(function (err, success) {
  if (!err) {
    console.log("Deployed successfully");
  } else {
    console.log("COULD NOT DEPLOY");
    console.log(err);
  }
});

setTimeout(function () {
  //your code to be executed after 1 second
  const newBlock = {
    patientID: "123",
    kinEmail: "",
    medicalEmail: "",
    otherEmail: "",
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
}, 5000);

module.exports = Block;
