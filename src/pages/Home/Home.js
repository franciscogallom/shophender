import React from 'react'

import './home.scss'

import HomeBanner from '../../components/HomeBanner/HomeBanner'
import ListItems from '../../components/ListItems/ListItems'

const Home = () => {

    return (
        <section className='home-container margin-t'>
            <header>
                <h1>shophender</h1>
            </header>
            
            <ListItems filterSex = 'men' />

            <HomeBanner  
                bannerText = 'hombres' 
                bannerPosition='bannerRight'
                bannerGender = 'men'
            />

            <ListItems filterSex = 'women' />

            <HomeBanner  
                bannerText = 'mujeres' 
                bannerPosition='bannerLeft'
                bannerGender = 'women'
            />

            <ListItems filterSex = {null} />

            <HomeBanner  
                bannerText = 'ver.todo' 
                bannerPosition='bannerRight'
                bannerGender = 'all'
            />
        </section>
    )
}

export default Home