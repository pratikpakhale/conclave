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
];

export default function DeveloperPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl text-white mb-8 text-center">
        Meet the Development Team
      </h1>

      {/* Developer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {developers.map((developer) => (
          <div
            key={developer.name}
            className="relative shadow-lg transition-transform transform hover:scale-105 group"
          >
            {/* Image with initial indigo overlay filter */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={developer.image}
                alt={developer.name}
                className="w-full h-[28rem] object-cover rounded-lg transition-all duration-300 ease-in-out filter brightness-75 sepia hue-rotate-120 group-hover:filter-none group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-indigo-400 mix-blend-multiply opacity-90 group-hover:opacity-0 rounded-lg transition-opacity duration-300 ease-in-out"></div>
            </div>

            {/* Developer Details */}
            <div className="bg-black p-4">
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
