import type { ComponentPropsWithRef } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: "primary" | "secondary";
}

export function Button({
  variant = "primary",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={[styles.button, styles[variant], className].filter(Boolean).join(" ")}
    />
  );
}
