import React, { useState, useEffect } from 'react'

import { useParams, Redirect } from 'react-router-dom'

import { getProducts } from '../../firebase'

import './products.scss'

import ItemList from '../../components/ItemList/ItemList'
import Loader from '../../components/Loader/Loader'

const Products = (props) => {

    const [loader, setLoader] = useState(true)
    // Limite para los productos que quiero mostrar.
    const [limit, setLimit] = useState(12)

    const [items, setItems] = useState({})

    const { sex, category } = useParams()

    const [sizeOfCollection, setSizeOfCollection] = useState(0)

    const [err, setErr] = useState(false)
    
    useEffect(() => {
        getProducts (sex, category, limit, setLoader, setSizeOfCollection, setErr, setItems) 
    }, [sex, category, limit])

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