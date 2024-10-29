"use client";
import Cards from "@/components/Attendees/Cards";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { Attendees, Cheif_Guests } from "@/data/attendees";
import React from "react";

export default function page() {
  return (
    <main className="min-h-screen bg-text-col">
      <Navbar />
      <div className="bg-text-col h-full w-full md:px-10 lg:px-24 xl:px-44 px-2 sm:px-4 relative">
        <div className="w-full relative text-color1 pt-20 items-center bg-text-col flex flex-col">
          <div className="max-w-7xl w-full">
            <div className="text-h2 max-w-7xl my-24 w-full tracking-[-0.022em] leading-[1.1] font-semibold text-center mx-auto">
              <ScrollReveal>
                <p>
                  Connect with{" "}
                  <span className="inline-block bg-[0_0] bg-[url('https://www.apple.com/careers/images/fy21/apple_jobs_gradient_final_Apple_Jobs_Gradients_Full_Large/desktop@2x.png')] bg-clip-text [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
                    top leaders and experts,
                  </span>
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <p>
                  <span className="inline-block bg-[0_0] bg-[url('https://www.apple.com/careers/images/fy21/apple_jobs_gradient_final_Apple_Jobs_Gradients_Full_Large/desktop@2x.png')] bg-clip-text [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
                    meet future professionals
                  </span>{" "}
                  — don’t miss out!
                </p>
              </ScrollReveal>
            </div>

            {/* <p className="text-5xl w-full text-center font-bold">Attendees</p> */}

            <div className="text-h3 max-w-7xl w-full tracking-[-0.022em] leading-[1.1] font-semibold text-center mx-auto mt-10">
              Chief Guests
            </div>
            <div className="my-6 gap-4 flex justify-center">
              {/* <Cards /> */}
              {/* <Cards /> */}
              {Cheif_Guests?.map((guest, index) => (
                <Cards
                  title={guest?.title}
                  company={guest?.company}
                  color={guest?.color}
                  position={guest?.position}
                  src={guest?.src}
                  linkedin={guest?.linkedin}
                  key={index}
                />
              ))}
            </div>

            <div className="text-h3 max-w-7xl w-full tracking-[-0.022em] leading-[1.1] font-semibold text-center mx-auto mt-10">
              Attendees
            </div>
            <div className="my-6 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
              {Attendees?.map((attendee, index) => (
                <Cards
                  title={attendee?.title}
                  company={attendee?.company}
                  color={attendee?.color}
                  position={attendee?.position}
                  src={attendee?.src}
                  linkedin={attendee?.linkedin}
                  key={index}
                />
              ))}
            </div>

            <div className="text-h2 max-w-7xl my-24 w-full tracking-[-0.022em] leading-[1.1] font-semibold text-center mx-auto">
              <ScrollReveal>
                <p>
                  With many more{" "}
                  <span className="inline-block bg-[0_0] bg-[url('https://www.apple.com/careers/images/fy21/apple_jobs_gradient_final_Apple_Jobs_Gradients_Full_Large/desktop@2x.png')] bg-clip-text [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
                    esteemed guests
                  </span>{" "}
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <p>expected to join us soon.</p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
