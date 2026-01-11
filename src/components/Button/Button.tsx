import clsx from "clsx";
import css from "./Button.module.css";
import { TbBrandAppleNews } from "react-icons/tb";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ordinary";
  text: string;
  clickFn?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

function Button({ disabled, variant, text, clickFn }: ButtonProps) {
  return (
    <button
      onClick={clickFn}
      disabled={disabled}
      className={clsx(css.button, variant && css[variant])}
    >
      <TbBrandAppleNews className={css.icon} />
      {text}
    </button>
  );
}

export default Button;
