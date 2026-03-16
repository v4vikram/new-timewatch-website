// pages/x-ray-baggage-scanner.jsx  (or app/x-ray-baggage-scanner/page.jsx)
import {
  CheckCircle,
  ShieldCheck,
  Zap,
  ScanLine,
  Layers,
  Monitor,
  Cpu,
  ImageIcon,
  Maximize2,
  Database,
  Building2,
  Factory,
  GraduationCap,
  Landmark,
  PlaneTakeoff,
  Hotel,
  Users,
  TrainFront,
  ArrowRight,
  ChevronDown,
  Star,
  ExternalLink,
  Package,
  Briefcase,
  Luggage,
  Box,
  Laptop,
} from "lucide-react";
import Image from "next/image";
import ProductCatCard from "@/features/singleProductByCat/components/ProductCatCard";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "X-Ray Baggage Scanner | Security Luggage Scanner Machine | TimeWatch India",
  description:
    "Advanced X-ray baggage scanner for airports, metro stations, offices and public facilities. Detect concealed weapons, explosives and prohibited items quickly with high resolution security scanning.",

  alternates: {
    canonical: "https://www.timewatchindia.com/products/inspection-control/x-ray-baggage-scanner",
  },

  openGraph: {
    title: "X-Ray Baggage Scanner | Security Luggage Scanner Machine | TimeWatch India",
    description:
      "High-resolution X-ray baggage scanner for security screening in airports, metro stations, offices and public facilities.",
    url: "https://www.timewatchindia.com/products/inspection-control/x-ray-baggage-scanner",
    siteName: "TimeWatch India",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "X-Ray Baggage Scanner | Security Luggage Scanner Machine | TimeWatch India",
    description:
      "Advanced luggage scanner for detecting weapons, explosives and prohibited items in high-security environments.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an X-ray baggage scanner?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An X-ray baggage scanner is a security device used to inspect luggage using X-ray imaging technology."
        }
      },
      {
        "@type": "Question",
        name: "Where are baggage scanners used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Baggage scanners are used in airports, offices, metro stations, government buildings and public venues."
        }
      }
    ]
  };



