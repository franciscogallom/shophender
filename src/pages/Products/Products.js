import React from 'react'

import { Redirect } from 'react-router-dom'

import { useProducts } from './useProducts'

import './products.scss'

import ItemList from '../../components/ItemList/ItemList'
import Loader from '../../components/Loader/Loader'

const Products = (props) => {

    const { err, loader, limit, setLimit, items, sex, category, sizeOfCollection } = useProducts()

    return (
        err ? <Redirect to = '/404' /> :
        loader ? <Loader/> :
        <>
            <h1 className = 'margin-t search'>{`${category} for ${sex}`}</h1>
            <section className = 'container-list-items'>
                    {
                        items.map(item => {
                            return (
                                <div key = {item.id} className = 'container-item-list'>
                                    <ItemList 
                                        product = {item}
                                    />
                                </div>
                            )
                        })
                    }
            </section>
            {
                (limit <= sizeOfCollection) 
                    ?
                        <button className = 'load-products' onClick = {() => setLimit(prevLimit => prevLimit+= prevLimit)}>Mostrar más.</button>
                    :
                        <button className = 'load-products not-cursor-pointer'>Has llegado al final.</button>
            }
        </>
    )
}

export default Products;