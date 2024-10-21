"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createHrRegistration } from "../actions/hrRegistration";
import Navbar from "@/components/Navbar";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function CountdownTimer() {
  const calculateTimeLeft = (): TimeLeft | {} => {
    const eventDate = new Date("2024-11-10T00:00:00");
    const currentTime = new Date();
    const difference = eventDate.getTime() - currentTime.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return {};
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const {
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = timeLeft as TimeLeft;

  return (
    <div className="text-center p-4 bg-gray-600/50 rounded-lg text-gray-200 mt-6">
      <h3 className="text-lg font-bold">Time Until HR Conclave:</h3>
      <div className="flex justify-center space-x-4 mt-2 text-gray-200">
        <div>{days}d</div>
        <div>{hours}h</div>
        <div>{minutes}m</div>
        <div>{seconds}s</div>
      </div>
    </div>
  );
}

export default function HRConclaveRSVP() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();
  const [fileNames, setFileNames] = useState<{ photo?: string }>({});

  async function handleSubmit(formData: FormData) {
    if (!formRef.current) return;
    const result = await createHrRegistration(formData);
    if (result.success) {
      // Handle form submission logic
      console.log("Registration created:", result.registration);
      toast("RSVP Submitted ✅");
      router.push("/");
    } else {
      console.error("Error:", result.error);
      toast("Failed to register");
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileNames({ photo: file.name });
    }
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`p-6 relative min-h-screen flex items-center font-grotesk justify-center bg-color1 transition-opacity duration-1000 ease-out ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar />
      <div
        className={`relative rounded-xl p-8 w-full max-w-4xl text-white 
                             transform transition-all duration-1000 ease-out ${isMounted ? "translate-y-0 scale-100 opacity-100" : "translate-y-20 scale-95 opacity-0"}`}
      >
        {" "}
        <h1 className="text-4xl font-bold mb-4 text-center text-text-col">
          HR Conclave RSVP
        </h1>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-center">
            Event Date: <span className="text-white">10th November</span>
          </h2>
          <h2 className="text-sm mt-2 text-center">
            Venue: Indian Institute of Information Technology Dharwad
          </h2>
          <h2 className="text-sm text-center">
            Chief Guest: Honourable Prahlad Joshi, Cabinet Minister
          </h2>
        </div>
        {/* <CountdownTimer /> */}
        <form ref={formRef} action={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Full Name</div>
                  <input
                    name="name"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Designation/Role</div>
                  <input
                    name="designation"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Software Engineer"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Organization/Company Name</div>
                  <input
                    name="company"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="TechCorp Inc."
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Industry Sector</div>
                  <input
                    name="sector"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Information Technology"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Email Address</div>
                  <input
                    name="email"
                    type="email"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Mobile Number</div>
                  <input
                    name="contactNo"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="+1 234 567 8901"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t col-span-2 border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Photo (Optional but Encouraged)</div>
                  <label
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-700/20 hover:bg-gray-700/40 transition"
                    htmlFor="photo"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 13.51 7H7a4 4 0 1 0 0 8h6z"
                        />
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 11v4m-2-2h4"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="photo"
                      type="file"
                      name="photo"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  {fileNames.photo && (
                    <p className="mt-2 text-white">
                      Uploaded Photo: {fileNames.photo}
                    </p>
                  )}
                </div>
              </div>

              <div className="val flex w-full mt-4 text-[1.3rem]">
                <div className="flex items-start w-full">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-600 bg-gray-700"
                  />
                  <label
                    htmlFor="consent"
                    className="ml-2 text-sm text-gray-400"
                  >
                    I agree to allow IIIT Dharwad to use my details for the
                    event and future correspondence.
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 text-color1 bg-text-col rounded-lg hover:bg-white transition"
          >
            Submit RSVP
          </button>
        </form>
      </div>
    </div>
  );
}
