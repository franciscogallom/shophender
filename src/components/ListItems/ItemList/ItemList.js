import React from 'react'

import './itemList.scss'

const ItemList = (props) => {
    return (
        <article className='item-list'>
            <img src={props.imgProduct} alt="Product"/>
            <p>{props.nameProduct}</p><br/>
            <span>${props.priceProduct}</span>
        </article>
    )
}

export default ItemList;