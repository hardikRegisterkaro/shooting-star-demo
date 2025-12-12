"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden w-full",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(2)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 min-w-full", {
              "flex-row animate-marquee": !vertical && !reverse,
              "flex-row animate-marquee-reverse": !vertical && reverse,
              "flex-col animate-marquee-vertical": vertical && !reverse,
              "flex-col animate-marquee-vertical-reverse": vertical && reverse,
            })}
            style={{
              gap: "2rem",
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
