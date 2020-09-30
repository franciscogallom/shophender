import React, { useContext } from 'react'

import './cart.scss'

import payImg from '../../assets/img/pay.png'

import CartItem from '../../components/CartItem/CartItem'
import NoMatch from '../NoMatch/NoMatch'
import ButtonCallToAction from '../../components/ButtonCallToAction/ButtonCallToAction'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

const Cart = () => {

    const contextItems = useContext(ProductsInCartContext)
    const { productsInCart, setProductsInCart } = contextItems

    // Recibe un ID  de CartItem y elimina el producto correspondiente.
    const deleteItem = (id) => {
        setProductsInCart((prevItems) => prevItems.filter(item => item.id !== id))
    }

    return (
        productsInCart[0]
            ?
                <section className='cart-container margin-t'>
                    <h1 className='cart-title'>CARRITO</h1>
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
                        <p>TOTAL A PAGAR: <span>${productsInCart.reduce((accumulator, currentValue) => accumulator + currentValue.pricePerQuantity, 0)}</span></p>
                        <ButtonCallToAction 
                            link = '/checkout'
                            text='REALIZAR COMPRA ' 
                            imgBtn={payImg} 
                        />
                    </div>
                </section>
            :
                <NoMatch text='Aún no has agregado productos al carrito, ¿que esperas?' />
    )
}

export default Cart