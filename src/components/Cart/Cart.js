import React, { useContext } from 'react'

import './cart.scss'

import CartItem from '../CartItem/CartItem'
import NoMatch from '../NoMatch/NoMatch'
import TotalToPay from '../TotalToPay/TotalToPay'

// Context para manejar el array de productos del carrito.
import ItemsQuantityContext from '../../context/ItemsQuantityProvider'

const Cart = () => {

    const contextItems = useContext(ItemsQuantityContext)

    const { itemsQuantity, setItemsQuantity } = contextItems

    // Recibe un ID  de CartItem y elimina el producto correspondiente.
    const deleteItem = (id) => {
        setItemsQuantity((prevItems) => prevItems.filter(item => item.id !== id))
    }

    return (
            <section className='cart-container margin-t'>
                {
                    itemsQuantity
                        ?
                        
                            <section>
                                <h1>CARRITO</h1>
                                {
                                    itemsQuantity.map((item, index) => {
                                        return (
                                            <CartItem 
                                                nameProduct = {item.nameProduct} 
                                                imgProduct = {item.imgProduct} 
                                                priceProduct = {item.priceProduct} 
                                                key = {item.key}
                                                id = {item.key}
                                                quantity = {item.quantity}
                                                index = {index}
                                                deleteItem = {deleteItem}
                                            />
                                            )
                                        })
                                }
                                <TotalToPay />
                            </section>

                        :
                        
                            <NoMatch text='Aún no has agregado productos al carrito, ¿que esperas?' />
                }
            </section>
    )
}

export default Cart;