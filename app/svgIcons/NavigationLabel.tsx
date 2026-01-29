type Props = {
    className?: string;
};

export default function NavigationLabel({ className }: Props) {
    return (
        <svg
            viewBox="0 0 215 31"
            className={className}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path d="M0 0H215C215 0 204.618 5.68333 203.02 16.0167C201.818 23.7861 195.036 31 187.174 31H27.7675C19.0715 31 12.2683 23.0956 11.1901 14.4667C10.028 5.16667 0 0 0 0Z" />
        </svg>
    );
}
