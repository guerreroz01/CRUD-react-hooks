const router = require("express").Router();
const {
  getUsers,
  newUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");

router.route("/").get(getUsers).post(newUser);
router.route("/:id").delete(deleteUser).put(updateUser);

module.exports = router;
