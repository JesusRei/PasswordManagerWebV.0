
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const register = async (userData) => {
  await axios.post(`${API_URL}/users/register`, userData);
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/users/login`, userData);
  localStorage.setItem("token", response.data.token);
};

const userService = {
  register,
  login,
};

export default userService;
