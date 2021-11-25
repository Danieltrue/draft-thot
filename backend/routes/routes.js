const express = require("express");
const router = express.Router();
//Controllers
//USER CONTROLLER
const { registerUser } = require("../controllers/User");
//THOUGHT CONTROLLER
const { createThought, getAllThought } = require("../controllers/Thought");
//Route
router.route("/register").post(registerUser);
//
router.route("/create-post").post(createThought);
router.route("/post").get(getAllThought);
module.exports = router;
