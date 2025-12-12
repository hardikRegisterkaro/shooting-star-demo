"use client";

import Spline from "@splinetool/react-spline";
import { poppins } from "../fonts";

const SPLINE_URL = "https://prod.spline.design/kqiu73VsJPWPhPJf/scene.splinecode";

export default function ThreeD() {
  return (
    <section className="w-full text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Main footer layout with overlapping text */}
        <div className="relative w-full md:h-[400px] h-[200px] flex items-center justify-center">
          {/* TAXO text - positioned absolutely on the left */}
          <h2
            className={`absolute font-medium left-[-5%] sm:left-[-10%] md:left-[15%] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-b from-white to-black bg-clip-text text-transparent z-10 ${poppins.className}`}
          >
            TAXO
          </h2>

          {/* Earth Globe - large and centered */}
          <div className="w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] md:w-[800px] md:h-[1024px] z-20 relative">
            <Spline scene={SPLINE_URL} />
          </div>s

          {/* NAXA text - positioned absolutely on the right */}
          <h2
            className={`absolute font-medium right-[-5%] sm:right-[-10%] md:right-[15%] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-b from-white to-black bg-clip-text text-transparent z-10 ${poppins.className}`}
          >
            NAXA
          </h2>
        </div>

        {/* Copyright text */}
        <p className={`text-center text-sm sm:text-base text-white ${poppins.className}`}>
          @2025 Taxonaxa. Click for privacy & term & condition
        </p>
      </div>
    </section>
  );
}