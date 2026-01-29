"use client";

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function GradientButton({
  text,
  onClick,
  className = "",
}: GradientButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-full p-[7px] ${className}`}
      style={{
        background:
          "linear-gradient(181deg, #FFFFFF -43%, #9E9E9E 105%)",
      }}
    >
      {/* Inner Button */}
      <div className="w-[172px] h-[52px] rounded-full bg-black flex items-center justify-center">
        <span className="text-white text-[16px] font-[500]">
          {text}
        </span>
      </div>
    </button>
  );
}
