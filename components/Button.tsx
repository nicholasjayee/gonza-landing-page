
import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  className?: string;
}

export const Button = ({ children, variant = 'primary', className = '' }: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-[#A33224] text-white hover:bg-[#8B2B1F]",
    secondary: "bg-[#0040B0] text-white hover:bg-[#003399]",
    outline: "border-2 border-[#A33224] text-[#A33224] hover:bg-[#A33224] hover:text-white"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
