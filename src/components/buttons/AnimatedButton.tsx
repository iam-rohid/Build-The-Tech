import { motion } from "framer-motion";
import React from "react";
import { iBtnProp } from ".";

const AnimatedButton: React.FC<iBtnProp> = ({
  children,
  className,
  disabled,
  animation,
  onClick,
}) => {
  return (
    <motion.button
      disabled={disabled}
      whileHover={{
        scale:
          animation === undefined ||
          animation === false ||
          animation.hoverScale === undefined
            ? 1.05
            : !animation.hoverScale
            ? 1
            : animation.hoverScale,
      }}
      whileTap={{
        scale:
          animation === undefined ||
          animation === false ||
          animation.tapScale === undefined
            ? 0.9
            : !animation.tapScale
            ? 1
            : animation.tapScale,
      }}
      transition={{
        duration:
          animation === undefined ||
          animation === false ||
          animation.duration === undefined
            ? 0.2
            : animation.duration,
      }}
      className={`${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
