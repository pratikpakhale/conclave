import React from "react";
import Header from "../Header";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-8px sm:px-16px md:px-24px lg:px-28px xl:px-48px flex flex-col gap-24px py-20 text-text-col bg-color1"
    >
      <div className="text-h2 max-w-7xl w-full mx-auto mb-16px">About</div>
      <div className="relative max-w-7xl w-full mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </section>
  );
}
