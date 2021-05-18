import React from "react";
import styles from "./PageTitle.module.css";

const PageTitle = ({ children, ...props }) => {
    return (
        <h1 {...props} className={styles.title}>{children}</h1>
    )
}

export default PageTitle
