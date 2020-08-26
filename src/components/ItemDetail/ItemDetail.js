import React, { useState } from 'react'

import './itemDetail.scss'

import addToCart from '../../assets/img/cart-add.svg'

// Enviar datos por props!!!! props.imgProduct props.nameProduct rops.detailProduct
const ItemDetail = (props) => {

    const [quantity, setQuantity] = useState(1)

    const handleAddToCart = () => {
        setQuantity((prevQuantity) => prevQuantity + 1)
        console.log(quantity)
        // Esta informacion tiene que ser enviada al NavBar para que actualice la cantidad que se ve en el CartIcon
    }
    
    return (
        <section className='container-item-detail margin-t'>
            <img src={require('../../assets/img/h-buzo-1.jpg')} alt={props.nameProduct} />
            <div>
                <h1>Buzo Nike HR40</h1>
                <span>$5670</span>
                <button onClick={handleAddToCart}>Añadir al carrito<img src={addToCart} alt="Add to cart."/></button>
                <p>COMODIDAD CLÁSICA. ESTILO COMBINADO. Te presentamos el buzo Nike PO FT con un logotipo Nike en colores contrastantes y un ajuste un poco más grande, el buzo con capucha Nike Sportswear NSW ofrece comodidad clásica y un estilo urbano audaz. Ajuste extragrande
                    El ajuste ligeramente más grande y los hombros caídos te dan un estilo urbano y relajado.
                    Comodidad y suavidad. La tela de felpa francesa es suave y cómoda para el uso diario.
                </p>
            </div>
        </section>
    )
}

export default ItemDetail;