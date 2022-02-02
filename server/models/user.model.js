const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name can not be empty"],
  },
  lastName: {
    type: String,
    required: [true, "Last name can not be empty"],
  },
  email: {
    type: String,
    required: [true, "Email can not be empty"],
    unique: [true, "Email have to be unique"],
  },
  password: {
    type: String,
    required: [true, "Password can not be empty"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: [true, "Gender can not be empty"],
  },
});

const User = model("users", userSchema);
module.exports = User ;
