/** @format */
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "../api/axios";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
//https://www.techiediaries.com/react-password-eye/
import { SFormValue } from "../types";
const REGISTER_URL = "/api/account/register";
const USER_URL = "/api/account/user";
const LOGIN_URL = "/api/token/";

export default function Signup() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {}, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const [showPassword, setShowPassword] = useState(false);
  const [showrePassword, setShowrePassword] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<SFormValue>();
  const onSubmit: SubmitHandler<SFormValue> = async (data) => {
    // try {
    const { username, password } = data;
    const response = await axios.post(REGISTER_URL, JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    if (response?.status === 201) {
      autologin({ username, password });
    }
  };
  async function getUser(aToken: string) {
    try {
      const response = await axios.get(USER_URL, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + aToken,
        },
        withCredentials: true,
      });

      const userData = response?.data?.user?.username;
      return userData;
    } catch (err) {}
  }
  async function autologin(data: any) {
    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log("autologin", response);
      const accessToken = response?.data?.access;
      const refreshToken = response?.data?.refresh;
      const roles = response?.data?.roles;
      const user = await getUser(accessToken);
      setAuth({ user, pwd, roles, accessToken, refreshToken });
      setUser("");
      setPwd("");
      navigate("/admin");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglerePasswordVisibility = () => {
    setShowrePassword(!showrePassword);
  };
  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <section className="space-y-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-8">
                  <h3 className="text-3xl font-extrabold">Signup</h3>
                  <p className="text-sm mt-4 leading-relaxed">
                    Sign up and open up a world of possibilities. Your journey
                    begins here.
                  </p>
                </div>
                <div className="mb-2">
                  <label className="text-sm mb-2 block">User name</label>
                  <div className="relative flex items-center">
                    <input
                      name="username"
                      type="text"
                      className="w-4/5 text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 text-black"
                      placeholder="Enter user name"
                      {...register("username", {
                        required: "Username is required",
                        minLength: {
                          value: 6,
                          message: "Username must be at least 6 characters",
                        },
                      })}
                    />
                    <FaRegUser size={28} className="ml-2" />
                  </div>
                  <div className="mt-1">
                    {errors.username && (
                      <p className="text-red-500 text-sm">
                        {errors.username.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  <label className="text-sm mb-2 block">Email</label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="text"
                      className="w-4/5 text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 text-black"
                      placeholder="Enter user name"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          message: "Invalid Email",
                        },
                      })}
                    />
                    <MdOutlineMail size={28} className="ml-2" />
                  </div>
                  <div className="mt-1">
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  <label className="text-sm mb-2 block">First name</label>
                  <div className="relative flex items-center">
                    <input
                      name="first_name"
                      type="text"
                      className="w-4/5 text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 text-black"
                      placeholder="Enter user name"
                      {...register("first_name", {
                        required: "First name is required",
                        minLength: {
                          value: 3,
                          message: "Username must be at least 3 characters",
                        },
                      })}
                    />
                    <FaRegUser size={28} className="ml-2" />
                  </div>
                  <div className="mt-1">
                    {errors.username && (
                      <p className="text-red-500 text-sm">
                        {errors.username.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  <label className="text-sm mb-2 block">Last name</label>
                  <div className="relative flex items-center">
                    <input
                      name="last_name"
                      type="text"
                      className="w-4/5 text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 text-black"
                      placeholder="Enter last name"
                      {...register("last_name", {
                        required: "Last name is required",
                        minLength: {
                          value: 3,
                          message: "Last name must be at least 3 characters",
                        },
                      })}
                    />
                    <FaRegUser size={28} className="ml-2" />
                  </div>
                  <div className="mt-1">
                    {errors.username && (
                      <p className="text-red-500 text-sm">
                        {errors.username.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  <label className="text-sm mb-2 block">Password</label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      className="w-4/5 text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 text-black"
                      placeholder="Enter password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                    />
                    <button type="button" onClick={togglePasswordVisibility}>
                      {showPassword ? (
                        <FaEyeSlash size={26} className="ml-2" />
                      ) : (
                        <FaEye size={20} className="ml-2" />
                      )}
                    </button>
                  </div>
                  <div className="mt-1">
                    {errors.password && (
                      <p className="text-red-500 text-sm">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-sm mb-2 block">Confirm password</label>
                  <div className="relative flex items-center">
                    <input
                      name="re_password"
                      type={showrePassword ? "text" : "password"}
                      autoComplete="current-password"
                      className="w-4/5 text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 text-black"
                      placeholder="Enter Confirm password"
                      {...register("re_password", {
                        required: "Confirm password is required",
                        validate: () => {
                          if (watch("re_password") !== watch("password")) {
                            return "passwords do no match";
                          }
                        },
                      })}
                    />
                    <button type="button" onClick={togglerePasswordVisibility}>
                      {showrePassword ? (
                        <FaEyeSlash size={26} className="ml-2" />
                      ) : (
                        <FaEye size={20} className="ml-2" />
                      )}
                    </button>
                  </div>
                  <div className="mt-1">
                    {/* {watch("cpassword") !== watch("password") &&
                    getValues("cpassword") ? (
                      <p className="text-red-500 text-sm">password not match</p>
                    ) : null} */}
                    {errors.re_password && (
                      <p className="text-red-500 text-sm">
                        {errors.re_password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="text-sm">
                    <NavLink
                      to="/login"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Signed up already?
                    </NavLink>
                  </div>
                </div>

                <div className="!mt-8">
                  <button
                    type="submit"
                    className="w-4/5 shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Signup
                  </button>
                </div>
              </form>
            </section>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8 hidden md:block">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
              alt="Dining Experience"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
