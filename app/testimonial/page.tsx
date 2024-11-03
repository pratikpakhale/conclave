"use client";
import Navbar from "@/components/Navbar";
import { Review } from "@/types/Home";
import React, { useEffect, useState } from "react";
import { getTestimonials } from "../actions/testimonials";
import { ReviewCard } from "@/components/Home/Testimonials/DialogCard";

export default function Page() {
  const [reviews, setReviews] = useState<Review[]>([]);
  // const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  useEffect(() => {
    async function fetchTestimonials() {
      const response = await getTestimonials();
      if (response.success && response.testimonials) {
        setReviews(response.testimonials);
      }
    }

    fetchTestimonials();
  }, []);
  return (
    <div className="w-full px-2 sm:px-4 md:px-8px lg:px-24px xl:px-48px min-h-screen flex flex-col py-20 text-text-col bg-color1">
      <Navbar />
      <div className="max-w-7xl w-full pt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            {...review}
            // onClick={() => setSelectedReview(review)}
          />
        ))}
      </div>
    </div>
  );
}
