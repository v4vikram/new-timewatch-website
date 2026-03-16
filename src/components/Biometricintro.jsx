"use client";

import { useEffect, useRef, useState } from "react";

// Brand tokens pulled from the page:
//   primary   → #d63438   (used as Tailwind arbitrary value)
//   secondary → #6d6f72   (used as Tailwind arbitrary value)
//   Both are registered in tailwind.config as `primary` and `secondary`,
//   so swap arbitrary values for the token name if your config supports it.

const traits = [
  { symbol: "◉", label: "Fingerprint", desc: "Touch-based, uniquely yours" },
  { symbol: "◎", label: "Face", desc: "AI-powered contactless scan" },
  { symbol: "◈", label: "Palm", desc: "Vein pattern, unforgeable" },
  { symbol: "◍", label: "Iris", desc: "Ultra-accurate eye recognition" },
];

const stats = [
  { value: "0%", label: "Proxy attendance" },
  { value: "<2s", label: "Verification speed" },
  { value: "6+", label: "Auth methods" },
];

export default function BiometricIntro() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Shared transition helper
  const fade = (delay = 0) =>
    `transition-all duration-700 ${delay ? `delay-[${delay}ms]` : ""} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`;

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden lg:pt-10"
    >
      {/* ── Left brand stripe ── */}
      <span className="absolute left-0 top-0 h-full w-[3px] bg-primary" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ── Eyebrow ── */}
        <div className={`flex items-center gap-3 ${fade(0)}`}>
          <span className="block w-10 h-px bg-primary" />
          <span className="text-primary text-[14px] font-semibold tracking-[0.18em] uppercase">
            Biometric Attendance System
          </span>
        </div>

        {/* ── Two-column editorial grid ── */}
        <div className="flex flex-col gap-6 pt-1 mt-5">
          <p
            className={`text-[#5a534c] text-[1.05rem] leading-[1.85] font-light ${fade(200)}`}
          >
            A biometric attendance system is a cool, dependable way to handle
            this. It figures out who's who by looking at their unique physical
            traits, like their fingerprints, face, palm, or eyes, or other
            special body markers.
          </p>

          {/* Pull quote — left-border editorial style, no card */}
          <blockquote
            className={`mt-4 pl-6 border-l-[3px] border-primary ${fade(360)}`}
          >
            <p className="font-serif italic text-[1.15rem] leading-relaxed text-primary font-normal mb-2">
              Instead of just using manual logs or key cards, these biometric
              gadgets automatically confirm who an employee is and log their
              attendance right away. This means you get accurate timekeeping and
              stop people from getting in when they shouldn't or faking
              attendance. Companies all over India and the world are starting to
              use biometric attendance systems to make managing their staff
              easier and run things more smoothly.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
