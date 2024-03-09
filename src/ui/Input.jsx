function Input({ type, name, label }) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        className=" w-full border border-slate-400  bg-slate-100 p-2 rounded-md focus:outline-slate-500"
      />
    </>
  );
}

export default Input;
