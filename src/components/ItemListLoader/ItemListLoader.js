import React from 'react'

import './itemListLoader.scss'

const ItemListLoader = () => {
    return (
        <article className = 'item-list-loader'>
                <div className = 'img-item-loader'></div>
                <div className = 'name-item-loader'></div>
                <div className = 'price-item-loader'></div>
        </article>
    )
}

export default ItemListLoader