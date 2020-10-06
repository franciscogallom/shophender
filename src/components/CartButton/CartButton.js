import React from 'react'

import { Link } from 'react-router-dom'

import './cartButton.scss'

const CartButton = (props) => {
    return(
        <button className='cart-btn'>
            <Link to = {props.link}>{props.text} <img src = {props.imgBtn} alt = {props.text} /></Link>
        </button>
    )
}

export default CartButton