import { useState } from "react";

function Readmore({
  collapsedNumWords = 25,
  expandButtonText = "Read More",
  collapseButtonText = "Read Less",

  expanded = false,
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  function handleExpand() {
    setIsExpanded((is) => !is);
  }
  return (
    <div className={className}>
      {isExpanded
        ? children
        : children
            .split(" ")
            .slice(0, collapsedNumWords + 1)
            .join(" ") + "..."}
      <span className="text-slate-500 cursor-pointer" onClick={handleExpand}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </span>
    </div>
  );
}

export default Readmore;
