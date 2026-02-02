import { Inter, Calligraffitti, Bricolage_Grotesque } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const calligraffitti = Calligraffitti({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-calligraffitti",
  display: "swap",
});

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
