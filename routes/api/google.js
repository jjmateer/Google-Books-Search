const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with "/api/google"
router
  .route("/api")
  .get(searchController.findAll);

module.exports = router;
