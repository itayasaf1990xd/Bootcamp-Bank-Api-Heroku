const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const rootRouter = require("./routes/root.router");
const apiRouter = require("./routes/api.router")
const publicPath = path.join(__dirname, 'build');

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", rootRouter);
app.use("/api/users", apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server is up and running on port ${port}`));
