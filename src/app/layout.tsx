import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import TopBar from "@/Components/Topbar";
import ConnectFooter from "@/Components/ConnectFooter";
import BottomBar from "@/Components/BottomBar";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahynex",
  description: "Sahynex is a leading IT solutions provider, specializing in innovative software development, cloud services, and digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <TopBar/>
        <Header/>
        {children}
    <ConnectFooter/>
    <Footer/>
    <BottomBar/>
      </body>
    </html>
  );
}
