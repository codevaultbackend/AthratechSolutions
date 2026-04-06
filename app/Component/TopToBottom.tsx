"use client";

type DottedPerspectiveTopToBottomProps = {
  className?: string;
};

export function DottedPerspectiveTopToBottom({
  className = "",
}: DottedPerspectiveTopToBottomProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 [perspective:1200px]">
        <div
          className="
            absolute left-1/2 top-[-10%]
            h-[145%] w-[145%]
            -translate-x-1/2
            [transform:rotateX(72deg)]
            opacity-100
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(120,120,120,0.32) 1.35px, transparent 1.35px)",
            backgroundSize: "38px 38px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 26%, rgba(0,0,0,0.42) 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 26%, rgba(0,0,0,0.42) 60%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}