export default function XRayBagageScannerPage() {
  const detectedItems = [
    "Weapons and firearms",
    "Knives and sharp objects",
    "Explosive materials",
    "Metallic tools",
    "Suspicious electronic devices",
    "Unauthorized items inside luggage",
  ];

  const scanningSteps = [
    "The bag is placed on the scanner conveyor belt.",
    "The conveyor moves the bag into the scanning tunnel.",
    "X-ray beams penetrate the bag and capture internal images.",
    "Sensors detect how different materials absorb X-rays.",
    "The system generates a high-resolution image on the operator's display.",
  ];

  const baggageTypes = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Handbags and Personal Bags",
      desc: "Small tunnel scanners are used to inspect handbags, backpacks, and personal belongings at entry checkpoints.",
    },
    {
      icon: <Luggage className="w-6 h-6" />,
      title: "Suitcases and Travel Luggage",
      desc: "Medium tunnel scanners are designed to inspect standard luggage such as suitcases and travel bags.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Courier Packages and Parcels",
      desc: "Security scanners can inspect courier shipments and packages in logistics centers and corporate facilities.",
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Cargo Packages",
      desc: "Large tunnel scanners are used to inspect large baggage and cargo shipments at airports and transportation hubs.",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Laptop Bags and Electronic Equipment",
      desc: "Advanced scanners can detect concealed electronic devices and suspicious components inside bags.",
    },
  ];

  const tunnelSizes = [
    {
      size: "5030",
      desc: "Suitable for small bags, handbags, and office security checkpoints.",
    },
    {
      size: "6040",
      desc: "Commonly used in airports, metro stations, and corporate buildings to inspect medium-sized luggage.",
    },
    {
      size: "6550",
      desc: "Designed for larger luggage and cargo packages.",
    },
    {
      size: "100100",
      desc: "Utilized in high-security settings like airports and logistics centers where large baggage requires inspection.",
    },
  ];

  const aiDetectedItems = [
    "Firearms",
    "Knives",
    "Explosive materials",
    "Dangerous tools",
  ];

  const imageProcessingFeatures = [
    "Image zoom and magnification",
    "Edge enhancement for clearer images",
    "Pseudo color display",
    "Organic and inorganic material highlighting",
    "Image storage and retrieval",
  ];

  const keyFeatures = [
    {
      icon: <ScanLine className="w-6 h-6" />,
      title: "High Resolution X-Ray Imaging",
      desc: "Produces clear and detailed images of luggage contents.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Dual Energy Material Identification",
      desc: "Automatically identifies different material types.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Intelligent Threat Detection",
      desc: "Advanced algorithms help detect suspicious objects.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Conveyor Belt System",
      desc: "Smooth conveyor movement ensures continuous baggage inspection.",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Real-Time Monitoring",
      desc: "Operators can instantly analyze scanned images.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Durable Industrial Design",
      desc: "Machines are designed for continuous operation in busy security environments.",
    },
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      desc: "Baggage scanners help detect concealed weapons and prohibited items.",
    },
    {
      title: "Faster Screening",
      desc: "Large numbers of bags can be inspected quickly.",
    },
    {
      title: "Non-Intrusive Inspection",
      desc: "Bags can be inspected without opening them.",
    },
    {
      title: "Reduced Manual Inspection",
      desc: "Automated scanning reduces the need for manual bag checks.",
    },
    {
      title: "Efficient Crowd Management",
      desc: "Fast screening prevents long queues at security checkpoints.",
    },
  ];

  const applications = [
    {
      icon: <PlaneTakeoff className="w-5 h-5" />,
      title: "Airports",
      desc: "Passenger luggage is inspected before boarding flights.",
    },
    {
      icon: <TrainFront className="w-5 h-5" />,
      title: "Metro and Railway Stations",
      desc: "Passenger bags are screened before entering stations.",
    },
    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Government Buildings",
      desc: "Security checkpoints inspect visitor luggage.",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Corporate Offices",
      desc: "Visitors' bags are screened at entry points.",
    },
    {
      icon: <Hotel className="w-5 h-5" />,
      title: "Hotels",
      desc: "Luxury hotels inspect guest luggage for safety.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Event Venues and Stadiums",
      desc: "Large public events require baggage inspection to ensure visitor safety.",
    },
  ];

  const comparisonRows = [
    {
      feature: "Speed",
      scanner: "Very fast",
      manual: "Slow",
    },
    {
      feature: "Security",
      scanner: "Detects hidden objects",
      manual: "Limited visibility",
    },
    {
      feature: "Efficiency",
      scanner: "High throughput",
      manual: "Time consuming",
    },
    {
      feature: "Accuracy",
      scanner: "High detection accuracy",
      manual: "Depends on human inspection",
    },
  ];

  const timewatchAdvantages = [
    "High-resolution X-ray imaging",
    "AI-enhanced threat detection",
    "Dependable performance in busy areas",
    "Various scanner models for diverse applications",
    "Installation and service assistance throughout India",
  ];

  const relatedLinks = [
    {
      label: "Biometric Attendance System",
      href: "/products/time-attendance-and-access-control",
    },
    {
      label: "Fingerprint Attendance Machine",
      href: "/products/time-attendance-and-access-control/card-fingerprint-face-series",
    },
    {
      label: "Access Control System",
      href: "/products/time-attendance-and-access-control/network-elevator-controller",
    },
    {
      label: "Turnstile Gate",
      href: "/products/entrance-control/turnstile-tripod",
    },
  ];

  const faqs = [
    {
      q: "What is an X-ray baggage scanner?",
      a: "An X-ray baggage scanner is a security device that inspects luggage using X-ray imaging technology.",
    },
    {
      q: "Where are baggage scanners used?",
      a: "They are used in airports, offices, metro stations, hotels, government buildings, and public venues.",
    },
    {
      q: "Can baggage scanners detect weapons?",
      a: "Yes. X-ray scanners can detect weapons, explosives, and metallic objects hidden inside bags.",
    },
    {
      q: "Are baggage scanners safe?",
      a: "Yes. Modern scanners operate within international safety standards.",
    },
  ];

  return (
    <main className="bg-white min-h-screen font-sans">
      <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
      {/* ── HERO ── */}
      <section className="bg-gray-50 relative overflow-hidden h-[400px] md:h-[550px]">
        <div className="absolute inset-0 left-0 top-0 w-full h-full">
          <div className="relative z-10 w-full h-[400px] md:h-[550px]">
            <Image
              src="/images/solutions/baggage-scanner2.png"
              alt="X-Ray Baggage Scanner Hero"
              fill
              sizes="100"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none z-10" />
          </div>
        </div>

        <div className="relative z-20 container flex justify-center h-full flex-col xl:pr-[400px] text-white banner">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            X-Ray Baggage Scanner for Advanced Security Screening
          </h1>
          <p className="text-xl text-white mb-8 hidden md:block">
            Security screening plays a crucial role in safeguarding public
            areas, transportation networks, and corporate settings.
          </p>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="h-1.5 bg-[#d63438]/10" />

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        {/* Introduction */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-[#d63438] pl-4">
            Introduction
          </h2>
          <div className="text-[#6d6f72] leading-relaxed space-y-4">
            <p>
              Locations such as airports, government facilities, metro stations,
              corporate offices, hotels, and event spaces necessitate dependable
              systems for inspecting luggage and packages that enter their
              premises.
            </p>
            <p>
              An X-ray baggage scanner serves as a robust security inspection
              tool intended to analyze the internal contents of bags and parcels
              without the need for opening them. By utilizing cutting-edge X-ray
              imaging technology, these scanners produce clear images of the
              items within the luggage, enabling security personnel to swiftly
              identify potential threats.
            </p>
            <p>
              Contemporary baggage scanners are effective in detecting hidden
              items such as weapons, explosives, metallic objects, and other
              prohibited materials. By facilitating non-intrusive inspections of
              luggage, these systems allow security teams to conduct efficient
              screenings while ensuring a smooth flow of pedestrian traffic.
            </p>
            <p>
              TimeWatch X-ray baggage scanners are engineered for high
              precision, intelligent threat detection, and dependable
              performance in busy security environments.
            </p>
          </div>
        </section>

        {/* What is */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-[#d63438] pl-4">
            What is an X-Ray Baggage Scanner?
          </h2>
          <div className="text-[#6d6f72] leading-relaxed space-y-4">
            <p>
              An X-ray baggage scanner is a security inspection device employed
              to examine luggage, bags, parcels, and packages through the use
              of X-ray technology.
            </p>
            <p>
              The scanner utilizes an X-ray generator to emit beams that
              traverse the baggage. As the X-rays penetrate the luggage,
              various materials absorb the rays in distinct ways. The system
              collects this data and generates a comprehensive image of the
              bag&rsquo;s internal contents on a display.
            </p>
            <p>
              Security personnel review the image to identify any suspicious
              items concealed within the bag.
            </p>
            <p className="font-medium text-gray-700">
              X-ray baggage scanners help identify items such as:
            </p>
          </div>
          <ul className="mt-4 space-y-2">
            {detectedItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#6d6f72]">
                <CheckCircle className="w-4 h-4 text-[#d63438] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[#6d6f72] leading-relaxed">
            This technology allows security personnel to inspect baggage quickly
            and accurately.
          </p>
        </section>

        {/* How It Works */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#d63438] text-white rounded-xl p-2.5">
              <ScanLine className="w-6 h-6" />
            </span>
            <h2 className="text-2xl font-bold text-gray-900">
              How X-Ray Baggage Scanners Work
            </h2>
          </div>
          <p className="text-[#6d6f72] leading-relaxed mb-5">
            Baggage scanners operate using X-ray imaging technology combined
            with digital image processing software. The scanning process works
            as follows:
          </p>
          <ol className="space-y-3">
            {scanningSteps.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="w-7 h-7 flex items-center justify-center rounded-full text-xs font-semibold text-[#d63438] bg-[#d63438]/[0.07] border border-[#d63438]/20 shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-[#6d6f72] text-sm leading-relaxed pt-1">
                  {step}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-[#6d6f72] text-sm leading-relaxed">
            Contemporary baggage scanners employ dual-energy X-ray technology,
            which utilizes color coding for various materials. This enables
            operators to effortlessly differentiate between organic substances,
            metals, and other items.
          </p>
        </section>

        {/* Baggage Types */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Types of Baggage That Can Be Scanned
          </h2>
          <p className="text-[#6d6f72] mb-8">
            X-ray baggage scanners are designed to inspect a wide range of
            baggage types.
          </p>
          <div className="space-y-4">
            {baggageTypes.map((b) => (
              <div key={b.title} className="flex gap-4 items-start">
                <span className="mt-0.5 bg-[#d63438]/10 text-[#d63438] rounded-lg p-2 shrink-0">
                  {b.icon}
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{b.title}</p>
                  <p className="text-[#6d6f72] text-sm mt-0.5">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tunnel Sizes */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Tunnel Size Options for Baggage Scanners
          </h2>
          <p className="text-[#6d6f72] mb-8">
            Baggage scanners are available in different tunnel sizes depending
            on the type of luggage being inspected.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {tunnelSizes.map((t) => (
              <div
                key={t.size}
                className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-[#d63438] text-white text-xs font-bold rounded-lg px-3 py-1.5 tracking-wide">
                    {t.size}
                  </span>
                  <span className="text-xs text-[#6d6f72] font-medium">
                    Tunnel Size
                  </span>
                </div>
                <p className="text-[#6d6f72] text-sm leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[#6d6f72] text-sm">
            Choosing the appropriate tunnel dimensions guarantees effective
            security screening and seamless baggage movement.
          </p>
        </section>

        {/* Material Detection */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#d63438] text-white rounded-xl p-2.5">
              <Layers className="w-6 h-6" />
            </span>
            <h2 className="text-2xl font-bold text-gray-900">
              Material Detection Technology
            </h2>
          </div>
          <p className="text-[#6d6f72] leading-relaxed mb-4">
            Contemporary baggage scanning systems employ multi-energy X-ray
            technology to detect various materials within luggage.
          </p>
          <p className="text-[#6d6f72] leading-relaxed mb-3">
            Different materials are represented in distinct colors on the
            display screen:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Organic materials, including plastics, food products, and explosives.",
              "Inorganic materials, such as glass and ceramics.",
              "Metals, including weapons, tools, and metallic items.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#6d6f72] text-sm">
                <CheckCircle className="w-4 h-4 text-[#d63438] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[#6d6f72] text-sm">
            This color-coded imaging facilitates rapid analysis of baggage
            contents by security personnel.
          </p>
        </section>

        {/* AI Detection */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-[#d63438] pl-4">
            AI-Based Threat Detection
          </h2>
          <div className="text-[#6d6f72] leading-relaxed space-y-4">
            <p>
              Advanced baggage scanners now include Artificial Intelligence (AI)
              assisted detection systems.
            </p>
            <p className="font-medium text-gray-700">
              AI-based systems help automatically identify suspicious objects
              inside luggage such as:
            </p>
          </div>
          <ul className="mt-4 space-y-2">
            {aiDetectedItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#6d6f72]">
                <CheckCircle className="w-4 h-4 text-[#d63438] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[#6d6f72] leading-relaxed">
            These systems highlight potential threats on the operator&rsquo;s
            display, improving detection accuracy and reducing human error.
          </p>
        </section>

        {/* Image Processing */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-[#d63438] pl-4">
            Advanced Image Processing Features
          </h2>
          <p className="text-[#6d6f72] mb-6">
            Contemporary X-ray baggage scanners are equipped with advanced
            image analysis technologies that assist security personnel in
            thoroughly inspecting the contents of baggage.
          </p>
          <p className="text-[#6d6f72] mb-4 font-medium text-gray-700">
            Common image processing features include:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {imageProcessingFeatures.map((f) => (
              <div
                key={f}
                className="flex items-center gap-2 border border-gray-100 rounded-xl px-3 py-3 text-sm text-[#6d6f72] hover:border-[#d63438]/30 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#d63438] shrink-0" />
                {f}
              </div>
            ))}
          </div>
          <p className="mt-5 text-[#6d6f72] text-sm">
            These tools help security teams detect hidden threats quickly.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Key Features of TimeWatch Baggage Scanners
          </h2>
          <p className="text-[#6d6f72] mb-8">
            TimeWatch baggage scanners are built with advanced technologies to
            ensure reliable security screening.
          </p>
          <div className="space-y-4">
            {keyFeatures.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <span className="mt-0.5 bg-[#d63438]/10 text-[#d63438] rounded-lg p-2 shrink-0">
                  {f.icon}
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{f.title}</p>
                  <p className="text-[#6d6f72] text-sm mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Benefits of Installing X-Ray Baggage Scanners
          </h2>
          <ul className="mt-6 divide-y divide-gray-100 border-t border-gray-100">
            {benefits.map((b, i) => (
              <li
                key={b.title}
                className="grid grid-cols-[48px_1fr] gap-4 py-6"
              >
                <span className="mt-0.5 w-9 h-9 flex items-center justify-center rounded-md text-xs font-semibold text-[#d63438] bg-[#d63438]/[0.07] border border-[#d63438]/20 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-gray-900">{b.title}</p>
                  <p className="text-[#6d6f72] text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Applications */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Applications of X-Ray Baggage Scanners
          </h2>
          <p className="text-[#6d6f72] mb-8">
            X-ray baggage scanners are widely used across many industries.
          </p>
          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app.title} className="flex gap-4 items-start">
                <span className="mt-0.5 bg-[#d63438]/10 text-[#d63438] rounded-lg p-2 shrink-0">
                  {app.icon}
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{app.title}</p>
                  <p className="text-[#6d6f72] text-sm mt-0.5">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="container mx-auto mt-12 mb-20 px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-l-4 border-[#d63438] pl-4">
            Our Products
          </h2>
          <ProductCatCard categorySlug="inspection-control" />
        </section>

        {/* Comparison Table */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-[#d63438] pl-4">
            X-Ray Baggage Scanner vs Manual Bag Inspection
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#d63438] text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">
                    Feature
                  </th>
                  <th className="text-left px-5 py-3.5 font-semibold">
                    X-Ray Baggage Scanner
                  </th>
                  <th className="text-left px-5 py-3.5 font-semibold">
                    Manual Inspection
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-5 py-3.5 text-[#6d6f72]">
                      {row.scanner}
                    </td>
                    <td className="px-5 py-3.5 text-[#6d6f72]">
                      {row.manual}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[#6d6f72] text-sm">
            Because baggage scanners allow non-intrusive inspection, they are
            widely used in modern security checkpoints.
          </p>
        </section>

        {/* Why TimeWatch */}
        <section className="bg-[#d63438] text-white rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 fill-white" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why Choose TimeWatch Baggage Scanners
          </h2>
          <p className="text-white/85 leading-relaxed mb-3">
            TimeWatch offers sophisticated baggage scanning solutions tailored
            for contemporary security settings.
          </p>
          <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">
            Our scanners feature:
          </p>
          <ul className="space-y-3 mb-6">
            {timewatchAdvantages.map((adv) => (
              <li
                key={adv}
                className="flex items-center gap-3 text-white/90 text-sm"
              >
                <ArrowRight className="w-4 h-4 shrink-0 text-white/60" />
                {adv}
              </li>
            ))}
          </ul>
          <p className="text-white/80 text-sm">
            TimeWatch&rsquo;s security solutions enable organizations to uphold
            safe and secure environments.
          </p>
        </section>

        {/* Related Solutions */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-5 border-l-4 border-[#d63438] pl-4">
            Explore Related Solutions
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center justify-between gap-3 border border-gray-100 rounded-xl px-4 py-3.5 text-sm text-[#6d6f72] hover:border-[#d63438]/40 hover:text-[#d63438] transition-colors group"
              >
                <span className="font-medium">{link.label}</span>
                <ExternalLink className="w-4 h-4 shrink-0 text-gray-300 group-hover:text-[#d63438] transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-l-4 border-[#d63438] pl-4">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group py-5 cursor-pointer list-none"
              >
                <summary className="flex items-center justify-between gap-4 font-semibold text-gray-900 text-base select-none list-none marker:hidden">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-[#d63438] shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-[#6d6f72] leading-relaxed text-sm">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </article>

      {/* ── FOOTER STRIP ── */}
      <footer className="border-t border-gray-100 py-6 text-center text-xs text-[#6d6f72]">
        © {new Date().getFullYear()} TimeWatch India. All rights reserved.
      </footer>
    </main>
  );
}