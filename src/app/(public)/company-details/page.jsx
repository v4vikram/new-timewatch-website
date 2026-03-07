"use client";
import React from "react";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  Award,
  Calendar,
  Download,
  BookOpen,
  Shield,
  Cpu,
  Eye,
  Target,
  CheckCircle2,
} from "lucide-react";

const primary = "#c0392b";
const gray = "#6d6f72";

const companyInfo = [
  { icon: Building2, label: "Company Name", value: "TimeWatch Infocom Pvt. Ltd." },
  { icon: Calendar, label: "Founded", value: "2015" },
  { icon: MapPin, label: "Headquarters", value: "New Delhi, India" },
  { icon: Globe, label: "Website", value: "www.timewatchindia.com" },
  { icon: Phone, label: "Phone", value: "+91 9599953921" },
  { icon: Mail, label: "Email", value: "sales@timewatchindia.com" },
  { icon: Users, label: "Team Strength", value: "200+ Professionals" },
  { icon: Award, label: "Industry", value: "Security & Workforce Management" },
];

const products = [
  { icon: Eye, name: "Inspection Systems" },
  { icon: Shield, name: "Entrance Control" },
  { icon: Target, name: "Traffic & Parking" },
  { icon: CheckCircle2, name: "Attendance & Access" },
  { icon: Users, name: "HR & Payroll" },
  { icon: Cpu, name: "Custom Software" },
];

const catalogues = [
  {
    icon: Shield,
    title: "Security Solutions",
    desc: "Entrance control, inspection & surveillance systems.",
    pages: "32 pages",
    updated: "Jan 2025",
    size: "8.4 MB",
  },
  {
    icon: Users,
    title: "HR & Workforce",
    desc: "Attendance, payroll & compliance automation.",
    pages: "28 pages",
    updated: "Feb 2025",
    size: "6.1 MB",
  },
  {
    icon: Target,
    title: "Traffic & Parking",
    desc: "Smart systems for campuses and commercial zones.",
    pages: "20 pages",
    updated: "Dec 2024",
    size: "5.8 MB",
  },
  {
    icon: Cpu,
    title: "Software & AI",
    desc: "Custom software, IoT and Vision Intelligence.",
    pages: "24 pages",
    updated: "Jan 2025",
    size: "7.2 MB",
  },
];

