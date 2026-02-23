import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Rohit More portfolio",
  description: "The portfolio project of rohit",
};

export default function Dashboardlayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}