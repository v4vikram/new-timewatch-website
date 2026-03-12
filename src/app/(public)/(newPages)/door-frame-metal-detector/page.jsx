// app/door-frame-metal-detector/page.tsx
import React from "react";
import {
  CheckCircle,
  Shield,
  Zap,
  AlertTriangle,
  Building2,
  GraduationCap,
  Landmark,
  Trophy,
  Plane,
  Layers,
  ScanLine,
  Radio,
  Eye,
  Settings,
  BatteryCharging,
  Volume2,
  Target,
  Users,
  Crosshair,
  Grid3x3,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import HomePageForm from "@/components/HomePageForm";
import AccordionItem from "@/components/landing/AccordionItem";

export const metadata = {
  title:
    "Door Frame Metal Detector | Walk Through Metal Detector | TimeWatch India",
  description:
    "High sensitivity door frame metal detector with multi-zone detection. Advanced walk through metal detector for airports, offices, schools and secure facilities.",
  keywords:
    "door frame metal detector, walk through metal detector, DFMD metal detector, security metal detector gate, metal detector gate, multi zone metal detector",
  alternates: {
    canonical: "https://www.timewatchindia.com/door-frame-metal-detector",
  },
  openGraph: {
    title:
      "Door Frame Metal Detector | Walk Through Metal Detector | TimeWatch India",
    description:
      "High sensitivity door frame metal detector with multi-zone detection. Advanced walk through metal detector for airports, offices, schools and secure facilities.",
    url: "https://www.timewatchindia.com/door-frame-metal-detector",
    type: "website",
    images: [
      {
        url: "https://www.timewatchindia.com/assets/img/products/door-frame-metal-detector.jpg",
        width: 1200,
        height: 630,
        alt: "Door Frame Metal Detector by TimeWatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Door Frame Metal Detector | Walk Through Metal Detector | TimeWatch India",
    description:
      "High sensitivity door frame metal detector with multi-zone detection. Advanced walk through metal detector for airports, offices, schools and secure facilities.",
    images: [
      "https://www.timewatchindia.com/assets/img/products/door-frame-metal-detector.jpg",
    ],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Door Frame Metal Detector",
  brand: {
    "@type": "Brand",
    name: "TimeWatch",
  },
  description:
    "High sensitivity door frame metal detector with multi-zone detection. Advanced walk through metal detector for airports, offices, schools and secure facilities.",
  category: "Security Screening Equipment",
  manufacturer: {
    "@type": "Organization",
    name: "TimeWatch",
  },
  areaServed: "India",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a door frame metal detector?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A door frame metal detector is a security device used to detect metal objects carried by individuals passing through the detector gate.",
      },
    },
    {
      "@type": "Question",
      name: "Where are walk through metal detectors used?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Walk through metal detectors are used in airports, government buildings, schools, stadiums and corporate offices.",
      },
    },
    {
      "@type": "Question",
      name: "What are detection zones in metal detectors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Detection zones divide the detector frame into multiple sections to identify where metal objects are located on the body.",
      },
    },
    {
      "@type": "Question",
      name: "Can door frame metal detectors detect small metal objects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Modern DFMD systems can detect small metallic objects depending on the sensitivity settings.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What is a door frame metal detector?",
    answer:
      "A door frame metal detector is a security device used to detect metallic objects carried by individuals passing through the detector gate.",
  },
  {
    question: "Where are walk-through metal detectors used?",
    answer:
      "Walk-through metal detectors are commonly used in airports, government buildings, schools, stadiums, and corporate facilities.",
  },
  {
    question: "Can door frame metal detectors detect small metal objects?",
    answer:
      "Yes. Modern DFMD systems can detect small metallic objects depending on the sensitivity settings.",
  },
  {
    question: "What are detection zones in metal detectors?",
    answer:
      "Detection zones divide the detector frame into sections to identify the location of metal objects on the body.",
  },
];

const featureList = [
  {
    title: "High-Precision Metal Detection",
    description:
      "Our DFMD systems use advanced electromagnetic field sensors to deliver accurate detection of metallic objects of all sizes.",
  },
  {
    title: "Multi-Zone Detection Capability",
    description:
      "Configurable detection zones from single to 33 zones allow precise identification of the exact location of metallic objects on the body.",
  },
  {
    title: "Reliable Operation in High-Traffic Settings",
    description:
      "Built for continuous use in airports, government buildings, schools, and stadiums with consistent performance under heavy foot traffic.",
  },
  {
    title: "Simple Installation and Configuration",
    description:
      "Easy to install and calibrate on-site with adjustable sensitivity settings to match the specific security requirements of any facility.",
  },
  {
    title: "Technical Support and Service Across India",
    description:
      "TimeWatch provides pan-India installation, commissioning, and after-sales technical support to keep your system running optimally.",
  },
];

const DoorFrameMetalDetectorPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div>
        {/* ── Hero Section ── */}
        <section className="bg-gray-50 relative overflow-hidden h-[400px] md:h-[550px]">
          <div className="absolute inset-0 left-0 top-0 w-full h-full">
            <div className="relative z-10 w-full h-[400px] md:h-[550px]">
              <Image
                src="/images/door-frame-metal-detector.webp"
                alt="Door Frame Metal Detector"
                fill
                sizes="100"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none z-10" />
            </div>
          </div>

          <div className="relative z-20 container flex justify-center h-full flex-col xl:pr-[400px] text-white banner">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Door Frame Metal Detector for Advanced Security Screening
            </h1>
            <p className="text-xl text-white mb-8 hidden md:block">
              A door frame metal detector (DFMD) offers a dependable and
              effective solution for screening individuals entering secured
              areas. These systems detect metallic objects hidden on a person's
              body as they pass through the detector frame, enabling fast and
              accurate security screening without delays.
            </p>
          </div>
        </section>

        {/* ── Section 1: Left Image + Right Text (Overview) ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              {/* Left — Image */}
              <div className="order-1">
                <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl p-8">
                  <div className="bg-white rounded-2xl shadow-2xl p-4 flex justify-center">
                    <div className="relative w-[280px] h-[280px] md:w-[460px] md:h-[460px]">
                      <Image
                        src="/images/tw-d2618-18-zone-dfmd.webp"
                        alt="What is a Door Frame Metal Detector"
                        title="Door Frame Metal Detector Overview"
                        fill
                        className="object-contain p-10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Text */}
              <div className="order-2 mt-10 lg:mt-0">
                <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Overview
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  What is a Door Frame Metal Detector?
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  A metal detector in the form of a door frame, commonly
                  referred to as a walk-through metal detector, serves as a
                  security apparatus designed to identify metallic items that
                  individuals may carry while passing through a detection gate.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  The device comprises a rectangular frame structure outfitted
                  with electronic sensors that create a regulated
                  electromagnetic field. As an individual traverses the frame,
                  any metallic object on their person disrupts this field. The
                  system identifies this disruption and promptly activates an
                  alarm or visual signal to notify security staff.
                </p>

                <div className="space-y-3">
                  {[
                    "Detect weapons, firearms and knives",
                    "Screen individuals without manual inspection",
                    "Identify exact location of metallic objects",
                    "Manage high-volume entry screening efficiently",
                    "Enhance security at sensitive facilities",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Left Text + Right Image (How It Works) ── */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              {/* Left — Text */}
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Detection Technology
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  How Walk-Through Metal Detectors Work
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Walk-through metal detectors function by utilizing
                  electromagnetic field technology. The frame of the detector
                  creates a regulated electromagnetic field between the gate's
                  side panels. As an individual passes through the detector,
                  the system evaluates disruptions caused by metallic items.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Radio,
                      label: "Electromagnetic Field Generation",
                      sub: "Side panels generate a controlled EM field across the full width of the gate.",
                    },
                    {
                      icon: ScanLine,
                      label: "Disruption Detection",
                      sub: "Any metallic object carried through the frame disrupts the EM field instantly.",
                    },
                    {
                      icon: AlertTriangle,
                      label: "Alarm Activation",
                      sub: "The system triggers an audible alarm and LED indicators upon detecting metal.",
                    },
                    {
                      icon: Target,
                      label: "Zone Pinpointing",
                      sub: "Multi-zone systems identify the exact body location of the detected object.",
                    },
                    {
                      icon: Settings,
                      label: "Adjustable Sensitivity",
                      sub: "Sensitivity levels can be calibrated to match specific security requirements.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#b82c30] rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#6d6f72]">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Image */}
              <div className="order-1 lg:order-2 mt-10 lg:mt-0">
                <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl p-8">
                  <div className="bg-white rounded-2xl shadow-2xl p-4 flex justify-center">
                    <div className="relative w-[280px] h-[280px] md:w-[460px] md:h-[460px]">
                      <Image
                        src="/images/tw-d2333-33-zone-dfmd.webp"
                        alt="How Walk-Through Metal Detector Works"
                        title="Door Frame Metal Detector Detection Technology"
                        fill
                        className="object-contain p-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Multi-Zone Detection ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Detection Zones
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  Multi-Zone Detection Technology
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Modern DFMD systems are available with different numbers of
                  detection zones depending on security requirements. Enhanced
                  zone configurations enable the system to more accurately
                  identify the precise location of metallic objects on a
                  person's body.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  For instance, a 33-zone metal detector segments the frame
                  into numerous horizontal and vertical sections, facilitating
                  the accurate identification of metal objects across various
                  areas of the body. Multi-zone detection greatly enhances
                  security effectiveness and minimizes the necessity for manual
                  inspections.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed font-medium">
                  Common zone configurations available:
                </p>
                <div className="space-y-3">
                  {[
                    { icon: Grid3x3, label: "Single Zone Detection" },
                    { icon: Grid3x3, label: "6 Zone Detection" },
                    { icon: Grid3x3, label: "9 Zone Detection" },
                    { icon: Grid3x3, label: "12 Zone Detection" },
                    { icon: Grid3x3, label: "18 Zone Detection" },
                    { icon: Grid3x3, label: "33 Zone Detection" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 lg:mt-0">
                <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl p-8">
                  <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#b82c30] rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Crosshair className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#6d6f72]">
                        Zone Detection Capabilities
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        Pinpoint accuracy across all body zones
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { icon: Target, label: "1 Zone" },
                        { icon: Target, label: "6 Zones" },
                        { icon: Target, label: "9 Zones" },
                        { icon: Target, label: "12 Zones" },
                        { icon: Target, label: "18 Zones" },
                        { icon: Target, label: "33 Zones" },
                      ].map((m, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center gap-2 bg-gray-50 rounded-xl p-3"
                        >
                          <m.icon className="w-5 h-5 text-primary" />
                          <span className="text-xs font-medium text-gray-600">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Features ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Key Features of Door Frame Metal Detectors
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern door frame metal detectors include several advanced
                features designed for efficient and reliable security
                screening.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Layers,
                  title: "Multi-Zone Detection",
                  description:
                    "Multiple detection zones identify the exact location of metallic objects on the body for precise screening.",
                },
                {
                  icon: Eye,
                  title: "High Detection Sensitivity",
                  description:
                    "Advanced sensors allow the system to detect even small metallic objects hidden on a person's body.",
                },
                {
                  icon: Volume2,
                  title: "Audible and Visual Alarms",
                  description:
                    "When metal is detected, the system activates alarm signals and LED indicators to alert security staff.",
                },
                {
                  icon: Settings,
                  title: "Adjustable Sensitivity Levels",
                  description:
                    "Security personnel can adjust detection sensitivity based on the specific security environment and requirements.",
                },
                {
                  icon: Shield,
                  title: "Durable Construction",
                  description:
                    "DFMD systems are built using durable materials designed for long-term use in high-traffic environments.",
                },
                {
                  icon: BatteryCharging,
                  title: "Optional Battery Backup",
                  description:
                    "Battery backup ensures the system continues operating without interruption during power outages.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#b82c30] rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#6d6f72] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Benefits of Installing Door Frame Metal Detectors
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Door frame metal detectors provide several advantages for
                organizations that require secure entry screening.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Enhanced Security",
                  description:
                    "DFMD systems help detect concealed metallic objects and prevent security threats before they enter the premises.",
                },
                {
                  title: "Faster Screening Process",
                  description:
                    "Walk-through metal detectors allow individuals to be screened quickly without requiring manual body inspection.",
                },
                {
                  title: "Accurate Detection",
                  description:
                    "Advanced detection technology ensures reliable identification of metallic objects, reducing false alarms.",
                },
                {
                  title: "Suitable for High-Traffic Areas",
                  description:
                    "These systems can screen large numbers of people efficiently without causing bottlenecks at entry points.",
                },
                {
                  title: "Reduced Manual Checks",
                  description:
                    "Automated detection reduces the need for manual body searches, improving security staff efficiency.",
                },
                {
                  title: "Non-Intrusive Screening",
                  description:
                    "Walk-through screening is non-contact and respectful, making it suitable for public-facing environments.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-[#6d6f72]/5 rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Walk-Through vs Handheld Comparison ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Walk-Through Metal Detector vs Handheld Metal Detector
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Both walk-through and handheld metal detectors are used for
                security screening. Understanding their differences helps
                organizations choose the right solution.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-100">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-[#b82c30] text-white">
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Walk-Through Metal Detector
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Handheld Metal Detector
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Screening Speed",
                      walkthrough: "Fast screening for large crowds",
                      handheld: "Slower manual inspection",
                    },
                    {
                      feature: "Coverage",
                      walkthrough: "Full body scanning",
                      handheld: "Targeted scanning",
                    },
                    {
                      feature: "Efficiency",
                      walkthrough: "Ideal for entry checkpoints",
                      handheld: "Used for secondary inspection",
                    },
                    {
                      feature: "Operation",
                      walkthrough: "Automatic detection",
                      handheld: "Manual operation",
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 font-semibold text-[#6d6f72]">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        <span className="inline-flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {row.walkthrough}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        {row.handheld}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-600 mt-6 text-lg">
              Walk-through metal detectors are usually installed at entry
              gates, while handheld detectors are used for additional
              inspections.
            </p>
          </div>
        </section>

        {/* ── Applications ── */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Applications of Door Frame Metal Detectors
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Door frame metal detectors are widely used across different
                industries and facilities that require reliable security
                screening.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Plane,
                  title: "Airports",
                  description:
                    "Airports use walk-through metal detectors to screen passengers before entering secure departure zones.",
                },
                {
                  icon: Landmark,
                  title: "Government Buildings",
                  description:
                    "Government facilities use DFMD systems to prevent weapons from entering restricted and sensitive areas.",
                },
                {
                  icon: GraduationCap,
                  title: "Schools and Universities",
                  description:
                    "Educational institutions install metal detectors to enhance campus security and student safety.",
                },
                {
                  icon: Trophy,
                  title: "Stadiums and Event Venues",
                  description:
                    "Metal detectors help screen large crowds entering sports arenas and public events efficiently.",
                },
                {
                  icon: Building2,
                  title: "Corporate Offices",
                  description:
                    "High-security corporate facilities use DFMD systems to maintain a safe workplace environment.",
                },
                {
                  icon: Users,
                  title: "Public Buildings",
                  description:
                    "Courts, museums, and public institutions deploy metal detectors at entry points for visitor safety.",
                },
              ].map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#b82c30] rounded-xl flex items-center justify-center flex-shrink-0">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 mt-8 text-lg">
              These facilities rely on DFMD systems to maintain safe and secure
              entry environments for staff, visitors, and the public.
            </p>
          </div>
        </section>

        {/* ── Choosing the Right DFMD ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Choosing the Right Door Frame Metal Detector
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Selecting the right metal detector depends on several factors
                specific to your facility and security requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Layers,
                  title: "Detection Zones",
                  description:
                    "Higher detection zones provide more accurate identification of metal objects on the body.",
                },
                {
                  icon: Eye,
                  title: "Sensitivity Level",
                  description:
                    "High sensitivity ensures detection of even small metallic items carried by individuals.",
                },
                {
                  icon: Users,
                  title: "Traffic Volume",
                  description:
                    "Facilities with heavy foot traffic require faster detection systems to avoid queues.",
                },
                {
                  icon: Building2,
                  title: "Installation Environment",
                  description:
                    "Indoor and outdoor installations may require different system configurations and ratings.",
                },
              ].map((factor, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-[#6d6f72]/5 rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#b82c30] rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <factor.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose TimeWatch ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Why Choose TimeWatch Door Frame Metal Detectors
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                TimeWatch offers dependable security screening solutions
                tailored for contemporary facilities. Our door frame metal
                detectors integrate cutting-edge detection technology with
                robust hardware to guarantee consistent performance, assisting
                organizations in fostering safer and more secure environments.
              </p>
            </div>
            <WhyChooseUs features={featureList} />
          </div>
        </section>

        {/* ── Internal Links ── */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#6d6f72]">
                Explore Our Related Solutions
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Biometric Attendance System",
                  href: "/products/time-attendance-and-access-control",
                },
                {
                  title: "Fingerprint Attendance Machine",
                  href: "/products/time-attendance-and-access-control/card-fingerprint-face-series",
                },
                {
                  title: "Access Control System",
                  href: "/products/time-attendance-and-access-control/network-elevator-controller",
                },
                {
                  title: "Turnstile Gate",
                  href: "/products/entrance-control/turnstile-tripod",
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="block bg-white rounded-xl p-5 text-center font-semibold text-[#6d6f72] border-2 border-gray-100 hover:border-primary hover:text-primary hover:shadow-md transition-all duration-200"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="container mx-auto py-12 px-0 sm:px-6 lg:px-8">
          <h2 className="text-center mb-8 text-3xl lg:text-4xl font-extrabold text-secondary">
            Frequently Asked Questions
          </h2>
          <div id="dfmdFAQ">
            {faqs.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                index={index}
                isFirst={index === 0}
              />
            ))}
          </div>
        </section>

        {/* ── Contact Form Section ── */}
        <section
          className="container mx-auto py-12 px-0 sm:px-6 lg:px-8"
          id="contact"
        >
          <h2 className="text-center mb-8 text-3xl lg:text-4xl font-extrabold text-secondary">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div className="flex-1 p-4 md:p-8 bg-white">
              <HomePageForm />
            </div>
            <div className="flex-1 p-8 bg-[#d63438] text-white flex flex-col items-center justify-center space-y-6">
              <h2 className="text-xl md:text-4xl font-bold mb-4">
                Request a Demo Today
              </h2>
              <div className="space-y-3 text-center">
                <p className="md:text-xl font-semibold">
                  Call:&nbsp;
                  <span>+91 95999 53923</span>
                </p>
                <p className="md:text-xl font-semibold">
                  Email:&nbsp;
                  <span>sales@timewatchindia.com</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DoorFrameMetalDetectorPage;