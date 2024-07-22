"use client";

import { useEffect } from "react";
import { Rubik } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";

import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/scss/main.scss";
const fontRubic = Rubik({
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-rubic",
});
export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <body className={`${fontRubic.variable}`}>
        <AnimatedCursor
          innerSize={8}
          outerSize={44}
          color="255, 147, 1"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={1.4}
        />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
