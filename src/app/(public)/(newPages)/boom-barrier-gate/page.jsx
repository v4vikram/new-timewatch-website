// pages/boom-barrier-gate.jsx  (or app/boom-barrier-gate/page.jsx)
import {
  CheckCircle,
  Zap,
  ShieldCheck,
  CloudRain,
  Radio,
  Layers,
  CreditCard,
  RemoteControl,
  Car,
  ParkingSquare,
  Building2,
  Home,
  ShoppingBag,
  Factory,
  PlaneTakeoff,
  Warehouse,
  ArrowRight,
  ChevronDown,
  Star,
  ExternalLink,
  Gauge,
  Wrench,
  BarChart2,
  Users,
  Lock,
} from "lucide-react";
import Image from "next/image";
import ProductCatCard from "@/features/singleProductByCat/components/ProductCatCard";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Automatic Boom Barrier Gate for Parking & Vehicle Access Control | TimeWatch India",
  description:
    "Automatic boom barrier gate for parking management and vehicle access control. Reliable boom barrier systems for offices, residential complexes and commercial facilities in India.",

  keywords: [
    "boom barrier gate",
    "automatic boom barrier",
    "boom barrier gate india",
    "parking boom barrier system",
    "vehicle access control system",
    "boom barrier gate price"
  ],

  alternates: {
    canonical: "https://www.timewatchindia.com/boom-barrier-gate",
  },

  openGraph: {
    title: "Automatic Boom Barrier Gate for Parking & Vehicle Access Control | TimeWatch India",
    description:
      "Reliable boom barrier systems for parking management and vehicle access control in offices, residential complexes and commercial facilities.",
    url: "https://www.timewatchindia.com/boom-barrier-gate",
    siteName: "TimeWatch India",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Automatic Boom Barrier Gate for Parking & Vehicle Access Control | TimeWatch India",
    description:
      "Automatic boom barrier gates for parking management and secure vehicle access control.",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function BoomBarrierGatePage() {
   const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a boom barrier gate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A boom barrier gate is an automated barrier used to control vehicle entry and exit at parking areas or secure facilities."
        }
      },
      {
        "@type": "Question",
        name: "Where are boom barrier gates used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Boom barrier gates are commonly installed in offices, residential complexes, malls and industrial facilities."
        }
      },
      {
        "@type": "Question",
        name: "Can boom barrier gates integrate with RFID systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many boom barrier systems integrate with RFID vehicle identification systems."
        }
      }
    ]
  };
  const usedInLocations = [
    "Corporate office complexes",
    "Residential gated communities",
    "Shopping malls",
    "Industrial facilities",
    "Toll plazas",
    "Parking areas",
  ];

  const authMethods = [
    "RFID vehicle tags",
    "Access control systems",
    "Remote control operation",
    "Card authentication",
    "Parking management systems",
  ];

  const barrierTypes = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Automatic Boom Barrier",
      body: "As a vehicle nears the gate, the system checks for authorization using one of the available methods. Upon approval of the vehicle, the boom arm automatically rises to permit entry. After the vehicle has passed through the gate, the barrier arm descends once more to prevent additional access.",
    },
    {
      icon: <Radio className="w-7 h-7" />,
      title: "RFID Boom Barrier System",
      body: "RFID-based boom barrier systems utilize RFID vehicle tags for the automatic identification of vehicles. When a vehicle equipped with a registered RFID tag nears the gate, the system detects the tag and automatically raises the barrier. These systems are commonly implemented in residential communities, corporate campuses, and parking facilities.",
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: "Remote Controlled Boom Barrier",
      body: "In certain areas, boom barriers are managed through remote control devices utilized by security staff. These systems prove beneficial in situations where manual oversight of vehicle access is necessary.",
    },
  ];

  const keyFeatures = [
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "High-Speed Operation",
      desc: "Boom barrier systems open and close quickly to allow smooth traffic flow.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Durable Boom Arm",
      desc: "Barrier arms are built using strong materials such as aluminum or steel for long-term performance.",
    },
    {
      icon: <CloudRain className="w-6 h-6" />,
      title: "Weather-Resistant Design",
      desc: "Boom barriers are designed to operate in outdoor environments and withstand different weather conditions.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Safety Sensors",
      desc: "Sensors prevent the barrier arm from closing if a vehicle or object is detected underneath.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Integration with Security Systems",
      desc: "Boom barriers can integrate with RFID parking systems, vehicle access control systems, parking management software, and access control systems.",
    },
  ];

  const vehicleAccessUsedIn = [
    "Corporate campuses",
    "Residential communities",
    "Industrial plants",
    "Airports",
    "Warehouses",
  ];

  const parkingBenefits = [
    "Monitor parking usage",
    "Control parking access",
    "Reduce congestion",
    "Improve traffic management",
  ];

  const benefits = [
    {
      title: "Improved Vehicle Security",
      desc: "Boom barriers ensure that only authorized vehicles can enter the premises.",
    },
    {
      title: "Controlled Traffic Flow",
      desc: "These systems help regulate vehicle movement and reduce congestion.",
    },
    {
      title: "Automated Parking Management",
      desc: "Integration with parking systems allows automated vehicle entry and exit.",
    },
    {
      title: "Reduced Manual Monitoring",
      desc: "Automation reduces the need for security staff to manually manage vehicle entry.",
    },
    {
      title: "Enhanced Facility Security",
      desc: "Boom barrier systems add an additional layer of security for offices, residential complexes, and industrial facilities.",
    },
  ];

  const comparisonRows = [
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
  ];

  const choosingFactors = [
    {
      title: "Boom Arm Length",
      desc: "The boom arm length should match the width of the entry lane.",
    },
    {
      title: "Traffic Volume",
      desc: "High-traffic areas require faster barrier operation.",
    },
    {
      title: "Automation Level",
      desc: "Advanced systems may include RFID or license plate recognition integration.",
    },
    {
      title: "Durability",
      desc: "Boom barrier systems should be built with strong materials to ensure long-term performance.",
    },
  ];

  const timewatchAdvantages = [
    "Sturdy boom arm design",
    "Quick and seamless barrier functionality",
    "Compatibility with parking management systems",
    "Consistent performance in high-traffic settings",
    "Installation and technical assistance available throughout India",
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
      q: "What is a boom barrier gate?",
      a: "A boom barrier gate is an automated barrier used to control vehicle entry and exit in parking areas or secure facilities.",
    },
    {
      q: "Where are boom barrier gates used?",
      a: "Boom barrier gates are commonly installed in offices, residential complexes, shopping malls, and industrial facilities.",
    },
    {
      q: "Can boom barrier gates integrate with RFID systems?",
      a: "Indeed, numerous boom barrier systems are designed to work in conjunction with RFID vehicle identification systems to facilitate automated access control.",
    },
    {
      q: "What is the price of a boom barrier gate in India?",
      a: "The cost of boom barrier gates is influenced by various features, including the length of the boom arm, the speed of the motor, the type of automation technology employed, and the capabilities for integration.",
    },
  ];

  return (
    <main className="bg-white min-h-screen font-sans">
      <Script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
      {/* ── HERO ── */}
      <section className="bg-gray-50 relative overflow-hidden h-[400px] md:h-[550px]">
        <div className="absolute inset-0 left-0 top-0 w-full h-full">
          <div className="relative z-10 w-full h-[400px] md:h-[550px]">
            <Image
              src="/images/boom-barrier-gate.jpg"
              alt="Boom Barrier Gate Hero"
              fill
              sizes="100"
              className="object-cover w-full h-full object-[25%_75%]"
            />
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
            commercial buildings.
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
              In the absence of effective vehicle access control, regulating
              traffic flow and ensuring security becomes challenging.
            </p>
            <p>
              An automatic boom barrier gate serves as a dependable solution
              for managing vehicle movement at entry and exit points. These
              automated barriers permit entry for authorized vehicles while
              blocking unauthorized access. Boom barrier systems are frequently
              installed in parking lots, corporate campuses, toll booths, gated
              communities, and industrial sites.
            </p>
            <p>
              When combined with technologies such as RFID systems, access
              control devices, or parking management software, boom barriers can
              establish a fully automated vehicle access control system.
            </p>
            <p>
              TimeWatch provides reliable and high-performance boom barrier
              gates that are designed to effectively manage vehicle traffic
              while enhancing security.
            </p>
          </div>
        </section>

        {/* What is */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-[#d63438] pl-4">
            What is a Boom Barrier Gate?
          </h2>
          <div className="text-[#6d6f72] leading-relaxed space-y-4">
            <p>
              A boom barrier gate serves as an automated physical obstruction
              designed to regulate vehicle ingress and egress at designated
              sites. The system comprises a horizontal arm known as a boom arm,
              which is connected to a motorized mechanism.
            </p>
            <p>
              Upon receiving authorization for access, the boom arm elevates
              automatically, permitting vehicles to proceed.
            </p>
            <p className="font-medium text-gray-700">
              Boom barrier gates are widely used in locations such as:
            </p>
          </div>
          <ul className="mt-4 space-y-2">
            {usedInLocations.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#6d6f72]">
                <CheckCircle className="w-4 h-4 text-[#d63438] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[#6d6f72] leading-relaxed">
            These systems help organizations regulate traffic flow and maintain
            better security at entry points.
          </p>
        </section>

        {/* How It Works */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#d63438] text-white rounded-xl p-2.5">
              <Zap className="w-6 h-6" />
            </span>
            <h2 className="text-2xl font-bold text-gray-900">
              How Automatic Boom Barrier Gates Work
            </h2>
          </div>
          <div className="text-[#6d6f72] leading-relaxed space-y-3">
            <p>
              Automatic boom barrier systems operate using a motorized mechanism
              that raises or lowers the barrier arm.
            </p>
            <p className="font-medium text-gray-700">
              The system can be triggered using several authentication methods
              including:
            </p>
          </div>
          <ul className="mt-3 space-y-2">
            {authMethods.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#6d6f72]">
                <CheckCircle className="w-4 h-4 text-[#d63438] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 text-[#6d6f72] leading-relaxed space-y-3 text-sm">
            <p>
              As a vehicle nears the gate, the system checks for authorization
              using one of the available methods. Upon approval of the vehicle,
              the boom arm automatically rises to permit entry.
            </p>
            <p>
              After the vehicle has passed through the gate, the barrier arm
              descends once more to prevent additional access.
            </p>
            <p>
              This process allows organizations to manage vehicle entry
              efficiently while maintaining security.
            </p>
          </div>
        </section>

        {/* Types */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Types of Boom Barrier Gates
          </h2>
          <p className="text-[#6d6f72] mb-8">
            Different types of boom barrier gates are available depending on
            the traffic environment and installation requirements.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {barrierTypes.map((type) => (
              <div
                key={type.title}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#d63438]/10 text-[#d63438] rounded-xl p-2.5">
                    {type.icon}
                  </span>
                  <h3 className="text-base font-semibold text-gray-900">
                    {type.title}
                  </h3>
                </div>
                <p className="text-[#6d6f72] text-sm leading-relaxed">
                  {type.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Key Features of Boom Barrier Gates
          </h2>
          <p className="text-[#6d6f72] mb-8">
            Modern boom barrier gates include advanced features designed for
            durability and reliable operation.
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

        {/* Vehicle Access Control */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#d63438] text-white rounded-xl p-2.5">
              <ShieldCheck className="w-6 h-6" />
            </span>
            <h2 className="text-2xl font-bold text-gray-900">
              Boom Barrier System for Vehicle Access Control
            </h2>
          </div>
          <div className="text-[#6d6f72] leading-relaxed space-y-3 mb-5">
            <p>
              Boom barrier gates are crucial for managing vehicle access at both
              entry and exit points.
            </p>
            <p>
              Contemporary boom barrier systems can be combined with
              technologies like RFID readers, access control systems, and
              parking management software.
            </p>
            <p>
              As a vehicle nears the gate, the system checks for authorization
              using one of these technologies. If the vehicle is granted access,
              the boom arm raises automatically.
            </p>
            <p>
              This automated procedure minimizes the need for manual
              intervention and guarantees effective vehicle access control.
            </p>
            <p className="font-medium text-gray-700">
              Boom barrier systems are widely used in:
            </p>
          </div>
          <ul className="space-y-2">
            {vehicleAccessUsedIn.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#6d6f72]">
                <CheckCircle className="w-4 h-4 text-[#d63438] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Parking Management */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-[#d63438] pl-4">
            Boom Barrier Gate for Parking Management
          </h2>
          <div className="text-[#6d6f72] leading-relaxed space-y-4">
            <p>
              Boom barrier gates are frequently utilized within parking
              management systems to control the entry and exit of vehicles.
            </p>
            <p>
              When combined with parking management software, boom barrier gates
              have the capability to automatically log the times of vehicle
              entry and exit.
            </p>
            <p className="font-medium text-gray-700">
              This allows organizations to:
            </p>
          </div>
          <ul className="mt-3 space-y-2">
            {parkingBenefits.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#6d6f72]">
                <CheckCircle className="w-4 h-4 text-[#d63438] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[#6d6f72] leading-relaxed">
            In large facilities such as shopping malls, office complexes, and
            airports, boom barrier systems are essential for managing high
            vehicle traffic.
          </p>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Benefits of Installing Boom Barrier Gates
          </h2>
          <p className="text-[#6d6f72] mb-8 pl-1">
            Boom barrier systems provide several advantages for organizations
            and property managers.
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

        {/* Products */}
        <section className="container mx-auto mt-12 mb-20 px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-l-4 border-[#d63438] pl-4">
            Our Products
          </h2>
          <ProductCatCard categorySlug="entrance-control" />
        </section>

        {/* Comparison Table */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-[#d63438] pl-4">
            Boom Barrier Gate vs Manual Gate
          </h2>
          <p className="text-[#6d6f72] mb-6">
            Organizations frequently evaluate automatic boom barrier gates
            against conventional manual gates when selecting a vehicle entry
            solution.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#d63438] text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Feature</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Boom Barrier Gate</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Manual Gate</th>
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
                    <td className="px-5 py-3.5 text-[#6d6f72]">{row.boom}</td>
                    <td className="px-5 py-3.5 text-[#6d6f72]">{row.manual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[#6d6f72] text-sm">
            Automatic boom barrier systems are preferred because they improve
            traffic management and enhance security.
          </p>
        </section>

        {/* Choosing the Right */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Choosing the Right Boom Barrier Gate
          </h2>
          <p className="text-[#6d6f72] mb-8">
            Selecting the right boom barrier system depends on several factors.
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
            Reasons to Select TimeWatch Boom Barrier Gates
          </h2>
          <p className="text-white/85 leading-relaxed mb-6">
            TimeWatch offers dependable boom barrier solutions tailored to meet
            contemporary vehicle access control needs. Our systems are
            constructed with premium components and cutting-edge automation
            technology.
          </p>
          <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">
            The primary benefits include:
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
            TimeWatch boom barrier systems enable organizations to effectively
            manage vehicle access while enhancing security.
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