const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const searchRoutes = require("./search");

router.use("/books", bookRoutes);

router.use("/google", searchRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
