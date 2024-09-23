/** @format */
import { useEffect } from "react";

const ThemeButton = () => {
  function getTheme() {
    return window.localStorage.getItem("theme") || "light";
    // Default to Light if key not present.
  }

  function getOppositeTheme() {
    const theme = getTheme();
    if (theme === "light") return "dark";
    else return "light";
  }

  useEffect(() => {
    const button = document.querySelector("#themeToggle");
    const html = document.querySelector("html");

    if (html) html.setAttribute("data-theme", getTheme());

    button?.addEventListener("click", () => {
      const newTheme = getOppositeTheme();
      html?.setAttribute("data-theme", newTheme);
      window.localStorage.setItem("theme", newTheme);
    });
  }, []);

  return (
    <button
      id="themeToggle"
      type="button"
      className="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:bg-orange-600 disabled:opacity-50 disabled:pointer-events-none"
    >
      Mode
    </button>
  );
};

export default ThemeButton;
