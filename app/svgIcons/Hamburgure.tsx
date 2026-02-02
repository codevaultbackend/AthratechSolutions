type Props = {
  className?: string;
};

export default function Hamburgure({ className }: Props) {
  return (
    <svg width="34" height="12" viewBox="0 0 34 12" className={className}
      fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <line x1="8" y1="1" x2="33" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="1" y1="11" x2="25" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>

  );
}
