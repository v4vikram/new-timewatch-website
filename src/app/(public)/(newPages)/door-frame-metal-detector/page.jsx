// pages/door-frame-metal-detector.jsx  (or app/door-frame-metal-detector/page.jsx)
import {
  CheckCircle,
  ShieldCheck,
  Zap,
  AlertTriangle,
  SlidersHorizontal,
  BatteryCharging,
  Eye,
  Volume2,
  Layers,
  Building2,
  Factory,
  GraduationCap,
  Users,
  Landmark,
  PlaneTakeoff,
  ArrowRight,
  ChevronDown,
  Star,
  ExternalLink,
  Wrench,
  ScanLine,
} from "lucide-react";
import Image from "next/image";
import ProductCatCard from "@/features/singleProductByCat/components/ProductCatCard";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Door Frame Metal Detector | Walk Through Metal Detector | TimeWatch India",
  description:
    "High sensitivity door frame metal detector with multi-zone detection. Advanced walk through metal detector for airports, offices, schools and secure facilities.",

  keywords: [
    "door frame metal detector",
    "walk through metal detector",
    "DFMD metal detector",
    "security metal detector gate",
    "metal detector gate",
    "multi zone metal detector"
  ],

  alternates: {
    canonical: "https://www.timewatchindia.com/door-frame-metal-detector",
  },

  openGraph: {
    title: "Door Frame Metal Detector | Walk Through Metal Detector | TimeWatch India",
    description:
      "Advanced walk through metal detector with multi-zone detection for airports, offices, schools and high-security facilities.",
    url: "https://www.timewatchindia.com/door-frame-metal-detector",
    siteName: "TimeWatch India",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Door Frame Metal Detector | Walk Through Metal Detector | TimeWatch India",
    description:
      "High sensitivity door frame metal detector for security screening at airports, offices and public facilities.",
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
        name: "What is a door frame metal detector?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A door frame metal detector is a security device used to detect metal objects carried by individuals passing through the detector gate."
        }
      },
      {
        "@type": "Question",
        name: "Where are walk through metal detectors used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Walk through metal detectors are used in airports, government buildings, schools, stadiums and corporate offices."
        }
      },
      {
        "@type": "Question",
        name: "What are detection zones in metal detectors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Detection zones divide the detector frame into multiple sections to identify where metal objects are located on the body."
        }
      }
    ]
  };



