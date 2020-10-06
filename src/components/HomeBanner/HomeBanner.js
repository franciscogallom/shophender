import React from 'react'

import { Link } from 'react-router-dom'

import './homeBanner.scss'

const HomeBanner = (props) => {
    return (
        <section>
            <Link
                to = {`/products/${props.bannerGender}/all`} 
                className = {`home-banner ${props.bannerGender} ${props.bannerPosition}`}
            >
                {props.bannerText}
            </Link>
        </section>
    )
}

export default HomeBanner