const express = require("express");
const apiRouter = express.Router();
const { getUser, getAllUsers, addUser, editUser, deleteUser } = require("../controllers/user.controller");

apiRouter.post("/", addUser);
apiRouter.get("/:id", getUser);
apiRouter.get("/", getAllUsers);
apiRouter.put("/", editUser);
apiRouter.delete("/:id", deleteUser);

module.exports = apiRouter;
