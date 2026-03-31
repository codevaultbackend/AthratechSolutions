"use client";

import Image from "next/image";

type Testimonial = {
    id: number;
    quote: string;
    name: string;
    role: string;
    avatar?: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote:
            "Maverick Minds simplified our product flows, delivered a sleek design, and made the experience far more intuitive. Since launch, engagement is up and feedback has been excellent — they truly elevated our vision",
        name: "Vijaya",
        role: "Founder & CTO, Tamarisk",
    },
    {
        id: 2,
        quote:
            "Maverick Minds transformed how we use data. They built clear dashboards, revealed hidden patterns, and turned complex information into actionable steps. Their insights improved our campaigns, boosted sales, and gave us confidence to make smarter decisions.",
        name: "Vijaya",
        role: "Founder & CTO, Tamarisk",
    },
    {
        id: 3,
        quote:
            "Their design expertise helped us deliver a product that feels modern, clean, and effortless to use. The improvements in user experience directly boosted engagement, and customer feedback has been overwhelmingly positive.",
        name: "Vijaya",
        role: "Founder & CTO, Tamarisk",
    },
    {
        id: 4,
        quote:
            "Maverick Minds completely transformed our app’s user experience. Instead of just giving it a fresh look, they focused on how people actually interact with the product. They identified pain points, simplified the flow, and delivered a design that feels modern, intuitive, and effortless to use. Since launch, we’ve seen higher retention and far more positive feedback from our customers.",
        name: "Vijaya",
        role: "Founder & CTO, Tamarisk",
    },
    {
        id: 5,
        quote:
            "The design team simplified our product flow and created a clean, modern interface. Since launch, customers find it easier to use, retention has improved, and feedback has been consistently positive.",
        name: "Vijaya",
        role: "Founder & CTO, Tamarisk",
    },
    {
        id: 6,
        quote:
            "Working with Maverick Minds has been an outstanding experience. Their expertise across design, development, and marketing gave us an edge. We now have a reliable partner who truly cares about results.",
        name: "Vijaya",
        role: "Founder & CTO, Tamarisk",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="bg-[#EFEFEF]  px-4 py-[70px] sm:px-6 md:px-8 lg:px-10 xl:px-0">
            <div className="mx-auto max-w-[1280px] mx-auto">
                <div className="text-center mb-12">
                    <p className="font-calligraffitti text-[#7A7A7A] mb-2 flex gap-4 items-center justify-center text-[24px] font-[400]">
                        <span className="inline-block w-[124px] h-[1px] bg-[linear-gradient(231deg,__#9C9C9C_42%,_#DFDFDF)] "></span>
                        Testimonials <span className="inline-block w-[124px] h-[1px] bg-[linear-gradient(152deg,__#9C9C9C_42%,_#DFDFDF)] "></span></p>

                    <h2 className="text-[28px] sm:text-[40px] font-semibold font-bricolage">
                        Fresh insights & ideas 
                        <br className="hidden sm:block" /> from the team.
                    </h2>
                </div>
                {/* mobile */}
                <div className="grid grid-cols-1 gap-5 md:hidden">
                    {testimonials.map((item) => (
                        <TestimonialCard key={item.id} item={item} className="min-h-[250px]" />
                    ))}
                </div>

                {/* tablet */}
                <div className="hidden grid-cols-2 gap-6 md:grid xl:hidden">
                    <TestimonialCard item={testimonials[0]} className="min-h-[274px]" />
                    <TestimonialCard item={testimonials[1]} className="min-h-[323px]" />
                    <TestimonialCard item={testimonials[2]} className="min-h-[274px]" />
                    <TestimonialCard item={testimonials[3]} className="min-h-[323px]" />
                    <TestimonialCard item={testimonials[4]} className="min-h-[274px]" />
                    <TestimonialCard item={testimonials[5]} className="min-h-[323px]" />
                </div>

                {/* desktop exact zig-zag formation */}
                <div className="hidden xl:grid xl:grid-cols-3 xl:gap-x-[44px] xl:gap-y-[2px]">
                    {/* row 1 */}
                    <TestimonialCard item={testimonials[0]} className="h-[274px]" />
                    <TestimonialCard item={testimonials[1]} className="h-[323px]" />
                    <TestimonialCard item={testimonials[2]} className="h-[274px]" />

                    {/* row 2 */}
                    <TestimonialCard item={testimonials[3]} className="h-[323px] -mt-[10px]" />
                    <TestimonialCard item={testimonials[4]} className="h-[274px] mt-[52px]" />
                    <TestimonialCard item={testimonials[5]} className="h-[323px] -mt-[10px]" />
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({
    item,
    className = "",
}: {
    item: Testimonial;
    className?: string;
}) {
    return (
        <article
            className={`flex w-full flex-col rounded-[34px] border border-[#DCDCDC] bg-[#F8F8F8] px-[30px] pb-[28px] pt-[28px] shadow-[0px_20px_45px_rgba(0,0,0,0.10)] ${className}`}
        >
            <div className="flex-1">
                <p className="font-bricolage text-[15px] font-[400] leading-[1.28] tracking-[-0.03em] text-[#8B8B8B] sm:text-[16px] lg:text-[15px] xl:text-[16px]">
                    “{item.quote}”
                </p>
            </div>

            <div className="mt-[30px] flex items-center gap-[20px]">
                <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full bg-[#D9D9D9]">
                    {item.avatar ? (
                        <Image
                            src={item.avatar}
                            alt={item.name}
                            fill
                            className="object-cover"
                        />
                    ) : null}
                </div>

                <div className="min-w-0">
                    <h3 className="truncate font-bricolage text-[24px] font-[500] leading-[100%] tracking-[0] text-[#000000]">
                        {item.name}
                    </h3>
                    <p className="mt-[8px] truncate font-bricolage text-[18px] font-[500] leading-[1.1] tracking-[0] text-[#8B8B8B]">
                        {item.role}
                    </p>
                </div>
            </div>
        </article>
    );
}

/* ===== Stat Component ===== */
function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div className="mb-[44px]">
            <p className="font-bricolage text-[72px] font-[700] leading-[100%] text-[#FFFFFF] max-[768px]:text-[60px]">
                {value}
            </p>
            <p className="font-bricolage text-[16px] font-[400] text-[#FFFFFF]">
                {label}
            </p>
        </div>
    );
}