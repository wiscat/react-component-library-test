import React from "react";

// @ts-ignore
import styles from "./Button.css";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <button className={styles.btn}>{props.label}</button>;
};

export default Button;