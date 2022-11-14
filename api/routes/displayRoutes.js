const express = require("express");
const router = express.Router();

router.get("/display", (req, res, next) => {});

router.get("/all", (req, res, next) => {
  Block.find(function (err, allRecords) {
    if (!err) {
      console.log();
      res.send(allRecords);
    }
  });
});

router.post("/display", (req, res, next) => {
  const uniqueCode = req.query.code;
  console.log(uniqueCode);
  Block.findById(uniqueCode, function (err, record) {
    if (!err) {
      console.log(record);
      res.send(record);
    } else {
      console.log("No record found");
      res.send("Not found");
    }
  });
});

module.exports = router;
