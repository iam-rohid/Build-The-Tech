import React from "react";
import { iBtnProp } from ".";
import { AnimatedButton } from ".";

const PrimaryButton: React.FC<iBtnProp> = ({
  className,
  children,
  disabled,
  animation,
  onClick,
}) => {
  if (animation === false) {
    return (
      <button
        disabled={disabled}
        className={`btn ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <AnimatedButton
        className={`btn ${className}`}
        disabled={disabled}
        animation={animation}
        onClick={onClick}
      >
        {children}
      </AnimatedButton>
    );
  }
};

export default PrimaryButton;
