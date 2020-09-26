import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { getFirestore } from '../../firebase'

import './products.scss'

import ItemList from '../../components/ItemList/ItemList'
import Loader from '../../components/Loader/Loader'

const Products = (props) => {

    const [loader, setLoader] = useState(true)

    const [items, setItems] = useState({})

    const { sex, category } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection("items")
        let filter = itemCollection

        if ( sex !== 'all' && category !== 'all') filter = itemCollection.where('sex', '==', sex).where('category', '==', category)
        else if ( category !== 'all' ) filter = itemCollection.where('category', '==', category)
        else if ( sex !== 'all' ) filter = itemCollection.where('sex', '==', sex)

        filter.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                props.history.push('/404')
                return
            }
            setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        }).catch((error) => {
            console.log('Error to find the item. Error: ', error)
            props.history.push('/404')
        }).finally(() => {
            setLoader(false)
        })
        // eslint-disable-next-line 
    }, [sex, category])

    return (
        loader ? <Loader/> :
        <>
            <h1 className='margin-t search'>{`${category} for ${sex}`}</h1>
            <section className='container-list-items'>
                    {
                        items.map(item => {
                            return (
                                <div className='container-item-list'>
                                    <ItemList 
                                        product = {item}
                                        key = {item.id}
                                    />
                                </div>
                            )
                        })
                    }
            </section>
        </>
    )
}

export default Products;