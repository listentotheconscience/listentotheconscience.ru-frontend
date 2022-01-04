import React from 'react';
import './Skill.scss';

import ProgressBar from "@ramonak/react-progress-bar";

function Skill(props) {

    return (
        <div className="container-skill">
            <div className="skill_name">{props.name}</div>
            <ProgressBar
                animateOnRender={true}
                bgColor="#4527A0"
                completed={props.completed}
                className="progressbar-wrapper"
                barContainerClassName="progressbar-container"
                labelClassName="progressbar-label"
                height="32px"
            />
        </div>

);
}

export default Skill;