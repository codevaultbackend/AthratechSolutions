type Props = {
  className?: string;
};

export default function Hamburgure({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="92"
      height="92"
      fill="none"
      viewBox="0 0 92 92"
    >
      <g filter="url(#A)">
        <rect
          x="14.6"
          y="10.6"
          width="62"
          height="62"
          rx="31"
          fill="url(#B)"
        />
      </g>

      <rect
        x="21.1"
        y="17.1"
        width="49"
        height="49"
        rx="24.5"
        fill="#000"
      />

      <rect
        x="21.1"
        y="17.1"
        width="49"
        height="49"
        rx="24.5"
        stroke="url(#C)"
      />

      <path
        d="M36.6 35.6h25m-32 10h24"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />

      <defs>
        <filter
          id="A"
          x="0"
          y="0"
          width="91.2"
          height="91.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="A" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="B"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="7.3" />
          <feComposite in2="B" operator="out" />
          <feColorMatrix values="0 0 0 0 0.585487 0 0 0 0 0.585487 0 0 0 0 0.585487 0 0 0 1 0" />
          <feBlend in2="A" />
          <feBlend in="SourceGraphic" />
        </filter>

        <linearGradient
          id="B"
          x1="18.905"
          y1="10.6"
          x2="80.27"
          y2="24.343"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#666" />
        </linearGradient>

        <linearGradient
          id="C"
          x1="63.372"
          y1="-18.015"
          x2="97.838"
          y2="18.508"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset=".48" stopColor="#fff" stopOpacity="0" />
          <stop offset=".913" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
      </defs>
    </svg>
  );
}
