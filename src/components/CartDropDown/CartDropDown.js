import React, { useContext } from 'react'

import './cartDropDown.scss'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

const CartDropDown = () => {

    const { productsInCart } = useContext(ProductsInCartContext)

    return (
        <div className='cart-drop-down'>
            <h1>CARRITO</h1>
            <div>
                {
                    productsInCart.map((item, index) => {
                        return (
                            <article key={index} className = 'article-drop-down'>
                                <p>{item.nameProduct} <span>x</span> {item.quantity}</p>
                                <img src = {'/images/' + item.imgProduct} alt={item.nameProduct} />
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CartDropDown