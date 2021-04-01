/**
 * Data Service file
 */

import axios from "axios";
import {authHeader} from "./auth-header";

const API_URL = "http://localhost:9090/api/test";

export const getAll = () => {
  return axios.get(`${API_URL}/all`);
};

export const getEmployeeBoard = () => {
  return axios.get(`${API_URL}/user`, { headers: authHeader() });
};

export const getEmployerBoard =()=>{
    return axios.get(`${API_URL}/employer`, {headers: authHeader()})
}

