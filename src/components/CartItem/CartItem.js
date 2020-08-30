import React, { useState, useContext } from 'react'

import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector'

import deleteProduct from '../../assets/img/cart-delete.svg'

import './cartItem.scss'

import ItemsQuantityContext from '../../context/ItemsQuantityProvider'
import PopUpCartContext from '../../context/PopUpCartProvider'

const CartItem = (props) => {
    
    // Estado para manejar la cantidad de un producto.
    const [quantity, setQuantity] = useState(1)

    // Estado para manejar el valor total de un producto.
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

    // ------------------

    const contextItems = useContext(ItemsQuantityContext)

    const { setItemsQuantity } = contextItems

    const contextPopUp = useContext(PopUpCartContext)

    const {setPopUpCart} = contextPopUp

    const deleteItem = () => { // IMPLEMENTADO ASI ME BORRA TODOS.
        setItemsQuantity((prevItems) => prevItems.filter(item => item.nameProduct =! props.nameProduct))
        setPopUpCart((prevPopUp) => prevPopUp - quantity) // Descuento del popUp la cantidad de items que se habían seleccionado del producto.
    }

    return (
        <article className='container-cart-item'>
            <img className='imgProduct' src={props.imgProduct} alt={props.nameProduct}/>
            <div>
                <p>{props.nameProduct} x {quantity}</p>
                <span>${price}</span>
                <ItemQuantitySelector 
                    quantity={quantity} 
                    onClickPlus={addQuantity} 
                    onClickMinus={subtractQuantity} 
                />
                <img 
                    src={deleteProduct} 
                    onClick={deleteItem}
                    alt='Delete' 
                />
            </div>
        </article>
    )
}

export default CartItem