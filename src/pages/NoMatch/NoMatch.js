import React from 'react'

import './noMatch.scss'

import noMatchGif from '../../assets/img/404.gif'
import sadSvg from '../../assets/img/sad.svg'
import useSEO from '../../hooks/useSEO'

const NoMatch = ({ text = 'Lo sentimos! No hemos encontrado lo que estas buscando. '}) => {

    useSEO('404', 'algo salió mal...')

    return (
        <section className = 'margin-t nomatch-container'>
            <img className = 'img-original' src = {noMatchGif} alt = "404"/>
            <img className = 'img-rotate' src = {noMatchGif} alt = "404"/>
            <p>{text}<br/><img src = {sadSvg} alt = "sad"/></p>
        </section>
    )
}

export default NoMatch