import React from "react";
// import { IconType } from "react-icons/lib";

export interface LandingComponents {
  top?: string;
  right?: string;
  icon: string;
  transform?: string;
  color: string | null;
}

export interface Companies {
  name: string;
  right: string;
  top: string;
  color: string | null;
}

export interface Positions {
  right: string;
  top: string;
}

export interface connect {
  title: string;
  content: string;
}

export interface TimelineType {
  time: string;
  heading: string;
  content: React.ReactNode;
}

export interface Testimonials {
  img: string;
  name: string;
  text: string;
  company: string;
  designation: string;
}

export interface Review {
  _id: string;
  name: string;
  contactNo?: string;
  email?: string;
  graduationYear: number;
  designation?: string;
  course?: string;
  achievements?: string;
  testimonial: string;
  memorableExperience?: string;
  encouragement?: string;
  photoUrl: string;
}

export interface PageProps {
  params: {
    id: string;
  };
}

export interface Timeline {
  heading1: string;
  heading2: string;
  time: string;
  timelineComponents: {
    heading: string;
    time: string;
    content: string[];
  }[];
}
