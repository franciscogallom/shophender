import React from 'react'

import HomeBanner from '../HomeBanner/HomeBanner'
import ListItems from '../ListItems/ListItems'

import './home.scss'

// DELETE
import imgPruebaHombre from '../../assets/img/h-buzo-1.jpg'
import imgPruebaHombreH from '../../assets/img/h-buzo-1-h.png'
import imgPruebaMujer from '../../assets/img/m-buzo-1.webp'
import imgPruebaMujerH from '../../assets/img/m-buzo-1-h.webp'
import imgPrueba from '../../assets/img/m-zap-1.webp'
import imgPruebaH from '../../assets/img/m-zap-1-h.webp'
// DELETE

const Home = () => {
    return (
        <section className='home-container margin-t'>
            <header>
                <h1>shophender</h1>
            </header>

            {/* Cambio los backgrounds y las posiciones con las distintas clases que paso por las props  */}
            
            <ListItems 
                imgProduct={imgPrueba} 
                imgProductH={imgPruebaH} 
                nameProduct='Zapatillas Nike Air Zoom' 
                priceProduct='10480' 
                genderProduct='women'
                categoryProduct='shoes'
            />

            <HomeBanner  
                bannerText = 'hombres' 
                bannerClass='banner-men' 
                bannerPosition='bannerRight'
                bannerGender = 'men'
            />

            <ListItems 
                imgProduct={imgPruebaHombre} 
                imgProductH={imgPruebaHombreH} 
                nameProduct='Buzo Nike HR40' 
                priceProduct='5670' 
                genderProduct='men'
                categoryProduct='coats'
            />

            <HomeBanner  
                bannerText = 'mujeres' 
                bannerClass='banner-women' 
                bannerPosition='bannerLeft'
                bannerGender = 'women'
            />

            <ListItems 
                imgProduct={imgPruebaMujer} 
                imgProductH={imgPruebaMujerH} 
                nameProduct='Buzo Top Adidas' 
                priceProduct='4950'
                genderProduct='women'
                categoryProduct='coats'
            />

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