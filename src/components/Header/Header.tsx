import type { ReactNode } from "react";
import css from "./Header.module.css";

interface HeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const Header = ({ title, subtitle, children }: HeaderProps) => {
  return (
    <header className={css.header}>
      <div className={css.content}>
        {children}
        <h1 className={css.title}>{title}</h1>
        {subtitle && <p className={css.subtitle}>{subtitle}</p>}
      </div>
    </header>
  );
};

export default Header;
