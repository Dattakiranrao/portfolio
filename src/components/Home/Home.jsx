import { React, useState, useEffect} from 'react'
import Loader from 'react-loaders';
import { Link } from 'react-router-dom'
import { AL } from '../AnimatedLetters/AL';
import './home.scss'
import Logo from './Logo/Logo';
import { PageTheme } from '../ThemeContext/ThemeContext';

export const Home = ({mode}) => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ', 'D', 'a', 't', 't', 'a', ' ', 'K', 'i', 'r', 'a', 'n', ',']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    const {darkMode} = PageTheme()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])

    return (
        <>
            <div className={`container ${mode === `light` ? `home-page` : darkMode()}`}>
            {/* darkMode() */}
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _10`}>i</span>
                        <span className={`${letterClass} _11`}>,</span>
                        <br />
                        <span className={`${letterClass} _12`}>I</span>
                        <span className={`${letterClass} _13`}>'</span>
                        <span className={`${letterClass} _14`}>m</span>
                        <AL letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AL letterClass={letterClass} strArray={jobArray} idx={22} />
                    </h1>
                    <h2>Frontend Developer / Backend Developer / ML Engineer</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo mode={mode} />
            </div>
            <Loader type='pacman' />
        </>
    )
}
