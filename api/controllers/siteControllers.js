const ethAirBalloons = require("ethairballoons");
const path = require("path");

exports.postDetails = (req, res, next) => {
  console.log(req.body);
  res.render("filters");
};
exports.postFilters = (req, res, next) => {
  //create new block
  console.log(req.body);
  res.render("success");
};
