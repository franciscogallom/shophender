import React, { Suspense } from 'react'

import'./listItems.scss';

import { useNearScreen } from '../../hooks/useNearScreen'

import ListItemsLoader from '../ListItemsLoader/ListItemsLoader'

const ListItem = React.lazy(
    () => import('./ListItemFunction')
)

export default function LazyListItems ({ items }) {

    const { isNearScreen, fromRef } = useNearScreen()

    return  <div ref = { fromRef }>
                <Suspense fallback = { <ListItemsLoader/> }>
                    {isNearScreen ? <ListItem items = { items } /> : <ListItemsLoader/>}
                </Suspense>
            </div>

}