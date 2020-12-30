import React from 'react'

import ItemList from '../ItemList/ItemList'

export default function ListItemFunction ({ items }) {

    return (
        Object.keys(items).length !== 0 &&
        <section className = 'container-list-items'>
            {
                items.map(item => {
                    return (
                        <ItemList 
                            product = {item}
                            key = {item.id}
                        />
                    )
                })
            }
        </section>
    )
}