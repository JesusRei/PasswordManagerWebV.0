const { DataTypes } = require("sequelize");
const sequelize = require("../repositories/database");
const User = require("./User");
const PasswordEntry = sequelize.define(
  "PasswordEntry",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    encrypted_password: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.STRING },
    notes: { type: DataTypes.TEXT },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: User, key: "id" },
    },
  },
  {
    tableName: "passwordentries",
  }
);

User.hasMany(PasswordEntry, { foreignKey: "user_id" });
PasswordEntry.belongsTo(User, { foreignKey: "user_id" });
module.exports = PasswordEntry;
