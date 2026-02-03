"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      full_name: data.get("full_name"),
      email: data.get("email"),
      phone: data.get("phone"),
      company_name: data.get("budget"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("https://athratech.onrender.com/api/form/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#fff] py-[120px] px-4 relative z-[999]">
      <div className="max-w-[1100px] mx-auto">
        {/* ===== Header ===== */}
        <div className="text-center mb-[64px]">
          <p className="font-bricolage  text-[#191919] font-[600] text-[36px] mb-2">
            Need a reply fast? 🚀
          </p>
          <h2 className="font-bricolage text-[118px] md:text-[56px] font-[600] text-[#111111] leading-[1.1] mb-4">
            Let’s Talk!
          </h2>
          <p className="text-[#343434]  leading-[150%] max-w-[520px] mx-auto text-[15px] md:text-[16px]">
            Share your requirements here or send us an email and we will follow up
            in 24 hrs
          </p>
        </div>

        {/* ===== Form Card ===== */}
        <div className="bg-white rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-14">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[28px]"
          >
            <Input label="Your Name " name="full_name"  />
            <Input label="Your Company" name="budget" />
            <Input label="Email Address" name="email" type="email" />
            <Input label="Phone Number" name="phone" />
            

            <div className="md:col-span-2">
              <Textarea label="Tell us about your project" name="message" />
            </div>

            {/* Status */}
            <div className="md:col-span-2 text-center">
              {success && (
                <p className="text-green-600 text-sm">
                  ✅ Message sent successfully
                </p>
              )}
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center pt-6">
              <button
                type="submit"
                disabled={loading}
                className="group relative rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] shadow-[0px_4px_14.6px_0_#959595] disabled:opacity-60"
              >
                <div className="rounded-full p-[6px] bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)]">
                  <div className="flex items-center gap-4 px-8 py-3 rounded-full bg-black border border-white/80 text-white text-[15px] font-[500]">
                    {loading ? "Sending..." : "Send Message"}
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

/* ===== Reusable Inputs ===== */

function Input({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        required
        className="peer w-full rounded-[14px] bg-[#F4F4F4] border border-[#E1E1E1] px-4 pt-6 pb-2 text-[15px] text-black focus:outline-none focus:border-black"
      />
      <label className="absolute left-4 top-2 text-[12px] text-[#8A8A8A] peer-focus:text-black">
        {label}
      </label>
    </div>
  );
}

function Textarea({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  return (
    <div className="relative">
      <textarea
        name={name}
        rows={5}
        required
        className="peer w-full rounded-[18px] border bg-[#F4F4F4] border-[#E1E1E1] px-4 pt-6 pb-2 text-[15px] text-black resize-none focus:outline-none focus:border-black"
      />
      <label className="absolute left-4 top-2 text-[12px] text-[#8A8A8A] peer-focus:text-black">
        {label}
      </label>
    </div>
  );
}
