import React from "react";
import TimelineComponent from "./TimelineComponent";
import ScrollReveal from "../ScrollReveal";
// import Header from "../Header";

export default function TimeLine() {
  return (
    <section
      // ref={ref}
      id="timeline"
      className="w-full px-2 z-[-1] relative sm:px-4 text-slate-100 items-center pb-20 bg-color1 md:px-10 lg:px-24 xl:px-44 flex flex-col"
    >
      {/* <Header text="Timeline" /> */}
      <div className="bg-color1 px-4 py-20 w-full text-center flex items-center gap-2 flex-col">
        <ScrollReveal>
          <div className="text-28px font-bold">IIIT Dharwad Conclave 2024</div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="text-48px font-bold leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            A day packed with insightful events.
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="text-20px">
            Discover the schedule and get ready for an enriching experience!
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="text-20px">Event Date - 9th and 10th November</div>
        </ScrollReveal>
      </div>

      <div className="relative flex flex-col items-left justify-center w-full">
        <div className="absolute z-[-2] w-[3px] left-[40px] md:left-[90px] [mask:linear-gradient(0deg,transparent,white_20%,white_80%,transparent)]  h-full bg-[_theme(colors.slate.300/.18)]">
          <div className="fixed left-auto top-0 right-auto bottom-[50vh] z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(180deg,_theme(colors.indigo.500)_50%,_theme(colors.blue.300),_theme(colors.indigo.500))]"></div>
        </div>

        <TimelineComponent
          time="8:50 AM"
          heading="Arrival of VIP Delegates"
          content={<></>}
        />

        <TimelineComponent
          time="9:15 AM"
          heading="Invocation Dance by the Cultural Club"
          content={<></>}
        />

        <TimelineComponent
          time="9:20 AM"
          heading="Welcome Address"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>
                Prof. S. R. Mahadeva Prasanna,Honorable Director, IIIT Dharwad
              </li>
              <li>10 Years Celebration Video.</li>
            </ul>
          }
        />

        <TimelineComponent
          time="9:30 AM"
          heading="Panel Discussion 1"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>
                Challenges & Opportunities of T echnology Disruption in VUCA
                world: Navigating the Future of Skills & W ork.
              </li>
            </ul>
          }
        />

        <TimelineComponent
          time="10:30 AM"
          heading="Networking Break"
          content={<></>}
        />

        <TimelineComponent
          time="11:00 AM"
          heading="Ceremonial Lamp Lighting"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>Address by the Director</li>
              <li>Chief Guest&apos;s Speech</li>
            </ul>
          }
        />

        <TimelineComponent
          time="11:30 AM"
          heading="Felicitation of VIP Delegates by the Chief Guest"
          content={<></>}
        />

        <TimelineComponent
          time="12:00 AM"
          heading="Panel Discussion 2"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>
                The Challenges of UpSkilling & ReSkilling Gen Alpha - Preparing
                the workforce of tomorrow.
              </li>
            </ul>
          }
        />

        <TimelineComponent
          time="1:00 PM"
          heading="Lunch break"
          content={<></>}
        />

        <TimelineComponent
          time="2:10 PM"
          heading="Panel Discussion 3"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>
                Talent Ecosystem 2030: Shaping Tomorrow&apos;s Workforce for a
                Dynamic Employment Landscape
              </li>
            </ul>
          }
        />

        <TimelineComponent
          time="3:10 PM"
          heading="Open Q&A Session for Students"
          content={<> </>}
        />
        <TimelineComponent
          time="3:40 PM"
          heading="Dance by the Cultural Club to depict Success"
          content={<> </>}
        />
        <TimelineComponent
          time="3:45 PM"
          heading="Vote of Thanks followed by the National Anthem"
          content={<> </>}
        />
        <TimelineComponent
          time="4:05 PM"
          heading="High Tea with Networking"
          content={<> </>}
        />

        <TimelineComponent
          time="4:30 PM"
          heading="Conclusion of the Event"
          content={<> </>}
        />
        {/* <TimelineComponent
          time="Coming Soon"
          heading="Conclave Event - 9th & 10th November"
          content={
            <div className="py-3">
              <p>Details for this event will be announced soon. Stay tuned!</p>
            </div>
          }
        /> */}
      </div>
    </section>
  );
}
