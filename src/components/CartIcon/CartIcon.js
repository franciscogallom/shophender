import React, { useContext } from 'react'

import cartIcon from '../../assets/img/cart.svg'

import './cartIcon.scss'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

const CartIcon = () => {

    const contextItems = useContext(ProductsInCartContext)
    const { productsInCart } = contextItems

    return (
        <div className='cart-icon'>
            <img src={cartIcon} alt="Cart"/>
            {productsInCart[0] && <span>{productsInCart.reduce((acc, current) => acc + current.quantity, 0)}</span>}
        </div>
    )
}

export default CartIcon;