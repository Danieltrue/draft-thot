const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: ["Please We need Your Username", true],
  },
  role: {
    type: String,
    required: [true, "Please What your role"],
  },
  email: {
    type: String,
    required: [true, "Please What your role"],
    match: [
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      "Please add a valid email",
    ],
  },
  profileimage: {
    type: String,
    default: "image",
  },
  thought: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "thought",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

module.exports = mongoose.model("user", UserSchema);
