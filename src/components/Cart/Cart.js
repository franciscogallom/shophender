import React, { useContext, useEffect } from 'react'

import './cart.scss'

import CartItem from '../CartItem/CartItem'
import NoMatch from '../NoMatch/NoMatch'
import TotalToPay from '../TotalToPay/TotalToPay'

// IMAGEN DE PRUEBA. BORRAR DESPUES.
import imgProduct from '../../assets/img/h-buzo-1.jpg'
import imgProduct2 from '../../assets/img/h-rem-5.webp'

// Importo Context para manejar la cantidad de items en el carrito.
import ItemsQuantityContext from '../../context/ItemsQuantityProvider'

const Cart = () => {
    // Tendría que recibir las caracterisitcas del producto por props.
    // Las keys de cada item tiene que ser el ID del producto
    
    const cartArray = // de prueba
    [
        {
            nameProduct: 'Buzo Nike HR40', 
            imgProduct: imgProduct, 
            priceProduct: 5675,
            key: 1,
            quantity: 1
        },
        {
            nameProduct: 'Camiseta Nike LJ', 
            imgProduct: imgProduct2, 
            priceProduct: 3420,
            key: 2,
            quantity: 1
        },
    ]

    // La cantidad de productos es igual a la cantidad de objetos dentro de cartArray.
    // Luego, si hay un item con una cantidad mayor a uno, eso lo maneja cada item y actualiza la cantidad total.

    const contextItems = useContext(ItemsQuantityContext)

    const {setItemsQuantity} = contextItems
    // Solo quiero que se ejecute cuando cambia la longitud del vector.
    useEffect(() => {
        setItemsQuantity(cartArray.length)
    }, [cartArray.length])


        // IMPLEMENTAR deleteItem

    return (
            <section className='cart-container margin-t'>
                {
                    cartArray[0] ?
                        
                    <section>
                        <h1>CARRITO</h1>
                        {
                            cartArray.map(item => {
                                return (
                                    <CartItem 
                                        nameProduct= {item.nameProduct} 
                                        imgProduct= {item.imgProduct} 
                                        priceProduct= {item.priceProduct} 
                                        key= {item.key}
                                        // deleteItem= {deleteItem}
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