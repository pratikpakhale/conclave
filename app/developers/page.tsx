// "use client";
// import React from "react";

// const developers = [
//   {
//     name: "Nikhil Karthik",
//     position: "Web Developer",
//     image: "/devteam/nikhil.webp",
//   },
//   {
//     name: "Pratik Pakhale",
//     position: "Web Developer",
//     image: "/devteam/pakhale.webp",
//   },
//   {
//     name: "Ashith Shetty",
//     position: "Web Developer",
//     image: "/devteam/ashith.webp",
//   },
//   {
//     name: "Chinmay Shewale",
//     position: "Web Developer",
//     image: "/devteam/chinmay.webp",
//   },
// ];

// export default function DeveloperPage() {
//   return (
//     <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4">
//       <h1 className="text-4xl text-white mb-8 text-center">
//         Meet the Development Team
//       </h1>

//       {/* Developer Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {" "}
//         {/* Responsive grid layout */}
//         {developers.map((developer) => (
//           <div
//             key={developer.name}
//             className="relative shadow-lg transition-transform transform hover:scale-105 group"
//           >
//             {/* Image with glitch effect, purple overlay, and indigo filter */}
//             <div className="relative overflow-hidden rounded-lg">
//               <img
//                 src={developer.image}
//                 alt={developer.name}
//                 className="w-full h-[28rem] object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:scale-110 filter group-hover:contrast-125 group-hover:brightness-75"
//               />
//               <div className="absolute inset-0 bg-indigo-400 mix-blend-multiply opacity-30 rounded-lg"></div>
//               <div className="absolute top-0 left-0 w-full h-full glitch group-hover:opacity-100"></div>{" "}
//               {/* Glitch effect */}
//             </div>

//             {/* Developer Details */}
//             <div className="bg-black p-4">
//               <h2 className="text-xl text-white font-semibold">
//                 {developer.name}
//               </h2>{" "}
//               {/* Bold name */}
//               <p className="text-md text-gray-400">{developer.position}</p>{" "}
//               {/* Position text */}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Glitch effect styles */}
//       <style jsx>{`
//         .glitch {
//           background: linear-gradient(
//             45deg,
//             rgba(255, 0, 150, 0.5),
//             rgba(0, 255, 255, 0.5)
//           );
//           mix-blend-mode: screen;
//           opacity: 0;
//           transition: opacity 0.3s ease-in-out;
//           animation: glitch 1s infinite alternate-reverse;
//         }

//         @keyframes glitch {
//           0% {
//             clip-path: inset(5% 0 95% 0);
//             transform: translate(-2px, -2px);
//           }
//           50% {
//             clip-path: inset(95% 0 0 0);
//             transform: translate(2px, 2px);
//           }
//           100% {
//             clip-path: inset(0 0 5% 0);
//             transform: translate(-2px, -2px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const developers = [
  {
    name: "Nikhil Karthik",
    position: "Web Developer",
    image: "/devteam/nikhil.webp",
  },
  {
    name: "Pratik Pakhale",
    position: "Web Developer",
    image: "/devteam/pakhale.webp",
  },
  {
    name: "Ashith Shetty",
    position: "Web Developer",
    image: "/devteam/ashith.webp",
  },
  {
    name: "Chinmay Shewale",
    position: "Web Developer",
    image: "/devteam/chinmay.webp",
  },
  {
    name: "Jaiyash Anmol",
    position: "Designer",
    image: "/devteam/jaiyash.webp",
  },
  {
    name: "Ashitosh",
    position: "Designer",
    image: "/devteam/ashitosh.webp",
  },
];

export default function DeveloperPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col pt-32 items-center justify-center px-4">
      <Navbar />
      <h1 className="text-4xl text-white mb-8 text-center">
        Meet the Development Team
      </h1>

      {/* Developer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {developers.map((developer) => (
          <div key={developer?.name} className="[perspective:1000px] group">
            <div className="transition-transform duration-300 relative [transform-style:preserve-3d;] group-hover:[transform:rotateY(180deg)]">
              <div className="[backface-visibility:hidden]">
                <div className="relative pointer-events-none">
                  <div className="absolute mix-blend-color-dodge bg-[rgb(61_52_131)] top-0 left-0 bottom-0 right-0"></div>
                  <Image
                    height={0}
                    width={0}
                    sizes="100%"
                    src={developer.image}
                    alt={developer.name}
                    className="w-full h-[28rem] object-cover duration-500"
                  />
                </div>
              </div>
              {/* Image with initial indigo overlay filter */}

              <div className="absolute [backface-visibility:hidden] top-0 bottom-0 left-0 right-0 [transform:rotateY(180deg)] backface-hidden bg-[rgb(16_16_16)] p-5 flex flex-col justify-center">
                <div className="body-semibold text-white whitespace-pre-line">
                  Degree in Engineering Physics, 3+ years of R&amp;D experience
                  in Machine Learning and Data Analysis. Blockchain enthusiast.
                </div>
                <div className="flex text-white -ml-3"></div>
              </div>
              {/* Developer Details */}
            </div>
            <div className="bg-black p-4 font-semibold">
              <h2 className="text-xl text-white font-semibold">
                {developer.name}
              </h2>
              <p className="text-md text-gray-400">{developer.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
