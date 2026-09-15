type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  target?: string;
};

export default function Button({ children, href, className = '', ...props }: ButtonProps) {
  const style = `inline-block px-7 py-2.5 rounded-full border border-terracotta text-terracotta text-sm tracking-wide transition-all duration-200 hover:bg-terracotta hover:text-sand hover:shadow-md active:scale-95 ${className}`;

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