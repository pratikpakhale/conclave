'use client';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Mail, GraduationCap, Briefcase } from 'lucide-react';
import 'tailwindcss/tailwind.css';

const isOverlapping = (pos1, pos2, minDistance) => {
  const dx = pos1.left - pos2.left;
  const dy = pos1.top - pos2.top;
  return Math.sqrt(dx * dx + dy * dy) < minDistance;
};

const generateTestimonials = (count, minDistance) => {
  const testimonials = [];
  const maxAttempts = 100;

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
      testimonials.some(t =>
        isOverlapping(t.position, position, minDistance)
      ) &&
      attempts < maxAttempts
    );

    if (attempts === maxAttempts) {
      console.warn(
        `Could not find non-overlapping position for testimonial ${i + 1}`
      );
      continue; // Skip this testimonial if we can't find a suitable position
    }

    // Rest of the testimonial generation code...
    testimonials.push({
      id: i + 1,
      name: `User ${i + 1}`,
      photo: `https://api.dicebear.com/6.x/avataaars/svg?seed=User${i + 1}`,
      email: `user${i + 1}@example.com`,
      graduationYear: 2020 + Math.floor(Math.random() * 4),
      designation: `Software Engineer ${i + 1}`,
      course: 'Computer Science',
      testimonial: `As a graduate of the Computer Science program, I can confidently say that the education I received was top-notch. The curriculum was challenging yet rewarding, and the professors were always available to provide guidance. The hands-on projects and internship opportunities prepared me well for my current role as a Software Engineer. I'm grateful for the skills and knowledge I gained during my time at the university.`,
      video:
        'https://videos.pexels.com/video-files/5538137/5538137-hd_1920_1080_25fps.mp4',
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

const TestimonialCard = ({ testimonial }) => (
  <div className='relative overflow-hidden rounded-lg shadow-lg bg-white w-full max-w-2xl'>
    <div className='flex flex-col md:flex-row'>
      <div className='relative w-full md:w-1/3 h-48 md:h-auto'>
        <video
          className='absolute inset-0 w-full h-full object-cover'
          autoPlay
          loop
          muted
          playsInline
          src={testimonial?.video}
          onError={e => {
            e.target.onerror = null;
            e.target.style.display = 'none';
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-70'></div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <Avatar className='w-24 h-24 border-4 border-white shadow-lg'>
            <AvatarImage src={testimonial?.photo} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className='w-full md:w-2/3 p-6'>
        <h3 className='text-2xl font-bold mb-2'>{testimonial.name}</h3>
        <div className='flex items-center text-sm text-gray-600 mb-4'>
          <Mail className='w-4 h-4 mr-2' />
          {testimonial.email}
        </div>
        <p className='text-sm mb-4 line-clamp-4'>{testimonial.testimonial}</p>
        <div className='flex flex-wrap gap-4 text-xs text-gray-500'>
          <div className='flex items-center'>
            <GraduationCap className='w-4 h-4 mr-1' />
            <span>{testimonial.graduationYear}</span>
          </div>
          <div className='flex items-center'>
            <Briefcase className='w-4 h-4 mr-1' />
            <span>{testimonial.designation}</span>
          </div>
          <div className='flex items-center'>
            <GraduationCap className='w-4 h-4 mr-1' />
            <span>{testimonial.course}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsPage = ({ boundaries }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);
  const textRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef(null);

  // useEffect(() => {
  //   if (textRef.current) {
  //     const rect = textRef.current.getBoundingClientRect();
  //     const containerRect =
  //       textRef.current.parentElement.getBoundingClientRect();

  //     setSafeZone({
  //       top: ((rect.top - containerRect.top) / containerRect.height) * 100,
  //       bottom:
  //         ((rect.bottom - containerRect.top) / containerRect.height) * 100,
  //       left: ((rect.left - containerRect.left) / containerRect.width) * 100,
  //       right: ((rect.right - containerRect.left) / containerRect.width) * 100,
  //     });
  //   }
  // }, []);

  const testimonials = useMemo(() => generateTestimonials(50, 10), []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        const randomIndex = Math.floor(Math.random() * testimonials.length);
        setActiveTestimonial(testimonials[randomIndex]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials, isHovering]);

  const handleMouseEnter = testimonial => {
    clearTimeout(hoverTimeoutRef.current);
    setIsHovering(true);
    setHoveredTestimonial(testimonial);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovering(false);
      setHoveredTestimonial(null);
    }, 300);
  };

  return (
    <div className='bg-[#ecf5ff] min-h-screen'>
      <div className='text-[#002fff] text-center pt-16 pl-10 tracking-[-0.03em] leading-[0.9]'>
        <h1 className='text-[clamp(3.5em,6vw,4em)]'>Inspiring Testimonials</h1>
        <h2 className='text-[clamp(2.5em,6vw,3em)]'>
          from our esteemed alumni.
        </h2>
      </div>
      <div className='relative h-[80vh] w-full bg-[#ecf5ff] flex items-center justify-center overflow-hidden'>
        {/* <h2
          ref={textRef}
          className='absolute text-4xl font-bold text-center text-[#002fff] z-50'
        >
          In Their Own Words
        </h2> */}

        <div className='absolute inset-0 flex items-center justify-center'>
          {testimonials.map(testimonial => (
            <motion.div
              key={testimonial.id}
              className='absolute'
              style={{
                top: `${testimonial.position.top}%`,
                left: `${testimonial.position.left}%`,
                zIndex:
                  hoveredTestimonial?.id === testimonial.id ||
                  activeTestimonial?.id === testimonial.id
                    ? 50
                    : 10,
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
              }}
              transition={{
                duration: testimonial.motion.duration,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            >
              <Popover
                open={
                  (activeTestimonial?.id === testimonial.id && !isHovering) ||
                  hoveredTestimonial?.id === testimonial.id
                }
              >
                <PopoverTrigger>
                  <Avatar
                    className={`cursor-pointer z-10 ${
                      hoveredTestimonial?.id === testimonial.id ||
                      activeTestimonial?.id === testimonial.id
                        ? 'ring-2 ring-blue-500 ring-offset-2'
                        : ''
                    }`}
                    onMouseEnter={() => handleMouseEnter(testimonial)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <AvatarImage
                      src={testimonial.photo}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent
                  collisionBoundary={boundaries}
                  className='w-full max-w-2xl'
                  onMouseEnter={() => handleMouseEnter(testimonial)}
                  onMouseLeave={handleMouseLeave}
                >
                  <AnimatePresence>
                    {(activeTestimonial?.id === testimonial.id ||
                      hoveredTestimonial?.id === testimonial.id) && (
                      <motion.div
                        key={`active-${testimonial.id}`}
                        className='bg-white rounded-xl shadow-lg z-[60]'
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ duration: 0.5 }}
                      >
                        <TestimonialCard testimonial={testimonial} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </PopoverContent>
              </Popover>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
