import React from 'react';
// import TypeWriter from '../../Typewriter';
import './Profile.css';
import Typical from 'react-typical';
export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://instagram.com/pra__shant___'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://linkedin.com/in/prashant-singh-2659041bb'>
                        <i className='fa fa-linkedin'></i>
                    </a>
                    <a href='https://twitter.com/@prashansingh890'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    <a href='https://github.com/prashant54singh'>
                        <i className='fa fa-github'></i>
                    </a>
                        

                    </div>
                </div>
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Namaste!🙏 I'm <span className='highlighted-text'>Prashant</span>
                </span>
            </div>
            <div className='profile-details-role'>
                <span className='primary-text'>
                    {" "} <h1>
                    <Typical
                    loop={Infinity}
                    steps={[
                        "Indian",
                        1500,
                        "Enthusiastic Dev 😊",
                        1500,
                        "Socializer 🤝",
                        1500,
                        "Cross Platform Dev 😎",
                        1500,
                        "Web/React Developer 🌚",
                        1500,
                        "Anime Lover ❤️",
                        1500,
                    ]}
                    />
                    </h1> 
                    <span className='profile-role-tagline'>
                        Knack of building applications and exploring new technologies.
                    </span>
                </span>
            </div>
            <div className='profile-options'>
                <button className='btn primary-btn'>
                    Hire Me{" "}
                </button>
                <a href='PrashantSingh.pdf' download='Prashant English Resume.pdf'>
                    <button className='btn highlighted-btn'>Get Resume</button>
                </a>
                <a href='Nihon.pdf' download='プラシャント 履歴書.pdf'>
                    <button className='btn highlighted-btn'>履歴書</button>
                </a>
            </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>
  )
}
{/* rfc */}