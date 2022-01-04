import React from 'react';
import './ProjectItem.scss';


function ProjectItem(props) {
    return (
        <div className="container-project_item">
            <div className="card_info">
                <img src={props.image} alt=""/>
            </div>
            <div className="card_text">
                <a href={props.link}><h2>{props.name}</h2></a>
                <p>{props.desc}</p>
            </div>
        </div>
          
    )
}

export default ProjectItem;