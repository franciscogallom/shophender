import React from 'react'

import './alert.scss'

const Alert = (props) => {
    return(
        <div className='alert-container'>
            <h1>Algo salió mal...</h1>
            <p>{props.text}</p>
            <button onClick={props.handleAlert}>Entendido.</button>
        </div>
    )
}

export default Alert