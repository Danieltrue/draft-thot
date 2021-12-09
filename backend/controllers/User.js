const user = require("../model/User");
const bcrypt = require("bcrypt");
//@Desc Register a user
//@Route /thot/register
//@Access Public
exports.registerUser = async (req, res, next) => {
  try {
    //find a user
    const foundUser = await user.findOne({
      email: req.body.email.toLowerCase(),
    });

    if (foundUser) return res.status(400).send({ found: true });

    //create a new user
    const userData = await user.create({
      username: req.body.username.toLowerCase(),
      email: req.body.email.toLowerCase(),
      role: req.body.role.toLowerCase(),
      password: req.body.password,
    });

    //save the user to the database
    await userData.save();
    return res.status(200).send({ success: true, data: userData });
    //return response
  } catch (err) {
    return await res.status(500).send(err);
  }
};
