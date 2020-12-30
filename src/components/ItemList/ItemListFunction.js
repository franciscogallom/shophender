import React from 'react'

import { Link } from 'react-router-dom'

export default function ItemList ({ product }) {

    return (
        <article className = 'item-list'>
            <Link to = {`/products/${product.sex}/${product.category}/${product.id}`}>
                <div className = 'container-img'>
                    <img src = {'/images/' + product.img1} alt = {product.nameProduct} />
                    <img className = 'img-hover' src = {'/images/' + product.img2} alt = "Product"/>
                </div>
                <p>{product.nameProduct}</p><br/>
                <span>${product.unitPrice}</span>
            </Link>
        </article>
    )
}
