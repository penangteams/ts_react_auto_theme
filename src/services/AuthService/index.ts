/** @format */

import axios from "axios";
import { LFormValue, SFormValue } from "../../types";
const API_URL = "http://localhost:8080/api/auth/";

import { DJANGO_API_ENDPOINT } from "../../config";

class AuthService {
  login(data: LFormValue) {
    const headers = {
      "Content-Type": "application/json",
    };
    axios.defaults.withCredentials = true;
    return axios
      .post(DJANGO_API_ENDPOINT + "/api/token/", data, {
        headers: headers,
      })
      .then((response) => {
        console.log("Aservice", response.data);
      })
      .catch((error) => {
        console.log("A service error", error.message);
        return error.message;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(data: SFormValue) {
    const { username, email, password } = data;
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
