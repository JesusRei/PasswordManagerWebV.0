const crypto = require("crypto");
const PasswordEntry = require("../models/PasswordEntry");

const addPassword = async (title, username, password, url, notes, user_id) => {
  const cipher = crypto.createCipher("aes-256-cbc", process.env.ENCRYPTION_KEY);
  let encryptedPassword = cipher.update(password, "utf8", "hex");
  encryptedPassword += cipher.final("hex");

  const passwordEntry = await PasswordEntry.create({
    title,
    username,
    encrypted_password: encryptedPassword,
    url,
    notes,
    user_id,
  });

  return passwordEntry;
};

const getPasswords = async (user_id) => {
  const passwords = await PasswordEntry.findAll({ where: { user_id } });
  return passwords;
};

const deletePassword = async (id) => {
  await PasswordEntry.destroy({ where: { id } });
};

module.exports = { addPassword, getPasswords, deletePassword };
