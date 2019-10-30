const router = require("express").Router();
const dbController = require("../../controllers/dbController");

// Matches with "/api/books"
router.route("/")
  .get(dbController.findAll)
  .post(dbController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(dbController.findById)
  .delete(dbController.remove);

module.exports = router;
