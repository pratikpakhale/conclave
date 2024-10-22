import React from "react";
import { IconType } from "react-icons/lib";

export interface LandingComponents {
  top?: string;
  right?: string;
  icon?: IconType;
  transform?: string;
  color: string | null;
}

export interface Companies {
  name: IconType;
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
