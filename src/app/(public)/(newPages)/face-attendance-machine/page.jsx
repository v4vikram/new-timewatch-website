// app/face-attendance-machine/page.tsx
import React from "react";
import {
  CheckCircle,
  Fingerprint,
  Shield,
  Zap,
  Users,
  Camera,
  Wifi,
  Clock,
  Building2,
  GraduationCap,
  Hospital,
  Factory,
  Warehouse,
  Landmark,
  MonitorSmartphone,
} from "lucide-react";
import Link from "next/link";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import HomePageForm from "@/components/HomePageForm";
import AccordionItem from "@/components/landing/AccordionItem";
import Image from "next/image";

export const metadata = {
  title: "AI Face Attendance Machine with Access Control in India | TimeWatch",
  description:
    "Discover advanced AI face attendance machines with facial recognition and access control. Ideal for offices, factories, schools and enterprises across India.",
  keywords:
    "face attendance machine, face recognition attendance system, biometric attendance system india, contactless attendance system, AI face recognition attendance machine",
  alternates: {
    canonical: "https://www.timewatchindia.com/face-attendance-machine",
  },
  openGraph: {
    title:
      "AI Face Attendance Machine with Access Control in India | TimeWatch",
    description:
      "Discover advanced AI face attendance machines with facial recognition and access control. Ideal for offices, factories, schools and enterprises across India.",
    url: "https://www.timewatchindia.com/face-attendance-machine",
    type: "website",
    images: [
      {
        url: "https://www.timewatchindia.com/assets/img/products/face-attendance-machine.jpg",
        width: 1200,
        height: 630,
        alt: "AI Face Attendance Machine by TimeWatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Face Attendance Machine with Access Control in India | TimeWatch",
    description:
      "Discover advanced AI face attendance machines with facial recognition and access control. Ideal for offices, factories, schools and enterprises across India.",
    images: [
      "https://www.timewatchindia.com/assets/img/products/face-attendance-machine.jpg",
    ],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AI Face Attendance Machine",
  brand: {
    "@type": "Brand",
    name: "TimeWatch",
  },
  description:
    "AI powered face attendance machine with facial recognition and access control for offices and factories.",
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
      name: "What is a face attendance machine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A face attendance machine is a biometric device that records employee attendance using facial recognition technology.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is facial recognition attendance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern AI facial recognition attendance systems provide accuracy above 99 percent.",
      },
    },
    {
      "@type": "Question",
      name: "Can face attendance machines work in low light?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Infrared cameras allow accurate facial recognition even in low lighting environments.",
      },
    },
    {
      "@type": "Question",
      name: "Is facial recognition attendance better than fingerprint attendance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Face recognition systems provide faster and contactless authentication compared to fingerprint systems.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What is a face attendance machine?",
    answer:
      "A face attendance machine is a biometric device that records employee attendance using facial recognition technology.",
  },
  {
    question: "How accurate is facial recognition attendance?",
    answer:
      "Modern facial recognition attendance systems provide accuracy levels above 99 percent.",
  },
  {
    question: "Can face attendance machines work in low light?",
    answer:
      "Yes. Most devices include infrared cameras that enable accurate facial recognition even in low lighting conditions.",
  },
  {
    question:
      "Is facial recognition attendance better than fingerprint attendance?",
    answer:
      "Face recognition systems provide faster and contactless authentication compared to fingerprint systems.",
  },
];

const featureList = [
  {
    title: "Advanced AI Facial Recognition Technology",
    description:
      "Our devices use cutting-edge AI algorithms to deliver fast, highly accurate face identification — even when employees wear glasses or masks.",
  },
  {
    title: "Durable Biometric Hardware",
    description:
      "Built to last, TimeWatch face attendance machines are designed for long-term performance across demanding industrial and commercial environments.",
  },
  {
    title: "Integration with HR and Payroll Software",
    description:
      "Seamlessly connect attendance data with your existing HR and payroll systems for automated reporting and reduced administrative overhead.",
  },
  {
    title: "Scalable Solutions for Businesses of All Sizes",
    description:
      "Whether you run a small office or a large enterprise, our solutions scale to meet your workforce size and operational complexity.",
  },
  {
    title: "Installation and Support Across India",
    description:
      "TimeWatch provides pan-India installation, integration, and after-sales technical support to keep your attendance system running smoothly.",
  },
];

