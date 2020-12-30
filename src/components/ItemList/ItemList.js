import React, { Suspense } from 'react'

import './itemList.scss'

import { useNearScreen } from '../../hooks/useNearScreen'

import ItemListLoader from '../ItemListLoader/ItemListLoader'

const ItemList = React.lazy(
    () => import('./ItemListFunction')
)

export default function LazyItem ({ product }) {

    const { isNearScreen, fromRef } = useNearScreen()

    return  <div ref = { fromRef }>
                <Suspense fallback = { <ItemListLoader/> }>
                    {isNearScreen ? <ItemList product = { product } /> : <ItemListLoader/> }
                </Suspense>
            </div>

}