const express = require("express");
const rootRouter = express.Router();
const { postRoute, getRoute, putRoute, deleteRoute } = require("../controllers/root.controller");

rootRouter.post("/", postRoute);
rootRouter.get("/", getRoute);
rootRouter.put("/", putRoute);
rootRouter.delete("/", deleteRoute);

module.exports = rootRouter;
