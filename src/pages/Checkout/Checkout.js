import React, { useContext } from 'react'

import './checkout.scss'

import checkPay from '../../assets/img/check.svg'

import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import ButtonCallToAction from '../../components/ButtonCallToAction/ButtonCallToAction'
import NoMatch from '../NoMatch/NoMatch'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

const Checkout = () => {

    const contextItems = useContext(ProductsInCartContext)
    const { productsInCart } = contextItems

    return (
        productsInCart[0]
            ?
                <section className='checkout margin-t'>
                    <h1>CHECKOUT</h1>
                    {
                        productsInCart.map(item => {
                            return  <article key={item.key}>
                                        <p><span>{item.nameProduct}</span> x {item.quantity}</p>
                                        <span className='price-per-quantity'>${item.pricePerQuantity}</span>
                                    </article>
                        })
                    }
                    <p className='checkout-total'>TOTAL A PAGAR: ${productsInCart.reduce((accumulator, currentValue) => accumulator + currentValue.pricePerQuantity, 0)}</p>
                    <CheckoutForm />
                    <ButtonCallToAction 
                        link = '/'
                        text = 'CONFIRMAR COMPRA ' 
                        imgBtn = {checkPay} 
                    />
                </section>
            :
                <NoMatch />
    )
}

export default Checkout