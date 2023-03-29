import { React, useEffect, useState } from 'react'
import { AL } from '../AnimatedLetters/AL';
import './work.scss'
import bank from '../../assets/images/demo.png'
import ai from '../../assets/images/ai.png'
import netflix from '../../assets/images/netflix.png'
import weather from '../../assets/images/weather.png'
import Loader from 'react-loaders';

export const Work = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, [])

    return (
        <>
            <div className="work-container work-page">
                {/* container  */}
                <div className="text-zone">
                    <h1>
                        <AL
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', "'", 's']}
                            idx={5}
                        />
                    </h1>
                </div>
                <ul className='projects__ul'>
                    <li className='projects__li'>
                        <img className='projects__img' src={bank} alt='bank' />
                        <button className='li__button'>
                            <a className='button_a' target='_blank' rel="noreferrer" href="https://bank-website-clone.onrender.com">Bank App</a>
                        </button>
                    </li>
                    <li className='projects__li'>
                        <img className='projects__img' src={ai} alt='bank' />
                        <button className='li__button'>
                            <a className='button_a' target='_blank' rel="noreferrer" href="https://ai-website-clone.onrender.com">Ai Website</a>
                        </button>
                    </li>
                    <li className='projects__li'>
                        <img className='projects__img' src={netflix} alt='bank' />
                        <button className='li__button'>
                            <a className='button_a' target='_blank' rel="noreferrer" href="https://netflix-react-tailwind-fb.web.app">Nteflix</a>
                        </button>
                    </li>
                    <li className='projects__li'>
                        <img className='projects__img' src={weather} alt='bank' />
                        <button className='li__button'>
                            <a className='button_a' target='_blank' rel="noreferrer" href="https://flask-weather-app.onrender.com">Weather App</a>
                        </button>
                    </li>
                </ul>
                <div className='button__modifer'>
                    <a href="https://github.com/Dattakiranrao?tab=repositories" rel='noreferrer' target='_blank'><button className='work__flat-button'>View More Project's</button></a>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}
