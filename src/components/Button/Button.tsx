import { MouseEventHandler } from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = (props: ButtonProps) => {
  return <button {...props} className={"button " + props.className}>{props.children}</button>;
};

export default Button;
