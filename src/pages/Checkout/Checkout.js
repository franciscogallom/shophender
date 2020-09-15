import React, { useContext } from 'react'

import './checkout.scss'

import checkPay from '../../assets/img/check.svg'

import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import TotalToPayContext from '../../context/TotalToPayProvider'
import ItemsQuantityContext from '../../context/ItemsQuantityProvider'
import ButtonCallToAction from '../../components/ButtonCallToAction/ButtonCallToAction'
import NoMatch from '../NoMatch/NoMatch'

const Checkout = () => {

    const contextTotalToPay = useContext(TotalToPayContext)
    const {totalToPay} = contextTotalToPay

    const contextItems = useContext(ItemsQuantityContext)
    const { itemsQuantity } = contextItems

    return (
        itemsQuantity[0]
            ?
                <section className='checkout margin-t'>
                    <h1>CHECKOUT</h1>
                    {
                        itemsQuantity.map(item => {
                            return  <article key={item.key}>
                                        <p>{item.nameProduct} x {item.quantity}</p>
                                        <span>${item.pricePerQuantity}</span>
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
            :
                <NoMatch />
    )
}

export default Checkout;