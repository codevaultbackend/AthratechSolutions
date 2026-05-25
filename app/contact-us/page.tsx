"use client";

import { useState } from "react";

const avatars = ["https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg", "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero1_CpKdYK8kd.jpg", "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero_NaRzEsvqk.jpg", "https://ik.imagekit.io/j4xu3pewo/fast_response_assets/contactHero2_eKVVHgfGm.jpg"];

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
      full_name: String(data.get("full_name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      company_name: String(data.get("company_name") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    try {
      const res = await fetch("https://athratech.onrender.com/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      setSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden  ">
      

      <div className="relative mx-auto max-w-[1080px] px-4 sm:px-6 lg:px-8 z-[999]">
       

        {/* header */}
        <div className="mx-auto max-w-[760px] max-[600px]:mt-[42px] pb-10 pt-10 text-center md:pb-14 md:pt-[84px]">
          <div className="mb-4 flex justify-center -space-x-1 md:mb-5 md:-space-x-3">
            {avatars.map((src, i) => (
              <div
                key={i}
                className="h-8 w-8 overflow-hidden rounded-[80px] border-2 border-[#F3F3F3] shadow-sm md:h-[51px] md:w-[48px]"
              >
                <img
                  src={src}
                  alt={`Contact avatar ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <p className="font-bricolage text-[18px] font-semibold leading-none tracking-[-0.03em] text-[#191919] md:text-[34px] max-[600px]:mt-[22px]">
            Need a reply fast? 🚀
          </p>

          <h2 className="font-bricolage mt-2 text-[56px] font-semibold leading-[0.92] tracking-[-0.055em] text-[#111111] md:mt-3 md:text-[108px] lg:text-[118px] max-[600px]:mt-[22px]">
            Let’s Talk!
          </h2>

          <p className="mx-auto mt-4 max-w-[570px] text-[24px] leading-[150%] font-[400] text-[#4A4A4A] md:mt-6 md:text-[18px] md:leading-[1.5] font-inter max-[600px]:mt-[22px] max-[768px]:mb-[68px]">
            Share your requirements here or send us an email and we will follow up in 24 hrs
          </p>
        </div>

        {/* form */}
        <div className="mx-auto max-w-[780px] pb-[50px] md:pb-[50px]">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 md:gap-y-8"
          >
            <Field
              label="Name"
              name="full_name"
              placeholder="Max Mullet"
              autoComplete="name"
            />

            <Field
              label="Company Name"
              name="company_name"
              placeholder="MaverickMinds"
              autoComplete="organization"
              required={false}
            />

            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="Max@gmail.com"
              autoComplete="email"
            />

            <Field
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+91"
              autoComplete="tel"
            />

            <div className="md:col-span-2">
              <TextAreaField
                label="Project Description"
                name="message"
                placeholder="We need to launch Maverickmind’s new UI and improve usability on key user flows such as climate, health and orbital escape velocity..."
              />
            </div>

            <div className="md:col-span-2 flex justify-stretch md:justify-end">
              <div className="md:col-span-2 flex justify-center ">
              <button
                type="submit"
                disabled={loading}
                className="group relative rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_rgba(180,180,180,0.25),_rgba(120,120,120,0.15),_transparent_70%)] shadow-[0px_4px_14.6px_0_#959595] disabled:opacity-60 ml-auto"
              >
                <div className="rounded-full p-[6px] bg-[linear-gradient(175deg,#F5F5F5,#BDBDBD,#8F8F8F,#666666)]">
                  <div className="flex items-center gap-4 px-8 py-3 rounded-full bg-black border border-white/80 text-white text-[15px] font-[500]">
                    {loading ? "Sending..." : "Continue"}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </button>
            </div>
            </div>

            <div className="md:col-span-2 min-h-[22px]">
              {success ? (
                <p className="text-sm text-green-600">Message sent successfully.</p>
              ) : null}
              {!success && error ? (
                <p className="text-sm text-red-500">{error}</p>
              ) : null}
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  autoComplete,
  required = true,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-[14px] font-medium leading-none text-[#2A2A2A] md:mb-4 md:text-[15px]">
        {label}
      </span>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="h-[54px] w-full rounded-[16px] border border-transparent bg-[#ECECEC] px-4 text-[14px] text-[#161616] outline-none placeholder:text-[#B7B7B7] focus:border-[#1A1A1A] md:h-[68px] md:rounded-[22px] md:px-7 md:text-[18px]"
      />
    </label>
  );
}

function TextAreaField({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-[14px] font-medium leading-none text-[#2A2A2A] md:mb-4 md:text-[15px]">
        {label}
      </span>

      <textarea
        name={name}
        placeholder={placeholder}
        required
        rows={5}
        className="h-[92px] w-full resize-none rounded-[16px] border border-transparent bg-[#ECECEC] px-4 py-4 text-[13px] leading-[1.65] text-[#161616] outline-none placeholder:text-[#B7B7B7] focus:border-[#1A1A1A] md:h-[174px] md:rounded-[22px] md:px-7 md:py-7 md:text-[18px]"
      />
    </label>
  );
}