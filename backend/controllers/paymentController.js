const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const StripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(
  "sk_test_51L7gwdIY1aWHioOI5sfJ9PhFqdf54mPtkZGN8Gof0hqs7wEmgRiJa9zY0O7RfOtY8a6k5N0YI6GYiucsxPtMZmxI00uyIDbvLE"
);

// Create Payment   =>   /api/v1/payment
exports.payment = catchAsyncErrors(async (req, res, next) => {
  console.log("logged in payment controller");
  const { id, amount } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Pak Real Construction",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment ", payment);
    res.status(200).json({
      success: true,
      message: "Payment Sucessful",
    });
  } catch (error) {
    console.log("Stripe Error", error);
    res.status(401).json({
      success: false,
      message: error,
    });
  }
});
