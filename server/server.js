const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const rootRouter = require("./routes/root.router");
const apiRouter = require("./routes/api.router")
const pubDir = path.join(__dirname, "../client/build");

const { env } = process;
const { PORT } = env;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(pubDir));

app.use("/", rootRouter);
app.use("/api/users", apiRouter);

app.listen(PORT || 8080, () => console.log(`Server is up and runing on ${PORT || 8080}`));