export default function CompanyDetailsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section
        className="py-16 text-center"
        style={{ background: `linear-gradient(135deg, ${primary}15 0%, ${gray}15 100%)` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span
            className="inline-block text-white text-xs font-bold tracking-widest uppercase px-4 py-1 rounded mb-5"
            style={{ background: primary, fontFamily: "Arial Narrow, Arial, sans-serif" }}
          >
            Est. 2015
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: gray }}>
            Company Profile
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Simplifying security through innovation — powered by technology and
            built on trust.
          </p>
        </div>
      </section>

      {/* ── MAIN SECTION: LEFT profile | RIGHT download ── */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* ════════════════════════════════
                LEFT — Company Profile
            ════════════════════════════════ */}
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: primary, fontFamily: "Arial Narrow, Arial, sans-serif" }}
              >
                Who We Are
              </p>
              <h2 className="text-3xl font-bold mb-6" style={{ color: gray }}>
                About TimeWatch Infocom
              </h2>

              {/* about text */}
              <p className="text-gray-500 leading-relaxed mb-4">
                Founded in <strong className="text-gray-700">2015</strong>,
                TimeWatch Infocom Pvt. Ltd. has grown into one of India's
                leading manufacturers and solution providers in Security,
                Workforce Management, and HR Automation — serving over{" "}
                <strong className="text-gray-700">5,000 enterprise clients</strong>{" "}
                across the country.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                Driven by{" "}
                <strong className="text-gray-700">AI, IoT & Vision Intelligence</strong>,
                every TimeWatch product delivers unmatched reliability, speed,
                and user experience.
              </p>

              {/* CEO quote */}
              <div
                className="rounded-r-xl p-5 mb-7"
                style={{
                  borderLeft: `4px solid ${primary}`,
                  background: `linear-gradient(135deg, ${primary}12, ${gray}08)`,
                }}
              >
                <p className="text-gray-600 italic leading-relaxed text-sm">
                  "We believe technology should not just secure spaces but also
                  empower people. Our integrated solutions bridge physical
                  security and workforce efficiency under one ecosystem."
                </p>
                <p className="mt-2 text-xs font-semibold" style={{ color: gray }}>
                  — Mr. Virendra Kumar, Founder & CEO
                </p>
              </div>

              {/* stats */}
              <div className="grid grid-cols-4 gap-3 mb-8">
                {[
                  { num: "9+", label: "Years" },
                  { num: "5K+", label: "Clients" },
                  { num: "200+", label: "Team" },
                  { num: "15+", label: "Awards" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 text-center"
                  >
                    <span
                      className="block text-2xl font-extrabold leading-tight mb-0.5"
                      style={{ color: primary }}
                    >
                      {s.num}
                    </span>
                    <span
                      className="text-xs tracking-widest uppercase text-gray-400"
                      style={{ fontFamily: "Arial Narrow, Arial, sans-serif" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* company info */}
              {/* <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-5">
                <h3 className="font-bold text-lg mb-4" style={{ color: gray }}>
                  Company Details
                </h3>
                <div className="divide-y divide-gray-50">
                  {companyInfo.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3 py-2.5">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${primary}, #b82c30)` }}
                      >
                        <Icon size={14} color="#fff" />
                      </div>
                      <div>
                        <p
                          className="text-xs uppercase tracking-wider mb-0.5 text-gray-400"
                          style={{ fontFamily: "Arial Narrow, Arial, sans-serif" }}
                        >
                          {label}
                        </p>
                        <p className="text-sm font-semibold text-gray-700">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* solutions */}
              {/* <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-lg mb-4" style={{ color: gray }}>
                  Our Solutions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {products.map(({ icon: Icon, name }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 rounded-xl border border-gray-100 p-3 bg-gray-50"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${primary}, #b82c30)` }}
                      >
                        <Icon size={14} color="#fff" />
                      </div>
                      <span className="text-xs font-semibold text-gray-600 leading-tight">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

            {/* ════════════════════════════════
                RIGHT — Download Catalogues
            ════════════════════════════════ */}
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: primary, fontFamily: "Arial Narrow, Arial, sans-serif" }}
              >
                Resources
              </p>
              <h2 className="text-3xl font-bold mb-6" style={{ color: gray }}>
                Download Catalogues
              </h2>

              {/* full brochure banner */}
              <div
                className="rounded-2xl p-8 text-white text-center mb-6"
                style={{ background: `linear-gradient(135deg, ${gray} 0%, #4a4c4f 100%)` }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-white bg-opacity-20">
                  <BookOpen size={28} color="#fff" />
                </div>
                <h3 className="text-xl font-bold mb-2">Full Company Brochure</h3>
                <p className="text-sm opacity-80 mb-6 max-w-xs mx-auto">
                  All products, certifications, client testimonials, and pricing
                  in one complete document.
                </p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 bg-white font-semibold rounded-xl px-6 py-3 text-sm transition hover:opacity-90"
                  style={{ color: gray }}
                >
                  <Download size={16} />
                  Download Full Brochure (12.5 MB)
                </a>
              </div>

              {/* individual catalogue cards */}
              {/* <div className="flex flex-col gap-4 mb-5">
                {catalogues.map(({ icon: Icon, title, desc, pages, updated, size }) => (
                  <div
                    key={title}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col sm:flex-row items-stretch"
                  >
                   
                    <div
                      className="flex items-center justify-center sm:w-20 w-full py-4 sm:py-0 flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${primary}18, ${gray}12)` }}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${primary}, #b82c30)` }}
                      >
                        <Icon size={20} color="#fff" />
                      </div>
                    </div>

                   
                    <div className="flex-1 p-4">
                      <h4 className="font-bold text-sm mb-1" style={{ color: gray }}>
                        {title}
                      </h4>
                      <p className="text-xs text-gray-400 mb-3 leading-relaxed">{desc}</p>
                      <div
                        className="flex gap-4 text-xs text-gray-500"
                        style={{ fontFamily: "Arial Narrow, Arial, sans-serif" }}
                      >
                        <span className="font-semibold">{pages}</span>
                        <span className="font-semibold">{updated}</span>
                        <span className="font-semibold">{size}</span>
                      </div>
                    </div>

                   
                    <div className="flex items-center px-4 pb-4 sm:pb-0">
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="flex items-center gap-2 text-white text-xs font-semibold rounded-xl px-4 py-2.5 transition hover:opacity-90 whitespace-nowrap"
                        style={{ background: `linear-gradient(135deg, ${primary}, #b82c30)` }}
                      >
                        <Download size={14} />
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div> */}

              {/* contact nudge */}
              {/* <div
                className="rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4"
                style={{ background: `linear-gradient(135deg, ${primary}10, ${gray}08)` }}
              >
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-0.5" style={{ color: gray }}>
                    Need a custom proposal?
                  </p>
                  <p className="text-xs text-gray-400">
                    Our sales team will send a tailored brochure for your industry.
                  </p>
                </div>
                <a
                  href="mailto:sales@timewatchindia.com"
                  className="flex items-center gap-2 text-white text-xs font-semibold rounded-xl px-4 py-2.5 transition hover:opacity-90 whitespace-nowrap"
                  style={{ color: "#fff", background: `linear-gradient(135deg, ${gray}, #5a5c5f)` }}
                >
                  <Mail size={14} />
                  Contact Us
                </a>
              </div> */}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}