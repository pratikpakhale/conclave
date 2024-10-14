"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScroll({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.03,
        duration: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
