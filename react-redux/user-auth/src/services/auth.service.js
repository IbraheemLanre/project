/**
 * Authentication Service file
 */

import axios from "axios";

const API_URL = "http://localhost:9090/api/auth/";

export const register = (options) => {
  return axios.post(`${API_URL}/signup`, options);
};

export const login = async (options) => {
  const res = await axios.post(`${API_URL}/signin`, options);
  if (res.data.accesToken) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userObj = localStorage.getItem("user");
  return JSON.parse(userObj);
};
