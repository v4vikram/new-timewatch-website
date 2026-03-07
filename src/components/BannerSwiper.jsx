"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BannerSwiper() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        speed={1500}
        // preloadImages={false}
        autoplay={false}
        className="w-full"
      >
        {/* ---------------- SLIDE 1 ---------------- */}
        <SwiperSlide>
          <div className="bg-gray-50 overflow-hidden pt-14 md:pt-0">
            <div className="container min-h-[500px] md:h-[100vh] 2xl:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
              
              {/* LEFT CONTENT */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-[600px]">
                  <h1 className="text-3xl md:text-6xl font-bold text-primary">
                    AI Based X-Ray{" "}
                    <span className="text-secondary">Baggage Scanner</span>
                  </h1>

                  <hr className="w-1/3 rounded-2xl h-1.5 mt-2 md:h-2 bg-primary border-0" />

                  <p className="text-md md:text-lg text-gray-600 mt-5 leading-relaxed">
                    We provide customized model solutions for our AI X-Ray
                    baggage scanner, including software customization and
                    barcode integration.
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE (LCP IMAGE) */}
              <div className="flex-1 mt-5 md:mt-0">
                <div className="relative w-[310px] h-[190px] md:w-[600px] md:h-[500px] 2xl:w-[750px]">
                  <Image
                    src="/images/sliders/home/baggage.webp"
                    alt="AI baggage scanner machine"
                    fill
                    priority
                    sizes="(max-width: 768px) 80vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ---------------- SLIDE 2 ---------------- */}
        <SwiperSlide>
          <div className="bg-gray-50 overflow-hidden pt-14 md:pt-0">
            <div className="container min-h-[500px] md:h-[100vh] 2xl:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
              
              <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-[600px]">
                  <h2 className="text-3xl md:text-6xl font-bold text-primary">
                    App Download Now <br />
                    <span className="text-secondary">Client Connect</span>
                  </h2>

                  <hr className="w-1/3 rounded-2xl h-1.5 mt-2 md:h-2 bg-primary border-0" />

                  <p className="text-md md:text-lg text-gray-600 mt-5 leading-relaxed">
                    Client Connect lets customers log complaints, track progress,
                    and enjoy faster support.
                  </p>

                  <Image
                    src="/images/sliders/home/client-search-bar.png"
                    alt="client connect search"
                    width={180}
                    height={75}
                    className="object-contain mt-2"
                  />
                </div>
              </div>

              <div className="flex-1 mt-5 md:mt-0">
                <div className="relative w-[300px] h-[200px] md:w-[800px] md:h-[500px] 2xl:w-[1000px]">
                  <Image
                    src="/images/sliders/home/client-phone.webp"
                    alt="Client connect mobile application"
                    fill
                    sizes="(max-width: 768px) 80vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* ---------------- SLIDE 3 ---------------- */}
        <SwiperSlide>
          <div className="bg-gray-50 overflow-hidden pt-14 md:pt-0">
            <div className="container min-h-[500px] md:h-[100vh] 2xl:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
              
              <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-[600px]">
                  <h2 className="text-3xl md:text-6xl font-bold text-primary">
                    TrueFace Series Device{" "}
                    <span className="text-secondary">with 2 Year Warranty</span>
                  </h2>

                  <hr className="w-1/3 rounded-2xl h-1.5 mt-2 md:h-2 bg-primary border-0" />

                  <p className="text-md md:text-lg text-gray-600 mt-5 leading-relaxed">
                    Revolutionary biometric attendance system with advanced HRM integration.
                  </p>
                </div>
              </div>

              <div className="flex-1 mt-5 md:mt-0">
                <div className="relative w-[280px] h-[190px] md:w-[600px] md:h-[500px] 2xl:w-[750px]">
                  <Image
                    src="/images/sliders/home/trueface-products.webp"
                    alt="Trueface biometric attendance device"
                    fill
                    sizes="(max-width: 768px) 80vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* ---------------- SLIDE 4 ---------------- */}
        <SwiperSlide>
          <div className="bg-gray-50 overflow-hidden pt-14 md:pt-0">
            <div className="container min-h-[500px] md:h-[100vh] 2xl:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
              
              <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-[600px]">
                  <h2 className="text-3xl md:text-6xl font-bold text-primary">
                    Simple way to <br />
                    <span className="text-secondary">Monitor Your Employee</span>
                  </h2>

                  <hr className="w-1/3 rounded-2xl h-1.5 mt-2 md:h-2 bg-primary border-0" />

                  <p className="text-md md:text-lg text-gray-600 mt-5 leading-relaxed">
                    Monitor employees with geo-fencing for accurate attendance and tracking.
                  </p>
                </div>
              </div>

              <div className="flex-1 mt-5 md:mt-0">
                <div className="relative w-[300px] h-[200px] md:w-[600px] md:h-[500px] 2xl:w-[750px]">
                  <Image
                    src="/images/sliders/home/mobile-applications.webp"
                    alt="Mobile attendance application"
                    fill
                    sizes="(max-width: 768px) 80vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
