import type { Metadata } from "next";
import Script from "next/script";


import "./global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import TopNavigation from "./Component/topNavigation";
import Footer from "./Component/Footer";

import {
  inter,
  calligraffitti,
  bricolage,
  geist,
  sfPro,
} from "./fonts";


import { BlogsProvider } from "./context/BlogsContext";
import { ServicesProvider } from "./context/ServicesContext";

export const metadata: Metadata = {

  title: "Athratech | Information Technology Company",

  keywords: [
    "website development company",
    "website development services",
    "mobile app development company",
    "SEO services",
    "digital marketing agency",
    "ERP software development",
    "CRM development company",
    "cybersecurity solutions",
  ],

  description:
    "Explore Athratech, a fast-growing IT services company helping businesses grow through website development, mobile app development, SEO, digital marketing, and custom software solutions.",

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

  const GA_ID = "G-L80EQW5H77";
  return (
    <html
  lang="en"
  className={`${inter.variable} ${bricolage.variable} ${calligraffitti.variable} ${geist.variable} ${sfPro.variable}`}
>

        <head>
  <meta name="p:domain_verify" content="78a39d68eed68b972d42bd531d8ffd25" />

  {/* Open Graph */}

<meta
  property="og:title"
  content="Athratech | Digital Solutions & IT Services"
/>

<meta
  property="og:description"
  content="Build, grow and scale your business with website, mobile app, UI/UX, software, ERP, CRM, SEO and digital marketing solutions."
/>

<meta
  property="og:image"
  content="https://res.cloudinary.com/ddcy9noqo/image/upload/v1775279365/AthraWhiteLogo_n1xlnv.png"
/>

<meta
  property="og:url"
  content="https://www.athratech.com/"
/>

<meta
  property="og:type"
  content="website"
/>

<meta
  property="og:site_name"
  content="Athratech"
/>
      </head>

      <body className="relative bg-[#FFFFFF] antialiased mt-[107px] ">
         <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NHP7QT3L');
          `}
        </Script>




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
    gtag('config', '${GA_ID}', {
      page_path: window.location.pathname,
    });
  `}
        </Script>


        {/* Athratech schema */}

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.athratech.com/#organization",
      name: "Athratech",
      url: "https://www.athratech.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1775279365/AthraWhiteLogo_n1xlnv.png",
      },
      description:
        "Athratech is an IT services company providing website development, mobile app development, SEO, digital marketing, UI/UX design, and custom software solutions.",
    }),
  }}
/>

        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="lazyOnload">
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


        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NHP7QT3L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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