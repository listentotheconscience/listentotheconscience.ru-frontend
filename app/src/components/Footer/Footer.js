import React from 'react';
import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    return (
        <div className="container-footer">
            <div className="social-media">
                <a href="https://github.com/listentotheconscience" className="github">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
                <p className="copy">listentotheconscience <b style={{color: '#ff00B5'}}>&copy; 2022</b></p>
            </div>
        </div>
    );
}

export default Footer;