function Input({ type, name, label }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        className=" w-full border border-slate-400 dark:border-slate-500  bg-slate-100 dark:bg-transparent p-2 rounded-md focus:outline-slate-500"
      />
    </div>
  );
}

export default Input;
