import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Building,
} from "lucide-react";

import RnaForm from "@/components/RnaForm"; // your existing form component

export const metadata = {
  title: "RNA Service Request | TimeWatch Infocom",
  description:
    "Submit a service request for TimeWatch devices including repair, troubleshooting, and dispatch tracking.",
};

const RnaPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91-95999 53923", "011-4191-6615"],
      subtitle: "Support - 24/7",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sales@timewatchindia.com", "helpdesk@timewatchindia.com"],
      subtitle: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "D-162, Okhla Industrial Area Phase I, New Delhi, 110020",
      ],
      subtitle: "Main Office / Visit Us",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#d63438] rounded-full flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
            Service Request (RNA)
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Submit your device service request. Our technical team will review
            the issue and provide repair or replacement support quickly.
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex flex-col lg:grid lg:grid-cols-1 gap-12">

            {/* RNA FORM */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

              <div className="bg-gradient-to-r from-[#d63438] to-[#6d6f72] px-8 py-4 text-center">
                <h2 className="text-[1.5rem] lg:text-3xl font-bold text-white mb-2">
                  RNA Service Form
                </h2>

                <p className="text-white/90">
                  Fill the form below to submit your service request
                </p>
              </div>

              <div className="p-4 lg:p-8">
                <RnaForm />
              </div>
            </div>

           
          </div>

        </div>
      </section>

    </div>
  );
};

export default RnaPage;
