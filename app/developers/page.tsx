import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Importing icons for LinkedIn, GitHub, and X (Twitter)

const developers = [
  {
    name: "Nikhil Karthik",
    position: "Full Stack Developer",
    image: "/devteam/nikhil.webp",
    linkedin: "https://www.linkedin.com/in/nikhilkarthik24/",
    github: "https://github.com/C-NikhilKarthik",
    twitter: "https://x.com/nikhilkarthik24",
  },
  {
    name: "Pratik Pakhale",
    position: "Full Stack Developer",
    image: "/devteam/pakhale.webp",
    linkedin: "https://www.linkedin.com/in/pratikpakhale/",
    github: "https://github.com/pratikpakhale",
    twitter: "https://x.com/_pratikpakhale",
  },
  {
    name: "Ashith Shetty",
    position: "Full Stack Developer",
    image: "/devteam/ashith.webp",
    linkedin: "https://www.linkedin.com/in/ashith1101/",
    github: "https://github.com/ashith1101",
    // twitter: "https://x.com/ashithshetty",
  },
  {
    name: "Chinmay Shewale",
    position: "Backend Developer",
    image: "/devteam/chinmay.webp",
    linkedin: "https://www.linkedin.com/in/chinma-yyy/",
    github: "https://github.com/chinma-yyy",
    // twitter: "https://x.com/chinmayshewale",
  },
  {
    name: "Jaiyash Anmol",
    position: "UI/UX Designer",
    image: "/devteam/jaiyash.webp",
    linkedin: "https://www.linkedin.com/in/jaiyash-anmol-ratn-024abb22b/",
    github: "https://github.com/jaiyashanmol",
    // twitter: "https://x.com/jaiyashanmol",
  },
  {
    name: "Ashitosh Sable",
    position: "UI/UX Designer",
    image: "/devteam/ashitosh.webp",
    linkedin: "https://www.linkedin.com/in/ashitosh-madhukar-sable/",
    github: "https://github.com/ashitoshsable/",
    twitter: "https://x.com/ashitosh_png",
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
            <div className="transition-transform cursor-pointer duration-300 relative [transform-style:preserve-3d;] group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
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

              {/* Back Side - Social Links */}
              <div className="absolute [backface-visibility:hidden] top-0 bottom-0 left-0 right-0 [transform:rotateY(180deg)] backface-hidden bg-[rgb(16_16_16)] p-5 flex flex-col justify-center">
                <div className="flex justify-around space-x-4 text-white">
                  {developer.linkedin && (
                    <a
                      href={developer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={30} className="hover:text-blue-400" />
                    </a>
                  )}
                  {developer.github && (
                    <a
                      href={developer.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={30} className="hover:text-gray-400" />
                    </a>
                  )}
                  {developer.twitter && (
                    <a
                      href={developer.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter size={30} className="hover:text-blue-500" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Developer Details */}
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
