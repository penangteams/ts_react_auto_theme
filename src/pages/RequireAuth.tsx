/** @format */

import { Navigate, Outlet, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import Cookies from "js-cookie";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const myuser = Cookies.get("myuser");

  // return auth?.user ? (
  return myuser && myuser.length > 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
