import React from 'react'

import { Redirect } from 'react-router-dom'

import { useItemsForHome } from './useItemsForHome'

import './home.scss'

import HomeBanner from '../../components/HomeBanner/HomeBanner'
import ListItems from '../../components/ListItems/ListItems'
import Loader from '../../components/Loader/Loader'
import useSEO from "../../hooks/useSEO"

const Home = () => {

    const { err, loader, data } = useItemsForHome()
    useSEO("shophender, la indumentaria y el calzado más exclusivo", "home")

    return (
        err ? <Redirect to = '/404' /> :
        loader ? <Loader /> :
        <section className = 'home-container margin-t'>
            <header>
                <h1>shophender</h1>
            </header>
            {
                data.map((data, index) => {
                    return(
                        <React.Fragment key={index}>
                            <ListItems items = {data.items} />
                            <HomeBanner  
                                bannerText = {data.sex}
                                bannerPosition = {data.position}
                                bannerGender = {data.link}
                            />
                        </React.Fragment>
                    )
                })
            }
        </section>
    )
}

export default Home