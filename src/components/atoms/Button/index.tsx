import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="font-Plus text-white font-bold bg-gradient-custom p-4 rounded-xl w-60 self-center hover:-translate-y-1 transition-all">
      {children}
    </button>
  );
};

export default Button;
