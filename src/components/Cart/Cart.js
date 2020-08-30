import React, { useContext } from 'react'

import './cart.scss'

import CartItem from '../CartItem/CartItem'
import NoMatch from '../NoMatch/NoMatch'
import TotalToPay from '../TotalToPay/TotalToPay'

// Importo Context para manejar la cantidad de items en el carrito.
import ItemsQuantityContext from '../../context/ItemsQuantityProvider'

const Cart = () => {
    // Las keys de cada item tiene que ser el ID del producto

    const contextItems = useContext(ItemsQuantityContext)

    const { itemsQuantity } = contextItems

    return (
            <section className='cart-container margin-t'>
                {
                    itemsQuantity[0] 
                        ?
                        
                            <section>
                                <h1>CARRITO</h1>
                                {
                                    itemsQuantity.map(item => {
                                        return (
                                            <CartItem 
                                                nameProduct= {item.nameProduct} 
                                                imgProduct= {item.imgProduct} 
                                                priceProduct= {item.priceProduct} 
                                                key= {item.key}
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