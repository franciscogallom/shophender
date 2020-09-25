import React from 'react'

import './loader.scss'

export default function Loader() {
    return (
        <div className='margin-t container-gooey'>
        <div className="gooey">
            <span className="dot"></span>
            <div className="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        </div>
    )
}