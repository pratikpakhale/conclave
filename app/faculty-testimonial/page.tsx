"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import { FaFileUpload } from "react-icons/fa";
import HomeAnimation from "@/components/Home/HomeAnimation";
import { createFacultyTestimonial } from "../actions/facultyTestimonial";
import { useFormStatus } from "react-dom";

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

export default function HRConclaveRSVP() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();
  const [fileNames, setFileNames] = useState<{ photo?: string }>({});
  const [photo, setPhoto] = useState<File | null>(null);

  async function handleSubmit(formData: FormData) {
    if (!formRef.current) return;
    const result = await createFacultyTestimonial(formData);
    if (result.success) {
      // Handle form submission logic
      console.log("Registration created:", result.facultyTestimonial);
      toast("Testimonial Submitted ✅");
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
      setPhoto(file);
    }
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`p-6 relative min-h-screen flex flex-col items-center font-grotesk justify-center bg-color1 transition-opacity duration-1000 ease-out ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar />
      <div className="h-[50vh] relative flex w-full items-center justify-center">
        <HomeAnimation />
        <div className="text-h2 text-center absolute p-2 bg-black/50 backdrop-blur text-white font-semibold">
          {/* <p className="z-[2]">Sponsorship</p> */}
          Faculty and Staff Testimonials
          {/* <CountdownTimer /> */}
        </div>
      </div>
      <div
        className={`relative rounded-xl p-1 md:p-8 w-full max-w-4xl text-white 
                             transform transition-all duration-1000 ease-out ${isMounted ? "translate-y-0 scale-100 opacity-100" : "translate-y-20 scale-95 opacity-0"}`}
      >
        {" "}
        <form ref={formRef} action={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Full Name</div>
                  <input
                    name="fullName"
                    required
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="John Doe"
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
                    required
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="HR / TA"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Department</div>
                  <input
                    name="department"
                    required
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Computer Science Engineering"
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
                    required
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Years of Experience</div>
                  <input
                    name="yearsOfExperience"
                    required
                    type="number"
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="5"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Research Areas</div>
                  <textarea
                    name="researchAreas"
                    required
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Research Areas of Interest"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Key Achievements</div>
                  <textarea
                    name="keyAchievements"
                    required
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Key Achievements"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Published Research</div>
                  <textarea
                    name="publishedResearch"
                    required
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Research Paper Titles"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Current Projects</div>
                  <textarea
                    name="currentProjects"
                    required
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Current Projects"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Key Past Projects</div>
                  <textarea
                    name="keyPastProjects"
                    required
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Key Past Projects"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Industry Collaborations</div>
                  <textarea
                    name="industryCollaboration"
                    required
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Industrial Collaborations"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Student Feedback</div>
                  <textarea
                    name="studentFeedback"
                    required
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Feedback for students"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Memorable Student Projects</div>
                  <textarea
                    name="memorableStudentProjects"
                    required
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Your Memorable projects from Students"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Advice For Students</div>
                  <textarea
                    name="adviceForStudents"
                    required
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Your Advice for Students"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 border-t border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Goals for Students</div>
                  <textarea
                    name="goalsForStudents"
                    required
                    className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                    placeholder="Goals you want to set for Students"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex-1 border-t md:col-span-2 border-t-slate-700 py-10">
              <div className="val flex w-full text-[1.3rem]">
                <div className="flex flex-col w-full">
                  <div className="mb-4">Photo</div>
                  <label
                    className="w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-700/20 hover:bg-gray-700/40 transition"
                    htmlFor="photo"
                  >
                    <div
                      style={{
                        backgroundImage: photo
                          ? `url(${URL.createObjectURL(photo)})`
                          : "none",
                      }}
                      className="flex flex-col items-center bg-contain bg-no-repeat bg-center justify-center w-full h-full"
                    >
                      <div className="flex flex-col items-center p-2 bg-[#171717a1] w-full h-full justify-center pt-5 pb-6">
                        <FaFileUpload className="text-gray-200 text-28px mb-16px" />
                        <p className="mb-2 text-sm text-gray-200">
                          <span className="font-semibold">Click to upload</span>
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-200">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="photo"
                        type="file"
                        name="photo"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                      />
                    </div>
                  </label>
                  {fileNames.photo && (
                    <p className="mt-2 text-white font-semibold">
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
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
