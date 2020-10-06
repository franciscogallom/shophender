import React, { useContext } from 'react'

import './cart.scss'

import payImg from '../../assets/img/pay.png'

import CartItem from '../../components/CartItem/CartItem'
import NoMatch from '../NoMatch/NoMatch'
import CartButton from '../../components/CartButton/CartButton'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

const Cart = () => {

    const { productsInCart, setProductsInCart } = useContext(ProductsInCartContext)

    // Recibe un ID  de CartItem y elimina el producto correspondiente.
    const deleteItem = (id) => {
        setProductsInCart((prevItems) => prevItems.filter(item => item.id !== id))
    }

    return (
        productsInCart[0]
            ?
                <section className = 'cart-container margin-t'>
                    <h1 className = 'cart-title'>CARRITO</h1>
                    {
                        productsInCart.map((item, index) => {
                            return (
                                <CartItem
                                    item = {item}
                                    index = {index}
                                    deleteItem = {deleteItem}
                                />
                                )
                            })
                    }
                    <div className = 'total-to-pay'>
                        <p>TOTAL A PAGAR: <span>${productsInCart.reduce((accumulator, currentValue) => accumulator + currentValue.pricePerQuantity, 0)}</span></p>
                        <CartButton 
                            link = '/checkout'
                            text = 'REALIZAR COMPRA ' 
                            imgBtn = {payImg} 
                        />
                    </div>
                </section>
            :
                <NoMatch text='Aún no has agregado productos al carrito, ¿que esperas?' />
    )
}

export default Cart