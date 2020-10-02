import React, { useState, useEffect } from 'react'

import { getFirestore } from '../../firebase'

import'./listItems.scss';

import ItemList from '../ItemList/ItemList'
import Alert from '../Alert/Alert'

const ListItem = (props) => {

    const [items, setItems] = useState({})

    const [errorAlert, setErrorAlert] = useState('')

    useEffect(() => {

        const db = getFirestore()
        const itemCollection = db.collection("items")
        let filter = itemCollection.where('sex', '==', `${props.filterSex}`).limit(4)
        const notFilter = itemCollection.limit(4)

        if (props.filterSex === null) filter = notFilter

        filter.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                setErrorAlert('No encontramos el producto.')
                return
            }
            setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        }).catch((error) => setErrorAlert(error))
        // eslint-disable-next-line 
    }, [])

    return (
        errorAlert !== '' ? <Alert text = {errorAlert} handleAlert = {() => setErrorAlert('')} /> :
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