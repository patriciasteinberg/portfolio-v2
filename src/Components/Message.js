import React from "react";
import styles from "./Message.module.css";

const Message = ({ label, type, name, value, error, onChange, onBlur }) => {
    return (
        <div>
            <label htmlFor={name} className={styles.label}>
            {label}
            </label>
            <textarea
                id={name}
                name={name}
                className={styles.textarea}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    )
}

export default Message
