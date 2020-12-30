import React from 'react'

import'./listItems.scss';

import { useNearScreen } from '../../hooks/useNearScreen'

import ItemList from '../ItemList/ItemList'

function ListItem ({ items }) {

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

export default function LazyListItems ({ items }) {

    const { isNearScreen, fromRef } = useNearScreen()

    return  <div ref = { fromRef }>
                {isNearScreen ? <ListItem items = { items } /> : 'CARGANDO'}
            </div>

}