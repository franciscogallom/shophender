import React from 'react'

import './itemDetail.scss'

import addToCart from '../../assets/img/cart-add.svg'

const ItemDetail = (props) => {
    return (
        <section className='container-item-detail margin-t'>
            <img src={props.imgProduct} alt={props.nameProduct} />
            <div>
                <h1>{props.nameProduct}</h1>
                <span>${props.priceProduct}</span>
                <button>Añadir al carrito<img src={addToCart} alt="Add to cart."/></button>
                <p>{props.detailProduct}</p>
            </div>
        </section>
    )
}

export default ItemDetail;