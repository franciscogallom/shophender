import React from 'react'

import './checkout.scss'

import { useCheckout } from './useCheckout'

import NoMatch from '../NoMatch/NoMatch'
import Loader from '../../components/Loader/Loader'
import Auth from '../../components/Auth/Auth'
import CheckoutForm from './CheckoutForm'

const Checkout = () => {
    
    const { loader, buyCompleted, orderID, productsInCart, canContinueWithBuy, setCanContinueWithBuy, handleBuy } = useCheckout()

    return (
        loader ? <Loader /> :
        // Si la compra esta completada, doy feedback del numero de orden y demas. Si no es así, trabajo con el checkout.
        buyCompleted 
            ?                         
            <div className = 'margin-t buy-completed'>
                <h1>Gracias por tu compra.</h1>
                <p>Código de la orden: <strong>{orderID}</strong></p>
            </div> 
            :
        // Si hay productos agregados, los muestro. De no ser así, muestro NoMatch.
            productsInCart[0]
                ?
                <section className = 'checkout margin-t'>
                    <h1 className = 'checkout-title'>CHECKOUT</h1>
                    {
                        productsInCart.map(item => {
                            return  <article key = {item.key}>
                                        <p><span>{item.nameProduct}</span> x {item.quantity}</p>
                                        <span className='price-per-quantity'>${item.pricePerQuantity}</span>
                                    </article>
                        })
                    }
                    <p className = 'checkout-total'>TOTAL A PAGAR: ${productsInCart.reduce((accumulator, currentValue) => accumulator + currentValue.pricePerQuantity, 0)}</p>
                    {
                        // Si el usuario no esta registrado, le digo que lo haga para poder comprar.
                        !canContinueWithBuy ? <Auth onCheckout = 'onCheckout' handleFlow = {() => setCanContinueWithBuy(true)} /> :
                        <>
                            <p className = 'p-checkout'>Datos de facturación.</p>
                            <CheckoutForm handleBuy = {handleBuy} />
                        </>
                    }
                </section>
                :
                <NoMatch />
    )
}

export default Checkout