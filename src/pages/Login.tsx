/** @format */
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
//https://www.techiediaries.com/react-password-eye/
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <section className="space-y-4">
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold">Login</h3>
                <p className="text-sm mt-4 leading-relaxed">
                  Sign in to your account and explore a world of possibilities.
                  Your journey begins here.
                </p>
              </div>

              <div>
                <label className="text-sm mb-2 block">User name</label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    required
                    className="w-4/5 text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 text-black"
                    placeholder="Enter user name"
                  />
                  <FaRegUser size={28} className="ml-2" />
                </div>
              </div>
              <div>
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="w-4/5 text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 text-black"
                    placeholder="Enter password"
                  />
                  <button onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <FaEyeSlash size={26} className="ml-2" />
                    ) : (
                      <FaEye size={20} className="ml-2" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <NavLink
                    to="/"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Forgot your password?
                  </NavLink>
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="button"
                  className="w-4/5 shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Log in
                </button>
              </div>

              <p className="text-sm !mt-8 text-center">
                Don't have an account?{" "}
                <NavLink
                  to="/signup"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </NavLink>
              </p>
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
