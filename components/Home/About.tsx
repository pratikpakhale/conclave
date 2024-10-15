import React from "react";
import Header from "../Header";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-2 sm:px-4 md:px-10 lg:px-24 xl:px-44 flex flex-col py-20 bg-[#e1e5f2]"
    >
      <Header text="About Us" />
      <div className="relative">
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
