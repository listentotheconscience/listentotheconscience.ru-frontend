import React from 'react';
import './Projects.scss';

import ProjectItem from "../ProjectItem/ProjectItem";

function Projects(props) {
    const mal_logo = require('../../images/mal.png');
    const haramcraft_logo = require('../../images/haramcraft.jpeg');
    return (
        <div className="container-projects">
            <h1 className="header-projects">Projects</h1>
            <div className="projects">
                <ProjectItem
                    name="MyAnimeList"
                    desc="MyAnimeList is my first project as Laravel intern"
                    link="https://github.com/listentotheconscience/my_anime_list"
                    image={String(mal_logo)}
                />
                <ProjectItem
                    name="This site"
                    desc="I was need site, that's why it here"
                    link="https://github.com/listentotheconscience/listentotheconscience.ru-frontend"
                    image="https://sun9-11.userapi.com/impg/kFnwKKfCOurCvhA63O2V4QY-OhBBrse8C5LUrg/Vdzem5Jp7rY.jpg?size=750x930&quality=96&sign=0fc820f7f05ab141b1322f028d6aa292&type=album"
                />
                <ProjectItem
                    name="HaramCraft"
                    desc="Minecraft Plugin"
                    link="https://github.com/listentotheconscience/HaramCraft"
                    image={String(haramcraft_logo)}
                />
            </div>
        </div>
    )
}

export default Projects;