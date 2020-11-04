import React, { useContext, useState } from 'react'

import 'firebase/firestore'
import { addBuy } from '../../firebase'

import './checkout.scss'

import { useForm } from '../../hooks/useForm'

import checkPay from '../../assets/img/check.svg'

import NoMatch from '../NoMatch/NoMatch'
import Loader from '../../components/Loader/Loader'
import Auth from '../../components/Auth/Auth'

import ProductsInCartContext from '../../context/ProductsInCartProvider'
import AuthContext from '../../context/AuthProvider'

const Checkout = () => {

    const { productsInCart, setProductsInCart } = useContext(ProductsInCartContext)

    const { email } = useContext(AuthContext)

    const {name, surname, address, phone, city, updateName, updateSurname, updateAddress, updatePhone, updateCity} = useForm()

    const state = {name: name, surname: surname, address: address, phone: phone, city: city}

    const [orderID, setOrderID] = useState('')
    // Manejo si ya finalice la compra.
    const [buyCompleted, setBuyCompleted] = useState(false)
    // Controlo que el usuario este registrado.
    const [canContinueWithBuy, setCanContinueWithBuy] = useState(email !== '')

    const [loader, setLoader] = useState(false)

    const handleBuy = () => {
        addBuy(setLoader, productsInCart, setBuyCompleted, setProductsInCart, state, setOrderID, email)
    }

    return (
        loader ? <Loader /> :
        // Si la compra esta completada, doy feedback del numero de orden y demas. Si no es así, trabajo con el checkout.
        buyCompleted ?                         
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
                        // Si no estoy registrado, le digo al usuario que se registre para poder comprar.
                        !canContinueWithBuy ? <Auth onCheckout = 'onCheckout' handleFlow = {() => setCanContinueWithBuy(true)} /> :
                        <>
                            <p className = 'p-checkout'>Datos de facturación.</p>
                            <form className = 'checkout-form'> 
                                <input type = "text" placeholder = 'Nombre.' onChange = {(e) => updateName(e.target.value)}/>
                                <input type = "text" placeholder = 'Apellido.' onChange = {(e) => updateSurname(e.target.value)}/>
                                <input type = "text" placeholder = 'Ciudad.' onChange = {(e) => updateCity(e.target.value)}/>
                                <input type = "text" placeholder = 'Direccion.' onChange = {(e) => updateAddress(e.target.value)}/>
                                <input type = "text" placeholder = 'Número de celular.' onChange = {(e) => updatePhone(e.target.value)}/>
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