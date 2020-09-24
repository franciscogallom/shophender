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
        if (productsInCart[index].quantity < 25) {
            const temporal = productsInCart
            temporal[index].quantity++ 
            temporal[index].pricePerQuantity += temporal[index].unitPrice 
            setProductsInCart(temporal)
            setPrice(productsInCart[index].pricePerQuantity)
            setQuantity(productsInCart[index].quantity)
        }
    }

    const subtractQuantity = () => {
        if (productsInCart[index].quantity > 1) {
            const temporal = productsInCart
            temporal[index].quantity--
            temporal[index].pricePerQuantity -= temporal[index].unitPrice 
            setProductsInCart(temporal)
            setPrice(productsInCart[index].pricePerQuantity)
            setQuantity(productsInCart[index].quantity)
        }
    }

    const onClickDelete = () => {
        deleteItem(id)
    }

    return (
        <article className='container-cart-item'>
            <img className='imgProduct' src={imgProduct} alt={nameProduct}/>
            <div>
                <p>{nameProduct} x {quantity}</p>
                <span>${price}</span>
                <ItemQuantitySelector 
                    quantity={productsInCart[index].quantity} 
                    onClickPlus={addQuantity} 
                    onClickMinus={subtractQuantity} 
                />
                <img 
                    src={deleteProductIcon} 
                    onClick={onClickDelete}
                    alt='Delete' 
                />
            </div>
        </article>
    )
}

export default CartItem