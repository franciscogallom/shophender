import React from 'react'

import { Redirect } from 'react-router-dom'

import { useItemsForHome } from '../../hooks/useItemsForHome'

import './home.scss'

import HomeBanner from '../../components/HomeBanner/HomeBanner'
import ListItems from '../../components/ListItems/ListItems'
import Loader from '../../components/Loader/Loader'

const Home = () => {

    const { err, loader, data } = useItemsForHome()

    return (
        err ? <Redirect to = '/404' /> :
        loader ? <Loader /> :
        <section className = 'home-container margin-t'>
            <header>
                <h1>shophender</h1>
            </header>
            {
                data.map(data => {
                    return(
                        <>
                            <ListItems items = {data.items} />
                            <HomeBanner  
                                bannerText = {data.sex}
                                bannerPosition = {data.position}
                                bannerGender = {data.link}
                            />
                        </>
                    )
                })
            }
        </section>
    )
}

export default Home