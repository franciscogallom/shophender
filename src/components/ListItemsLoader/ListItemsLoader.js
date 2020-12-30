import React from 'react'

import ItemListLoader from '../ItemListLoader/ItemListLoader'

const ListItemsLoader = () => {
    return (
        <section className = 'container-list-items'>
            <ItemListLoader />
            <ItemListLoader />
            <ItemListLoader />
            <ItemListLoader />
        </section>
    )
}

export default ListItemsLoader