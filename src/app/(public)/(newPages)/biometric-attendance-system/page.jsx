// pages/biometric-attendance-system.jsx  (or app/biometric-attendance-system/page.jsx)
import {
  Fingerprint,
  ScanFace,
  Hand,
  CreditCard,
  Lock,
  Eye,
  Layers,
  CheckCircle,
  ShieldCheck,
  Zap,
  Users,
  BarChart2,
  Cloud,
  Building2,
  Factory,
  GraduationCap,
  Hospital,
  Landmark,
  ShoppingBag,
  Warehouse,
  ChevronDown,
  Star,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import ProductCatCard from "@/features/singleProductByCat/components/ProductCatCard";
import Script from "next/script";

export const metadata = {
  title: "Biometric Attendance System for Offices & Factories in India | TimeWatch",
  description:
    "Advanced biometric attendance system for offices and factories in India. Track employee attendance using fingerprint, face recognition, palm, card and iris authentication.",

  keywords: [
    "biometric attendance system",
    "biometric attendance system india",
    "biometric attendance machine",
    "employee biometric attendance system",
    "multi biometric attendance system"
  ],

  alternates: {
    canonical: "https://www.timewatchindia.com/biometric-attendance-system",
  },

  openGraph: {
    title: "Biometric Attendance System for Offices & Factories in India | TimeWatch",
    description:
      "Track employee attendance with fingerprint, face recognition, palm, card and iris authentication using advanced biometric attendance systems.",
    url: "https://www.timewatchindia.com/biometric-attendance-system",
    siteName: "TimeWatch India",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Biometric Attendance System for Offices & Factories in India | TimeWatch",
    description:
      "Advanced biometric attendance system for offices and factories with fingerprint and face recognition.",
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


export default function BiometricAttendancePage() {
  const biometricTypes = [
    {
      icon: <Fingerprint className="w-7 h-7" />,
      title: "Fingerprint Attendance System",
      body: "Fingerprint-based timekeeping devices represent one of the most common types of biometric identification technologies. These systems work by capturing an employee's fingerprint and cross-referencing it with pre-recorded biometric data to confirm their identity. The widespread adoption of fingerprint attendance systems is attributed to their dependability, cost-effectiveness, and straightforward implementation in various settings such as workplaces, manufacturing plants, and schools.",
    },
    {
      icon: <ScanFace className="w-7 h-7" />,
      title: "Face Recognition Attendance System",
      body: "Attendance systems that utilize face recognition employ sophisticated artificial intelligence algorithms and cameras to recognize individuals by their unique facial characteristics. Workers merely need to position themselves before the device, and the system then automatically confirms their identity. The adoption of face recognition systems is growing due to their ability to offer touchless verification and more rapid attendance tracking.",
    },
    {
      icon: <Hand className="w-7 h-7" />,
      title: "Palm Recognition Attendance System",
      body: "Palm recognition technology verifies individuals by analyzing the distinctive vein structures within their palms. The inherent uniqueness and complexity of these venous patterns make them exceptionally hard to forge, thus ensuring a high level of security. Consequently, palm-based attendance systems are frequently implemented in environments where robust biometric verification is a necessity.",
    },
    {
      icon: <CreditCard className="w-7 h-7" />,
      title: "Card Attendance System",
      body: "Basically, to keep track of when employees show up, those card attendance systems use things like smart cards or cards you just hold near a reader. Everyone gets their own card, and it's all tied to their info in the system. When they swipe or scan their card, boom, their attendance is logged right away. And for extra security, they often pair up these cards with fingerprint or face scans.",
    },
    {
      icon: <Lock className="w-7 h-7" />,
      title: "Password Attendance System",
      body: "Employees can punch in by typing in their own special PIN or password. This is often used as a backup way to confirm who someone is, along with using things like fingerprints or face scans.",
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: "Iris Recognition Attendance System",
      body: "You know, those iris scanners? They figure out who you are by looking at the special patterns in your eyes. It's super accurate and usually shows up where they need really tight security.",
    },
  ];

  const keyFeatures = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Accurate Biometric Identification",
      desc: "Biometric systems provide highly accurate employee identification.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Authentication",
      desc: "Most biometric devices verify identity within seconds.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Large User Capacity",
      desc: "Enterprise biometric systems can store thousands of employee profiles.",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Attendance Software Integration",
      desc: "Biometric attendance machines integrate with HR software to generate attendance reports automatically.",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Connectivity",
      desc: "Many modern devices support cloud-based attendance management for remote monitoring.",
    },
  ];

  const benefits = [
    {
      title: "Accurate Attendance Records",
      desc: "Biometric authentication eliminates manual errors and ensures reliable attendance tracking.",
    },
    {
      title: "Prevents Proxy Attendance",
      desc: "Employees cannot mark attendance on behalf of others because biometric identifiers are unique.",
    },
    {
      title: "Simplifies Payroll Processing",
      desc: "Attendance reports generated by the system help HR teams calculate employee working hours and salaries easily.",
    },
    {
      title: "Improves Workplace Discipline",
      desc: "Automated attendance tracking encourages employees to follow proper work schedules.",
    },
    {
      title: "Enhances Security",
      desc: "Biometric systems can integrate with access control systems to manage entry to restricted areas.",
    },
  ];

  const industries = [
    { icon: <Building2 className="w-5 h-5" />, label: "Corporate offices" },
    { icon: <Factory className="w-5 h-5" />, label: "Manufacturing factories" },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      label: "Educational institutions",
    },
    {
      icon: <Hospital className="w-5 h-5" />,
      label: "Hospitals and healthcare facilities",
    },
    {
      icon: <Landmark className="w-5 h-5" />,
      label: "Government organizations",
    },
    { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail stores" },
    {
      icon: <Warehouse className="w-5 h-5" />,
      label: "Warehouses and logistics companies",
    },
  ];

  const faqs = [
    {
      q: "What is a biometric attendance system?",
      a: "A biometric attendance system is a device that records employee attendance using biometric identifiers such as fingerprints, facial recognition, palm patterns, or iris scanning.",
    },
    {
      q: "Are biometric attendance systems secure?",
      a: "Yes. Biometric attendance systems are highly secure because biometric identifiers are unique to each individual.",
    },
    {
      q: "Can biometric attendance systems integrate with payroll software?",
      a: "Yes. Most biometric attendance systems integrate with HR software to generate reports used for payroll processing.",
    },
    {
      q: "Which biometric attendance system is best for offices?",
      a: "Fingerprint and face recognition attendance systems are the most commonly used options for offices because they provide reliable and accurate authentication.",
    },
  ];

  const multiBioOptions = [
    { icon: <ScanFace className="w-5 h-5" />, label: "Face recognition" },
    {
      icon: <Fingerprint className="w-5 h-5" />,
      label: "Fingerprint authentication",
    },
    { icon: <Hand className="w-5 h-5" />, label: "Palm recognition" },
    { icon: <CreditCard className="w-5 h-5" />, label: "Card authentication" },
    { icon: <Lock className="w-5 h-5" />, label: "Password verification" },
    { icon: <Eye className="w-5 h-5" />, label: "Iris recognition" },
  ];

  const orgUses = [
    "Automate attendance tracking",
    "Prevent proxy attendance",
    "Improve payroll accuracy",
    "Monitor workforce productivity",
    "Enhance workplace security",
  ];

  const timewatchAdvantages = [
    "High accuracy biometric sensors",
    "Advanced attendance management software",
    "Integration with HR and payroll systems",
    "Scalable solutions for businesses of all sizes",
    "Installation and support services across India",
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
              src="/images/biometric-attendance-system.webp"
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
            Biometric Attendance System for Modern Workforce Management
          </h1>
          <p className="text-xl text-white mb-8 hidden md:block">
            Keeping track of when your employees show up for work is super
            important for any company. The old ways, like signing a paper book,
            using punch cards, or jotting things down in spreadsheets, often
            mess up, let people clock in for others, and just make things
            complicated to manage.
          </p>
        </div>
      </section>
      {/* ── DIVIDER ── */}
      <div className="h-1.5 bg-[#d63438]/10" />

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* What is */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-[#d63438] pl-4">
            What is a Biometric Attendance System?
          </h2>
          <div className="text-[#6d6f72] leading-relaxed space-y-4">
            <p>
              An automated biometric attendance system tracks employee presence
              by employing biometric identification techniques. This
              authentication process involves capturing an individual&rsquo;s
              distinctive physical characteristics, such as their fingerprints,
              facial details, palm lines, or iris patterns.
            </p>
            <p>
              Upon registering their biometric information, employees&rsquo;
              data is securely stored within the system. Subsequently, each time
              an employee verifies their identity, the system cross-references
              the captured biometric data against the stored templates to
              confirm their identity.
            </p>
            <p>
              Once a match is identified, the employee&rsquo;s attendance is
              automatically logged.
            </p>
            <p className="font-medium text-gray-700">
              Organizations use biometric attendance systems to:
            </p>
          </div>
          <ul className="mt-4 space-y-2">
            {orgUses.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#6d6f72]">
                <CheckCircle className="w-4 h-4 text-[#d63438] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Types */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Types of Biometric Attendance Systems
          </h2>
          <p className="text-[#6d6f72] mb-8">
            Current biometric attendance systems offer a range of authentication
            options, enabling businesses to select the best fit for their
            security needs and office setting.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {biometricTypes.map((type) => (
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

        {/* Multi-biometric */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#d63438] text-white rounded-xl p-2.5">
              <Layers className="w-6 h-6" />
            </span>
            <h2 className="text-2xl font-bold text-gray-900">
              Multi-Biometric Attendance System for Enterprises
            </h2>
          </div>
          <p className="text-[#6d6f72] leading-relaxed mb-5">
            Modern organizations often require multiple authentication options
            to manage attendance and access control efficiently. A
            multi-biometric attendance system supports multiple identification
            technologies within a single device. Instead of relying on only one
            authentication method, organizations can use a combination of
            biometric technologies.
          </p>
          <p className="text-sm font-semibold text-gray-700 mb-3">
            These devices may support:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
            {multiBioOptions.map((o) => (
              <div
                key={o.label}
                className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-3 py-2.5 text-sm text-[#6d6f72]"
              >
                <span className="text-[#d63438]">{o.icon}</span>
                {o.label}
              </div>
            ))}
          </div>
          <p className="text-[#6d6f72] leading-relaxed text-sm">
            This adaptability means companies can set up attendance systems that
            fit exactly what they need to do. For instance, staff could clock in
            using their face, but for sensitive spots, they might need to use
            their palm or eye scan. These systems that use more than one type of
            biometric scan are really handy for big companies that have a lot
            going on with managing their staff and keeping things secure.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Key Features of Biometric Attendance Systems
          </h2>
          <p className="text-[#6d6f72] mb-8">
            Modern biometric attendance systems include several advanced
            features designed to improve attendance management.
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
        {/* Benefits */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Benefits of Using Biometric Attendance Systems
          </h2>
          <p className="text-[#6d6f72] mb-8 pl-5">
            Biometric attendance systems provide multiple advantages for
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3 border-l-4 border-[#d63438] pl-4">
            Our Products
          </h2>
          <ProductCatCard categorySlug="time-attendance-and-access-control" />
        </section>

        {/* Industries */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d63438] pl-4">
            Industries Using Biometric Attendance Systems
          </h2>
          <p className="text-[#6d6f72] mb-6">
            Biometric attendance systems are widely used across different
            industries.
          </p>
          <p className="text-[#6d6f72] mb-4 text-sm font-medium">
            Common industries include:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {industries.map((ind) => (
              <div
                key={ind.label}
                className="flex items-center gap-2 border border-gray-100 rounded-xl px-3 py-3 text-sm text-[#6d6f72] hover:border-[#d63438]/30 transition-colors"
              >
                <span className="text-[#d63438] shrink-0">{ind.icon}</span>
                {ind.label}
              </div>
            ))}
          </div>
          <p className="text-[#6d6f72] text-sm mt-5">
            These industries rely on biometric systems to improve workforce
            efficiency and security.
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
            Why Choose TimeWatch Biometric Attendance Systems
          </h2>
          <p className="text-white/85 leading-relaxed mb-6">
            TimeWatch is a go-to company in India for biometric systems that
            handle attendance tracking and access control. We&rsquo;ve built our
            biometric attendance systems using cutting-edge tech so they work
            dependably, even when things get tough.
          </p>
          <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">
            Key advantages include:
          </p>
          <ul className="space-y-3">
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
          <p className="mt-6 text-white/80 text-sm">
            TimeWatch solutions help organizations automate attendance
            management and improve workforce productivity.
          </p>
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
