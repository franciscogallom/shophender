import React from 'react'

import './checkout.scss'

import { useForm } from './useForm'
import { useCheckout } from './useCheckout'

import checkPay from '../../assets/img/check.svg'

import NoMatch from '../NoMatch/NoMatch'
import Loader from '../../components/Loader/Loader'
import Auth from '../../components/Auth/Auth'

const Checkout = () => {

    const { data, updates } = useForm()
    const { name, surname, address,  phone, city } = data
    
    const { loader, buyCompleted, orderID, productsInCart, canContinueWithBuy, setCanContinueWithBuy, handleBuy } = useCheckout(data)

    return (
        loader ? <Loader /> :
        // Si la compra esta completada, doy feedback del numero de orden y demas. Si no es así, trabajo con el checkout.
        buyCompleted 
            ?                         
            <div className = 'margin-t buy-completed'>
                <h1>{name}, gracias por tu compra.</h1>
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
                            <form className = 'checkout-form'> 
                                <input type = "text" placeholder = 'Nombre.' onChange = {(e) => updates.name(e.target.value)}/>
                                <input type = "text" placeholder = 'Apellido.' onChange = {(e) => updates.surname(e.target.value)}/>
                                <input type = "text" placeholder = 'Ciudad.' onChange = {(e) => updates.city(e.target.value)}/>
                                <input type = "text" placeholder = 'Direccion.' onChange = {(e) => updates.address(e.target.value)}/>
                                <input type = "text" placeholder = 'Número de celular.' onChange = {(e) => updates.phone(e.target.value)}/>
                            </form>
                            {
                            // Minima validacion de datos.
                            (   
                                phone.length > 6 && 
                                name.length > 2 && 
                                surname.length > 2 &&
                                address.length > 2 &&
                                city.length > 2
                            ) 
                                && <button onClick = {handleBuy} className = 'confirm-buy-btn'>CONFIRMAR COMPRA <img src = {checkPay} alt = "$"/></button>}
                        </>
                    }
                </section>
                :
                <NoMatch />
    )
}

export default Checkout