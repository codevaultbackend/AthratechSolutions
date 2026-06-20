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
        'This Privacy Policy ("Policy") describes how AthraTech Pvt. Ltd., a company incorporated under the laws of India with its registered office at [Your Registered Address] ("Company", "we", "us", or "our"), collects, uses, processes, discloses, transfers, and protects personal information in connection with our website [www.athratech.com](http://www.athratech.com) (the "Website") and our services comprising web development, mobile application development, UI/UX design, digital marketing, paid advertising campaign management, website hosting, and maintenance (collectively, the "Services").',

        'This Policy applies to visitors of our Website, prospective clients, current clients, employees of clients, end-users of applications we build on behalf of clients, job applicants, and vendors or contractors (collectively, "you" or "Data Subject"). This Policy is designed to comply with the Digital Personal Data Protection Act, 2023 ("DPDPA"), the Information Technology Act, 2000 and its associated rules, the General Data Protection Regulation (EU) 2016/679 ("GDPR"), and the California Consumer Privacy Act as amended by the California Privacy Rights Act ("CCPA/CPRA"), where applicable.',

        'By accessing the Website or engaging our Services, you acknowledge that you have read, understood, and agreed to the practices described in this Privacy Policy. If you do not agree with this Policy, you should discontinue use of the Website and refrain from using our Services.',

        'This Privacy Policy applies to Website visitors, prospective customers, existing clients, client representatives, application end-users, job applicants, vendors, contractors, and other individuals whose personal information may be processed by us in the course of our business activities.',

        'We are committed to protecting your privacy and processing personal information in a transparent, lawful, and secure manner. This Policy explains the types of information we collect, how we use and share that information, the safeguards we apply, and the rights available to you under applicable privacy and data protection laws.'
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


                        "Delivering contracted Services to Clients, including handling client-provided data, end-user data within applications we develop, and project-related credentials",

                        "Managing digital marketing and paid advertising campaigns on behalf of Clients, including audience data processed through advertising platforms",

                        "Providing hosting and maintenance services, including server logs, access credentials, database administration, and infrastructure monitoring",

                        "Recruitment activities, vendor onboarding, partnership discussions, and other business communications"


                    ]
                },

                {
                    type: "text",
                    value:
                        'Where the Company acts as a "Data Processor" or "Service Provider" (processing personal data on behalf of a Client who determines the purposes and means of processing), a separate Data Processing Agreement ("DPA") between the Company and the Client shall govern such processing. In such cases, this Privacy Policy applies supplementally. Where the Company acts as a "Data Controller" (for example, in relation to Website visitors, marketing activities, recruitment processes, and direct business communications), this Privacy Policy applies directly.'
                },

                {
                    type: "text",
                    value:
                        "Where the Company acts as a Data Processor, a separate Data Processing Agreement governs such processing."
                }
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
                        "• Contact Data: Email address, phone number, WhatsApp number, billing and shipping address",
                        "• Financial Data: Bank account details, UPI ID, payment card tokens (processed via PCI-DSS compliant gateways — we do not store full card numbers), billing history, GST registration details",
                        "• Project Data: Business requirements, brand assets, source code, API keys, login credentials, server access tokens, design files, and other materials shared for the purpose of delivering Services",
                        "• Communications Data: Emails, call recordings (where consented), meeting notes, chat transcripts, and support tickets",
                        "• Recruitment Data: Resume/CV, work history, educational qualifications, and interview notes, for individuals applying to work with us"
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
                        " Location Data: Approximate geographic location derived from IP address (country/city level only, not precise GPS unless separately consented)",
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
                        "• Financial information (bank details, transaction history, credit information) for fintech-related projects",
                        "• Health-related data for healthcare or wellness application projects",
                        "• Biometric data (e.g., fingerprint or facial recognition data) where a Client's application requires such functionality"
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
                        "D• To design, develop, test, deploy, host, and maintain websites and mobile applications as contracted",
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
                        "We do not sell personal information. However, we may disclose personal data in the following circumstances where necessary to provide Services, comply with legal obligations, protect our rights, or operate our business."
                },

                {
                    type: "group",
                    title: "SERVICE PROVIDERS",

                    items: [
                        "Cloud hosting and infrastructure providers",
                        "Email delivery and communication platforms",
                        "Analytics and performance monitoring providers",
                        "Payment processing partners",
                        "Customer support and CRM systems"
                    ]
                },

                {
                    type: "group",
                    title: "BUSINESS TRANSFERS",

                    items: [
                        "Merger, acquisition, restructuring, or sale of assets",
                        "Corporate due diligence activities",
                        "Transfer of business operations",
                        "Investor and transaction-related reviews"
                    ]
                },

                {
                    type: "group",
                    title: "LEGAL AUTHORITIES",

                    items: [
                        "Compliance with applicable laws and regulations",
                        "Court orders, subpoenas, and legal requests",
                        "Law enforcement investigations",
                        "Protection of legal rights and fraud prevention"
                    ]
                },

                {
                    type: "group",
                    title: "PROFESSIONAL ADVISERS",

                    items: [
                        "Lawyers and legal consultants",
                        "Auditors and accounting professionals",
                        "Tax advisers",
                        "Compliance and risk management consultants"
                    ]
                },

                {
                    type: "group",
                    title: "CLIENT INSTRUCTIONS",

                    items: [
                        "Where we act as a Data Processor",
                        "Processing performed only under Client instructions",
                        "Disclosure governed by applicable Data Processing Agreements",
                        "Support and maintenance activities authorized by Clients"
                    ]
                },

                {
                    type: "important",
                    value:
                        "All third-party recipients are contractually required to implement appropriate security measures and process personal information only for authorized purposes."
                }
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
                            "Client Contracts & Project Documentation",
                            "7 Years",
                            "Legal, contractual and audit requirements"
                        ],

                        [
                            "Financial & Accounting Records",
                            "8 Years",
                            "Tax, accounting and statutory compliance"
                        ],

                        [
                            "Marketing Communications Data",
                            "Until Consent Withdrawal",
                            "Marketing and business communications"
                        ],

                        [
                            "Support Tickets & Customer Communications",
                            "3 Years",
                            "Customer support and dispute resolution"
                        ],

                        [
                            "Website Analytics Data",
                            "24 Months",
                            "Performance monitoring and service improvement"
                        ],

                        [
                            "Server Logs & Security Records",
                            "12 Months",
                            "Security monitoring and fraud prevention"
                        ],

                        [
                            "Recruitment Records",
                            "12 Months After Recruitment Process",
                            "Talent acquisition and compliance purposes"
                        ]
                    ]
                },

                {
                    type: "text",
                    value:
                        "Upon expiry of the applicable retention period, personal information will be securely deleted, anonymised, archived, or otherwise disposed of in accordance with applicable legal, regulatory, and contractual requirements."
                },

                {
                    type: "important",
                    value:
                        "Where litigation, regulatory investigations, legal holds, or contractual obligations require longer retention, relevant information may be retained until such obligations have been fully satisfied."
                }
            ]
        },

        {
            id: "security",
            title: "DATA SECURITY MEASURES",

            content: [
                {
                    type: "text",
                    value:
                        "We implement appropriate technical, organisational, and administrative safeguards designed to protect personal information against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, access, or misuse."
                },

                {
                    type: "group",
                    title: "TECHNICAL SAFEGUARDS",

                    items: [
                        "Encryption of data in transit using secure communication protocols",
                        "Encryption of sensitive information at rest where appropriate",
                        "Role-based access controls and least-privilege access principles",
                        "Multi-factor authentication for administrative systems",
                        "Secure cloud infrastructure and network security controls",
                        "Regular security patching and vulnerability management"
                    ]
                },

                {
                    type: "group",
                    title: "ORGANISATIONAL SAFEGUARDS",

                    items: [
                        "Employee security awareness and privacy training",
                        "Confidentiality obligations for employees and contractors",
                        "Internal information security policies and procedures",
                        "Access reviews and user permission management",
                        "Vendor security assessments and contractual controls",
                        "Documented incident response and escalation procedures"
                    ]
                },

                {
                    type: "group",
                    title: "MONITORING AND INCIDENT RESPONSE",

                    items: [
                        "Continuous monitoring of critical systems",
                        "Security logging and audit trails",
                        "Investigation of suspicious activities and events",
                        "Incident response processes for security events",
                        "Business continuity and disaster recovery measures"
                    ]
                },

                {
                    type: "important",
                    value:
                        "While we employ commercially reasonable security measures, no method of transmission over the Internet or electronic storage system can be guaranteed to be completely secure. Accordingly, we cannot guarantee absolute security of personal information."
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
                        "We use cookies, pixels, tags, web beacons, and similar tracking technologies to enhance the functionality, performance, security, and user experience of our Website."
                },

                {
                    type: "text",
                    value:
                        "Cookies are small text files stored on your device that help us recognise users, remember preferences, understand Website usage patterns, and improve our Services."
                },

                {
                    type: "group",
                    title: "TYPES OF COOKIES WE USE",

                    items: [
                        "Essential Cookies – Required for core Website functionality and security",
                        "Performance Cookies – Help us understand Website usage and improve performance",
                        "Analytics Cookies – Collect aggregated information about visitor behaviour",
                        "Functional Cookies – Remember preferences and enhance user experience",
                        "Marketing Cookies – Support advertising, remarketing, and campaign measurement activities"
                    ]
                },

                {
                    type: "group",
                    title: "ANALYTICS AND TRACKING TECHNOLOGIES",

                    items: [
                        "Website traffic and visitor analytics",
                        "Performance monitoring and troubleshooting",
                        "User experience optimisation",
                        "Campaign effectiveness measurement",
                        "Fraud detection and security monitoring"
                    ]
                },

                {
                    type: "text",
                    value:
                        "Most web browsers allow you to manage, disable, or delete cookies through browser settings. However, disabling certain cookies may impact the functionality and performance of the Website."
                },

                {
                    type: "important",
                    value:
                        "Where required by applicable law, we obtain your consent before placing non-essential cookies or similar tracking technologies on your device. You may withdraw or modify your cookie preferences at any time."
                }
            ]
        },

        {
            id: "children",
            title: "CHILDREN'S POLICY",

            content: [
                {
                    type: "text",
                    value:
                        "Our Website and Services are not directed toward, intended for, or knowingly offered to children under the age of 18 years, unless otherwise expressly stated for a specific service."
                },

                {
                    type: "text",
                    value:
                        "We do not knowingly collect, use, process, or disclose personal information from children without appropriate parental or legal guardian consent where required by applicable law."
                },

                {
                    type: "group",
                    title: "IF INFORMATION IS COLLECTED INADVERTENTLY",

                    items: [
                        "We will take reasonable steps to verify and investigate the situation",
                        "Personal information will be deleted or anonymised where legally permissible",
                        "Further processing will cease unless a lawful basis exists",
                        "Appropriate corrective measures will be implemented to prevent recurrence"
                    ]
                },

                {
                    type: "group",
                    title: "PARENT OR GUARDIAN RIGHTS",

                    items: [
                        "Request access to a child's personal information",
                        "Request correction of inaccurate information",
                        "Request deletion of personal information",
                        "Withdraw previously provided consent where applicable",
                        "Raise privacy concerns regarding a child's information"
                    ]
                },

                {
                    type: "important",
                    value:
                        "If you believe that a child has provided personal information to us without appropriate consent, please contact us immediately. We will take prompt steps to investigate and remove such information where required by applicable law."
                }

            ]
        }
        ,

        {
            id: "rights",
            title: "YOUR RIGHTS",

            content: [
                {
                    type: "bullet",
                    items: [
                        "Right to Access",
                        "Right to Rectification",
                        "Right to Erasure",
                        "Right to Restrict Processing",
                        "Right to Data Portability",
                        "Right to Object",
                        "Right to Withdraw Consent"
                    ]
                }
            ]
        },

        {
            id: "automated",
            title: "AUTOMATED DECISION-MAKING AND PROFILING",

            content: [
                {
                    type: "text",
                    value:
                        "We do not currently engage in automated decision-making, profiling, or similar processing activities that produce legal effects or similarly significant consequences for individuals without meaningful human involvement."
                },

                {
                    type: "text",
                    value:
                        "Any automated tools, analytics systems, machine learning technologies, or artificial intelligence solutions used by us are intended to support operational efficiency, security monitoring, fraud prevention, performance analysis, service improvement, and customer support activities."
                },

                {
                    type: "group",
                    title: "HOW AUTOMATED SYSTEMS MAY BE USED",

                    items: [
                        "Website performance and usage analytics",
                        "Security monitoring and threat detection",
                        "Fraud prevention and risk assessment",
                        "Service optimisation and operational reporting",
                        "Marketing and campaign performance measurement"
                    ]
                },

                {
                    type: "group",
                    title: "NO SIGNIFICANT AUTOMATED DECISIONS",

                    items: [
                        "No automated decisions are made regarding eligibility for services",
                        "No automated decisions are made regarding employment opportunities",
                        "No automated decisions are made that create legal obligations for individuals",
                        "Human review remains involved in material business decisions affecting individuals"
                    ]
                },

                {
                    type: "important",
                    value:
                        "If we introduce automated decision-making or profiling activities that materially affect individuals in the future, we will implement appropriate safeguards, update this Privacy Policy, and provide any notices or rights required under applicable data protection laws."
                }

            ]
        },

        {
            id: "third-party",
            title: "THIRD-PARTY LINKS AND INTEGRATIONS",
            content: [
                {
                    type: "text",
                    value:
                        "Our Website may contain links to third-party services."
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
                        "Where required by applicable data protection laws, we conduct Data Protection Impact Assessments (DPIAs) or similar privacy risk assessments before undertaking processing activities that are likely to result in a high risk to the rights and freedoms of individuals."
                },

                {
                    type: "text",
                    value:
                        "DPIAs help us identify, evaluate, document, and mitigate privacy risks associated with new technologies, products, services, systems, business processes, or large-scale processing activities involving personal information."
                },

                {
                    type: "group",
                    title: "WHEN DPIAS MAY BE CONDUCTED",

                    items: [
                        "Implementation of new technologies or platforms",
                        "Large-scale processing of personal information",
                        "Processing of sensitive or special category data",
                        "Cross-border data transfer arrangements",
                        "Automated processing or profiling activities",
                        "High-risk client projects involving personal data"
                    ]
                },

                {
                    type: "group",
                    title: "DPIA ASSESSMENT AREAS",

                    items: [
                        "Nature, scope, context, and purpose of processing",
                        "Potential impact on individual privacy rights",
                        "Technical and organisational security measures",
                        "Data minimisation and retention requirements",
                        "Third-party and vendor involvement",
                        "Risk mitigation and compliance controls"
                    ]
                },

                {
                    type: "text",
                    value:
                        "Where a DPIA identifies residual high risks that cannot be adequately mitigated, we will consider additional safeguards, modify the processing activity, or seek guidance from relevant supervisory authorities where required by law."
                },

                {
                    type: "important",
                    value:
                        "DPIAs form part of our broader privacy governance framework and support our commitment to accountability, privacy-by-design principles, and compliance with applicable data protection regulations."
                }

            ]
        },

        {
            id: "changes",
            title: "CHANGES TO THIS PRIVACY POLICY",
            content: [
                {
                    type: "text",
                    value:
                        "We may update this Policy periodically."
                }
            ]
        },

        {
            id: "grievance",
            title: "GRIEVANCE OFFICER / DATA PROTECTION CONTACT",

            content: [
                {
                    type: "text",
                    value:
                        "If you have any questions, concerns, complaints, or requests regarding this Privacy Policy, our privacy practices, or the processing of your personal information, you may contact our Grievance Officer or Data Protection Contact using the details provided below."
                },

                {
                    type: "text",
                    value:
                        "We are committed to addressing privacy-related enquiries promptly, fairly, and in accordance with applicable data protection laws."
                },

                {
                    type: "group",
                    title: "CONTACT DETAILS",

                    items: [
                        "Designation: Grievance Officer / Data Protection Officer",
                        "Organisation: AthraTech Pvt. Ltd.",
                        "Email: privacy@athratech.com",
                        "Support Email: support@athratech.com",
                        "Phone: +91 XXXXX XXXXX",
                        "Website: www.athratech.com"
                    ]
                },

                {
                    type: "group",
                    title: "HOW WE HANDLE REQUESTS",

                    items: [
                        "Review and acknowledge privacy-related requests",
                        "Verify identity where necessary",
                        "Investigate complaints and concerns",
                        "Provide updates regarding request status",
                        "Respond within timelines required by applicable law"
                    ]
                },

                {
                    type: "text",
                    value:
                        "Where applicable under the DPDPA, GDPR, CCPA/CPRA, or other relevant privacy laws, individuals may also have the right to lodge a complaint with a competent regulatory or supervisory authority if they are dissatisfied with our response."
                },

                {
                    type: "important",
                    value:
                        "When submitting a privacy request, please provide sufficient information to help us verify your identity and understand the nature of your request. This enables us to process and respond efficiently while protecting personal information from unauthorised disclosure."
                }

            ]
        },

        {
            id: "authority",
            title: "SUPERVISORY AUTHORITY (EEA DATA SUBJECTS)",

            content: [
                {
                    type: "text",
                    value:
                        "If you are located in the European Economic Area (EEA), United Kingdom, or another jurisdiction that grants similar privacy rights, you have the right to lodge a complaint with a competent data protection supervisory authority if you believe that the processing of your personal information violates applicable data protection laws."
                },

                {
                    type: "text",
                    value:
                        "We encourage individuals to contact us first so that we have an opportunity to investigate and address concerns directly. However, you are not required to do so before contacting a supervisory authority."
                },

                {
                    type: "group",
                    title: "YOUR RIGHTS",

                    items: [
                        "Submit a complaint to your local supervisory authority",
                        "Seek information regarding how your personal information is processed",
                        "Request investigation of potential privacy law violations",
                        "Exercise rights granted under applicable data protection regulations",
                        "Pursue available legal remedies where permitted by law"
                    ]
                },

                {
                    type: "group",
                    title: "EEA SUPERVISORY AUTHORITIES",

                    items: [
                        "Complaints may generally be submitted to the authority in your country of residence",
                        "Complaints may be submitted where you work",
                        "Complaints may be submitted where an alleged infringement occurred",
                        "Additional guidance is available through official data protection authority websites"
                    ]
                },

                {
                    type: "text",
                    value:
                        "The exercise of this right does not affect any other administrative, judicial, contractual, or statutory remedies that may be available to you under applicable law."
                },

                {
                    type: "important",
                    value:
                        "We remain committed to cooperating with relevant supervisory authorities and responding promptly to lawful enquiries, investigations, and regulatory requests relating to the protection of personal information."
                }

            ]
        },

        {
            id: "governing-law",
            title: "GOVERNING LAW",

            content: [
                {
                    type: "text",
                    value:
                        "This Privacy Policy shall be governed by, construed, and enforced in accordance with the laws of India, without regard to its conflict of law principles."
                },


                {
                    type: "text",
                    value:
                        "Any dispute, claim, controversy, or proceeding arising out of or relating to this Privacy Policy, the processing of personal information, or the use of our Website and Services shall be subject to the applicable laws and regulations of India."
                },

                {
                    type: "group",
                    title: "JURISDICTION",

                    items: [
                        "Courts located in India shall have jurisdiction over matters relating to this Privacy Policy",
                        "Parties agree to submit to the jurisdiction of competent courts where required by applicable law",
                        "Nothing in this Policy limits statutory rights available under mandatory consumer or data protection laws",
                        "Applicable regulatory authorities may exercise powers granted under relevant legislation"
                    ]
                },

                {
                    type: "group",
                    title: "INTERNATIONAL USERS",

                    items: [
                        "Users accessing the Website from outside India acknowledge that personal information may be processed in India and other jurisdictions",
                        "Applicable local privacy rights remain subject to relevant data protection laws",
                        "Cross-border processing will be conducted in accordance with applicable legal requirements and safeguards",
                        "International transfers are governed by the provisions set out in this Privacy Policy"
                    ]
                },

                {
                    type: "important",
                    value:
                        "If any provision of this Privacy Policy is found to be invalid, unlawful, or unenforceable under applicable law, the remaining provisions shall remain in full force and effect to the maximum extent permitted by law."
                }


            ]
        }

    ]
};