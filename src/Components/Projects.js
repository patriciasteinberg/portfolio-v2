import React from "react";
import PageTitle from "./PageTitle";
import Slide from "./Slide";
import { SliderData } from "./SliderData";

const Projects = () => {
    return (
        <div>
            <PageTitle>My Projects</PageTitle>
            <Slide slides={SliderData} />
        </div>
    )
}

export default Projects
