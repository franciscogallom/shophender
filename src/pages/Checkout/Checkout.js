import React, { useContext, useState, useReducer } from 'react'

import { getFirestore } from '../../firebase'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

import './checkout.scss'

import checkPay from '../../assets/img/check.svg'

import NoMatch from '../NoMatch/NoMatch'
import Loader from '../../components/Loader/Loader'
import Auth from '../../components/Auth/Auth'

import ProductsInCartContext from '../../context/ProductsInCartProvider'
import AuthContext from '../../context/AuthProvider'

const Checkout = () => {

    const { productsInCart, setProductsInCart } = useContext(ProductsInCartContext)

    const { email } = useContext(AuthContext)
    
    const ACTIONS = {
        UPDATE_NAME: 'update_name',
        UPDATE_SURNAME: 'update_surname',
        UPDATE_ADDRESS: 'update_address',
        UPDATE_PHONE: 'update_phone',
        UPDATE_CITY: 'update_city'
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.UPDATE_NAME:
                return {
                    ...state,
                    name: action.payload
                }
            case ACTIONS.UPDATE_SURNAME:
                return {
                    ...state,
                    surname: action.payload
                }
            case ACTIONS.UPDATE_ADDRESS:
                return {
                    ...state,
                    address: action.payload
                }
            case ACTIONS.UPDATE_PHONE:
                return {
                    ...state,
                    phone: action.payload
                }
            case ACTIONS.UPDATE_CITY:
                return {
                    ...state,
                    city: action.payload
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        surname: '',
        adress: '',
        phone: '',
        city: ''
    })

    const {name, surname, address, phone, city} = state

    const [orderID, setOrderID] = useState('')
    // Manejo si ya finalice la compra.
    const [buyCompleted, setBuyCompleted] = useState(false)
    // Controlo que el usuario este registrado.
    const [canContinueWithBuy, setCanContinueWithBuy] = useState(email !== '')

    const [loader, setLoader] = useState(false)

    const handleBuy = () => {
        setLoader(true)
        const db = getFirestore()
        const totalToPay = productsInCart.reduce((accumulator, currentValue) => accumulator + currentValue.pricePerQuantity, 0)

        const items = productsInCart.map(item => {
            return({
                title: item.nameProduct,
                id: item.id,
                totalPrice: item.pricePerQuantity,
                quantity: item.quantity
            })
        })

        const orders = db.collection('orders')
        const newOrder = {
            buyer: {name: name, 
                    surname: surname, 
                    phone: phone, 
                    email: email, 
                    address: address,
                    city: city
                },
            items: items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalToPay
        }

        orders.add(newOrder).then(({ id }) => {
            setOrderID(id)
        }).catch(err => {
            console.error('Error: ' + err)
        }).finally(() => {
            setLoader(false)
            setBuyCompleted(true)
            // Vacio el carrito.
            setProductsInCart([])
        })
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
                                <input type = "text" placeholder = 'Nombre.' onChange = {(e) =>
                                    dispatch({type: ACTIONS.UPDATE_NAME, payload: e.target.value})} />
                                <input type = "text" placeholder = 'Apellido.' onChange = {(e) => 
                                    dispatch({type: ACTIONS.UPDATE_SURNAME, payload: e.target.value})} />
                                <input type = "text" placeholder = 'Ciudad.' onChange = {(e) => 
                                    dispatch({type: ACTIONS.UPDATE_CITY, payload: e.target.value})} />
                                <input type = "text" placeholder = 'Direccion.' onChange = {(e) => 
                                    dispatch({type: ACTIONS.UPDATE_ADDRESS, payload: e.target.value})} />
                                <input type = "text" placeholder = 'Número de celular.' onChange = {(e) => 
                                    dispatch({type: ACTIONS.UPDATE_PHONE, payload: e.target.value})} />
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