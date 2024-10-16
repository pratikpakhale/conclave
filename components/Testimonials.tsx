'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Mail } from 'lucide-react';
import 'tailwindcss/tailwind.css';

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
      testimonials.some(t =>
        isOverlapping(t.position, position, minDistance)
      ) &&
      attempts < 100
    );

    testimonials.push({
      id: i + 1,
      name: `User ${i + 1}`,
      photo: `https://api.dicebear.com/6.x/avataaars/svg?seed=User${i + 1}`,
      email: `user${i + 1}@example.com`,
      graduationYear: 2020 + Math.floor(Math.random() * 4),
      designation: `Software Engineer ${i + 1}`,
      course: `Computer Science`,
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
  <div className='relative overflow-hidden rounded-lg shadow-lg bg-white max-w-xs sm:max-w-md'>
    <video
      className='absolute inset-0 w-full h-full object-cover opacity-20'
      autoPlay
      loop
      muted
      playsInline
      src={testimonial.video}
    />
    <div className='relative z-10 p-6'>
      <div className='flex items-center mb-4'>
        <Avatar className='w-12 h-12 mr-4'>
          <AvatarImage src={testimonial.photo} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className='text-lg font-semibold'>{testimonial.name}</h3>
          <div className='flex items-center text-sm text-gray-600'>
            <Mail className='w-4 h-4 mr-2' />
            {testimonial.email}
          </div>
        </div>
      </div>
      <p className='text-sm mb-4'>{testimonial.testimonial}</p>
      <div className='flex justify-between text-xs text-gray-500'>
        <span>{testimonial.graduationYear}</span>
        <span>{testimonial.designation}</span>
        <span>{testimonial.course}</span>
      </div>
    </div>
  </div>
);

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
    <div className='bg-[#ecf5ff] min-h-screen'>
      <div className='text-[#002fff] text-center pt-16 pl-10 tracking-[-0.03em] leading-[0.9]'>
        <div className='text-[clamp(3.5em,6vw,4em)]'>
          Inspiring Testimonials
        </div>
        <div className='text-[clamp(2.5em,6vw,3em)]'>
          from our esteemed alumni.
        </div>
      </div>
      <div className='relative h-[80vh] w-full bg-[#ecf5ff] flex items-center justify-center overflow-hidden'>
        <h1 className='absolute text-4xl font-bold text-center text-[#002fff] z-50'>
          In Their Own Words
        </h1>

        <div className='absolute inset-0 flex items-center justify-center'>
          {testimonials.map(testimonial => (
            <motion.div
              key={testimonial.id}
              className='absolute'
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
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            >
              <Popover open={activeTestimonial?.id === testimonial.id}>
                <HoverCard>
                  <PopoverTrigger>
                    <HoverCardTrigger asChild>
                      <Avatar
                        className={`cursor-pointer z-10 ${
                          activeTestimonial?.id === testimonial.id
                            ? 'ring-2 ring-blue-500 ring-offset-2'
                            : ''
                        }`}
                      >
                        <AvatarImage
                          src={testimonial.photo}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </HoverCardTrigger>
                  </PopoverTrigger>
                  <HoverCardContent className='w-80 z-[100]'>
                    <TestimonialCard testimonial={testimonial} />
                  </HoverCardContent>
                  <PopoverContent>
                    <AnimatePresence>
                      {activeTestimonial && (
                        <motion.div
                          key={`active-${activeTestimonial.id}`}
                          className='transform -translate-x-1/2 bg-white rounded-xl shadow-lg max-w-md z-[60]'
                          initial={{ opacity: 0, y: '100%' }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: '100%' }}
                          transition={{ duration: 0.5 }}
                        >
                          <TestimonialCard testimonial={activeTestimonial} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </PopoverContent>
                </HoverCard>
              </Popover>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
