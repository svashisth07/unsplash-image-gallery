import { Link as RouterLink, LinkProps } from "react-router";

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <RouterLink
      className={`text-slate-600 hover:text-slate-900 ${className}`}
      {...props}
    >
      {children}
    </RouterLink>
  );
};
