export type ContentBlock =
    | {
        type: "text";
        value: string;
    }
    | {
        type: "subTitle";
        value: string;
    }
    | {
        type: "bullet";
        items: string[];
    }
    | {
        type: "important";
        value: string;
    }
    | {
        type: "group";
        title: string;
        items: string[];
    }
    | {
        type: "table";
        headers: string[];
        rows: string[][];
    };

export interface PrivacySection {
    id: string;
    title: string;
    subdes?: string;
    content: ContentBlock[];
}

export const privacyPolicyData = {
    title: "PRIVACY POLICY",

    intro: [
        'This Privacy Policy ("Policy") describes how AthraTech Pvt. Ltd., a company incorporated under the laws of India with its registered office at Unit No. 244 A, Tower B2, Spaze I Tech Park, Tower, Sohna - Gurgaon Rd, Block S, Sector 49, Gurugram, Haryana 122018. ("Company", "we", "us", or "our"), collects, uses, processes, discloses, transfers, and protects personal information in connection with our website [www.athratech.com](http://www.athratech.com) (the "Website") and our services comprising web development, mobile application development, UI/UX design, digital marketing, paid advertising campaign management, website hosting, and maintenance (collectively, the "Services"). This Policy applies to visitors of our Website, prospective clients, current clients, employees of clients, end-users of applications we build on behalf of clients, job applicants, and vendors or contractors (collectively, "you" or "Data Subject"). This Policy is designed to comply with the Digital Personal Data Protection Act, 2023 ("DPDPA"), the Information Technology Act, 2000 and its associated rules, the General Data Protection Regulation (EU) 2016/679 ("GDPR"), and the California Consumer Privacy Act as amended by the California Privacy Rights Act ("CCPA/CPRA"), where applicable. By accessing the Website or engaging our Services, you acknowledge that you have read, understood, and agreed to the practices described in this Privacy Policy. If you do not agree with this Policy, you should discontinue use of the Website and refrain from using our Services. This Privacy Policy applies to Website visitors, prospective customers, existing clients, client representatives, application end-users, job applicants, vendors, contractors, and other individuals whose personal information may be processed by us in the course of our business activities.We are committed to protecting your privacy and processing personal information in a transparent, lawful, and secure manner. This Policy explains the types of information we collect, how we use and share that information, the safeguards we apply, and the rights available to you under applicable privacy and data protection laws.'
    ],


    sections: [
        {
            id: "scope",
            title: "SCOPE OF APPLICATION",

            content: [
                {
                    type: "text",
                    value:
                        "This Policy governs all personal data processed by the Company in the course of:"
                },

                {
                    type: "bullet",
                    items: [
                        "Operating the Website, including contact forms, newsletter sign-ups, and live chat widgets",


                        "Delivering contracted Services to Clients, including handling Client-provided data, end-user data within applications we develop, and project-related credentials",

                        "Managing digital marketing and paid advertising campaigns on behalf of Clients, including audience data processed through advertising platforms",

                        "Providing hosting and maintenance services, including server logs, access credentials, and database administration",

                        "Recruitment, vendor onboarding, and B2B partnership communications"


                    ]
                },

                {
                    type: "text",
                    value:
                        "Where the Company acts as a 'Data Processor' or 'Service Provider' (processing personal data on behalf of a Client who determines the purpose and means of processing, e.g. end-user data within a Client's mobile app), a separate Data Processing Agreement (DPA') between the Company and the Client shall govern such processing, and this Policy applies supplementally. Where the Company acts as a 'Data Controller' (e.g., for Website visitors and our own marketing), this Policy applies directly."
                },
            ]
        },

        {
            id: "information",
            title: "INFORMATION WE COLLECT",

            content: [
                {
                    type: "subTitle",
                    value: "INFORMATION WE PROVIDE DIRECTLY"
                },

                {
                    type: "bullet",
                    items: [
                        "Identity Data: Full name, job title, company name, government-issued identifiers (PAN, GSTIN, Aadhaar masked reference) where required for invoicing or compliance",
                        "Contact Data: Email address, phone number, WhatsApp number, billing and shipping address",
                        "Financial Data: Bank account details, UPI ID, payment card tokens (processed via PCI-DSS compliant gateways — we do not store full card numbers), billing history, GST registration details",
                        "Project Data: Business requirements, brand assets, source code, API keys, login credentials, server access tokens, design files, and other materials shared for the purpose of delivering Services",
                        "Communications Data: Emails, call recordings (where consented), meeting notes, chat transcripts, and support tickets",
                        "Recruitment Data: Resume/CV, work history, educational qualifications, and interview notes, for individuals applying to work with us"
                    ]
                },

                {
                    type: "subTitle",
                    value: "INFORMATION COLLECTED AUTOMATICALLY"
                },

                {
                    type: "bullet",
                    items: [
                        "Device and Technical Data: IP address, browser type and version, operating system, device identifiers, screen resolution",
                        "Usage Data: Pages visited, time spent, click patterns, scroll depth, referral source, exit pages",
                        "Location Data: Approximate geographic location derived from IP address (country/city level only, not precise GPS unless separately consented)",
                        "Cookies and Tracking Technologies: As detailed in our separate Cookie Policy",
                    ]
                },

                {
                    type: "subTitle",
                    value: "SPECIAL / SENSITIVE CATEGORIES OF DATA"
                },

                {
                    type: "text",
                    value:
                        "In the course of certain engagements (e.g., healthcare or fintech client projects), we may process sensitive personal data on behalf of Clients, including:"
                },

                {
                    type: "bullet",
                    items: [
                        "Financial information (bank details, transaction history, credit information) for fintech-related projects",
                        "Health-related data for healthcare or wellness application projects",
                        "Biometric data (e.g., fingerprint or facial recognition data) where a Client's application requires such functionality"
                    ]
                },

                {
                    type: "important",
                    value:
                        "Important:  Where we process such sensitive categories of data as a Data Processor on behalf of a Client, the Client remains the Data Controller responsible for obtaining necessary consents from end-users. We process such data strictly per the Client's instructions and the terms of the applicable Data Processing Agreement, and apply enhanced security controls (see Section 8) to such data."
                }
            ]
        },

        {
            id: "legal-basis",
            title: "LEGAL BASIS FOR PROCESSING (GDPR - EEA DATA SUBJECTS)",
            subdes: "Where the GDPR applies, we rely on the following legal bases for processing personal data:",

            content: [
                {
                    type: "bullet",
                    items: [
                        "• Consent: Where you have given clear consent for us to process your data for a specific purpose (e.g., newsletter subscription, marketing cookies)",
                        "• Contractual Necessity: Where processing is necessary to perform a contract with you or take steps prior to entering into a contract (e.g., delivering contracted Services)",
                        "• Legal Obligation: Where processing is necessary to comply with a legal or regulatory obligation (e.g., tax and accounting records)",
                        "• Legitimate Interests: Where processing is necessary for our legitimate business interests (e.g., improving our Services, fraud prevention, B2B business development), provided such interests are not overridden by your rights and freedoms"
                    ]
                }
            ]
        },

        {
            id: "purpose",
            title: "LEGAL BASIS FOR PROCESSING (GDPR - EEA DATA SUBJECTS)",

            content: [
                {
                    type: "group",

                    title: "SERVICE DELIVERY",

                    items: [
                        "• To design, develop, test, deploy, host, and maintain websites and mobile applications as contracted",
                        "• To plan, execute, monitor, and report on digital marketing and paid advertising campaigns",
                        "• To provide technical support, bug fixes, and ongoing maintenance"
                    ]
                },

                {
                    type: "group",

                    title: "BUSINESS OPERATIONS",

                    items: [
                        "• To process payments, generate invoices, and maintain financial and tax records",
                        "• To communicate regarding project status, contractual matters, and service renewals",
                        "• To verify identity and prevent fraud in business transactions"
                    ]
                },

                {
                    type: "group",

                    title: "IMPROVEMENT AND ANALYTICS",

                    items: [
                        "• To analyse Website usage and improve user experience",
                        "• To conduct internal research and development for improving our service offerings",
                    ]
                },

                {
                    type: "group",

                    title: "MARKETING",

                    items: [
                        "• To send newsletters, service updates, and promotional offers, where you have opted in",
                        "• To retarget Website visitors through advertising platforms, subject to cookie consent",
                    ]
                },
                {
                    type: "group",

                    title: "LEGAL AND COMPLIANCES",

                    items: [
                        "• To comply with applicable tax, corporate, labour, and data protection laws",
                        "• To respond to lawful requests from courts, regulators, or government authorities",
                        "• To enforce our Terms and Conditions and protect our legal rights"
                    ]
                }
            ]
        },

        {
            id: "sharing",
            title: "DISCLOSURE AND SHARING OF INFORMATION",

            content: [
                {
                    type: "text",
                    value:
                        "We do not sell personal information for monetary consideration. We may disclose personal information to the following categories of recipients, under appropriate confidentiality and data protection obligations:"
                },

                {
                    type: "group",
                    title: "SUB - PROCESSORS AND SERVICE PROVIDERS",

                    items: [
                        "Cloud infrastructure and hosting providers (e.g., AWS, Google Cloud, Render, Hostinger)",
                        "Database and backend-as-a-service providers (e.g., Supabase)",
                        "Payment processors (e.g., Razorpay, PayU, Stripe, PayPal)",
                        "Analytics providers (e.g., Google Analytics, Microsoft Clarity)",
                        "Email and communication platforms (e.g., Google Workspace, Zoho Mail, WhatsApp Business API)"
                    ]
                },

                {
                    type: "subTitle",
                    value: "SUB-CONTRACTORS AND FREELANCERS"
                },
                {
                    type: "text",
                    value:
                        "We may engage freelance developers, designers, or specialist contractors to deliver specific aspects of a Project. Such individuals are bound by confidentiality agreements and granted access strictly on a need-to-know basis."
                },

                {
                    type: "subTitle",
                    value: "CORPORATE TRANSACTIONS"
                },
                {
                    type: "text",
                    value:
                        "In connection with a merger, acquisition, restructuring, or sale of business assets, personal information may be transferred to the acquiring entity, subject to equivalent confidentiality protections."
                },

                {
                    type: "subTitle",
                    value: "LEGAL AND REGULATORY DISCLOSURES"
                },
                {
                    type: "text",
                    value:
                        "We may disclose personal information where required by law, regulation, legal process, or governmental request, including to tax authorities, law enforcement agencies, or courts of competent jurisdiction."
                },

                {
                    type: "subTitle",
                    value: "MAINTAINING A LIST OF SUB-PROCESSORS"
                },
                {
                    type: "text",
                    value:
                        "A current list of key third-party sub-processors used in connection with our Services is available upon written request to our Data Protection contact (see Section 16)."
                },


            ]
        },

        {
            id: "international-transfer",
            title: "INTERNATIONAL DATA TRANSFER",

            content: [
                {
                    type: "text",
                    value:
                        "As a global technology services provider, we may transfer, store, access, or process personal information in countries outside your country of residence, including countries that may not provide the same level of data protection as your home jurisdiction."
                },

                {
                    type: "text",
                    value:
                        "Such transfers may occur where our employees, affiliates, subcontractors, cloud service providers, hosting providers, or other authorized service providers operate in different jurisdictions."
                },

                {
                    type: "subTitle",
                    value: "SAFEGUARDS FOR INTERNATIONAL TRANSFERS"
                },

                {
                    type: "text",
                    value:
                        "Where required by applicable data protection laws, we implement appropriate safeguards to ensure that personal information transferred internationally remains adequately protected."
                },

                {
                    type: "bullet",
                    items: [
                        "Standard Contractual Clauses (SCCs) approved by the European Commission",
                        "Transfers to countries that benefit from an adequacy decision issued by relevant authorities",
                        "Contractual data protection obligations imposed on service providers and business partners",
                        "Technical and organisational security measures designed to protect personal information during transfer and storage"
                    ]
                },

                {
                    type: "subTitle",
                    value: "TRANSFER RISK MANAGEMENT"
                },

                {
                    type: "bullet",
                    items: [
                        "Assessment of recipient jurisdiction data protection standards",
                        "Vendor due diligence and security reviews",
                        "Encryption of data in transit and at rest where appropriate",
                        "Access controls and monitoring mechanisms",
                        "Periodic review of international transfer arrangements"
                    ]
                },

                {
                    type: "important",
                    value:
                        "Where legally required, we will implement additional safeguards before transferring personal information internationally and will take reasonable steps to ensure transferred information receives an equivalent level of protection."
                }
            ]
        },

        {
            id: "retention",
            title: "DATA RETENTION",

            content: [
                {
                    type: "text",
                    value:
                        "We retain personal information only for as long as necessary to fulfil the purposes described in this Policy, comply with legal obligations, resolve disputes, enforce agreements, and protect our legitimate business interests."
                },

                {
                    type: "text",
                    value:
                        "Retention periods vary depending on the nature of the information, applicable legal requirements, contractual obligations, and operational needs."
                },

                {
                    type: "table",

                    headers: [
                        "Data Category",
                        "Retention Period",
                        "Purpose"
                    ],

                    rows: [
                        [
                            "Client project data (source code, credentials, assets)",
                            "Duration of engagement + 3 years post-completion",
                            "Warranty support, legal defence, contractual obligations"
                        ],

                        [
                            "Billing, invoicing, and tax records",
                            "8 Years",
                            "Indian Income Tax Act & GST record-keeping requirements"
                        ],

                        [
                            "Website analytics data",
                            "26 months (Google Analytics default) or until deletion requested",
                            "Service improvement, legitimate interest"
                        ],

                        [
                            "Marketing/newsletter data",
                            "Until consent withdrawn or 3 years of inactivity",
                            "Consent-based processing"
                        ],

                        [
                            "Recruitment data (unsuccessful applicants)",
                            "1 year from application date",
                            "Legitimate interest, future opportunities"
                        ],

                        [
                            "Cookies and tracking identifiers",
                            "As specified in Cookie Policy (typically 6–24 months)",
                            "Consent-based, browser-session dependent"
                        ],

                        [
                            "End-user data within Client applications",
                            "As instructed by the Client (Data Controller) per the DPA",
                            "Processor obligations under DPA"
                        ]
                    ]
                },

                {
                    type: "text",
                    value:
                        "Upon expiry of the applicable retention period, personal data will be securely deleted or anonymised, unless a longer retention period is required by law or necessary to establish, exercise, or defend legal claims."
                },
            ]
        },

        {
            id: "security",
            title: "DATA SECURITY MEASURES",

            content: [
                {
                    type: "text",
                    value:
                        "We implement a layered, risk-based security framework appropriate to the sensitivity of the data processed, including"
                },

                {
                    type: "group",
                    title: "TECHNICAL SAFEGUARDS",

                    items: [
                        "TLS 1.2+ encryption for all data in transit across our Website and applications",
                        "AES-256 encryption for sensitive data at rest, where supported by our infrastructure providers",
                        "Role-based access control (RBAC) restricting data access strictly on a need-to-know basis",
                        "Multi-factor authentication (MFA) for administrative and production system access",
                        "Regular vulnerability assessments and dependency security scanning",
                        "Secure secrets management for API keys, credentials, and tokens (never committed to source control)"
                    ]
                },

                {
                    type: "group",
                    title: "ORGANISATIONAL SAFEGUARDS",

                    items: [
                        "Mandatory confidentiality and data protection agreements for all employees, contractors, and freelancers",
                        "Periodic data protection awareness training for personnel handling Client or end-user data",
                        "Documented incident response and breach notification procedures",
                        "Vendor due diligence prior to onboarding new sub-processors",
                    ]
                },
                {
                    type: "subTitle",
                    value: "ENHANCED CONTROLS FOR SENSITIVE DATA"
                },
                {
                    type: "text",
                    value:
                        "For engagements involving financial, health, or biometric data categories, we apply additional controls including data minimisation, pseudonymisation where feasible, restricted environment access, and enhanced audit logging."
                },

                {
                    type: "important",
                    value:
                        "Disclaimer:  While we apply industry-standard security measures, no system can guarantee absolute security. In the unlikely event of a data breach materially affecting your personal information, we will notify affected individuals and relevant regulatory authorities within the timeframes prescribed by applicable law (72 hours under GDPR; as prescribed under DPDPA rules)."
                }
            ]
        },

        {
            id: "cookies",
            title: "COOKIES AND TRACKING TECHNOLOGIES",

            content: [
                {
                    type: "text",
                    value:
                        "Our Website uses cookies, web beacons, and similar tracking technologies. Full details, including the categories of cookies used, their purpose, duration, and how to manage your preferences, are set out in our separate Cookie Policy, which forms part of this Privacy Policy by reference."
                },
            ]
        },

        {
            id: "children",
            title: "CHILDREN'S POLICY",

            content: [
                {
                    type: "text",
                    value:
                        "Our Website and Services are intended for business use by individuals who are at least 18 years of age. We do not knowingly collect personal data from children. Where our Clients build applications intended for use by minors (e.g., EdTech platforms), the Client, as Data Controller, is responsible for ensuring compliance with applicable children's privacy laws (such as COPPA in the US, or relevant provisions under DPDPA and GDPR), and we will implement technical measures as instructed by the Client's DPA to support such compliance."
                },
                {
                    type: "title",
                    value: "YOUR RIGHTS"
                },
                {
                    type: "subTitle",
                    value: "RIGHTS UNDER DPDPA (INDIA)"
                },
                {
                    type: "bullet",
                    items: [
                        "Right to access information about personal data processed and the processing activities",
                        "Right to correction and completion of inaccurate or incomplete personal data",
                        "Right to erasure of personal data once the purpose of processing is no longer being served",
                        "Right to grievance redressal through our designated Grievance Officer",
                        "Right to nominate another individual to exercise rights on your behalf in case of death or incapacity"
                    ]
                },
                {
                    type: "subTitle",
                    value: "RIGHTS UNDER GDPR (EEA DATA SUBJECTS)"
                },
                {
                    type: "bullet",
                    items: [
                        "Right of access to your personal data (Article 15)",
                        "Right to rectification of inaccurate data (Article 16)",
                        "Right to erasure / 'right to be forgotten' (Article 17)",
                        "Right to restriction of processing (Article 18)",
                        "Right to data portability (Article 20)",
                        "Right to object to processing based on legitimate interests or for direct marketing (Article 21)",
                        "Right to withdraw consent at any time, without affecting the lawfulness of processing prior to withdrawal",
                        "Right to lodge a complaint with your local Data Protection Authority"
                    ]
                },
                {
                    type: "text",
                    value:
                        "To exercise any of the above rights, please submit a verifiable request via the contact details in Section 16. We will respond within the timeframe required under applicable law (30 days under DPDPA/GDPR in most cases; 45 days under CCPA, extendable as permitted)."
                }

            ]
        }
        ,

        {
            id: "automated",
            title: "AUTOMATED DECISION - MAKING AND PROFILING",

            content: [
                {
                    type: "text",
                    value:
                        "We do not use your personal data for automated decision-making that produces legal or similarly significant effects concerning you, except where explicitly required for fraud detection in payment processing, which is conducted by our payment gateway partners under their own published policies."
                },

            ]
        },

        {
            id: "third-party",
            title: "THIRD - PARTY LINKS AND INTEGRATIONS",
            content: [
                {
                    type: "text",
                    value:
                        "Our Website and the applications we develop for Clients may contain links to, or integrations with, third-party websites, plugins, or services (e.g., social media login, payment gateways, map services). We are not responsible for the privacy practices of such third parties, and we encourage you to review their respective privacy policies."
                }
            ]
        },

        {
            id: "dpia",
            title: "DATA PROTECTION IMPACT ASSESSMENTS",

            content: [
                {
                    type: "text",
                    value:
                        "For engagements involving high-risk processing activities (e.g., large-scale processing of sensitive categories of data, systematic monitoring, or new technologies), we support Clients, where contracted to do so, in conducting Data Protection Impact Assessments (DPIAs) as required under GDPR Article 35 or equivalent provisions under applicable law."
                },
            ]
        },

        {
            id: "changes",
            title: "CHANGES TO THIS PRIVACY POLICY",
            content: [
                {
                    type: "text",
                    value:
                        "We may update this Policy periodically to reflect changes in our practices, technologies, legal, or regulatory requirements. Material changes will be notified via email (where we hold your contact details) or through a prominent notice on our Website at least 15 days prior to the change taking effect, except where immediate change is required by law. The 'Last Updated' date at the top of this Policy reflects the most recent revision."
                }
            ]
        },

        {
            id: "grievance",
            title: "GRIEVANCE OFFICER / DATA PROTECTION CONTENT",

            content: [
                {
                    type: "text",
                    value:
                        "In accordance with the Information Technology Act, 2000, the DPDPA, and as a contact point for GDPR/CCPA-related queries, we have designated the following Grievance Officer / Data Protection Contact:"
                },

                {
                    type: "group",
                    title: "CONTACT DETAILS",

                    items: [
                        "Name: Shivanshi Gupta",
                        "Designation: HR Manager",
                        "Organisation: AthraTech Pvt. Ltd.",
                        "Address: Tower B1, Unit No. - 470B Spaze Itech Park, Sector 49, Sohna Road, Gurugram, Haryana 122018",
                        "Email: office.athratech@gmail.com",
                        "Phone: +91 9266688954",
                        "Website: www.athratech.com",
                        "Response Timeline: We aim to acknowledge grievances within 48 hours and resolve them within 30 days, in accordance with applicable law."

                    ]
                },

            ]
        },

        {
            id: "authority",
            title: "SUPERVISORY AUTHORITY (EEA DATA SUBJECTS)",

            content: [
                {
                    type: "text",
                    value:
                        "If you are based in the EEA and believe your data protection rights have been violated, you have the right to lodge a complaint with your local Data Protection Authority, in addition to contacting us directly."
                },
            ]
        },

        {
            id: "governing-law",
            title: "GOVERNING LAW",

            content: [
                {
                    type: "text",
                    value:
                        "This Privacy Policy shall be governed by and interpreted in accordance with the laws of India, without prejudice to any mandatory rights you may have under the GDPR (if you are located in the EEA) or the CCPA/CPRA (if you are a California resident), which shall apply concurrently to the extent legally required."
                },
            ]
        }

    ]
};