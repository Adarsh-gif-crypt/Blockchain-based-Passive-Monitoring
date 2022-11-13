const ethAirBalloons = require("ethairballoons");
const path = require("path");
let savePath = path.resolve(__dirname + "/contracts");

console.log("dirname: ", __dirname);
const ethAirBalloonsProvider = ethAirBalloons(
  "http://127.0.0.1t:8545",
  savePath
);

const Block = ethAirBalloonsProvider.createSchema({
  name: "Block",
  contractName: "HealthContract",
  properties: [
    {
      name: "patientID",
      type: "string",
      primaryKey: true,
    },
    {
      name: "heartRate",
      type: "string",
    },
    {
      name: "bloodPressure",
      type: "string",
    },
    {
      name: "temperature",
      type: "string",
    },
    {
      name: "oxygenLevel",
      type: "string",
    },
    {
      name: "glucoseLevel",
      type: "string",
    },
    {
      name: "hydrationLevel",
      type: "string",
    },
    {
      name: "tvActivity",
      type: "string",
    },
    {
      name: "phoneActivity",
      type: "string",
    },
    {
      name: "watchActivity",
      type: "string",
    },
    {
      name: "sleepActivity",
      type: "string",
    },
    {
      name: "lightingActivity",
      type: "string",
    },
    {
      name: "oximeter",
      type: "string",
    },
    {
      name: "kinEmamil",
      type: "string",
    },
    {
      name: "medicalEmail",
      type: "string",
    },
    {
      name: "otherEmail",
      type: "string",
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
module.exports = Block;
