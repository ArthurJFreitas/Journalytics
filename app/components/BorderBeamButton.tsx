import React from "react";

interface BorderBeamProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  rest?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const BorderBeamButton: React.FC<BorderBeamProps> = ({
  children,
  ...rest
}) => {
  return (
    <div className="cursor-pointer shadow-md mt-2 rainbow w-47.5 relative z-0 overflow-hidden py-0.5 px-px flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
      <button {...rest} className="cursor-pointer px-8 text-sm py-3 text-black  w-full rounded-full font-medium bg-gray-100 backdrop-blur-sm border border-white/30 relative z-10 flex items-center justify-center hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)] transition-all duration-300">
        {children}
      </button>
    </div>
  );
};