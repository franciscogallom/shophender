import React, { useState, useEffect } from 'react'

import { Redirect } from 'react-router-dom'

import './home.scss'

import { getItemsForHome } from '../../firebase'

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
        // Obtengo cuatro productos de hombre, cuatro de mujer, y cuatro aleatorios.
        getItemsForHome('men', setItemsMen, setLoader, setErr)
        getItemsForHome('women', setItemsWomen, setLoader, setErr)
        getItemsForHome('', setItemsAll, setLoader, setErr)
    }, [])

    return (
        err ? <Redirect to = '/404' /> :
        loader ? <Loader /> :
        <section className = 'home-container margin-t'>
            <header>
                <h1>shophender</h1>
            </header>
            <ListItems items = {itemsMen} />
            <HomeBanner  
                bannerText = 'hombres' 
                bannerPosition = 'bannerRight'
                bannerGender = 'men'
            />
            <ListItems items = {itemsWomen} />
            <HomeBanner  
                bannerText = 'mujeres' 
                bannerPosition = 'bannerLeft'
                bannerGender = 'women'
            />
            <ListItems items = {itemsAll} />
            <HomeBanner  
                bannerText = 'ver.todo' 
                bannerPosition = 'bannerRight'
                bannerGender = 'all'
            />
        </section>
    )
}

export default Home