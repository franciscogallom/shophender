import React, { useContext } from 'react'

import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector'

import deleteProductIcon from '../../assets/img/cart-delete.svg'

import './cartItem.scss'

import PopUpCartContext from '../../context/PopUpCartProvider'
import ItemsQuantityContext from '../../context/ItemsQuantityProvider'
import TotalToPayContext from '../../context/TotalToPayProvider'

const CartItem = ({ nameProduct, imgProduct, pricePerQuantity, unitPrice, id, quantity, index, deleteItem }) => {

    const contextItems = useContext(ItemsQuantityContext)
    const {itemsQuantity, setItemsQuantity} = contextItems

    const contextTotalToPay = useContext(TotalToPayContext)
    const { setTotalToPay } = contextTotalToPay

    const contextPopUp = useContext(PopUpCartContext)
    const {setPopUpCart} = contextPopUp

    const addQuantity = () => {
        if (itemsQuantity[index].quantity < 25) {
            const temporal = itemsQuantity
            temporal[index].quantity++ 
            temporal[index].pricePerQuantity += temporal[index].unitPrice 
            setItemsQuantity(temporal)
            setTotalToPay((prevTotal) => prevTotal += unitPrice)
        }
    }

    const subtractQuantity = () => {
        if (itemsQuantity[index].quantity > 1) {
            const temporal = itemsQuantity
            temporal[index].quantity--
            temporal[index].pricePerQuantity -= temporal[index].unitPrice 
            setItemsQuantity(temporal)
            setTotalToPay((prevTotal) => prevTotal -= unitPrice)
        }
    }

    const onClickDelete = () => {
        deleteItem(id)
        setPopUpCart((prevPopUp) => prevPopUp - itemsQuantity[index].quantity)
        setTotalToPay((prevTotal) => prevTotal -= itemsQuantity[index].pricePerQuantity )
    }

    return (
        <article className='container-cart-item'>
            <img className='imgProduct' src={imgProduct} alt={nameProduct}/>
            <div>
                <p>{nameProduct} x {itemsQuantity[index].quantity}</p>
                <span>${itemsQuantity[index].pricePerQuantity}</span>
                <ItemQuantitySelector 
                    quantity={itemsQuantity[index].quantity} 
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