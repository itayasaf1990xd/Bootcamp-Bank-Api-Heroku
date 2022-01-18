const fps = require("fs").promises;
const { v4: uuid } = require('uuid');

const loadData = async (path, id) => {
  try {
    const readData = JSON.parse(await fps.readFile(path, "utf-8"));
    if (id) {
      return readData.users[id];
    } else {
      return readData;
    }
  } catch (error) {
    throw { code: error.code || 500, message: error.message };
  }
};

const saveData = async (path, data) => {
  try {
    await fps.writeFile(path, JSON.stringify(data));
    return { code: 200, message: "success" };
  } catch (error) {
    throw { code: error.code || 500, message: error.message };
  }
};

const addUserToData = async (path, user) => {
  const readData = await loadData(path);
  const users = readData.users;
  users[uuid()] = {...user}
  return readData;
}

const removeUserFromData = async (path, id) => {
  const readData = await loadData(path);
  const users = readData.users;
  delete users[id];
  console.log(users)
  return readData;
}

module.exports = { loadData, saveData, addUserToData, removeUserFromData };