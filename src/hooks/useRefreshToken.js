/** @format */

import axios from "../api/axios";
import useAuth from "./useAuth";
import Cookies from "js-cookie";

const useRefreshToken = () => {
  const { setAuth, auth } = useAuth();

  const refresh = async () => {
    const response = await axios.post(
      "/api/token/refresh/",
      // JSON.stringify({ refresh: auth.refreshToken }),
      JSON.stringify({ refresh: Cookies.get("rToken") }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    setAuth((prev) => {
      // console.log(JSON.stringify(prev));
      // console.log(response.data.access);
      return { ...prev, accessToken: response.data.access };
    });
    Cookies.set("aToken", response.data.access, {
      secure: true,
    });
    return response.data.access;
  };
  return refresh;
};

export default useRefreshToken;
