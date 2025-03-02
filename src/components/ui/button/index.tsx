interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

export const Button = ({ variant, children, ...props }: ButtonProps) => {
  const baseStyle =
    "px-4 py-2 rounded font-medium text-white transition-colors duration-300";
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
  };

  const style = `${baseStyle} ${variantStyles[variant]}`;

  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
};
