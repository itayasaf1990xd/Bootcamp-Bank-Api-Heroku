require("dotenv").config({ path: "./server/.env" });
require("./databases/mongodb/mongoose");

const app = require("./app/app")
const { PORT } = require("./config");

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`)
});
