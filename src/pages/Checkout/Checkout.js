import React, { useContext } from 'react'

import './checkout.scss'

import checkPay from '../../assets/img/check.svg'
import signIn from '../../assets/img/sign-in.svg'

import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import ButtonCallToAction from '../../components/ButtonCallToAction/ButtonCallToAction'
import NoMatch from '../NoMatch/NoMatch'

import ProductsInCartContext from '../../context/ProductsInCartProvider'
import AuthContext from '../../context/AuthProvider'

const Checkout = () => {

    const { productsInCart } = useContext(ProductsInCartContext)

    const { email } = useContext(AuthContext)

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
                    {
                        !email ?
                                <div className='not-register'>
                                    <p>Aún no estas registrado! Hazlo y regresa.</p>
                                    <ButtonCallToAction 
                                        link = '/authentication'
                                        text = 'INGRESAR ' 
                                        imgBtn = {signIn} 
                                    />
                                </div>
                            :
                        <>
                            <CheckoutForm />
                            <ButtonCallToAction 
                                link = '/'
                                text = 'CONFIRMAR COMPRA ' 
                                imgBtn = {checkPay} 
                            />
                        </>
                    }
                </section>
            :
                <NoMatch />
    )
}

export default Checkout