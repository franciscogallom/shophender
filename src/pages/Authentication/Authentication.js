import React from 'react'

import './authentication.scss'

import Auth from '../../components/Auth/Auth'
import useSEO from '../../hooks/useSEO';

const Authentication = () => {

    const isMobileOrTablet = window.screen.width < 1024 ? 'is-mobile-or-tablet' : '';

    useSEO('Authentication', 'welcome')

    return(
        <section className = {`authentication-container margin-t ${isMobileOrTablet}`}>
            <Auth/>
        </section>
    )
}

export default Authentication