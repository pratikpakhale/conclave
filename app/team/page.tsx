"use client";
import React from "react";
// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  EMCEETeam,
  Invitation_Team_Members,
  VideoBytes,
  foodCommitteeMembers,
  sponsorshipteam,
  studentVolunteerTeam,
  transportationHospitalityTeam,
} from "@/data/team";
import { Registration_Team_Members } from "@/data/team";
import { Program_Team_Members } from "@/data/team";
import { stageCommitteeMembers } from "@/data/team";
import Accordion from "@/components/team/Accordion";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="">
      <Navbar />
      <div className="bg-text-col min-h-screen h-full w-full relative">
        <div className="w-full relative text-color1 min-h-screen h-full pt-40  pb-40 items-center bg-text-col flex flex-col">
          <p className="text-5xl text-center font-bold">Team Members</p>
          <Accordion
            Heading="Invitation, Media and Management Committee "
            List={Invitation_Team_Members}
          />
          <Accordion
            Heading="Registration, Feedback and FollowUp Committee  "
            List={Registration_Team_Members}
          />
          <Accordion
            Heading="Program and Agenda Committee"
            List={Program_Team_Members}
          />
          <Accordion
            Heading="Stage and Memento Committee"
            List={stageCommitteeMembers}
          />
          <Accordion Heading="Food Committee" List={foodCommitteeMembers} />
          <Accordion
            Heading="Transportation and Hospitality Committee "
            List={transportationHospitalityTeam}
          />
          <Accordion
            Heading="Sponsorship and Outreach Committee"
            List={sponsorshipteam}
          />
          <Accordion
            Heading="Student Coordination and Volunteers Committee "
            List={studentVolunteerTeam}
          />
          <Accordion Heading="EMCEE Team" List={EMCEETeam} />
          <Accordion Heading="Video Bytes Committee" List={VideoBytes} />
        </div>
        {/* <div className="bg-text-col h-40 w-full"></div> */}
        <Footer />
      </div>
    </main>
  );
}
