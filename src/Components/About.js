import React from "react";
import PageTitle from "./PageTitle";
import MyPhoto from "../Assets/about-me-photo.png";
import Skills from "./Skills";
import styles from "./About.module.css";

const About = () => {
    return (
        <section>
            <PageTitle>About me</PageTitle>
            <div className={`${styles.intro} container`}>
                <p>Highly motivated and committed. My biggest assets are my problem solving skills and the ability to learn new programming languages quickly. 
                   My knowledge and interests include JavaScript and its framework, React.js, HTML5, CSS3, and Git.</p>
                <img src={MyPhoto} alt="About me description" />
            </div>
            <div className={`${styles.skills} container`}>
                <h2 className={styles.sectionTitle}>Main Skills</h2>
                <Skills />
            </div>
        </section>
    )
}

export default About
