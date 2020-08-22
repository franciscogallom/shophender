import React from 'react'

import HomeBanner from './HomeBanner'

import './home.scss'

const Home = () => {
    return (
        <section className='home-container margin-t'>
            <header>
                <h1>shophender</h1>
            </header>
            {/* Cambio los backgrounds y las posiciones con las distintas clases que paso por las props  */}
            <HomeBanner 
                bannerText = 'hombres' 
                bannerClass='banner-men' 
                bannerPosition='bannerRight'
                bannerGender = 'men'
            />
            <HomeBanner 
                bannerText = 'mujeres' 
                bannerClass='banner-women' 
                bannerPosition='bannerLeft'
                bannerGender = 'women'
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