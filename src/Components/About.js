import React from "react";
import PageTitle from "./PageTitle";
import MyPhoto from "../Assets/about-me-photo.png";
import Skills from "./Skills";

const About = () => {
    return (
        <>
            <PageTitle>About me</PageTitle>
            <div>
                <p>Highly motivated and committed. My biggest assets are my problem solving skills and the ability to learn new programming languages quickly. 
                   My knowledge and interests include JavaScript and its framework, React.js, HTML5, CSS3, and Git.</p>
                <img src={MyPhoto} alt="About me description" />
            </div>
            <h2>Main Skills</h2>
            <Skills />
        </>
    )
}

export default About
