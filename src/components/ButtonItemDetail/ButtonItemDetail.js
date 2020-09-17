import React from 'react'

import './buttonItemDetail.scss'

import { Link } from 'react-router-dom'

const ButtonItemDetail = (props) => {
    return (
        <Link to={props.link} className='link-item-detail'>
            <button 
                className={`btn-item-detail ${props.classN}`} 
                onClick={props.handleClick}
            >
                {props.text}
                <img src={props.svg} alt={props.alt} />
            </button>
        </Link>
    )
}

export default ButtonItemDetail