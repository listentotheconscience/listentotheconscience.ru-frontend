import React from 'react';
import './About.scss';

import Skill from "../Skill/Skill";
import avatar from "../../images/avatar.jpg";

function About(props) {
    const avatar = require('../../images/avatar.jpg');
    return (
        <div id="about" className="container-about">
            <h1 className="header-about">About Me</h1>
            <div className="person-skills">
                <div className="person">
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
                </div>
                <div className="skills-about">
                    <Skill completed={60} name="PHP"/>
                    <br/>
                    <Skill completed={50} name="Laravel"/>
                    <br/>
                    <Skill completed={80} name="Python"/>
                    <br/>
                    <Skill completed={50} name="Django"/>
                    <br/>
                    <Skill completed={40} name="Flask"/>
                    <br/>
                    <Skill completed={70} name="SQL"/>
                    <br/>
                    <Skill completed={90} name="HTML"/>
                    <br/>
                    <Skill completed={70} name="CSS"/>
                    <br/>
                    <Skill completed={40} name="JS"/>
                    <br/>
                    <Skill completed={60} name="C#"/>
                </div>
            </div>
        </div>
    )
}

export default About;