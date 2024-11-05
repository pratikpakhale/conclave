"use client";
import React, { useEffect, useState } from "react";
// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Accordion from "@/components/team/Accordion";
import Footer from "@/components/Footer";
import { getMembers } from "../actions/committee";
import { member } from "@/types/Teams";

export default function Page() {
  const [members, setMembers] = useState<member[]>([]);
  useEffect(() => {
    async function fetchMembers() {
      const response = await getMembers();
      if (response.success && response.member) {
        setMembers(response.member);
      }
    }

    fetchMembers();
  }, []);

  return (
    <main className="">
      <Navbar />
      <div className="bg-text-col min-h-screen h-full w-full relative">
        <div className="w-full relative text-color1 min-h-screen h-full pt-40  pb-40 items-center bg-text-col flex flex-col">
          <p className="text-5xl text-center font-bold">Team Members</p>
          <Accordion
            Heading="Invitation, Media and Management Committee "
            List={members?.filter(
              (member) => member.committeeName === "invitation_media_management"
            )}
          />
          <Accordion
            Heading="Registration, Feedback and FollowUp Committee  "
            List={members?.filter(
              (member) =>
                member.committeeName === "registration_feedback_followup"
            )}
          />
          <Accordion
            Heading="Program and Agenda Committee"
            List={members?.filter(
              (member) => member.committeeName === "program_agenda"
            )}
          />
          <Accordion
            Heading="Stage and Memento Committee"
            List={members?.filter(
              (member) => member.committeeName === "stage_memento"
            )}
          />
          <Accordion
            Heading="Food Committee"
            List={members?.filter((member) => member.committeeName === "food")}
          />
          <Accordion
            Heading="Transportation and Hospitality Committee "
            List={members?.filter(
              (member) => member.committeeName === "transportation_hospitality"
            )}
          />
          <Accordion
            Heading="Sponsorship and Outreach Committee"
            List={members?.filter(
              (member) => member.committeeName === "sponsorship_outreach"
            )}
          />
          <Accordion
            Heading="Student Coordination and Volunteers Committee "
            List={members?.filter(
              (member) =>
                member.committeeName === "student_coordination_volunteers"
            )}
          />
          <Accordion
            Heading="Alumni Team"
            List={members?.filter(
              (member) => member.committeeName === "alumni"
            )}
          />
          <Accordion
            Heading="EMCEE Team"
            List={members?.filter((member) => member.committeeName === "emcee")}
          />
          <Accordion
            Heading="Video Bytes Committee"
            List={members?.filter(
              (member) => member.committeeName === "video_bytes"
            )}
          />
        </div>
        {/* <div className="bg-text-col h-40 w-full"></div> */}
        <Footer />
      </div>
    </main>
  );
}
