import React from "react";
import TimelineComponent from "./TimelineComponent";
// import Header from "../Header";

export default function TimeLine() {
  return (
    <section
      id="timeline"
      className="w-full px-2 z-[-3] mb-44 sm:px-4 text-slate-100 items-center bg-[#080618] md:px-10 lg:px-24 xl:px-44 flex flex-col"
    >
      {/* <Header text="Timeline" /> */}
      <div className="bg-[#080618]  py-20 flex items-center flex-col">
        <div className="text-2xl font-semibold">
          The HR Conclave 2024 unfolds with a day packed with insightful events.
        </div>
        <div className="text-lg">
          Here&apos;s how the day will go… Buckle up for an enriching
          experience!
        </div>
      </div>

      <div className="relative flex flex-col items-left justify-center w-full">
        <div className="absolute z-[-2] w-[3px] left-[90px] h-full bg-[#414141]">
          <div className="fixed left-auto top-0 right-auto bottom-[50vh] z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(180deg,#1fa5fd,#1fa5fd_51%,#002fff)]"></div>
        </div>

        <TimelineComponent
          time="9:30 AM"
          heading="Inaugural Session"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>Welcome Address by the Director</li>
              <li>Special Remarks by Chief Guest</li>
              <li>Introduction to the Conclave Theme</li>
              <li>Vote of Thanks</li>
            </ul>
          }
        />

        <TimelineComponent
          time="10:15 AM"
          heading="KeyNote Speech"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>Speaker: Industry Leader / Senior HR Professional</li>
              <li>
                Topic: The Future of Work – Trends Shaping Tomorrow’s Workforce
              </li>
            </ul>
          }
        />

        <TimelineComponent
          time="11:00 AM"
          heading="Panel Discussion 1: Bridging the Gap between Academia and Industry"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>
                WPanelists: HR heads from top companies, faculty, and alumni
              </li>
              <li>Topics of Discussion:</li>
              <ul className="list-[circle] left-6 py-3 relative">
                <li>Aligning academic curricula with industry requirements</li>
                <li>
                  Creating experiential learning opportunities (internships,
                  apprenticeships)
                </li>
                <li>Fostering innovation through collaborative research</li>
              </ul>
            </ul>
          }
        />

        <TimelineComponent
          time="12:00 PM"
          heading="Tea/Coffee Break & Networking"
          content={<></>}
        />

        <TimelineComponent
          time="12:30 PM"
          heading="Panel Discussion 2: Evolving Role of HR in the Digital Age"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>Panelists: Senior HR executives and tech experts</li>
              <li>Topics of Discussion:</li>
              <ul className="list-[circle] left-6 py-3 relative">
                <li>Impact of AI and automation on HR processes</li>
                <li>Managing hybrid workplaces and employee well-being</li>
                <li>Future skills and competencies in demand</li>
              </ul>
            </ul>
          }
        />

        <TimelineComponent
          time="1:30 PM"
          heading="Lunch and Networking"
          content={<></>}
        />

        <TimelineComponent
          time="2:30 PM"
          heading="Student-Led Session: Talent Showcase"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>
                Presentations by students on innovative projects and research
              </li>
              <li>SInteractive Q&A with company representatives</li>
              <li>
                Opportunity for companies to identify talent for internships or
                projects
              </li>
            </ul>
          }
        />

        <TimelineComponent
          time="3:30 PM"
          heading="Interactive Workshop: Effective Career Planning"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>Workshop conducted by industry experts</li>
              <li>Topics covered:</li>
              <ul className="list-[circle] left-6 py-3 relative">
                <li>Resume building and interview skills</li>
                <li>Career planning and growth strategies</li>
              </ul>
            </ul>
          }
        />

        <TimelineComponent
          time="4:30 PM"
          heading="Closing Session & Awards Ceremony"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>Summary of key takeaways from the conclave</li>
              <li>Closing Remarks by the Director</li>
            </ul>
          }
        />

        <TimelineComponent
          time="5:00 PM"
          heading="Post-Conclave Networking and Informal Interactions"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>
                Informal discussions between students, faculty, and industry
                leaders.
              </li>
            </ul>
          }
        />
      </div>
    </section>
  );
}
