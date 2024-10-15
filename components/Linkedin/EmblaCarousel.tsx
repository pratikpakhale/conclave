"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import LinkedInEmbedCards from "./LinkedInEmbedCards";

type PropType = {
  options?: any;
};

const LinkedInCarousel: React.FC<PropType> = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onPrevButtonClick = () => emblaApi && emblaApi.scrollPrev();
  const onNextButtonClick = () => emblaApi && emblaApi.scrollNext();
  const onDotButtonClick = (index: number) =>
    emblaApi && emblaApi.scrollTo(index);
  const linkedInPosts = [
    "urn:li:share:7248539806882770945",
    "urn:li:share:7249301296283844610",
    "urn:li:ugcPost:7240967824171487232",
    "urn:li:share:7241386364745699329",
    "urn:li:share:7240252904949833731",
  ];

  return (
    <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {linkedInPosts.map((postLink, index) => (
            <LinkedInEmbedCards key={index} postLink={postLink} />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
        <button
          className="pointer-events-auto bg-slate-900/40 p-2 rounded-full left-4"
          onClick={onPrevButtonClick}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="pointer-events-auto bg-slate-900/40 p-2 rounded-full right-4"
          onClick={onNextButtonClick}
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex items-center gap-3 px-4 justify-between sm:justify-center mt-3">
        <div className="flex gap-2">
          {Array(linkedInPosts.length)
            .fill(0)
            .map((_, index) => (
              <button
                key={index}
                className={`aspect-square rounded-full border-2 cursor-pointer h-[10px] ${
                  index === selectedIndex ? "bg-blue-600" : "border-gray-400"
                }`}
                onClick={() => onDotButtonClick(index)}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInCarousel;
