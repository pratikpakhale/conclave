"use client";
import { useState, useEffect } from "react";
// import Marquee from "@/components/ui/marquee";
import { getTestimonials } from "@/app/actions/testimonials";
import { ReviewCard } from "./DialogCard";
import { Review } from "@/types/Home";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const distributeReviews = (reviews: Review[], columns: number) => {
  const distributed: Review[][] = Array.from({ length: columns }, () => []);

  reviews.forEach((review, index) => {
    const columnIndex = index % columns;
    distributed[columnIndex].push(review);
  });

  return distributed;
};

export function TestimonialMain() {
  const [reviews, setReviews] = useState<Review[]>([]);
  // const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    async function fetchTestimonials() {
      const response = await getTestimonials();
      if (response.success && response.testimonials) {
        // Filter by graduationYear <= 2024 and sort by name
        const filteredAndSortedTestimonials = response.testimonials
          .filter((review) => review.graduationYear <= 2024)
          .sort((a, b) => a.name.localeCompare(b.name));
        setReviews(filteredAndSortedTestimonials);
      }
    }

    fetchTestimonials();

    setWindowWidth(window.innerWidth);

    // Add window resize listener
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getColumnCount = () => {
    if (windowWidth >= 1280) return 4; // xl
    if (windowWidth >= 1024) return 3; // lg
    if (windowWidth >= 768) return 2; // md
    return 1; // smaller screens
  };
  const columnCount = getColumnCount();

  const distributedReviews = distributeReviews(reviews, columnCount);

  // const renderMarquee = (rowData: Review[], reverse = false) => (
  //   <Marquee
  //     vertical
  //     reverse={reverse}
  //     pauseOnHover
  //     className="[--duration:50s]"
  //   >
  //     {rowData.map((review, index) => (
  //       <ReviewCard
  //         key={index}
  //         {...review}
  //         // onClick={() => setSelectedReview(review)}
  //       />
  //     ))}
  //   </Marquee>
  // );

  // const mobileRenderMarquee = (rowData: Review[], reverse = false) => (
  //   <Marquee vertical reverse={reverse} className="[--duration:50s]">
  //     {rowData.map((review, index) => (
  //       <ReviewCard
  //         key={index}
  //         {...review}
  //         // onClick={() => setSelectedReview(review)}
  //       />
  //     ))}
  //   </Marquee>
  // );

  return (
    <section
      id="testimonials"
      className="w-full px-2 sm:px-4 md:px-8px lg:px-24px xl:px-48px flex flex-col py-20 text-text-col bg-color1"
    >
      <div className="bg-color1 px-4 py-20 w-full text-center leading-[1.1] tracking-tighter flex items-center gap-2 flex-col">
        <ScrollReveal>
          <div className="text-48px font-bold">
            Explore inspiring{" "}
            <span className="bg-clip-text text-transparent bg-[url('https://www.apple.com/careers/images/fy21/apple_jobs_gradient-final_Apple_Jobs_Gradients_Warm/desktop@2x.png')] [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
              journeys and achievements{" "}
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="text-48px font-bold ">
            from our thriving alumni community.
          </div>
        </ScrollReveal>
      </div>

      {/* <div className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden bg-color1 md:shadow-xl">
        <div className="md:hidden basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
          {mobileRenderMarquee(reviews)}
        </div>
        <div className="max-md:hidden basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
          {renderMarquee(firstRow)}
        </div>
        <div className="max-md:hidden basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
          {renderMarquee(secondRow, true)}
        </div>

        <div className="max-lg:hidden basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
          {renderMarquee(thirdRow)}
        </div>
        <div className="max-xl:hidden basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
          {renderMarquee(fourthRow, true)}
        </div>

        <ReviewDialog
          review={selectedReview}
          isOpen={!!selectedReview}
          onClose={() => setSelectedReview(null)}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-color1"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-color1"></div>
      </div> */}

      <div className="w-full max-h-[80vh] relative overflow-hidden flex gap-4">
        <div className="w-full flex gap-4">
          {distributedReviews.map((column, columnIndex) => (
            <div key={columnIndex} className="flex-1 flex flex-col gap-4">
              {column.map((review, reviewIndex) => (
                <ReviewCard key={`${columnIndex}-${reviewIndex}`} {...review} />
              ))}
            </div>
          ))}
        </div>
        {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-color1"></div> */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-color1"></div>
      </div>

      <Link
        href={"/testimonial"}
        className="w-fit mx-auto px-5 py-2 rounded-8px bg-slate-50 hover:bg-white text-black"
      >
        Show more...
      </Link>
    </section>
  );
}
