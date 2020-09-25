import React from 'react'

import './itemList.scss'

import { Link } from 'react-router-dom'

const ItemList = ({ product }) => {
    return (
        <article className='item-list'>
            <Link to={`/products/${product.genderProduct}/${product.categoryProduct}/${product.key}`}>
                <div className='container-img'>
                    <img src={product.imgProduct} alt="Product"/>
                    <img className='img-hover' src={product.imgProductH} alt="Product"/>
                </div>
                <p>{product.nameProduct}</p><br/>
                <span>${product.pricePerQuantity}</span>
            </Link>
        </article>
    )
}

export default ItemList