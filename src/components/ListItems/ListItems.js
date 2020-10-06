import React from 'react'

import'./listItems.scss';

import ItemList from '../ItemList/ItemList'

const ListItem = ({ items }) => {

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

export default ListItem