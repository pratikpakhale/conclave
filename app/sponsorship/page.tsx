"use client";
import Footer from "@/components/Footer";
import HomeAnimation from "@/components/Home/HomeAnimation";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-text-col">
      <Navbar />

      <div className="h-[50vh] relative flex items-center justify-center">
        <HomeAnimation />
        <div className="text-h2 text-center absolute text-white font-semibold">
          {/* <p className="z-[2]">Sponsorship</p> */}
          Sponsorship
        </div>
      </div>

      <section className="min-h-[50vh] bg-black">
        <div className="max-w-7xl w-full mx-auto text-white md:text-[1.2rem] xl:text-16px pb-48px px-4 flex flex-col gap-16px text-16px relative">
          <div className="w-full flex justify-center">
            <span className="bg-clip-text text-48px font-bold text-center text-transparent bg-[url('https://www.apple.com/careers/images/fy21/apple_jobs_gradient-final_Apple_Jobs_Gradients_Warm/desktop@2x.png')] [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
              About Us
            </span>
          </div>

          <div>
            IIIT Dharwad, established in 2015 as an Institute of National
            Importance under a Public-Private-Partnership (PPP) between the
            Ministry of Education, Government of India, Dept. of IT BT,
            Government of Karntaka and Keonics, aims to bridge the skill gap in
            high-end IT to maintain India&apos;s global leadership in the
            sector.
          </div>
          <div>
            The institute offers BTech programs in Computer Science and
            Engineering, Electronics and Communication Engineering, and Data
            Science and Artificial Intelligence, focusing on IT applications
            addressing India&apos;s social challenges.
          </div>
          <div>
            Embracing a semi-modern campus design and a stylish yet stately
            logo, IIIT Dharwad reflects its mission and vision in its
            educational approach. Strategically located in Hubballi-Dharwad, a
            hub for prestigious educational institutions, and with improving
            connectivity to Bengaluru, IIIT Dharwad is well-positioned to
            significantly impact the Indian IT industry, academic research, and
            the North Karnataka region.
          </div>
        </div>
      </section>

      <div className="bg-[url('/sponsorship/Landingsection.jpg')] z-[1] before:z-[-1] text-white relative before:absolute before:bg-black/60 before:top-0 before:left-0 before:w-full before:h-full bg-fixed bg-center bg-cover w-full">
        <div className="max-w-6xl mx-auto w-full flex py-44 flex-col gap-44 px-10">
          <ScrollReveal>
            <div className="flex-1 flex justify-start">
              <div className="w-full md:w-[44%] flex flex-col">
                <h1 className="text-28px font-semibold">Deliverables</h1>

                <ul className="list-disc">
                  <li>
                    The{" "}
                    <span className="font-bold">
                      IIIT DHARWAD Conclave - A New Frontier of Talent &
                      Innovation: Explore.Experience.Excel
                    </span>{" "}
                    brings together Thought leaders, Techies, Entrepreneurs,
                    Leading HRs and Talent Acquisition Leaders from{" "}
                    <span>50+ companies</span>, creating a platform for
                    insightful discussions on emerging trends in human
                    resources.
                  </li>
                  <li>
                    This event aims to foster collaboration between{" "}
                    <span>industry leaders and academia</span>, offering deep
                    insights into the evolving landscape of talent management
                    and acquisition.
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex-1 flex justify-end w-full">
              <div className="w-full md:w-[44%] flex flex-col">
                <h1 className="text-28px font-semibold">
                  Impact of the Conclave
                </h1>

                <ul className="list-disc">
                  <li>
                    The conclave is not just a networking event; it&apos;s a
                    pivotal opportunity for the institute to gain{" "}
                    <span className="font-bold">national visibility</span>,
                    positioning itself as a key player in shaping the future of
                    HR practices.
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex-1 flex justify-start">
              <div className="w-full md:w-[44%] flex flex-col">
                <h1 className="text-28px font-semibold">
                  Benefits for Students
                </h1>

                <ul className="list-disc">
                  <li>
                    For students, the conclave opens doors to{" "}
                    <span className="font-bold">
                      internship and placement opportunities
                    </span>
                    , connecting them directly with industry leaders,
                    recruiters, and talent scouts. This event offers a unique
                    chance to showcase their potential and network with top
                    companies, paving the way for future career growth.
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex-1 flex justify-end">
              <div className="w-full md:w-[44%] flex flex-col">
                <h1 className="text-28px font-semibold">R&D and Innovation</h1>

                <ul className="list-disc">
                  <li>
                    Invite global technology firms to explore IIIT Dharwad as a
                    strategic location for setting up R&D centers.
                  </li>
                  <li>
                    Pitch North Karnataka&apos;s untapped potential,{" "}
                    <span className="font-bold">
                      cost-effective infrastructure
                    </span>
                    , and IIIT Dharwad&apos;s{" "}
                    <span className="font-bold">collaborative environment</span>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-8px sm:px-16px md:px-24px lg:px-28px xl:px-48px w-full flex flex-col gap-24px py-16px">
        <div className="px-4 py-20 w-full text-center leading-[1.1] tracking-tighter flex items-center gap-2 flex-col">
          <ScrollReveal>
            <div className="text-48px font-bold">
              Boost your{" "}
              <span className="bg-clip-text text-transparent bg-[url('https://www.apple.com/careers/images/fy21/apple_jobs_gradient-final_Apple_Jobs_Gradients_Warm/desktop@2x.png')] [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
                brand visibility{" "}
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="text-48px font-bold ">
              and engage with top industry talent.
            </div>
          </ScrollReveal>
        </div>{" "}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 mb-24 gap-12px md:grid-cols-3">
          <div className="flex flex-col bg-white rounded-12px p-20px">
            <p className="font-bold text-20px mb-8px">Speaking Opportunities</p>
            <ul className="list-disc pl-12px">
              <li>
                Showcase your company through keynote slots and panel
                discussions.
              </li>
              <li>
                Title and Platinum sponsors receive prime speaking slots to
                address the audience and share insights.
              </li>
            </ul>
          </div>
          <div className="flex flex-col bg-white col-span-2 rounded-12px p-20px">
            <p className="font-bold text-20px mb-8px">
              Networking Opportunities
            </p>
            <ul className="list-disc pl-12px">
              <li>
                Showcase your brand to Leading Techies, HR heads and talent
                acquisition leaders from 50+ companies.
              </li>
              <li>
                Prominent brand placement on stage, banners, digital promotions,
                brochures, and event materials.
              </li>
              <li>
                Recognition in all event-related marketing—social media,
                website, email newsletters, and post-event reports.
              </li>
            </ul>
          </div>
          <div className="flex flex-col bg-white col-span-2 rounded-12px p-20px">
            <p className="font-bold text-20px mb-8px">Brand Visibility</p>
            <ul className="list-disc pl-12px">
              <li>
                Exclusive opportunities to network with industry leaders,
                decision-makers, and academic professionals.
              </li>
              <li>
                Establish partnerships and explore collaborative opportunities
                with fellow sponsors and attending companies.
              </li>
            </ul>
          </div>
          <div className="flex flex-col bg-white rounded-12px p-20px">
            <p className="font-bold text-20px mb-8px">Customized Branding</p>
            <ul className="list-disc pl-12px">
              <li>
                Feature your company&apos;s logo on event merchandise, badges,
                and lanyards.
              </li>
              <li>
                Branding on attendee kits, digital screens, registration desks,
                and booths.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="bg-black min-h-[50vh] pt-28">
        <div className="max-w-7xl w-full mx-auto items-center text-white pb-24 flex flex-col gap-16px text-16px relative">
          <ScrollReveal>
            <div className="w-full flex justify-center items-center">
              <span className="bg-clip-text text-48px font-bold text-center text-transparent bg-gradient-to-r from-purple-400 to-blue-500 [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
                Our Sponsors
              </span>
            </div>
          </ScrollReveal>

          <div className="flex flex-col text-center gap-24px">
            <ScrollReveal>
              <div className="text-16px w-full">
                <p className="text-24px font-bold">Title Sponsor</p>
                <div className="mx-auto w-60 h-auto rounded-8px overflow-hidden bg-white my-10">
                  <Image
                    src={"/companies/fbs.png"}
                    alt="fbs"
                    height={0}
                    width={0}
                    sizes="100%"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-16px w-full">
                <p className="text-24px font-bold mt-8">Supporting Sponsor</p>
                <div className="mx-auto w-32 h-auto rounded-8px overflow-hidden bg-white my-10">
                  <Image
                    src={"/companies/tata-motors.png"}
                    alt="tata-motors"
                    height={0}
                    width={0}
                    sizes="100%"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-black min-h-[50vh] pt-28">
        <div className="max-w-7xl w-full mx-auto items-center text-white pb-24 flex flex-col gap-16px text-16px relative">
          <ScrollReveal>
            <div className="w-full flex justify-center items-center">
              <span className="bg-clip-text text-48px font-bold text-center text-transparent bg-gradient-to-r from-purple-400 to-blue-500 [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
                Sponsorship Tiers
              </span>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-24px">
            <ScrollReveal>
              <div className="text-16px w-fit">
                <p className="text-24px font-bold">
                  Title Sponsor - INR 10 Lakhs
                </p>
                <ul className="list-disc pl-16px">
                  <li>Five complementary registrations.</li>
                  <li>Exclusive Title Mention as Joint Organizer.</li>
                  <li>
                    Keynote Speaking Slot with an opportunity to deliver a
                    keynote.
                  </li>
                  <li>All benefits from the lower tiers included.</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="text-16px w-full">
                <p className="text-24px font-bold mt-8">
                  Platinum Sponsor - INR 5 Lakhs
                </p>
                <ul className="list-disc pl-16px">
                  <li>Three complementary registrations.</li>
                  <li>Prime Booth with premium event location.</li>
                  <li>Extended company ad time on event screens.</li>
                  <li>All benefits from lower tiers included.</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="text-16px w-full">
                <p className="text-24px font-bold mt-8">
                  Gold Sponsor - INR 2.5 Lakhs
                </p>
                <ul className="list-disc pl-16px">
                  <li>Two complementary registrations.</li>
                  <li>Booth Space for your company at the event.</li>
                  <li>Participation in ceremonies and event mention.</li>
                  <li>Moderate screen time for company content.</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="text-16px w-full">
                <p className="text-24px font-bold mt-8">
                  Silver Sponsor - INR 1 Lakh
                </p>
                <ul className="list-disc pl-16px">
                  <li>One complementary registration.</li>
                  <li>Short-time display of customized content on screens.</li>
                  <li>Mention in event brochures and collateral.</li>
                  <li>Logo displayed on banners, screens, and brochures.</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="text-16px w-fit">
                <p className="text-24px font-bold mt-8">
                  Supporting Sponsor - INR 50K
                </p>
                <ul className="list-disc pl-16px">
                  <li>Logo displayed on brochures and banners.</li>
                  <li>Recognition in event-related materials.</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* <div className=" bg-color1/95 p-28px md:p-48px w-[98vw] mx-auto text-text-col backdrop-blur-2xl rounded-t-24px shadow-[0_-3px_hsla(0,0%,100%,.149)]">
          <div className=" flex overflow-clip h-full flex-col items-center justify-between">
            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-16px md:text-28px leading-[1.1]">
                Connect with us to be a part of the HR Conclave 2024 and explore
                endless opportunities!
              </h2>
              <Link
                href={"/contact"}
                className="w-fit text-color1 bg-text-col px-24px py-12px text-16px rounded-16px"
              >
                Contact
              </Link>
            </div>

            <div className="w-full hidden md:flex flex-col h-full flex-1 justify-between text-12px pt-48px">
              <div className="grid grid-cols-4">
                <div className="h-full flex items-end"></div>
                <div className="pr-20">
                  Indian Institute of Information Technology (IIIT) Dharwad,
                  Ittigatti Rd, near Sattur Colony, Karnataka 580009 92VG+24
                  Joga Yellapur, Karnataka
                </div>
                <div className="pr-20 flex flex-col gap-12px">
                  <div className="font-bold mb-4">Site Map</div>
                  <Link href={"/testimonials"}>Testimonials</Link>
                  <Link href={"/rsvp"}>RSVP</Link>
                  <Link href={"/attendee"}>Attendee</Link>
                  <Link href={"/team"}>Committee</Link>
                  <Link href={"/developers"}>Team</Link>
                </div>
                <div className="pr-20 flex flex-col gap-12px">
                  <div className="font-bold mb-4">Follow Us</div>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/cgc-connect-iiit-dharwad-1a0321333/"
                  >
                    Linkedin
                  </a>
                  <a target="_blank" href="https://x.com/cgc_iiitdwd">
                    Twitter
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/cgc.iiitdwd/"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              <div className="">Copyright © IIIT Dharwad - 2024</div>
            </div>

            <div className="flex flex-col py-4 gap-4 w-full text-12px md:hidden">
              <div className="">
                Indian Institute of Information Technology (IIIT) Dharwad,
                Ittigatti Rd, near Sattur Colony, Karnataka 580009 92VG+24 Joga
                Yellapur, Karnataka
              </div>
              <div className="grid grid-cols-2 text-xs">
                <div className="pr-20 flex flex-col gap-8px">
                  <div className="font-bold mb-2">Site Map</div>
                  <Link href={"/testimonials"}>Testimonials</Link>
                  <Link href={"/rsvp"}>RSVP</Link>
                  <Link href={"/attendee"}>Attendee</Link>
                  <Link href={"/team"}>Committee</Link>
                  <Link href={"/developers"}>Team</Link>
                </div>
                <div className="pr-20 flex flex-col gap-12px">
                  <div className="font-bold mb-2">Follow Us</div>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/cgc-connect-iiit-dharwad-1a0321333/"
                  >
                    Linkedin
                  </a>
                  <a target="_blank" href="https://x.com/cgc_iiitdwd">
                    Twitter
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/cgc.iiitdwd/"
                  >
                    Instagram
                  </a>
                </div>
              </div>
              <div className="h-full flex items-end w-full">
                <div className="text-end w-full">
                  Copyright © IIIT Dharwad - 2024
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Footer />
      </section>
    </div>
  );
}
