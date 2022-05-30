const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middlewares/errors");

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

//import all routes
const products = require("./routes/product");
const packages = require("./routes/package");
const auth = require("./routes/auth");
const order = require("./routes/order");
const video = require("./routes/video");
const labour = require("./routes/labor");

app.use("/api/v1", products);
app.use("/api/v1", packages);
app.use("/api/v1", auth);
app.use("/api/v1", order);
app.use("/api/v1", video);
app.use("/api/v1", labour);

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

//Middleware to handle errors
app.use(errorMiddleware);
module.exports = app;
