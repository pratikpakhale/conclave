"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { toast } from "sonner";

import { createContactUs } from "../actions/contactUs";

export default function ContactUsForm() {
  const router = useRouter();
  const container = useRef(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  async function handleSubmit(formData: FormData) {
    if (!formRef.current) return;
    const result = await createContactUs(formData);
    if (result.success) {
      console.log("ContactUs created:", result.contactUs);
      toast("Contact form Submitted ✅");

      router.push("/");
    } else {
      console.error("Error:", result.error);
      toast("Failed to register your details");
    }
  }

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-150, -300]);
  return (
    <section className="bg-color1 min-h-[100dvh]">
      <Navbar />
      <div className="max-w-5xl flex flex-col mx-auto text-white">
        <div className="flex-1 flex-col flex">
          <div className="flex px-10 md:px-0 items-end mb-[16rem]">
            <div className="pt-[16rem] flex-1 pr-10 text-[clamp(30px,7vw,72px)] leading-[1.1]">
              Let&apos;s Get in Touch for On-Campus Placement Drives
            </div>
            <div className="flex-none w-[300px] pl-10">
              <Image
                height={0}
                width={0}
                sizes="100%"
                className="h-32 w-32 object-cover rounded-full"
                alt="image"
                src={"/Brandlogo.png"}
              />
            </div>
          </div>
          <form
            ref={formRef}
            className="w-full flex flex-col-reverse md:flex-row gap-10"
            action={handleSubmit}
          >
            <div className="flex-1 px-10 md:px-0">
              <div className="w-full flex-1 border-t border-t-slate-600 py-10">
                <div className="val flex w-full text-[1.3rem]">
                  <div className="flex flex-col">
                    <div className="mb-4">What&apos;s your company name?</div>
                    <input
                      name="companyName"
                      type="text"
                      className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                      placeholder="Company Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="w-full border-t border-t-slate-600 py-10">
                <div className="val flex w-full text-[1.3rem]">
                  <div className="flex flex-col">
                    <div className="mb-4">What&apos;s your company email?</div>
                    <input
                      name="companyEmail"
                      type="email"
                      className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                      placeholder="company@email.com *"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="w-full border-t border-t-slate-600 py-10">
                <div className="val flex w-full text-[1.3rem]">
                  <div className="flex flex-col">
                    <div className="mb-4">
                      What positions are you hiring for?
                    </div>
                    <input
                      name="positions"
                      className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                      placeholder="Software Developer, Data Analyst..."
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="w-full border-t border-b border-b-gray-500 border-t-slate-600 py-10">
                <div className="val flex w-full text-[1.3rem]">
                  <div className="flex flex-col">
                    <div className="mb-4">Your message</div>
                    <input
                      name="message"
                      className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                      placeholder="Hello, we are looking to initiate a campus drive... *"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="py-40">
                <div className="border-b border-b-gray-500 pb-[100px] relative">
                  <motion.div
                    style={{ x }}
                    className="absolute right-0 -translate-y-1/2"
                  >
                    <button className="w-[150px] md:w-[180px] aspect-square bg-[#8a84e3] text-white rounded-full absolute flex items-center justify-center">
                      <p className="z-[2] relative">
                        Contact Placement Officer
                      </p>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="w-[300px] pl-10 text-sm flex-none">
              <div className="mb-10">
                <span className="text-gray-700 uppercase">Contact Details</span>
                <div className="mt-2">cgcoffice@iiitdwd.ac.in</div>
              </div>
              <div className="mb-10">
                <span className="text-gray-700 uppercase">College</span>
                <div className="mt-2">
                  Indian Institue of Information Technology Dharwad
                </div>
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <span className="text-gray-700 uppercase">Socials</span>
                <a
                  className="mt-2"
                  target="_blank"
                  href="https://www.linkedin.com/in/cgc-connect-iiit-dharwad/"
                >
                  Linkedin
                </a>
                <a
                  className="mt-2"
                  target="_blank"
                  href="https://x.com/cgc_iiitdwd"
                >
                  Twitter
                </a>
                <a
                  className="mt-2"
                  target="_blank"
                  href="https://www.instagram.com/cgc.iiitdwd/"
                >
                  Instagram
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex text-white flex-col-reverse md:flex-row gap-4 justify-between p-5">
        <div className="flex gap-[10px] items-end">
          <span className="flex flex-col gap-4">
            <h3 className="px-1 text-gray-400">Version</h3>
            <p className="px-1 cursor-pointer ">2024 © Edition</p>
          </span>
        </div>
        <span className="flex border-b border-b-gray-500 md:border-b-0 flex-col gap-4 pb-4 md:pb-0 md:items-end">
          <h3 className="text-gray-400">Socials</h3>
          <div className="flex gap-4 flex-wrap">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nikhilkarthik24/"
            >
              Linkedin
            </a>
            <a target="_blank" href="https://www.x.com/@nikhilkarthik24/">
              Twitter
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/nikhilkarthik_24/"
            >
              Instagram
            </a>
          </div>
        </span>
      </div>
    </section>
  );
}
