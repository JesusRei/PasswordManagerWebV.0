const express = require("express");
const router = express.Router();
const {
  addPasswordController,
  getPasswordsController,
  deletePasswordController,
} = require("../controllers/PasswordController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, addPasswordController);
router.get("/", authMiddleware, getPasswordsController);
router.delete("/:id", authMiddleware, deletePasswordController);

module.exports = router;
