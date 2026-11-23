import { useId, type ComponentPropsWithRef } from "react";
import styles from "./TextField.module.css";

export interface TextFieldProps extends ComponentPropsWithRef<"input"> {
  label: string;
}

export function TextField({
  label,
  id,
  className,
  ...props
}: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
      <div className={styles.control}>
        <svg
          className={styles.icon}
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
        <input
          {...props}
          id={inputId}
          className={[styles.input, className].filter(Boolean).join(" ")}
        />
      </div>
    </div>
  );
}
