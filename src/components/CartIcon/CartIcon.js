import React, { useContext, useState } from 'react'

import cartIcon from '../../assets/img/cart.svg'

import './cartIcon.scss'

import ProductsInCartContext from '../../context/ProductsInCartProvider'
import { useEffect } from 'react'

const CartIcon = () => {

    const contextItems = useContext(ProductsInCartContext)
    const { productsInCart } = contextItems

    const [popUp, setPopUp] = useState(0);
    useEffect(() => {
        productsInCart.forEach(product => {
            setPopUp(prevPopUp => prevPopUp + product.quantity)
        })
    }, [productsInCart])

    return (
        <div className='cart-icon'>
            <img src={cartIcon} alt="Cart"/>
            {(popUp > 0) && <span>{popUp}</span>}
        </div>
    )
}

export default CartIcon;