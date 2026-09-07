
import {
  Inter,
  Calligraffitti,
  Bricolage_Grotesque,
  Geist,
} from "next/font/google";
import localFont from "next/font/local";

/* =========================================================
   INTER
========================================================= */

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* =========================================================
   CALLIGRAFFITTI
========================================================= */

export const calligraffitti = Calligraffitti({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-calligraffitti",
  display: "swap",
});

/* =========================================================
   BRICOLAGE GROTESQUE
========================================================= */

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

/* =========================================================
   GEIST
========================================================= */

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

/* =========================================================
   SF PRO
========================================================= */

export const sfPro = localFont({
  src: [
    {
      path: "./fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

