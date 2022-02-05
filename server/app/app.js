require("dotenv").config({ path: "./server/.env" });
// path.resolve(__dirname, "../../.env")
const express = require("express");
const cors = require("cors");
const { corsConfig, rootPath } = require("../configurations/app.configuration");
const path = require("path");
const rootRouter = require("../routes/root.router");
const apiRouter = require("../routes/api.router")
const publicPath = path.join(rootPath, '../client/build');
const app = express();

app.use(cors(corsConfig));
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", rootRouter);
app.use("/api/users", apiRouter);
app.use('*', (req, res) => {
  res.status(505).send("This route is not valid");
});

module.exports = app;
