const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

connectDB();
const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next()
})

app.use("/api/users", require("./routes/auth"));
app.use("/api/jobs", require("./routes/jobs"));



app.listen(port, () => console.log(`Server Connected On Port ${port}`));
