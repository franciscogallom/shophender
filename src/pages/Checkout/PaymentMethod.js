import React, { useContext, useState } from 'react'

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import axios from 'axios'

import checkPay from '../../assets/img/check.svg'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

import { useLocalStorage } from '../../hooks/useLocalStorage'

import { updateDoc } from '../../firebase'

const PaymentMethod = ({ totalToPay, setBuyCompleted, orderID }) => {

    const { setProductsInCart } = useContext(ProductsInCartContext)

    const [ , setProductsInLocalStorage] = useLocalStorage('products', [])

    const stripe = useStripe()
    const elements = useElements()

    const [loading, setLoading] = useState(false)
    const [ stripeError, setStripeError ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if(!error){
            const { id } = paymentMethod
            try {
                // Envio de datos al server.
                const { data } = await axios.post('https://shophender.vercel.app/api/checkout', {
                    id,
                    amount: totalToPay, // Esta en centavos. USD. Si tuviera los precios en dolares, tendría que multiplicar por 100.
                    description: orderID
                })
                console.log(data)
                if (data === 'Succesfull payment.'){
                    setBuyCompleted(true)
                    // Vacio el carrito y limpio el Local Storage.
                    setProductsInCart([])
                    setProductsInLocalStorage([])
                    updateDoc(orderID)
                } else {
                    setStripeError(data.message)
                }
            } catch (error) {
                setStripeError(error)
            }
        }
        setLoading(false)
    }

    return(
        <form onSubmit = { handleSubmit }>
            <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '1em',
                        fontWeight: 'bold',
                        color: '#424770',
                        '::placeholder': {
                        },
                    },
                },
            }}
            className = 'payment-card'
            />
            {stripeError !== '' && <p className = 'stripe-error'>{stripeError}</p>}
            <button className = 'confirm-buy-btn'>
                {!loading ? 'CONFIRMAR COMPRA' : 'ESTAMOS PROCESANDO EL PAGO 💳'}  
                {!loading && <img src = {checkPay} alt = "$"/>}
            </button>
        </form>
    )

} 

export default PaymentMethod