import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const addPassword = async (passwordData) => {
  try {
    const response = await axios.post(`${API_URL}/passwords`, passwordData);
    return response.data;
  } catch (error) {
    // Manejo de errores detallado
    if (error.response) {
      console.error("Error adding password:", error.response.data);
      throw new Error(error.response.data.error || "Error adding password");
    } else if (error.request) {
      console.error("No response received:", error.request);
      throw new Error("No response received from server");
    } else {
      console.error("Error in setting up the request:", error.message);
      throw new Error(error.message);
    }
  }
};

const getPasswords = async () => {
  try {
    const response = await axios.get(`${API_URL}/passwords`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error fetching passwords:", error.response.data);
      throw new Error(error.response.data.error || "Error fetching passwords");
    } else if (error.request) {
      console.error("No response received:", error.request);
      throw new Error("No response received from server");
    } else {
      console.error("Error in setting up the request:", error.message);
      throw new Error(error.message);
    }
  }
};

const deletePassword = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/passwords/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error deleting password:", error.response.data);
      throw new Error(error.response.data.error || "Error deleting password");
    } else if (error.request) {
      console.error("No response received:", error.request);
      throw new Error("No response received from server");
    } else {
      console.error("Error in setting up the request:", error.message);
      throw new Error(error.message);
    }
  }
};

const passwordService = { addPassword, getPasswords, deletePassword };
export default passwordService;
