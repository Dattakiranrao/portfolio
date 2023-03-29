import { React, useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import { AL } from '../AnimatedLetters/AL'
import './contact.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export const Contact = ({mode}) => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_KEY,
            process.env.REACT_APP_TEMPLATE_KEY,
            form.current,
            process.env.REACT_APP_PRIVATE_KEY
        ).then(
            () => {
                alert('Message Sent Successfully!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to Send the Message!, Please Try again')
            }
        )
    }

    return (
        <>
            <div className={`container ${mode === `light` ? `contact-page` : `contact-page-dark`}`}>
                <div className="text-zone">
                    <h1>
                        <AL strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} letterClass={letterClass} />
                    </h1>
                    <p>I am interested in Internship/Job opportunities in the field of web development and machine learning engineering. However, if you have any other questions, don't hesitate to contact me using below form either.</p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul> 
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map ">
                    Datta Kiran, <br />
                    Hyderabad, India <br />
                    <span>dattakiran.edu@gmail.com</span>
                </div>
                <div className=" map-wrap">
                    <MapContainer center={[17.419033, 78.541389]} zoom={12}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[17.419033, 78.541389]}>
                            <Popup>I Live Here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}
