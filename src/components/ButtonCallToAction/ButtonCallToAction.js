import React from 'react'

import { Link } from 'react-router-dom'

import './buttonCallToAction.scss'

const ButtonCallToAction = (props) => {
    return(
        <button className='btn-cta'>
            <Link to={props.link}>{props.text} <img src={props.imgBtn} alt={props.text} /></Link>
        </button>
    )
}

export default ButtonCallToAction