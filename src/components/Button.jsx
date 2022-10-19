import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

const Button = ({
  bgColor,
  color,
  size,
  text,
  borderRadius,
  icon,
  bgHoverColor,
  width,
}) => {
  const { setIsClicked, initialState, handleClick } = useStateContext();

  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`txet-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      onClick={() => handleClick(initialState)}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
