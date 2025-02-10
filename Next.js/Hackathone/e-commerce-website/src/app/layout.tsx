import React, { ReactNode } from "react";
import { Metadata } from "next";
import { JSX } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";
export const metadata: Metadata = {
  title: "UI/UX Hackathone",
  description: "Ecommerce website",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        {" "}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
