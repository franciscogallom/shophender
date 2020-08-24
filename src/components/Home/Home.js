import React from 'react'

import HomeBanner from './HomeBanner'
import ListItems from '../ListItems/ListItems'

import './home.scss'

// DELETE
import imgPruebaHombre from '../../assets/img/img-prueba-hombre.jpg'
import imgPruebaMujer from '../../assets/img/img-prueba-mujer.webp'
import imgPrueba from '../../assets/img/img-prueba.webp'
// DELETE

const Home = () => {
    return (
        <section className='home-container margin-t'>
            <header>
                <h1>shophender</h1>
            </header>

            {/* Cambio los backgrounds y las posiciones con las distintas clases que paso por las props  */}
            
            <ListItems imgProduct={imgPrueba} nameProduct='Zapatillas Nike Air Zoom' priceProduct='10480' />

            <HomeBanner 
                bannerText = 'hombres' 
                bannerClass='banner-men' 
                bannerPosition='bannerRight'
                bannerGender = 'men'
            />

            <ListItems imgProduct={imgPruebaHombre} nameProduct='Buzo Nike HR40' priceProduct='5670' />

            <HomeBanner 
                bannerText = 'mujeres' 
                bannerClass='banner-women' 
                bannerPosition='bannerLeft'
                bannerGender = 'women'
            />

            <ListItems imgProduct={imgPruebaMujer} nameProduct='Buzo Top Adidas' priceProduct='4950' />

            <HomeBanner 
                bannerText = 'ver.todo' 
                bannerClass='banner-all' 
                bannerPosition='bannerRight'
                bannerGender = 'all'
            />
        </section>
    )
}

export default Home;