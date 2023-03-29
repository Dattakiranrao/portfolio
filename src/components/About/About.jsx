import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useState, useEffect } from 'react'
import Loader from 'react-loaders';
import { AL } from '../AnimatedLetters/AL'
import './about.scss'

export const About = ({mode}) => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, [])

    return (
        <>
            <div className={`container ${mode==='light'?`about-page`:`about-page-dark`}`}>
                <div className="text-zone">
                    <h1>
                        <AL letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p>I'm a very ambitious full-stack developer looking for a role as a software developer with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
                    <p>I can also handle machine learning task's in areas related classification & regression, providing high-quality data-driven solutions</p>
                    <p>To describe me in one line. I'm quiet confident, naturally curious, and continuously work on improving my skill to provide fesable solutions to a problem.</p>
                </div>

                <div className="stage-cube-container">
                    <div className="cubespinner">
                        <div className="face4"><FontAwesomeIcon icon={faReact} color="#5ED4F4" /></div>
                        <div className="face1"><FontAwesomeIcon icon={faPython} color="#3771a1" /></div>
                        <div className="face2"><FontAwesomeIcon icon={faHtml5} color="#F06529" /></div>
                        <div className="face3"><FontAwesomeIcon icon={faCss3} color="#28A4D9" /></div>
                        <div className="face5"><FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /></div>
                        <div className="face6"><FontAwesomeIcon icon={faGitAlt} color="#EC4D28" /></div>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}
