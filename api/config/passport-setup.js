if (process.env.NODE_ENV != "PRODUCTION") require("dotenv").config();
const mongoose = require("mongoose");
const passport = require("passport");
const oauth = require("passport-google-oauth20");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/user");
const nodemailer = require("nodemailer");
const ethAirBalloons = require("ethairballoons");
const path = require("path");
const Block = require("../models/block");
let savePath = path.resolve(__dirname + "/contracts");

const ethAirBalloonsProvider = ethAirBalloons(
  "http://127.0.0.1:8545",
  savePath
);

const profile = oauth.profile;

// SYNTAX: done(error, data);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

//when cookies comes from the browser
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      //options for the Google strategy
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      //passport callback function
      console.log("Access Token:", accessToken);

      //make or get user
      User.findOne({ googleId: profile.id }).then(async (currentUser) => {
        if (currentUser) {
          //already have the user
          console.log("User is: ", currentUser);
          done(null, currentUser);
        } else {
          console.log("Doesn't exist");
          var myNewUser = "";
          const uniqueCode = Math.floor(100000 + Math.random() * 900000);
          //User creation
          await new User({
            _id: new mongoose.Types.ObjectId(),
            googleId: profile.id,
            email: profile.emails[0].value,
            displayName: profile.displayName,
            profilePicture: profile.photos[0].value,
            uploads: [],
            uniqueCode: uniqueCode.toString(),
          })
            .save()
            .then((newUser) => {
              console.log("New user cerated: ", newUser);
              myNewUser = newUser;
            });
          //Unique code:
          //new block creation
          console.log("Now creating a new block");

          // await Block.deploy(function (err, success) {
          //   if (err) {
          //     console.log("Error in BLOCK.JS: ", err);
          //   } else {
          //     console.log("Deployed successfully");
          //   }
          // });

          setTimeout(function () {
            const newBlock = {
              uniqueCode: uniqueCode.toString(),
              patientID: profile.id,
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
          await done(null, myNewUser);
        }
      });
    }
  )
);
