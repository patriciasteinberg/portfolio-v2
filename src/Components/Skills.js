import React from "react";
import { SkillsData } from "./SkillsData";
import styles from "./Skills.module.css";

const Skills = () => {
    const skills = SkillsData.map((item) => {
        return <li key={item.logo} className={styles.languages}>
                <div className={styles.title}>
                    <img src={item.logo} alt="Logo" />
                    <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
        </li>
    })
    return <ul className={styles.container}>{skills}</ul>;
}

export default Skills;
