import React from "react";

export interface LandingComponents {
  top?: string;
  right?: string;
  text?: string;
  transform?: string;
}

export interface Companies {
  name: string;
  right: string;
  top: string;
}

export interface TimelineType {
  time: string;
  heading: string;
  content: React.ReactNode;
}
