const { loadData, saveData, addUserToData, removeUserFromData } = require(".././utils/files.util");
const path = require("path");
const usersJsonPath = path.join(__dirname, ".././json", "users.json");

/*
 * Method: Post
 * Local Url: http://localhost:8080/api/users
 * Web Url:
 * Body Example:
 * {
 *   "name":"John Dou",
 *   "cash": 60,
 *   "credit": 70
 * }
*/
const addUser = async (req, res) => {
  try {
    const user = req.body;
    const data = await addUserToData(usersJsonPath, user);
    const response = await saveData(usersJsonPath, data);
    res.status(response.code).send(response.message);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
};

/*
 * Method: Post
 * Local Url: http://localhost:8080/api/users/id
 * Web Url:
*/
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await loadData(usersJsonPath, id);
    res.status(200).send(user);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
};

/*
 * Method: Post
 * Local Url: http://localhost:8080/api/users
 * Web Url:
*/
const getAllUsers = async (req, res) => {
  try {
    const users = await loadData(usersJsonPath);
    res.status(200).send(users);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
};

/*
 * Method: Put
 * Local Url: http://localhost:8080/api/users/id
 * Web Url:
*/
const editUser = async (req, res) => {
  const {
    data
  } = req.body;
  const sendBody = {
    routeName: "PUT",
    body: {
      data: data,
    },
  };
  res.send(sendBody);
};

/*
 * Method: Delete
 * Local Url: http://localhost:8080/api/users/id
 * Web Url:
*/
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await removeUserFromData(usersJsonPath, id);
    const response = await saveData(usersJsonPath, data);
    res.status(response.code).send(response.message);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
};

module.exports = { getUser, getAllUsers, addUser, editUser, deleteUser };