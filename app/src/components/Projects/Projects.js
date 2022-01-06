import React from 'react';
import './Projects.scss';

import ProjectItem from "../ProjectItem/ProjectItem";
import projects from './projects_description';

const Projects = () => {
    return (
        <div className="container-projects">
            <h1 className="header-projects">Projects</h1>
            <div className="projects">
                {projects.map(item => (
                    <ProjectItem
                        name={item.name}
                        link={item.link}
                        desc={item.desc}
                        logo={item.logo}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;