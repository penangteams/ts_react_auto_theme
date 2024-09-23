/** @format */
//https://codesandbox.io/embed/conversational-rszsp
//https://readymadeui.com/tailwind/component/navbar-with-center-logo
import React from "react";
import DropDownCard from "./dropDownCard";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeButton from "./ThemeButton";
// const sampleData = new Array(7).fill("item name");
const menuItems = ["Contact", "About", "Admin", "Blog"];
import useAuth from "../hooks/useAuth";
import Cookies from "js-cookie";

const NavbarM = () => {
  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [c__user, setCuser] = React.useState("");
  function handleClick(e) {
    if (!e.target.closest(`.${drop.current.className}`) && open) {
      setOpen(false);
    }
  }
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    const valued = Cookies.get("myuser");
    setCuser(valued);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth({});
    Cookies.remove("myuser");
    navigate("/");
  };
  return (
    <header className="flex shadow-lg py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
        <NavLink
          to="/"
          className="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </NavLink>

        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <NavLink to="/">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </NavLink>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink
                to="/"
                className="hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
              >
                Home
              </NavLink>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink
                to="/contact"
                className="hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
              >
                Contact
              </NavLink>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink
                to="/admin"
                className="hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
              >
                Admin
              </NavLink>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink
                to="/blog"
                className="hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center ml-auto space-x-6">
          {!c__user ? (
            <button className="font-semibold text-[15px] border-none outline-none">
              <NavLink to="/login" className="text-[#007bff] hover:underline">
                Login
              </NavLink>
            </button>
          ) : (
            <button
              className="font-semibold text-[15px] border-none outline-none text-[#ff5500] hover:underline"
              onClick={logout}
            >
              Logout
            </button>
          )}
          {!c__user ? (
            <button
              onClick={() => navigate("signup")}
              className="px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
            >
              Sign up
            </button>
          ) : null}
          {/* hamburger button here... kerja on classname??*/}
          <div
            className="dropdown"
            ref={drop}
            style={{
              position: "relative",
              margin: "16px",
              width: "auto",
              zIndex: 2000,
              display: "inline-block",
            }}
          >
            <div className="lg:hidden">
              <button
                onClick={() => {
                  setOpen((open) => !open);
                }}
                type="button"
                className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-orange-200 bg-white text-orange-800 shadow-sm hover:bg-orange-50 focus:outline-none focus:bg-orange-50 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
            {open && <DropDownCard data={menuItems} setOpen={setOpen} />}
          </div>
          {/* hamburger button ends here... */}
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default NavbarM;
