import React, { useContext } from 'react'

import './cartItem.scss'

import deleteProductIcon from '../../assets/img/cart-delete.svg'

import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

const CartItem = ({ nameProduct, imgProduct, pricePerQuantity, unitPrice, id, index, deleteItem }) => {

    const contextItems = useContext(ProductsInCartContext)
    const { productsInCart } = contextItems

    return (
        <article className='container-cart-item'>
            <img className='imgProduct' src={imgProduct} alt={nameProduct}/>
            <div>
                <p>{nameProduct} x {productsInCart[index].quantity}</p>
                <span>${productsInCart[index].pricePerQuantity}</span>
                <ItemQuantitySelector 
                    quantity = {productsInCart[index].quantity} 
                    index = {index}
                />
                <img 
                    src={deleteProductIcon} 
                    onClick={() => deleteItem(id)}
                    alt='Delete' 
                />
            </div>
        </article>
    )
}

export default CartItem