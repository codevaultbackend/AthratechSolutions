type Props = {
    className?: string;
};

export default function Count1({ className }: Props) {


    return (
        <>
            <svg width="168" height="168" viewBox="0 0 168 168" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="84" cy="84" r="84" fill="#FFF4E9" fillOpacity="0.2" />
                <circle cx="84.5" cy="83.5" r="45.5" fill="#CCCCCC" fillOpacity="0.2" />
                <circle cx="85" cy="84" r="32" fill="black" />
                <path d="M81.3773 94V77.808H78.3372V75.216C79.2973 75.216 80.0973 75.0667 80.7373 74.768C81.3986 74.4693 81.8253 73.84 82.0173 72.88H84.3213V94H81.3773ZM89.8785 94.384C89.1958 94.384 88.6838 94.2347 88.3425 93.936C88.0012 93.6373 87.8305 93.1573 87.8305 92.496C87.8305 91.856 88.0012 91.3867 88.3425 91.088C88.6838 90.7893 89.1958 90.64 89.8785 90.64C90.5825 90.64 91.1052 90.7893 91.4465 91.088C91.8092 91.3867 91.9905 91.8667 91.9905 92.528C91.9905 93.7653 91.2865 94.384 89.8785 94.384Z" fill="white" />
            </svg>


        </>
    )

}
