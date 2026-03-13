// app/biometric-attendance-system/page.tsx
import React from "react";
import {
  CheckCircle,
  Fingerprint,
  Shield,
  Zap,
  Users,
  Camera,
  CreditCard,
  KeyRound,
  Eye,
  Hand,
  Building2,
  GraduationCap,
  Factory,
  Warehouse,
  Landmark,
  ShoppingBag,
  Hospital,
  Layers,
  Cloud,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import HomePageForm from "@/components/HomePageForm";
import AccordionItem from "@/components/landing/AccordionItem";

export const metadata = {
  title:
    "Biometric Attendance System for Offices & Factories in India | TimeWatch",
  description:
    "Advanced biometric attendance system for offices and factories in India. Track employee attendance using fingerprint, face recognition, palm, card and iris authentication.",
  keywords:
    "biometric attendance system, biometric attendance system india, biometric attendance machine, employee biometric attendance system, multi biometric attendance system",
  alternates: {
    canonical: "https://www.timewatchindia.com/biometric-attendance-system",
  },
  openGraph: {
    title:
      "Biometric Attendance System for Offices & Factories in India | TimeWatch",
    description:
      "Advanced biometric attendance system for offices and factories in India. Track employee attendance using fingerprint, face recognition, palm, card and iris authentication.",
    url: "https://www.timewatchindia.com/biometric-attendance-system",
    type: "website",
    images: [
      {
        url: "https://www.timewatchindia.com/assets/img/products/biometric-attendance-system.jpg",
        width: 1200,
        height: 630,
        alt: "Biometric Attendance System by TimeWatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Biometric Attendance System for Offices & Factories in India | TimeWatch",
    description:
      "Advanced biometric attendance system for offices and factories in India. Track employee attendance using fingerprint, face recognition, palm, card and iris authentication.",
    images: [
      "https://www.timewatchindia.com/assets/img/products/biometric-attendance-system.jpg",
    ],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Biometric Attendance System",
  brand: {
    "@type": "Brand",
    name: "TimeWatch",
  },
  description:
    "Advanced biometric attendance system for offices and factories in India. Track employee attendance using fingerprint, face recognition, palm, card and iris authentication.",
  category: "Biometric Attendance System",
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
      name: "What is a biometric attendance system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A biometric attendance system records employee attendance using biometric identifiers such as fingerprints, facial recognition, palm recognition or iris scanning.",
      },
    },
    {
      "@type": "Question",
      name: "Are biometric attendance systems secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Biometric attendance systems are secure because biometric identifiers are unique to each individual.",
      },
    },
    {
      "@type": "Question",
      name: "Can biometric attendance systems integrate with payroll software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Attendance data can be integrated with HR and payroll systems to generate reports.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What is a biometric attendance system?",
    answer:
      "A biometric attendance system is a device that records employee attendance using biometric identifiers such as fingerprints, facial recognition, palm patterns, or iris scanning.",
  },
  {
    question: "Are biometric attendance systems secure?",
    answer:
      "Yes. Biometric attendance systems are highly secure because biometric identifiers are unique to each individual.",
  },
  {
    question:
      "Can biometric attendance systems integrate with payroll software?",
    answer:
      "Yes. Most biometric attendance systems integrate with HR software to generate reports used for payroll processing.",
  },
  {
    question:
      "Which biometric attendance system is best for offices?",
    answer:
      "Fingerprint and face recognition attendance systems are the most commonly used options for offices because they provide reliable and accurate authentication.",
  },
];

const featureList = [
  {
    title: "High Accuracy Biometric Sensors",
    description:
      "Our devices use cutting-edge biometric sensors to deliver precise, reliable employee identification across all authentication modes.",
  },
  {
    title: "Advanced Attendance Management Software",
    description:
      "Powerful built-in software automates attendance tracking, reporting, and integration — reducing administrative overhead significantly.",
  },
  {
    title: "Integration with HR and Payroll Systems",
    description:
      "Seamlessly connect attendance data with your existing HR and payroll platforms for accurate, automated salary processing.",
  },
  {
    title: "Scalable Solutions for Businesses of All Sizes",
    description:
      "Whether a small office or a large enterprise, our solutions scale to fit your workforce size and operational requirements.",
  },
  {
    title: "Installation and Support Services Across India",
    description:
      "TimeWatch provides pan-India installation, integration, and after-sales technical support to keep your system running smoothly.",
  },
];

const BiometricAttendanceSystemPage = () => {
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
               Biometric Attendance System for  Modern Workforce Management
            </h1>
            <p className="text-xl text-white mb-8 hidden md:block">
            Keeping track of when your employees show up for work is super
              important for any company. The old ways, like signing a paper
              book, using punch cards, or jotting things down in spreadsheets,
              often mess up, let people clock in for others, and just make
              things complicated to manage.
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
                    <div className="relative  h-[280px] w-full md:h-[460px]">
                      <Image
                        src="/images/TrueFace3000.webp"
                        alt="What is a Biometric Attendance System"
                        title="Biometric Attendance System Overview"
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
                  What is a Biometric Attendance System?
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  An automated biometric attendance system tracks employee
                  presence by employing biometric identification techniques.
                  This authentication process involves capturing an
                  individual's distinctive physical characteristics, such as
                  their fingerprints, facial details, palm lines, or iris
                  patterns.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Upon registering their biometric information, employees' data
                  is securely stored within the system. Subsequently, each time
                  an employee verifies their identity, the system
                  cross-references the captured biometric data against the
                  stored templates to confirm their identity.
                </p>
               
                <div className="space-y-3">
                  {[
                    "Automate attendance tracking",
                    "Prevent proxy attendance",
                    "Improve payroll accuracy",
                    "Monitor workforce productivity",
                    "Enhance workplace security",
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

        {/* ── Section 2: Left Text + Right Image ── */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              {/* Left — Text */}
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Authentication Modes
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  Multiple Ways to Verify Employee Identity
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Modern biometric attendance systems go beyond a single method
                  of identification. TimeWatch devices support a wide range of
                  authentication options so your organization can choose the
                  right combination for every access point and use case.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Fingerprint,
                      label: "Fingerprint Authentication",
                      sub: "Fast & reliable — most widely deployed biometric method.",
                    },
                    {
                      icon: Camera,
                      label: "Face Recognition",
                      sub: "Contactless AI-powered verification for modern workplaces.",
                    },
                    {
                      icon: Hand,
                      label: "Palm Recognition",
                      sub: "High-security vein pattern scanning, difficult to forge.",
                    },
                    {
                      icon: Eye,
                      label: "Iris Scanning",
                      sub: "Ultra-accurate eye pattern recognition for critical areas.",
                    },
                    {
                      icon: CreditCard,
                      label: "Card Authentication",
                      sub: "Smart card or RFID tap-in, optionally paired with biometrics.",
                    },
                    {
                      icon: KeyRound,
                      label: "Password / PIN",
                      sub: "Flexible backup authentication option for any employee.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#b82c30] rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#6d6f72]">{item.label}</p>
                        <p className="text-sm text-gray-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Image */}
              <div className="order-1 lg:order-2 mt-10 lg:mt-0">
                <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl p-8">
                  <div className="bg-white rounded-2xl shadow-2xl flex justify-center overflow-hidden">
                    <div className="relative  h-[280px] w-full md:h-[460px]">
                      <Image
                        src="/images/TrueFace50FP.webp"
                        alt="Biometric Authentication Modes - Face, Fingerprint, Palm, Iris"
                        title="Multiple Biometric Authentication Modes"
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

                {/* ── Types of Biometric Attendance Systems ── */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Types of Biometric Attendance Systems
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Current biometric attendance systems offer a range of
                authentication options, enabling businesses to select the best
                fit for their security needs and office setting.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Fingerprint,
                  title: "Fingerprint Attendance System",
                  description:
                    "Fingerprint-based timekeeping devices represent one of the most common types of biometric identification technologies. These systems work by capturing an employee's fingerprint and cross-referencing it with pre-recorded biometric data to confirm their identity. The widespread adoption of fingerprint attendance systems is attributed to their dependability, cost-effectiveness, and straightforward implementation in various settings such as workplaces, manufacturing plants, and schools.",
                },
                {
                  icon: Camera,
                  title: "Face Recognition Attendance System",
                  description:
                    "Attendance systems that utilize face recognition employ sophisticated artificial intelligence algorithms and cameras to recognize individuals by their unique facial characteristics. Workers merely need to position themselves before the device, and the system then automatically confirms their identity. The adoption of face recognition systems is growing due to their ability to offer touchless verification and more rapid attendance tracking.",
                },
                {
                  icon: Hand,
                  title: "Palm Recognition Attendance System",
                  description:
                    "Palm recognition technology verifies individuals by analyzing the distinctive vein structures within their palms. The inherent uniqueness and complexity of these venous patterns make them exceptionally hard to forge, thus ensuring a high level of security. Consequently, palm-based attendance systems are frequently implemented in environments where robust biometric verification is a necessity.",
                },
                {
                  icon: CreditCard,
                  title: "Card Attendance System",
                  description:
                    "Card attendance systems use things like smart cards or cards you just hold near a reader to keep track of when employees show up. Everyone gets their own card, and it's all tied to their info in the system. When they swipe or scan their card, their attendance is logged right away. And for extra security, they often pair up these cards with fingerprint or face scans.",
                },
                {
                  icon: KeyRound,
                  title: "Password Attendance System",
                  description:
                    "Employees can punch in by typing in their own special PIN or password. This is often used as a backup way to confirm who someone is, along with using things like fingerprints or face scans.",
                },
                {
                  icon: Eye,
                  title: "Iris Recognition Attendance System",
                  description:
                    "Iris scanners figure out who you are by looking at the special patterns in your eyes. It's super accurate and usually shows up where they need really tight security.",
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

        {/* ── Multi-Biometric Section ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Enterprise Solution
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  Multi-Biometric Attendance System for Enterprises
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Modern organizations often require multiple authentication
                  options to manage attendance and access control efficiently. A
                  multi-biometric attendance system supports multiple
                  identification technologies within a single device. Instead
                  of relying on only one authentication method, organizations
                  can use a combination of biometric technologies.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  This adaptability means companies can set up attendance
                  systems that fit exactly what they need to do. For instance,
                  staff could clock in using their face, but for sensitive
                  spots, they might need to use their palm or eye scan. These
                  systems that use more than one type of biometric scan are
                  really handy for big companies that have a lot going on with
                  managing their staff and keeping things secure.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed font-medium">
                  These devices may support:
                </p>
                <div className="space-y-3">
                  {[
                    { icon: Camera, label: "Face recognition" },
                    { icon: Fingerprint, label: "Fingerprint authentication" },
                    { icon: Hand, label: "Palm recognition" },
                    { icon: CreditCard, label: "Card authentication" },
                    { icon: KeyRound, label: "Password verification" },
                    { icon: Eye, label: "Iris recognition" },
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
                        All-in-One Biometric Device
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        Single device, multiple authentication modes
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { icon: Camera, label: "Face" },
                        { icon: Fingerprint, label: "Finger" },
                        { icon: Hand, label: "Palm" },
                        { icon: CreditCard, label: "Card" },
                        { icon: KeyRound, label: "PIN" },
                        { icon: Eye, label: "Iris" },
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
                Key Features of Biometric Attendance Systems
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern biometric attendance systems include several advanced
                features designed to improve attendance management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Accurate Biometric Identification",
                  description:
                    "Biometric systems provide highly accurate employee identification.",
                },
                {
                  icon: Zap,
                  title: "Fast Authentication",
                  description:
                    "Most biometric devices verify identity within seconds.",
                },
                {
                  icon: Users,
                  title: "Large User Capacity",
                  description:
                    "Enterprise biometric systems can store thousands of employee profiles.",
                },
                {
                  icon: BarChart3,
                  title: "Attendance Software Integration",
                  description:
                    "Biometric attendance machines integrate with HR software to generate attendance reports automatically.",
                },
                {
                  icon: Cloud,
                  title: "Cloud Connectivity",
                  description:
                    "Many modern devices support cloud-based attendance management for remote monitoring.",
                },
                {
                  icon: Layers,
                  title: "Multi-Mode Authentication",
                  description:
                    "Support for face, fingerprint, palm, card, password, and iris — all in a single enterprise device.",
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
                Benefits of Using Biometric Attendance Systems
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Biometric attendance systems provide multiple advantages for
                organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Accurate Attendance Records",
                  description:
                    "Biometric authentication eliminates manual errors and ensures reliable attendance tracking.",
                },
                {
                  title: "Prevents Proxy Attendance",
                  description:
                    "Employees cannot mark attendance on behalf of others because biometric identifiers are unique.",
                },
                {
                  title: "Simplifies Payroll Processing",
                  description:
                    "Attendance reports generated by the system help HR teams calculate employee working hours and salaries easily.",
                },
                {
                  title: "Improves Workplace Discipline",
                  description:
                    "Automated attendance tracking encourages employees to follow proper work schedules.",
                },
                {
                  title: "Enhances Security",
                  description:
                    "Biometric systems can integrate with access control systems to manage entry to restricted areas.",
                },
                {
                  title: "Reduces Administrative Burden",
                  description:
                    "Automated reports and integrations reduce the time HR teams spend on manual attendance management tasks.",
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

        {/* ── Industries ── */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Industries Using Biometric Attendance Systems
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Biometric attendance systems are widely used across different
                industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Building2,
                  title: "Corporate Offices",
                  description:
                    "Streamlined attendance for large workforces with automated payroll integration.",
                },
                {
                  icon: Factory,
                  title: "Manufacturing Factories",
                  description:
                    "Accurate biometric tracking in industrial, dusty, or temperature-variable production spaces.",
                },
                {
                  icon: GraduationCap,
                  title: "Educational Institutions",
                  description:
                    "Secure student and staff attendance — prevents proxy entries, exports logs for compliance.",
                },
                {
                  icon: Hospital,
                  title: "Hospitals and Healthcare Facilities",
                  description:
                    "Reliable attendance for shift workers and rotating healthcare staff.",
                },
                {
                  icon: Landmark,
                  title: "Government Organizations",
                  description:
                    "Dependable attendance tracking for government departments ensuring accountability.",
                },
                {
                  icon: ShoppingBag,
                  title: "Retail Stores",
                  description:
                    "Fast and accurate attendance for frontline retail staff across multiple store locations.",
                },
                {
                  icon: Warehouse,
                  title: "Warehouses and Logistics Companies",
                  description:
                    "Immediate attendance capture at distribution hubs, warehouses, and logistics centers.",
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
              These industries rely on biometric systems to improve workforce
              efficiency and security.
            </p>
          </div>
        </section>

        {/* ── Why Choose TimeWatch ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Why Choose TimeWatch Biometric Attendance Systems
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                TimeWatch is a go-to company in India for biometric systems
                that handle attendance tracking and access control. We've built
                our biometric attendance systems using cutting-edge tech so
                they work dependably, even when things get tough. TimeWatch
                solutions help organizations automate attendance management and
                improve workforce productivity.
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
                  title: "Face Attendance Machine",
                  href: "/face-attendance-machine",
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
          <div id="biometricAttendanceFAQ">
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

export default BiometricAttendanceSystemPage;