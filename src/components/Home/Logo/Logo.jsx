import './logo.scss'
import { React } from 'react'
import LogoDkBlue from '../../../assets/images/dk-blue.png'
import LogoDkWhite from '../../../assets/images/dk-white.png'

export default function Logo({mode}) {
    return (
        <div className={`${mode==='light'?'logo-container':'logo__container-dark'}`}>
            <img className="solid-logo" src={mode==='light'?LogoDkBlue:LogoDkWhite} alt="JavaScript,  Developer" />
        </div>
    )
}
