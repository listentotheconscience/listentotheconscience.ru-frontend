import React from 'react';
import './About.scss';

import Skill from "../Skill/Skill";
import skills from "./skills_description";

function About(props) {
    const avatar = require('../../images/avatar.jpg');
    return (
        <div id="about" className="container-about">
            <h1 className="header-about">About Me</h1>
            <img src={String(avatar)} className="avatar-about" alt=""/>
            <div className="person-about">
                Hello, my name is listentotheconscience.
                <br/>
                <br/>
                I'm backend web developer from Novorossiysk. This is a port city on the Black Sea.
                <br/>
                <br/>
                I've a serious passion for how things work behind the scenes in programs.
                <br/>
                <br/>
                That's why I here.
            </div>
        <div className="skills-about">
            {skills.map(skill => (
                <Skill completed={skill.completed} name={skill.name} onClick={skill.onclick}/>
            ))}
        </div>
        </div>
    )
}

export default About;