"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    title: "Access Control System",
    description:
      "Secure entry points with smart card, biometric, and PIN-based access for offices, factories, and campuses.",
    badge: "Popular",
    url: "/access-control-system",
    image: "/images/solutions/sub/access-control.jpg",
  },
  {
    title: "Biometric Attendance System",
    description:
      "AI-powered fingerprint, face, palm & RFID attendance with real-time HRMS and payroll integration.",
    badge: "Best Seller",
    url: "/biometric-attendance-system",
    image: "/images/biometric-attendance-system.webp",
  },
  {
    title: "Boom Barrier Gate",
    description:
      "High-speed boom barriers for parking lots, toll plazas, and gated communities with ANPR integration.",
    badge: "New",
    url: "/boom-barrier-gate",
    image: "/images/boom-barrier-gate.jpg",
  },
  {
    title: "Door Frame Metal Detector",
    description:
      "Walk-through metal detection for airports, courthouses, and high-security installations with multi-zone sensing.",
    badge: "Security",
    url: "/door-frame-metal-detector",
    image: "/images/door-frame-metal-detector.webp",
  },
  {
    title: "Face Attendance Machine",
    description:
      "Contactless facial recognition attendance with liveness detection and mask-on identification for modern workplaces.",
    badge: "AI-Powered",
    url: "/face-attendance-machine",
    image: "/images/Face-Attendance-Machine.webp",
  },
  {
    title: "Turnstile Gate",
    description:
      "Flap barriers, speed gates, and full-height turnstiles for metro stations, IT parks, and public access control.",
    badge: "Entrance",
    url: "/turnstile-gate",
    image: "/images/turnstile-gate.webp",
  },
  {
    title: "X-Ray Baggage Scanner",
    description:
      "Advanced dual-view X-ray inspection for airports, hotels, and high-security venues with threat detection AI.",
    badge: "Inspection",
    url: "/x-ray-baggage-scanner",
    image: "/images/solutions/baggage-scanner2.png",
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ProductCard = ({ product }) => {
  return (
    <Link
      href={product.url}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          {product.badge}
        </span>
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-[#6d6f72] font-semibold text-base mb-2 group-hover:text-primary">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm flex-1 mb-4">
          {product.description}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary border border-primary/30 rounded-full px-4 py-1.5 w-fit group-hover:bg-primary group-hover:text-white">
          View Product <ArrowIcon />
        </span>
      </div>
    </Link>
  );
};

const NewProductPagesLink = () => {
  return (
    <section className="new-product-page">
      <div className="max-w-7xl mx-auto">
        


        {/* Swiper Slider */}
        <Swiper
         modules={[Navigation, Autoplay, EffectFade]}
      
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.url}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default NewProductPagesLink;
