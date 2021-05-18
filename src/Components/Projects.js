import React from "react";
import Slide from "./Slide";
import { SliderData } from "./SliderData";

const Projects = () => {
    return (
        <div>
            <h1>My Projects</h1>
            <Slide slides={SliderData} />
        </div>
    )
}

export default Projects
