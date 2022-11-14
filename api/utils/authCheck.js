const authCheck = (req, res, next) => {
  if (!req.user) {
    console.log(req.user);
    res.redirect("/details");
  } else next();
};

module.exports = authCheck;
