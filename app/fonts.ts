import {
  Inter,
  Calligraffitti,
  Bricolage_Grotesque,
  Geist,
} from "next/font/google";

/* =========================================================
   INTER
========================================================= */

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

/* =========================================================
   CALLIGRAFFITTI
========================================================= */

export const calligraffitti = Calligraffitti({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-calligraffitti",
  display: "swap",
  preload: false,
});

/* =========================================================
   BRICOLAGE GROTESQUE
========================================================= */

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  preload: true,
});

/* =========================================================
   GEIST
========================================================= */

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  preload: false,
});