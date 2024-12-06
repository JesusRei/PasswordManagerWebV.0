const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const registerUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10); // Encriptar contraseña con BCrypt
  const user = await User.create({ username, master_password: hashedPassword });
  return user;
};

const loginUser = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (user && (await bcrypt.compare(password, user.master_password))) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    return token;
  } else {
    throw new Error("Invalid credentials");
  }
};

module.exports = { registerUser, loginUser };
