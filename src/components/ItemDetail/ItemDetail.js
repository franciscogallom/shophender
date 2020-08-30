import React, { useContext } from 'react'

import './itemDetail.scss'

import addToCart from '../../assets/img/cart-add.svg'

// Importo Context para manejar el carrito
import ItemsQuantityContext from '../../context/ItemsQuantityProvider'
import PopUpCartContext from '../../context/PopUpCartProvider'

// Enviar datos por props!!!! props.imgProduct props.nameProduct rops.detailProduct

const ItemDetail = (props) => {

    const contextItems = useContext(ItemsQuantityContext)

    const {itemsQuantity, setItemsQuantity} = contextItems

    //.------------------------------------------------

    const contextPopUp = useContext(PopUpCartContext)

    const {setPopUpCart} = contextPopUp

    // -----------------------------------------------

    const setItemsQuantityFunction = () => {
        setItemsQuantity([...itemsQuantity, {
            nameProduct: 'ItemDetail', 
            imgProduct: 'imagen', 
            priceProduct: 5675,
            key: 123
        }])
        setPopUpCart((prevPopUp) => prevPopUp + 1)
    }

    return (
        <section className='container-item-detail margin-t'>
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