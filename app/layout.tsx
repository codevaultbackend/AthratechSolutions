import type { Metadata } from "next";
import Script from "next/script";


import "./global.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";

import TopNavigation from "./Component/topNavigation";
import Footer from "./Component/Footer";

import {
  inter,
  calligraffitti,
  bricolage,
  geist,
} from "./fonts";


import { BlogsProvider } from "./context/BlogsContext";
import { ServicesProvider } from "./context/ServicesContext";






const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.athratech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Digital Marketing & SEO Agency in Gurgaon | Athratech",
    template: "%s | AthraTech",
  },

  description:
    "AthraTech delivers website development, UI/UX design, and digital marketing solutions for businesses.",

    robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Global Open Graph metadata
  openGraph: {
    title: "Digital Marketing & SEO Agency in Gurgaon | Athratech",
    description:
      "Athratech delivers website development, UI/UX design, and digital marketing solutions for businesses.",
    siteName: "Athratech",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Athratech Digital Marketing and Web Development",
      },
    ],
  },

  // Global Twitter/X metadata
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & SEO Agency in Gurgaon | Athratech",
    description:
      "Athratech delivers website development, UI/UX design, and digital marketing solutions for businesses.",
    images: ["/og-image.jpg"],
  },

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
  className={`${inter.variable} ${bricolage.variable} ${calligraffitti.variable} ${geist.variable}`}
>

        <head>
  <meta name="p:domain_verify" content="78a39d68eed68b972d42bd531d8ffd25" />

  {/* Open Graph */}

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