function DarkBtn() {
  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  return <button onClick={toggleTheme}>dark</button>;
}

export default DarkBtn;
