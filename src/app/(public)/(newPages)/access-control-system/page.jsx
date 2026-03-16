// pages/access-control-system.jsx  (or app/access-control-system/page.jsx)
import {
  Fingerprint,
  ScanFace,
  CreditCard,
  Lock,
  Layers,
  CheckCircle,
  ShieldCheck,
  DoorOpen,
  LogOut,
  Cpu,
  MonitorCog,
  Shield,
  Activity,
  Users,
  KeyRound,
  AlertTriangle,
  Building2,
  Factory,
  Hospital,
  GraduationCap,
  Landmark,
  Warehouse,
  Server,
  Video,
  Bell,
  ArrowRight,
  ChevronDown,
  Star,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import ProductCatCard from "@/features/singleProductByCat/components/ProductCatCard";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Access Control System for Offices & Buildings in India | TimeWatch",
  description:
    "Advanced access control system for offices, factories and commercial buildings in India. Secure door access using biometric authentication, cards and facial recognition.",

  keywords: [
    "access control system",
    "access control system india",
    "biometric access control system",
    "door access control system",
    "office access control system"
  ],

  alternates: {
    canonical: "https://www.timewatchindia.com/access-control-system",
  },

  openGraph: {
    title: "Access Control System for Offices & Buildings in India | TimeWatch",
    description:
      "Secure offices and buildings with biometric, card and facial recognition access control systems.",
    url: "https://www.timewatchindia.com/access-control-system",
    siteName: "TimeWatch India",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Access Control System for Offices & Buildings in India | TimeWatch",
    description:
      "Advanced access control systems for offices and commercial buildings using biometric and card authentication.",
  },

  robots: {
    index: true,
    follow: true,
  },
};




