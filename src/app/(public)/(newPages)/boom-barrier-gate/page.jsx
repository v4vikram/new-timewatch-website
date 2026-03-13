// app/boom-barrier-gate/page.tsx
import React from "react";
import {
  CheckCircle,
  Shield,
  Zap,
  Car,
  Radio,
  Settings,
  Building2,
  Factory,
  Home,
  ShoppingBag,
  Warehouse,
  Plane,
  Layers,
  BarChart3,
  Cloud,
  Users,
  AlertTriangle,
  ArrowUpDown,
  Gauge,
  Wifi,
  Lock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import HomePageForm from "@/components/HomePageForm";
import AccordionItem from "@/components/landing/AccordionItem";

export const metadata = {
  title:
    "Automatic Boom Barrier Gate for Parking & Vehicle Access Control | TimeWatch India",
  description:
    "Automatic boom barrier gate for parking management and vehicle access control. Reliable boom barrier systems for offices, residential complexes and commercial facilities in India.",
  keywords:
    "boom barrier gate, automatic boom barrier, boom barrier gate india, parking boom barrier system, vehicle access control system, boom barrier gate price",
  alternates: {
    canonical: "https://www.timewatchindia.com/boom-barrier-gate",
  },
  openGraph: {
    title:
      "Automatic Boom Barrier Gate for Parking & Vehicle Access Control | TimeWatch India",
    description:
      "Automatic boom barrier gate for parking management and vehicle access control. Reliable boom barrier systems for offices, residential complexes and commercial facilities in India.",
    url: "https://www.timewatchindia.com/boom-barrier-gate",
    type: "website",
    images: [
      {
        url: "https://www.timewatchindia.com/assets/img/products/boom-barrier-gate.jpg",
        width: 1200,
        height: 630,
        alt: "Automatic Boom Barrier Gate by TimeWatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Automatic Boom Barrier Gate for Parking & Vehicle Access Control | TimeWatch India",
    description:
      "Automatic boom barrier gate for parking management and vehicle access control. Reliable boom barrier systems for offices, residential complexes and commercial facilities in India.",
    images: [
      "https://www.timewatchindia.com/assets/img/products/boom-barrier-gate.jpg",
    ],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Automatic Boom Barrier Gate",
  brand: {
    "@type": "Brand",
    name: "TimeWatch",
  },
  description:
    "Automatic boom barrier gate for parking management and vehicle access control. Reliable boom barrier systems for offices, residential complexes and commercial facilities in India.",
  category: "Vehicle Access Control",
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
      name: "What is a boom barrier gate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A boom barrier gate is an automated barrier used to control vehicle entry and exit at parking areas or secure facilities.",
      },
    },
    {
      "@type": "Question",
      name: "Where are boom barrier gates used?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Boom barrier gates are commonly installed in offices, residential complexes, malls and industrial facilities.",
      },
    },
    {
      "@type": "Question",
      name: "Can boom barrier gates integrate with RFID systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many boom barrier systems integrate with RFID vehicle identification systems.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price of a boom barrier gate in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost of boom barrier gates is influenced by various features, including the length of the boom arm, the speed of the motor, the type of automation technology employed, and the capabilities for integration.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What is a boom barrier gate?",
    answer:
      "A boom barrier gate is an automated barrier used to control vehicle entry and exit in parking areas or secure facilities.",
  },
  {
    question: "Where are boom barrier gates used?",
    answer:
      "Boom barrier gates are commonly installed in offices, residential complexes, shopping malls, and industrial facilities.",
  },
  {
    question: "Can boom barrier gates integrate with RFID systems?",
    answer:
      "Indeed, numerous boom barrier systems are designed to work in conjunction with RFID vehicle identification systems to facilitate automated access control.",
  },
  {
    question: "What is the price of a boom barrier gate in India?",
    answer:
      "The cost of boom barrier gates is influenced by various features, including the length of the boom arm, the speed of the motor, the type of automation technology employed, and the capabilities for integration.",
  },
];

const featureList = [
  {
    title: "Sturdy Boom Arm Design",
    description:
      "Our boom barriers are built with premium aluminum and steel arms engineered for long-term performance in high-traffic environments.",
  },
  {
    title: "Quick and Seamless Barrier Functionality",
    description:
      "Fast motorized operation ensures smooth vehicle flow without causing congestion at entry or exit points.",
  },
  {
    title: "Compatibility with Parking Management Systems",
    description:
      "Seamlessly integrate with RFID systems, access control, and parking management software for fully automated vehicle control.",
  },
  {
    title: "Consistent Performance in High-Traffic Settings",
    description:
      "Designed to handle continuous operation in busy corporate campuses, malls, airports, and industrial facilities.",
  },
  {
    title: "Installation and Technical Support Across India",
    description:
      "TimeWatch provides pan-India installation, commissioning, and after-sales technical support to keep your system running smoothly.",
  },
];

const BoomBarrierGatePage = () => {
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
                src="/images/boom-barrier-gate.jpg"
                alt="Automatic Boom Barrier Gate"
                fill
                sizes="100"
                className="object-cover object-[25%_75%] w-full h-full"
              />
              {/* Gradient overlay on top of image */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none z-10" />
            </div>
          </div>

          <div className="relative z-20 container flex justify-center h-full flex-col xl:pr-[400px] text-white banner">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Automatic Boom Barrier Gate for Vehicle Access Control
            </h1>
            <p className="text-xl text-white mb-8 hidden md:block">
              Efficient management of vehicle entry and exit is crucial for
              offices, residential complexes, industrial facilities, and
              commercial buildings. An automatic boom barrier gate serves as a
              dependable solution for managing vehicle movement at entry and
              exit points.
            </p>
          </div>
        </section>

        {/* ── Section 1: Left Image + Right Text ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              {/* Left — Image */}
              <div className="order-1">
                <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl p-8">
                  <div className="bg-white rounded-2xl shadow-2xl flex justify-center overflow-hidden">
                    <div className="relative w-full h-[280px] md:h-[460px]">
                      <Image
                        src="/images/TW-DCLD-7000.webp"
                        alt="What is a Boom Barrier Gate"
                        title="Automatic Boom Barrier Gate Overview"
                        fill
                        className="object-cover"
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
                  What is a Boom Barrier Gate?
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  A boom barrier gate serves as an automated physical
                  obstruction designed to regulate vehicle ingress and egress at
                  designated sites. The system comprises a horizontal arm known
                  as a boom arm, which is connected to a motorized mechanism.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Upon receiving authorization for access, the boom arm
                  elevates automatically, permitting vehicles to proceed. Boom
                  barrier gates are widely used in corporate office complexes,
                  residential gated communities, shopping malls, industrial
                  facilities, toll plazas, and parking areas.
                </p>

                <div className="space-y-3">
                  {[
                    "Regulate vehicle entry and exit",
                    "Prevent unauthorized vehicle access",
                    "Automate parking management",
                    "Reduce manual security intervention",
                    "Enhance facility security",
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
                  Operation Modes
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  How Automatic Boom Barrier Gates Work
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Automatic boom barrier systems operate using a motorized
                  mechanism that raises or lowers the barrier arm. The system
                  can be triggered using several authentication methods,
                  enabling organizations to choose the right combination for
                  every access point.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Radio,
                      label: "RFID Vehicle Tags",
                      sub: "Automatic vehicle identification using registered RFID tags on vehicles.",
                    },
                    {
                      icon: Lock,
                      label: "Access Control Systems",
                      sub: "Integrated access control for credential-based vehicle authorization.",
                    },
                    {
                      icon: Settings,
                      label: "Remote Control Operation",
                      sub: "Security personnel can operate the barrier manually via remote.",
                    },
                    {
                      icon: Car,
                      label: "Card Authentication",
                      sub: "Smart card or RFID card tap to authorize vehicle entry.",
                    },
                    {
                      icon: Layers,
                      label: "Parking Management Systems",
                      sub: "Full integration with parking software for automated entry logging.",
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
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex justify-center">
                    <div className="relative w-full h-[280px] md:h-[460px]">
                      <Image
                        src="/images/TW6000DCLD.webp"
                        alt="How Automatic Boom Barrier Gate Works"
                        title="Boom Barrier Gate Operation Modes"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Types of Boom Barrier Gates ── */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Types of Boom Barrier Gates
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Different types of boom barrier gates are available depending
                on the traffic environment and installation requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Automatic Boom Barrier",
                  description:
                    "As a vehicle nears the gate, the system checks for authorization using one of the available methods. Upon approval of the vehicle, the boom arm automatically rises to permit entry. After the vehicle has passed through the gate, the barrier arm descends once more to prevent additional access.",
                },
                {
                  icon: Wifi,
                  title: "RFID Boom Barrier System",
                  description:
                    "RFID-based boom barrier systems utilize RFID vehicle tags for the automatic identification of vehicles. When a vehicle equipped with a registered RFID tag nears the gate, the system detects the tag and automatically raises the barrier. These systems are commonly implemented in residential communities, corporate campuses, and parking facilities.",
                },
                {
                  icon: Settings,
                  title: "Remote Controlled Boom Barrier",
                  description:
                    "In certain areas, boom barriers are managed through remote control devices utilized by security staff. These systems prove beneficial in situations where manual oversight of vehicle access is necessary, providing a flexible fallback option for any entry point.",
                },
              ].map((type, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#b82c30] rounded-xl flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#6d6f72] mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Boom Barrier for Vehicle Access Control (Multi-Biometric equivalent) ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Vehicle Access Control
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  Boom Barrier System for Vehicle Access Control
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Boom barrier gates are crucial for managing vehicle access at
                  both entry and exit points. Contemporary boom barrier systems
                  can be combined with technologies like RFID readers, access
                  control systems, and parking management software.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  As a vehicle nears the gate, the system checks for
                  authorization using one of these technologies. If the vehicle
                  is granted access, the boom arm raises automatically. This
                  automated procedure minimizes the need for manual intervention
                  and guarantees effective vehicle access control.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed font-medium">
                  Boom barrier systems are widely used in:
                </p>
                <div className="space-y-3">
                  {[
                    { icon: Building2, label: "Corporate campuses" },
                    { icon: Home, label: "Residential communities" },
                    { icon: Factory, label: "Industrial plants" },
                    { icon: Plane, label: "Airports" },
                    { icon: Warehouse, label: "Warehouses" },
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
                        <Car className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#6d6f72]">
                        Integrated Boom Barrier System
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        One barrier, multiple integration options
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { icon: Radio, label: "RFID" },
                        { icon: Lock, label: "Access" },
                        { icon: Settings, label: "Remote" },
                        { icon: Car, label: "Card" },
                        { icon: BarChart3, label: "Parking" },
                        { icon: Cloud, label: "Cloud" },
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
                Key Features of Boom Barrier Gates
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern boom barrier gates include advanced features designed for
                durability and reliable operation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Gauge,
                  title: "High-Speed Operation",
                  description:
                    "Boom barrier systems open and close quickly to allow smooth traffic flow without causing congestion.",
                },
                {
                  icon: Shield,
                  title: "Durable Boom Arm",
                  description:
                    "Barrier arms are built using strong materials such as aluminum or steel for long-term performance.",
                },
                {
                  icon: Cloud,
                  title: "Weather-Resistant Design",
                  description:
                    "Boom barriers are designed to operate in outdoor environments and withstand different weather conditions.",
                },
                {
                  icon: AlertTriangle,
                  title: "Safety Sensors",
                  description:
                    "Sensors prevent the barrier arm from closing if a vehicle or object is detected underneath.",
                },
                {
                  icon: Layers,
                  title: "Integration with Security Systems",
                  description:
                    "Boom barriers integrate with RFID parking systems, vehicle access control, and parking management software.",
                },
                {
                  icon: ArrowUpDown,
                  title: "Smooth Barrier Functionality",
                  description:
                    "Motorized operation ensures seamless raising and lowering of the boom arm for efficient vehicle flow.",
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

        {/* ── Boom Barrier for Parking Management ── */}
        {/* <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Parking Management
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  Boom Barrier Gate for Parking Management
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Boom barrier gates are frequently utilized within parking
                  management systems to control the entry and exit of vehicles.
                  When combined with parking management software, boom barrier
                  gates have the capability to automatically log the times of
                  vehicle entry and exit.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  In large facilities such as shopping malls, office complexes,
                  and airports, boom barrier systems are essential for managing
                  high vehicle traffic.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed font-medium">
                  This allows organizations to:
                </p>
                <div className="space-y-3">
                  {[
                    "Monitor parking usage",
                    "Control parking access",
                    "Reduce congestion",
                    "Improve traffic management",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              
              <div className="order-1 lg:order-2 mt-10 lg:mt-0">
                <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl p-8">
                  <div className="bg-white rounded-2xl shadow-2xl p-4 flex justify-center">
                    <div className="relative w-[280px] h-[280px] md:w-[460px] md:h-[460px]">
                      <Image
                        src="/images/boom-barrier-parking.png"
                        alt="Boom Barrier Gate for Parking Management"
                        title="Parking Management Boom Barrier System"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* ── Benefits ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Benefits of Installing Boom Barrier Gates
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Boom barrier systems provide several advantages for
                organizations and property managers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Improved Vehicle Security",
                  description:
                    "Boom barriers ensure that only authorized vehicles can enter the premises, keeping unauthorized access out.",
                },
                {
                  title: "Controlled Traffic Flow",
                  description:
                    "These systems help regulate vehicle movement and reduce congestion at entry and exit points.",
                },
                {
                  title: "Automated Parking Management",
                  description:
                    "Integration with parking systems allows automated vehicle entry and exit logging.",
                },
                {
                  title: "Reduced Manual Monitoring",
                  description:
                    "Automation reduces the need for security staff to manually manage vehicle entry at every gate.",
                },
                {
                  title: "Enhanced Facility Security",
                  description:
                    "Boom barrier systems add an additional layer of security for offices, residential complexes, and industrial facilities.",
                },
                {
                  title: "Reliable All-Weather Performance",
                  description:
                    "Weather-resistant designs ensure consistent operation in outdoor environments across all seasons.",
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

        {/* ── Boom Barrier vs Manual Gate Comparison ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Boom Barrier Gate vs Manual Gate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Organizations frequently evaluate automatic boom barrier gates
                against conventional manual gates when selecting a vehicle
                entry solution.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-100">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-[#b82c30] text-white">
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Boom Barrier Gate
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Manual Gate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Operation",
                      boom: "Automatic motorized system",
                      manual: "Manually operated",
                    },
                    {
                      feature: "Speed",
                      boom: "Fast opening and closing",
                      manual: "Slower operation",
                    },
                    {
                      feature: "Security",
                      boom: "Can integrate with RFID and access control",
                      manual: "Limited security",
                    },
                    {
                      feature: "Traffic Management",
                      boom: "Smooth vehicle flow",
                      manual: "Possible delays",
                    },
                    {
                      feature: "Automation",
                      boom: "Fully automated",
                      manual: "Requires human effort",
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
                          {row.boom}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        {row.manual}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-600 mt-6 text-lg">
              Automatic boom barrier systems are preferred because they improve
              traffic management and enhance security.
            </p>
          </div>
        </section>

        {/* ── Industries ── */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Where Boom Barrier Gates Are Used
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Boom barrier systems are widely deployed across industries that
                require controlled vehicle access and traffic management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Building2,
                  title: "Corporate Office Complexes",
                  description:
                    "Regulate vehicle access for employees and visitors with automated entry across large corporate campuses.",
                },
                {
                  icon: Home,
                  title: "Residential Gated Communities",
                  description:
                    "Secure vehicle access for residents while restricting unauthorized entry into gated housing societies.",
                },
                {
                  icon: ShoppingBag,
                  title: "Shopping Malls",
                  description:
                    "Manage high vehicle traffic efficiently at mall parking entry and exit points.",
                },
                {
                  icon: Factory,
                  title: "Industrial Facilities",
                  description:
                    "Control access to manufacturing plants and industrial zones for authorized vehicles only.",
                },
                {
                  icon: Plane,
                  title: "Airports",
                  description:
                    "High-speed boom barriers for managing vehicle flow at airport parking and drop-off zones.",
                },
                {
                  icon: Warehouse,
                  title: "Warehouses and Logistics",
                  description:
                    "Automated vehicle access control at distribution hubs, warehouses, and logistics centers.",
                },
                {
                  icon: Users,
                  title: "Toll Plazas",
                  description:
                    "Fast-operating boom barriers for toll collection points requiring rapid and reliable vehicle throughput.",
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
              These installations rely on boom barrier systems to improve
              vehicle flow efficiency and premises security.
            </p>
          </div>
        </section>

        {/* ── Choosing the Right Boom Barrier ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Choosing the Right Boom Barrier Gate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Selecting the right boom barrier system depends on several
                factors specific to your facility and usage requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: ArrowUpDown,
                  title: "Boom Arm Length",
                  description:
                    "The boom arm length should match the width of the entry lane for effective vehicle coverage.",
                },
                {
                  icon: Car,
                  title: "Traffic Volume",
                  description:
                    "High-traffic areas require faster barrier operation to avoid bottlenecks at entry points.",
                },
                {
                  icon: Layers,
                  title: "Automation Level",
                  description:
                    "Advanced systems may include RFID or license plate recognition integration for hands-free operation.",
                },
                {
                  icon: Shield,
                  title: "Durability",
                  description:
                    "Boom barrier systems should be built with strong materials to ensure long-term performance.",
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
                Reasons to Select TimeWatch Boom Barrier Gates
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                TimeWatch offers dependable boom barrier solutions tailored to
                meet contemporary vehicle access control needs. Our systems are
                constructed with premium components and cutting-edge automation
                technology, enabling organizations to effectively manage
                vehicle access while enhancing security.
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
                  href: "/biometric-attendance-system",
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
          <div id="boomBarrierFAQ">
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

export default BoomBarrierGatePage;