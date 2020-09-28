import React, { useState, useEffect } from 'react'

import { getFirestore } from '../../firebase'

import'./listItems.scss';

import ItemList from '../ItemList/ItemList'

const ListItem = (props) => {

    const [items, setItems] = useState({})

    //const [sizeOfCollection, setSizeOfCollection] = useState(0)

    useEffect(() => {
        //getFirestore().collection("items").get().then(querySnapshot => setSizeOfCollection(querySnapshot.size))

        const db = getFirestore()
        const itemCollection = db.collection("items")
        let filter = itemCollection.where('sex', '==', `${props.filterSex}`).limit(4)
        const notFilter = itemCollection.limit(4)

        if (props.filterSex === null) filter = notFilter

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