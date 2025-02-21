import clsx from "clsx";
import "./Button.scss";

const Button = ({ title, option }) => {
  return <button className={clsx("button", option)}>{title}</button>;
};

export default Button;
