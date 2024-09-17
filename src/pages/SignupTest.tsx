/** @format */
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";
//https://www.techiediaries.com/react-password-eye/
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglecPasswordVisibility = () => {
    setShowcPassword(!showcPassword);
  };
  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <section className="space-y-4">
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold">Signup</h3>
                <p className="text-sm mt-4 leading-relaxed">
                  Sign up and open up a world of possibilities. Your journey
                  begins here.
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
                <label className="text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    required
                    className="w-4/5 text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 text-black"
                    placeholder="Enter user name"
                  />
                  <MdOutlineMail size={28} className="ml-2" />
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
              <div>
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="cpassword"
                    type={showcPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="w-4/5 text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 text-black"
                    placeholder="Enter Confirm password"
                  />
                  <button onClick={togglecPasswordVisibility}>
                    {showcPassword ? (
                      <FaEyeSlash size={26} className="ml-2" />
                    ) : (
                      <FaEye size={20} className="ml-2" />
                    )}
                  </button>
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
                  type="button"
                  className="w-4/5 shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Signup
                </button>
              </div>
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
