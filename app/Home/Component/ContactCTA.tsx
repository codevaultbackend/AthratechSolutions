"use client";

import ArrowTop2 from "@/app/svgIcons/ArrowTop2";
import Image from "next/image";
import Link from "next/link";

type ContactCTAProps = {
    image: string;
};

export default function ContactCTA({
    image,
}: ContactCTAProps) {
    return (
        <section
            id="contactcta"
            className="
                relative
                flex
                items-center
                justify-center
                overflow-hidden
                py-10
            "
        >

            <div
                className="
                    w-full
                    max-w-[1440px]
                    lg:h-[470px]
                    border
                    border-[#CDCDCD]
                    bg-white
                    rounded-[24px]
                    md:rounded-[40px]
                    p-5
                    sm:p-8
                    flex
                    flex-col
                    max-[768px]:flex-col-reverse
                    lg:flex-row
                    items-start
                    justify-between
                    gap-8
                    lg:gap-12
                "
            >

                {/* LEFT CONTENT */}
                <div
                    className="
                        relative
                        z-10
                        w-full
                        lg:max-w-fit
                        lg:mt-[60px]
                    "
                >

                    <h2
                        className="
                            text-black
                            font-bricolage
                            font-[600]
                            leading-[1.05]
                            text-[32px]
                            sm:text-[40px]
                            lg:text-[48px]
                            text-left
                        "
                    >
                        We’ll reply in 24hrs
                    </h2>


                    <p
                        className="
                            text-[#2B2B2B]
                            font-[400]
                            text-[14px]
                            sm:text-[16px]
                            mt-5
                            mb-6
                            sm:my-8
                            text-left
                        "
                    >
                        only 3 slots left for new projects
                    </p>


                    <Link href="/contact-us">
                        <div className="w-full sm:w-fit">

                            <div
                                className="
                                    relative
                                    rounded-full
                                    bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)]
                                    shadow-[0px_4px_14.6px_0_#959595]
                                "
                            >

                                <div
                                    className="
                                        rounded-full
                                        p-[6px]
                                        bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)]
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-center
                                            gap-4
                                            px-5
                                            py-3
                                            rounded-full
                                            bg-black
                                            border-[0.5px]
                                            border-white
                                            w-full
                                            sm:w-auto
                                        "
                                    >

                                        <h3
                                            className="
                                                text-white
                                                text-[15px]
                                                sm:text-[16px]
                                                font-[500]
                                                whitespace-nowrap
                                            "
                                        >
                                            Let’s Talk
                                        </h3>

                                        <div className="flex -space-x-3">
                                            {[
                                                "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg",
                                                "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero1_CpKdYK8kd.jpg",
                                                "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero_NaRzEsvqk.jpg",
                                                "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg"
                                            ].map((src, i) => (
                                                <div
                                                    key={i}
                                                    className="
                                                        w-[24px]
                                                        h-[24px]
                                                        sm:w-[26px]
                                                        sm:h-[26px]
                                                        rounded-full
                                                        overflow-hidden
                                                    "
                                                >
                                                    <Image
                                                        src={src}
                                                        alt="avatar"
                                                        width={56}
                                                        height={56}
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </Link>


                    <div
                        className="
                            hidden
                            lg:block
                            absolute
                            left-[20%]
                            top-[128%]
                        "
                    >
                        <p
                            className="
                                text-[24px]
                                text-[#888888]
                                italic
                                leading-relaxed
                                font-calligraffitti
                            "
                        >
                            We get booked fast 🚀
                            <br />
                            contact us now
                        </p>

                        <ArrowTop2
                            className="
                                !absolute
                                !left-[-40%]
                                top-[-52px]
                            "
                        />

                    </div>

                </div>



                {/* IMAGE FROM PROP */}
                <div
                    className="
        relative
        flex
        w-full
        items-center
        justify-center
        lg:w-1/2
        lg:h-full
        rounded-[28px]
    "
                >

                    <Image
                        src={image}
                        alt="contact-us"
                        width={756}
                        height={539}
                        className="
        w-full
        h-auto

        max-w-[520px]
        lg:max-w-[620px]

        max-h-[300px]
        lg:max-h-[430px]

        object-cover
        rounded-[28px]
    "
                    />

                </div>


            </div>

        </section>
    );
}