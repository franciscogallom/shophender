import React, { useContext } from 'react'

import cartIcon from '../../assets/img/cart.svg'

import './cartIcon.scss'

// Importo el Context
import ItemsQuantityContext from '../../context/ItemsQuantityProvider'

const CartIcon = (props) => {

    const contextItems = useContext(ItemsQuantityContext)

    const {itemsQuantity} = contextItems

    return (
        <div className='cart-icon'>
            <img src={cartIcon} alt="Cart"/>
            {(itemsQuantity > 0) && <span>{itemsQuantity}</span>}
        </div>
    )
}

export default CartIcon;