// app/turnstile-gate/page.tsx
import React from "react";
import {
  CheckCircle,
  Shield,
  Zap,
  Users,
  Building2,
  Factory,
  GraduationCap,
  Warehouse,
  Landmark,
  ShoppingBag,
  Layers,
  BarChart3,
  AlertTriangle,
  ArrowLeftRight,
  ScanFace,
  CreditCard,
  Fingerprint,
  QrCode,
  Train,
  Trophy,
  Plane,
  Hospital,
  RotateCcw,
  PanelLeftOpen,
  DoorOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import HomePageForm from "@/components/HomePageForm";
import AccordionItem from "@/components/landing/AccordionItem";

export const metadata = {
  title:
    "Turnstile Gate Access Control System for Secure Entry | TimeWatch India",
  description:
    "Advanced turnstile gate access control system including tripod turnstile, flap barrier gate and swing barrier gate for offices, metro stations and secure facilities.",
  keywords:
    "turnstile gate, tripod turnstile gate, flap barrier gate, swing barrier gate, turnstile access control system, pedestrian access control gate",
  alternates: {
    canonical: "https://www.timewatchindia.com/turnstile-gate",
  },
  openGraph: {
    title:
      "Turnstile Gate Access Control System for Secure Entry | TimeWatch India",
    description:
      "Advanced turnstile gate access control system including tripod turnstile, flap barrier gate and swing barrier gate for offices, metro stations and secure facilities.",
    url: "https://www.timewatchindia.com/turnstile-gate",
    type: "website",
    images: [
      {
        url: "https://www.timewatchindia.com/assets/img/products/turnstile-gate.jpg",
        width: 1200,
        height: 630,
        alt: "Turnstile Gate Access Control System by TimeWatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Turnstile Gate Access Control System for Secure Entry | TimeWatch India",
    description:
      "Advanced turnstile gate access control system including tripod turnstile, flap barrier gate and swing barrier gate for offices, metro stations and secure facilities.",
    images: [
      "https://www.timewatchindia.com/assets/img/products/turnstile-gate.jpg",
    ],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Turnstile Gate Access Control System",
  brand: {
    "@type": "Brand",
    name: "TimeWatch",
  },
  description:
    "Advanced turnstile gate access control system including tripod turnstile, flap barrier gate and swing barrier gate for offices, metro stations and secure facilities.",
  category: "Pedestrian Access Control",
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
      name: "What is a turnstile gate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A turnstile gate is a physical barrier used to control pedestrian entry and exit at secure locations.",
      },
    },
    {
      "@type": "Question",
      name: "Where are turnstile gates used?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Turnstile gates are used in offices, metro stations, stadiums, airports and industrial facilities.",
      },
    },
    {
      "@type": "Question",
      name: "Can turnstile gates integrate with biometric systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Turnstile gates can integrate with biometric attendance and access control systems.",
      },
    },
    {
      "@type": "Question",
      name: "What are the types of turnstile gates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common types include tripod turnstile gates, flap barrier gates, and swing barrier gates.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What is a turnstile gate?",
    answer:
      "A turnstile gate is a physical barrier used to control pedestrian entry and exit at secure locations.",
  },
  {
    question: "Where are turnstile gates used?",
    answer:
      "Turnstile gates are commonly used in offices, metro stations, stadiums, airports, and industrial facilities.",
  },
  {
    question: "Can turnstile gates integrate with biometric systems?",
    answer:
      "Yes. Turnstile gates can integrate with biometric attendance systems and access control devices.",
  },
  {
    question: "What are the types of turnstile gates?",
    answer:
      "Common types include tripod turnstile gates, flap barrier gates, and swing barrier gates.",
  },
];

