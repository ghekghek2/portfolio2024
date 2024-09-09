function Button({ children, className, icon, type, onClick, classIcon }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={` flex items-center gap-2 font-semibold  text-slate-50 dark:text-slate-300 px-4 py-2  tracking-widest rounded-md ${className}`}
    >
      {children} <span className={classIcon}>{icon}</span>
    </button>
  );
}

export default Button;
