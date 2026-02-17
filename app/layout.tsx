import type { Metadata } from "next";
import "./globals.css";
import TopNavigation from "./Component/topNavigation";
import Footer from "./Component/Footer";
import { inter, calligraffitti, bricolage } from "./fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Athratech Tech",
  description: "Provides various tech solutions",


  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
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
      <body className="antialiased bg-white max-w-[1440px] w-full mx-auto">
        {/* Navbar */}
        <TopNavigation />

        {/* Page content */}
        <main className="relative">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1PLCHP3548"></Script>
        <Script>
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1PLCHP3548');`}
        </Script>

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

      </body>
    </html>
  );
}
