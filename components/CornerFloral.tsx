export default function CornerFloral({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const rotation = {
    tl: 'rotate-0',
    tr: 'rotate-90 scale-x-[-1]',
    bl: '-rotate-90',
    br: 'rotate-180',
  }[position];

  const placement = {
    tl: 'top-2 left-2',
    tr: 'top-2 right-2',
    bl: 'bottom-2 left-2',
    br: 'bottom-2 right-2',
  }[position];

  return (
    <svg
      viewBox="0 0 60 60"
      className={`absolute w-12 h-12 opacity-60 ${placement} ${rotation}`}
      fill="none"
    >
      <path d="M5 5 Q5 25 25 25 Q5 25 5 45" stroke="#8A9A6E" strokeWidth="1.2" />
      <circle cx="10" cy="10" r="2.5" fill="#B5652E" />
      <circle cx="18" cy="16" r="1.8" fill="#8A9A6E" />
      <circle cx="8" cy="30" r="1.5" fill="#B5652E" />
    </svg>
  );
}