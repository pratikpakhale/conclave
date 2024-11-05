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
            List={members
              ?.filter(
                (member) =>
                  member.committeeName === "invitation_media_management"
              )
              .sort((a, b) => {
                // Sort by position
                const positionOrder = ["lead", "co-lead", "member"];
                const positionDiff =
                  positionOrder.indexOf(a.position) -
                  positionOrder.indexOf(b.position);
                if (positionDiff !== 0) {
                  return positionDiff;
                }

                // Sort by name
                return a.studentName.localeCompare(b.studentName);
              })}
          />
          <Accordion
            Heading="Registration, Feedback and FollowUp Committee  "
            List={members
              ?.filter(
                (member) =>
                  member.committeeName === "registration_feedback_followup"
              )
              .sort((a, b) => {
                // Sort by position
                const positionOrder = ["lead", "co-lead", "member"];
                const positionDiff =
                  positionOrder.indexOf(a.position) -
                  positionOrder.indexOf(b.position);
                if (positionDiff !== 0) {
                  return positionDiff;
                }

                // Sort by name
                return a.studentName.localeCompare(b.studentName);
              })}
          />
          <Accordion
            Heading="Program and Agenda Committee"
            List={members
              ?.filter((member) => member.committeeName === "program_agenda")
              .sort((a, b) => {
                // Sort by position
                const positionOrder = ["lead", "co-lead", "member"];
                const positionDiff =
                  positionOrder.indexOf(a.position) -
                  positionOrder.indexOf(b.position);
                if (positionDiff !== 0) {
                  return positionDiff;
                }

                // Sort by name
                return a.studentName.localeCompare(b.studentName);
              })}
          />
          <Accordion
            Heading="Stage and Memento Committee"
            List={members
              ?.filter((member) => member.committeeName === "stage_memento")
              .sort((a, b) => {
                // Sort by position
                const positionOrder = ["lead", "co-lead", "member"];
                const positionDiff =
                  positionOrder.indexOf(a.position) -
                  positionOrder.indexOf(b.position);
                if (positionDiff !== 0) {
                  return positionDiff;
                }

                // Sort by name
                return a.studentName.localeCompare(b.studentName);
              })}
          />
          <Accordion
            Heading="Food Committee"
            List={members
              ?.filter((member) => member.committeeName === "food")
              .sort((a, b) => {
                // Sort by position
                const positionOrder = ["lead", "co-lead", "member"];
                const positionDiff =
                  positionOrder.indexOf(a.position) -
                  positionOrder.indexOf(b.position);
                if (positionDiff !== 0) {
                  return positionDiff;
                }

                // Sort by name
                return a.studentName.localeCompare(b.studentName);
              })}
          />
          <Accordion
            Heading="Transportation and Hospitality Committee "
            List={members
              ?.filter(
                (member) =>
                  member.committeeName === "transportation_hospitality"
              )
              .sort((a, b) => {
                // Sort by position
                const positionOrder = ["lead", "co-lead", "member"];
                const positionDiff =
                  positionOrder.indexOf(a.position) -
                  positionOrder.indexOf(b.position);
                if (positionDiff !== 0) {
                  return positionDiff;
                }

                // Sort by name
                return a.studentName.localeCompare(b.studentName);
              })}
          />
          <Accordion
            Heading="Sponsorship and Outreach Committee"
            List={members
              ?.filter(
                (member) => member.committeeName === "sponsorship_outreach"
              )
              .sort((a, b) => {
                // Sort by position
                const positionOrder = ["lead", "co-lead", "member"];
                const positionDiff =
                  positionOrder.indexOf(a.position) -
                  positionOrder.indexOf(b.position);
                if (positionDiff !== 0) {
                  return positionDiff;
                }

                // Sort by name
                return a.studentName.localeCompare(b.studentName);
              })}
          />
          <Accordion
            Heading="Student Coordination and Volunteers Committee "
            List={members
              ?.filter(
                (member) =>
                  member.committeeName === "student_coordination_volunteers"
              )
              .sort((a, b) => {
                // Sort by position
                const positionOrder = ["lead", "co-lead", "member"];
                const positionDiff =
                  positionOrder.indexOf(a.position) -
                  positionOrder.indexOf(b.position);
                if (positionDiff !== 0) {
                  return positionDiff;
                }

                // Sort by name
                return a.studentName.localeCompare(b.studentName);
              })}
          />
          <Accordion
            Heading="Alumni Team"
            List={members
              ?.filter((member) => member.committeeName === "alumni")
              .sort((a, b) => {
                // Sort by position
                const positionOrder = ["lead", "co-lead", "member"];
                const positionDiff =
                  positionOrder.indexOf(a.position) -
                  positionOrder.indexOf(b.position);
                if (positionDiff !== 0) {
                  return positionDiff;
                }

                // Sort by name
                return a.studentName.localeCompare(b.studentName);
              })}
          />
          <Accordion
            Heading="EMCEE Team"
            List={members
              ?.filter((member) => member.committeeName === "emcee")
              .sort((a, b) => {
                // Sort by position
                const positionOrder = ["lead", "co-lead", "member"];
                const positionDiff =
                  positionOrder.indexOf(a.position) -
                  positionOrder.indexOf(b.position);
                if (positionDiff !== 0) {
                  return positionDiff;
                }

                // Sort by name
                return a.studentName.localeCompare(b.studentName);
              })}
          />
          <Accordion
            Heading="Video Bytes Committee"
            List={members
              ?.filter((member) => member.committeeName === "video_bytes")
              .sort((a, b) => {
                // Sort by position
                const positionOrder = ["lead", "co-lead", "member"];
                const positionDiff =
                  positionOrder.indexOf(a.position) -
                  positionOrder.indexOf(b.position);
                if (positionDiff !== 0) {
                  return positionDiff;
                }

                // Sort by name
                return a.studentName.localeCompare(b.studentName);
              })}
          />
        </div>
        {/* <div className="bg-text-col h-40 w-full"></div> */}
        <Footer />
      </div>
    </main>
  );
}
