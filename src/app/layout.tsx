import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaheni Elevators | #1 Innovative Lift Solutions in Hyderabad",
  description: "Vaheni Elevators delivers safe, reliable, and premium elevator solutions. Leading provider in Hyderabad for Residential, Commercial, and Hospital lifts.",
  keywords: ["elevators hyderabad", "lift installation", "elevator maintenance", "hospital lifts", "capsule lifts", "vaheni elevators"],
  authors: [{ name: "Vaheni Elevators" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
