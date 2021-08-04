import React from "react";
import { iBtnProp } from ".";

const OutlineButton: React.FC<iBtnProp> = ({
  className,
  children,
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={`btn outline-btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
