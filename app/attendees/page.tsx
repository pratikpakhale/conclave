import Cards from "@/components/Attendees/Cards";
import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="bg-text-col h-full w-full relative">
        <div className="w-full relative text-color1 pt-40 items-center bg-text-col flex flex-col">
          <div className="max-w-7xl w-full">
            {/* <p className="text-5xl w-full text-center font-bold">Attendees</p> */}

            <div className="text-3xl w-full font-semibold mt-10">
              Chief Guests
            </div>
            <div className="my-6 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Cards />
              <Cards />
            </div>

            <div className="text-3xl w-full font-semibold mt-10">Attendees</div>
            <div className="my-6 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
