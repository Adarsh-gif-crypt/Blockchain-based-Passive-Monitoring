const express = require("express");
const Block = require("../models/block");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const { PythonShell } = require("python-shell");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "local-storage",
  "record.json"
);

router.get("/display", (req, res, next) => {
  res.render("displaydata", { download: false, msg: "Enter code to get link" });
});

router.get("/all", (req, res, next) => {
  Block.find(function (err, allRecords) {
    if (!err) {
      console.log();
      res.send(allRecords);
    }
  });
});

router.post("/display", async (req, res, next) => {
  const uniqueCode = req.body.code;
  console.log(uniqueCode);
  PythonShell.run("makedf.py", null, function (err) {
    if (err) console.log("Error executing pythobn", err);
    console.log("finished executing the python script");
  });

  await Block.findById(uniqueCode, async function (err, record) {
    if (!err) {
      console.log("Found: ", JSON.stringify(record));
      fs.writeFileSync(p, JSON.stringify(record));

      res.render("displaydata", { download: true, msg: "link here" });
    } else {
      console.log("No record found");
      res.render("displaydata", {
        download: false,
        msg: "Code does not match the records",
      });
    }
  });
});

router.get("/download", (req, res, next) => {
  console.log("Reached download button");
  res.download(
    path.join(
      path.dirname(process.mainModule.filename),
      "local-storage",
      "filtered_data.csv"
    )
  );
});
module.exports = router;
