"use client";
import Navbar from "@/components/Navbar";
import { Review } from "@/types/Home";
import React, { useEffect, useState } from "react";
import { getTestimonials } from "../actions/testimonials";
import { ReviewCard } from "@/components/Home/Testimonials/DialogCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [availableYears, setAvailableYears] = useState<number[]>([]);

  useEffect(() => {
    async function fetchTestimonials() {
      const response = await getTestimonials();
      if (response.success && response.testimonials) {
        const sortedReviews = response.testimonials.sort(
          (a: Review, b: Review) => {
            if (a.graduationYear === b.graduationYear) {
              return a.name.localeCompare(b.name);
            }
            return a.graduationYear - b.graduationYear; // Reversed to show newest first
          }
        );

        // Get unique years
        const years = [
          ...new Set(sortedReviews.map((review) => review.graduationYear)),
        ].sort((a, b) => b - a);

        setReviews(sortedReviews);
        setFilteredReviews(sortedReviews);
        setAvailableYears(years);
      }
    }

    fetchTestimonials();
    window.scrollTo(0, 0);

    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Add window resize listener
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const filtered = reviews.filter((review) => {
      const matchesSearch = review.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesYear =
        selectedYear === "all" ||
        review.graduationYear.toString() === selectedYear;
      return matchesSearch && matchesYear;
    });
    setFilteredReviews(filtered);
  }, [searchQuery, selectedYear, reviews]);

  // Determine number of columns based on screen size
  const getColumnCount = () => {
    if (windowWidth >= 1280) return 4; // xl
    if (windowWidth >= 1024) return 3; // lg
    if (windowWidth >= 768) return 2; // md
    return 1; // smaller screens
  };

  const columnCount = getColumnCount();
  const distributedReviews = distributeReviews(filteredReviews, columnCount);

  return (
    <div className="w-full px-2 sm:px-4 md:px-8 lg:px-24 xl:px-48 min-h-screen flex flex-col py-20 text-text-col bg-color1">
      <Navbar />
      <div className="max-w-7xl w-full pt-20 mx-auto flex flex-col gap-8">
        {/* Search and Filters Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4 items-center">
            <Input
              type="text"
              placeholder="Search by name or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {availableYears.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="text-sm text-gray-600">
            Showing {filteredReviews.length} of {reviews.length} testimonials
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="w-full flex gap-4">
          {distributedReviews.map((column, columnIndex) => (
            <div key={columnIndex} className="flex-1 flex flex-col gap-4">
              {column.map((review, reviewIndex) => (
                <ReviewCard key={`${columnIndex}-${reviewIndex}`} {...review} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
