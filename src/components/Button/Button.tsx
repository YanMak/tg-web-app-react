import { ButtonHTMLAttributes, MouseEventHandler } from "react";

/*
interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>
} */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => { 
//const Button = (props: ButtonProps) => {
  return <button {...props} className={"button " + props.className}>{props.children}</button>;
};

export default Button;
