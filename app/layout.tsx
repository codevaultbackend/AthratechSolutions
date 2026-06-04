import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

import TopNavigation from "./Component/topNavigation";
import Footer from "./Component/Footer";

import { inter, calligraffitti, bricolage } from "./fonts";


import { BlogsProvider } from "./context/BlogsContext";
import { ServicesProvider } from "./context/ServicesContext";

export const metadata: Metadata = {
  
  title: "Athratech Tech",
  description: "Provides various tech solutions",

  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1775221940/favicon_sqkqfp.ico",
      },
      {
        url: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1775221940/favicon-96x96_e4nsao.png",
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

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${calligraffitti.variable}`}
    >
      <head>

      


        {/* Google Analytics */}
       <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <meta name="p:domain_verify" content="78a39d68eed68b972d42bd531d8ffd25"/>

        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {
              if(f.fbq)return;

              n=f.fbq=function(){
                n.callMethod
                  ? n.callMethod.apply(n,arguments)
                  : n.queue.push(arguments)
              };

              if(!f._fbq)f._fbq=n;

              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];

              t=b.createElement(e);
              t.async=!0;
              t.src=v;

              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)

            }(
              window,
              document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js'
            );

            fbq('init', '25984887041146356');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className="relative bg-white antialiased">
        {/* PROVIDERS FIX */}
        <ServicesProvider>
          <BlogsProvider>
            <div className="relative mx-auto w-full max-w-full">
              {/* Navbar */}
              <TopNavigation />

              {/* Main Content */}
              <main className="relative">
                {children}
              </main>

              {/* Footer */}
              <Footer />
            </div>
          </BlogsProvider>
        </ServicesProvider>

        {/* Meta Pixel Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=25984887041146356&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}