const featureList = [
  {
    title: "Integration with Biometric Attendance Systems",
    description:
      "Our turnstile gates seamlessly connect with biometric attendance devices, RFID card readers, and facial recognition systems for fully automated entry.",
  },
  {
    title: "Durable Stainless Steel Construction",
    description:
      "Built with premium stainless steel and heavy-duty materials engineered for long-term performance in high-traffic environments.",
  },
  {
    title: "Smooth and Reliable Gate Operation",
    description:
      "Fast motorized mechanisms ensure seamless pedestrian flow without congestion at entry or exit points.",
  },
  {
    title: "Scalable Solutions for Different Facilities",
    description:
      "Whether a small office lobby or a large metro station, our turnstile systems scale to meet your specific access control needs.",
  },
  {
    title: "Installation and Technical Support Across India",
    description:
      "TimeWatch provides pan-India installation, commissioning, and after-sales technical support to keep your system running smoothly.",
  },
];

const TurnstileGatePage = () => {
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
                src="/images/turnstile-gate.webp"
                alt="Turnstile Gate Access Control System"
                fill
                sizes="100"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none z-10" />
            </div>
          </div>

          <div className="relative z-20 container flex justify-center h-full flex-col xl:pr-[400px] text-white banner">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Turnstile Gate Access Control System for Secure Pedestrian Entry
            </h1>
            <p className="text-xl text-white mb-8 hidden md:block">
              Effectively managing pedestrian access in offices, industrial
              sites, metro stations, stadiums, and public buildings is a crucial
              aspect of contemporary security management. A turnstile gate
              serves as a physical barrier for access control, specifically
              designed to manage pedestrian entry and exit at designated
              locations.
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
                        src="/images/TWLD-TS2700.webp"
                        alt="What is a Turnstile Gate"
                        title="Turnstile Gate Access Control Overview"
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
                  What is a Turnstile Gate?
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  A turnstile gate is a mechanical or electronic access control
                  barrier that allows controlled pedestrian movement through a
                  secured entry point. Unlike standard doors or gates, turnstile
                  gates are designed to permit only one person to pass through
                  at a time.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  This helps prevent unauthorized access and tailgating, which
                  occurs when multiple individuals attempt to enter using a
                  single authorization. Turnstile gate systems work together
                  with access control technologies such as biometric devices or
                  RFID cards to verify user identity before granting entry.
                </p>

                <div className="space-y-3">
                  {[
                    "Control pedestrian entry and exit",
                    "Prevent tailgating and unauthorized access",
                    "Integrate with biometric attendance systems",
                    "Maintain orderly and secure entry points",
                    "Support high-traffic pedestrian environments",
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
                  Authentication Methods
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  How Turnstile Gate Systems Work
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Turnstile gate systems operate in combination with access
                  control systems to verify user identity before allowing entry.
                  When a person approaches the turnstile gate, they must
                  authenticate themselves using a recognized identification
                  method.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: CreditCard,
                      label: "RFID Card Scanning",
                      sub: "Tap smart card or RFID card to authenticate and unlock the turnstile.",
                    },
                    {
                      icon: Fingerprint,
                      label: "Fingerprint Authentication",
                      sub: "Fast and reliable biometric identity verification at the gate.",
                    },
                    {
                      icon: ScanFace,
                      label: "Facial Recognition Verification",
                      sub: "Contactless AI-powered face scan for seamless pedestrian entry.",
                    },
                    {
                      icon: QrCode,
                      label: "QR Code Scanning",
                      sub: "Scan a digital QR code for visitor or event-based access.",
                    },
                    {
                      icon: Shield,
                      label: "Access Control Card Systems",
                      sub: "Integration with existing access control infrastructure and software.",
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
                        src="/images/TWLD-TS2715.webp"
                        alt="Turnstile Gate Authentication Methods"
                        title="How Turnstile Gate Access Control Works"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Types of Turnstile Gates ── */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Types of Turnstile Gates
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Different types of turnstile gates are available depending on
                the security level, design preference, and pedestrian traffic
                volume.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: RotateCcw,
                  title: "Tripod Turnstile Gate",
                  description:
                    "A tripod turnstile gate is one of the most commonly used pedestrian access control systems. It consists of three rotating arms arranged in a tripod structure that allows only one person to pass at a time. When a user authenticates their identity using an access control device, the gate unlocks and the arms rotate, allowing entry. These gates are cost-effective, durable, easy to maintain, and suitable for high traffic environments such as corporate offices, industrial factories, metro stations, and government facilities.",
                },
                {
                  icon: PanelLeftOpen,
                  title: "Flap Barrier Gate",
                  description:
                    "A flap barrier gate is a modern turnstile system that uses retractable panels or flaps to control pedestrian access. When authentication is successful, the flaps open automatically to allow the person to pass through. After the person passes, the flaps close again to secure the entry point. Flap barrier gates are often used in locations where both security and modern aesthetics are important, such as corporate headquarters, airports, metro stations, and commercial office complexes.",
                },
                {
                  icon: DoorOpen,
                  title: "Swing Barrier Gate",
                  description:
                    "A swing barrier gate uses swing doors that open automatically when a user is authenticated. These gates are commonly used in locations that require wider entry points such as wheelchair access areas or facilities where people may carry luggage. Swing barrier gates are widely used in airports, hospitals, corporate offices, shopping malls, and public facilities. These systems provide flexible access control while maintaining security.",
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

        {/* ── All-in-One Integration Panel ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  System Integration
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  Turnstile Gate Integration with Access Control Systems
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Modern organizations require turnstile systems that work
                  seamlessly with their existing security infrastructure.
                  TimeWatch turnstile gates are designed to integrate with a
                  wide range of access control and attendance technologies.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  This integration enables organizations to establish a fully
                  automated system for pedestrian access control. Modern
                  turnstile gates also include sensors that detect unauthorized
                  entry attempts or tailgating, ensuring that only one person
                  passes per authentication.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed font-medium">
                  Compatible integration technologies:
                </p>
                <div className="space-y-3">
                  {[
                    { icon: Fingerprint, label: "Biometric attendance systems" },
                    { icon: CreditCard, label: "RFID card reader systems" },
                    { icon: QrCode, label: "QR code scanner systems" },
                    { icon: ScanFace, label: "Facial recognition systems" },
                    { icon: Shield, label: "Access control software" },
                    { icon: BarChart3, label: "HR and payroll platforms" },
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
                        <Layers className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#6d6f72]">
                        All-in-One Turnstile System
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        Single gate, multiple authentication options
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { icon: Fingerprint, label: "Biometric" },
                        { icon: CreditCard, label: "RFID" },
                        { icon: QrCode, label: "QR Code" },
                        { icon: ScanFace, label: "Face" },
                        { icon: Shield, label: "Access" },
                        { icon: BarChart3, label: "Payroll" },
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
                Key Features of Turnstile Gate Systems
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern turnstile gate systems include several advanced features
                designed to enhance security and pedestrian flow efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Secure Pedestrian Access",
                  description:
                    "Turnstile gates allow only one person to pass at a time, preventing unauthorized entry and tailgating.",
                },
                {
                  icon: Layers,
                  title: "Integration with Access Control",
                  description:
                    "Turnstile systems integrate with biometric attendance devices, RFID card systems, and facial recognition systems.",
                },
                {
                  icon: Zap,
                  title: "Durable Construction",
                  description:
                    "Most turnstile gates are built using stainless steel or heavy-duty materials to ensure long-term durability.",
                },
                {
                  icon: Users,
                  title: "Smooth and Fast Operation",
                  description:
                    "Modern turnstile gates are designed for fast operation to prevent congestion in high-traffic areas.",
                },
                {
                  icon: AlertTriangle,
                  title: "Safety Sensors",
                  description:
                    "Safety sensors detect obstacles and prevent the gate from closing if a person or object is detected.",
                },
                {
                  icon: ArrowLeftRight,
                  title: "Bidirectional Access Control",
                  description:
                    "Turnstile gates manage both entry and exit flow, providing complete control over pedestrian movement.",
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
                Benefits of Installing Turnstile Gates
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Turnstile gate systems offer several advantages for
                organizations that require secure pedestrian entry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Improved Security",
                  description:
                    "Turnstile gates ensure that only authorized individuals can enter restricted areas, keeping unauthorized personnel out.",
                },
                {
                  title: "Controlled Pedestrian Flow",
                  description:
                    "These systems help regulate the movement of people entering or exiting a facility in an orderly manner.",
                },
                {
                  title: "Prevention of Unauthorized Entry",
                  description:
                    "Turnstile gates prevent tailgating and unauthorized access attempts at every secured entry point.",
                },
                {
                  title: "Integration with Attendance Systems",
                  description:
                    "Turnstile gates integrate with biometric attendance systems to automatically record employee entry and exit.",
                },
                {
                  title: "Professional Facility Management",
                  description:
                    "Turnstile gates create a well-organized and professional entry environment for employees and visitors.",
                },
                {
                  title: "Reduced Security Staffing Costs",
                  description:
                    "Automated entry management reduces the dependence on manual security personnel at entry points.",
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

        {/* ── Industries / Applications ── */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Applications of Turnstile Gates
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Turnstile gates are widely used in different industries and
                environments where controlled pedestrian access is required.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Building2,
                  title: "Corporate Offices",
                  description:
                    "Turnstile gates regulate employee entry and integrate with biometric attendance systems for accurate records.",
                },
                {
                  icon: Factory,
                  title: "Industrial Facilities",
                  description:
                    "Factories use turnstile systems to manage worker entry and improve workplace security at production zones.",
                },
                {
                  icon: Train,
                  title: "Public Transport Stations",
                  description:
                    "Metro and railway stations use turnstile gates to manage passenger entry and ticket validation efficiently.",
                },
                {
                  icon: Trophy,
                  title: "Stadiums and Event Venues",
                  description:
                    "Turnstile gates help control large crowds entering sports arenas and event venues safely.",
                },
                {
                  icon: GraduationCap,
                  title: "Educational Institutions",
                  description:
                    "Universities and schools use turnstile gates to control student and staff access to secure campus areas.",
                },
                {
                  icon: Plane,
                  title: "Airports",
                  description:
                    "High-speed turnstile gates manage passenger flow through secure terminal zones and boarding areas.",
                },
                {
                  icon: Hospital,
                  title: "Hospitals and Healthcare",
                  description:
                    "Turnstile systems control access to restricted hospital areas while allowing smooth patient and visitor flow.",
                },
                {
                  icon: Landmark,
                  title: "Government Buildings",
                  description:
                    "Secure government facilities use turnstile gates to ensure only authorized personnel access sensitive areas.",
                },
                {
                  icon: ShoppingBag,
                  title: "Commercial Complexes",
                  description:
                    "Shopping malls and commercial buildings use turnstile systems to manage pedestrian entry at key access points.",
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
              These industries rely on turnstile gate systems to improve
              security and manage pedestrian access efficiently.
            </p>
          </div>
        </section>

        {/* ── Why Choose TimeWatch ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Why Choose TimeWatch Turnstile Gate Systems
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                TimeWatch provides reliable turnstile gate solutions designed
                for secure and efficient pedestrian access control. Our
                turnstile systems combine advanced authentication technology
                with durable hardware to deliver long-term performance, helping
                organizations create secure entry points while maintaining
                smooth pedestrian movement.
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
                  title: "Access Control System",
                  href: "/access-control-system",
                },
                {
                  title: "Biometric Attendance System",
                  href: "/biometric-attendance-system",
                },
                {
                  title: "Boom Barrier Gate",
                  href: "/boom-barrier-gate",
                },
                {
                  title: "Parking Management System",
                  href: "/parking-management-system",
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
          <div id="turnstileGateFAQ">
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

export default TurnstileGatePage;