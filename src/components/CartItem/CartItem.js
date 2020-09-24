import React, { useContext, useState } from 'react'

import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector'

import deleteProductIcon from '../../assets/img/cart-delete.svg'

import './cartItem.scss'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

const CartItem = ({ nameProduct, imgProduct, pricePerQuantity, unitPrice, id, index, deleteItem }) => {

    const contextItems = useContext(ProductsInCartContext)
    const {productsInCart, setProductsInCart} = contextItems

    const [price, setPrice] = useState(productsInCart[index].pricePerQuantity);

    const [quantity, setQuantity] = useState(productsInCart[index].quantity);

    const addQuantity = () => {
        const temporal = [...productsInCart]
        temporal[index].quantity++ 
        temporal[index].pricePerQuantity += temporal[index].unitPrice 
        setProductsInCart(temporal)
        setPrice(productsInCart[index].pricePerQuantity)
        setQuantity(productsInCart[index].quantity)
    }

    const subtractQuantity = () => {
        const temporal = [...productsInCart]
        temporal[index].quantity--
        temporal[index].pricePerQuantity -= temporal[index].unitPrice 
        setProductsInCart(temporal)
        setPrice(productsInCart[index].pricePerQuantity)
        setQuantity(productsInCart[index].quantity)
    }

    return (
        <article className='container-cart-item'>
            <img className='imgProduct' src={imgProduct} alt={nameProduct}/>
            <div>
                <p>{nameProduct} x {quantity}</p>
                <span>${price}</span>
                <ItemQuantitySelector 
                    quantity = {productsInCart[index].quantity} 
                    addQuantity = {addQuantity} 
                    subtractQuantity = {subtractQuantity} 
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