"use client";

import { poppins } from "../fonts";

export default function AboutUs() {
  const text =
    "At Taxa Nova, we deliver end-to-end digital excellence. We don't separate design from development or marketing from strategy";

  return (
    <section className="w-full py-16 sm:py-20 px-6 sm:px-8 md:px-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Image placeholder */}
        <div className="w-full h-[340px] sm:h-[450px] rounded-3xl overflow-hidden">
          <div className="w-full h-full rounded-3xl bg-gradient-to-br from-yellow-400/70 via-pink-500/60 to-indigo-600/70" />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-5 text-white">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${poppins.className}`}>
            Who We Are?
          </h2>
          <div className={`space-y-4 text-base sm:text-lg leading-relaxed ${poppins.className}`}>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
