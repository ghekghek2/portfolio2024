function Header({ title }) {
  return (
    <div className="  rounded-t-lg bg-slate-700 w-full relative flex  justify-between gap-1 py-2 px-2">
      <div className="text-slate-300 font-semibold">{title}</div>
      <div className="flex gap-1">
        <div className="h-5 w-5 bg-rose-500 rounded-full"></div>
        <div className="h-5 w-5 bg-amber-500 rounded-full"></div>
        <div className="h-5 w-5 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
}

export default Header;
