import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={`${styles.notFound} container`}>
      <h1>Error: 404</h1>
      <p> I am sorry. The page you are looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
