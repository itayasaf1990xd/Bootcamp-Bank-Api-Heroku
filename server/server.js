require("dotenv").config({ path: "./server/.env" });
require("./databases/mongodb/mongoose");

const express = require("express");
const cors = require("cors");
const path = require("path");
const rootRouter = require("./routes/root.router");
const apiRouter = require("./routes/api.router")
const publicPath = path.join(__dirname, '../client/build');
const { PORT } = require("./config");
const app = express();

app.use(cors());
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", rootRouter);
app.use("/api/users", apiRouter);
app.use('*', (req, res) => {
  // res.sendFile(path.resolve(publicPath, 'index.html'));
  res.status(505).send("This route is not valid");
});
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