export default function AccessControlPage() {
    const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a biometric attendance system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A biometric attendance system records employee attendance using biometric identifiers such as fingerprints, facial recognition, palm recognition or iris scanning."
        }
      },
      {
        "@type": "Question",
        name: "Are biometric attendance systems secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Biometric attendance systems are secure because biometric identifiers are unique to each individual."
        }
      },
      {
        "@type": "Question",
        name: "Can biometric attendance systems integrate with payroll software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Attendance data can be integrated with HR and payroll systems to generate reports."
        }
      }
    ]
  };
  const sensitiveAreas = [
    "Office buildings",
    "Data centers",
    "Server rooms",
    "Laboratories",
    "Industrial facilities",
  ];

  const doorLockTypes = [
    "Electromagnetic locks (EM Locks)",
    "Electric bolt locks",
    "Electric strike locks",
  ];

  const accessTypes = [
    {
      icon: <Fingerprint className="w-7 h-7" />,
      title: "Biometric Access Control System",
      body: "You know, when it comes to getting into places securely, biometric systems are pretty neat. They use things like your fingerprints, the way your face looks, your palm, or even your eyes to make sure it's really you. Since everyone's biometrics are one-of-a-kind, these systems are a super secure way to control who gets access.",
      usedIn: [
        "Corporate offices",
        "Government facilities",
        "Research laboratories",
        "Data centers",
        "Industrial plants",
      ],
    },
    {
      icon: <CreditCard className="w-7 h-7" />,
      title: "Card-Based Access Control System",
      body: "Basically, with card-based systems, you use smart or proximity cards to get into protected places. Workers just wave their card at the reader, and if it's approved, the door opens. These are super common in offices and businesses 'cause they're so easy and quick to use.",
      usedIn: null,
    },
    {
      icon: <Lock className="w-7 h-7" />,
      title: "PIN or Password Access Control",
      body: "Some access control systems allow users to enter a password or PIN code to unlock the door. This method is often used as a secondary authentication option along with biometric or card authentication.",
      usedIn: null,
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: "Multi-Authentication Access Control",
      body: "Modern access control systems often support multiple authentication methods. Organizations can choose the authentication method that best suits their security requirements.",
      multiOptions: [
        "Face recognition",
        "Fingerprint authentication",
        "Card authentication",
        "Password authentication",
      ],
    },
  ];

  const components = [
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Access Control Device",
      desc: "The device used to verify user identity through biometric scanning or card authentication.",
    },
    {
      icon: <DoorOpen className="w-6 h-6" />,
      title: "Door Locks",
      desc: "Electronic locks such as electromagnetic locks or electric bolt locks that secure the door.",
    },
    {
      icon: <LogOut className="w-6 h-6" />,
      title: "Exit Button",
      desc: "A push button installed inside the room that allows authorized exit.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Access Controller",
      desc: "The controller manages communication between the access device and the door lock.",
    },
    {
      icon: <MonitorCog className="w-6 h-6" />,
      title: "Access Control Software",
      desc: "Software used to manage users, permissions, and access logs.",
    },
  ];

  const benefits = [
    {
      title: "Improved Security",
      desc: "Access control systems ensure that only authorized individuals can enter restricted areas.",
    },
    {
      title: "Controlled Entry and Exit",
      desc: "Organizations can monitor who enters or exits the building.",
    },
    {
      title: "Visitor Management",
      desc: "Access logs help track visitor entry and exit times.",
    },
    {
      title: "Integration with Attendance Systems",
      desc: "Access control systems can integrate with biometric attendance systems to track both attendance and building access.",
    },
    {
      title: "Reduced Security Risks",
      desc: "Traditional keys can be lost or duplicated. Access control systems eliminate this risk.",
    },
  ];

  const integrations = [
    {
      icon: <Fingerprint className="w-5 h-5" />,
      label: "Biometric attendance systems",
    },
    { icon: <Video className="w-5 h-5" />, label: "CCTV surveillance systems" },
    { icon: <Bell className="w-5 h-5" />, label: "Alarm systems" },
    { icon: <Users className="w-5 h-5" />, label: "Turnstile gates" },
    { icon: <Shield className="w-5 h-5" />, label: "Boom barrier gates" },
  ];

  const applications = [
    { icon: <Building2 className="w-5 h-5" />, label: "Corporate offices" },
    { icon: <Factory className="w-5 h-5" />, label: "Manufacturing factories" },
    { icon: <Hospital className="w-5 h-5" />, label: "Hospitals" },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      label: "Educational institutions",
    },
    { icon: <Landmark className="w-5 h-5" />, label: "Government buildings" },
    { icon: <Warehouse className="w-5 h-5" />, label: "Warehouses" },
    { icon: <Server className="w-5 h-5" />, label: "Data centers" },
  ];

  const timewatchAdvantages = [
    "Advanced biometric authentication technology",
    "Integration with attendance systems",
    "Scalable solutions for businesses of all sizes",
    "Reliable hardware designed for long-term use",
    "Installation and technical support across India",
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
      q: "What is an access control system?",
      a: "An access control system is a security system that regulates entry to buildings or restricted areas by verifying user identity.",
    },
    {
      q: "How does an access control system work?",
      a: "The system verifies identity using biometric authentication, cards, or passwords before unlocking the door.",
    },
    {
      q: "Can access control systems integrate with biometric attendance?",
      a: "Yes. Many access control systems integrate with biometric attendance machines.",
    },
    {
      q: "Where are access control systems used?",
      a: "Access control systems are used in offices, factories, hospitals, government buildings, and other secure facilities.",
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
              src="/images/solutions/sub/access-control.jpg"
              alt="Consulting Hero"
              fill
              sizes="100"
              className="object-cover w-full h-full"
            />
            {/* Gradient overlay on top of image */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none z-10" />
          </div>
        </div>

        <div className="relative z-20 container flex justify-center h-full flex-col xl:pr-[400px] text-white banner">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Access Control System for Secure Entry Management
          </h1>
          <p className="text-xl text-white mb-8 hidden md:block">
            Keeping businesses and organizations safe is super important these
            days. Places like offices, factories, warehouses, and shops really
            need to make sure only the right people get into certain areas.
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
              A good way to handle who comes and goes in a place is by using an
              access control system. Instead of fumbling with old-fashioned
              keys, these newer systems check who you are using things like your
              fingerprints, face scan, special cards, or a secret code before
              letting you in.
            </p>
            <p>
              When companies set up these systems, they can keep tabs on where
              employees are going, stop people who shouldn't be there from
              getting in, and just generally make things more secure. TimeWatch
              actually has some top-notch access control systems that are
              perfect for offices, factories, schools, and big companies all
              over India
            </p>
          </div>
        </section>
        {/* What is */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-[#d63438] pl-4">
            What is an Access Control System?
          </h2>
          <div className="text-[#6d6f72] leading-relaxed space-y-4">
            <p>
              Basically, an access control system is a way to keep places secure
              by controlling who can get in and out of buildings, specific
              rooms, or areas that aren&rsquo;t open to everyone.
            </p>
            <p>
              It checks who you are using things like your fingerprints, a
              special card, or a password. If it recognizes you, it&rsquo;ll
              just unlock the door for you.
            </p>
            <p className="font-medium text-gray-700">
              Access control systems are widely used to protect sensitive areas
              such as:
            </p>
          </div>
          <ul className="mt-4 space-y-2">
            {sensitiveAreas.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#6d6f72]">
                <CheckCircle className="w-4 h-4 text-[#d63438] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[#6d6f72] leading-relaxed">
            These systems are great for keeping tabs on who&rsquo;s coming and
            going from certain places, all while making sure everything stays
            secure.
          </p>
        </section>

        {/* Door Access */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#d63438] text-white rounded-xl p-2.5">
              <DoorOpen className="w-6 h-6" />
            </span>
            <h2 className="text-2xl font-bold text-gray-900">
              Door Access Control System
            </h2>
          </div>
          <div className="text-[#6d6f72] leading-relaxed space-y-3">
            <p>
              You know, those door access systems let companies lock down their
              entrances by checking who someone is before letting them in.
            </p>
            <p>
              Instead of fiddling with old-fashioned keys, people prove who they
              are by using their fingerprints, swiping a card, or typing in a
              code.
            </p>
            <p>
              You&rsquo;ll see these systems a lot in places like offices,
              businesses, and any spot that needs to be extra secure to keep
              unwanted people out.
            </p>
            <p className="font-medium text-gray-700 pt-1">
              These systems can be integrated with different types of electronic
              door locks such as:
            </p>
          </div>
          <ul className="mt-3 space-y-2">
            {doorLockTypes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#6d6f72]">
                <CheckCircle className="w-4 h-4 text-[#d63438] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[#6d6f72] text-sm">
            Once the system verifies the user&rsquo;s identity, it sends a
            signal to unlock the door automatically.
          </p>
        </section>

        {/* Types */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Types of Access Control Systems
          </h2>
          <p className="text-[#6d6f72] mb-8">
            Modern access control systems support multiple authentication
            technologies.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {accessTypes.map((type) => (
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
                {type.usedIn && (
                  <ul className="mt-3 space-y-1.5">
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
                )}
                {type.multiOptions && (
                  <ul className="mt-3 space-y-1.5">
                    {type.multiOptions.map((o) => (
                      <li
                        key={o}
                        className="flex items-center gap-2 text-[#6d6f72] text-sm"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#d63438] shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Key Components */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Key Components of an Access Control System
          </h2>
          <p className="text-[#6d6f72] mb-8">
            An access control system consists of several hardware and software
            components that work together.
          </p>
          <div className="space-y-4">
            {components.map((c) => (
              <div key={c.title} className="flex gap-4 items-start">
                <span className="mt-0.5 bg-[#d63438]/10 text-[#d63438] rounded-lg p-2 shrink-0">
                  {c.icon}
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{c.title}</p>
                  <p className="text-[#6d6f72] text-sm mt-0.5">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Benefits of Using Access Control Systems
          </h2>
          <p className="text-[#6d6f72] mb-8 pl-1">
            Access control systems offer several important benefits for
            organizations.
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

        <section className="container mx-auto mt-12 mb-20 px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-l-4 border-[#d63438] pl-4">
            Our Products
          </h2>
          <ProductCatCard categorySlug="time-attendance-and-access-control" />
        </section>

        {/* Integration */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 border-l-4 border-[#d63438] pl-4">
            Integration with Other Security Systems
          </h2>
          <div className="text-[#6d6f72] leading-relaxed space-y-3 mb-5">
            <p>
              Nowadays, modern security systems that manage who can get in
              places can work together with other security tools.
            </p>
            <p>This lets businesses put together a whole security setup.</p>
            <p className="font-medium text-gray-700">
              Common integrations include:
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
            {integrations.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-3 py-2.5 text-sm text-[#6d6f72]"
              >
                <span className="text-[#d63438]">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
          <p className="text-[#6d6f72] text-sm">
            This integration allows organizations to monitor access events and
            maintain detailed security logs.
          </p>
        </section>

        {/* Applications */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Applications of Access Control Systems
          </h2>
          <p className="text-[#6d6f72] mb-4">
            Access control systems are widely used across many industries.
          </p>
          <p className="text-[#6d6f72] text-sm font-medium mb-4">
            Common applications include:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {applications.map((app) => (
              <div
                key={app.label}
                className="flex items-center gap-2 border border-gray-100 rounded-xl px-3 py-3 text-sm text-[#6d6f72] hover:border-[#d63438]/30 transition-colors"
              >
                <span className="text-[#d63438] shrink-0">{app.icon}</span>
                {app.label}
              </div>
            ))}
          </div>
          <p className="text-[#6d6f72] text-sm mt-5">
            These organizations require secure access control to protect people,
            equipment, and sensitive information.
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
            Why Choose TimeWatch Access Control Systems
          </h2>
          <p className="text-white/85 leading-relaxed mb-6">
            TimeWatch offers dependable ways to control who gets in and out,
            perfect for today&rsquo;s offices. Our setups use top-notch ways to
            check identity along with trusted hardware built for long-term
            reliability.
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
            TimeWatch solutions help organizations create secure and efficient
            workplaces.
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
