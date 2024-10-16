'use client';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import {
  Mail,
  GraduationCap,
  Briefcase,
  VolumeX,
  Volume2,
  ExternalLink,
} from 'lucide-react';

import 'tailwindcss/tailwind.css';

const isOverlapping = (pos1, pos2, minDistance) => {
  const dx = pos1.left - pos2.left;
  const dy = pos1.top - pos2.top;
  return Math.sqrt(dx * dx + dy * dy) < minDistance;
};

const generateTestimonials = (count, minDistance) => {
  const testimonials = [];
  const maxAttempts = 1000;

  const videoArray = [
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
  ];

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
      // console.warn(
      //   `Could not find non-overlapping position for testimonial ${i + 1}`
      // );
      // continue; // Skip this testimonial if we can't find a suitable position
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
      video: videoArray[Math.floor(Math.random() * videoArray.length)],
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
const TestimonialCard = ({ testimonial }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isAvatarVisible, setIsAvatarVisible] = useState(true);

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (!isMuted) {
      setIsAvatarVisible(false);
      setTimeout(() => setIsAvatarVisible(true), 300);
    }
  }, [isMuted]);

  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg bg-white w-full max-w-2xl'>
      <div className='flex flex-col md:flex-row'>
        <div className='relative w-full md:w-1/3 h-48 md:h-auto'>
          <video
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${isMuted ? '' : 'scale-105'}`}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            src={testimonial?.video}
            onError={e => {
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-opacity duration-300 ${isMuted ? 'opacity-70' : 'opacity-0'}`}
          ></div>
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isAvatarVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <Avatar
              className={`w-24 h-24 border-4 border-white shadow-lg ${!isMuted && 'hidden'}`}
            >
              <AvatarImage src={testimonial?.photo} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
          </div>
          {/* Speaker icon for toggling sound */}
          <button
            className='absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-md'
            onClick={toggleSound}
          >
            {isMuted ? (
              <VolumeX className='w-5 h-5 text-gray-400' />
            ) : (
              <Volume2 className='w-5 h-5 text-blue-500' />
            )}
          </button>
        </div>

        <div className='w-full md:w-2/3 p-6'>
          <div className='flex justify-between items-center mb-2'>
            <h3 className='text-2xl font-bold'>{testimonial.name}</h3>
            {/* Redirect icon */}
            <a
              href={`/testimonials/${testimonial.id}`}
              className='text-blue-500 hover:text-blue-700'
            >
              <ExternalLink className='w-5 h-5' />
            </a>
          </div>
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
};

const generateConnections = (testimonials, targetDensity = 0.015) => {
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

const TestimonialsPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const testimonials = useMemo(() => generateTestimonials(100, 10), []);
  // console.log(testimonials);
  const connections = useMemo(
    () => generateConnections(testimonials),
    [testimonials]
  );

  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 500); // Adjust this delay as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

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
    if (!isScrolling) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovering(true);
        setHoveredTestimonial(testimonial);
      }, 300);
    }
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
          from our esteemed alumni network
        </h2>
      </div>
      <div className='relative h-[80vh] w-full bg-[#ecf5ff] flex items-center justify-center overflow-hidden'>
        <svg className='absolute inset-0 w-full h-full'>
          <defs>
            <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop
                offset='0%'
                style={{ stopColor: '#002fff', stopOpacity: 1 }}
              />
              <stop
                offset='100%'
                style={{ stopColor: '#00ff99', stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          {connections.map(([startIndex, endIndex], index) => (
            <Connection
              key={`connection-${index}`}
              start={{
                x: testimonials[startIndex].position.left + '%',
                y: testimonials[startIndex].position.top + '%',
              }}
              end={{
                x: testimonials[endIndex].position.left + '%',
                y: testimonials[endIndex].position.top + '%',
              }}
            />
          ))}
        </svg>

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
                  !isScrolling &&
                  ((activeTestimonial?.id === testimonial.id && !isHovering) ||
                    hoveredTestimonial?.id === testimonial.id)
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
                  // collisionBoundary={boundaries}
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
