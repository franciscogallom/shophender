import React, { useContext } from 'react'

import './cart.scss'

import CartItem from '../../components/CartItem/CartItem'
import NoMatch from '../NoMatch/NoMatch'
import ButtonCallToAction from '../../components/ButtonCallToAction/ButtonCallToAction'

import payImg from '../../assets/img/pay.png'

import TotalToPayContext from '../../context/TotalToPayProvider'
import ItemsQuantityContext from '../../context/ItemsQuantityProvider'

const Cart = () => {

    const contextTotalToPay = useContext(TotalToPayContext)
    const { totalToPay } = contextTotalToPay

    const contextItems = useContext(ItemsQuantityContext)
    const { itemsQuantity, setItemsQuantity } = contextItems

    // Recibe un ID  de CartItem y elimina el producto correspondiente.
    const deleteItem = (id) => {
        setItemsQuantity((prevItems) => prevItems.filter(item => item.id !== id))
    }

    return (
        itemsQuantity[0]
            ?
                <section className='cart-container margin-t'>
                    <h1>CARRITO</h1>
                    {
                        itemsQuantity.map((item, index) => {
                            return (
                                <CartItem 
                                    nameProduct = {item.nameProduct} 
                                    imgProduct = {item.imgProduct} 
                                    priceProduct = {item.priceProduct} 
                                    key = {item.key}
                                    id = {item.key}
                                    quantity = {item.quantity}
                                    index = {index}
                                    deleteItem = {deleteItem}
                                />
                                )
                            })
                    }
                    <div className='total-to-pay'>
                        <p>TOTAL A PAGAR: <span>${totalToPay}</span></p>
                        <ButtonCallToAction 
                            link = '/checkout'
                            text='REALIZAR COMPRA ' 
                            imgBtn={payImg} 
                            alt="Realizar compra." 
                        />
                    </div>
                </section>
            :
                <NoMatch text='Aún no has agregado productos al carrito, ¿que esperas?' />
    )
}

export default Cart;