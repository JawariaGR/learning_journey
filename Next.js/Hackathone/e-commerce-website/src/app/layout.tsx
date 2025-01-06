import React, { ReactNode } from "react";
import { Metadata } from "next";
import { JSX } from "react";
import "./globals.css";
export const metadata: Metadata = {
  title: "UI/UX Hackathone",
  description: "Ecommerce website",
};

export default function RootLayout({ children }: { children: ReactNode }):JSX.Element{
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
