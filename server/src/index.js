require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const user = require("./../public/user.json");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", require("./handlers/userHandler"));

port = process.env.PORT || 2345;
app.listen(port, () => {
  console.log(`Listing on port ${port}`);
});
