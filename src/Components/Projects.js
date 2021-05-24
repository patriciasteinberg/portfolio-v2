import React from "react";
import PageTitle from "./PageTitle";
import Slide from "./Slide";
import { SliderData } from "./SliderData";
import Head from "./Head";

const Projects = () => {
    return (
        <div>
            <Head title="Projects" description="This website was made to showcase my projects." />
            <PageTitle>My Projects</PageTitle>
            <Slide slides={SliderData} />
        </div>
    )
}

export default Projects
