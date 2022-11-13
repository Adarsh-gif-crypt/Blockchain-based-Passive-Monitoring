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
  }
});
module.exports = Block;
