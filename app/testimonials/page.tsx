"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { createTestimonial } from "../actions/testimonials";
import { useFormStatus } from "react-dom";
import Navbar from "@/components/Navbar";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-text-col hover:bg-white text-color1 w-full font-semibold py-2 px-4 rounded-lg"
    >
      {pending ? (
        <span className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>{" "}
          Submitting...
        </span>
      ) : (
        "Submit"
      )}
    </button>
  );
}

export default function TestimonialForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    if (!formRef.current) return;
    const result = await createTestimonial(formData);
    if (result.success) {
      console.log("Testimonial created:", result.testimonial);
      toast("Testimonial Submitted ✅");

      router.push("/");
    } else {
      console.error("Error:", result.error);
      toast("Failed to send your testimonial");
    }
  }

  const [fileNames, setFileNames] = useState({
    photo: "",
    video: "",
  });

  const [isMounted, setIsMounted] = useState(false); // For controlling the animation

  useEffect(() => {
    // Trigger the animation on component mount
    setIsMounted(true);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const fileName = files[0].name;
      setFileNames((prev) => ({ ...prev, [name]: fileName }));
    }
  };

  return (
    <div
      className={`p-4 relative min-h-screen flex flex-col pt-24 items-center justify-center bg-color1 transition-opacity duration-1000 ease-out ${isMounted ? "opacity-100" : "opacity-0"}`}
    >
      <Navbar />

      {/* <div className="absolute inset-0 bg-color1"></div> */}
      <div
        className={`relative rounded-xl p-8 w-full max-w-4xl text-white 
                             transform transition-all duration-1000 ease-out ${isMounted ? "translate-y-0 scale-100 opacity-100" : "translate-y-20 scale-95 opacity-0"}`}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Testimonial Submission Form
        </h1>

        <form ref={formRef} action={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Form Fields */}
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
                  <div className="mb-4">Contact No</div>
                  <input
                    name="contactNo"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="+91 1234567890"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Email</div>
                  <input
                    name="email"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="johndoe@gmail.com"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Graduation Year</div>
                  <input
                    name="graduationYear"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="2023"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Designation</div>
                  <input
                    name="designation"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Software Developer"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Course</div>
                  <input
                    name="course"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="B.Tech Computer Science"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Achievements</div>
                  <textarea
                    name="achievements"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Achievements..."
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Testimonial</div>
                  <textarea
                    name="testimonial"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Your testimonial here..."
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Memorable Experience</div>
                  <textarea
                    name="memorableExperience"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Memorable experience during your time..."
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Encouragement</div>
                  <textarea
                    name="encouragement"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Encouragement to juniors..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* File Inputs */}
          <div className="space-y-6">
            <div>
              <label className="block mb-2" htmlFor="photo">
                Photo (Optional but Encouraged):
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="photo"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-700/20 hover:bg-gray-700/40 transition"
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
                    <p className="text-sm text-gray-400">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-400">
                      {fileNames.photo || "Max size: 10MB"}
                    </p>
                  </div>
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-2" htmlFor="video">
                Video (Optional but encouraged):
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="video"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-700/20 hover:bg-gray-700/40 transition"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 10l4.447-2.224A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.553.895L15 14M15 10v4m0-4L11 8H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6m0-8v8"
                      />
                    </svg>
                    <p className="text-sm text-gray-400">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-400">
                      {fileNames.video || "Max size: 50MB"}
                    </p>
                  </div>
                  <input
                    id="video"
                    name="video"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
