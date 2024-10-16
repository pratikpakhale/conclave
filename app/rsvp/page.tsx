'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';


type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function CountdownTimer() {
  const calculateTimeLeft = (): TimeLeft | {} => {
    const eventDate = new Date('2024-11-10T00:00:00');
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

  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = timeLeft as TimeLeft;

  return (
    <div className="text-center p-4 bg-gray-800 rounded-lg text-gray-200 mt-6">
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    // Handle form submission logic
    toast('RSVP Submitted ✅');
    router.push('/');
  };

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
      className={`p-6 relative min-h-screen flex items-center justify-center bg-[#0A0A0A] transition-opacity duration-1000 ease-out ${
        isMounted ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-[#0A0A0A] opacity-50"></div>

      <div className="relative bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-2xl rounded-xl p-8 w-full max-w-4xl text-gray-200 transform transition-all duration-1000 ease-out">
        <h1 className="text-4xl font-bold mb-4 text-center text-yellow-300">
          HR Conclave RSVP
        </h1>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-center">
            Event Date: <span className="text-yellow-300">10th November</span>
          </h2>
          <h2 className="text-lg font-semibold text-center">
            Venue: Indian Institute of Information Technology Dharwad
          </h2>
          <h2 className="text-lg font-semibold text-center">
            Chief Guest: Honourable Prahlad Joshi, Cabinet Minister
          </h2>
        </div>

        <CountdownTimer />

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2" htmlFor="fullName">
                Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                name="name"
                required
                className="w-full p-2 rounded-lg bg-gray-700 text-gray-200"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="designation">
                Designation/Role:
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                required
                className="w-full p-2 rounded-lg bg-gray-700 text-gray-200"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="company">
                Organization/Company Name:
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full p-2 rounded-lg bg-gray-700 text-gray-200"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="sector">
                Industry Sector:
              </label>
              <input
                type="text"
                id="sector"
                name="sector"
                required
                className="w-full p-2 rounded-lg bg-gray-700 text-gray-200"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="email">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 rounded-lg bg-gray-700 text-gray-200"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="mobile">
                Mobile Number:
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                required
                className="w-full p-2 rounded-lg bg-gray-700 text-gray-200"
              />
            </div>
          </div>

          {/* Updated File Upload Component */}
          <div>
            <label className="block mb-2" htmlFor="photo">
              Photo (Optional but Encouraged):
            </label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="photo"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600 transition"
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
                    <span className="font-semibold">Click to upload</span> or drag and drop
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
            </div>
            {fileNames.photo && (
              <p className="mt-2 text-white">Uploaded Photo: {fileNames.photo}</p>
            )}
          </div>

          <div className="flex items-start">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              className="w-4 h-4 rounded border-gray-600 bg-gray-700"
            />
            <label htmlFor="consent" className="ml-2 text-sm text-gray-400">
              I agree to allow IIIT Dharwad to use my details for the event and future
              correspondence.
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-2 mt-4 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition"
          >
            Submit RSVP
          </button>
        </form>
      </div>
    </div>
  );
}
