type Props = {
    className?: string;
};

export default function Sidebarsimple({ className }: Props) {


    return (
        <svg width="34" height="35" viewBox="0 0 34 35" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_321_14686)">
                <path d="M27.25 7.75H10.75C10.3522 7.75 9.97064 7.90804 9.68934 8.18934C9.40804 8.47064 9.25 8.85218 9.25 9.25V22.75C9.25 23.1478 9.40804 23.5294 9.68934 23.8107C9.97064 24.092 10.3522 24.25 10.75 24.25H27.25C27.6478 24.25 28.0294 24.092 28.3107 23.8107C28.592 23.5294 28.75 23.1478 28.75 22.75V9.25C28.75 8.85218 28.592 8.47064 28.3107 8.18934C28.0294 7.90804 27.6478 7.75 27.25 7.75ZM10.75 9.25H14.5V22.75H10.75V9.25ZM27.25 22.75H16V9.25H27.25V22.75Z" fill="black" />
                <path d="M27.25 7.75H10.75C10.3522 7.75 9.97064 7.90804 9.68934 8.18934C9.40804 8.47064 9.25 8.85218 9.25 9.25V22.75C9.25 23.1478 9.40804 23.5294 9.68934 23.8107C9.97064 24.092 10.3522 24.25 10.75 24.25H27.25C27.6478 24.25 28.0294 24.092 28.3107 23.8107C28.592 23.5294 28.75 23.1478 28.75 22.75V9.25C28.75 8.85218 28.592 8.47064 28.3107 8.18934C28.0294 7.90804 27.6478 7.75 27.25 7.75ZM10.75 9.25H14.5V22.75H10.75V9.25ZM27.25 22.75H16V9.25H27.25V22.75Z" stroke="black" stroke-width="0.5" />
            </g>
            <defs>
                <filter id="filter0_d_321_14686" x="5" y="7.5" width="28" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.221811 0 0 0 0 0.221811 0 0 0 0 0.221811 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_321_14686" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_321_14686" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}
