const thought = require("../model/Thought");
const user = require("../model/User");
//@Desc create a thought
//@Route /thot/create-post
//@Access Private
exports.createThought = async (req, res, next) => {
  try {
    const thoughtData = await thought.create({
      user: req.body.user,
      body: req.body.body,
    });
    const foundUser = await user.findById({ _id: req.body.user });

    if (!foundUser) {
      return await res.status(404).send("User Not Found");
    } else {
      await foundUser.thought.push(thoughtData._id);
      await thoughtData.save();
      await foundUser.save();
    }

    await res.status(200).send(thoughtData);
  } catch (err) {
    if (err) return await res.status(err).send(err);
  }
};
//@Desc get all thought
//@Route /thot/post
//@Access Public
exports.getAllThought = async (req, res, next) => {
  try {
    const thoughtData = await thought
      .find()
      .populate({ path: "user", select: "username role profileimage" });

    if (!thoughtData) return await res.status(404).send("No Thought Found");

    return await res.status(200).send(thoughtData);
  } catch (err) {
    if (err) return await res.status(err).send(err);
  }
};
