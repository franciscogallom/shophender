import React, { useContext } from 'react'

import './cartItem.scss'

import deleteProductIcon from '../../assets/img/cart-delete.svg'

import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

const CartItem = ({ item, index, deleteItem }) => {

    const { productsInCart } = useContext(ProductsInCartContext)

    return (
        <article className = 'container-cart-item'>
            <img className = 'imgProduct' src = {'/images/' + item.imgProduct} alt = {item.nameProduct}/>
            <div>
                <p>{item.nameProduct} <strong>x</strong> {productsInCart[index].quantity}</p>
                <span className = 'price-per'>${productsInCart[index].pricePerQuantity}</span>
                <ItemQuantitySelector 
                    quantity = {productsInCart[index].quantity} 
                    index = {index}
                />
                <img 
                    src = {deleteProductIcon} 
                    // Funcion implementada en Cart.
                    onClick = {() => deleteItem(item.id)}
                    alt = 'Delete' 
                />
            </div>
        </article>
    )
}

export default CartItem