import React, { Suspense } from 'react'

import'./listItems.scss';

import { useNearScreen } from '../../hooks/useNearScreen'

const ListItem = React.lazy(
    () => import('./ListItemFunction')
)

export default function LazyListItems ({ items }) {

    const { isNearScreen, fromRef } = useNearScreen()

    return  <div ref = { fromRef }>
                <Suspense fallback = { 'Cargando' }>
                    {isNearScreen ? <ListItem items = { items } /> : 'CARGANDO'}
                </Suspense>
            </div>

}