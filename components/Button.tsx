type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  target?: string;
};

export default function Button({ children, href, className = '', ...props }: ButtonProps) {
  // Mengganti hover:text-cream menjadi hover:text-sand agar teks tetap terlihat jelas dan kontras saat di-hover
  const style = `inline-block px-7 py-2.5 rounded-full border border-green text-[#7A8061] font-medium text-sm tracking-wide transition-all duration-300 hover:bg-[#7A8061] hover:text-sand hover:shadow-md active:scale-95 cursor-pointer ${className}`;

  if (href) {
    return (
      <a href={href} target={props.target} rel="noopener noreferrer" className={style}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={style}>
      {children}
    </button>
  );
}