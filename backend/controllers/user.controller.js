const userCTRL = {};
const User = require("../models/User.model");

userCTRL.getUsers = async (req, res) => {
  const data = await User.find();
  res.json(data);
};
userCTRL.newUser = async (req, res) => {
  const { name, username } = req.body;

  const newUser = new User({
    name,
    username,
  });
  await newUser.save();

  res.redirect("/api");
};
userCTRL.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  const data = await User.find();
  res.json(data);
};
userCTRL.updateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  const data = await User.find();
  res.json(data);
};

module.exports = userCTRL;
