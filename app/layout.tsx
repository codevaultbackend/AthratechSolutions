import type { Metadata } from "next";
import "./globals.css";
import TopNavigation from "./Component/topNavigation";
import Footer from "./Component/Footer";
import { inter, calligraffitti, bricolage } from "./fonts";

export const metadata: Metadata = {
  title: "Athratech Tech",
  description: "Provides various tech solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${calligraffitti.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className="antialiased bg-white max-w-[1440px] w-full mx-auto">
        {/* Navbar */}
        <TopNavigation />

        {/* Page content */}
        <main className="relative">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
