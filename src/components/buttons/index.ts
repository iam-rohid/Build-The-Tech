import OutlineButton from "./OutLineButton";
import PrimaryButton from "./PrimaryButton";

export interface iBtnProp {
  children: JSX.Element;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}
export { PrimaryButton, OutlineButton };
