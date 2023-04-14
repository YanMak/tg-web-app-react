interface ButtonProps {
  className?: string;
  children: React.ReactNode
}

const Button = (props: ButtonProps) => {
  return <button {...props} className={"button " + props.className}>{props.children}</button>;
};

export default Button;
