import React from 'react'

import './loader.scss'

export default function Loader() {
    return (
        <div className='margin-t container-gooey'>
        <div class="gooey">
            <span class="dot"></span>
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        </div>
    )
}