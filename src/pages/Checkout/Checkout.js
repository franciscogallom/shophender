import React from 'react'

import './checkout.scss'

import { useCheckout } from './useCheckout'

import NoMatch from '../NoMatch/NoMatch'
import Loader from '../../components/Loader/Loader'
import Auth from '../../components/Auth/Auth'
import CheckoutForm from './CheckoutForm'
import PaymentMethod from './PaymentMethod'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_51Hz6TaAsHqZ5YjtY9NPm8SFeThObJkzJ0vX9LQf5PE1ccZ4FagZzHs5oeqz8g6WvVZxg8ZjsIpy1Nk6NabBZVthd00UOSUA8Cr')

const Checkout = () => {
    
    const { loader, buyCompleted, setBuyCompleted, orderID, productsInCart, canContinueWithBuy, setCanContinueWithBuy, handleBuy, showPayment } = useCheckout()

    const totalToPay = productsInCart.reduce((accumulator, currentValue) => accumulator + currentValue.pricePerQuantity, 0)

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
                    <p className = 'checkout-total'>TOTAL A PAGAR: ${ totalToPay }</p>
                    {
                        // Si el usuario no esta registrado, le digo que lo haga para poder comprar.
                        !canContinueWithBuy ? <Auth onCheckout = 'onCheckout' handleFlow = {() => setCanContinueWithBuy(true)} /> :
                        // Una vez tregistrado, primero leo los datos de envio, y luego el metodo de pago.
                        !showPayment 
                            ?
                                <>
                                    <p className = 'p-checkout'>Datos de envío.</p>
                                    <CheckoutForm 
                                            handleBuy = { handleBuy }
                                            totalToPay = { totalToPay }
                                    />
                                </>
                            :
                                <>
                                    <p className = 'p-checkout'>Datos de facturación.</p>
                                    <Elements stripe = { stripePromise } >
                                        <PaymentMethod 
                                            totalToPay = { totalToPay } 
                                            setBuyCompleted = { setBuyCompleted }
                                            orderID = { orderID }
                                        />
                                    </Elements>
                                </>
                    }
                </section>
                :
                <NoMatch />
    )
}

export default Checkout