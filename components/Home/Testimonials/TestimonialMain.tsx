"use client";

// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const test = ["a", "a", "a", "a", "a", "a"];
export function TestimonialMain() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-text-col items-center justify-center relative overflow-hidden">
      <div className="text-color1 tracking-[-0.03em] max-w-7xl w-full text-left leading-[0.9] py-16 text-[clamp(3.5em,6vw,4em)]">
        <h2>Inspiring Testimonials</h2>
        <h2>from our esteemed alumni.</h2>
      </div>

      <div className="">
        <div className="plane">
          {test?.map((item, index) => {
            const totalDots = test.length;
            const angle = (360 / totalDots) * index; // Use test.length to get the total number of dots
            return (
              <div
                className="dots"
                style={{
                  transform: `rotate(${angle}deg) translate(-50%, -50%)`,
                }}
                key={index}
              ></div>
            );
          })}
        </div>
        <div className="plane" style={{ transform: "rotateY(180deg)" }}>
          {test?.map((item, index) => {
            const totalDots = test.length;
            const angle = (360 / totalDots) * index; // Use test.length to get the total number of dots
            return (
              <div
                className="dots"
                style={{
                  transform: `rotate(${angle}deg) translate(-50%, -50%)`,
                }}
                key={index}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
