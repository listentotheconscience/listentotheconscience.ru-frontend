import React from 'react';
import './Hello.scss';

const Hello = (props) => {
    return (
        <div className="container-hello">
            <div className="text-hello">
                <p>Hello, I'm <a href={props.href} className="nickname" target="_blank">listentotheconscince</a>. <br/> <br/> I'm backend web developer</p>
                <a href="#about" className="scrolldown-hello">View my work</a>
            </div>
        </div>
    )
}

export default Hello;