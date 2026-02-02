"use client";

export default function ContactForm() {
  return (
    <section className="bg-[#fff] py-[120px] px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* ===== Header ===== */}
        <div className="text-center mb-[64px]">
          <p className="font-calligraffitti text-[#8A8A8A] text-[20px] mb-2">
            Contact
          </p>
          <h2 className="text-[42px] md:text-[56px] font-[400] text-black leading-[1.1] mb-4">
            Let’s talk about your project
          </h2>
          <p className="text-[#6F6F6F] max-w-[520px] mx-auto text-[15px] md:text-[16px]">
            Tell us a bit about what you’re building and we’ll get back within 24 hours.
          </p>
        </div>

        {/* ===== Form Card ===== */}
        <div className="bg-white rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-14">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[28px]">
            {/* Name */}
            <Input label="Your Name" />

            {/* Email */}
            <Input label="Email Address" type="email" />

            {/* Phone */}
            <Input label="Phone Number" />

            {/* Budget */}
            <Input label="Estimated Budget" />

            {/* Message */}
            <div className="md:col-span-2">
              <Textarea label="Tell us about your project" />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center pt-6">
              <button
                type="submit"
                className="group relative rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] shadow-[0px_4px_14.6px_0_#959595]"
              >
                <div className="rounded-full p-[6px] bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)]">
                  <div className="flex items-center gap-4 px-8 py-3 rounded-full bg-black border border-white/80 text-white text-[15px] font-[500]">
                    Send Message
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ===== Components ===== */

function Input({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        required
        className="
          peer w-full rounded-[14px] border border-[#E1E1E1]
          px-4 pt-6 pb-2 text-[15px] text-black
          focus:outline-none focus:border-black
        "
      />
      <label
        className="
          absolute left-4 top-2 text-[12px] text-[#8A8A8A]
          transition-all
          peer-focus:text-black
        "
      >
        {label}
      </label>
    </div>
  );
}

function Textarea({ label }: { label: string }) {
  return (
    <div className="relative">
      <textarea
        rows={5}
        required
        className="
          peer w-full rounded-[18px] border border-[#E1E1E1]
          px-4 pt-6 pb-2 text-[15px] text-black resize-none
          focus:outline-none focus:border-black
        "
      />
      <label
        className="
          absolute left-4 top-2 text-[12px] text-[#8A8A8A]
          transition-all peer-focus:text-black
        "
      >
        {label}
      </label>
    </div>
  );
}
