import React from 'react';
import './ProjectItem.scss';


function ProjectItem(props) {
    const handleClick = (e) => {
        window.open(props.link, "_blank");
    }
    return (
        <div className="container-project_item" onClick={handleClick}>
            <div className="card_info">
                <img src={props.logo} alt=""/>
            </div>
            <div className="card_text">
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
          
    )
}

export default ProjectItem;