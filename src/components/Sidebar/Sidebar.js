import {React, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './sidebar.scss'
import LogoDKWhite from '../../assets/images/dk-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faCode, faEnvelope, faHome, faMoon, faPen, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar({getMode}) {
    const [mode, setMode] = useState('light');

    const handleMode = () => {
        if(mode==="light"){
            document.body.style.backgroundColor = "#0b1120"
            setMode('dark')
            getMode("dark")
        }
        else{
            document.body.style.backgroundColor = "whitesmoke"
            setMode('light')
            getMode('light')
        }
    }

    const handleBlog = () => {
        alert("This Section is in Development")
    }

    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img className='navbar__img' src={LogoDKWhite} alt="DK" />
            </Link>
            <nav className='move__right'>
                <NavLink exact='true' to='/'><FontAwesomeIcon icon={faHome} color='#4d4d4e' /></NavLink>
                <NavLink exact='true' className='about-link' activeclasname='active' to='/about'><FontAwesomeIcon icon={faUser} color='#4d4d4e' /></NavLink>
                <NavLink exact='true' className='skills-link' activeclasname='active' to='/skills'><FontAwesomeIcon icon={faPen} color='#4d4d4e' /></NavLink>
                <NavLink exact='true' className='work-link' activeclasname='active' to='/work'><FontAwesomeIcon icon={faCode} color='#4d4d4e' /></NavLink>
                <NavLink exact='true' className='contact-link' activeclasname='active' to='/contact'><FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' /></NavLink>
            </nav>
            <ul>
                <li><button className='navbar__button-dark' onClick={handleMode}><FontAwesomeIcon icon={faMoon} color='#4d4d4e' /></button></li>
                <li><a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/pondari-datta-kiran-24a6a0237/"><FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' /></a></li>
                <li><a target='_blank' rel="noreferrer" href="https://github.com/Dattakiranrao"><FontAwesomeIcon icon={faGithub} color='#4d4d4e' /></a></li>
                <li><a target='_blank' rel="noreferrer" role='link' onClick={handleBlog} aria-disabled="true"><FontAwesomeIcon icon={faBlog} color='#4d4d4e' /></a></li>
            </ul>
        </div>
    )
}

