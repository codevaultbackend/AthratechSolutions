
const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.athratech.com/#organization",
      "name": "Athratech",
      "legalName": "Athratech Pvt. Ltd.",
      "url": "https://www.athratech.com/",
      "description": "Athratech is a digital marketing agency in Gurgaon offering SEO, Google Ads, web development and AI search optimization to help businesses generate qualified leads. ",
      "slogan": "Building digital experiences that move your brand forward",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/ddcy9noqo/image/upload/v1775279365/AthraWhiteLogo_n1xlnv.png"
      },
      "image": "https://res.cloudinary.com/ddcy9noqo/image/upload/v1775279365/AthraWhiteLogo_n1xlnv.png",
      "telephone": "+919266688954",
      "email": "office.athratech@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tower B2, Unit 244A, Spaze iTech Park, Sector 49",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122018",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Gurugram"
        },
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919266688954",
        "email": "office.athratech@gmail.com",
        "contactType": "sales",
        "url": "https://www.athratech.com/contact-us"
      },
      "knowsAbout": [
        "UI/UX design",
        "Website design",
        "Mobile app design",
        "Brand design and identity",
        "Frontend development",
        "Backend development",
        "SEO",
        "Google Ads",
        "Digital marketing",
        "AI search optimization",
        "AEO",
        "GEO"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Athratech Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UI/UX Design",
              "url": "https://www.athratech.com/services/ui-ux-design",
              "description": "Athratech is a UI/UX design agency in Gurgaon offering website design, mobile app UI/UX, wireframing and scalable design systems for businesses. "
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Frontend & Backend Development",
              "url": "https://www.athratech.com/services/frontend-backend-development",
              "description": "Frontend and backend development services including custom websites, web applications, CRM, ERP and SaaS solutions."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Marketing",
              "url": "https://www.athratech.com/services/marketing",
              "description": "Digital marketing services including SEO, Google Ads, PPC, social media marketing, performance marketing and lead generation."
            }
          }
        ]
      },
      "sameAs": [
        "https://www.linkedin.com/company/athratech-private-limited/",
        "https://www.instagram.com/athratech_official/",
        "https://www.facebook.com/profile.php?id=61584218076871",
        "https://x.com/Athratech_IT"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.athratech.com/#website",
      "url": "https://www.athratech.com/",
      "name": "Athratech",
      "inLanguage": "en-IN",
      "publisher": {
        "@id": "https://www.athratech.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.athratech.com/#webpage",
      "url": "https://www.athratech.com/",
      "name": "Athratech | SEO & Digital Marketing Company in Gurgaon",
      "description": "Athratech is a Gurgaon digital marketing agency. We help businesses get more qualified leads with SEO, Google Ads, web development and AI search (AEO/GEO).",
      "isPartOf": {
        "@id": "https://www.athratech.com/#website"
      },
      "about": {
        "@id": "https://www.athratech.com/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.athratech.com/#faq",
      "isPartOf": {
        "@id": "https://www.athratech.com/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to request work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can request work by contacting us through our website or scheduling a call. We'll guide you through the process step by step."
          }
        },
        {
          "@type": "Question",
          "name": "What if I don't get the results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We iterate until expectations are met. Our focus is delivering measurable impact, not just visuals."
          }
        },
        {
          "@type": "Question",
          "name": "What's your speed of delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timelines depend on project scope, but most projects begin within 48 hours and deliver in clear milestones."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any refunds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Refunds depend on project stage. We believe in transparency and fairness in all engagements."
          }
        },
        {
          "@type": "Question",
          "name": "Athratech's workflow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our workflow includes discovery, analysis, design, iteration, and delivery, keeping you involved at every stage."
          }
        }
      ]
    }
  ]
}


export default homepageSchema;