const FaceAttendanceMachinePage = () => {
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
                        src="/images/Face-Attendance-Machine.webp"
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
                      AI Face Attendance Machine for Offices and Factories in India
                    </h1>
                    <p className="text-xl text-white mb-8 hidden md:block">
                     Accurately tracking employee attendance has consistently posed
              difficulties for businesses. Older methods, including manual logs,
              punch cards, or RFID cards, frequently result in errors, payroll
              fraud, and increased administrative burdens. Contemporary
              companies are now implementing AI-driven facial recognition
              attendance systems to streamline the process of monitoring
              attendance and bolster workplace safety.
                    </p>
                  </div>
                </section>

        {/* ── What is a Face Attendance Machine ── */}
    {/* ── What is a Face Attendance Machine ── */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left — Image */}
      <div className="order-1">
        <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl p-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex justify-center">
            <div className="relative w-full h-[280px] md:h-[460px]">
              <Image
                src="/images/ai-facet5.webp"
                alt="Face Attendance Machine"
                title="Face Recognition Attendance System"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right — Text */}
      <div className="order-2 mt-10 lg:mt-0">

        <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
          What is a Face Attendance Machine?
        </h2>

        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
          A face attendance machine is a biometric device that logs employee
          attendance through facial recognition technology. It captures an
          individual's face using a camera and then compares it against the
          biometric templates stored in the system's database.
        </p>

        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
          Upon successful recognition of the face, the attendance is
          automatically logged. As opposed to fingerprint attendance systems,
          facial recognition systems eliminate the need for physical contact,
          thereby offering a more hygienic solution that is well-suited for
          contemporary work environments.
        </p>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Face recognition attendance systems are widely used because they
          offer:
        </p>

        <div className="space-y-3">
          {[
            "Contactless authentication",
            "High accuracy identification",
            "Faster attendance processing",
            // "Improved workplace security",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        {/* <p className="text-lg text-gray-600 mt-6 leading-relaxed">
          Businesses across India are increasingly deploying face attendance
          machines to automate attendance tracking and reduce manual errors.
        </p> */}
      </div>

    </div>
  </div>
</section>


        {/* ── How It Works ── */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                How Face Attendance Machines Work
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Face attendance machines use artificial intelligence and machine
                learning algorithms to identify individuals based on their
                facial features.
              </p>
            </div>

            <div className="lg:grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  When an employee stands in front of the device, the camera
                  captures the facial image and analyzes multiple facial points
                  such as:
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    "Distance between the eyes",
                    "Nose shape",
                    "Jawline structure",
                    "Facial contours",
                  ].map((point, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  These features are converted into a unique biometric template
                  and compared with stored data in the system. If the system
                  finds a match, the employee's attendance is recorded
                  instantly.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Modern devices can recognize faces in less than one second,
                  making them one of the fastest biometric authentication
                  methods available today.
                </p>
              </div>

              {/* Step-by-step visual */}
              <div className="mt-8 lg:mt-0 space-y-4">
                {[
                  {
                    step: "01",
                    title: "Employee Stands Before Device",
                    desc: "Camera captures the live facial image instantly.",
                  },
                  {
                    step: "02",
                    title: "AI Analyzes Facial Features",
                    desc: "Multiple facial landmarks are extracted and processed.",
                  },
                  {
                    step: "03",
                    title: "Biometric Template Comparison",
                    desc: "Captured data is matched against stored profiles in the database.",
                  },
                  {
                    step: "04",
                    title: "Attendance Recorded Instantly",
                    desc: "On successful match, attendance is logged and synced to the cloud.",
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#b82c30] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">
                        {s.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#6d6f72] mb-1">
                        {s.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Features ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Key Features of AI Face Attendance Machines
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Those TimeWatch face attendance machines come with some pretty
                neat features to help businesses keep track of who's showing up
                and make things more secure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Camera,
                  title: "AI Powered Facial Recognition",
                  description:
                    "Advanced AI algorithms ensure fast and accurate identification even when employees wear glasses or masks.",
                },
                {
                  icon: MonitorSmartphone,
                  title: "Dual Camera Technology",
                  description:
                    "Infrared and visible cameras allow accurate recognition even in low-light environments.",
                },
                {
                  icon: Fingerprint,
                  title: "Multiple Authentication Options",
                  description:
                    "Many devices support face recognition, fingerprint, RFID card, and password authentication methods.",
                },
                {
                  icon: Users,
                  title: "Large User Capacity",
                  description:
                    "Enterprise face attendance machines can store thousands of employee profiles.",
                },
                {
                  icon: Zap,
                  title: "Attendance Software Integration",
                  description:
                    "The system connects with attendance tracking software, so HR and payroll can get automatic reports on who's been showing up.",
                },
                {
                  icon: Shield,
                  title: "Improved Workplace Security",
                  description:
                    "When integrated with access control systems, these devices can also control door entry.",
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
                Benefits of Using Face Attendance Machines
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Face recognition attendance systems provide several advantages
                for modern organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Contactless Attendance",
                  description:
                    "Employees can mark attendance without touching the device, making it more hygienic.",
                },
                {
                  title: "Prevents Buddy Punching",
                  description:
                    "Facial recognition ensures employees cannot mark attendance on behalf of others.",
                },
                {
                  title: "Faster Attendance Processing",
                  description:
                    "Face recognition systems identify employees within seconds.",
                },
                {
                  title: "Improved Workplace Security",
                  description:
                    "When integrated with access control systems, these devices can also control door entry.",
                },
                {
                  title: "Automated Attendance Reports",
                  description:
                    "HR teams can easily generate attendance reports for payroll processing and workforce management.",
                },
                {
                  title: "Reduced Administrative Burden",
                  description:
                    "Eliminate manual logs, punch cards, and RFID errors — save time and reduce costs across your organisation.",
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
                Industries Using Face Attendance Machines
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Face attendance machines are used in many industries where
                accurate attendance tracking and secure access control are
                required.
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
                  title: "Manufacturing Plants",
                  description:
                    "Accurate biometric tracking in industrial, dusty, or temperature-variable spaces.",
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
                    "Portable attendance for rotating or shift workers, including emergency deployments.",
                },
                {
                  icon: MonitorSmartphone,
                  title: "IT Companies",
                  description:
                    "Fast, contactless attendance suitable for modern tech offices and open workspaces.",
                },
                {
                  icon: Warehouse,
                  title: "Warehouses and Logistics Centers",
                  description:
                    "Immediate attendance capture at locality hubs, warehouses, and truck stops.",
                },
                {
                  icon: Landmark,
                  title: "Government Offices",
                  description:
                    "Reliable attendance for government departments ensuring compliance and accountability.",
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
              These industries rely on biometric attendance systems to improve
              workforce productivity and security.
            </p>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Face Attendance Machine vs Fingerprint Attendance Machine
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Face attendance machines offer contactless authentication and
                faster identification compared to traditional fingerprint-based
                systems.
              </p>
            </div>

            <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg border border-gray-100">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-[#b82c30] text-white">
                    <th className="px-6 py-4 font-semibold text-lg">
                      Feature
                    </th>
                    <th className="px-6 py-4 font-semibold text-lg text-center">
                      Face Attendance
                    </th>
                    <th className="px-6 py-4 font-semibold text-lg text-center">
                      Fingerprint Attendance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Contactless",
                      face: "Yes",
                      finger: "No",
                      facePositive: true,
                    },
                    {
                      feature: "Speed",
                      face: "Very Fast",
                      finger: "Moderate",
                      facePositive: true,
                    },
                    {
                      feature: "Hygiene",
                      face: "High",
                      finger: "Requires Touch",
                      facePositive: true,
                    },
                    {
                      feature: "Accuracy",
                      face: "High",
                      finger: "High",
                      facePositive: false,
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 font-semibold text-[#6d6f72]">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            row.facePositive
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {row.face}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                          {row.finger}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Why Choose TimeWatch ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Why Choose TimeWatch Face Attendance Machines
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                TimeWatch is a trusted provider of biometric attendance and
                access control solutions in India. Our face attendance machines
                are designed for reliability, accuracy, and long-term
                performance. TimeWatch solutions are trusted by organizations
                looking for reliable biometric attendance and security systems.
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
          <div id="faceAttendanceFAQ">
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
            {/* Contact Form */}
            <div className="flex-1 p-4 md:p-8 bg-white">
              <HomePageForm />
            </div>

            {/* Contact Info */}
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

export default FaceAttendanceMachinePage;