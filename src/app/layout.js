import "./globals.css";
import { Rajdhani } from "next/font/google";
import GTM from "@/components/GTM";
import ClientLayout from "@/components/ClientLayout"; // ✅ New client wrapper
import sitemap from "./sitemap";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Biometric Attendance Systems – Face, Fingerprint & Palm | DFMD & Baggage Scanners | TimeWatch India",
  description:
    "TimeWatch India provides biometric attendance systems, face recognition terminals, DFMD, baggage X-ray scanners, turnstiles, flap barriers, boom barriers, and access control solutions across India.",
  alternates: {
    canonical: "https://www.timewatchindia.com",
  },
};

sitemap()
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rajdhani.className}>
      <head>
      </head>
      <GTM />
      <body className={rajdhani.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
