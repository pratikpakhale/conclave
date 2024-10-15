import Image from "next/image";
import React from "react";

export default function TestimonialCards() {
  return (
    <div className="embla__slide">
      <div className="h-full slide_number_main  flex relative p-10 border border-[#002fff] text-[#002fff] gap-10">
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
              vector-effect="non-scaling-stroke"
            ></path>
            <path
              d="M370 441L1 1"
              stroke="currentColor"
              vector-effect="non-scaling-stroke"
            ></path>
            <path
              d="M8.35356 334.354L8.50001 334.207L8.50001 334L8.5 108L8.5 107.793L8.35354 107.646L0.499999 99.7929L0.500008 0.499998L370.5 0.50003L370.5 99.7929L362.646 107.646L362.5 107.793L362.5 108L362.5 334L362.5 334.207L362.646 334.354L370.5 342.207L370.5 441.5L0.49997 441.5L0.499978 342.207L8.35356 334.354Z"
              stroke="currentColor"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
          <Image
            alt="img1"
            width={0}
            height={0}
            sizes="100%"
            className="h-3/4 absolute top-1/2 -translate-y-1/2 border-[#002fff] border w-3/4 object-cover"
            src={"/img.webp"}
          />
          <div className="absolute top-0 left-0 h-full w-full">
            <div className="absolute w-2 h-2 bg-current -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-2 h-2 bg-current -translate-x-1/2 -translate-y-1/2 left-full"></div>
            <div className="absolute w-2 h-2 bg-current -translate-x-1/2 -translate-y-1/2 left-full top-full"></div>
            <div className="absolute w-2 h-2 bg-current -translate-x-1/2 -translate-y-1/2 top-full"></div>
          </div>
        </div>

        <div className="flex flex-col justify-between w-full flex-1 h-full">
          <p className="text-xl">
            “Building the future requires partners who make you feel like
            you&apos;re in it together. From our very first meeting, the
            Hartmann team has been actively involved, supporting our product
            development and business strategy and facilitating critical
            connections. Their deep understanding of gaming and spatial
            computing made them the ideal partner for us.”
          </p>

          <div className="w-full flex justify-between items-end">
            <div className="flex flex-col gap-3">
              <p className="text-3xl font-bold">John Doe</p>
              <div className="text-[#566fdf]">Co-founder, XYZ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
