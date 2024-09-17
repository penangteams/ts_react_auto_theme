/** @format */
import { NavLink } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";
export default function Signup() {
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [type, setType] = useState("password");
  const [ctype, setcType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [cicon, setcIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const handleToggle_cpwd = () => {
    if (ctype === "password") {
      setcIcon(eye);
      setcType("text");
    } else {
      setcIcon(eyeOff);
      setcType("password");
    }
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
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 text-black"
                    placeholder="Enter user name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>

              <div>
                <label className="text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 text-black"
                    placeholder="Enter user name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={type}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 text-black"
                    placeholder="Enter password"
                  />
                  <span
                    className="flex justify-around items-center"
                    onClick={handleToggle}
                  >
                    <Icon
                      className="absolute mr-10 text-gray-500"
                      icon={icon}
                      size={20}
                    />
                  </span>
                </div>
              </div>
              <div>
                <label className="text-sm mb-2 block">Confirm Password</label>
                <div className="relative flex items-center">
                  <input
                    name="cpassword"
                    type={ctype}
                    value={cpassword}
                    onChange={(e) => setcPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-lg outline-blue-600 text-black"
                    placeholder="Enter Confirm password"
                  />
                  <span
                    className="flex justify-around items-center"
                    onClick={handleToggle_cpwd}
                  >
                    <Icon
                      className="absolute mr-10 text-gray-500"
                      icon={cicon}
                      size={20}
                    />
                  </span>
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
                  className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Signup
                </button>
              </div>
            </section>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
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
