// components/EmblaCarousel.tsx
"use client";
import React, { useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
// import { images } from '@/data/homePage';
import "./HomePage.css";
import TestimonialCards from "./TestimonialCards";

const TWEEN_FACTOR_BASE = 0.1;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  //   slides: SlideType[];
  options?: EmblaOptionsType;
};

const TestimonialCarousel: React.FC<PropType> = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const tweenFactor = useRef(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".slide_number_main") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0, 1).toString();
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
        });
      });
    },
    []
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);
    tweenOpacity(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [
    emblaApi,
    onSelect,
    setTweenFactor,
    setTweenNodes,
    tweenOpacity,
    tweenScale,
  ]);

  const onPrevButtonClick = () => emblaApi && emblaApi.scrollPrev();
  const onNextButtonClick = () => emblaApi && emblaApi.scrollNext();
  const onDotButtonClick = (index: number) =>
    emblaApi && emblaApi.scrollTo(index);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <TestimonialCards />
          <TestimonialCards />
          <TestimonialCards />
          <TestimonialCards />
          <TestimonialCards />

          {/* <div className="h-full flex relative p-10 border border-[#002fff] text-[#002fff] gap-10">
            <div className="flex-shrink-0 flex relative item-center justify-center w-[20em]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 371 442"
                fill="none"
                className="opacity-50"
              >
                <path
                  d="M1 441L370 1"
                  stroke="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
                <path
                  d="M370 441L1 1"
                  stroke="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
                <path
                  d="M8.35356 334.354L8.50001 334.207L8.50001 334L8.5 108L8.5 107.793L8.35354 107.646L0.499999 99.7929L0.500008 0.499998L370.5 0.50003L370.5 99.7929L362.646 107.646L362.5 107.793L362.5 108L362.5 334L362.5 334.207L362.646 334.354L370.5 342.207L370.5 441.5L0.49997 441.5L0.499978 342.207L8.35356 334.354Z"
                  stroke="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
              <div className="absolute top-0 left-0 h-full w-full">
                <div className="absolute w-2 h-2 bg-current -translate-x-1/2 - translate-y-1/2"></div>
                <div className="absolute w-2 h-2 bg-current -translate-x-1/2 - translate-y-1/2 left-full"></div>
                <div className="absolute w-2 h-2 bg-current -translate-x-1/2 - translate-y-1/2 left-full top-full"></div>
                <div className="absolute w-2 h-2 bg-current -translate-x-1/2 - translate-y-1/2 top-full"></div>
              </div>
            </div>
          </div>
          <div className="h-full flex relative p-10 border border-[#002fff] text-[#002fff] gap-10">
            <div className="flex-shrink-0 flex relative item-center justify-center w-[20em]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 371 442"
                fill="none"
                className="opacity-50"
              >
                <path
                  d="M1 441L370 1"
                  stroke="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
                <path
                  d="M370 441L1 1"
                  stroke="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
                <path
                  d="M8.35356 334.354L8.50001 334.207L8.50001 334L8.5 108L8.5 107.793L8.35354 107.646L0.499999 99.7929L0.500008 0.499998L370.5 0.50003L370.5 99.7929L362.646 107.646L362.5 107.793L362.5 108L362.5 334L362.5 334.207L362.646 334.354L370.5 342.207L370.5 441.5L0.49997 441.5L0.499978 342.207L8.35356 334.354Z"
                  stroke="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
              <div className="absolute top-0 left-0 h-full w-full">
                <div className="absolute w-2 h-2 bg-current -translate-x-1/2 - translate-y-1/2"></div>
                <div className="absolute w-2 h-2 bg-current -translate-x-1/2 - translate-y-1/2 left-full"></div>
                <div className="absolute w-2 h-2 bg-current -translate-x-1/2 - translate-y-1/2 left-full top-full"></div>
                <div className="absolute w-2 h-2 bg-current -translate-x-1/2 - translate-y-1/2 top-full"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <button
        className="hidden md:flex md:absolute bg-slate-900/20 rounded md:top-1/2 md:-translate-y-1/2 md:cursor-pointer md:p-1 md:rounded md:left-2"
        onClick={onPrevButtonClick}
        disabled={emblaApi?.canScrollPrev() === false}
      >
        <ChevronLeft size={32} />
      </button>
      <button
        className="hidden md:flex md:absolute bg-slate-900/20 rounded md:top-1/2 md:-translate-y-1/2 md:cursor-pointer md:p-1 md:rounded md:right-2"
        onClick={onNextButtonClick}
        disabled={emblaApi?.canScrollNext() === false}
      >
        <ChevronRight size={32} />
      </button>

      <div className="flex items-center gap-3 px-4 justify-between md:justify-center mt-3">
        <div className="flex md:hidden gap-4">
          <button
            className="p-1 rounded-full border-2 hover:bg-dwd-primary transition duration-300 hover:text-white border-dwd-primary"
            onClick={onPrevButtonClick}
            disabled={emblaApi?.canScrollPrev() === false}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="p-1 rounded-full border-2 hover:bg-dwd-primary transition duration-300 hover:text-white border-dwd-primary"
            onClick={onNextButtonClick}
            disabled={emblaApi?.canScrollNext() === false}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`aspect-square rounded-full border-2 cursor-pointer h-[10px]  ${
                index === selectedIndex
                  ? "border-[#002fff] bg-[#3f5fef]"
                  : "border-[#002fff]"
              }`}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
