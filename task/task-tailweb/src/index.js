const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const route = require("./routes/router.js");
const app = express();

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://shubham108h:LOhyTHS7kcSijNsz@cluster0.ovhwygy.mongodb.net/shubham108h",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use(route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
