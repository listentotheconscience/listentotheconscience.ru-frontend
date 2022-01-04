import React from 'react';
import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    const github = require('../../images/GitHub-Mark.eps');
    return (
        <div className="container-footer">
            <div className="social-media">
                <a href="https://github.com/listentotheconscience">
                    <FontAwesomeIcon className="github" icon={faGithub} />
                </a>
                <p className="copy">listetotheconscience <b style={{color: 'magenta'}}>&copy; 2022</b></p>
            </div>
        </div>
    );
}

export default Footer;