import React, { useContext } from 'react'

import cartIcon from '../../assets/img/cart.svg'

import './cartIcon.scss'

// Context para mostrar el pop up en el carrito con la cantidad de productos.
import PopUpCartContext from '../../context/PopUpCartProvider'

const CartIcon = (props) => {

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