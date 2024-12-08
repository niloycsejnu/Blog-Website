const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");
const connectDB = require("./config/db");


require("dotenv").config();
const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/blogs", blogRoutes);

module.exports = app;
