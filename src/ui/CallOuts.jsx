function CallOuts({ children, className, border }) {
  return (
    <div
      className={`   absolute  text-slate-700 bg-slate-50 flex justify-center items-center px-2 rounded-md ${className} `}
    >
      {children}s
      <div
        className={`  absolute rotate-90 -bottom-4 left-4 border-solid ${border} border-l-8 border-y-transparent border-y-8 border-r-0  `}
      ></div>
    </div>
  );
}

export default CallOuts;
