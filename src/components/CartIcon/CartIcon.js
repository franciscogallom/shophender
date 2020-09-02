import React, { useContext } from 'react'

import cartIcon from '../../assets/img/cart.svg'

import './cartIcon.scss'

import PopUpCartContext from '../../context/PopUpCartProvider'

const CartIcon = () => {

    const contextPopUp = useContext(PopUpCartContext)
    const {popUpCart} = contextPopUp

    return (
        <div className='cart-icon'>
            <img src={cartIcon} alt="Cart"/>
            {(popUpCart > 0) && <span>{popUpCart}</span>}
        </div>
    )
}

export default CartIcon;