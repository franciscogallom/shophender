import React, { useState, useEffect } from 'react'

import { Redirect } from 'react-router-dom'

import './home.scss'

import { getFirestore } from '../../firebase'

import HomeBanner from '../../components/HomeBanner/HomeBanner'
import ListItems from '../../components/ListItems/ListItems'
import Loader from '../../components/Loader/Loader'

const Home = () => {

    const [itemsMen, setItemsMen] = useState({})
    const [itemsWomen, setItemsWomen] = useState({})
    const [itemsAll, setItemsAll] = useState({})

    const [err, setErr] = useState(false)

    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        const db = getFirestore()
        const itemCollection = db.collection("items")
        let itemsMen = itemCollection.where('sex', '==', 'men').limit(4)
        let itemsWomen = itemCollection.where('sex', '==', 'women').limit(4)
        let itemsAll = itemCollection.limit(4)
        
        // Obtengo cuatro productos de hombre.
        itemsMen.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('querySnapshot.size === 0.')
                setErr(true)
                return
            }
            setItemsMen(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
        .catch((error) => {
            console.log('Error to find the item. Error: ', error)
            setErr(true)
        })
        .finally(() => {
            setLoader(false)
        })

        // Obtengo cuatro productos de mujer.
        itemsWomen.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('querySnapshot.size === 0.')
                setErr(true)
                return
            }
            setItemsWomen(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
        .catch((error) => {
            console.log('Error to find the item. Error: ', error)
            setErr(true)
        })
        .finally(() => {
            setLoader(false)
        })

        // Obtengo cuatro aleatorios.
        itemsAll.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('querySnapshot.size === 0.')
                setErr(true)
                return
            }
            setItemsAll(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
        .catch((error) => {
            console.log('Error to find the item. Error: ', error)
            setErr(true)
        })
        .finally(() => {
            setLoader(false)
        })
        // eslint-disable-next-line 
    }, [])

    return (
        err ? <Redirect to = '/404' /> :
        loader ? <Loader /> :
        <section className='home-container margin-t'>
            <header>
                <h1>shophender</h1>
            </header>
            
            <ListItems items = {itemsMen} />

            <HomeBanner  
                bannerText = 'hombres' 
                bannerPosition='bannerRight'
                bannerGender = 'men'
            />

            <ListItems items = {itemsWomen} />

            <HomeBanner  
                bannerText = 'mujeres' 
                bannerPosition='bannerLeft'
                bannerGender = 'women'
            />

            <ListItems items = {itemsAll} />

            <HomeBanner  
                bannerText = 'ver.todo' 
                bannerPosition='bannerRight'
                bannerGender = 'all'
            />
        </section>
    )
}

export default Home