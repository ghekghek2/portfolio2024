import { useState } from "react";

function Readmore({ collapsedNumWords = 25, className = "", children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleToggle() {
    setIsExpanded((is) => !is);
  }

  const words = children.split(" ");
  const content = isExpanded ? words : words.slice(0, collapsedNumWords);

  return (
    <div
      className={`${className} transition-max-height duration-300 overflow-hidden relative `}
      style={{ maxHeight: isExpanded ? "1000px" : "100px" }}
    >
      {content.join(" ")}
      {words.length > collapsedNumWords && (
        <span
          className="text-slate-500 cursor-pointer ml-2 underline transition-opacity duration-300"
          onClick={handleToggle}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </span>
      )}
    </div>
  );
}

export default Readmore;
