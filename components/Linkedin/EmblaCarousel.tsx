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
import LinkedInEmbedCards from "./LinkedInEmbedCards";

const TWEEN_FACTOR_BASE = 0.1;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  //   slides: SlideType[];
  options?: EmblaOptionsType;
};

const LinkedInCarousel: React.FC<PropType> = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const linkedInPosts = [
    "urn:li:share:7248539806882770945",
    "urn:li:share:7249301296283844610",
    "urn:li:ugcPost:7240967824171487232",
    "urn:li:share:7241386364745699329",
    "urn:li:share:7240252904949833731",
  ];

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
          {/* <TestimonialCards />
          <TestimonialCards />
          <TestimonialCards />
          <TestimonialCards />
          <TestimonialCards /> */}
          {linkedInPosts.map((postLink, index) => (
            <LinkedInEmbedCards key={index} postLink={postLink} />
          ))}
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
            className="p-1 rounded-full border-2 hover:bg-dwd-primary transition duration-300 hover:text-text-col border-dwd-primary"
            onClick={onPrevButtonClick}
            disabled={emblaApi?.canScrollPrev() === false}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="p-1 rounded-full border-2 hover:bg-dwd-primary transition duration-300 hover:text-text-col border-dwd-primary"
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
                  ? "border-text-col/70 w-6 bg-text-col"
                  : "border-text-col/70"
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
