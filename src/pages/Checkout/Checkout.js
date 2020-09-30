import React, { useContext, useState } from 'react'

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

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')

    const [orderID, setOrderID] = useState('')
    const [buyCompleted, setBuyCompleted] = useState(false)
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
            console.log('error ' + err)
        }).finally(() => {
            setLoader(false)
            setBuyCompleted(true)
            setProductsInCart([])
        })
    }

    return (
        loader ? <Loader/> :
        // Si la compra esta completada, doy feedback del numero de orden y demas. Si no es así, trabajo con el checkout.
        
        buyCompleted ?                         
            <div className='margin-t buy-completed'>
                <h1>{name}, gracias por tu compra.</h1>
                <p>Código de la orden: <strong>{orderID}</strong></p>
            </div> 
            :
        
            productsInCart[0]
            ?
                <section className='checkout margin-t'>
                    <h1 className='checkout-title'>CHECKOUT</h1>
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
                        !canContinueWithBuy ? <Auth changeBackground = 'changeToWhite' handleFlow = {() => setCanContinueWithBuy(true)} /> :
                        <>
                            <p className='p-checkout'>Datos de facturación.</p>
                            <form className='checkout-form'> 
                                <input type="text" placeholder='Nombre.' onChange = {(e) => setName(e.target.value)} />
                                <input type="text" placeholder='Apellido.' onChange = {(e) => setSurname(e.target.value)} />
                                <input type="text" placeholder='Ciudad.' onChange = {(e) => setCity(e.target.value)} />
                                <input type="text" placeholder='Direccion.' onChange = {(e) => setAddress(e.target.value)} />
                                <input type="number" placeholder='Número de celular.' onChange = {(e) => setPhone(e.target.value)} />
                            </form>
                            {
                            // Minima validacion de datos.
                            (phone.length > 6 && 
                                name.length > 2 && 
                                surname.length > 2 &&
                                address.length > 2 &&
                                city.length > 2
                                ) && <button onClick={handleBuy} className='confirm-buy-btn'>CONFIRMAR COMPRA <img src={checkPay} alt="$"/></button>}
                        </>
                    }
                </section>
            :
                <NoMatch />
    )
}

export default Checkout