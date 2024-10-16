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
import { CalendarIcon } from '@radix-ui/react-icons';
import 'tailwindcss/tailwind.css';

// Define types for position and motion properties
interface Position {
  top: number;
  left: number;
}

interface MotionProps {
  x: number;
  y: number;
  duration: number;
}

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  text: string;
  joinedDate: string;
  position: Position;
  motion: MotionProps;
}

// Function to check if positions are overlapping
const isOverlapping = (
  pos1: Position,
  pos2: Position,
  minDistance: number
): boolean => {
  const dx = pos1.left - pos2.left;
  const dy = pos1.top - pos2.top;
  return Math.sqrt(dx * dx + dy * dy) < minDistance;
};

// Generate testimonials with random positioning and motion
const generateTestimonials = (
  count: number,
  minDistance: number
): Testimonial[] => {
  const testimonials: Testimonial[] = [];
  for (let i = 0; i < count; i++) {
    let position: Position;
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
      // console.warn(
      //   `Could not find non-overlapping position for testimonial ${i + 1}`
      // );
      // continue; // Skip this testimonial if we can't find a suitable position
    }

    // Rest of the testimonial generation code...
    testimonials.push({
      id: i + 1,
      name: `User ${i + 1}`,
      avatar: `https://api.dicebear.com/6.x/avataaars/svg?seed=User${i + 1}`,
      text: `This is a sample testimonial text for User ${
        i + 1
      }. They had a great experience and wanted to share their thoughts.`,
      joinedDate: `${
        [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
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

const generateConnections = (testimonials, targetDensity = 0.02) => {
  const connections = [];
  const n = testimonials.length;
  const maxPossibleConnections = (n * (n - 1)) / 2;
  const targetConnections = Math.floor(maxPossibleConnections * targetDensity);

  const connectionPool = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      connectionPool.push([i, j]);
    }
  }

  for (let i = connectionPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [connectionPool[i], connectionPool[j]] = [
      connectionPool[j],
      connectionPool[i],
    ];
  }

  while (connections.length < targetConnections && connectionPool.length > 0) {
    connections.push(connectionPool.pop());
  }

  return connections;
};

const Connection = ({ start, end }) => {
  const avatarSize = 40;
  return (
    <motion.line
      x1={`calc(${start.x} + ${avatarSize / 2}px)`}
      y1={`calc(${start.y} + ${avatarSize / 2}px)`}
      x2={`calc(${end.x} + ${avatarSize / 2}px)`}
      y2={`calc(${end.y} + ${avatarSize / 2}px)`}
      stroke='url(#gradient)'
      strokeWidth={1}
      strokeLinecap='round'
      strokeOpacity={0.3}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      style={{
        filter: 'drop-shadow(0 0 5px rgba(0, 47, 255, 0.5))',
        opacity: 0.6,
      }}
    />
  );
};

const TestimonialsPage: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] =
    useState<Testimonial | null>(null);
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
    <div className='bg-[#ecf5ff] h-[80vh]'>
      <div className='text-[#002fff] text-center pt-16 pl-10 tracking-[-0.03em] leading-[0.9]'>
        <div className='text-[clamp(3.5em,6vw,4em)]'>
          Inspiring Testimonials
        </div>
        <div className='text-[clamp(2.5em,6vw,3em)]'>
          from our esteemed alumni.
        </div>
      </div>
      <div className='relative h-full w-full bg-[#ecf5ff] flex items-center justify-center overflow-hidden'>
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
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </HoverCardTrigger>
                  </PopoverTrigger>
                  <HoverCardContent className='w-64 sm:w-80 z-[100]'>
                    <div className='flex justify-between space-x-4'>
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>
                          {testimonial.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className='space-y-1'>
                        <h4 className='text-sm font-semibold'>
                          {testimonial.name}
                        </h4>
                        <p className='text-sm'>{testimonial.text}</p>
                        <div className='flex items-center pt-2'>
                          <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{' '}
                          <span className='text-xs text-muted-foreground'>
                            Joined {testimonial.joinedDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                  <PopoverContent>
                    <AnimatePresence>
                      {activeTestimonial && (
                        <motion.div
                          key={`active-${activeTestimonial.id}`}
                          //absolute top-10 left-auto right-auto
                          className=' transform -translate-x-1/2 bg-white p-4 sm:p-6 rounded-xl shadow-lg max-w-xs sm:max-w-md z-[60] text-center'
                          initial={{ opacity: 0, y: '100%' }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: '100%' }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className='flex flex-col items-center space-y-4'>
                            <Avatar className='w-12 h-12 sm:w-16 sm:h-16'>
                              <AvatarImage src={activeTestimonial.avatar} />
                              <AvatarFallback>
                                {activeTestimonial.name.slice(0, 2)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h2 className='text-lg sm:text-xl font-bold'>
                                {activeTestimonial.name}
                              </h2>
                              <p className='mt-2 text-sm sm:text-base text-gray-600'>
                                {activeTestimonial.text}
                              </p>
                              <div className='flex items-center justify-center mt-2'>
                                <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />
                                <span className='text-xs sm:text-sm text-muted-foreground'>
                                  Joined {activeTestimonial.joinedDate}
                                </span>
                              </div>
                            </div>
                          </div>
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
