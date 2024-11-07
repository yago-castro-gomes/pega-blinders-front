import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`relative flex items-center justify-center h-10 p-4 w-full rounded-2xl border-2 border-transparent bg-primary text-sm font-medium text-black transition-all duration-300 ease-in-out hover:border-primary hover:bg-black hover:text-white ${otherClasses}`}
    >
      {/* Conteúdo do botão */}
      <span className="flex items-center justify-center gap-2">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
