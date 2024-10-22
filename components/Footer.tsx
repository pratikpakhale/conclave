// "use client";
// import { useRef } from "react";
// import { useScroll, motion, useTransform } from "framer-motion";
// import Link from "next/link";

// export default function Page() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "end end"],
//   });
//   const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
//   const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

//   return (
//     <motion.div
//       style={{ y }}
//       ref={container}
//       className="relative bg-color1 z-[6] text-white w-full flex flex-col items-center justify-center"
//     >
//       <div className="pt-[400px] w-full max-w-[1800px] bg-color1">
//         {/* Two Column Layout - switch to single column on mobile */}
//         <div className="mx-[40px] md:mx-[200px] relative grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-40">
//           {/* Left Column (Existing Contact Content) */}

//           <div className="w-full border-b relative border-b-gray-500 pb-[100px]">
//             <span className="flex items-center">
//               <h2 className="text-[5vw] leading-[1.1]">Let&apos;s get</h2>
//             </span>
//             <h2 className="text-[5vw] leading-[1.1]">in touch</h2>
//             <motion.div style={{ x }} className="absolute bottom-0 left-0">
//               <Link
//                 href={"/contact"}
//                 className="w-[150px] md:w-[180px] aspect-square -translate-x-1/5 -translate-y-1/2 bg-[#8a84e3] text-white rounded-full absolute flex items-center justify-center"
//               >
//                 <p className="z-[2] relative">Contact</p>
//               </Link>
//             </motion.div>
//             <motion.svg
//               style={{ rotate, scale: 2 }}
//               width="9"
//               height="9"
//               viewBox="0 0 9 9"
//               fill="none"
//               className={"absolute top-[30%] left-full"}
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
//                 fill="white"
//               />
//             </motion.svg>

//             <div className="flex flex-col md:flex-row gap-5 border-gray-500 border w-fit px-6 py-4 rounded-full mt-[100px]">
//               <p>cgcoffice@iiitdwd.ac.in</p>
//             </div>
//           </div>

//           {/* Right Column (Carousel) */}
//           <div className="w-full">{/* <LinkedInCarousel /> */}</div>
//         </div>

//         <div className="flex flex-col-reverse md:flex-row gap-4 justify-between mt-[100px] p-5">
//           <div className="flex gap-[10px] items-end">
//             <span className="flex flex-col gap-4">
//               <h3 className="px-1 text-gray-400">Version</h3>
//               <p className="px-1 cursor-pointer ">2024 © Edition</p>
//             </span>
//           </div>
//           <span className="flex border-b border-b-gray-500 md:border-b-0 flex-col gap-4 pb-4 md:pb-0 md:items-end">
//             <h3 className="text-gray-400">Socials</h3>
//             <div className="flex gap-4 flex-wrap">
//               <a
//                 target="_blank"
//                 href="https://www.linkedin.com/in/cgc-connect-iiit-dharwad-1a0321333/"
//               >
//                 Linkedin
//               </a>
//               <a target="_blank" href="https://x.com/cgc_iiitdwd">
//                 Twitter
//               </a>
//               <a target="_blank" href="https://www.instagram.com/cgc.iiitdwd/">
//                 Instagram
//               </a>
//             </div>
//           </span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-black">
      <div className=" bg-color1/95 p-28px md:p-48px w-[98vw] mx-auto text-text-col backdrop-blur-2xl rounded-t-24px shadow-[0_-3px_hsla(0,0%,100%,.149)]">
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
                Ittigatti Rd, near Sattur Colony, Karnataka 580009 92VG+24 Joga
                Yellapur, Karnataka
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
      </div>
    </div>
  );
}
