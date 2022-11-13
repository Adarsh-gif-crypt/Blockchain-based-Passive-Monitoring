const ethAirBalloons = require("ethairballoons");
const path = require("path");
let savePath = path.resolve(__dirname + "/contracts");

const ethAirBalloonsProvider = ethAirBalloons(
  "https://tiniest-old-orb.ethereum-goerli.discover.quiknode.pro/1d39f733ead0d3af6bef7949987a38e8539798ae/",
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
  if (err) {
    console.log("Error in BLOCK.JS: ", err);
  } else {
    console.log("Deployed successfully");
  }
});
module.exports = Block;
