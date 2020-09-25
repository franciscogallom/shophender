import React, { useContext } from 'react'

import './cartIcon.scss'

import cartIcon from '../../assets/img/cart.svg'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

const CartIcon = () => {

    const contextItems = useContext(ProductsInCartContext)
    const { productsInCart } = contextItems

    return (
        <div className='cart-icon'>
            <img src={cartIcon} alt="Cart"/>
            {productsInCart[0] && <span>{productsInCart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)}</span>}
        </div>
    )
}

export default CartIcon