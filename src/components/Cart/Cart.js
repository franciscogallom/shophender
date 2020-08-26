import React from 'react'

import CartItem from './CartItem/CartItem'

// IMAGEN DE PRUEBA. BORRAR DESPUES.
import imgProduct from '../../assets/img/img-prueba-hombre.jpg'

const Cart = () => {
    // Tendría que recibir las caracterisitcas del producto por props.

    // IMPLEMENTAR: si hay items, muestro CHECKOUT, sino, muestro que no hay items}

    return (
            <section className='cart-container margin-t'>
                <CartItem 
                    nameProduct='Buzo Nike HR40' 
                    imgProduct={imgProduct} 
                    priceProduct={5675}
                />
                <CartItem 
                    nameProduct='Buzo Nike HR40' 
                    imgProduct={imgProduct} 
                    priceProduct={5675}
                />
            </section>
    )
}

export default Cart;