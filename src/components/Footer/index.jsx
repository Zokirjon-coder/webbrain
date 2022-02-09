import React from 'react';
import { useLocation } from 'react-router';
import { CONTAINER } from './style'
import { FLEX } from '../pages/Asosiy/style';
import face from '../../assets/icons/faceBlue.png'
import goo from '../../assets/icons/googleBlue.png'
import github from '../../assets/icons/gitHubBlue.png'
import { BUTTON_SOLID } from '../styles';

const Footer = () => {
    const location = useLocation().pathname;
    return <div style={{
        display: (location === '/login' || location === '/signin') && 'none',
    }}>
        <CONTAINER>
            <FLEX>
                <div className="socials yon">
                    <p>
                        Neumorphism UI PRO is a premium Bootstrap UI Kit built based on the newest design trend called Neumorphism.
                    </p>
                    <div>
                        <img src={face} alt="" />
                        <img src={goo} alt="" />
                        <img src={github} alt="" />
                    </div>
                </div>
                <div className="webbrain orta">
                    <h1>Webbrain</h1>
                    <p>Team</p>
                    <p>Partners</p>
                    <p>Lessons</p>
                    <p>About us</p>
                </div>
                <div className="other orta">
                    <h1>Docs</h1>
                    <p>Changelog</p>
                    <p>Licen</p>
                    <p>Support</p>
                </div>
                <div className="join yon">
                    <h1>Other</h1>
                    <p>
                    Join our mailing list. We write rarely, but only the best content
                    </p>
                    <input type="text" placeholder='Email manzilingiz' />
                    <br />
                    <BUTTON_SOLID>Yuborish</BUTTON_SOLID>
                </div>
            </FLEX>
        </CONTAINER>
        <CONTAINER style={{
            textAlign: 'center'
        }}>
            <h1 style={{
                fontSize: '45px',
                fontFamily: 'var(--fira)'
            }}><span style={{
                color: 'var(--blue)',
            }}>Web</span>brain</h1>
            <p>Copyright&copy; Webbrain 2021. All rights reserved</p>
        </CONTAINER>
    </div>;
};

export default Footer;
