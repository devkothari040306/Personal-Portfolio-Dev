import React from "react";

const Button = ({
  text,
  icon: Icon,
  styles = "",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-lg
        bg-[#82E8EB]
        px-5 py-3
        font-poppins
        text-sm
        font-semibold
        text-primary
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-lg
        hover:shadow-teal-400/30
        active:scale-95
        focus:outline-none
        focus:ring-2
        focus:ring-[#82E8EB]
        focus:ring-offset-2
        focus:ring-offset-primary
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${styles}
      `}
      {...props}
    >
      {Icon && <Icon size={18} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;