const express = require("express");
const router = express.Router();

const {
  getLabors,
  getAdminLabors,
  newLabor,
  getSingleLabor,
  updateLabor,
  deleteLabor,
  createLaborReview,
  getLaborReviews,
  deleteReview,
} = require("../controllers/laborController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/labors").get(getLabors);
router.route("/admin/labors").get(getAdminLabors);
router.route("/labor/:id").get(getSingleLabor);

router
  .route("/admin/labor/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newLabor);

router
  .route("/admin/labor/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateLabor)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteLabor);

router.route("/review").put(isAuthenticatedUser, createLaborReview);
router.route("/reviews").get(isAuthenticatedUser, getLaborReviews);
router.route("/reviews").delete(isAuthenticatedUser, deleteReview);

module.exports = router;
