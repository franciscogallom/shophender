import React, { useContext } from 'react'

import './cartIcon.scss'

import cartIcon from '../../assets/img/cart.svg'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

const CartIcon = () => {

    const { productsInCart } = useContext(ProductsInCartContext)

    return (
        <div className='cart-icon'>
            <img src={cartIcon} alt="Cart"/>
            {/* Si tengo al menos un producto en el carrito, muestro la cantidad total en el popUp. */}
            {productsInCart[0] && <span>{productsInCart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)}</span>}
        </div>
    )
}

export default CartIcon