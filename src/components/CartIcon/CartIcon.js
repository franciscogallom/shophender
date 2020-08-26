import React from 'react'

import cartIcon from '../../assets/img/cart.svg'

import './cartIcon.scss'

const CartIcon = (props) => {
    return (
        <div className='cart-icon'>
            <img src={cartIcon} alt="Cart"/>
            {(props.quantity > 0) && <span>{props.quantity}</span>}
        </div>
    )
}

export default CartIcon;