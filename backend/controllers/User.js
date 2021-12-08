const user = require("../model/User");
const bcrypt = require("bcrypt");
//@Desc Register a user
//@Route /thot/register
//@Access Public
exports.registerUser = async (req, res, next) => {
  try {
    //
    const foundUser = user.findOne({ email: req.body.email.toLowerCase() });
    // Hashing Password
    console.log(req.body);
    const salt = bcrypt.genSaltSync(2);
    const hashingPassword = bcrypt.hashSync(req.body.password, salt);
    //Creating the Register Data
    const userData = await user.create({
      username: req.body.username.toLowerCase(),
      email: req.body.email.toLowerCase(),
      role: req.body.role.toLowerCase(),
      password: hashingPassword,
    });

    //send error if something is missing or is found
    if (foundUser) {
      return await res.status(501).send({ found: true });
    }
    //Save Data
    await userData.save();

    return await res.status(200).send({ success: true });
  } catch (err) {
    await res.status(400).send(err);
  }
};
