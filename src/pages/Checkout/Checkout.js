import React, { useState, useEffect, useContext } from 'react'

import './checkout.scss'

import checkPay from '../../assets/img/check.svg'

import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import ButtonCallToAction from '../../components/ButtonCallToAction/ButtonCallToAction'
import NoMatch from '../NoMatch/NoMatch'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

const Checkout = () => {

    const contextItems = useContext(ProductsInCartContext)
    const { productsInCart } = contextItems

    const [totalToPay, setTotalToPay] = useState(0);
    useEffect(() => {
        productsInCart.forEach(product => {
            setTotalToPay(prevTotal => prevTotal + (product.unitPrice * product.quantity)); 
        });
    }, [productsInCart])

    return (
        productsInCart[0]
            ?
                <section className='checkout margin-t'>
                    <h1>CHECKOUT</h1>
                    {
                        productsInCart.map(item => {
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