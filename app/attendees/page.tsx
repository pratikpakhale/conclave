"use client";
import Cards from "@/components/Attendees/Cards";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { Attendees, Cheif_Guests, Guest_of_Honor } from "@/data/attendees";
import { useState, useEffect } from "react";
// Add this import at the top with other imports
import { getAttendes } from "../actions/attendes";

// Add this type definition
export type Attendee = {
  _id: string;
  type: string;
  name: string;
  designation: string;
  company: string;
  linkedIn: string;
  studentName1?: string;
  studentName2?: string;
  studentContact1?: string;
  studentContact2?: string;
  studentLinkedIn1?: string;
  studentLinkedIn2?: string;
  photoUrl: string;
};

// Modify the Page component to include attendees state
export default function Page() {
  const [chiefGuests, setChiefGuests] = useState<Attendee[]>([]);
  const [guestsOfHonor, setGuestsOfHonor] = useState<Attendee[]>([]);
  const [generalAttendees, setGeneralAttendees] = useState<Attendee[]>([]);

  useEffect(() => {
    async function fetchData() {
      const attendeesResponse = await getAttendes();
      if (attendeesResponse.success && attendeesResponse.attendes) {
        // Filter attendees by type
        const allAttendees = attendeesResponse.attendes;

        setChiefGuests(allAttendees.filter((a) => a.type === "cg"));
        setGuestsOfHonor(allAttendees.filter((a) => a.type === "gh"));
        setGeneralAttendees(allAttendees.filter((a) => a.type === "attendees"));

        // Log for verification
      }
    }

    fetchData();
  }, []);

  // console.log(chiefGuests, guestsOfHonor, generalAttendees);

  // Rest of your component remains the same
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
              {chiefGuests?.map((guest, index) => (
                <Cards {...guest} key={index} />
              ))}
            </div>

            <div className="text-h3 max-w-7xl w-full tracking-[-0.022em] leading-[1.1] font-semibold text-center mx-auto mt-10">
              Guest of Honor
            </div>
            <div className="my-6 gap-4 flex justify-center">
              {/* <Cards /> */}
              {/* <Cards /> */}
              {guestsOfHonor?.map((guest, index) => (
                <Cards {...guest} key={index} />
              ))}
            </div>

            <div className="text-h3 max-w-7xl w-full tracking-[-0.022em] leading-[1.1] font-semibold text-center mx-auto mt-10">
              Attendees
            </div>
            <div className="my-6 mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {generalAttendees
                ?.filter((attendee) => attendee.name) // Filter out items with no name
                .sort((a, b) => a.name.localeCompare(b.name))
                ?.map((attendee, index) => (
                  <Cards {...attendee} key={index} />
                  // <AttendeesCard {...attendee} key={index} />
                ))}
            </div>

            <div className="text-h2 max-w-7xl my-24 w-fit tracking-[-0.022em] leading-[1.1] font-semibold text-center mx-auto">
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
