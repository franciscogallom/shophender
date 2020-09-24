import React, { useState, useEffect, useContext } from 'react'

import './cart.scss'

import CartItem from '../../components/CartItem/CartItem'
import NoMatch from '../NoMatch/NoMatch'
import ButtonCallToAction from '../../components/ButtonCallToAction/ButtonCallToAction'

import payImg from '../../assets/img/pay.png'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

const Cart = () => {

    const contextItems = useContext(ProductsInCartContext)
    const { productsInCart, setProductsInCart } = contextItems

    // const [totalToPay, setTotalToPay] = useState(0);
    // useEffect(() => {
    //     productsInCart.forEach(product => {
    //         setTotalToPay(prevTotal => prevTotal + (product.unitPrice * product.quantity)); 
    //     });
    // }, [productsInCart])


    // Recibe un ID  de CartItem y elimina el producto correspondiente.
    const deleteItem = (id) => {
        setProductsInCart((prevItems) => prevItems.filter(item => item.id !== id))
    }

    return (
        productsInCart[0]
            ?
                <section className='cart-container margin-t'>
                    <h1>CARRITO</h1>
                    {
                        productsInCart.map((item, index) => {
                            return (
                                <CartItem 
                                    nameProduct = {item.nameProduct} 
                                    imgProduct = {item.imgProduct} 
                                    pricePerQuantity = {item.pricePerQuantity} 
                                    unitPrice = {item.unitPrice}
                                    key = {item.key}
                                    id = {item.key}
                                    quantity = {item.quantity}
                                    index = {index}
                                    deleteItem = {deleteItem}
                                />
                                )
                            })
                    }
                    <div className='total-to-pay'>
                        <p>TOTAL A PAGAR: <span>${productsInCart.reduce((acc, current) => acc + current.pricePerQuantity, 0)}</span></p>
                        <ButtonCallToAction 
                            link = '/checkout'
                            text='REALIZAR COMPRA ' 
                            imgBtn={payImg} 
                            alt="Realizar compra." 
                        />
                    </div>
                </section>
            :
                <NoMatch text='Aún no has agregado productos al carrito, ¿que esperas?' />
    )
}

export default Cart;