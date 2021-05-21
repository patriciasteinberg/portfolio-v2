import React from "react";
import { SkillsData } from "./SkillsData";

const Skills = () => {
    const skills = SkillsData.map((item) => {
        return <li key={item.logo}>
            <img src={item.logo} alt="Logo" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </li>
    })
    return <ul>{skills}</ul>;
}

export default Skills;
