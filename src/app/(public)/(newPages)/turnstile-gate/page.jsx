// pages/turnstile-gate.jsx  (or app/turnstile-gate/page.jsx)
import {
  CheckCircle,
  ShieldCheck,
  Zap,
  Layers,
  Fingerprint,
  CreditCard,
  ScanFace,
  QrCode,
  ArrowRight,
  ChevronDown,
  Star,
  ExternalLink,
  Building2,
  Factory,
  TrainFront,
  PlaneTakeoff,
  GraduationCap,
  Users,
  BarChart2,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";
import ProductCatCard from "@/features/singleProductByCat/components/ProductCatCard";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Turnstile Gate Access Control System for Secure Entry | TimeWatch India",
  description:
    "Advanced turnstile gate access control system including tripod turnstile, flap barrier gate and swing barrier gate for offices, metro stations and secure facilities.",

  keywords: [
    "turnstile gate",
    "tripod turnstile gate",
    "flap barrier gate",
    "swing barrier gate",
    "turnstile access control system",
    "pedestrian access control gate"
  ],

  alternates: {
    canonical: "https://www.timewatchindia.com/turnstile-gate",
  },

  openGraph: {
    title: "Turnstile Gate Access Control System for Secure Entry | TimeWatch India",
    description:
      "Secure pedestrian entry with tripod turnstile, flap barrier gate and swing barrier gate systems for offices, metro stations and secure facilities.",
    url: "https://www.timewatchindia.com/turnstile-gate",
    siteName: "TimeWatch India",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Turnstile Gate Access Control System for Secure Entry | TimeWatch India",
    description:
      "Advanced turnstile gate systems for secure pedestrian access control in offices and commercial facilities.",
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
        name: "What is a turnstile gate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A turnstile gate is a pedestrian access control system used to regulate entry and exit in secure facilities."
        }
      },
      {
        "@type": "Question",
        name: "Where are turnstile gates used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Turnstile gates are commonly used in offices, metro stations, stadiums, factories and other secure locations."
        }
      },
      {
        "@type": "Question",
        name: "Can turnstile gates integrate with biometric systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Turnstile gates can integrate with biometric attendance systems, RFID cards and facial recognition for secure access control."
        }
      }
    ]
  };