export default function DoorFrameMetalDetectorPage() {
  const detectedObjects = [
    "Weapons",
    "Firearms",
    "Knives",
    "Metallic tools",
    "Unauthorized metallic objects",
  ];

  const detectionZones = [
    "Single Zone Detection",
    "6 Zone Detection",
    "9 Zone Detection",
    "12 Zone Detection",
    "18 Zone Detection",
    "33 Zone Detection",
  ];

  const keyFeatures = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Multi-Zone Detection",
      desc: "Multiple detection zones identify the exact location of metallic objects on the body.",
    },
    {
      icon: <ScanLine className="w-6 h-6" />,
      title: "High Detection Sensitivity",
      desc: "Advanced sensors allow the system to detect even small metallic objects.",
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Audible and Visual Alarms",
      desc: "When metal is detected, the system activates alarm signals and LED indicators.",
    },
    {
      icon: <SlidersHorizontal className="w-6 h-6" />,
      title: "Adjustable Sensitivity Levels",
      desc: "Security personnel can adjust detection sensitivity based on the security environment.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Durable Construction",
      desc: "DFMD systems are built using durable materials designed for long-term use in high-traffic environments.",
    },
    {
      icon: <BatteryCharging className="w-6 h-6" />,
      title: "Optional Battery Backup",
      desc: "Battery backup ensures the system continues operating during power interruptions.",
    },
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      desc: "DFMD systems help detect concealed metallic objects and prevent security threats.",
    },
    {
      title: "Faster Screening Process",
      desc: "Walk-through metal detectors allow individuals to be screened quickly without manual inspection.",
    },
    {
      title: "Accurate Detection",
      desc: "Advanced detection technology ensures reliable identification of metallic objects.",
    },
    {
      title: "Suitable for High-Traffic Areas",
      desc: "These systems can screen large numbers of people efficiently.",
    },
    {
      title: "Reduced Manual Checks",
      desc: "Automated detection reduces the need for manual body searches.",
    },
  ];

  const applications = [
    {
      icon: <PlaneTakeoff className="w-5 h-5" />,
      title: "Airports",
      desc: "Airports use walk-through metal detectors to screen passengers before entering secure zones.",
    },
    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Government Buildings",
      desc: "Government facilities use DFMD systems to prevent weapons from entering restricted areas.",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Schools and Universities",
      desc: "Educational institutions install metal detectors to enhance campus security.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Stadiums and Event Venues",
      desc: "Metal detectors help screen large crowds entering sports arenas and events.",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Corporate Offices",
      desc: "High-security corporate facilities use DFMD systems to maintain workplace safety.",
    },
  ];

  const comparisonRows = [
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
  ];

  const choosingFactors = [
    {
      title: "Detection Zones",
      desc: "Higher detection zones provide more accurate identification of metal objects.",
    },
    {
      title: "Sensitivity Level",
      desc: "High sensitivity ensures detection of small metallic items.",
    },
    {
      title: "Traffic Volume",
      desc: "Facilities with heavy foot traffic require faster detection systems.",
    },
    {
      title: "Installation Environment",
      desc: "Indoor and outdoor installations may require different system configurations.",
    },
  ];

  const timewatchAdvantages = [
    "High-precision metal detection",
    "Multi-zone detection capability",
    "Reliable operation in high-traffic settings",
    "Simple installation and configuration",
    "Technical support and service throughout India",
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
      q: "What is a door frame metal detector?",
      a: "A door frame metal detector is a security device used to detect metallic objects carried by individuals passing through the detector gate.",
    },
    {
      q: "Where are walk-through metal detectors used?",
      a: "Walk-through metal detectors are commonly used in airports, government buildings, schools, stadiums, and corporate facilities.",
    },
    {
      q: "Can door frame metal detectors detect small metal objects?",
      a: "Yes. Modern DFMD systems can detect small metallic objects depending on the sensitivity settings.",
    },
    {
      q: "What are detection zones in metal detectors?",
      a: "Detection zones divide the detector frame into sections to identify the location of metal objects on the body.",
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
              src="/images/door-frame-metal-detector.webp"
              alt="Door Frame Metal Detector Hero"
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
            Security screening has become a crucial necessity for numerous
            public and private establishments.
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
              Locations such as airports, government facilities, corporate
              offices, educational institutions, stadiums, and event venues must
              guarantee that individuals entering the premises do not possess
              prohibited metallic items.
            </p>
            <p>
              A door frame metal detector (DFMD) offers a dependable and
              effective solution for screening individuals entering secured
              areas. These systems are engineered to detect metallic objects
              hidden on a person&rsquo;s body as they pass through the detector
              frame.
            </p>
            <p>
              In contrast to handheld metal detectors that necessitate manual
              inspection, walk-through metal detectors enable security personnel
              to screen individuals swiftly and efficiently, thereby preventing
              long queues or delays.
            </p>
            <p>
              Contemporary DFMD systems utilize sophisticated multi-zone
              detection technology to pinpoint the precise location of metallic
              objects on a person&rsquo;s body. This enhances inspection
              accuracy and accelerates the security screening process.
            </p>
            <p>
              TimeWatch offers state-of-the-art door frame metal detectors
              tailored for high-traffic environments that demand reliable and
              precise security screening.
            </p>
          </div>
        </section>

        {/* What is */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-[#d63438] pl-4">
            What is a Door Frame Metal Detector?
          </h2>
          <div className="text-[#6d6f72] leading-relaxed space-y-4">
            <p>
              A metal detector in the form of a door frame, commonly referred
              to as a walk-through metal detector, serves as a security
              apparatus designed to identify metallic items that individuals may
              carry while passing through a detection gate.
            </p>
            <p>
              The device comprises a rectangular frame structure outfitted with
              electronic sensors that create a regulated electromagnetic field.
              As an individual traverses the frame, any metallic object on their
              person disrupts the electromagnetic field.
            </p>
            <p>
              The system identifies this disruption and promptly activates an
              alarm or visual signal to notify security staff.
            </p>
            <p className="font-medium text-gray-700">
              Door frame metal detectors are widely used to detect objects such
              as:
            </p>
          </div>
          <ul className="mt-4 space-y-2">
            {detectedObjects.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#6d6f72]">
                <CheckCircle className="w-4 h-4 text-[#d63438] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[#6d6f72] leading-relaxed">
            By identifying these items quickly, DFMD systems help maintain safe
            and secure environments.
          </p>
        </section>

        {/* How It Works */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#d63438] text-white rounded-xl p-2.5">
              <ScanLine className="w-6 h-6" />
            </span>
            <h2 className="text-2xl font-bold text-gray-900">
              How Walk-Through Metal Detectors Work
            </h2>
          </div>
          <div className="text-[#6d6f72] leading-relaxed space-y-3 text-sm">
            <p>
              Walk-through metal detectors function by utilizing electromagnetic
              field technology.
            </p>
            <p>
              The frame of the detector creates a regulated electromagnetic
              field between the gate&rsquo;s side panels. As an individual
              passes through the detector, the system evaluates the disruptions
              caused by metallic items.
            </p>
            <p>
              Upon detecting metal, the system triggers an alarm signal and
              frequently indicates the approximate position of the object
              through LED lights.
            </p>
            <p>
              Sophisticated door frame metal detectors incorporate multiple
              detection zones, segmenting the frame into various sections. This
              enables security personnel to pinpoint the exact location of the
              metallic object on a person&rsquo;s body.
            </p>
            <p>
              Such a feature aids in minimizing inspection duration and enhances
              the efficiency of security screening.
            </p>
          </div>
        </section>

        {/* Multi-Zone Detection */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-[#d63438] pl-4">
            Multi-Zone Detection Technology
          </h2>
          <div className="text-[#6d6f72] leading-relaxed space-y-4">
            <p>
              Modern DFMD systems are available with different numbers of
              detection zones depending on security requirements.
            </p>
            <p className="font-medium text-gray-700">
              Common configurations include:
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {detectionZones.map((zone) => (
              <div
                key={zone}
                className="flex items-center gap-2 border border-gray-100 rounded-xl px-4 py-3 text-sm text-[#6d6f72] hover:border-[#d63438]/30 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#d63438] shrink-0" />
                {zone}
              </div>
            ))}
          </div>
          <div className="mt-5 text-[#6d6f72] leading-relaxed space-y-3">
            <p>
              Enhanced zone configurations enable the system to more accurately
              identify the precise location of metallic objects.
            </p>
            <p>
              For instance, a 33-zone metal detector segments the frame into
              numerous horizontal and vertical sections, facilitating the
              accurate identification of metal objects across various areas of
              the body.
            </p>
            <p>
              Multi-zone detection greatly enhances security effectiveness and
              minimizes the necessity for manual inspections.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Key Features of Door Frame Metal Detectors
          </h2>
          <p className="text-[#6d6f72] mb-8">
            Modern door frame metal detectors include several advanced features
            designed for efficient security screening.
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
            Benefits of Installing Door Frame Metal Detectors
          </h2>
          <p className="text-[#6d6f72] mb-8 pl-1">
            Door frame metal detectors provide several advantages for
            organizations that require secure entry screening.
          </p>
          <ul className="divide-y divide-gray-100 border-t border-gray-100">
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
            Applications of Door Frame Metal Detectors
          </h2>
          <p className="text-[#6d6f72] mb-8">
            Door frame metal detectors are widely used across different
            industries and facilities.
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
            Walk-Through Metal Detector vs Handheld Metal Detector
          </h2>
          <p className="text-[#6d6f72] mb-6">
            Both walk-through and handheld metal detectors are used for
            security screening.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#d63438] text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">
                    Feature
                  </th>
                  <th className="text-left px-5 py-3.5 font-semibold">
                    Walk-Through Metal Detector
                  </th>
                  <th className="text-left px-5 py-3.5 font-semibold">
                    Handheld Metal Detector
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-5 py-3.5 text-[#6d6f72]">
                      {row.walkthrough}
                    </td>
                    <td className="px-5 py-3.5 text-[#6d6f72]">
                      {row.handheld}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[#6d6f72] text-sm">
            Walk-through metal detectors are usually installed at entry gates,
            while handheld detectors are used for additional inspections.
          </p>
        </section>

        {/* Choosing the Right */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Choosing the Right Door Frame Metal Detector
          </h2>
          <p className="text-[#6d6f72] mb-8">
            Selecting the right metal detector depends on several factors.
          </p>
          <div className="space-y-4">
            {choosingFactors.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <CheckCircle className="w-5 h-5 text-[#d63438] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">{f.title}</p>
                  <p className="text-[#6d6f72] text-sm mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[#6d6f72] text-sm">
            Choosing the right DFMD system ensures efficient security screening
            and smooth pedestrian entry management.
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
            Why Choose TimeWatch Door Frame Metal Detectors
          </h2>
          <p className="text-white/85 leading-relaxed mb-3">
            TimeWatch offers dependable security screening solutions tailored
            for contemporary facilities.
          </p>
          <p className="text-white/85 leading-relaxed mb-6">
            Our door frame metal detectors integrate cutting-edge detection
            technology with robust hardware to guarantee consistent performance.
          </p>
          <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">
            Key benefits include:
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
            TimeWatch security solutions assist organizations in fostering safer
            and more secure environments.
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
    </main>
  );
}