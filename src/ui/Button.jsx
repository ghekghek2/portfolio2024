function Button({ children, className, icon }) {
  return (
    <button
      className={` flex items-center gap-2 text-slate-50 px-4 py-2 text-2xl tracking-widest rounded-md ${className}`}
    >
      {children} <span>{icon}</span>
    </button>
  );
}

export default Button;
