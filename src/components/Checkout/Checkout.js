import React, { useContext } from 'react'

import CheckoutForm from '../CheckoutForm/CheckoutForm'

import './checkout.scss'

import checkPay from '../../assets/img/check.svg'

import TotalToPayContext from '../../context/TotalToPayProvider'
import ItemsQuantityContext from '../../context/ItemsQuantityProvider'
import ButtonCallToAction from '../ButtonCallToAction/ButtonCallToAction'

const Checkout = () => {

    const contextTotalToPay = useContext(TotalToPayContext)
    const {totalToPay} = contextTotalToPay

    const contextItems = useContext(ItemsQuantityContext)
    const { itemsQuantity } = contextItems

    return (
        <section className='checkout margin-t'>
            <h1>CHECKOUT</h1>
            {
                itemsQuantity.map(item => {
                    return  <article key={item.key}>
                                <p>{item.nameProduct} x {item.quantity}</p>
                                <span>${item.priceProduct}</span>
                            </article>
                })
            }
            <p className='checkout-total'>TOTAL A PAGAR: ${totalToPay}</p>
            <CheckoutForm />
            <ButtonCallToAction 
                link = '/'
                text = 'CONFIRMAR COMPRA ' 
                imgBtn = {checkPay} 
                alt = 'Confirmar compra.' 
            />
        </section>
    )
}

export default Checkout;