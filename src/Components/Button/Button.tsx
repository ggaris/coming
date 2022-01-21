import React from "react";
import styles from "./Button.css";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <div className={styles.a}>{label}</div>;
};

export default Button;
