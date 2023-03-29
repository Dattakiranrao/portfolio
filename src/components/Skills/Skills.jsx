import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useState, useEffect } from 'react'
import { AL } from '../AnimatedLetters/AL';
import Flask from '../../assets/images/flask.svg'
import Django from '../../assets/images/django.svg'
import FastApi from '../../assets/images/fastApi.png'
import sklearn from '../../assets/images/sklearn.png'
import tensorflow from '../../assets/images/tf.png'
import postgreSql from '../../assets/images/ps.svg'
import './skills.scss'
import Loader from 'react-loaders';

export const Skills = ({ mode }) => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, [])

    return (
        <>
            <div className={`container ${mode === 'light' ? 'skills-page' : 'skills-page-dark'}`}>
                <div className="text-zone">
                    <h1>
                        <AL
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&']}
                            idx={5} />
                        <br />
                        <AL
                            letterClass={letterClass}
                            strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={12} />
                    </h1>
                    <p>
                        <h2>Front-end</h2>
                        <ul className='lul'>
                            <li className='lli'>Html</li>
                            <li className='lli'>Css</li>
                            <li className='lli'>Tailwind Css</li>
                            <li className='lli'>Javascript</li>
                            <li className='lli'>ReactJs</li>
                            <li className='lli'>NextJs</li>
                        </ul>
                    </p>
                    <p>
                        <h2>Back-end</h2>
                        <ul className='lul'>
                            <li className='lli'>Python</li>
                            <li className='lli'>FLask</li>
                            <li className='lli'>Django</li>
                            <li className='lli'>FastApi</li>
                            <li className='lli'>MySql</li>
                            <li className='lli'>MongoDB</li>
                        </ul>
                    </p>
                    <p>
                        <h2>Machine Learning</h2>
                        <ul className='lul'>
                            <li className='lli'>Scikit-Learn</li>
                            <li className='lli'>TrensorFlow</li>
                            <li className='lli'>Keras</li>
                            <li className='lli'>Pandas</li>
                            <li className='lli'>Numpy</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <ul className='rul'>
                        <li className='rli'><FontAwesomeIcon icon={faPython} color="#3771a1" /></li>
                        <li className='rli'><FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /></li>
                        <li className='rli'><img className='flask' src={sklearn} alt='Flask' /></li>
                        <li className='rli'><FontAwesomeIcon icon={faHtml5} color="#F06529" /></li>
                        <li className='rli'><FontAwesomeIcon icon={faCss3} color="#28A4D9" /></li>
                        <li className='rli'><FontAwesomeIcon icon={faReact} color="#5ED4F4" /></li>
                        <li className='rli'><img className='flask' src={Flask} alt='Flask' /></li>
                        <li className='rli'><img className='django' src={Django} alt="Django" /></li>
                        <li className='rli'><img className='fastapi' src={FastApi} alt="FastApi" /></li>
                        <li className='rli'><img className='fastapi' src={tensorflow} alt="FastApi" /></li>
                        <li className='rli'><img className='fastapi' src={postgreSql} alt="FastApi" /></li>
                        <li className='rli'><FontAwesomeIcon icon={faGitAlt} color="#EC4D28" /></li>
                    </ul>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}
