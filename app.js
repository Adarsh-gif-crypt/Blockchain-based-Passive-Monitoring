const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./api/config/passport-setup");
const mongoose = require("mongoose");
const morgan = require("morgan");
const authRoutes = require("./api/routes/authRoutes");
const siteRoutes = require("./api/routes/siteRoutes");
const authCheck = require("./api/utils/authCheck");

if (process.env.NODE_ENV != "PRODUCTION") require("dotenv").config();

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["BLOCKY"],
  })
);

app.use(express.urlencoded({ extended: false }));
//initialize passport
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(
  "mongodb+srv://admin:BlockedHealth@passive-monitoring.jqmds2s.mongodb.net/test"
);
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));

app.use(morgan("dev"));
app.use(cors());

app.get("/", authCheck, (req, res, next) => {
  res.render("faucet");
});

app.use("/auth", authRoutes);

app.use(authCheck, siteRoutes);

app.use((req, res, next) => {
  res.render("404");
});

module.exports = app;
