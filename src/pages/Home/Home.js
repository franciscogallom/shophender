import React, { useState } from 'react'

import './home.scss'

import HomeBanner from '../../components/HomeBanner/HomeBanner'
import ListItems from '../../components/ListItems/ListItems'
import Loader from '../../components/Loader/Loader'
import { useEffect } from 'react'

const Home = () => {

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000)
    })

    return (
        loader ? <Loader/> :
        <section className='home-container margin-t'>
            <header>
                <h1>shophender</h1>
            </header>
            
            <ListItems 
                filterSex = 'men'
            />

            <HomeBanner  
                bannerText = 'hombres' 
                bannerClass='banner-men' 
                bannerPosition='bannerRight'
                bannerGender = 'men'
            />

            <ListItems 
                filterSex = 'men'
            />

            <HomeBanner  
                bannerText = 'mujeres' 
                bannerClass='banner-women' 
                bannerPosition='bannerLeft'
                bannerGender = 'women'
            />

            <ListItems 
                filterSex = 'men'
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

export default Home