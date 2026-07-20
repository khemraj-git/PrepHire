function Button({
  children,
  type = "button",
  onClick,
  className = "",
    disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        
        px-6  //horiontal padding
        py-3  //vertical padding
        rounded-xl  //button rounded
        bg-blue-600
        text-white
        font-semibold
        transition-all
        duration-300
        hover:bg-blue-700
        hover:scale-[1.02]
        active:scale-[0.98]
        shadow-md
        cursor-pointer
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;