const {
  addPassword,
  getPasswords,
  deletePassword,
} = require("../services/passwordService");

const addPasswordController = async (req, res) => {
  const { title, username, password, url, notes } = req.body;
  if (!title || !username || !password) {
    return res
      .status(400)
      .json({ error: "Title, username, and password are required" });
  }
  try {
    const passwordEntry = await addPassword(
      title,
      username,
      password,
      url,
      notes,
      req.user.id
    );
    res.status(201).json(passwordEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPasswordsController = async (req, res) => {
  try {
    const passwords = await getPasswords(req.user.id);
    res.json(passwords);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePasswordController = async (req, res) => {
  const { id } = req.params;
  try {
    await deletePassword(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addPasswordController,
  getPasswordsController,
  deletePasswordController,
};
