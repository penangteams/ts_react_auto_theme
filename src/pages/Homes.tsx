/** @format */

import { NavLink } from "react-router-dom";
const Homes = () => {
  return (
    <div>
      <h2>This is a home</h2>
      {/* <NavLink
        to="/about"
        className="cursor-pointer font-semibold bg-gray-400 hover:text-red-400 text-red-500"
      >
        About
      </NavLink> */}
      {/* <NavLink
        to="/contact"
        className="cursor-pointer font-semibold bg-gray-400 hover:text-blue-400 text-blue-500"
      >
        Contact
      </NavLink> */}

      {/* <Navigate to="/about" replace={true} /> */}

      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-500 text-white">
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-500 text-white">
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-600 text-white dark:bg-blue-500">
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white">
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-500 text-white">
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-white text-gray-600">
        Badge
      </span>
    </div>
  );
};

export default Homes;
