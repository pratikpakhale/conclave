"use client";
import Navbar from "@/components/Navbar";
import { Review } from "@/types/Home";
import React, { useEffect, useState } from "react";
import { getTestimonials } from "../actions/testimonials";
import { ReviewCard } from "@/components/Home/Testimonials/DialogCard";

const distributeReviews = (reviews: Review[], columns: number) => {
  const distributed: Review[][] = Array.from({ length: columns }, () => []);

  reviews.forEach((review, index) => {
    const columnIndex = index % columns;
    distributed[columnIndex].push(review);
  });

  return distributed;
};

export default function Page() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    async function fetchTestimonials() {
      const response = await getTestimonials();
      if (response.success && response.testimonials) {
        setReviews(response.testimonials);
      }
    }

    fetchTestimonials();

    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Add window resize listener
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine number of columns based on screen size
  const getColumnCount = () => {
    if (windowWidth >= 1280) return 4; // xl
    if (windowWidth >= 1024) return 3; // lg
    if (windowWidth >= 768) return 2; // md
    return 1; // smaller screens
  };

  const columnCount = getColumnCount();
  const distributedReviews = distributeReviews(reviews, columnCount);

  return (
    <div className="w-full px-2 sm:px-4 md:px-8 lg:px-24 xl:px-48 min-h-screen flex flex-col py-20 text-text-col bg-color1">
      <Navbar />
      <div className="max-w-7xl w-full pt-20 mx-auto flex gap-4">
        {distributedReviews.map((column, columnIndex) => (
          <div key={columnIndex} className="flex-1 flex flex-col gap-4">
            {column.map((review, reviewIndex) => (
              <ReviewCard key={`${columnIndex}-${reviewIndex}`} {...review} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
