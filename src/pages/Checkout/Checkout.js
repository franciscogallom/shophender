import React from 'react'

import './checkout.scss'

import { useCheckout } from './useCheckout'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import checkPay from '../../assets/img/check.svg'

import NoMatch from '../NoMatch/NoMatch'
import Loader from '../../components/Loader/Loader'
import Auth from '../../components/Auth/Auth'

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
                            
                            <Formik
                                initialValues = {{name: '', surname: '', address: '', phone: '', city: ''}}
                                onSubmit = {(values) => handleBuy(values)}
                                validate = {values => {
                                    const errors = {}
                                    if (!values.name) errors.name = 'Campo requerido.'
                                    if (!values.surname) errors.surname = 'Campo requerido.'
                                    if (!values.city) errors.city = 'Campo requerido.'
                                    if (!values.address) errors.address = 'Campo requerido.'
                                    if (!values.phone) { 
                                        errors.phone = 'Campo requerido.'
                                    } else if (!/^\d{6,20}$/.test(values.phone)){
                                        errors.phone = 'Numero inválido.';
                                    }
                                    return errors
                                }
                            }
                            >
                                {
                                    (errors) =>   
                                        <Form className = 'checkout-form' > 
                                            <Field name = "name" placeholder = 'Nombre.' />
                                            <ErrorMessage name = 'name' component = 'p' className = 'p-error' />
                                            <Field name = "surname" placeholder = 'Apellido.' />
                                            <ErrorMessage name = 'surname' component = 'p' className = 'p-error' />
                                            <Field name = "city" placeholder = 'Ciudad.' />
                                            <ErrorMessage name = 'city' component = 'p' className = 'p-error' />
                                            <Field name = "address" placeholder = 'Direccion.' />
                                            <ErrorMessage name = 'address' component = 'p' className = 'p-error' />
                                            <Field name = "phone" placeholder = 'Número de celular.' />
                                            <ErrorMessage name = 'phone' component = 'p' className = 'p-error' />
                                            <button 
                                                className = 'confirm-buy-btn'
                                                type = 'submit'
                                            >
                                                    CONFIRMAR COMPRA 
                                                    <img src = {checkPay} alt = "$"/>
                                            </button>
                                        </Form>
                                }
                            </Formik>
                        </>
                    }
                </section>
                :
                <NoMatch />
    )
}

export default Checkout