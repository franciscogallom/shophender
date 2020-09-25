import React, { useState, useEffect } from 'react'

import { getFirestore } from '../../firebase'

import'./listItems.scss';

import ItemList from '../ItemList/ItemList'

const ListItem = (props) => {

    const [items, setItems] = useState({})

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection("items")
        const filter = itemCollection.where('sex', '==', `${props.filterSex}`).limit(4)

        filter.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                props.history.push('/404')
                return
            }
            setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        }).catch((error) => {
            console.log('Error to find the item. Error: ', error)
            props.history.push('/404')
        })
        // eslint-disable-next-line 
    }, [])

    return (
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