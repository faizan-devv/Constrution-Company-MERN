const express = require("express");
const router = express.Router();

const {
  newCoupon,
  getCoupons,
  getSingleCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controllers/couponController");

router.route("/coupons").get(getCoupons);
router.route("/Coupon/:id").get(getSingleCoupon);

router.route("/admin/coupon/new").post(newCoupon);

router.route("/admin/coupon/:id").patch(updateCoupon).delete(deleteCoupon);

module.exports = router;
