import React from "react";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function HomeAnimation() {
  return (
    <div className="bg-black relative h-full w-full">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars
            depth={10}
            radius={50}
            count={1500}
            factor={4}
            fade
            speed={2}
          />
        </Canvas>
      </div>
    </div>
  );
}
