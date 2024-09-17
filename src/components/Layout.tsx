/** @format */

import Footer from "./Footer";

import { Outlet } from "react-router-dom";
import NavbarM from "./NavbarM";

const Layout = () => {
  return (
    <>
      <NavbarM />
      <div className="bg-bkg text-content isolate overflow-hidden p-4 sm:p-8 grid place-items-center">
        <main className="flex flex-col md:flex-row min-h-screen">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
