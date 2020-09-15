import React from 'react'

import HomeBanner from '../../components/HomeBanner/HomeBanner'
import ListItems from '../../components/ListItems/ListItems'

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
            
            <ListItems 
                imgProduct={imgPrueba} 
                imgProductH={imgPruebaH} 
                nameProduct='Zapatillas Nike Air Zoom' 
                pricePerQuantity='10480'
                unitPrice='10480' 
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
                pricePerQuantity='5670'
                unitPrice='5670' 
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
                pricePerQuantity='4950'
                unitPrice='4950'
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