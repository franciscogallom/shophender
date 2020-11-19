import React from 'react'

import './authentication.scss'

import Auth from '../../components/Auth/Auth'

const Authentication = () => {

    const isMobileOrTablet = window.screen.width < 1024 ? 'is-mobile-or-tablet' : '';

    return(
        <section className = {`authentication-container margin-t ${isMobileOrTablet}`}>
            <Auth/>
        </section>
    )
}

export default Authentication