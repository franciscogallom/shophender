import React, { useContext } from 'react'

import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector'

import deleteProductIcon from '../../assets/img/cart-delete.svg'

import './cartItem.scss'

import PopUpCartContext from '../../context/PopUpCartProvider'
import ProductsInCartContext from '../../context/ProductsInCartProvider'
import TotalToPayContext from '../../context/TotalToPayProvider'

const CartItem = ({ nameProduct, imgProduct, pricePerQuantity, unitPrice, id, quantity, index, deleteItem }) => {

    const contextItems = useContext(ProductsInCartContext)
    const {ProductsInCart, setProductsInCart} = contextItems

    const contextTotalToPay = useContext(TotalToPayContext)
    const { setTotalToPay } = contextTotalToPay

    const contextPopUp = useContext(PopUpCartContext)
    const {setPopUpCart} = contextPopUp

    const addQuantity = () => {
        if (ProductsInCart[index].quantity < 25) {
            const temporal = ProductsInCart
            temporal[index].quantity++ 
            temporal[index].pricePerQuantity += temporal[index].unitPrice 
            setProductsInCart(temporal)
            setTotalToPay((prevTotal) => prevTotal += unitPrice)
        }
    }

    const subtractQuantity = () => {
        if (ProductsInCart[index].quantity > 1) {
            const temporal = ProductsInCart
            temporal[index].quantity--
            temporal[index].pricePerQuantity -= temporal[index].unitPrice 
            setProductsInCart(temporal)
            setTotalToPay((prevTotal) => prevTotal -= unitPrice)
        }
    }

    const onClickDelete = () => {
        deleteItem(id)
        setPopUpCart((prevPopUp) => prevPopUp - ProductsInCart[index].quantity)
        setTotalToPay((prevTotal) => prevTotal -= ProductsInCart[index].pricePerQuantity )
    }

    return (
        <article className='container-cart-item'>
            <img className='imgProduct' src={imgProduct} alt={nameProduct}/>
            <div>
                <p>{nameProduct} x {ProductsInCart[index].quantity}</p>
                <span>${ProductsInCart[index].pricePerQuantity}</span>
                <ItemQuantitySelector 
                    quantity={ProductsInCart[index].quantity} 
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