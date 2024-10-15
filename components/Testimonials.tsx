"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CalendarIcon } from "@radix-ui/react-icons";
import "tailwindcss/tailwind.css";

const isOverlapping = (pos1, pos2, minDistance) => {
  const dx = pos1.left - pos2.left;
  const dy = pos1.top - pos2.top;
  return Math.sqrt(dx * dx + dy * dy) < minDistance;
};

const generateTestimonials = (count, minDistance) => {
  const testimonials = [];
  for (let i = 0; i < count; i++) {
    let position;
    let attempts = 0;
    do {
      position = {
        top: Math.random() * 70 + 15,
        left: Math.random() * 70 + 15,
      };
      attempts++;
    } while (
      testimonials.some((t) =>
        isOverlapping(t.position, position, minDistance)
      ) &&
      attempts < 100
    );

    testimonials.push({
      id: i + 1,
      name: `User ${i + 1}`,
      avatar: `https://api.dicebear.com/6.x/avataaars/svg?seed=User${i + 1}`,
      text: `This is a sample testimonial text for User ${
        i + 1
      }. They had a great experience and wanted to share their thoughts.`,
      joinedDate: `${
        [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ][Math.floor(Math.random() * 12)]
      } ${2020 + Math.floor(Math.random() * 4)}`,
      position,
      motion: {
        x: (Math.random() - 0.5) * 5,
        y: (Math.random() - 0.5) * 5,
        duration: Math.random() * 2 + 3,
      },
    });
  }
  return testimonials;
};

const TestimonialsPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(null);
  const testimonials = useMemo(() => generateTestimonials(50, 10), []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * testimonials.length);
      setActiveTestimonial(testimonials[randomIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className="bg-[#ecf5ff]">
      <div className="text-[#002fff] text-center py-16 pl-10 tracking-[-0.03em] leading-[0.9]">
        <div className="text-[clamp(3.5em,6vw,4em)]">
          Inspiring Testimonials
        </div>
        <div className="text-[clamp(2.5em,6vw,3em)]">
          from our esteemed alumni.
        </div>
      </div>
      <div className="relative h-screen w-full bg-[#ecf5ff] flex items-center justify-center overflow-hidden">
        <h1 className="absolute text-4xl font-bold text-center text-[#002fff] z-50">
          In Their Own Words
        </h1>

        <div className="absolute inset-0 flex items-center justify-center">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="absolute"
              style={{
                top: `${testimonial.position.top}%`,
                left: `${testimonial.position.left}%`,
                zIndex: activeTestimonial?.id === testimonial.id ? 50 : 10,
              }}
              animate={{
                x: [
                  0,
                  `${testimonial.motion.x}%`,
                  `${-testimonial.motion.x}%`,
                  0,
                ],
                y: [
                  0,
                  `${testimonial.motion.y}%`,
                  `${-testimonial.motion.y}%`,
                  0,
                ],
                scale: activeTestimonial?.id === testimonial.id ? 1.2 : 1,
              }}
              transition={{
                duration: testimonial.motion.duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Avatar
                    className={`cursor-pointer z-10 ${
                      activeTestimonial?.id === testimonial.id
                        ? "ring-2 ring-blue-500 ring-offset-2"
                        : ""
                    }`}
                  >
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                </HoverCardTrigger>
                <HoverCardContent className="w-64 sm:w-80 z-[100]">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>
                        {testimonial.name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm">{testimonial.text}</p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Joined {testimonial.joinedDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeTestimonial && (
            <motion.div
              key={`active-${activeTestimonial.id}`}
              className="absolute top-10 left-auto right-auto transform -translate-x-1/2 bg-white p-4 sm:p-6 rounded-xl shadow-lg max-w-xs sm:max-w-md z-[60] text-center"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="w-12 h-12 sm:w-16 sm:h-16">
                  <AvatarImage src={activeTestimonial.avatar} />
                  <AvatarFallback>
                    {activeTestimonial.name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold">
                    {activeTestimonial.name}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    {activeTestimonial.text}
                  </p>
                  <div className="flex items-center justify-center mt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Joined {activeTestimonial.joinedDate}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TestimonialsPage;
