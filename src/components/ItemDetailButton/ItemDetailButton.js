import React from 'react'

import './itemDetailButton.scss'

const ItemDetailButton = (props) => {
    return (
            <button
                className = {`btn-item-detail ${props.classN}`} 
                onClick = {props.handleClick}
            >
                {props.text}
                <img src = {props.svg} alt = {props.text} />
            </button>
    )
}

export default ItemDetailButton