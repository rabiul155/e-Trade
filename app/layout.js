import React from "react";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AuthGuardHOC from "@/components/AuthGuard/AuthGuardHOC";
import AppLayout from "@/components/layout/AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "eTrade",
  description: "E-commerce app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>eTrade</title>
      <body className={`${inter.className}`}>
        <AppLayout>
          <AuthGuardHOC>
            <Navbar></Navbar>
            <div className="min-h-screen">{children}</div>
            <Footer></Footer>
          </AuthGuardHOC>
        </AppLayout>
      </body>
    </html>
  );
}
