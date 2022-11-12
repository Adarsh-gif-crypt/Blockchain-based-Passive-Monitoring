exports.postDetails = (req, res, next) => {
  console.log(req.body);
  res.render("filters");
};
exports.postFilters = (req, res, next) => {
  res.render("success");
};
