import React from 'react'

import './itemList.scss'

import {Link} from 'react-router-dom'

const ItemList = ({ product }) => {
    return (
        <article className='item-list'>
            <Link to={`/products/${product.genderProduct}/${product.categoryProduct}/abc123`}> {/* En lugar de abc123, tengo que recibir ID por props. */}
                <div className='container-img'>
                    <img src={product.imgProduct} alt="Product"/>
                    <img className='img-hover' src={product.imgProductH} alt="Product"/>
                </div>
                <p>{product.nameProduct}</p><br/>
                <span>${product.priceProduct}</span>
            </Link>
        </article>
    )
}

export default ItemList;