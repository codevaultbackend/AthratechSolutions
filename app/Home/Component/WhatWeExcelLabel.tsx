import SectionLabel from "./SectionLabel"

export default function WhatWeExcelLabel() {
    return(
        <>
        <div className="relative z-10 mb-12 text-center sm:mb-16 md:mb-20 lg:mb-24 pt-[55px]">
          
          <SectionLabel label="Our Services" />
        
          <h2
            className="
              mx-auto max-w-[320px]
              text-center font-bricolage font-[400]
              text-[28px] leading-[1.1]
              sm:max-w-[450px] sm:text-[38px]
              md:max-w-[600px] md:text-[48px]
              lg:max-w-[720px] lg:text-[48px]
            "
          >
            What we <span className="text-[#8A8A8A]">excel </span> at ?
          </h2>
        </div> 
        </>
    )
}