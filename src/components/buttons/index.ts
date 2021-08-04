import AnimatedButton from "./AnimatedButton";
import PrimaryButton from "./PrimaryButton";

export interface iBtnProp {
  children: JSX.Element;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  animation?: iBtnAniation | false;
}

export interface iBtnAniation {
  hoverScale?: false | number;
  tapScale?: false | number;
  duration?: number;
}

export { AnimatedButton, PrimaryButton };
