interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "tertiary";
  className?: string;
}

export const Button = ({
  variant,
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyle =
    "px-4 py-2 rounded font-medium text-white transition-colors duration-300 hover:cursor-pointer";
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    tertiary: "bg-transparent border-none bg-none text-black",
  };

  const style = `${baseStyle} ${variantStyles[variant]}`;

  return (
    <button className={`${style} ${className}`} {...props}>
      {children}
    </button>
  );
};
