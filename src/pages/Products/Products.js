import React, { useState, useEffect } from 'react'

import { useParams, Redirect } from 'react-router-dom'

import { getFirestore } from '../../firebase'

import './products.scss'

import ItemList from '../../components/ItemList/ItemList'
import Loader from '../../components/Loader/Loader'

const Products = (props) => {

    const [loader, setLoader] = useState(true)

    const [limit, setLimit] = useState(12)

    const [items, setItems] = useState({})

    const { sex, category } = useParams()

    const [sizeOfCollection, setSizeOfCollection] = useState(0)

    const [err, setErr] = useState(false)
    
    useEffect(() => {
        setLoader(true)

        getFirestore().collection("items").get().then(querySnapshot => setSizeOfCollection(querySnapshot.size))

        const db = getFirestore()
        const itemCollection = db.collection("items")
        let filter

        if ( sex !== 'all' && category !== 'all') filter = itemCollection.where('sex', '==', sex).where('category', '==', category).limit(limit)
        else if ( category !== 'all' ) filter = itemCollection.where('category', '==', category).limit(limit)
        else if ( sex !== 'all' ) filter = itemCollection.where('sex', '==', sex).limit(limit)
        else filter = itemCollection.limit(limit)

        filter.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('querySnapshot.size === 0.')
                setErr(true)
                return
            }
            setSizeOfCollection(querySnapshot.size)
            setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        }).catch((error) => {
            console.log('Error to find the item. Error: ', error)
            setErr(true)
        }).finally(() => {
            setLoader(false)
        })
        // eslint-disable-next-line 
    }, [sex, category, limit])

    return (
        err ? <Redirect to = '/404' /> :
        loader ? <Loader/> :
        <>
            <h1 className='margin-t search'>{`${category} for ${sex}`}</h1>
            <section className='container-list-items'>
                    {
                        items.map(item => {
                            return (
                                <div key={item.id} className='container-item-list'>
                                    <ItemList 
                                        product = {item}
                                    />
                                </div>
                            )
                        })
                    }
            </section>
            {
                (limit <= sizeOfCollection) ?
                <button className='load-products' onClick = {() => setLimit(prevLimit => prevLimit+= prevLimit)}>Mostrar más.</button>
                :
                <button className='load-products not-cursor-pointer'>Has llegado al final.</button>
            }
        </>
    )
}

export default Products;