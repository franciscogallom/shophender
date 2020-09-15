import React, { useContext } from 'react'

import './itemDetail.scss'

import addToCart from '../../assets/img/cart-add.svg'

import ItemsQuantityContext from '../../context/ItemsQuantityProvider'
import PopUpCartContext from '../../context/PopUpCartProvider'
import TotalToPayContext from '../../context/TotalToPayProvider'

// ENVIAR DATOS POR PROPS! (props.imgProduct, props.nameProduct, props.pricePerQuantity).

const ItemDetail = (props) => {

    const contextItems = useContext(ItemsQuantityContext)
    const { setItemsQuantity } = contextItems

    const contextPopUp = useContext(PopUpCartContext)
    const { setPopUpCart } = contextPopUp

    const contextTotalToPay = useContext(TotalToPayContext)
    const { setTotalToPay } = contextTotalToPay

    // Agrego un producto al carrito, actualizo el pop up del Cart y la cantidad a pagar.
    const setItemsQuantityFunction = () => {
        setItemsQuantity((prevItems) => [...prevItems, {
            // Cuando utilice props, cambiar datos estaticos por props.
            nameProduct: 'Buzo Nike HR40', 
            imgProduct: 'imagen', 
            pricePerQuantity: 5670,
            unitPrice: 5670,
            key: 123,
            id: 123,
            quantity: 1
        }])
        setPopUpCart((prevPopUp) => prevPopUp + 1)
        setTotalToPay((prevTotal) => prevTotal + 5675) // Cuando utilice props, cambiar 5675 por props.pricePerQuantity
    }

    return (
        <section className='container-item-detail margin-t'>
            {/* Cuando utilice props, cambiar datos estaticos por props.*/}
            <img src={require('../../assets/img/h-buzo-1.jpg')} alt={props.nameProduct} />
            <div>
                <h1>Buzo Nike HR40</h1>
                <span>$5670</span>
                <button onClick={setItemsQuantityFunction}>Añadir al carrito<img src={addToCart} alt="Add to cart."/></button>
                <p>COMODIDAD CLÁSICA. ESTILO COMBINADO. Te presentamos el buzo Nike PO FT con un logotipo Nike en colores contrastantes y un ajuste un poco más grande, el buzo con capucha Nike Sportswear NSW ofrece comodidad clásica y un estilo urbano audaz. Ajuste extragrande
                    El ajuste ligeramente más grande y los hombros caídos te dan un estilo urbano y relajado.
                    Comodidad y suavidad. La tela de felpa francesa es suave y cómoda para el uso diario.
                </p>
            </div>
        </section>
    )
}

export default ItemDetail;