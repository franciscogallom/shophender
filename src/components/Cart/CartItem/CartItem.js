import React, { useState } from 'react'

import ItemQuantitySelector from './ItemQuantitySelector/ItemQuantitySelector'

import deleteProduct from '../../../assets/img/cart-delete.svg'

import './cartItem.scss'

const CartItem = (props) => {
    
    // Estado para manejar la cantidad de items.
    const [quantity, setQuantity] = useState(1)

    // Estado para manejar el valor total.
    const[price, setPrice] = useState(props.priceProduct)

    // Precio por unidad
    const unitPrice = props.priceProduct

    const addQuantity = () => {
        if (quantity<25) { 
            setQuantity((prevQuantity) => prevQuantity + 1)
            setPrice((prevPrice) => prevPrice + unitPrice)
        }
    }

    const subtractQuantity = () => {
        if (quantity>1) { 
            setQuantity((prevQuantity) => prevQuantity - 1)
            setPrice((prevPrice) => prevPrice - unitPrice)
        }
    }

    return (
        <article className='container-cart-item'>
            <img className='imgProduct' src={props.imgProduct} alt={props.nameProduct}/>
            <div>
                <p>{props.nameProduct} x {quantity}</p>
                <span>${price}</span>
                <ItemQuantitySelector quantity={quantity} onClickPlus={addQuantity} onClickMinus={subtractQuantity} />
                <img src={deleteProduct} alt='Delete product.' />
            </div>
        </article>
    )
}

export default CartItem