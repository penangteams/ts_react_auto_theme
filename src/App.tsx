/** @format */

import image1 from "./assets/images/image-1.png";
import image2 from "./assets/images/image-2.png";
import image3 from "./assets/images/image-3.png";
import Card from "./components/Card";
import { CardProps } from "./types";

const cardData = [
  {
    title: "Galaxy Swirls",
    img: {
      src: image1,
      alt: "galaxy swirl",
    },
    description:
      "Galaxy swirls refer to the patterns of stars and gas within galaxies that appear as spiral arms. These arms are formed by the gravitational forces between stars and the rotation of the galaxy.",
    cta: "Let’s Gooooooo!",
  },
  {
    title: "Rad Beaches",
    img: {
      src: image2,
      alt: "beach at sunset",
    },
    description:
      "Beaches at sunset offer a picturesque view of the sun setting over the ocean, with warm hues of orange, pink, and purple painting the sky. It's a serene and romantic experience.",
    cta: "Take me surfing!",
  },
  {
    title: "Killer Mountains",
    img: {
      src: image3,
      alt: "jagged mountains",
    },
    description:
      "Mountains are majestic landforms characterized by steep slopes and high elevations. They are often associated with natural beauty, adventure, and challenge, and are home to diverse ecosystems and unique cultures.",
    cta: "Pack My Bags",
  },
];

function App() {
  function getTheme() {
    return window.localStorage.getItem("theme") || "light";
    // Default to Light if key not present.
  }

  function getOppositeTheme() {
    const theme = getTheme();
    if (theme === "light") return "dark";
    else return "light";
  }

  window.onload = () => {
    const button = document.querySelector("#themeToggle");
    const html = document.querySelector("html");

    if (html) html.setAttribute("data-theme", getTheme());

    button?.addEventListener("click", () => {
      const newTheme = getOppositeTheme();
      html?.setAttribute("data-theme", newTheme);
      window.localStorage.setItem("theme", newTheme);
    });
  };
  return (
    <>
      <div className="bg-bkg text-content isolate overflow-hidden p-4 sm:p-8 grid place-items-center">
        <button
          id="themeToggle"
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
        >
          Toggle Theme
        </button>
        <div
          className="grid relative min-h-screen place-items-center place-content-center gap-16 before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10
      "
        >
          <h1 className="text-6xl font-bold">
            <span className="underline decoration-accent-1">Dark</span> or{" "}
            <span className="underline decoration-accent-1">Light</span>?
          </h1>
          <section
            className="container grid sm:grid-cols-2 md:grid-cols-3 gap-6 items-start"
            aria-label="card container"
          >
            {cardData.map((card: CardProps) => (
              <Card {...card} key={card.title} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
