"use client";
import React, { useEffect, useState } from "react";
import TimelineComponent from "./TimelineComponent";
import ScrollReveal from "../ScrollReveal";
import { getTimeline } from "@/app/actions/timeline";
import { Timeline } from "@/types/Home";

export default function TimeLine() {
  const [timeline, setTimeline] = useState<Timeline[]>([]);

  useEffect(() => {
    async function fetchTimeline() {
      const response = await getTimeline();
      if (response.success && response.timeline) {
        setTimeline(response.timeline);
      }
    }
    fetchTimeline();
  }, []);
  return (
    <section
      // ref={ref}
      id="agenda"
      className="w-full px-2 z-[-1] relative sm:px-4 text-slate-100 items-center pb-20 bg-color1 md:px-10 lg:px-24 xl:px-44 flex flex-col"
    >
      {/* <Header text="Timeline" /> */}
      <div className="bg-color1 px-4 py-20 w-full text-center flex items-center gap-1 flex-col">
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
          <div className="text-20px">Event Date - 10th November</div>
        </ScrollReveal>
      </div>

      {timeline?.map((item, index) => (
        <div key={index} className="w-full">
          <div className="py-20 mx-auto flex-col flex text-center">
            <p className="text-28px font-semibold">
              {item?.heading1} –{" "}
              <span className="bg-clip-text text-transparent bg-[url('https://www.apple.com/careers/images/fy21/apple_jobs_gradient-final_Apple_Jobs_Gradients_Warm/desktop@2x.png')] [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
                {item?.heading2}
              </span>
            </p>
            <p className="text-20px">{item?.time}</p>
          </div>

          <div className="relative flex flex-col items-left justify-center w-full">
            <div className="absolute z-[-2] w-[3px] left-[40px] md:left-[90px] [mask:linear-gradient(0deg,transparent,white_20%,white_80%,transparent)]  h-full bg-[_theme(colors.slate.300/.18)]">
              <div className="fixed left-auto top-0 right-auto bottom-[50vh] z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(180deg,_theme(colors.indigo.500)_50%,_theme(colors.blue.300),_theme(colors.indigo.500))]"></div>
            </div>

            {item?.timelineComponents?.map((component, key) => (
              <TimelineComponent
                key={key}
                time={component?.time}
                heading={component?.heading}
                content={
                  <ul className="list-disc left-6 py-3 relative">
                    {component?.content?.map((cont, _) => (
                      <li key={_}>{cont}</li>
                    ))}
                  </ul>
                }
              />
            ))}
          </div>
        </div>
      ))}

      {/* <div className="py-20 mx-auto flex-col flex text-center">
        <p className="text-28px font-semibold">
          Invocation Session –{" "}
          <span className="bg-clip-text text-transparent bg-[url('https://www.apple.com/careers/images/fy21/apple_jobs_gradient-final_Apple_Jobs_Gradients_Warm/desktop@2x.png')] [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
            Opening Reflections
          </span>
        </p>
        <p className="text-20px">10:00 AM to 11:00 AM</p>
      </div> */}

      {/* <div className="relative flex flex-col items-left justify-center w-full">
        <div className="absolute z-[-2] w-[3px] left-[40px] md:left-[90px] [mask:linear-gradient(0deg,transparent,white_20%,white_80%,transparent)]  h-full bg-[_theme(colors.slate.300/.18)]">
          <div className="fixed left-auto top-0 right-auto bottom-[50vh] z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(180deg,_theme(colors.indigo.500)_50%,_theme(colors.blue.300),_theme(colors.indigo.500))]"></div>
        </div>

        <TimelineComponent
          time="10:00 AM"
          heading="Dance by Cultural Club"
          content={<></>}
        />

        <TimelineComponent
          time="10:10 AM"
          heading="Welcome Address"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>
                Prof. S. R. Mahadeva Prasanna, Hon. Director, IIIT Dharwad.
              </li>
              <li>Showcasing Introductory video of the Institute</li>
            </ul>
          }
        />

        <TimelineComponent
          time="10:30 AM"
          heading="Presentation by Bureau of Indian Standards"
          content={<></>}
        />

        <TimelineComponent
          time="10:45 AM"
          heading="Title Sponsor Presentation by Fuel Business School"
          content={<></>}
        />
      </div>
      <div className="py-20 mx-auto flex-col flex text-center">
        <p className="text-28px font-semibold">
          Main Event –{" "}
          <span className="bg-clip-text text-transparent bg-[url('https://www.apple.com/careers/images/fy21/apple_jobs_gradient-final_Apple_Jobs_Gradients_Warm/desktop@2x.png')] [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
            Celebration of Excellence
          </span>
        </p>
        <p className="text-20px">11:00 AM to 12:30 PM</p>
      </div> */}

      {/* <div className="relative flex flex-col items-left justify-center w-full">
        <div className="absolute z-[-2] w-[3px] left-[40px] md:left-[90px] [mask:linear-gradient(0deg,transparent,white_20%,white_80%,transparent)]  h-full bg-[_theme(colors.slate.300/.18)]">
          <div className="fixed left-auto top-0 right-auto bottom-[50vh] z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(180deg,_theme(colors.indigo.500)_50%,_theme(colors.blue.300),_theme(colors.indigo.500))]"></div>
        </div>

        <TimelineComponent
          time="11:00 AM"
          heading="Ceremonial Lamp Lighting"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>Inaugural Address by the Director, IIIT Dharwad</li>
            </ul>
          }
        />

        <TimelineComponent
          time="11:15 AM"
          heading="Unveiling of '10 Years of IIIT Dharwad' Celebration by the Chief Guest"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>
                Address by Padma Bhushan Ajai Chowdhary, Founder of HCL (online)
              </li>
              <li>Address by Aravind Melligeri, Founder of Aequs (online)</li>
              <li>Launch of IIIT Dharwad Online Initiative</li>
              <li>Launch of Aihole Labs</li>
              <ul className="list-[circle] left-6 py-3 relative">
                <li>Launch of Portable Hydrogen Generator</li>
              </ul>
            </ul>
          }
        />

        <TimelineComponent
          time="11:35 AM"
          heading="Chief Guest's Speech"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>Felicitation of Chief Guest</li>
            </ul>
          }
        />

        <TimelineComponent
          time="12:10 PM"
          heading="Felicitation of Delegates"
          content={<></>}
        />
      </div>
      <div className="py-20 mx-auto flex-col flex text-center">
        <p className="text-28px font-semibold">
          Panel Discussion –{" "}
          <span className="bg-clip-text text-transparent bg-[url('https://www.apple.com/careers/images/fy21/apple_jobs_gradient-final_Apple_Jobs_Gradients_Warm/desktop@2x.png')] [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
            Visionary Dialogues
          </span>
        </p>
        <p className="text-20px">12:30 PM to 5:30 PM</p>
      </div> */}

      {/* <div className="relative flex flex-col items-left justify-center w-full">
        <div className="absolute z-[-2] w-[3px] left-[40px] md:left-[90px] [mask:linear-gradient(0deg,transparent,white_20%,white_80%,transparent)]  h-full bg-[_theme(colors.slate.300/.18)]">
          <div className="fixed left-auto top-0 right-auto bottom-[50vh] z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(180deg,_theme(colors.indigo.500)_50%,_theme(colors.blue.300),_theme(colors.indigo.500))]"></div>
        </div>

        <TimelineComponent
          time="12:30 PM"
          heading="Panel Discussion 1"
          content={
            <ul className="list-disc left-6 py-3 relative">
              <li>
                Challenges & Opportunities of Technology Disruption in VUCA
                world: Navigating the Future of Skills & Work.
              </li>
            </ul>
          }
        />

        <TimelineComponent
          time="1:30 PM"
          heading="Lunch break"
          content={<></>}
        />

        <TimelineComponent
          time="2:30 PM"
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
          time="3:30 PM"
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
          time="4:30 PM"
          heading="Open Q&A Session for Students"
          content={<> </>}
        />
        <TimelineComponent
          time="5:00 PM"
          heading="Dance by the Cultural Club to depict Success"
          content={<> </>}
        />
        <TimelineComponent
          time="5:10 PM"
          heading="Vote of Thanks followed by the National Anthem"
          content={<> </>}
        />
        <TimelineComponent
          time="5:20 PM"
          heading="Group Photograph with all delegates on stage."
          content={<> </>}
        />

        <TimelineComponent
          time="5:30 PM"
          heading="Winding up with High Tea and Networking"
          content={<> </>}
        />
      </div> */}
    </section>
  );
}
