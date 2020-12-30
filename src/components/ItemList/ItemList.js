import React, { Suspense } from 'react'

import './itemList.scss'

import { useNearScreen } from '../../hooks/useNearScreen'

const ItemList = React.lazy(
    () => import('./ItemListFunction')
)

export default function LazyItem ({ product }) {

    const { isNearScreen, fromRef } = useNearScreen()

    return  <div ref = { fromRef }>
                <Suspense fallback = { 'CARGANDO' }>
                    {isNearScreen ? <ItemList product = { product } /> : 'CARGANDO'}
                </Suspense>
            </div>

}