"use client";

import { useEffect, useState } from "react";

export function CountdownBar() {
  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 47, s: 13 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="bg-gold text-black text-center py-2.5 px-4 text-sm font-semibold tracking-wide">
      <span className="hidden sm:inline">⚡ Limited Access — </span>
      Free ebook disappears in{" "}
      <span className="font-mono font-bold">
        {pad(timeLeft.h)}:{pad(timeLeft.m)}:{pad(timeLeft.s)}
      </span>
    </div>
  );
}
