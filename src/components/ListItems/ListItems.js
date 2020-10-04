import React, { useState, useEffect } from 'react'

import  { Redirect } from 'react-router-dom'

import { getFirestore } from '../../firebase'

import'./listItems.scss';

import ItemList from '../ItemList/ItemList'

const ListItem = (props) => {

    const [items, setItems] = useState({})

    const [err, setErr] = useState(false)

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection("items")
        let filter = itemCollection.where('sex', '==', `${props.filterSex}`).limit(4)
        const notFilter = itemCollection.limit(4)

        if (props.filterSex === null) filter = notFilter

        filter.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('querySnapshot.size === 0.')
                setErr(true)
                return
            }
            setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
        .catch((error) => {
            console.log('Error to find the item. Error: ', error)
            setErr(true)
        })
        // eslint-disable-next-line 
    }, [])

    return (
        err ? <Redirect to = '/404' /> :
        Object.keys(items).length !== 0 &&
        <section className='container-list-items'>
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