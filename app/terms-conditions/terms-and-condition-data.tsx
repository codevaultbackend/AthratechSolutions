import { Subtitles } from "lucide-react";

export const termsConditionData = {
    title: "Terms and Conditions",

    lastUpdated: "June 2026",

    intro: [
        'These Terms and Conditions ("Terms") constitute a legally binding agreement between Athratech Pvt. Ltd., a company incorporated under the Companies Act, 2013, with its registered office at  Unit No. 244 A, Tower B2, Spaze I Tech Park, Tower, Sohna - Gurgaon Rd, Block S, Sector 49, Gurugram, Haryana 122018. ("Company", "we", "us", "our") and the individual or entity accessing our website [www.athratech.com] (the "Website") or engaging our services comprising web development, mobile application development, UI/UX design, digital marketing, paid advertising campaign management, website hosting, and maintenance (collectively, the "Services") ("Client", "you", "your").By accessing the Website, submitting an enquiry, accepting a proposal, or signing a Statement of Work, you agree to be bound by these Terms in their entirety.If you are entering into these Terms on behalf of an entity, you represent that you have the authority to bind that entity.'
    ],

    sections: [
        {
            id: "definitions",
            title: "DEFINATIONS AND INTERPRETATION",
            content: [
                {
                    type: "bullet",
                    items: [
                        '"Agreement" means, collectively, these Terms together with any applicable Statement of Work ("SOW"), proposal, quotation, or Master Service Agreement ("MSA") executed between the parties',
                        '"Deliverables" means all websites, applications, source code, designs, marketing assets, reports, and other work product created by the Company under an Agreement',
                        '"Confidential Information" has the meaning given in Section 14',
                        '"Intellectual Property Rights" means all patents, copyrights, trademarks, trade secrets, database rights, and other proprietary rights, whether registered or unregistered, anywhere in the world',
                        '"Force Majeure Event" has the meaning given in Section 19',
                        '"Effective Date" means the date on which the Client accepts a proposal, SOW, or these Terms, whichever is earliest'
                    ]
                }
            ]
        },
        {
            id: "engagement-process",
            title: "ENGAGEMENT PROCESS AND STATEMENT OF WORK",
            des: "Each Project shall be governed by a written SOW, proposal, or quotation specifying the scope of work, timeline, deliverables, assumptions, exclusions, and pricing. In the event of any conflict between these Terms and a specific SOW, the SOW shall prevail solely with respect to the matters it expressly addresses, and these Terms shall govern all other matters.",

            content: [
                {
                    type: "group",
                    title: "CHANGE REQUESTS",
                    items: [
                        "Any modification to the agreed scope after commencement of work shall be treated as a 'Change Request'. The Company shall provide a revised quotation and timeline for the Client's written approval before implementing the Change Request. Verbal change requests will not be actioned without written (including email) confirmation.",
                    ]
                },

                {
                    type: "group",
                    title: "PROJECT TIMELINES",
                    items: [
                        "Estimated timelines specified in an SOW are based on the Client providing timely feedback, approvals, and required materials. Delays caused by the Client (including delayed content, feedback, or approvals) shall extend the project timeline proportionately and shall not constitute a breach by the Company."
                    ]
                },
            ]
        },

        {
            id: "fees",
            title: "FEES, PAYMENT TERMS AND TAXES",
            content: [
                {
                    type: "group",
                    title: "PRICING",
                    items: [
                        "All fees quoted are exclusive of applicable Goods and Services Tax (GST), or other applicable taxes/duties (including VAT, sales tax, or withholding tax for international Clients), which shall be charged additionally as per prevailing rates, unless the quotation explicitly states otherwise."
                    ]
                },
                {
                    type: "group",
                    title: "PAYMENT SCHEDULE",
                    items: [
                        "Project-based engagements: Payment milestones shall be specified in the SOW (e.g., 30% advance, 40% at mid-delivery, 30% on completion/go-live)",
                        "Retainer-based engagements (e.g., ongoing digital marketing or maintenance): Fees are billed in advance on a monthly or quarterly basis as agreed",
                        "Hosting fees: Billed in advance on an annual or monthly basis as specified in the SOW"
                    ]
                },
                {
                    type: "group",
                    title: "ADVERTISING AND THIRD-PARTY SPEND",
                    items: [
                        "Advertising budgets for paid campaigns (e.g., Google Ads, Meta Ads spend) are separate and distinct from the Company's management/service fees. Such advertising spend shall be funded directly by the Client to the respective advertising platform unless the parties have separately agreed to a pass-through billing arrangement, in which case applicable handling charges may apply."
                    ]
                },
                {
                    type: "group",
                    title: "INTERNATIONAL PAYMENTS",
                    items: [
                        "For Clients outside India, payments shall be made in the currency specified in the SOW (typically USD, GBP, or EUR), via wire transfer, international card payment, or other mutually agreed method. The Client shall bear all bank charges, currency conversion fees, and applicable withholding taxes unless otherwise agreed in writing."
                    ]
                },
                {
                    type: "group",
                    title: "LATE PAYMENTS",
                    items: [
                        "Invoices not settled within 7 days of the due date shall accrue interest at 1.5% per month (or the maximum rate permitted by applicable law, if lower) on the outstanding balance. The Company reserves the right to suspend Services, including hosting, where payment remains overdue beyond 15 days, without liability for any resulting downtime or data loss."
                    ]
                },
                {
                    type: "group",
                    title: "REFUND AND CANCELLATIONS",
                    items: [
                        "Refund and cancellation terms are governed by our separate Refund & Cancellation Policy, which forms part of this Agreement by reference."
                    ]
                }
            ]
        },

        {
            id: "obligation",
            title: "CLIENT OBLIGATIONS",
            content: [
                {
                    type: "group",
                    title: "The Client shall:",
                    items: [
                        "Provide complete, accurate, and timely content, brand assets, access credentials, and feedback required for the Company to perform the Services",
                        "Designate an authorised point of contact with the authority to approve deliverables, sign off on milestones, and request changes",
                        "Warrant that all content, trademarks, logos, images, and materials supplied to the Company are either owned by the Client or properly licensed, and do not infringe the Intellectual Property Rights, privacy rights, or other rights of any third party",
                        "Obtain all necessary consents from end-users for any data processing activities conducted through applications or websites developed by the Company, where the Client is the Data Controller",
                        "Make payments in accordance with the agreed schedule",
                        "• Review and provide feedback on Deliverables within the timeframe specified in the SOW (or, if unspecified, within 5 business days) from the date the Company provides notice of delivery via the agreed project management tool, email, or client portal with a timestamped record of such notice; failure to respond within this period shall be deemed approval of the Deliverable",
                        "Comply with all applicable laws in its use of the Deliverables, including but not limited to data protection, consumer protection, advertising standards, and industry-specific regulations (e.g., RBI guidelines for fintech, healthcare data regulations for medical applications)"
                    ]
                },
            ]
        },
        {
            id: "intellectual-property",
            title: "INTELLECTUAL PROPERTY RIGHTS",
            content: [
                {
                    type: "subTitle",
                    value: "PRE EXISTING IP"
                },
                {
                    type: "text",
                    value:
                        "Each party retains ownership of its respective Intellectual Property Rights existing prior to the engagement ('Background IP'). The Company's Background IP includes, without limitation, proprietary frameworks, code libraries, design templates, tools, and methodologies developed independently of any specific Client engagement."
                },

                {
                    type: "subTitle",
                    value: "CLIENT MATERIALS"
                },
                {
                    type: "text",
                    value:
                        "All content, trademarks, logos, and materials provided by the Client ('Client Materials') remain the exclusive property of the Client. The Client grants the Company a limited, non-exclusive licence to use Client Materials solely for the purpose of performing the Services."
                },

                {
                    type: "subTitle",
                    value: "DELIVERABLES AND ASSIGNMENT OF RIGHTS"
                },
                {
                    type: "text",
                    value:
                        "Subject to full and final payment of all fees due under the applicable SOW, the Company assigns to the Client all right, title, and interest in the final Deliverables specifically created for that Client (including custom source code, design files, and content created during the engagement), excluding:"
                },
                {
                    type: "bullet",
                    items: [
                        "The Company's Background IP, including reusable frameworks, boilerplate code, design systems, and internal tools, for which the Company grants the Client a perpetual, royalty-free, non-exclusive licence to use solely in connection with the Deliverables.",
                        "Third-party and open-source components, which remain subject to their respective licences (e.g., MIT, Apache 2.0, GPL).",
                        "Stock photography, fonts, or icon libraries used under licence, which remain subject to the terms of the original licensor."
                    ]
                },

                {
                    type: "subTitle",
                    value: "PORTFOLIO AND MARKETING RIGHTS"
                },
                {
                    type: "text",
                    value:
                        "Unless the Client requests confidentiality in writing prior to project completion, the Company reserves the right to display the Project (including screenshots, descriptions, and outcome metrics) in its portfolio, case studies, website, and marketing materials, and to identify the Client as a reference customer."
                },

                {
                    type: "subTitle",
                    value: "MORAL RIGHTS"
                },
                {
                    type: "text",
                    value:
                        "To the extent permitted by applicable law, the Company waives any moral rights in the Deliverables in favour of the Client upon full payment, save for the right to be identified as the original developer for portfolio purposes."
                }
            ]
        },

        {
            id: "hosting",
            title: "HOSTING SERVICES - SPECIFIC TERMS",
            content: [
                {
                    type: "bullet",
                    items:
                        ["Hosting Services are provided subject to the service level, uptime guarantees, and acceptable use policies of the underlying infrastructure provider (e.g., AWS, Google Cloud, Render, Hostinger). The Company does not independently guarantee any specific uptime percentage beyond what is offered by the underlying provider",
                            "The Client is responsible for timely renewal of domain registrations and hosting subscriptions; the Company shall provide renewal reminders on a best-efforts basis but is not liable for service interruption due to the Client's failure to renew",
                            "The Company shall provide reasonable advance notice of planned maintenance windows that may cause temporary downtime",
                            "The Company maintains regular backups as specified in the SOW, but the Client is strongly advised to maintain independent backups of critical data",
                            "The Company is not liable for data loss, security incidents, or downtime arising from Distributed Denial of Service (DDoS) attacks, third-party platform outages, or Force Majeure Events"]
                }
            ]
        },
        {
            id: "hosting",
            title: "MAINTENANCE SERVICES - SPECIFIC TERMS",
            content: [
                {
                    type: "bullet",
                    items:
                        ["Maintenance packages cover bug fixes arising from the Company's original development work, security patches, and minor content updates, as specified in the applicable SOW",
                            "Major feature additions, redesigns, or third-party integrations not covered under the original scope shall be quoted and billed separately as new Change Requests",
                            "Response and resolution times for support tickets shall be as specified in the applicable Service Level Agreement (SLA), if any; in the absence of a specific SLA, the Company shall use commercially reasonable efforts to respond within 2 business days for non-critical issues and within 24 hours for critical/production-down issues"]
                }
            ]
        },
        ,
        {
            id: "digital-marketing",
            title: "DIGITAL MARKETING AND PAID ADVERTISING - SPECIFIC TERMS",
            content: [
                {
                    type: "bullet",
                    items:
                        ["The Company does not guarantee specific search engine rankings, traffic volumes, lead counts, conversion rates, or return on advertising spend (ROAS), as performance outcomes depend on factors outside the Company's control, including platform algorithm changes, market competition, seasonality, and the Client's own conversion infrastructure (e.g., website, sales process)",
                            "The Client must grant the Company appropriate access to relevant advertising and analytics accounts (Google Ads, Meta Business Manager, Google Analytics, Search Console, etc.) for the Company to perform campaign management Services",
                            "All advertising campaigns shall comply with the respective advertising platform's policies; the Company shall not be liable for account suspensions or ad disapprovals resulting from the Client's business model, products, or claims being non-compliant with platform policies",
                            "Performance reports shall be shared at the frequency specified in the SOW (typically weekly or monthly)",
                            "The Client warrants that all claims, offers, and content used in advertising campaigns comply with applicable advertising standards and consumer protection laws in the target jurisdiction"
                        ]
                }
            ]
        },
        {
            id: "warranties",
            title: "WARRANTIES",

            content: [
                {
                    type: "subTitle",
                    value: "COMPANY WARRANTIES"
                },
                {
                    type: "text",
                    value:
                        "The Company warrants that:"
                },
                {
                    type: "bullet",
                    items: [
                        "It has the necessary skill, expertise, and resources to perform the Services in a professional and workmanlike manner consistent with generally accepted industry standards",
                        "The Deliverables, as originally delivered, will be free from material defects for a warranty period of thirty (30) days from the date of final acceptance or go-live, during which the Company will remedy any such defects at no additional cost."
                    ]
                },

                {
                    type: "subTitle",
                    value: "WARRANTIES EXCLUSIONS"
                },
                {
                    type: "text",
                    value:
                        "The warranty in Section 10.1 does not extend to defects arising from:"
                },
                {
                    type: "bullet",
                    items: [
                        "◦Modifications made by the Client or third parties not authorised by the Company",
                        "Third-party plugin, library, or platform updates occurring after delivery",
                        "Misuse, negligence, or failure to follow documentation provided by the Company",
                        "Hosting environment changes not implemented by the Company",
                        "New feature requests, which are treated as new Change Requests"
                    ]
                },

                {
                    type: "subTitle",
                    value: "DISCLAIMER OF OTHER WARRANTIES"
                },
                {
                    type: "text",
                    value:
                        'EXCEPT AS EXPRESSLY SET OUT IN THIS SECTION 10, THE SERVICES AND DELIVERABLES ARE PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.'
                }
            ]
        },
        {
            id: "limitation-liability",
            title: "LIMITATION OF LIABILITY",

            content: [
                {
                    type: "subTitle",
                    value: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:"
                },

                {
                    type: "bullet",
                    items: [
                        "The Company's aggregate liability arising out of or relating to any Agreement, whether in contract, tort, indemnification, or otherwise, shall not exceed the total fees paid by the Client to the Company under the specific SOW giving rise to the claim during the 12 months preceding the event giving rise to liability. For clarity, this cap applies to, and is not superseded by, the indemnification obligations set out in Section 12, except for claims arising from the Client's breach of Section 6 (Intellectual Property Rights) using materials not approved by the Company, which shall remain uncapped",

                        "In no event shall the Company be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, including without limitation loss of profits, loss of revenue, loss of data, loss of business opportunity, or reputational harm, even if advised of the possibility of such damages",

                        "The Company shall not be liable for any acts, omissions, downtime, security incidents, policy changes, or service discontinuation by third-party platforms (including but not limited to hosting providers, payment gateways, advertising platforms, app stores, or API providers) that are beyond the Company's reasonable control",

                        "Nothing in this Agreement shall limit or exclude liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be lawfully limited or excluded under applicable law",
                    ]
                }
            ]
        },
        {
            id: "indemification",
            title: "INDEMNIFICATION",
            content: [
                {
                    type: "subTitle",
                    value: "CLIENT INDEMNIFICATION"
                },
                {
                    type: "text",
                    value:
                        "The Client shall indemnify, defend, and hold harmless the Company, its directors, employees, and contractors from and against any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from: (a) Client Materials infringing the Intellectual Property Rights or other rights of any third party; (b) the Client's breach of these Terms or applicable law; (c) the Client's use of the Deliverables in a manner not authorised under this Agreement; or (d) any claims by the Client's end-users or customers relating to the Client's products or services."
                },
                {
                    type: "subTitle",
                    value: "COMPANY INDEMNIFICATION"
                },
                {
                    type: "text",
                    value:
                        "The Company shall indemnify, defend, and hold harmless the Client from and against any claims arising from a finding that the Deliverables, as originally created by the Company (excluding Client Materials and third-party components), infringe a third party's registered Intellectual Property Rights, provided that the Client promptly notifies the Company of such claim and cooperates in its defence."
                },
            ]
        },
        {
            id: "data-protection",
            title: "DATA PROTECTION",
            content: [

                {
                    type: "text",
                    value:
                        '"Confidential Information" means any non-public business, technical, financial, or operational information disclosed by either party, whether marked confidential or that would reasonably be understood to be confidential given the nature of the information and circumstances of disclosure. Each party agrees to:'
                },
                {
                    type: "bullet",
                    items: [
                        "Use the other party's Confidential Information solely for the purpose of performing its obligations under this Agreement",
                        "Not disclose Confidential Information to any third party except to employees, contractors, or sub-processors on a need-to-know basis and under equivalent confidentiality obligations",
                        "Protect Confidential Information using at least the same degree of care it uses to protect its own confidential information, and no less than a reasonable degree of care"
                    ]
                },
                {
                    type: "text",
                    value:
                        "This obligation shall survive termination or expiry of the Agreement for a period of [3] years, except for trade secrets, which shall remain protected for as long as they retain trade secret status under applicable law. Confidential Information does not include information that: (a) is or becomes publicly available through no fault of the receiving party; (b) was rightfully known prior to disclosure; (c) is independently developed without use of the disclosing party's Confidential Information; or (d) is required to be disclosed by law or court order, provided the receiving party gives prompt notice where legally permissible."
                },
            ]
        },
        {
            id: "terms-and-termination",
            title: "TERMS AND TERMINATIONS",

            content: [
                {
                    type: "subTitle",
                    value: "TERM"
                },
                {
                    type: "text",
                    value:
                        "This Agreement commences on the Effective Date and continues until completion of the Services specified in the applicable SOW, or until terminated earlier in accordance with this Section."
                },

                {
                    type: "subTitle",
                    value: "TERMINATION OF CONVENIENCE"
                },
                {
                    type: "text",
                    value:
                        "Either party may terminate an ongoing engagement (particularly retainer-based engagements such as maintenance or digital marketing) by providing [30] days' prior written notice to the other party."
                },

                {
                    type: "subTitle",
                    value: "TERMINATION OF CAUSE"
                },
                {
                    type: "bullet",
                    items: [
                        "The Client shall pay for all Services rendered and Deliverables provided up to the effective date of termination, including any committed third-party costs (e.g., pre-paid advertising spend, hosting fees already remitted to providers)",
                        "Upon receipt of full payment for work completed, the Company shall provide the Client with all Deliverables completed as of the termination date",
                        "Sections of this Agreement which by their nature should survive termination (including Sections 6, 10, 11, 12, 14, and 17) shall continue to apply after termination",
                        "Within 30 days of termination, the Company shall revoke its own access to, and return or delete (at the Client's election), all server credentials, API keys, access tokens, and administrative access to the Client's systems held in connection with the Services, and shall provide written confirmation to the Client once such access has been revoked"
                    ]
                },

                {
                    type: "subTitle",
                    value: "EFFECT OF TERMINATION"
                },
                {
                    type: "bullet",
                    items: [
                        "The Client shall pay for all Services performed, Deliverables completed, and approved third-party costs incurred up to the effective date of termination.",
                        "Upon receipt of all outstanding payments, the Company shall provide the Client with completed Deliverables and project materials that have been paid for as of the termination date.",
                        "Sections relating to Intellectual Property Rights, Confidentiality, Limitation of Liability, Indemnification, Data Protection, Governing Law, and any other provisions intended to survive termination shall remain in full force and effect.",
                        "Within thirty (30) days following termination, the Company shall, upon request and subject to applicable legal retention requirements, return or securely delete Client credentials, access tokens, and confidential information held solely for the purpose of providing the Services."
                    ]
                }
            ]
        }
        ,
        {
            id: "sub-contracting",
            title: "SUB - CONTRACTING",
            content: [
                {
                    type: "text",
                    value:
                        "The Company may engage sub-contractors, freelancers, or specialist partners to perform parts of the Services, provided that the Company remains responsible for the performance of such sub-contracted work as if performed directly by the Company, and ensures such sub-contractors are bound by confidentiality and data protection obligations consistent with this Agreement."
                }
            ]
        },

        {
            id: "governing-law",
            title: "GOVERNING LAW AND DISPUTE RESOLUTION",
            content: [
                {
                    type: "subTitle",
                    value: "GOVERNING LAW"
                },
                {
                    type: "text",
                    value:
                        "This Agreement shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles."
                },

                {
                    type: "subTitle",
                    value: "DISPUTE RESOLUTION"
                },
                {
                    type: "text",
                    value:
                        "In the event of any dispute, controversy, or claim arising out of or relating to this Agreement, the parties shall first attempt to resolve the matter through good-faith negotiation between authorised representatives within 15 days of written notice of the dispute.If the dispute is not resolved through negotiation, it shall be referred to and finally resolved by arbitration administered under the Arbitration and Conciliation Act, 1996, by a sole arbitrator mutually appointed by the parties.The seat and venue of arbitration shall be [City, State], India, and the proceedings shall be conducted in the English language.The arbitral award shall be final and binding on the parties."
                },

                {
                    type: "subTitle",
                    value: "INTERNATIONAL CLIENTS"
                },
                {
                    type: "text",
                    value:
                        "For Clients based outside India who require an alternative dispute resolution mechanism (e.g., under the rules of the International Chamber of Commerce or Singapore International Arbitration Centre), such alternative mechanism may be agreed in writing in the applicable SOW, failing which Section 17.2 shall apply by default."
                },

                {
                    type: "subTitle",
                    value: "INJUNCTIVE RELIEF"
                },
                {
                    type: "text",
                    value:
                        "Notwithstanding the foregoing, either party may seek injunctive or other equitable relief from a court of competent jurisdiction to prevent actual or threatened infringement of Intellectual Property Rights or breach of confidentiality obligations."
                }
            ]
        },

        {
            id: "compliance-with-laws",
            title: "COMPLIANCE WITH LAWS",
            content: [
                {
                    type: "text",
                    value:
                        "Each party shall comply with all applicable laws, rules, and regulations in connection with its performance under this Agreement, including but not limited to data protection laws, anti-bribery and anti-corruption laws, export control regulations, and consumer protection laws applicable in the relevant jurisdiction(s) of operation."
                }
            ]
        },

        {
            id: "force-majeure",
            title: "FORCE MAJEURE",
            content: [
                {
                    type: "text",
                    value:
                        "Neither party shall be liable for any failure or delay in performance under this Agreement to the extent such failure or delay is caused by a Force Majeure Event, being any event beyond the reasonable control of the affected party, including but not limited to acts of God, natural disasters, pandemics, epidemics, war, terrorism, civil unrest, governmental action, internet or telecommunications failures, or failures of third-party platforms or infrastructure providers. The affected party shall promptly notify the other party and use reasonable efforts to mitigate the impact of the Force Majeure Event."
                }
            ]
        },

        {
            id: "independent-contractor",
            title: "INDEPENDENT CONTRACTOR RELATIONSHIP",
            content: [
                {
                    type: "text",
                    value:
                        "The relationship between the Company and the Client is that of independent contractors. Nothing in this Agreement shall be construed to create a partnership, joint venture, agency, or employment relationship between the parties."
                }
            ]
        },

        {
            id: "assignment",
            title: "ASSIGNMENT",
            content: [
                {
                    type: "text",
                    value:
                        "The Client may not assign or transfer this Agreement, in whole or in part, without the prior written consent of the Company, which shall not be unreasonably withheld. The Company may assign this Agreement in connection with a merger, acquisition, or sale of substantially all of its assets, provided the assignee agrees to be bound by the terms of this Agreement."
                }
            ]
        },

        {
            id: "notices",
            title: "NOTICES",
            content: [
                {
                    type: "text",
                    value:
                        "All formal notices under this Agreement shall be in writing and delivered by email (with read receipt or confirmation of delivery) or registered post to the addresses specified in the applicable SOW or as otherwise notified by the parties in writing."
                }
            ]
        },

        {
            id: "entire-agreement",
            title: "ENTIRE AGREEMENT",
            content: [
                {
                    type: "text",
                    value:
                        "This Agreement, together with any applicable SOW, constitutes the entire agreement between the parties relating to its subject matter and supersedes all prior agreements, representations, and understandings, whether written or oral, except for any separate Non-Disclosure Agreement (NDA) executed prior to this Agreement, which shall continue in effect."
                }
            ]
        },

        {
            id: "severability",
            title: "SEVERABILITY",
            content: [
                {
                    type: "text",
                    value:
                        "If any provision of this Agreement is held to be invalid, illegal, or unenforceable by a court or tribunal of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, severed, and the remaining provisions of this Agreement shall continue in full force and effect."
                }
            ]
        },

        {
            id: "waiver",
            title: "WAIVER",
            content: [
                {
                    type: "text",
                    value:
                        "No failure or delay by either party in exercising any right under this Agreement shall constitute a waiver of that right, nor shall any single or partial exercise of any right preclude any other or further exercise of that right."
                }
            ]
        },

        {
            id: "amendments",
            title: "AMENDMENTS",
            content: [
                {
                    type: "text",
                    value:
                        "The Company reserves the right to update these Terms from time to time. Material changes will be communicated to active Clients via email at least 15 days prior to taking effect. Continued use of the Services after such changes take effect constitutes acceptance of the revised Terms. Changes shall not retroactively alter the terms of an already-signed SOW without mutual written consent."
                }
            ]
        },

        {
            id: "contact-information",
            title: "CONTACT INFORMATION",
            content: [
                {
                    type: "text",
                    value:
                        "For any questions regarding these Terms and Conditions, please contact:"
                },
                {
                    type: "group",
                    title: "Athratech Pvt. Ltd.",
                    items: [
                        "Address: Tower B1, Unit No. - 470B Spaze Itech Park, Sector 49, Sohna Road, Gurugram, Haryana 122018",
                        "Email: office.athratech@gmail.com",
                        "Phone: +91 9266688954",
                        "GSTIN: 06ABECA1123A1ZM",
                        "CIN: U62013HR2025PTC138108"
                    ]
                }
            ]
        }


    ]
};