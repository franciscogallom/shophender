import React from 'react'

import CartItem from './CartItem/CartItem'
import NoMatch from '../NoMatch/NoMatch'

// IMAGEN DE PRUEBA. BORRAR DESPUES.
import imgProduct from '../../assets/img/h-buzo-1.jpg'

const Cart = () => {
    // Tendría que recibir las caracterisitcas del producto por props.

    // Las keys de cada item tiene que ser el ID del producto

    const cartArray = 
        [
            {
                nameProduct: 'Buzo Nike HR40', 
                imgProduct: imgProduct, 
                priceProduct: 5675,
                key: 1
            },
            {
                nameProduct: 'Buzo Nike HR40', 
                imgProduct: imgProduct, 
                priceProduct: 5675,
                key: 2
            },
        ]

        // IMPLEMENTAR deleteItem

    return (
            <section className='cart-container margin-t'>
                {
                    cartArray[0] ?
                        
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
                        
                        :
                        
                        <NoMatch text='Aún no has agregado productos al carrito, ¿que esperas?' />
                }
            </section>
    )
}

export default Cart;