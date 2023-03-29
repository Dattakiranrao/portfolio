import './al.scss'
import React from 'react'

export const AL = ({letterClass, strArray, idx}) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char+i} className={`${letterClass} _${i+idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}