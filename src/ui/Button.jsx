function Button({ children, className, icon, type, onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={` flex items-center gap-2 font-semibold  text-slate-50 px-4 py-2  tracking-widest rounded-md ${className}`}
    >
      {children} <span>{icon}</span>
    </button>
  );
}

export default Button;
