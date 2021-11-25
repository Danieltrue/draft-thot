const user = require("../model/User");
//@Desc Register a user
//@Route /thot/register
//@Access Public
exports.registerUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const userData = await user.create({
      username: req.body.username.toLowerCase(),
      role: req.body.role.toLowerCase(),
      profileimage: req.body.profileimage,
    });

    userData.save();

    await res.status(200).send(userData);
  } catch (err) {
    if (err) return await res.status(404).send(err);
  }
};
