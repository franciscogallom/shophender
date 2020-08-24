import React from 'react'

import './itemList.scss'

import {Link} from 'react-router-dom'

const ItemList = (props) => {
    return (
        <article className='item-list'>
            <Link to={`/products/${props.genderProduct}/${props.categoryProduct}/abc123`}> {/* en lugar de abc123, tengo que recibir ID por props*/}
                <img src={props.imgProduct} alt="Product"/>
                <p>{props.nameProduct}</p><br/>
                <span>${props.priceProduct}</span>
            </Link>
        </article>
    )
}

export default ItemList;