export default function TurnstileGatePage() {
  const usedInLocations = [
    "Corporate office buildings",
    "Industrial facilities",
    "Metro and railway stations",
    "Airports",
    "Stadiums and event venues",
    "Educational institutions",
  ];

  const authMethods = [
    "RFID card scanning",
    "Fingerprint authentication",
    "Facial recognition verification",
    "QR code scanning",
    "Access control card systems",
  ];

  const turnstileTypes = [
    {
      icon: <Layers className="w-7 h-7" />,
      title: "Tripod Turnstile Gate",
      body: "A tripod turnstile gate is one of the most commonly used pedestrian access control systems. It consists of three rotating arms arranged in a tripod structure that allows only one person to pass at a time. When a user authenticates their identity using an access control device, the gate unlocks and the arms rotate, allowing entry.",
      highlights: [
        "Cost-effective",
        "Durable",
        "Easy to maintain",
        "Suitable for high traffic environments",
      ],
      usedIn: [
        "Corporate offices",
        "Industrial factories",
        "Metro stations",
        "Stadium entrances",
        "Government facilities",
      ],
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Flap Barrier Gate",
      body: "A flap barrier gate is a modern turnstile system that uses retractable panels or flaps to control pedestrian access. When authentication is successful, the flaps open automatically to allow the person to pass through. After the person passes, the flaps close again to secure the entry point. Flap barrier gates are often used in locations where both security and modern aesthetics are important.",
      usedIn: [
        "Corporate headquarters",
        "Airports",
        "Metro stations",
        "Commercial office complexes",
        "Government buildings",
      ],
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Swing Barrier Gate",
      body: "A swing barrier gate uses swing doors that open automatically when a user is authenticated. These gates are commonly used in locations that require wider entry points such as wheelchair access areas or facilities where people may carry luggage.",
      usedIn: [
        "Airports",
        "Hospitals",
        "Corporate offices",
        "Shopping malls",
        "Public facilities",
      ],
    },
  ];

  const keyFeatures = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Secure Pedestrian Access",
      desc: "Turnstile gates allow only one person to pass at a time, preventing unauthorized entry.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Integration with Access Control Systems",
      desc: "Turnstile systems can integrate with biometric attendance devices, RFID card systems, and facial recognition systems.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Durable Construction",
      desc: "Most turnstile gates are built using stainless steel or heavy-duty materials to ensure long-term durability.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smooth and Fast Operation",
      desc: "Modern turnstile gates are designed for fast operation to prevent congestion in high-traffic areas.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Safety Sensors",
      desc: "Safety sensors detect obstacles and prevent the gate from closing if a person or object is detected.",
    },
  ];

  const benefits = [
    {
      title: "Improved Security",
      desc: "Turnstile gates ensure that only authorized individuals can enter restricted areas.",
    },
    {
      title: "Controlled Pedestrian Flow",
      desc: "These systems help regulate the movement of people entering or exiting a facility.",
    },
    {
      title: "Prevention of Unauthorized Entry",
      desc: "Turnstile gates prevent tailgating and unauthorized access attempts.",
    },
    {
      title: "Integration with Attendance Systems",
      desc: "Turnstile gates can integrate with biometric attendance systems to automatically record employee entry and exit.",
    },
    {
      title: "Professional Facility Management",
      desc: "Turnstile gates create a well-organized and professional entry environment for employees and visitors.",
    },
  ];

  const applications = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Corporate Offices",
      desc: "Turnstile gates regulate employee entry and integrate with biometric attendance systems.",
    },
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Industrial Facilities",
      desc: "Factories use turnstile systems to manage worker entry and improve workplace security.",
    },
    {
      icon: <TrainFront className="w-5 h-5" />,
      title: "Public Transport Stations",
      desc: "Metro and railway stations use turnstile gates to manage passenger entry efficiently.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Stadiums and Event Venues",
      desc: "Turnstile gates help control large crowds entering sports arenas and event venues.",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Educational Institutions",
      desc: "Universities and schools use turnstile gates to control student and staff access.",
    },
  ];

  const timewatchAdvantages = [
    "Integration with biometric attendance systems",
    "Durable stainless steel construction",
    "Smooth and reliable gate operation",
    "Scalable solutions for different facilities",
    "Installation and technical support across India",
  ];

  const relatedLinks = [
    {
      label: "Access Control System",
      href: "/access-control-system",
    },
    {
      label: "Biometric Attendance System",
      href: "/biometric-attendance-system",
    },
    {
      label: "Boom Barrier Gate",
      href: "/boom-barrier-gate",
    },
    // {
    //   label: "Parking Management System",
    //   href: "/parking-management-system",
    // },
  ];

  const faqs = [
    {
      q: "What is a turnstile gate?",
      a: "A turnstile gate is a physical barrier used to control pedestrian entry and exit at secure locations.",
    },
    {
      q: "Where are turnstile gates used?",
      a: "Turnstile gates are commonly used in offices, metro stations, stadiums, airports, and industrial facilities.",
    },
    {
      q: "Can turnstile gates integrate with biometric systems?",
      a: "Yes. Turnstile gates can integrate with biometric attendance systems and access control devices.",
    },
    {
      q: "What are the types of turnstile gates?",
      a: "Common types include tripod turnstile gates, flap barrier gates, and swing barrier gates.",
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
              src="/images/turnstile-gate.webp"
              alt="Turnstile Gate Hero"
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
            Effectively managing pedestrian access in offices, industrial sites,
            metro stations, stadiums, and public buildings is a crucial aspect
            of contemporary security management.
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
              Locations with significant foot traffic must guarantee that only
              authorized personnel can access restricted areas while ensuring
              the seamless movement of individuals.
            </p>
            <p>
              A turnstile gate serves as a physical barrier for access control,
              specifically designed to manage pedestrian entry and exit at
              designated locations. These gates permit only one individual to
              pass at a time following successful authentication, assisting
              organizations in maintaining secure and orderly entry points.
            </p>
            <p>
              Turnstile gate systems are frequently integrated with technologies
              such as biometric attendance systems, RFID card readers, QR code
              scanners, and facial recognition technologies. This integration
              allows organizations to establish a fully automated system for
              pedestrian access control.
            </p>
            <p>
              Due to their capacity to efficiently manage entry, turnstile gates
              are extensively utilized in corporate offices, industrial
              facilities, metro stations, airports, stadiums, universities, and
              government buildings.
            </p>
            <p>
              TimeWatch offers sophisticated turnstile gate access control
              systems that are engineered to provide dependable performance,
              enhanced security, and smooth pedestrian movement.
            </p>
          </div>
        </section>

        {/* What is */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-[#d63438] pl-4">
            What is a Turnstile Gate?
          </h2>
          <div className="text-[#6d6f72] leading-relaxed space-y-4">
            <p>
              A turnstile gate is a mechanical or electronic access control
              barrier that allows controlled pedestrian movement through a
              secured entry point.
            </p>
            <p>
              Unlike standard doors or gates, turnstile gates are designed to
              permit only one person to pass through at a time. This helps
              prevent unauthorized access and tailgating, which occurs when
              multiple individuals attempt to enter using a single
              authorization.
            </p>
            <p>
              Turnstile gates are typically installed at building entrances
              where controlled access is required. These systems work together
              with access control technologies such as biometric devices or RFID
              cards to verify user identity before granting entry.
            </p>
            <p className="font-medium text-gray-700">
              Turnstile gate systems are widely used in:
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
            By regulating pedestrian entry, turnstile gates help organizations
            improve security while maintaining efficient movement of people.
          </p>
        </section>

        {/* How It Works */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#d63438] text-white rounded-xl p-2.5">
              <ShieldCheck className="w-6 h-6" />
            </span>
            <h2 className="text-2xl font-bold text-gray-900">
              How Turnstile Gate Systems Work
            </h2>
          </div>
          <div className="text-[#6d6f72] leading-relaxed space-y-3">
            <p>
              Turnstile gate systems operate in combination with access control
              systems to verify user identity before allowing entry.
            </p>
            <p>
              When a person approaches the turnstile gate, they must
              authenticate themselves using a recognized identification method.
              These methods may include:
            </p>
          </div>
          <ul className="mt-3 mb-4 space-y-2">
            {authMethods.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#6d6f72]">
                <CheckCircle className="w-4 h-4 text-[#d63438] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="text-[#6d6f72] leading-relaxed space-y-3 text-sm">
            <p>
              Once the system verifies the user&rsquo;s identity, it sends a
              signal to the turnstile mechanism to unlock or rotate. The user
              can then pass through the gate. After the person passes through,
              the system automatically resets and blocks further access until
              the next authentication.
            </p>
            <p>
              Modern turnstile gates also include sensors that detect
              unauthorized entry attempts or tailgating. These sensors enhance
              security by ensuring that only one person passes per
              authentication.
            </p>
          </div>
        </section>

        {/* Types */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Types of Turnstile Gates
          </h2>
          <p className="text-[#6d6f72] mb-8">
            Different types of turnstile gates are available depending on the
            security level, design preference, and pedestrian traffic volume.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {turnstileTypes.map((type) => (
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
                <p className="text-[#6d6f72] text-sm leading-relaxed mb-3">
                  {type.body}
                </p>
                {type.highlights && (
                  <>
                    <p className="text-xs font-semibold text-gray-700 mb-2">
                      These gates are widely used because they are:
                    </p>
                    <ul className="space-y-1.5 mb-3">
                      {type.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-[#6d6f72] text-sm"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#d63438] shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {type.usedIn && (
                  <>
                    <p className="text-xs font-semibold text-gray-700 mb-2">
                      Commonly installed in:
                    </p>
                    <ul className="space-y-1.5">
                      {type.usedIn.map((u) => (
                        <li
                          key={u}
                          className="flex items-center gap-2 text-[#6d6f72] text-sm"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#d63438] shrink-0" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Key Features of Turnstile Gate Systems
          </h2>
          <p className="text-[#6d6f72] mb-8">
            Modern turnstile gate systems include several advanced features
            designed to enhance security and efficiency.
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
            Benefits of Installing Turnstile Gates
          </h2>
          <p className="text-[#6d6f72] mb-8 pl-1">
            Turnstile gate systems offer several advantages for organizations
            that require secure pedestrian entry.
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
            Applications of Turnstile Gates
          </h2>
          <p className="text-[#6d6f72] mb-8">
            Turnstile gates are widely used in different industries and
            environments where controlled pedestrian access is required.
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
          <ProductCatCard categorySlug="entrance-control" />
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
            Why Choose TimeWatch Turnstile Gate Systems
          </h2>
          <p className="text-white/85 leading-relaxed mb-3">
            TimeWatch provides reliable turnstile gate solutions designed for
            secure and efficient pedestrian access control.
          </p>
          <p className="text-white/85 leading-relaxed mb-6">
            Our turnstile systems combine advanced authentication technology
            with durable hardware to deliver long-term performance.
          </p>
          <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">
            Key advantages include:
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
            TimeWatch turnstile gate systems help organizations create secure
            entry points while maintaining smooth pedestrian movement.
          </p>
        </section>

        {/* Related Solutions */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-5 border-l-4 border-[#d63438] pl-4">
            Explore Related Solutions
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
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