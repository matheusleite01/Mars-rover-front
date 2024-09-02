import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

const Button = ({ children, disabled = false }: ButtonProps) => {
  return (
    <button
      className={`${
        disabled && "cursor-not-allowed"
      } font-Plus text-white font-bold bg-gradient-custom p-4 rounded-xl w-60 self-center hover:-translate-y-1 transition-all`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
