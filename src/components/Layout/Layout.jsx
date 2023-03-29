import {React, useState} from 'react'
import './layout.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

export default function Layout({get}) {
    const [mode, setMode] = useState('light');

    const getMode = async (value) =>{
        setMode(value)
        get(value)
    }

    return (
        <div className="App">
            <Sidebar getMode={getMode} />
            <div className="page">
                <span className={`${mode==='light'?'tags':'tags-dark'} top-tags`}>&lt;body&gt;</span>

                <Outlet />{/* allow nested roots to render */}

                <span className={`${mode==='light'?'tags':'tags-dark'} bottom-tags`}>&lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}



