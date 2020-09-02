import React from 'react'

import './itemList.scss'

import {Link} from 'react-router-dom'

const ItemList = (props) => {
    return (
        <article className='item-list'>
            <Link to={`/products/${props.genderProduct}/${props.categoryProduct}/abc123`}> {/* En lugar de abc123, tengo que recibir ID por props. */}
                <div className='container-img'>
                    <img src={props.imgProduct} alt="Product"/>
                    <img className='img-hover' src={props.imgProductH} alt="Product"/>
                </div>
                <p>{props.nameProduct}</p><br/>
                <span>${props.priceProduct}</span>
            </Link>
        </article>
    )
}

export default ItemList;