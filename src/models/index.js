const sequelize = require("../repositories/database");
const User = require("./User");
const PasswordEntry = require("./PasswordEntry");

const initModels = async () => {
  await sequelize.sync();
};

module.exports = { sequelize, User, PasswordEntry, initModels };
