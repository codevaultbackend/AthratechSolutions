import Link from "next/link";
import NavigationLabel from "../svgIcons/NavigationLabel";
import PrimaryButton from "../Home/Component/PrimaryButton";
import Hamburgure from "../svgIcons/Hamburgure";

export default function TopNavigation() {
    return (
        <header className="relative w-full bg-white overflow-hidden">
            {/* dotted background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e6e6e6_1px,transparent_1px)] bg-[size:18px_18px]" />

            {/* availability pill */}
            {/* availability pill */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 max-w-[215px] w-full">
                <div className="relative flex items-center justify-center gap-2 px-2 py-[11px] text-white text-[12px] font-[400] leading-[100%]">

                    {/* SVG background */}
                    <NavigationLabel className="absolute inset-0 w-full h-full text-[#252525] -z-10" />

                    {/* content */}
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    Available for New Projects
                </div>
            </div>


            {/* navbar container */}
            <div className="relative z-10 mx-auto flex h-[96px] max-w-[1400px] items-center justify-between px-8">
                {/* logo */}
                <Link href="/" className="flex items-center">
                    <img
                        src="/AthraLogo.png"
                        alt="Athratech"
                        className="h-[55px] w-[189px] object-contain"
                    />
                </Link>


                {/* CTA */}
                <div className="flex items-center gap-4">
                    <img src="/ContactUs.png" className="w-[187px] h-[62px] object-cover" alt="contactUs" />

                    {/* mobile menu */}
                    <div className=" text-2xl cursor-pointer leading-none">
                        <img src="/Hamburgure.png" alt="" className="w-[62px] h-[62px] object-cover" />
                    </div>
                </div>
            </div>
        </header>
    );
}
